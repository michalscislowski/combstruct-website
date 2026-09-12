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
const result=[];
for(const b of model.boards.filter(b=>b.stock.pixels===1&&b.trim)){
 const u=new THREE.Vector3(...b.along),n=new THREE.Vector3(...b.normal),t=new THREE.Vector3(...b.thick),hits={left:new Set(),right:new Set()};
 for(const side of ['left','right'])for(const x of (side==='left'?[-.22,-.14,-.04]:[P-H+.02,P-H+.10,P-H+.20]))for(const y of [-.10,-.04,.04,.10]){
  const p=b.mesh.position.clone().addScaledVector(u,x).addScaledVector(n,y).addScaledVector(t,T/2);
  for(const wall of walls)if(new THREE.Box3().setFromObject(wall.mesh).containsPoint(p)&&inside(wall.mesh,p))hits[side].add(wall.wallId);
 }
 result.push({id:b.id,position:b.mesh.position.toArray(),blockedBy:{left:[...hits.left],right:[...hits.right]}});
}
const stock=deliveryStock(model.boards);
assert.equal(stock.filter(s=>s.stock.pixels===1&&s.trim).length,4);
assert.equal(result.length,4);
assert(result.every(b=>b.blockedBy.left.length&&b.blockedBy.right.length),'Each remaining ending is blocked in both directions');
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
const report={project:'90',shortEndingsBefore:46,shortEndingsAfter:4,removed:{balcony:28,hall:14},remaining:result};
fs.writeFileSync('lib/construction/qa/90-short-endings.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report));
