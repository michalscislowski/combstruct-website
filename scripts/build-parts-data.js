// Bundle with the construction viewers' Three.js; run from the repository root.
// The kit contains native boards BEFORE cuts for openings or roof outlines.
import * as THREE from 'three';
import {buildStructure as build30} from '../lib/construction/30/structure.js';
import {buildStructure as build90} from '../lib/construction/90/structure.js';
import {buildStructure as build125} from '../lib/construction/125/structure.js';
import {createConstruction} from '../lib/construction/core.js';
import {familyDefinitions} from '../lib/parts/families.js';
import {deliveryStock} from '../lib/parts/stock.js';
import {battenPartsForHouse} from '../lib/construction/batten-geometry.js';
import {battenQuantities} from '../lib/construction/batten-quantities.js';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import assert from 'node:assert/strict';

const audit=JSON.parse(fs.readFileSync('lib/construction/qa/quantities.json'));
fs.mkdirSync('site/assets/parts',{recursive:true});
fs.mkdirSync('lib/parts/qa',{recursive:true});

function preview(stock){
  const p={...stock.stock,start:0,layer:0,trim:stock.trim};
  const target=new THREE.Group();target.name='stock-preview';
  // The native-profile builder receives all connector cuts required by this
  // board's descendants. No minCut/limit or roof plane reaches it.
  const key=JSON.stringify([target.name,'','standard',null,null,0,0,...[0,p.pixels,0,p.pixels*2.5/6].map(n=>Math.round(n*1e7)/1e7)]);
  const engine=createConstruction({}, {[key]:stock.connectorCuts});
  const mesh=engine.addBoard(target,p,new THREE.Vector3(1,0,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,0,1),new THREE.Vector3());
  assert(mesh);assert.equal(engine.boards[0].custom,false);
  assert.deepEqual(engine.boards[0].connectorCuts,stock.connectorCuts);
  const geometry=mesh.geometry;geometry.center();geometry.computeBoundingBox();
  const size=geometry.boundingBox.getSize(new THREE.Vector3());
  assert(Math.abs(size.x-stock.lengthM)<1e-5);
  const positions=geometry.attributes.position,vertices=[],indices=[],lookup=new Map();
  for(let i=0;i<(geometry.index?.count||positions.count);i++){
    const j=geometry.index?geometry.index.getX(i):i;
    const vertex=[positions.getX(j),positions.getY(j),positions.getZ(j)].map(n=>Math.round(n*1e6)/1e6),key=vertex.join(',');
    if(!lookup.has(key)){lookup.set(key,vertices.length/3);vertices.push(...vertex);}
    indices.push(lookup.get(key));
  }
  geometry.dispose();mesh.material.dispose();
  return{stockId:stock.id,positions:vertices,indices,lengthM:stock.lengthM};
}

for(const [id,build] of [['30',build30],['90',build90],['125',build125]]){
  const model=build({}, {insulation:false}),fingerprint=createHash('sha256');
  for(const b of model.boards){
    const g=b.mesh.geometry.clone().translate(...b.mesh.position.toArray());
    fingerprint.update(b.id);fingerprint.update(new Uint8Array(g.attributes.position.array.buffer));g.dispose();
  }
  const geometrySha256=fingerprint.digest('hex');
  assert.equal(geometrySha256,audit.projects[id].geometrySha256);
  assert.equal(model.boards.length,audit.projects[id].physicalBoards);
  const stocks=deliveryStock(model.boards),membership=new Map();
  for(const s of stocks)for(const boardId of s.members){assert(!membership.has(boardId));membership.set(boardId,s.id);}
  assert.equal(membership.size,model.boards.length);
  const families=familyDefinitions.map(([familyId,name])=>{
    const familyStocks=stocks.filter(s=>s.family===familyId),groups=new Map();
    for(const stock of familyStocks){
      if(!groups.has(stock.variantKey))groups.set(stock.variantKey,[]);
      groups.get(stock.variantKey).push(stock);
    }
    const variants=[...groups.values()].sort((a,b)=>b[0].lengthM-a[0].lengthM).map((items,index)=>({
      id:`${familyId}-${index+1}`,count:items.length,modules:items[0].stock.pixels,
      ending:!!items[0].trim,lengthM:items[0].lengthM,preview:preview(items[0]),
    }));
    assert.equal(variants.reduce((sum,v)=>sum+v.count,0),familyStocks.length);
    return{id:familyId,name,count:familyStocks.length,variants};
  }).filter(f=>f.count);
  assert.equal(families.reduce((sum,f)=>sum+f.count,0),stocks.length);
  const lengthM=Number(stocks.reduce((sum,s)=>sum+s.lengthM,0).toFixed(8));
  const material={lengthM,fullBoardEquivalents:lengthM/2.5,fullBoards:Math.ceil(lengthM/2.5),sheets:Math.ceil(lengthM/12.5)};
  const battenParts=battenPartsForHouse(model,{catalogue:true,partitions:true,floor:true});
  const {cuttingPlan,...battens}=battenQuantities(battenParts);
  const box=new THREE.BoxGeometry(2.5,.06,.018);
  const battenPreview={stockId:'batten-2500',positions:Array.from(box.attributes.position.array),indices:Array.from(box.index.array),lengthM:2.5};box.dispose();
  const additionalFamilies=[{id:'battens',name:'Łata 60 × 18 mm',count:battens.stockStrips,variants:[{id:'batten-2500',count:battens.stockStrips,lengthM:2.5,preview:battenPreview}]}];
  material.battenSheets=battens.sheets;material.totalSheets=material.sheets+battens.sheets;
  const data={project:id,name:`Combstruct ${id}`,basis:'delivery-before-cutting',geometrySha256,totalBoards:stocks.length,installedPieces:model.boards.length,material,families,battens,additionalFamilies};
  fs.writeFileSync(`lib/construction/qa/${id}-battens.json`,JSON.stringify({project:id,quantities:{...battens,cuttingPlan},parts:battenParts})+'\n');
  fs.writeFileSync(`site/assets/parts/${id}.json`,JSON.stringify(data)+'\n');
  const evidence={basis:data.basis,geometrySha256,stockBoards:stocks.length,installedPieces:model.boards.length,assignments:Object.fromEntries(membership)};
  const records=stocks.map(({id,key,members,stock,trim,connectorCuts,family})=>({id,key,members,modules:stock.pixels,trim,connectorCuts,family,...stock}));
  fs.writeFileSync(`lib/parts/qa/${id}.json`,JSON.stringify(evidence,null,2).slice(0,-2)+',\n  "stocks": [\n'+records.map(r=>'    '+JSON.stringify(r)).join(',\n')+'\n  ]\n}\n');
  console.log(JSON.stringify({project:id,delivery:stocks.length,installed:model.boards.length,battenMetres:battens.lengthM,battenStrips:battens.stockStrips,material}));
}
