import * as THREE from 'three';
import {createConstruction,P,T,Z} from '../construction/core.js';
import {roofWallLap} from '../construction/roof-wall-lap.js';
import {roofRidgeLap} from '../construction/roof-ridge-lap.js';

// Colour only the actual shared face of the two long plies, including slot
// reliefs. This overlay is a reading aid and is not a construction element.
function lapOverlay(boards){
 const faces=b=>{
  const p=b.mesh.geometry.attributes.position,triangles=[];
  for(let i=0;i<p.count;i+=3){let tri=[0,1,2].map(k=>new THREE.Vector3().fromBufferAttribute(p,i+k).add(b.mesh.position));
   if(tri.some(v=>Math.abs(v.z-(b.layer===0?-T:0))>1e-6))continue;
   tri=tri.map(v=>new THREE.Vector2(v.x,v.y));const a=tri[1].clone().sub(tri[0]).cross(tri[2].clone().sub(tri[0]));
   if(Math.abs(a)<1e-12)continue;if(a<0)tri.reverse();triangles.push(tri);
  }return triangles;
 };
 const [left,right]=boards.filter(b=>b.kind==='roof-slope'&&b.ridgeLap==='long').map(faces),vertices=[];
 for(const a of left)for(const b of right){let poly=a;
  for(let edge=0;edge<3;edge++){
   const v=b[edge],e=b[(edge+1)%3].clone().sub(v),n=new THREE.Vector2(e.y,-e.x),c=n.dot(v),out=[];
   for(let i=0;i<poly.length;i++){const p=poly[i],q=poly[(i+1)%poly.length],dp=c-n.dot(p),dq=c-n.dot(q);if(dp>=0)out.push(p);if((dp>=0)!==(dq>=0))out.push(p.clone().lerp(q,dp/(dp-dq)));}poly=out;
  }
  for(let i=1;i<poly.length-1;i++)for(const z of [-T-.0005,T+.0005])for(const p of [poly[0],poly[i],poly[i+1]])vertices.push(p.x,p.y,z);
 }
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
 const mesh=new THREE.Mesh(g,new THREE.MeshBasicMaterial({color:'#9f83b7',side:THREE.DoubleSide,transparent:true,opacity:.85,depthWrite:false}));mesh.name='lap-area-overlay';return mesh;
}

export function ridgeJointScene({pitch=45,ridgeHouse='principle'}={},materials){
 const root=new THREE.Group(),main=new THREE.Group(),crosses=[];
 root.add(main);main.name='ridge-plies';
 // The two presets reproduce the roof slot phase used by the house generators.
 const phase=ridgeHouse==='principle'?-P/2:roofWallLap({pitch,spanHalf:(ridgeHouse==='90'?16:13)*P/2,ridgeUnderside:0}).phaseOrigin;
 const ridge=roofRidgeLap({pitch,phaseOrigin:phase,centerY:0}),engine=createConstruction(materials);
 for(const side of [-1,1]){
  const {q,along,normal}=ridge.frame(side),cross=new THREE.Group();cross.userData.normal=normal;root.add(cross);crosses.push(cross);
  for(const layer of [0,1]){
   const end=ridge.treatment(side,layer);
   engine.addBoard(main,{start:ridge.rafterStart,pixels:6,layer},along,normal,Z,new THREE.Vector3(),{kind:'roof-slope',roofSide:side,ridgeLap:end.role},0,[{n:q,c:.8},...end.planes],end.regions);
   engine.addBoard(cross,{start:0,pixels:2,layer},Z,normal.clone().negate(),along,new THREE.Vector3(0,0,-P).addScaledVector(along,phase+P),{kind:'roof-cross',roofSide:side},0,[{n:q.clone().negate(),c:0}]);
  }
 }
 for(const b of engine.boards){b.mesh.material=b.roofSide===-1?materials.wood:materials.roof;b.mesh.userData.base=b.mesh.position.clone();b.mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(b.mesh.geometry,30),materials.edges));}
 const overlay=lapOverlay(engine.boards);root.add(overlay);
 let amount=0,showCross=true,insertion=0;
 function update(){
  for(const b of engine.boards)if(b.kind==='roof-slope')b.mesh.position.copy(b.mesh.userData.base).addScaledVector(Z,(b.layer===0?-1:1)*amount*.25);
  for(const cross of crosses){cross.visible=showCross&&amount===0;cross.position.copy(cross.userData.normal).multiplyScalar(insertion);}
  overlay.visible=amount===0;
 }
 return{root,direction:new THREE.Vector3(0,.15,3),annotation:'Kalenica · fiolet oznacza powierzchnię zakładki A/B',
  spread(v){amount=v;update();},crossing(v){showCross=v;update();},insert(mm){insertion=mm/1000;update();},
  ridgeJoint:{pitch,ridgeHouse,phaseOrigin:phase,boards:engine.boards,ridge},
 };
}
