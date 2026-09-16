// Bundle baseline-30/90/125 aliases from release 380fc5b.
import {buildStructure as before30} from 'baseline-30';
import {buildStructure as before90} from 'baseline-90';
import {buildStructure as before125} from 'baseline-125';
import {buildStructure as after30} from '../30/structure.js';
import {buildStructure as after90} from '../90/structure.js';
import {buildStructure as after125} from '../125/structure.js';
import {roofWallLap} from '../roof-wall-lap.js';
import {ridgeJointScene} from '../../technology/ridge-joint.js';
import * as THREE from 'three';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const area=p=>Math.abs(p.reduce((s,a,i)=>{const b=p[(i+1)%p.length];return s+a.x*b.y-b.x*a.y},0))/2;
function clip(poly,n,c){const r=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],da=c-n.dot(a),db=c-n.dot(b);if(da>=0)r.push(a);if((da>=0)!==(db>=0))r.push(a.clone().lerp(b,da/(da-db)));}return r;}
function hash(boards){const h=createHash('sha256');for(const b of boards){const g=b.mesh.geometry.clone().translate(...b.mesh.position.toArray());h.update(new Uint8Array(g.attributes.position.array.buffer));g.dispose();}return h.digest('hex');}
function triangles(b,axis,centerY=0){
 const cross=2-axis,at=b.frameOrigin[cross]+(b.layer===0?-.018:0),p=b.mesh.geometry.attributes.position,faces=[];
 for(let i=0;i<p.count;i+=3){let tri=[0,1,2].map(k=>new THREE.Vector3().fromBufferAttribute(p,i+k).add(b.mesh.position));
  if(tri.some(v=>Math.abs(v.getComponent(cross)-at)>1e-6))continue;
  tri=tri.map(v=>new THREE.Vector2(v.getComponent(axis),v.y-centerY));if(area(tri)<1e-12)continue;
  if(tri[1].clone().sub(tri[0]).cross(tri[2].clone().sub(tri[0]))<0)tri.reverse();faces.push(tri);
 }return faces;
}
function overlap(a,b){let sum=0;for(const x of a)for(const y of b){let p=x;for(let i=0;i<3;i++){const v=y[i],e=y[(i+1)%3].clone().sub(v),n=new THREE.Vector2(e.y,-e.x);p=clip(p,n,n.dot(v));if(p.length<3)break;}if(p.length>=3)sum+=area(p);}return sum;}
function obstructs(b,planes){const g=b.mesh.geometry,p=g.attributes.position;for(let i=0;i<(g.index?.count||p.count);i+=3){let poly=[0,1,2].map(k=>new THREE.Vector3().fromBufferAttribute(p,g.index?g.index.getX(i+k):i+k).add(b.mesh.position));for(const q of planes){poly=clip(poly,q.n,q.c-3e-6);if(poly.length<3)break;}for(let k=1;k<poly.length-1;k++)if(poly[k].clone().sub(poly[0]).cross(poly[k+1].clone().sub(poly[0])).length()>1e-10)return true;}return false;}
const reports=[],mat=new THREE.MeshStandardMaterial(),materials={wood:mat,roof:mat,edges:new THREE.LineBasicMaterial()};
for(const [id,before,after] of [['30',before30,after30],['90',before90,after90],['125',before125,after125]]){
 const a=before({}, {insulation:false}),b=after({}, {insulation:false});
 const other=r=>!r.kind.startsWith('roof-'),cross=r=>r.kind==='roof-cross';
 assert.equal(hash(a.boards.filter(other)),hash(b.boards.filter(other)),`${id}: changed walls / slabs`);
 assert.equal(hash(a.boards.filter(cross)),hash(b.boards.filter(cross)),`${id}: moved or removed a roof cross rib`);
 let slots=0,ridgeNodes=0,minArea=Infinity;
 if(id==='125')assert.equal(hash(a.boards),hash(b.boards),'Flat roof model changed');
 else{
  const d=b.dimensions,axis=id==='30'?0:2,pitch=id==='30'?35:45,centerY=d.roofUnderRidgeY+.12/Math.cos(pitch*Math.PI/180);
  const lap=roofWallLap({pitch,spanHalf:(id==='30'?d.width:d.depth)/2,ridgeUnderside:d.roofUnderRidgeY,axis});
  assert.equal(d.roofWallJoint.slabBeveled,false);
  for(const board of b.boards.filter(r=>r.roofLap)){
   const sign=board.roofSide||Math.sign(board.mesh.position.getComponent(axis));
   for(const slot of ['inner','outer']){assert(!obstructs(board,lap.side(sign).slotPlanes(slot,.3)),`${id}: ${board.id} obstructs wall joint ${slot}`);slots++;}
  }
  const sample=ridgeJointScene({pitch,ridgeHouse:id},materials),longs=sample.ridgeJoint.boards.filter(r=>r.ridgeLap==='long');
  const expected=overlap(...longs.map(r=>triangles(r,0)));
  const rafters=b.boards.filter(r=>r.kind==='roof-slope');
  for(const index of new Set(rafters.map(r=>r.index))){
   const node=rafters.filter(r=>r.index===index),faces=new Map(node.map(r=>[r,triangles(r,axis,centerY)]));
   const select=(side,layer)=>node.filter(r=>r.roofSide===side&&r.layer===layer).flatMap(r=>faces.get(r));
   for(const layer of [0,1])assert(overlap(select(-1,layer),select(1,layer))<1e-7,`${id}/${index}: same-ply ridge collision`);
   const actual=overlap(select(-1,0),select(1,1));
   assert(Math.abs(actual-expected)<2e-7,`${id}/${index}: house lap ${actual} != handbook ${expected}`);
   minArea=Math.min(minArea,actual);ridgeNodes++;
  }
  sample.root.traverse(o=>o.geometry?.dispose());
 }
 reports.push({project:id,before:a.boards.length,after:b.boards.length,wallsAndSlabsUnchanged:true,roofCrossRibsUnchanged:true,fullModelUnchanged:id==='125',ridgeNodes,minFaceLapMm2:ridgeNodes?Math.round(minArea*1e6):null,sweptWallSlotChecks:slots});
 for(const m of [a,b])m.root.traverse(o=>o.geometry?.dispose());
}
fs.writeFileSync('lib/construction/qa/ridge-model-regression.json',JSON.stringify({baseline:'380fc5b',reports,strengthValidated:false},null,2)+'\n');console.log(JSON.stringify(reports));
