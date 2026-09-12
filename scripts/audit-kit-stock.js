import * as THREE from 'three';
import {buildStructure as build30} from '../lib/construction/30/structure.js';
import {buildStructure as build90} from '../lib/construction/90/structure.js';
import {buildStructure as build125} from '../lib/construction/125/structure.js';
import {deliveryStock} from '../lib/parts/stock.js';
import assert from 'node:assert/strict';
import fs from 'node:fs';
for(const [id,build] of [['30',build30],['90',build90],['125',build125]]) {
const model=build({}, {insulation:false}),stocks=deliveryStock(model.boards);
const data=JSON.parse(fs.readFileSync(`site/assets/parts/${id}.json`));
const byId=new Map(model.boards.map(b=>[b.id,b])),assigned=new Set(),epsilon=1e-5;
// Independent provenance: the original construction schedule excludes only
// the two limits added by opening subtraction. It must agree with spatial keys.
const sourceKeys=new Set(model.boards.map(b=>JSON.stringify(JSON.parse(b.connectorKey).slice(0,-2))));
assert.equal(sourceKeys.size,stocks.length);
let vertices=0;
for(const stock of stocks){
 const length=stock.stock.pixels*2.5/6,lo=stock.trim==='left' ? .24 : 0,hi=length-(stock.trim==='right' ? .24 : 0);
 for(const boardId of stock.members){
  assert(!assigned.has(boardId));assigned.add(boardId);
  const b=byId.get(boardId),basis=new THREE.Matrix4().makeBasis(...[b.along,b.normal,b.thick].map(v=>new THREE.Vector3(...v))).invert();
  const p=b.mesh.geometry.attributes.position;
  for(let i=0;i<p.count;i++){
   const v=new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(basis);vertices++;
   assert(v.x>=lo-epsilon&&v.x<=hi+epsilon&&Math.abs(v.y)<=.12+epsilon&&v.z>=-epsilon&&v.z<=.018+epsilon,`Piece outside its stock: ${boardId}`);
   // Connector requirements from a sibling cannot remove material needed here.
   for(const c of stock.connectorCuts){
    const a=c.end==='start'?c.offset:length-c.offset-.12,top=c.edge==='slotted';
    const y0=top ? .102 : -.12,y1=top ? .12 : -.102;
    assert(!(v.x>a+epsilon&&v.x<a+.12-epsilon&&v.y>y0+epsilon&&v.y<y1-epsilon),`Merged cut damages sibling ${boardId}`);
   }
  }
 }
}
assert.equal(assigned.size,model.boards.length);assert.equal(stocks.length,data.totalBoards);
assert.equal(data.families.reduce((s,f)=>s+f.variants.reduce((n,v)=>n+v.count,0),0),stocks.length);
assert(data.families.every(f=>!('fitted' in f)));
assert.equal(data.material.sheets,Math.ceil(stocks.reduce((s,b)=>s+b.lengthM,0)/12.5));
console.log(JSON.stringify({project:id,stocks:stocks.length,installed:assigned.size,independentSchedulesMatch:true,checkedVertices:vertices,sheets:data.material.sheets}));
}
