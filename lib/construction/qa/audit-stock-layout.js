import assert from 'node:assert/strict';
import {planStock} from '../stock-layout.js';
const P=2.5/6;
function validate(parts,n,phase,gaps){
 const seams=[[],[]];
 for(let physical=0;physical<2;physical++){
  let at=0;
  for(const p of parts.filter(p=>(p.layer^phase)===physical).sort((a,b)=>a.start-b.start)){
   assert.equal(Math.round(p.start/P),at);assert(Number.isInteger(p.pixels)&&p.pixels>=1&&p.pixels<=6);
   const end=at+p.pixels;
   const left=(p.layer===1&&at===0)||gaps.some(g=>g.layer===physical&&g.at===at&&g.side==='left');
   const right=(p.layer===1&&end===n)||gaps.some(g=>g.layer===physical&&g.at===end&&g.side==='right');
   assert(!(left&&right));assert.equal(p.trim,left?'left':right?'right':null);
   if(end<n)seams[physical].push(end);at=end;
  }
  assert.equal(at,n);
  for(const g of gaps.filter(g=>g.layer===physical))assert(seams[physical].includes(g.at));
 }
 for(const at of seams[0].filter(at=>seams[1].includes(at)))assert([0,1].every(layer=>gaps.some(g=>g.layer===layer&&g.at===at)),'Only a crossing junction can force both seams');
}
let cases=0;
for(let n=2;n<=48;n++)for(const phase of [0,1]){
 const casesHere=[[],...Array.from({length:n-1},(_,i)=>[{at:i+1,side:'right',layer:1^phase}]),[{at:Math.floor(n/2),side:'right',layer:1^phase},{at:Math.floor(n/2),side:'seam',layer:phase}]];
 for(const gaps of casesHere){
  try{validate(planStock(n,phase,gaps),n,phase,gaps);cases++;}
  catch(e){if(!String(e).includes('No native staggered stock layout:'))throw e;}
 }
}
// An independent exhaustive enumeration proves the first three priorities
// for small spans. This is not another implementation of the DP recurrence.
function compositions(n){if(!n)return [[]];return Array.from({length:Math.min(n,6)},(_,i)=>i+1).flatMap(x=>compositions(n-x).map(rest=>[x,...rest]));}
const cost=parts=>[parts.filter(p=>p.pixels===1&&p.trim).length,parts.filter(p=>p.pixels===1).length,parts.length];
const less=(a,b)=>a[0]!==b[0]?a[0]<b[0]:a[1]!==b[1]?a[1]<b[1]:a[2]<b[2];
let optimal=0;
for(let n=2;n<=8;n++)for(const gaps of [[],[{at:Math.floor(n/2),side:'right',layer:1}]]){
 let best=null;
 for(const a of compositions(n))for(const b of compositions(n)){
  const parts=[];
  for(const [layer,list] of [[0,a],[1,b]]){let at=0;for(const pixels of list){const end=at+pixels;parts.push({layer,start:at*P,pixels,trim:layer===1&&at===0?'left':layer===1&&end===n||gaps.some(g=>g.layer===layer&&g.at===end&&g.side==='right')?'right':null});at=end;}}
  try{validate(parts,n,0,gaps)}catch{continue}
  const c=cost(parts);if(!best||less(c,best))best=c;
 }
 if(best){assert.deepEqual(cost(planStock(n,0,gaps)),best);optimal++;}
 else assert.throws(()=>planStock(n,0,gaps));
}
for(const [n,gaps] of [[13,[{at:6,side:'right',layer:1}]],[9,[]]])assert(!planStock(n,0,gaps).some(p=>p.pixels===1),'Avoidable one-module tail');
assert.equal(planStock(2).filter(p=>p.trim&&p.pixels===1).length,2,'Two ends in a two-module span cannot share a singly shortened board');
const mutable=planStock(13);mutable[0].pixels=99;assert(planStock(13).every(p=>p.pixels<=6),'Cache must not leak mutations');
console.log(JSON.stringify({validSchedules:cases,exhaustiveOptima:optimal,unavoidableShortEndsPreserved:true}));
