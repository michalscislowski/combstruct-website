// Geometric checks of all handbook variants. These are not strength checks.
import * as THREE from 'three';
import {roofJointScene} from '../../technology/roof-joint.js';
import {roofWallLap} from '../roof-wall-lap.js';
import {H,HALF,T} from '../core.js';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const wood=new THREE.MeshStandardMaterial(),edges=new THREE.LineBasicMaterial();
const materials={wood,roof:wood,edges},eps=2e-6;
function clip(poly,{n,c}){
 const out=[];
 for(let i=0;i<poly.length;i++){
  const a=poly[i],b=poly[(i+1)%poly.length],da=c-n.dot(a),db=c-n.dot(b);
  if(da>=0)out.push(a);
  if((da>=0)!==(db>=0))out.push(a.clone().lerp(b,da/(da-db)));
 }
 return out;
}
// Clip rendered triangles against the interior of the swept slot.
function obstructs(board,planes){
 const g=board.mesh.geometry,p=g.attributes.position,count=g.index?.count||p.count;
 for(let i=0;i<count;i+=3){
  let poly=[0,1,2].map(k=>new THREE.Vector3().fromBufferAttribute(p,g.index?g.index.getX(i+k):i+k).add(board.mesh.position));
  for(const q of planes){poly=clip(poly,{n:q.n,c:q.c-eps});if(poly.length<3)break;}
  if(poly.length<3)continue;
  for(let j=1;j<poly.length-1;j++)if(poly[j].clone().sub(poly[0]).cross(poly[j+1].clone().sub(poly[0])).length()>1e-10)return true;
 }
 return false;
}
function signature(boards){return boards.map(b=>JSON.stringify([b.mesh.position.toArray(),[...b.mesh.geometry.attributes.position.array]])).join('|');}
let cases=0,slotChecks=0;const slabs=new Map(),summary=[];
for(const knee of [true,false])for(const eave of [true,false])for(let pitch=20;pitch<=60;pitch++){
 const scene=roofJointScene({pitch,knee,eave},materials),boards=scene.roofJoint.boards;
 const lap=roofWallLap({pitch,spanHalf:HALF+T,ridgeUnderside:(knee?0:H)+HALF*Math.tan(pitch*Math.PI/180)}),side=lap.side(1);
 assert.equal(scene.roofJoint.slabBeveled,false);
 assert(boards.some(b=>b.roofLap==='long-lap'));assert(boards.some(b=>b.roofLap==='continuous'));
 for(const b of boards)assert([...b.mesh.geometry.attributes.position.array].every(Number.isFinite));
 for(const slot of eave?['inner','outer']:['inner'])for(const b of boards.filter(b=>b.roofLap==='long-lap'||b.roofLap==='short-bearing'||b.kind==='roof-filler')){
  assert(!obstructs(b,side.slotPlanes(slot,.3)),`Blocked slot: ${pitch} ${knee} ${eave} ${slot} ${b.id}`);slotChecks++;
 }
 const floors=boards.filter(b=>b.kind==='ceiling');
 if(!knee){
  assert.equal(floors.length,2);const shape=signature(floors),key=String(eave);
  if(slabs.has(key))assert.equal(shape,slabs.get(key),'Slab must not depend on roof pitch');else slabs.set(key,shape);
  assert(boards.some(b=>b.kind==='roof-filler'));
 }
 scene.spread(1);assert.equal(scene.root.getObjectByName('transverse-roof-ribs').visible,false);
 scene.spread(0);scene.crossing(true);scene.insert(300);
 assert(Math.abs(scene.root.getObjectByName('transverse-roof-ribs').position.length()-.3)<1e-8);
 if([20,35,45,60].includes(pitch))summary.push({pitch,knee,eave,boards:boards.length});
 scene.root.traverse(o=>o.geometry?.dispose());cases++;
}
const report={cases,slotChecks,unbevelledSlabInvariant:true,finiteGeometry:true,range:[20,60],strengthValidated:false,samples:summary};
fs.writeFileSync('lib/construction/qa/roof-wall-laps.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
