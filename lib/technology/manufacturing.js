import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {getModel,beamGeometry,boardInfo} from './geometry.js';

const V=(...v)=>new THREE.Vector3(...v);
export const flowSteps=[
 {title:'Punktem wyjścia jest projekt budynku.',text:'Rzuty od klienta, dokumentacja od projektanta albo projekt powtarzalny dewelopera. Zaczynamy od układu pomieszczeń, wymiarów i założeń konkretnej inwestycji.',label:'Na wejściu',items:['Rzuty kondygnacji','Wymiary i wysokości','Założenia inwestycji']},
 {title:'Projekt staje się modelem Combstruct.',text:'Wymiary dopasowane do modułu. Podłoga, ściany, stropy i dach we wspólnym modelu 3D. Każda deska otrzymuje identyfikator i przypisane miejsce w konstrukcji.',label:'W jednym modelu',items:['Konstrukcja w technologii Combstruct','Dopasowanie elementów i połączeń','Identyfikator każdej części']},
 {title:'Dokładnie wiadomo, co wyprodukować.',text:'Z modelu powstaje precyzyjne zamówienie: rodzaje desek, wymiary, ilości i oznaczenia. Te same dane prowadzą od rozkroju płyt do przygotowania pakietów na budowę.',label:'Dla produkcji',items:['Wykaz części, materiał i ilości','Rozkrój płyt i oznaczenia elementów','Podział na pakiety do montażu']},
 {title:'Każdy element trafia na swoje miejsce.',text:'Oznaczone części i ich miejsca we wspólnym modelu ułatwiają organizację budowy. Wykonawca wie, od czego zacząć i co dołożyć dalej. Ten sam system wspiera montaż z ekipą i DIY.',label:'Na budowie',items:['Elementy oznaczone identyfikatorami','Czytelna kolejność montażu','DIY lub montaż z ekipą']},
];

function label(text,size=1){
 const c=document.createElement('canvas');c.width=512;c.height=90;const ctx=c.getContext('2d');ctx.font='500 32px Helvetica Neue, Arial, sans-serif';ctx.textAlign='center';ctx.fillStyle='#254331';ctx.fillText(text,256,54);
 const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
 const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map,depthTest:false}));sprite.scale.set(size,size*90/512,1);return sprite;
}

