import * as THREE from 'three';
import {selectedPart,initialSelection,quantity,length} from './catalogue.js';

export function partScene(data,selection=initialSelection(data)) {
  const {family,variant}=selectedPart(data,selection),root=new THREE.Group();
  const samples=[variant.preview];
  const material=new THREE.MeshStandardMaterial({color:'#43948c',roughness:.75,side:THREE.DoubleSide,flatShading:true});
  const line=new THREE.LineBasicMaterial({color:'#66543a',transparent:true,opacity:.45});
  samples.forEach(sample=>{
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.Float32BufferAttribute(sample.positions,3));
    geometry.setIndex(sample.indices);geometry.computeVertexNormals();
    const mesh=new THREE.Mesh(geometry,material);
    mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry,30),line));
    root.add(mesh);
  });
  return {root,direction:new THREE.Vector3(.12,.65,3),
    annotation:`${family.name} · ${length(variant.lengthM)} · ${quantity(variant.count)}`,
    getPartsState:()=>({project:data.project,totalBoards:data.totalBoards,family:family.id,familyCount:family.count,variant:selection.variant,
      quantity:variant.count,samples:samples.map(s=>s.stockId),basis:data.basis,
      lengthM:variant.lengthM,mode:'delivery',geometrySha256:data.geometrySha256}),
  };
}

export function disposeParts(root) {
  const materials=new Set();
  root.traverse(o=>{o.geometry?.dispose();if(o.material)materials.add(o.material);});
  materials.forEach(m=>m.dispose());
}
