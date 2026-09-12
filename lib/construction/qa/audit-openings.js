// Physical regression: clear openings and continuous native rib frames.
import * as THREE from 'three';
import {MeshBVH,acceleratedRaycast} from 'three-mesh-bvh';
import {buildStructure as build90} from '../90/structure.js';
import {buildStructure as build30} from '../30/structure.js';
import assert from 'node:assert/strict';
import fs from 'node:fs';
THREE.Mesh.prototype.raycast=acceleratedRaycast;
const P=2.5/6,T=.018,H=.24,tol=.00001;
const mat=new THREE.MeshStandardMaterial({side:THREE.DoubleSide});
const model=build90({wood:mat,end:mat});model.root.updateMatrixWorld(true);
const entries=model.boards.map(b=>{b.mesh.geometry.boundsTree=new MeshBVH(b.mesh.geometry);return{b,box:new THREE.Box3().setFromObject(b.mesh)}});
const ray=new THREE.Raycaster(),dir=new THREE.Vector3(.823,.419,.383).normalize();
function inside(e,p){if(!e.box.clone().expandByScalar(tol).containsPoint(p))return false;ray.set(p,dir);ray.near=1e-7;ray.far=30;const hits=ray.intersectObject(e.b.mesh,false).map(h=>h.distance).sort((a,b)=>a-b),unique=[];for(const d of hits)if(!unique.length||d-unique.at(-1)>1e-7)unique.push(d);return unique.length%2===1;}
const walls=[];let points=0;
for(const w of model.wallPanels)for(const h of w.holes){
 const origin=new THREE.Vector3(w.origin.x,w.origin.y,w.origin.z),u=new THREE.Vector3(w.axis===0?1:0,0,w.axis===1?1:0),Y=new THREE.Vector3(0,1,0),normal=w.normal;
 const onWall=entries.filter(e=>e.b.wallId===w.id);
 const coverage=(axis,station,from,to)=>{
  assert(Math.abs(station/P-Math.round(station/P))<1e-7,`${h.id}: frame off module`);
  const candidates=onWall.filter(e=>e.b.axis===axis);
  // Follow the continuous paired rib. A native 24 cm ending can shorten
  // one ply at a junction; its full companion must bridge that interval.
  for(let i=0;i<=32;i++){
   const run=from+tol+(to-from-2*tol)*i/32;
   const probes=[-T/2,T/2].map(ply=>origin.clone().addScaledVector(u,axis===1?station+ply:run).addScaledVector(Y,axis===1?run:station+ply).addScaledVector(normal,axis===1?.06:-.06));
   assert(probes.some(p=>candidates.some(e=>inside(e,p))),`${w.id}/${h.id}: missing ${axis===1?'jamb':'horizontal frame'} at ${probes[0].toArray()}`);points++;
  }
 };
 coverage(1,h.u0-T,h.v0,h.v1);coverage(1,h.u1+T,h.v0,h.v1);
 coverage(0,h.v1+T,h.u0,h.u1);if(h.kind==='window')coverage(0,h.v0-T,h.u0,h.u1);
 const box=new THREE.Box3(new THREE.Vector3(h.world.x0,h.world.y0,h.world.z0),new THREE.Vector3(h.world.x1,h.world.y1,h.world.z1));
 for(const e of entries){const overlap=box.clone().intersect(e.box);if(!overlap.isEmpty()&&Math.min(...overlap.getSize(new THREE.Vector3()).toArray())>tol){
  // Bounds can overlap at an interlocking end without material intersecting.
  for(const f of [.2,.5,.8]){const p=overlap.min.clone().lerp(overlap.max,f);assert(!inside(e,p),`${h.id}: ${e.b.id} protrudes into the opening`);}
 }}
 walls.push({wall:w.id,opening:h.id,width:h.width,height:h.height,jambs:2,lintel:true,sill:h.kind==='window'});
}
for(const h of model.openings.roof){
 const origin=new THREE.Vector3(...h.frame.origin),u=new THREE.Vector3(...h.frame.along),x=new THREE.Vector3(...h.frame.across),n=new THREE.Vector3(0,Math.SQRT1_2,h.roofSide*Math.SQRT1_2);
 for(const [slope,station,from,to] of [[true,h.v0-T,h.u0,h.u1],[true,h.v1+T,h.u0,h.u1],[false,h.u0-T,h.v0,h.v1],[false,h.u1+T,h.v0,h.v1]]){
  assert(Math.abs(station/P-Math.round(station/P))<tol);
  const candidates=entries.filter(e=>e.b.roofSide===h.roofSide&&e.b.kind===(slope?'roof-slope':'roof-cross'));
  for(let i=0;i<=32;i++){
   const run=from+tol+(to-from-2*tol)*i/32;
   const probes=[-T/2,T/2].map(ply=>origin.clone().addScaledVector(u,slope?run:station+ply).addScaledVector(x,slope?station+ply:run).addScaledVector(n,slope?-.06:.06));
   assert(probes.some(p=>candidates.some(e=>inside(e,p))),`${h.id}: missing roof frame`);points++;
  }
 }
}
const office=model.wallPanels.find(w=>w.id==='ground-office-south'),door=office.holes.find(h=>h.id==='office-door'),hall=model.layout.rooms.find(r=>r.id==='hall-ground');
assert.equal(model.wallPanels.find(w=>w.id==='ground-office-east').holes.length,0);
assert(door.world.x0>hall.x0&&door.world.x1<hall.x1);assert.equal(door.swing,-1);
const small=build30(),bath=small.rooms.find(r=>r.id==='bathroom'),partition=small.wallPanels.find(w=>w.id==='bedroom-right'),entry=small.openings.front.find(h=>h.id==='entrance');
assert(entry.world.x0>=partition.fixed+H/2+T-tol,'Entry must not cut the bathroom corner');
assert(entry.world.x0>bath.x1+H,'Continuous bathroom wall at the entrance');
assert(Math.abs((entry.u0-T)/P-6)<tol&&Math.abs((entry.u1+T)/P-9)<tol);
const report={framedWallOpenings:walls.length,framedRooflights:model.openings.roof.length,checkedContinuousFrameSections:points,openings:walls,officeDoorFacesHall:true,bathroomCornerClosed:true,entry30Width:entry.u1-entry.u0};
fs.writeFileSync('lib/construction/qa/openings-audit.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
