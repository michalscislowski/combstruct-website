import * as THREE from 'three';
import {stockBounds,endTreatment,DEPTH,THICKNESS} from '../construction/stock-profile.js';
import {nativeVariantKey} from '../parts/families.js';

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
 // In the stockpile the length runs along X, profile width along Z and
 // thickness along Y. Align the whole plane, not just the longitudinal axis.
 const feedFrame=new THREE.Matrix4().makeBasis(V(1,0,0),V(0,0,1),V(0,-1,0));
 const toFeed=feedFrame.multiply(installedFrame.invert()),rotation=new THREE.Quaternion().setFromRotationMatrix(toFeed).invert();
 const target=board.bounds.getCenter(V()),geometry=board.mesh.geometry.clone().translate(...board.mesh.position.toArray()).translate(-target.x,-target.y,-target.z).applyMatrix4(toFeed);
 geometry.computeBoundingBox();const center=geometry.boundingBox.getCenter(V());
 geometry.translate(-center.x,-center.y,-center.z);target.add(center.applyQuaternion(rotation));
 // Mirrored ends are the same manufactured stock. Stack them in one consistent
 // orientation, then turn the whole board over in transit when required.
 const key=JSON.parse(nativeVariantKey(board)),t=endTreatment(board.stock),ends=[t.extendStart||0,t.extendEnd||0,t.extraStartTrim||0,t.extraEndTrim||0];
 if((board.trim||null)!==key[1]||JSON.stringify(ends)!==JSON.stringify(key[3]||[0,0,0,0])){
  const flip=new THREE.Quaternion().setFromAxisAngle(V(0,0,1),Math.PI);
  geometry.applyQuaternion(flip);rotation.multiply(flip.clone().invert());
 }
 geometry.computeBoundingBox();
 return{geometry,target,rotation,dimensions:geometry.boundingBox.getSize(V()).toArray()};
}

export function createRobotInventory(records,operations){
 const groups=new Map(),picks=operations.flat().map(index=>{
  const board=records[index],key=nativeVariantKey(board);
  if(!groups.has(key))groups.set(key,{key,profile:board.trim?'ending':'ordinary',prepared:prepareRobotBoard(board),uses:0});
  const stack=groups.get(key);stack.uses++;return{index,stack,prepared:prepareRobotBoard(board)};
 });
 const stacks=[...groups.values()].sort((a,b)=>a.profile.localeCompare(b.profile)||b.prepared.dimensions[0]-a.prepared.dimensions[0]);
 const rows={ordinary:0,ending:0};
 for(const stack of stacks){
  stack.column=stack.profile==='ordinary'?0:1;stack.row=rows[stack.profile]++;
  stack.id=(stack.column===0?'A':'B')+(stack.row+1);
  // Representative supply for the selected cycles; not the full house BOM.
  stack.initial=12+stack.uses;
 }
 return{stacks,picks};
}

// Pure, reversible inventory: seeking/restarting never consumes stock twice.
export function remainingRobotStock(inventory,picked){
 const counts=new Map(inventory.stacks.map(stack=>[stack.id,stack.initial]));
 for(const pick of inventory.picks.slice(0,picked))counts.set(pick.stack.id,counts.get(pick.stack.id)-1);
 return counts;
}
