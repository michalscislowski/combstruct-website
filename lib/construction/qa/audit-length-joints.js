import {buildStructure} from 'project-structure';
import {orthogonalCells,intersectCells} from './solid-cells.js';
import {stockBounds} from '../stock-profile.js';
import * as THREE from 'three';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const project=process.argv[2],strategy=process.argv[3]||'full-end-slot';
const model=buildStructure({}, {insulation:false,jointStrategy:strategy});
const entries=model.boards.map(board=>({board,cells:orthogonalCells(board),box:new THREE.Box3().setFromObject(board.mesh)}));
const collisions=[],counts={},pairs={};
for(let i=0;i<entries.length;i++)for(let j=i+1;j<entries.length;j++){
  const a=entries[i],b=entries[j];if(!a.cells||!b.cells)continue;
  const intersection=a.box.clone().intersect(b.box),size=intersection.getSize(new THREE.Vector3());
  if(intersection.isEmpty()||Math.min(...size.toArray())<1e-6)continue;
  const planes=[...(a.board.clippingPlanes||[]),...(b.board.clippingPlanes||[])];
  let hit;
  outer:for(const ac of a.cells)for(const bc of b.cells)for(const ar of a.board.clippingRegions||[[]])for(const br of b.board.clippingRegions||[[]]){hit=intersectCells(ac,bc,[...planes,...ar,...br]);if(hit)break outer;}
  if(!hit)continue;
  const info=e=>({id:e.board.id,surface:e.board.surface,wallId:e.board.wallId,kind:e.board.kind,axis:e.board.axis,index:e.board.index,layer:e.board.layer,stock:e.board.stock,position:e.board.mesh.position.toArray(),normal:e.board.normal,along:e.board.along});
  collisions.push({a:info(a),b:info(b),...hit});
  const key=[a.board.surface,b.board.surface].sort().join(' / ');counts[key]=(counts[key]||0)+1;
  const pk=[a.board.surface+':'+a.board.axis,b.board.surface+':'+b.board.axis].sort().join(' / ');pairs[pk]=(pairs[pk]||0)+1;
}
const overlength=model.boards.filter(b=>{const [lo,hi]=stockBounds(b.stock,false);return hi-lo>2.5+1e-8});
const report={project,strategy,boards:model.boards.length,orthogonal:entries.filter(e=>e.cells).length,connectorBoards:model.boards.filter(b=>b.connectorCuts.length).length,overlength:overlength.map(b=>b.id),collidingPairs:collisions.length,counts,pairs,collisions,dimensions:model.dimensions};
fs.writeFileSync(`lib/construction/qa/${project}-full-end-slots.json`,JSON.stringify(report,null,2));
console.log(JSON.stringify({...report,collisions:collisions.slice(0,3)},null,2));
assert.equal(overlength.length,0);
assert.equal(collisions.length,0,'Intersecting orthogonal solids');
assert.equal(report.connectorBoards,0);
