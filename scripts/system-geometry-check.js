// Bundle with esbuild (platform=node, Three.js available) and execute with Node.
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import * as THREE from 'three';
import {buildSystemModel} from '../lib/system/model.js';
import {buildStructure} from '../lib/construction/125/structure.js';
import {P,H,T} from '../lib/construction/core.js';
import audit from '../lib/construction/qa/quantities.json';

function fingerprint(boards) {
 const hash=createHash('sha256');
 for(const b of boards) {
  const geometry=b.mesh.geometry.clone().translate(...b.mesh.position.toArray());
  hash.update(b.id);hash.update(new Uint8Array(geometry.attributes.position.array.buffer));geometry.dispose();
 }
 return hash.digest('hex');
}
const model=buildSystemModel(),catalogue=buildStructure(),house=model.house;
const hash=fingerprint(house.boards);
assert.equal(hash,fingerprint(catalogue.boards));
assert.equal(hash,audit.projects['125'].geometrySha256);
assert.equal(house.boards.length,audit.projects['125'].physicalBoards);
assert.deepEqual(house.dimensions,catalogue.dimensions);
assert.deepEqual(house.boards.map(b=>b.mesh.matrixWorld.elements),catalogue.boards.map(b=>b.mesh.matrixWorld.elements));
assert.equal(house.insulationCount,catalogue.insulationCount);
assert.deepEqual(house.groups.insulation.children[0].instanceMatrix.array,catalogue.groups.insulation.children[0].instanceMatrix.array);
assert.equal(house.dimensions.ceilingBottom,9*P+T);
assert.equal(house.dimensions.ceilingTop,9*P+T+H);
assert.equal(house.validation.ceilingOnWallCap,true);
assert(house.boards.every(b=>!b.connectorCuts.length));

const near=(a,b)=>assert(Math.abs(a-b)<1e-6,`${a} != ${b}`);
for(const wall of house.wallPanels.filter(w=>w.exterior)) {
 const along=wall.axis===0?'x':'z';
 const origin=new THREE.Vector3(wall.origin.x,wall.origin.y,wall.origin.z);
 const boards=house.boards.filter(b=>b.wallId===wall.id);
 for(const board of boards) {
  const bounds=new THREE.Box3().setFromObject(board.mesh);
  const transverse=board.axis===1?along:'y';
  near((bounds.min[transverse]+bounds.max[transverse])/2,
   origin[transverse]+board.index*P+(board.layer===0?-T/2:T/2));
 }
 const parts=model.battenParts.filter(p=>p.wallId===wall.id);
 assert(parts.some(p=>p.side==='exterior'));assert(parts.some(p=>p.side==='interior'));
 for(const p of parts) {
  const vertical=p.axis===1;
  const width=vertical?p.u1-p.u0:p.v1-p.v0,length=vertical?p.v1-p.v0:p.u1-p.u0;
  assert(width>0&&width<=.060001);assert(length>0&&length<=2.500001);
  assert.equal(p.side,vertical?'exterior':'interior');
  const local=new THREE.Vector3(...p.center).sub(origin);
  near(local.dot(wall.normal),(vertical?-1:1)*(.12+.009));
  near(local[along],(p.u0+p.u1)/2);near(local.y,(p.v0+p.v1)/2);
  near(p.size[wall.axis===0?2:0],.018);
  for(const hole of wall.holes)assert(Math.min(p.u1,hole.u1)-Math.max(p.u0,hole.u0)<1e-7||Math.min(p.v1,hole.v1)-Math.max(p.v0,hole.v0)<1e-7);
  assert(boards.some(b=>b.axis===p.axis&&b.index===p.rib));
 }
}
assert.equal(model.sampleBoards[0].length,1);
near(model.sampleBoards[0][0].stockLength,2.5);
assert(model.sampleBoards[1].length>2);
// Continuity example: internal seams of the two plies must not align.
const seams=layer=>model.sampleBoards[1].filter(b=>b.layer===layer&&b.start>0).map(b=>b.start);
assert(seams(0).every(a=>seams(1).every(b=>Math.abs(a-b)>1e-7)));
console.log(JSON.stringify({boards:house.boards.length,insulation:house.insulationCount,battens:model.battenParts.length,geometrySha256:hash,ceilingBottom:house.dimensions.ceilingBottom,sampleBoards:model.sampleBoards.map(b=>b.length)}));
