import assert from 'node:assert/strict';
import * as THREE from 'three';
import {getModel,H,T} from '../lib/technology/geometry.js';
import sequence from '../lib/technology/manufacturing-data.json';
import {isCompleteRobotBoard,selectRobotOperations,prepareRobotBoard} from '../lib/technology/robotics-assembly.js';

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
console.log(JSON.stringify({selected:report,vertices,maxReconstructionError:maxError,rejectedFragments:4}));
