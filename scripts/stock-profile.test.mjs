import test from 'node:test';
import assert from 'node:assert/strict';
import {planStock} from '../lib/construction/stock-layout.js';
import {stockBounds,stockSlots,MODULE as P,THICKNESS as T} from '../lib/construction/stock-profile.js';
import {nativeVariantKey} from '../lib/parts/families.js';
const near=(a,b)=>assert(Math.abs(a-b)<1e-8,`${a} != ${b}`);

test('full end slot preserves every internal station and expands only the plain half',()=>{
  const p={pixels:5,extendEnd:T},slots=stockSlots(p);
  near(slots.at(-1)[1]-slots.at(-1)[0],2*T);
  for(let i=1;i<5;i++)near((slots[i][0]+slots[i][1])/2,i*P);
  near(stockBounds(p,false)[1],5*P+T);
  near(stockBounds({pixels:5,trim:'left',extraStartTrim:T},false)[0],.258);
});

test('both node orientations keep a 240 mm seat and remain within a 2500 mm sheet',()=>{
  for(const phase of [0,1])for(const layer of [0,1])for(const side of ['left','right']){
    const pieces=planStock(18,phase,[{at:8,layer,side,fullEndSlot:true}]);
    const pair=pieces.filter(p=>(p.layer^phase)===layer);
    const before=pair.find(p=>Math.abs(p.start+p.pixels*P-8*P)<1e-8);
    const after=pair.find(p=>Math.abs(p.start-8*P)<1e-8);
    near(after.start+stockBounds(after,false)[0]-before.start-stockBounds(before,false)[1],.24);
    if(side==='left'){near(before.extendEnd,T);near(after.extraStartTrim,T);}
    else{near(before.extraEndTrim,T);near(after.extendStart,T);}
    for(const p of pieces){const [lo,hi]=stockBounds(p,false);assert(hi-lo<=2.5+1e-8);}
    const seams=pieces.filter(p=>p.start>0).map(p=>({at:p.start,layer:p.layer^phase}));
    for(const a of seams)for(const b of seams)if(a.layer!==b.layer)assert(Math.abs(a.at-b.at)>1e-8);
  }
});

test('an extended full board forces a shorter stock rather than 2518 mm',()=>{
  const pieces=planStock(12,0,[{at:6,side:'left',layer:0,fullEndSlot:true}]);
  const expanded=pieces.find(p=>p.extendEnd);
  assert(expanded&&expanded.pixels<6);
  for(const p of pieces){const [lo,hi]=stockBounds(p,false);assert(hi-lo<=2.5+1e-8);}
});

test('stock keys merge mirrors but distinguish end treatments',()=>{
  const key=(stock,trim=null)=>nativeVariantKey({stock,trim,connectorCuts:[]});
  assert.equal(key({pixels:5,extendStart:T}),key({pixels:5,extendEnd:T}));
  assert.notEqual(key({pixels:5}),key({pixels:5,extendEnd:T}));
  assert.equal(key({pixels:5,extraStartTrim:T},'left'),key({pixels:5,extraEndTrim:T},'right'));
  assert.notEqual(key({pixels:5},'left'),key({pixels:5,extraStartTrim:T},'left'));
});
