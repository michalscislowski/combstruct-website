// Bundle with the viewer's Three.js, then run from the repository root.
// This is a bill of physical pieces. Stock-length equivalents remain in the
// material/price audit; they are never used as the count of a displayed shape.
import * as THREE from 'three';
import {buildStructure as build30} from '../lib/construction/30/structure.js';
import {buildStructure as build90} from '../lib/construction/90/structure.js';
import {buildStructure as build125} from '../lib/construction/125/structure.js';
import {boardFamily, familyDefinitions, nativeVariantKey} from '../lib/parts/families.js';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import assert from 'node:assert/strict';

const audit = JSON.parse(fs.readFileSync('lib/construction/qa/quantities.json'));
const flow = JSON.parse(fs.readFileSync('lib/technology/manufacturing-data.json'));
fs.mkdirSync('site/assets/parts', {recursive:true});
fs.mkdirSync('lib/parts/qa', {recursive:true});

function localGeometry(board) {
  const basis = new THREE.Matrix4().makeBasis(...[board.along,board.normal,board.thick].map(a => new THREE.Vector3(...a)));
  const geometry = board.mesh.geometry.clone().applyMatrix4(basis.invert());
  geometry.center(); geometry.computeBoundingBox();
  return geometry;
}
function preview(board) {
  const geometry = localGeometry(board), positions = geometry.attributes.position;
  const vertices = [], indices = [], lookup = new Map();
  for (let i=0; i<(geometry.index?.count || positions.count); i++) {
    const j = geometry.index ? geometry.index.getX(i) : i;
    const vertex = [positions.getX(j),positions.getY(j),positions.getZ(j)].map(n=>Math.round(n*1e6)/1e6);
    const key=vertex.join(',');
    if (!lookup.has(key)) {lookup.set(key,vertices.length/3);vertices.push(...vertex);}
    indices.push(lookup.get(key));
  }
  const size = geometry.boundingBox.getSize(new THREE.Vector3()); geometry.dispose();
  return {boardId:board.id,positions:vertices,indices,lengthM:size.x};
}

for (const [id, build] of [['30',build30],['90',build90],['125',build125]]) {
  const model=build({}, {insulation:false}), fingerprint=createHash('sha256'), membership=new Map();
  for (const b of model.boards) {
    const geometry=b.mesh.geometry.clone().translate(...b.mesh.position.toArray());
    fingerprint.update(b.id);fingerprint.update(new Uint8Array(geometry.attributes.position.array.buffer));geometry.dispose();
  }
  const geometrySha256=fingerprint.digest('hex');
  assert.equal(geometrySha256,audit.projects[id].geometrySha256,'Quantity audit must match the current house');
  const families=familyDefinitions.map(([familyId,name])=>{
    const boards=model.boards.filter(b=>boardFamily(b)===familyId), native=new Map(), fitted=[];
    for (const b of boards) {
      assert(!membership.has(b.id),'A piece cannot appear in two quantities');
      if (b.custom) {fitted.push(b);membership.set(b.id,`${familyId}/fitted`);continue;}
      const key=nativeVariantKey(b);
      if (!native.has(key)) native.set(key,[]);
      native.get(key).push(b);
    }
    const variants=[...native.entries()].sort(([,a],[,b])=>b[0].stock.pixels-a[0].stock.pixels).map(([key,items],index)=>{
      const sample=preview(items[0]),variantId=`${familyId}-${index+1}`;
      const expected=items[0].stock.pixels*2.5/6-(items[0].trim?.length ? .24:0);
      assert(Math.abs(sample.lengthM-expected)<.00001,'Native length must match its displayed geometry');
      for(const b of items) membership.set(b.id,variantId);
      return {id:variantId,count:items.length,modules:items[0].stock.pixels,ending:!!items[0].trim,lengthM:expected,preview:sample};
    });
    // Project-fitted pieces are one clearly labelled subset, not hundreds of
    // invented system types. Show several actual examples, never a full stock
    // board labelled with the entire fitted subset's count.
    const ordered=[...fitted].sort((a,b)=>Number(!!b.mesh.geometry.userData.angledCut)-Number(!!a.mesh.geometry.userData.angledCut)||a.stockLength-b.stockLength);
    const examples=[...new Set([ordered[0],ordered[Math.floor(ordered.length/2)],ordered.at(-1)])].filter(Boolean).map(preview);
    assert.equal(variants.reduce((sum,v)=>sum+v.count,0)+fitted.length,boards.length);
    return {id:familyId,name,count:boards.length,variants,fitted:{count:fitted.length,examples}};
  }).filter(f=>f.count);
  assert.equal(membership.size,model.boards.length);
  assert.equal(families.reduce((s,f)=>s+f.count,0),audit.projects[id].physicalBoards);
  if(id==='30') for(const f of families) assert.equal(f.count,flow.families.find(old=>old.id===f.id).count);
  const data={project:id,name:`Combstruct ${id}`,geometrySha256,totalBoards:model.boards.length,families};
  fs.writeFileSync(`site/assets/parts/${id}.json`,JSON.stringify(data)+'\n');
  fs.writeFileSync(`lib/parts/qa/${id}.json`,JSON.stringify({geometrySha256,assignments:Object.fromEntries(membership)},null,2)+'\n');
  console.log(JSON.stringify({project:id,total:data.totalBoards,fullOrdinary:families[0].variants.find(v=>v.modules===6)?.count,families:families.map(f=>({id:f.id,total:f.count,native:f.variants.reduce((s,v)=>s+v.count,0),fitted:f.fitted.count,variants:f.variants.length}))}));
}
