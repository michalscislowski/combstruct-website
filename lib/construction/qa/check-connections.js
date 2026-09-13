import {stockBounds} from '../stock-profile.js';
import * as THREE from 'three';
import {buildStructure,H,T,P} from 'project-structure';
import fs from 'node:fs';
import {MeshBVH,acceleratedRaycast} from 'three-mesh-bvh';
THREE.Mesh.prototype.raycast=acceleratedRaycast;
const project=process.argv[2],validate=process.argv[3]==='validate';
const directory=`lib/construction/${project}`;
const output=`lib/construction/qa/${project}-${validate?'validate':'plan'}.json`;

const mat=new THREE.MeshStandardMaterial({side:THREE.DoubleSide});
const model=buildStructure({wood:mat,end:mat},{connectors:validate,insulation:false});model.root.updateMatrixWorld(true);
const EPS=1e-6;
const entries=model.boards.map(record=>{
  const mesh=record.mesh;mesh.geometry.boundsTree=new MeshBVH(mesh.geometry);const position=mesh.geometry.getAttribute('position'),along=new THREE.Vector3(...record.along),normal=new THREE.Vector3(...record.normal),length=record.stockLength;
  const corners=[];
  const orthogonal=[...record.along,...record.normal,...record.thick].every(n=>Math.abs(n)<1e-8||Math.abs(Math.abs(n)-1)<1e-8);
  if(orthogonal)for(const end of ['start','end']) {
    if(end==='start'&&(record.trim==='left'||(record.stock.minCut||0)>EPS))continue;
    if(end==='end'&&(record.trim==='right'||(record.stock.limit??length)<length-EPS))continue;
    for(const offset of [0,H/2])for(const edge of ['slotted','plain'])corners.push({end,edge,offset,width:T,removedRun:offset===0&&edge==='slotted'?H/2-T:H/2});
  }
  const cuts=[[],[],[]];
  for(let i=0;i<position.count;i++)new THREE.Vector3().fromBufferAttribute(position,i).applyMatrix4(mesh.matrixWorld).toArray().forEach((n,a)=>cuts[a].push(n));
  for(const x of [0,H/2,H,length-H,length-H/2,length])for(const y of [-H/2,-H/2+T,H/2-T,H/2]) {
    mesh.position.clone().addScaledVector(along,x).addScaledVector(normal,y).toArray().forEach((n,a)=>cuts[a].push(n));
  }
  return{record,mesh,box:new THREE.Box3().setFromObject(mesh),corners,along,normal,cuts:cuts.map(c=>[...new Set(c.map(n=>Math.round(n*1e6)/1e6))].sort((a,b)=>a-b))};
});
const ray=new THREE.Raycaster(),direction=new THREE.Vector3(.873,.397,.283).normalize();
function inside(mesh,p){
  // A diagonal butt joint has overlapping world AABBs, but its shared end
  // face is not a solid intersection. Float32 vertices can place a sample
  // about 0.1 micrometre beyond that face; reject boundary samples locally.
  const b=mesh.userData,d=p.clone().sub(mesh.position),x=d.dot(new THREE.Vector3(...b.along));
  const [lo,hi]=stockBounds(b.stock);
  if(x<=lo+EPS||x>=hi-EPS)return false;
  ray.set(p,direction);ray.near=1e-7;ray.far=30;
  const hits=ray.intersectObject(mesh,false).map(h=>h.distance).sort((a,b)=>a-b),unique=[];
  for(const d of hits)if(!unique.length||d-unique.at(-1)>1e-7)unique.push(d);
  return unique.length%2===1;
}
function inCorner(e,c,p){
  const d=p.clone().sub(e.mesh.position),x=d.dot(e.along),y=d.dot(e.normal),L=e.record.stockLength;
  const offset=c.offset||0;
  return x>=(c.end==='start'?offset:L-offset-H/2)-EPS&&x<=(c.end==='start'?offset+H/2:L-offset)+EPS&&y>=(c.edge==='slotted'?H/2-T:-H/2)-EPS&&y<=(c.edge==='slotted'?H/2:-H/2+T)+EPS;
}
const schedule={},resolved=[],unresolved=[];
const cells=new Map(),pairKeys=new Set();
entries.forEach((e,i)=>{const lo=e.box.min.clone().divideScalar(.5).floor(),hi=e.box.max.clone().divideScalar(.5).floor();for(let x=lo.x;x<=hi.x;x++)for(let y=lo.y;y<=hi.y;y++)for(let z=lo.z;z<=hi.z;z++){const key=`${x},${y},${z}`,bucket=cells.get(key)||[];for(const j of bucket)pairKeys.add(j*entries.length+i);bucket.push(i);cells.set(key,bucket)}});
let testedPairs=0,angledPairs=0,pointTests=0;
for(const key of pairKeys){
  const i=Math.floor(key/entries.length),j=key%entries.length;
  const A=entries[i],B=entries[j],box=A.box.clone().intersect(B.box),size=box.getSize(new THREE.Vector3());
  if(box.isEmpty()||Math.min(...size.toArray())<.00005)continue;
  testedPairs++;
  const orthogonal=[A,B].every(e=>[...e.record.along,...e.record.normal,...e.record.thick].every(n=>Math.abs(n)<1e-8||Math.abs(Math.abs(n)-1)<1e-8));
  const points=[];
  if(orthogonal){
    const mids=[0,1,2].map(a=>{const lo=box.min.getComponent(a),hi=box.max.getComponent(a),c=[lo,...new Set([...A.cuts[a],...B.cuts[a]].filter(n=>n>lo+.00001&&n<hi-.00001)),hi].sort((a,b)=>a-b);return c.slice(1).flatMap((v,i)=>v-c[i]>.00002?[(v+c[i])/2]:[])});
    for(const x of mids[0])for(const y of mids[1])for(const z of mids[2])points.push(new THREE.Vector3(x,y,z));
  }else{angledPairs++;for(const q of [[.31,.47,.63],[.67,.29,.41],[.53,.71,.27],[.5,.5,.5]])points.push(box.min.clone().add(new THREE.Vector3(size.x*q[0],size.y*q[1],size.z*q[2])))}
  const shared=[];for(const p of points){pointTests++;if(inside(A.mesh,p)&&inside(B.mesh,p))shared.push(p)}
  if(!shared.length)continue;
  if(validate){unresolved.push({a:A.record.id,b:B.record.id,kindA:A.record.kind,kindB:B.record.kind,surfaceA:A.record.surface,surfaceB:B.record.surface,point:shared[0].toArray(),orthogonal});continue;}
  const existing=shared.every(p=>[A,B].some(e=>(schedule[e.record.connectorKey]||[]).some(c=>inCorner(e,c,p))));
  if(existing)continue;
  const eligible=[A,B].flatMap(e=>e.corners.filter(c=>shared.every(p=>inCorner(e,c,p))).map(c=>({e,c}))).sort((a,b)=>a.c.removedRun-b.c.removedRun);
  if(!eligible.length){
    unresolved.push({a:A.record.id,b:B.record.id,surfaceA:A.record.surface,surfaceB:B.record.surface,kindA:A.record.kind,kindB:B.record.kind,points:shared.slice(0,6).map(p=>p.toArray()),localA:shared.slice(0,6).map(p=>{const d=p.clone().sub(A.mesh.position);return[d.dot(A.along),d.dot(A.normal)]}),localB:shared.slice(0,6).map(p=>{const d=p.clone().sub(B.mesh.position);return[d.dot(B.along),d.dot(B.normal)]})});continue;
  }
  const {e,c}=eligible[0];
  if(!schedule[e.record.connectorKey])schedule[e.record.connectorKey]=[];
  if(!schedule[e.record.connectorKey].some(q=>q.end===c.end&&q.edge===c.edge&&(q.offset||0)===(c.offset||0)))schedule[e.record.connectorKey].push(c);
  resolved.push({board:e.record.id,surface:e.record.surface,other:e===A?B.record.id:A.record.id,...c});
}
const result={boards:model.boards.length,connectorBoards:validate?model.boards.filter(b=>b.connectorCuts.length).length:Object.keys(schedule).length,testedPairs,angledPairs,pointTests,resolved,unresolved,validation:model.validation,dimensions:model.dimensions};
fs.writeFileSync(output,JSON.stringify(result,null,2));
console.log(JSON.stringify({...result,resolved:resolved.length,unresolved:unresolved.length,examples:unresolved.slice(0,5),dimensions:undefined}));
if(unresolved.length){fs.writeFileSync(output.replace('.json','-candidate-cuts.json'),JSON.stringify(schedule,null,2));process.exitCode=1;}
else if(!validate)fs.writeFileSync(directory+'/connectors.json',JSON.stringify(schedule,null,2));
