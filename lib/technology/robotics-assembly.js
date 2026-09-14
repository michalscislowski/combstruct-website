import * as THREE from 'three';
import {stockBounds,DEPTH,THICKNESS} from '../construction/stock-profile.js';

const V=(...v)=>new THREE.Vector3(...v),EPS=1e-5;
function span(geometry,axis){
 const p=geometry.attributes.position;let lo=Infinity,hi=-Infinity;
 for(let i=0;i<p.count;i++){const value=p.getX(i)*axis[0]+p.getY(i)*axis[1]+p.getZ(i)*axis[2];lo=Math.min(lo,value);hi=Math.max(hi,value);}
 return hi-lo;
}
export function isCompleteRobotBoard(board){
 // Select complete native stock, not a remnant produced by opening/skew cuts.
 // A multi-module stock declaration alone is insufficient: a 2 m source can
 // leave a 24 cm fragment in the installed model.
 if(board.custom||board.stock.pixels<2||board.connectorCuts.length)return false;
 const [lo,hi]=stockBounds(board.stock,false),g=board.mesh.geometry;
 return Math.abs(span(g,board.along)-(hi-lo))<EPS&&Math.abs(span(g,board.normal)-DEPTH)<EPS&&Math.abs(span(g,board.thick)-THICKNESS)<EPS;
}
export function selectRobotOperations(records,starts){
 return starts.slice(0,-1).map((start,stage)=>{
  const indices=[];
  for(let i=start;i<starts[stage+1]&&indices.length<4;i++)if(isCompleteRobotBoard(records[i]))indices.push(i);
  if(indices.length!==4)throw new Error('Missing complete native boards for the robot demonstration: '+stage);
  return indices;
 });
}
export function prepareRobotBoard(board){
 if(!isCompleteRobotBoard(board))throw new Error('Robot pickup requires a complete native board: '+board.id);
 const along=V(...board.along).normalize(),normal=V(...board.normal).normalize();
 const installedFrame=new THREE.Matrix4().makeBasis(along,normal,along.clone().cross(normal));
 // On the feed table the length runs along X, profile width along Z and
 // thickness along Y. Align the whole plane, not just the longitudinal axis.
 const feedFrame=new THREE.Matrix4().makeBasis(V(1,0,0),V(0,0,1),V(0,-1,0));
 const toFeed=feedFrame.multiply(installedFrame.invert()),rotation=new THREE.Quaternion().setFromRotationMatrix(toFeed).invert();
 const target=board.bounds.getCenter(V()),geometry=board.mesh.geometry.clone().translate(...board.mesh.position.toArray()).translate(-target.x,-target.y,-target.z).applyMatrix4(toFeed);
 geometry.computeBoundingBox();const center=geometry.boundingBox.getCenter(V());
 geometry.translate(-center.x,-center.y,-center.z);target.add(center.applyQuaternion(rotation));geometry.computeBoundingBox();
 return{geometry,target,rotation,dimensions:geometry.boundingBox.getSize(V()).toArray()};
}
