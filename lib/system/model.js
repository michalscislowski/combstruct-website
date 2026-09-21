import * as THREE from 'three';
import {buildStructure} from '../construction/125/structure.js';
import {createConstruction,X,Y,Z,H} from '../construction/core.js';
import {BATTEN} from '../construction/battens.js';
import {battenPartsForHouse} from '../construction/batten-geometry.js';
export {battenPartsForHouse} from '../construction/batten-geometry.js';

// The catalogue owns the house. This adapter adds only the teaching samples
// and the closing strips, without moving or rebuilding any house component.
export function buildSystemModel(materials={}) {
 const house=buildStructure(materials);
 const single=new THREE.Group(),pair=new THREE.Group(),sample=new THREE.Group();
 const singleEngine=createConstruction(materials),pairEngine=createConstruction(materials),sampleEngine=createConstruction(materials);
 singleEngine.addBoard(single,{pixels:6,start:0,layer:0},X,Y,Z,new THREE.Vector3());
 for(const p of pairEngine.segments(9,3))pairEngine.addBoard(pair,p,X,Y,Z,new THREE.Vector3());
 sampleEngine.grid(sample,9,6,new THREE.Vector3(),X,Z,Y);

 const battenParts=battenPartsForHouse(house);
 const battens=new THREE.Group();battens.name='wall-and-roof-battens';
 const strips=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),
  materials.batten||new THREE.MeshStandardMaterial({color:'#43948c'}),battenParts.length);
 const matrix=new THREE.Matrix4(),rotation=new THREE.Quaternion();
 battenParts.forEach((p,i)=>strips.setMatrixAt(i,matrix.compose(new THREE.Vector3(...p.center),rotation,new THREE.Vector3(...p.size))));
 strips.instanceMatrix.needsUpdate=true;strips.castShadow=true;strips.receiveShadow=true;
 battens.add(strips);house.root.add(battens);battens.visible=false;
 return {house,single,pair,sample,battens,battenParts,
  sampleBoards:[singleEngine.boards,pairEngine.boards,sampleEngine.boards]};
}
