import * as THREE from 'three';
import {buildStructure} from 'project-structure';
import {countInsulation} from './insulation-count.js';
import fs from 'node:fs';
const project=process.argv[2],model=buildStructure();
for(const b of model.boards)b.mesh.userData.partsBasis=new THREE.Matrix4().makeBasis(...[b.along,b.normal,b.thick].map(a=>new THREE.Vector3(...a))).toArray();
const data=project==='125'?{count:model.insulationCount,method:'existing-model-instances'}:countInsulation(model,model.boards,project);
fs.writeFileSync(`lib/construction/qa/${project}-insulation-summary.json`,JSON.stringify({...data,layers:data.layers?.map(({blocks,...l})=>l)},null,2)+'\n');
console.log(JSON.stringify({...data,layers:data.layers?.map(({blocks,...l})=>l)}));
