// Exact projected triangle intersections for the two 18 mm ridge plies.
import * as THREE from 'three';
import {ridgeJointScene} from '../../technology/ridge-joint.js';
import {T,HALF} from '../core.js';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const m=new THREE.MeshStandardMaterial(),materials={wood:m,roof:m,edges:new THREE.LineBasicMaterial()};
const area=p=>Math.abs(p.reduce((s,a,i)=>{const b=p[(i+1)%p.length];return s+a.x*b.y-b.x*a.y},0))/2;
function clip(poly,n,c){const out=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],da=c-n.dot(a),db=c-n.dot(b);if(da>=0)out.push(a);if((da>=0)!==(db>=0))out.push(a.clone().lerp(b,da/(da-db)));}return out;}
function faceTriangles(b){
 const p=b.mesh.geometry.attributes.position,faces=[],z=b.layer===0?-T:0;
 for(let i=0;i<p.count;i+=3){let tri=[0,1,2].map(k=>new THREE.Vector3().fromBufferAttribute(p,i+k).add(b.mesh.position));
  if(tri.some(v=>Math.abs(v.z-z)>1e-6))continue;
  tri=tri.map(v=>new THREE.Vector2(v.x,v.y));if(area(tri)<1e-12)continue;
  if(tri[1].clone().sub(tri[0]).cross(tri[2].clone().sub(tri[0]))<0)tri.reverse();faces.push(tri);
 }
 return faces;
}
function overlap(a,b){let sum=0;for(const x of a)for(const y of b){let p=x;for(let i=0;i<3;i++){const v=y[i],e=y[(i+1)%3].clone().sub(v),n=new THREE.Vector2(e.y,-e.x);p=clip(p,n,n.dot(v));if(p.length<3)break;}if(p.length>=3)sum+=area(p);}return sum;}
function obstructs(b,planes){const g=b.mesh.geometry,p=g.attributes.position;for(let i=0;i<(g.index?.count||p.count);i+=3){let tri=[0,1,2].map(k=>new THREE.Vector3().fromBufferAttribute(p,g.index?g.index.getX(i+k):i+k).add(b.mesh.position));for(const q of planes){tri=clip(tri,q.n,q.c-2e-6);if(tri.length<3)break;}for(let k=1;k<tri.length-1;k++)if(tri[k].clone().sub(tri[0]).cross(tri[k+1].clone().sub(tri[0])).length()>1e-10)return true;}return false;}
const samples=[];let cases=0,slots=0,minArea=Infinity;
for(const ridgeHouse of ['principle','30','90'])for(let pitch=20;pitch<=60;pitch++){
 const scene=ridgeJointScene({pitch,ridgeHouse},materials),{boards,ridge}=scene.ridgeJoint;
 const rafters=boards.filter(b=>b.kind==='roof-slope');assert.equal(rafters.length,4);
 const faces=new Map(rafters.map(b=>[b,faceTriangles(b)]));
 for(const layer of [0,1]){const pair=rafters.filter(b=>b.layer===layer);assert(overlap(faces.get(pair[0]),faces.get(pair[1]))<1e-7,`Same-ply collision ${ridgeHouse}/${pitch}`);}
 const longs=rafters.filter(b=>b.ridgeLap==='long'),lap=overlap(...longs.map(b=>faces.get(b)));
 if(ridgeHouse==='principle'&&pitch===45)assert(Math.abs(lap-.24*.24)<1e-7,'Reference square lap must use the full 240 x 240 mm area');
 assert(lap>1e-5,`No face lap ${ridgeHouse}/${pitch}`);minArea=Math.min(minArea,lap);
 for(const b of rafters){
  const pos=b.mesh.geometry.attributes.position;
  for(let i=0;i<pos.count;i++){const v=new THREE.Vector3().fromBufferAttribute(pos,i).add(b.mesh.position);assert(v.toArray().every(Number.isFinite));const t=Math.tan(pitch*Math.PI/180),c=Math.cos(pitch*Math.PI/180);assert(v.y<=HALF/c-Math.abs(v.x)*t+2e-6,'Outside roof top envelope');assert(v.y>=-HALF/c-Math.abs(v.x)*t-2e-6,'Below roof envelope');}
  for(const side of [-1,1]){assert(!obstructs(b,ridge.slotEnvelope(side,ridge.phaseOrigin+2.5/6,.3)),`Blocked cross rib ${ridgeHouse}/${pitch}/${b.id}/${side}`);slots++;}
 }
 scene.spread(1);scene.insert(300);scene.spread(0);scene.crossing(true);
 if([20,35,45,60].includes(pitch))samples.push({house:ridgeHouse,pitch,lapAreaMm2:Math.round(lap*1e6),headModules:ridge.headModules,relievedCrossRibs:ridge.nearSlots.length});
 scene.root.traverse(o=>o.geometry?.dispose());cases++;
}
const report={cases,slotChecks:slots,noSamePlyIntersections:true,minFaceLapMm2:Math.round(minArea*1e6),roofEnvelopePreserved:true,samples,strengthValidated:false};
fs.writeFileSync('lib/construction/qa/ridge-laps.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
