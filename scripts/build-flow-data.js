// Offline geometric audit. Bundle with the same Three.js as the viewer and
// three-mesh-bvh 0.9.9; run from this repository. No BVH code ships to browsers.
import * as THREE from 'three';
import {MeshBVH} from 'three-mesh-bvh';
import {getModel} from '../lib/technology/geometry.js';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import assert from 'node:assert/strict';

const model=getModel(),tolerance=.00005,identity=new THREE.Matrix4();
const fingerprint=createHash('sha256');
let materialLengthM=0;
const entries=model.boards.map(b=>{
 const positions=b.mesh.geometry.attributes.position,along=new THREE.Vector3(...b.along);let min=Infinity,max=-Infinity;
 for(let i=0;i<positions.count;i++){const x=new THREE.Vector3().fromBufferAttribute(positions,i).dot(along);min=Math.min(min,x);max=Math.max(max,x);}
 materialLengthM+=max-min;
 const geometry=b.mesh.geometry.clone().translate(...b.mesh.position.toArray());
 geometry.computeBoundingBox();geometry.boundsTree=new MeshBVH(geometry);
 fingerprint.update(b.id);fingerprint.update(new Uint8Array(geometry.attributes.position.array.buffer));
 return{board:b,geometry,box:geometry.boundingBox,neighbors:[],grounded:geometry.boundingBox.min.y<=tolerance};
});
// A spatial hash bounds the triangle-distance checks to nearby pieces.
const cells=new Map(),pairs=new Set();
entries.forEach((e,i)=>{
 const lo=e.box.min.clone().addScalar(-tolerance).divideScalar(.5).floor(),hi=e.box.max.clone().addScalar(tolerance).divideScalar(.5).floor();
 for(let x=lo.x;x<=hi.x;x++)for(let y=lo.y;y<=hi.y;y++)for(let z=lo.z;z<=hi.z;z++){
  const key=`${x},${y},${z}`,bucket=cells.get(key)||[];
  for(const j of bucket)pairs.add(j*entries.length+i);
  bucket.push(i);cells.set(key,bucket);
 }
});
// BVH cannot return a unique intersection EDGE for coplanar faces. We only use
// its distance/contact result, never the zero placeholder contact coordinates.
const warn=console.warn;let coplanarWarnings=0;
console.warn=(...args)=>{
 if(args[0]==='ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.')coplanarWarnings++;
 else warn(...args);
};
let contacts=0,candidates=0;
try{
 for(const pair of pairs){
  const i=Math.floor(pair/entries.length),j=pair%entries.length,a=entries[i],b=entries[j];
  if(!a.box.clone().expandByScalar(tolerance).intersectsBox(b.box))continue;
  candidates++;
  const hit=a.geometry.boundsTree.closestPointToGeometry(b.geometry,identity,{}, {},tolerance/2,tolerance);
  if(hit&&hit.distance<tolerance){a.neighbors.push(j);b.neighbors.push(i);contacts++;}
 }
}finally{console.warn=warn;}

const phase=b=>b.kind==='floor'?0:['wall','partition'].includes(b.kind)?1:b.kind==='ceiling'?2:b.kind==='gable'?3:4;
const priority=(i,j)=>{
 const a=entries[i],b=entries[j];
 // Wall uprights and crossing rows advance together from the lowest level.
 // A high upright continuation cannot jump ahead of its actual connections.
 return phase(a.board)-phase(b.board)||a.box.min.y-b.box.min.y||a.box.max.y-b.box.max.y||i-j;
};
const installed=new Set(),available=new Set(entries.flatMap((e,i)=>e.grounded?[i]:[]));
const assembly=[];
while(available.size){
 const next=[...available].sort(priority)[0],e=entries[next];
 const support=e.grounded?null:e.neighbors.find(n=>installed.has(n));
 assert(e.grounded||support!==undefined,`Unsupported piece ${e.board.id}`);
 assembly.push([e.board.id,support===null?null:entries[support].board.id]);
 available.delete(next);installed.add(next);
 for(const n of e.neighbors)if(!installed.has(n))available.add(n);
}
assert.equal(installed.size,entries.length,'Disconnected model: do not emit a partial or fallback order');
// Independent prefix audit: validate membership, earlier contact and grounding.
const audited=new Set(),byId=new Map(entries.map((e,i)=>[e.board.id,i]));
for(const [id,support] of assembly){
 const i=byId.get(id),e=entries[i];assert(!audited.has(id));
 if(support===null)assert(e.grounded);
 else{assert(audited.has(support));assert(e.neighbors.includes(byId.get(support)));}
 audited.add(id);
}
const oldRank=b=>b.kind==='floor'?0:b.kind==='wall'?(b.axis===1?1:2):b.kind==='partition'?(b.axis===1?3:4):b.kind==='ceiling'?5:b.kind==='gable'?6:b.kind==='roof-slope'?7:8;
const oldOrder=entries.map((_,i)=>i).sort((i,j)=>oldRank(entries[i].board)-oldRank(entries[j].board)||entries[i].box.min.y-entries[j].box.min.y||i-j);
const oldSeen=new Set();let oldUnsupported=0;
for(const i of oldOrder){const e=entries[i];if(!e.grounded&&!e.neighbors.some(n=>oldSeen.has(n)))oldUnsupported++;oldSeen.add(i);}

const definitions=[
 ['standard','Deska zwykła'],['ending','Deska zakończeniowa'],
 ['corner-slotted','Łączeniowa · narożna 102 mm'],['corner-plain','Łączeniowa · narożna 120 mm'],
 ['inset-slotted','Łączeniowa · odsunięta, zęby'],['inset-plain','Łączeniowa · odsunięta, pełna krawędź'],
 ['combined','Łączeniowa · dwa wybrania'],
];
function family(b){return b.connectorCuts.length>1?'combined':b.connectorCuts.length?`${b.connectorCuts[0].offset===0?'corner':'inset'}-${b.connectorCuts[0].edge}`:b.trim?'ending':'standard';}
const families=definitions.map(([id,name])=>{
 const boards=model.boards.filter(b=>family(b)===id);
 // Prefer an untrimmed six-module example, but keep every length in the count.
 const sample=[...boards].sort((a,b)=>Number(a.custom)-Number(b.custom)||b.stock.pixels-a.stock.pixels||Number(!!a.trim)-Number(!!b.trim))[0];
 const lengths={};for(const b of boards)lengths[b.stock.pixels]=(lengths[b.stock.pixels]||0)+1;
 return{id,name,count:boards.length,lengths,sample:sample?.id};
}).filter(f=>f.count);
assert.equal(families.reduce((sum,f)=>sum+f.count,0),entries.length);
const material={lengthM:materialLengthM,fullBoardLengthM:2.5,fullBoardEquivalents:materialLengthM/2.5,fullBoards:Math.ceil(materialLengthM/2.5),sheets:Math.ceil(materialLengthM/12.5)};
const data={model:'Combstruct 30',totalBoards:entries.length,material,geometrySha256:fingerprint.digest('hex'),toleranceM:tolerance,families,assembly};
fs.writeFileSync('lib/technology/manufacturing-data.json',JSON.stringify(data)+'\n');
console.log(JSON.stringify({boards:entries.length,candidates,contacts,grounded:entries.filter(e=>e.grounded).length,checkedPrefixes:audited.size,oldUnsupported,newUnsupported:0,coplanarWarnings,families},null,2));
