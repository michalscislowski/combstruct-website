import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {battenPartsForHouse,battenMesh} from './batten-geometry.js';
import {battenQuantities} from './batten-quantities.js';

export function addBattenLayer(model,material) {
 const parts=battenPartsForHouse(model,{catalogue:true}),byParent=new Map(),groups=[];
 for(const p of parts){
  if(!byParent.has(p.parent))byParent.set(p.parent,[]);
  byParent.get(p.parent).push(battenMesh(p,material).geometry);
 }
 for(const [name,geometries] of byParent){
  const parent=model.root.getObjectByName(name);if(!parent)throw Error('Missing batten parent: '+name);
  const group=new THREE.Group();group.name='battens:'+name;
  const geometry=mergeGeometries(geometries);geometries.forEach(g=>g.dispose());
  const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=true;mesh.receiveShadow=true;
  group.add(mesh);parent.add(group);groups.push(group);
 }
 const quantities=battenQuantities(parts);
 return {parts,quantities,groups,setVisible:visible=>groups.forEach(g=>g.visible=visible)};
}
