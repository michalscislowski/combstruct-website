import * as THREE from 'three';
import {buildStructure} from 'project-structure';
import data from '../../technology/manufacturing-data.json';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const m=buildStructure(),fingerprint=createHash('sha256');let length=0;
assert.equal(new Set(m.boards.map(b=>b.id)).size,m.boards.length);
for(const b of m.boards){
 const g=b.mesh.geometry.clone().translate(...b.mesh.position.toArray());
 fingerprint.update(b.id);fingerprint.update(new Uint8Array(g.attributes.position.array.buffer));
 const p=b.mesh.geometry.attributes.position,u=new THREE.Vector3(...b.along);let min=Infinity,max=-Infinity;
 for(let i=0;i<p.count;i++){const q=new THREE.Vector3().fromBufferAttribute(p,i);assert(q.toArray().every(Number.isFinite));const a=q.dot(u);min=Math.min(min,a);max=Math.max(max,a)}length+=max-min;
 if(['floor','ceiling'].includes(b.kind))assert.equal(b.normal[1],b.axis===0?1:-1);
 if(b.kind==='wall'&&b.axis===1){const n={rear:[0,0,-1],left:[-1,0,0],front:[0,0,1],right:[1,0,0]}[b.surface];assert(b.normal.every((v,i)=>Math.abs(v-n[i])<1e-9))}
}
const hash=fingerprint.digest('hex');assert.equal(hash,data.geometrySha256,'Flow must use this exact geometry');
assert.equal(m.boards.length,data.totalBoards);assert.equal(data.families.reduce((s,f)=>s+f.count,0),m.boards.length);
const report={project:'30',geometrySha256:hash,physicalBoards:m.boards.length,actualLengthM:length,fullBoardEquivalents:length/2.5,displayFullBoards:Math.ceil(length/2.5),sheets:Math.ceil(length/12.5),connectorBoards:m.boards.filter(b=>b.connectorCuts.length).length,dimensions:m.dimensions,rooms:m.rooms};
fs.writeFileSync('lib/construction/qa/30-material.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report));
