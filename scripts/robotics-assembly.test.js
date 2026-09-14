import assert from 'node:assert/strict';
import * as THREE from 'three';
import {getModel,H,T} from '../lib/technology/geometry.js';
import sequence from '../lib/technology/manufacturing-data.json';
import {isCompleteRobotBoard,selectRobotOperations,prepareRobotBoard,createRobotInventory,remainingRobotStock} from '../lib/technology/robotics-assembly.js';

const model=getModel(),byId=new Map(model.boards.map(b=>[b.id,b])),records=sequence.assembly.map(([id])=>byId.get(id));
const first=pred=>records.findIndex(pred),starts=[0,first(b=>b.kind==='wall'&&b.axis===1),first(b=>b.kind==='ceiling'),first(b=>b.kind==='roof-slope'),records.length];
for(const id of ['board-368','board-373','board-378','board-645']){
 assert.equal(isCompleteRobotBoard(byId.get(id)),false,'Reject the 24 × 24 cm opening fragment');
 assert.throws(()=>prepareRobotBoard(byId.get(id)),/complete native board/);
}
const selected=selectRobotOperations(records,starts),report=[];let vertices=0,maxError=0;
for(let stage=0;stage<selected.length;stage++){
 assert.equal(selected[stage].length,4);
 for(const index of selected[stage]){
  assert(index>=starts[stage]&&index<starts[stage+1]);
  const b=records[index],before=Array.from(b.mesh.geometry.attributes.position.array),prepared=prepareRobotBoard(b);
  assert.equal(b.custom,false);assert.equal(b.connectorCuts.length,0);
  const [length,thickness,width]=prepared.dimensions;
  assert(length>.5&&length<=2.5+1e-5);assert(Math.abs(thickness-T)<1e-5);assert(Math.abs(width-H)<1e-5);
  const p=prepared.geometry.attributes.position,original=b.mesh.geometry.attributes.position,v=new THREE.Vector3(),w=new THREE.Vector3();
  assert.equal(p.count,original.count);
  for(let j=0;j<p.count;j++){
   v.fromBufferAttribute(p,j).applyQuaternion(prepared.rotation).add(prepared.target);
   w.fromBufferAttribute(original,j).add(b.mesh.position);
   const error=v.distanceTo(w);assert(error<2e-6,'Carried stock must become the exact installed board: '+b.id);maxError=Math.max(maxError,error);vertices++;
  }
  assert.deepEqual(Array.from(b.mesh.geometry.attributes.position.array),before,'Do not mutate the construction model');
  const mesh=new THREE.Mesh(prepared.geometry,new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));mesh.updateMatrixWorld();
  for(const x of [-.22,.22]){
   const hit=new THREE.Raycaster(new THREE.Vector3(x,1,-H/4),new THREE.Vector3(0,-1,0)).intersectObject(mesh)[0];
   assert(hit&&Math.abs(hit.point.y-T/2)<1e-5,'Grip pads must touch the solid board face');
  }
  const support=sequence.assembly[index][1];if(support)assert(records.findIndex(r=>r.id===support)<index,'Support must already be installed');
  report.push({stage,index,id:b.id,profile:b.trim?'ending':'ordinary',length,support});prepared.geometry.dispose();mesh.material.dispose();
 }
}
const inventory=createRobotInventory(records,selected),total=inventory.stacks.reduce((n,s)=>n+s.initial,0);
function sameProfile(a,b){
 // Different house partitions triangulate identical profiles differently.
 // Probe every interval between either mesh's profile vertices on both sides
 // of the slot roots, rather than comparing triangle layouts.
 const xs=new Set(),material=new THREE.MeshBasicMaterial({side:THREE.DoubleSide});
 for(const g of [a,b]){const p=g.attributes.position;for(let i=0;i<p.count;i++)xs.add(Math.round(p.getX(i)*1e5)/1e5);}
 const boundaries=[...xs].sort((a,b)=>a-b),meshes=[a,b].map(g=>new THREE.Mesh(g,material));
 meshes.forEach(m=>m.updateMatrixWorld());
 for(let i=1;i<boundaries.length;i++)for(const z of [-H/4,H/4]){
  const ray=new THREE.Raycaster(new THREE.Vector3((boundaries[i-1]+boundaries[i])/2,1,z),new THREE.Vector3(0,-1,0));
  const hits=meshes.map(m=>ray.intersectObject(m)[0]);
  assert.equal(!!hits[0],!!hits[1]);if(hits[0])assert(hits[0].point.distanceTo(hits[1].point)<1e-5);
 }
 material.dispose();
}
for(let ordinal=0;ordinal<inventory.picks.length;ordinal++){
 const pick=inventory.picks[ordinal],before=remainingRobotStock(inventory,ordinal),after=remainingRobotStock(inventory,ordinal+1);
 sameProfile(pick.prepared.geometry,pick.stack.prepared.geometry);
 assert.equal(before.get(pick.stack.id)-after.get(pick.stack.id),1);
 assert.equal([...after.values()].reduce((a,b)=>a+b,0),total-ordinal-1);
 for(const stack of inventory.stacks)if(stack!==pick.stack)assert.equal(before.get(stack.id),after.get(stack.id),'Other stacks are untouched');
 assert.deepEqual(remainingRobotStock(inventory,ordinal),before,'Seeking backwards restores inventory');
}
assert(inventory.stacks.length<inventory.picks.length,'Repeated parts must reuse a stack');
assert.equal(inventory.picks[3].stack,inventory.picks[4].stack,'Floor and wall use the same stock without a manual refill');
assert.equal(inventory.picks[8].stack,inventory.picks[9].stack,'Mirrored ending boards share one stockpile');
console.log(JSON.stringify({selected:report,vertices,maxReconstructionError:maxError,rejectedFragments:4,stacks:inventory.stacks.length,inventory:total,picks:inventory.picks.length}));
