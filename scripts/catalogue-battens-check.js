import * as THREE from 'three';
import {buildStructure as b30} from '../lib/construction/30/structure.js';
import {buildStructure as b90} from '../lib/construction/90/structure.js';
import {buildStructure as b125} from '../lib/construction/125/structure.js';
import {battenPartsForHouse,battenMesh} from '../lib/construction/batten-geometry.js';
import {battenQuantities} from '../lib/construction/batten-quantities.js';
import {boardObstacles} from '../lib/construction/batten-clearance.js';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const near=(a,b)=>assert(Math.abs(a-b)<1e-5,`${a} != ${b}`);
const audit=JSON.parse(fs.readFileSync('lib/construction/qa/quantities.json')).projects;
for(const [id,build] of [['30',b30],['90',b90],['125',b125]]){
 const model=build({}, {insulation:false}),hash=createHash('sha256');
 for(const b of model.boards){const g=b.mesh.geometry.clone().translate(...b.mesh.position.toArray());hash.update(b.id);hash.update(new Uint8Array(g.attributes.position.array.buffer));g.dispose();}
 assert.equal(hash.digest('hex'),audit[id].geometrySha256);
 const parts=battenPartsForHouse(model,{catalogue:true}),q=battenQuantities(parts);
 assert(parts.every(p=>p.kind!=='floor'&&p.kind!=='partition'),'No battens on the floor plate or partitions');
 assert(parts.some(p=>p.kind==='wall')&&parts.some(p=>p.kind==='ceiling'));
 if(id==='90')assert(parts.some(p=>p.kind==='slab'),'Retain intermediate slab battens');
 if(id!=='125')assert(parts.some(p=>p.kind==='roof'),'Retain pitched roof battens');
 const data=JSON.parse(fs.readFileSync(`site/assets/parts/${id}.json`));
 near(q.lengthM,data.battens.lengthM);assert.equal(q.stockStrips,data.battens.stockStrips);assert.equal(q.sheets,data.battens.sheets);
 const assignment=q.cuttingPlan.flat();assert.equal(new Set(assignment).size,parts.length);assert.equal(assignment.length,parts.length);
 for(const stock of q.cuttingPlan)assert(stock.reduce((sum,i)=>sum+parts[i].lengthM,0)<=2.500001);
 assert.equal(q.sheets,Math.ceil(q.stockStrips/20));assert.equal(data.material.totalSheets,data.material.sheets+q.sheets);
 const caps=parts.map(p=>({id:p.id,mesh:battenMesh(p)})),cache=new Map(),triangle=new THREE.Triangle();
 let examined=0;const errors=[];
 for(const [partIndex,p] of parts.entries()){
  near(p.lengthM,p.axis===1?p.v1-p.v0:p.u1-p.u0);
  assert(p.lengthM>0&&p.lengthM<=2.500001);assert(model.root.getObjectByName(p.parent));
  const matrix=p.rotation?new THREE.Matrix4().fromArray(p.rotation):new THREE.Matrix4(),inverse=matrix.clone().invert(),key=inverse.elements.join(',');
  if(!cache.has(key))cache.set(key,boardObstacles([...model.boards,...caps],inverse));
  const box=new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(...p.center).applyMatrix4(inverse),new THREE.Vector3(...p.size)).expandByScalar(-2e-6);
  for(const s of cache.get(key)){
   if(s.id===p.id||s.id.startsWith('batten-')&&Number(s.id.slice(7))>partIndex)continue;
   if(!box.intersectsBox(s.bounds))continue;
   const g=s.mesh.geometry,pos=g.attributes.position,index=g.index;
   for(let i=0;i<(index?.count??pos.count);i+=3){
    [triangle.a,triangle.b,triangle.c].forEach((v,j)=>v.fromBufferAttribute(pos,index?index.getX(i+j):i+j).applyMatrix4(s.matrix));
    examined++;if(box.intersectsTriangle(triangle)){errors.push({batten:p.id,kind:p.kind,parent:p.parent,obstacle:s.id,center:p.center,length:p.lengthM});break;}
   }
  }
 }
 fs.writeFileSync(`lib/construction/qa/${id}-batten-validation.json`,JSON.stringify({parts:parts.length,examined,errors},null,2)+'\n');
 console.log(JSON.stringify({id,parts:parts.length,metres:q.lengthM,strips:q.stockStrips,sheets:q.sheets,triangleChecks:examined,collisions:errors.length,examples:errors.slice(0,3)}));
 caps.forEach(c=>{c.mesh.geometry.dispose();c.mesh.material.dispose();});
 assert.equal(errors.length,0,`${id}: batten intersections`);
}
