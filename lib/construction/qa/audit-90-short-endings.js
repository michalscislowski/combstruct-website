import * as THREE from 'three';
import {buildStructure,H,T,P} from '../90/structure.js';
import {deliveryStock} from '../../parts/stock.js';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {MeshBVH,acceleratedRaycast} from 'three-mesh-bvh';
THREE.Mesh.prototype.raycast=acceleratedRaycast;
const model=buildStructure({}, {insulation:false,connectors:false});
const walls=model.boards.filter(b=>b.kind==='partition-vertical');
for(const b of walls)b.mesh.geometry.boundsTree=new MeshBVH(b.mesh.geometry);
const ray=new THREE.Raycaster(),direction=new THREE.Vector3(.873,.397,.283).normalize();
function inside(mesh,p){ray.set(p,direction);ray.near=1e-7;ray.far=30;const ds=ray.intersectObject(mesh,false).map(h=>h.distance).sort((a,b)=>a-b);return ds.filter((d,i)=>!i||d-ds[i-1]>1e-7).length%2===1;}
const stock=deliveryStock(model.boards);
assert.equal(stock.filter(s=>s.stock.pixels===1).length,0,'No one-module stock remains');
const result=[];
const slabY=model.dimensions.slabBottom+H/2;
for(const spec of [
 {axis:0,index:6,at:-2.291666666666667,run:-.745,wall:'upper-hall-notch-north'},
 {axis:0,index:7,at:-1.875,run:-.745,wall:'upper-hall-notch-north'},
 {axis:0,index:8,at:-1.4583333333333335,run:-.745,wall:'upper-hall-notch-north'},
 {axis:1,index:10,at:0,run:-2.62,wall:'upper-hall-notch-west'},
]){
 const point=new THREE.Vector3(spec.axis===0?spec.at+T/2:spec.run,slabY,spec.axis===0?spec.run:spec.at+T/2);
 const parent=model.boards.find(b=>b.kind==='slab'&&b.axis===spec.axis&&b.index===spec.index&&b.layer===1&&new THREE.Box3().setFromObject(b.mesh).containsPoint(point));
 assert(parent,'A longer slab board covers the former ending');
 assert(parent.actualEnd-parent.actualStart>=2*P-H-1e-7);
 const wall=model.wallPanels.find(w=>w.id===spec.wall);assert.equal(wall.verticalPhase,0);
 // The upright now occupies ply 0 and the panel bridges it in ply 1, at
 // BOTH ends of the wall. Test inside faces, away from slots and cut edges.
 for(const level of ['slab','ceiling'])for(const ply of [0,1]){
  const centerY=(level==='slab'?model.dimensions.slabBottom:model.dimensions.ceilingBottom)+H/2;
  const sample=new THREE.Vector3(spec.axis===0?spec.at+(ply?T/2:-T/2):wall.fixed,centerY+(spec.axis===0?-.04:.04),spec.axis===0?wall.fixed:spec.at+(ply?T/2:-T/2));
  const candidates=model.boards.filter(b=>(ply===0?b.wallId===wall.id&&b.kind==='partition-vertical':b.kind===level&&b.axis===spec.axis)&&b.layer===ply);
  assert(candidates.some(b=>{b.mesh.geometry.boundsTree??=new MeshBVH(b.mesh.geometry);return new THREE.Box3().setFromObject(b.mesh).containsPoint(sample)&&inside(b.mesh,sample)}),`${wall.id}/${level}/ply${ply}: missing material after phase swap`);
 }
 result.push({board:parent.id,modules:parent.stock.pixels,trim:parent.trim,lengthM:parent.actualEnd-parent.actualStart,wall:wall.id});
}
for(const id of ['balcony-support-rear','balcony-support-front']){
 const horizontal=model.boards.filter(b=>b.wallId===id&&b.kind==='partition-horizontal');
 assert.equal(horizontal.length,14);
 assert(horizontal.every(b=>b.stock.pixels===2&&!b.trim&&!b.custom));
}
for(const id of ['upper-hall-notch-west','upper-hall-notch-north']){
 const horizontal=model.boards.filter(b=>b.wallId===id&&b.kind==='partition-horizontal');
 assert(horizontal.every(b=>b.stock.pixels===3));
 assert(horizontal.some(b=>!b.trim)&&horizontal.some(b=>b.trim==='right'));
}
const report={project:'90',shortEndingsBefore:46,shortEndingsAfter:0,removed:{balcony:28,hall:14,slabAfterPlySwap:4},replacements:result,swappedUprightWalls:['upper-hall-notch-west','upper-hall-notch-north'],panelReservationsFollowUprightPhase:true,remaining:[]};
fs.writeFileSync('lib/construction/qa/90-short-endings.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report));