export function manufacturingScene(stage){
 const model=getModel(),d=model.dimensions,root=new THREE.Group();root.name='Combstruct Flow';
 const wood=new THREE.MeshStandardMaterial({color:'#c49b62',roughness:.85});
 const green=new THREE.MeshStandardMaterial({color:'#43948c',roughness:.75});
 const graphite=new THREE.MeshStandardMaterial({color:'#33493e',roughness:.85});
 const line=new THREE.LineBasicMaterial({color:'#66543a',transparent:true,opacity:.45});
 const addBox=(w,h,depth,x,y,z,mat=graphite)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,depth),mat);m.position.set(x,y,z);root.add(m);return m;};
 const addGeometry=(g,mat=wood)=>{const m=new THREE.Mesh(g,mat);m.add(new THREE.LineSegments(new THREE.EdgesGeometry(g,30),line));root.add(m);return m;};
 const addLabel=(text,x,y,z,size)=>{const l=label(text,size);l.position.set(x,y,z);root.add(l);};
 if(stage===0){
  const paper=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:1});
  addBox(d.width+1.8,.065,d.depth+1.8,0,-.085,0,paper);
  // The footprint, opening positions and partition edges come from this same house.
  for(const wall of model.wallPanels){
   const cuts=[wall.start,wall.end,...wall.holes.flatMap(h=>wall.axis===0?[h.world.x0,h.world.x1]:[h.world.z0,h.world.z1])].sort((a,b)=>a-b);
   for(let i=1;i<cuts.length;i++){
    const a=cuts[i-1],b=cuts[i],mid=(a+b)/2;
    if(b-a<.001||wall.holes.some(h=>mid>(wall.axis===0?h.world.x0:h.world.z0)&&mid<(wall.axis===0?h.world.x1:h.world.z1)))continue;
    if(wall.axis===0)addBox(b-a,.18,wall.depth,mid,.06,wall.fixed);
    else addBox(wall.depth,.18,b-a,wall.fixed,.06,mid);
   }
   for(const h of wall.holes){
    const a=wall.axis===0?h.world.x0:h.world.z0,b=wall.axis===0?h.world.x1:h.world.z1;
    if(h.kind==='window')wall.axis===0?addBox(b-a,.035,.035,(a+b)/2,.025,wall.fixed,green):addBox(.035,.035,b-a,wall.fixed,.025,(a+b)/2,green);
   }
  }
  for(const room of model.rooms){
   addLabel(room.name,(room.x0+room.x1)/2,.26,(room.z0+room.z1)/2,room.id==='living'?3.5:3.2);
  }
  addLabel(`${d.width.toFixed(2).replace('.',',')} m`,0,.03,d.halfDepth+.56,2.9);
  addLabel(`${d.depth.toFixed(2).replace('.',',')} m`,-d.halfWidth-.62,.03,0,2.9);
  return{root,direction:V(.15,7,3.5),annotation:'Przykład: rzut Combstruct 30'};
 }
 if(stage===2){
  // Five native 2.5 m × 24 cm boards fit the supplied 2500 × 1250 mm sheet rule.
  const bed=new THREE.MeshStandardMaterial({color:'#e0e6de',roughness:.9});
  addBox(2.82,.09,1.56,0,-.10,0,bed);
  const sample=model.boards.find(b=>!b.custom&&!b.trim&&!b.connectorCuts.length&&b.stock.pixels===6);
  const id=boardInfo(sample).id;
  for(let row=0;row<5;row++){
   const g=beamGeometry(6).rotateX(-Math.PI/2),m=addGeometry(g,row===2?green:wood);
   m.position.set(-1.25,row===2?.17:.006,(row-2)*.2525);
  }
  addLabel('2500 × 1250 × 18 mm',0,.04,.92,1.55);
  addLabel(`${id} · 2500 × 240 mm`,0,.30,-.08,1.65);
  return{root,direction:V(1.1,2.2,2.4),annotation:'Produkcja · 5 desek z jednej płyty',sheet:{width:2500,height:1250,thickness:18,boards:5}};
 }
 const rank=b=>b.kind==='floor'?0:b.kind==='wall'?(b.axis===1?1:2):b.kind==='partition'?(b.axis===1?3:4):b.kind==='ceiling'?5:b.kind==='gable'?6:b.kind==='roof-slope'?7:8;
 const records=[...model.boards].sort((a,b)=>rank(a)-rank(b)||a.bounds.min.y-b.bounds.min.y||a.id.localeCompare(b.id,undefined,{numeric:true}));
 const geometries=[],outlines=[],counts=[],edgeCounts=[];let total=0,edgeTotal=0;
 for(const b of records){
  const g=b.mesh.geometry.index?b.mesh.geometry.toNonIndexed():b.mesh.geometry.clone();g.translate(...b.mesh.position.toArray());geometries.push(g);
  const e=new THREE.EdgesGeometry(g,30);outlines.push(e);total+=g.attributes.position.count;edgeTotal+=e.attributes.position.count;counts.push(total);edgeCounts.push(edgeTotal);
 }
 const merged=mergeGeometries(geometries,false),edges=mergeGeometries(outlines,false);geometries.forEach(g=>g.dispose());outlines.forEach(g=>g.dispose());
 const house=new THREE.Mesh(merged,wood),outline=new THREE.LineSegments(edges,line);root.add(house,outline);let visible=records.length;
 if(stage===1){
  const sample=records.find(b=>b.surface==='front'&&b.axis===1&&b.index===9)||records[150];
  const g=sample.mesh.geometry.clone().translate(...sample.mesh.position.toArray());addGeometry(g,green);
  const p=sample.bounds.getCenter(V());addLabel(boardInfo(sample).id,p.x,p.y+.45,p.z+.25,1.4);
 }
 return{
  root,direction:V(1.4,1,1.5),annotation:stage===1?'Combstruct 30 · cyfrowy model elementów':'Przesuń suwak i zobacz kolejność montażu',
  assembly(value){visible=Math.max(0,Math.min(records.length,Math.round(value*records.length)));merged.setDrawRange(0,counts[visible-1]||0);edges.setDrawRange(0,edgeCounts[visible-1]||0);},
  getManufacturingState(){return{stage,totalBoards:records.length,visibleBoards:visible,example:'Combstruct 30'};},
 };
}
