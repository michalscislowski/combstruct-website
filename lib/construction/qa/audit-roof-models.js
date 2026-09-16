// Supply baseline-30/90/125 aliases from the preceding release when bundling.
import {buildStructure as before30} from 'baseline-30';
import {buildStructure as before90} from 'baseline-90';
import {buildStructure as before125} from 'baseline-125';
import {buildStructure as after30} from '../30/structure.js';
import {buildStructure as after90} from '../90/structure.js';
import {buildStructure as after125} from '../125/structure.js';
import {roofWallLap} from '../roof-wall-lap.js';
import * as THREE from 'three';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import fs from 'node:fs';
function hash(boards){const h=createHash('sha256');for(const b of boards){const g=b.mesh.geometry.clone().translate(...b.mesh.position.toArray());h.update(new Uint8Array(g.attributes.position.array.buffer));g.dispose();}return h.digest('hex');}
function clip(poly,{n,c}){const r=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],da=c-n.dot(a),db=c-n.dot(b);if(da>=0)r.push(a);if((da>=0)!==(db>=0))r.push(a.clone().lerp(b,da/(da-db)));}return r;}
function obstructs(b,planes){const g=b.mesh.geometry,p=g.attributes.position;for(let i=0;i<(g.index?.count||p.count);i+=3){let poly=[0,1,2].map(k=>new THREE.Vector3().fromBufferAttribute(p,g.index?g.index.getX(i+k):i+k).add(b.mesh.position));for(const q of planes){poly=clip(poly,{n:q.n,c:q.c-3e-6});if(poly.length<3)break;}for(let k=1;k<poly.length-1;k++)if(poly[k].clone().sub(poly[0]).cross(poly[k+1].clone().sub(poly[0])).length()>1e-10)return true;}return false;}
const reports=[];
for(const [id,before,after] of [['30',before30,after30],['90',before90,after90],['125',before125,after125]]){
 const a=before({}, {insulation:false}),b=after({}, {insulation:false});
 const slab=r=>['floor','ceiling','slab'].includes(r.kind);
 assert.equal(hash(a.boards.filter(slab)),hash(b.boards.filter(slab)),`${id} changed slabs`);
 let slots=0;
 if(id==='125')assert.equal(hash(a.boards),hash(b.boards),'Flat roof model changed');
 else{
  const d=b.dimensions,axis=id==='30'?0:2,lap=roofWallLap({pitch:d.roofAngle,spanHalf:(id==='30'?d.width:d.depth)/2,ridgeUnderside:d.roofUnderRidgeY,axis});
  assert.equal(d.roofWallJoint.slabBeveled,false);
  for(const board of b.boards.filter(r=>r.roofLap)){
   const sign=board.roofSide||Math.sign(board.mesh.position.getComponent(axis));
   const side=lap.side(sign);
   for(const slot of ['inner','outer']){assert(!obstructs(board,side.slotPlanes(slot,.3)),`${id}: ${board.id} obstructs ${slot}`);slots++;}
  }
  assert(b.boards.some(r=>r.roofLap==='long-lap'));
  assert(b.boards.some(r=>r.roofLap==='continuous'));
 }
 reports.push({project:id,before:a.boards.length,after:b.boards.length,slabsUnchanged:true,fullModelUnchanged:id==='125',sweptSlotChecks:slots});
 for(const m of [a,b])m.root.traverse(o=>o.geometry?.dispose());
}
fs.writeFileSync('lib/construction/qa/roof-model-regression.json',JSON.stringify({baseline:'e434af1',reports,strengthValidated:false},null,2)+'\n');console.log(JSON.stringify(reports));
