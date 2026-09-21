import test from 'node:test';
import assert from 'node:assert/strict';
import {wallBattens,BATTEN} from '../lib/construction/battens.js';
const area=p=>(p.u1-p.u0)*(p.v1-p.v0);
test('two plies form one batten line, using at most 2500 mm stock',()=>{
 const pieces=wallBattens([{axis:1,index:1,center:1,intervals:[[0,2.5],[1.25,3.75],[0,1.25]]}]);
 assert.equal(pieces.length,2);
 assert.deepEqual(pieces.map(p=>[p.v0,p.v1]),[[0,2.5],[2.5,3.75]]);
 for(const p of pieces){assert.equal(p.side,'exterior');assert(Math.abs((p.u1+p.u0)/2-1)<1e-10);assert(Math.abs(p.u1-p.u0-.06)<1e-10);}
});
test('inside strips run horizontally and close the opposite rib family',()=>{
 const pieces=wallBattens([{axis:0,index:2,center:.8,intervals:[[0,6]]}]);
 assert.deepEqual(pieces.map(p=>[p.u0,p.u1]),[[0,2.5],[2.5,5],[5,6]]);
 assert(pieces.every(p=>p.side==='interior'&&Math.abs(p.v1-p.v0-BATTEN.width)<1e-8));
});
test('openings remove the whole intersected batten area, including the 12 mm overhang at jambs',()=>{
 const ribs=[{axis:1,index:1,center:0,intervals:[[0,3]]}],hole={u0:.018,u1:1,v0:.5,v1:2};
 const full=wallBattens(ribs),cut=wallBattens(ribs,[hole]);
 for(const p of cut)assert(Math.min(p.u1,hole.u1)-Math.max(p.u0,hole.u0)<1e-8||Math.min(p.v1,hole.v1)-Math.max(p.v0,hole.v0)<1e-8);
 assert(Math.abs(full.reduce((n,p)=>n+area(p),0)-cut.reduce((n,p)=>n+area(p),0)-.012*1.5)<1e-9);
 const central=wallBattens(ribs,[{u0:-1,u1:1,v0:.5,v1:2}]);
 assert(central.every(p=>p.v1<=.5||p.v0>=2));
});
test('disconnected rib fragments are not joined across an opening',()=>{
 const pieces=wallBattens([{axis:1,index:1,center:0,intervals:[[0,.7],[2.1,3]]}]);
 assert.deepEqual(pieces.map(p=>[p.v0,p.v1]),[[0,.7],[2.1,3]]);
});
