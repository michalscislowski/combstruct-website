import {test} from 'node:test';
import assert from 'node:assert/strict';
import {battenQuantities} from '../lib/construction/batten-quantities.js';
const parts=lengths=>lengths.map(lengthM=>({lengthM,kind:'wall'}));
test('count actual stock lengths, not only a linear metre equivalent',()=>{
 const q=battenQuantities(parts([1.6,1.6,1.6]));assert.equal(q.stockStrips,3);assert.equal(q.sheets,1);
});
test('reuse offcuts and assign every finished strip exactly once',()=>{
 const q=battenQuantities(parts([1.6,.9,.9,1.6]));assert.equal(q.stockStrips,2);assert(Math.abs(q.offcutLengthM)<1e-8);
 assert.deepEqual(q.cuttingPlan.flat().sort((a,b)=>a-b),[0,1,2,3]);
});
test('twenty full battens per sheet with no kerf, round only final sheet count',()=>{
 assert.equal(battenQuantities(parts(Array(20).fill(2.5))).sheets,1);
 assert.equal(battenQuantities(parts(Array(21).fill(2.5))).sheets,2);
 assert.equal(battenQuantities([]).sheets,0);
 assert.throws(()=>battenQuantities(parts([2.6])));
});
