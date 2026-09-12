import * as THREE from 'three';

const V=(...v)=>new THREE.Vector3(...v);

// Presentation layer only: actual wall boards, with an illustrative service layout.
// World +X is the interior of the left wall; it becomes the front (+Z) here.
export function interiorScene(model,onSelect,boardInfo){
 const root=new THREE.Group();root.name='Wnętrze — odsłaniana ściana';
 const {module:P,boardDepth:H,boardThickness:T,halfWidth,halfDepth,floorTop,clearHeight}=model.dimensions;
 const width=10*P,height=clearHeight,left=-width/2,right=width/2;
 const center=V(-halfWidth+H/2,floorTop,-halfDepth+7*P);
 const transform=new THREE.Matrix4().makeRotationY(-Math.PI/2).multiply(new THREE.Matrix4().makeTranslation(-center.x,-center.y,-center.z));
 const crop=new THREE.Box3(V(left,0,-H/2-.001),V(right,height,H/2+.001));
 const selectable=[],boards=[],services=[],insulation=[];let selected,reveal=0,cursor=0;
 const mat=(color,roughness=.85,extra={})=>new THREE.MeshStandardMaterial({color,roughness,...extra});
 const paint=mat('#e0e0d9'),ceramic=mat('#f4f3ec',.24),metal=mat('#303b35',.3,{metalness:.6});
 const timber=mat('#ae885a'),boardMaterial=mat('#c49b62');
 const edgeMaterial=new THREE.LineBasicMaterial({color:'#685137',transparent:true,opacity:.42});
 const white=mat('#ecece5'),backing=mat('#bcbcb0');
 const box=(parent,w,h,d,x,y,z,material)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);m.position.set(x,y,z);parent.add(m);return m;};
 const register=(object,info,kind)=>{object.userData.info=info;object.userData.kind=kind;selectable.push(object);return object;};
 const shapeTexture=kind=>{
  const c=document.createElement('canvas');c.width=512;c.height=512;const ctx=c.getContext('2d');let seed=35;
  const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  ctx.fillStyle=kind==='wood'?'#b89670':'#d0c8ae';ctx.fillRect(0,0,512,512);
  for(let i=0;i<(kind==='wood'?1200:9500);i++){
   const x=rand()*512,y=rand()*512;ctx.lineWidth=.4+rand();ctx.strokeStyle=kind==='wood'?(i%2?'#ac875c55':'#d6b68d66'):(i%3?'#f0e9d444':'#9f96744a');
   ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(kind==='wood'?1:(rand()-.5)*17),y+(kind==='wood'?50+rand()*100:(rand()-.5)*18));ctx.stroke();
  }
  const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;return texture;
 };
 const floorMaterial=mat('#e8dac5',.84,{map:shapeTexture('wood')});
 const insulationMaterial=mat('#eee7d3',1,{map:shapeTexture('fiber')});

 // Clip only the drawing's boundary; the source board and its identity stay intact.
 function clipped(g){
  const src=g.index?g.toNonIndexed():g.clone(),p=src.attributes.position,out=[];
  for(let i=0;i<p.count;i+=3){
   let polygon=[0,1,2].map(j=>V().fromBufferAttribute(p,i+j));
   for(const [axis,bound,sign] of [[0,left,1],[0,right,-1],[1,0,1],[1,height,-1]]){
    const next=[];
    for(let j=0;j<polygon.length;j++){
     const a=polygon[j],b=polygon[(j+1)%polygon.length],da=(a.getComponent(axis)-bound)*sign,db=(b.getComponent(axis)-bound)*sign;
     if(da>=0)next.push(a);
     if((da>=0)!==(db>=0))next.push(a.clone().lerp(b,da/(da-db)));
    }
    polygon=next;
   }
   for(let j=1;j<polygon.length-1;j++)out.push(...polygon[0].toArray(),...polygon[j].toArray(),...polygon[j+1].toArray());
  }
  src.dispose();const result=new THREE.BufferGeometry();result.setAttribute('position',new THREE.Float32BufferAttribute(out,3));result.computeVertexNormals();return result;
 }
 for(const b of model.boards.filter(b=>b.surface==='left')){
  const original=b.mesh.geometry.clone().translate(...b.mesh.position.toArray()).applyMatrix4(transform);original.computeBoundingBox();
  if(!original.boundingBox.intersectsBox(crop)){original.dispose();continue;}
  const g=clipped(original);original.dispose();if(!g.attributes.position.count){g.dispose();continue;}
  const m=new THREE.Mesh(g,boardMaterial);m.add(new THREE.LineSegments(new THREE.EdgesGeometry(g,30),edgeMaterial));root.add(m);
  register(m,{...boardInfo(b),detailLabel:'Grubość płyty',detail:'18 mm'},'structure');boards.push(m);
 }
 // Cell positions follow the same world grid as the source wall.
 for(let column=2;column<12;column++)for(let row=0;row<8;row++){
  const x=(7-column-.5)*P,y=(row+.5)*P-floorTop;
  const lo=Math.max(0,y-(P-2*T)/2),hi=Math.min(height,y+(P-2*T)/2);
  if(hi-lo<.045)continue;
  const m=box(root,P-2*T-.007,hi-lo-.006,H-.025,x,(lo+hi)/2,-.007,insulationMaterial);
  register(m,{id:`C30-IZ-${column.toString().padStart(2,'0')}${row}`,type:'Kostka izolacji',surface:'Komora ściany zewnętrznej',length:`${Math.round((P-2*T-.007)*1000)} × ${Math.round((hi-lo-.006)*1000)} mm`,metricLabel:'Wymiary w widoku',detailLabel:'Warstwa',detail:'Izolacja między żebrami'},'insulation');insulation.push(m);
 }
 box(root,width,height,.018,0,height/2,-.14,backing);

 function tube(parent,points,radius,material){
  const curve=new THREE.CurvePath(),p=points.map(a=>V(...a));let at=p[0];
  for(let i=1;i<p.length-1;i++){
   const bend=Math.min(.07,p[i].distanceTo(p[i-1])/3,p[i].distanceTo(p[i+1])/3);
   const a=p[i].clone().addScaledVector(p[i-1].clone().sub(p[i]).normalize(),bend),b=p[i].clone().addScaledVector(p[i+1].clone().sub(p[i]).normalize(),bend);
   curve.add(new THREE.LineCurve3(at,a));curve.add(new THREE.QuadraticBezierCurve3(a,p[i],b));at=b;
  }
  curve.add(new THREE.LineCurve3(at,p[p.length-1]));const m=new THREE.Mesh(new THREE.TubeGeometry(curve,Math.max(16,Math.ceil(curve.getLength()*55)),radius,10,false),material);parent.add(m);return m;
 }
 const cold=mat('#327d9f',.48),hot=mat('#b65744',.48),electric=mat('#c18c2d',.58),drain=mat('#687572',.72);
 const service=(id,type,points,radius,material,kind)=>{
  const m=tube(root,points,radius,material);
  register(m,{id,type,surface:'Warstwa instalacyjna od wnętrza',length:kind==='power'?'Gniazda i oświetlenie':'Przyłącze umywalki',metricLabel:'Przeznaczenie',detailLabel:'Położenie',detail:'Przed rdzeniem konstrukcji'},kind);services.push(m);return m;
 };
 // All concealed routes stay in front of the intact structural ribs (z > 120 mm).
 service('C30-W-01','Zimna woda',[[-1.42,2.72,.157],[-1.42,.65,.157],[-1.26,.65,.157],[-1.26,.65,.42]],.012,cold,'water');
 service('C30-W-02','Ciepła woda',[[-1.30,2.72,.190],[-1.30,.58,.190],[-1.15,.58,.190],[-1.15,.65,.190],[-1.15,.65,.42]],.012,hot,'water');
 service('C30-K-01','Odpływ umywalki',[[-.57,.07,.174],[-.57,.65,.174],[-1.09,.65,.174],[-1.09,.65,.53]],.026,drain,'water');
 service('C30-E-01','Przewód do gniazd',[[1.60,2.30,.220],[1.13,2.30,.220],[1.13,.47,.220],[1.13,.47,.253]],.010,electric,'power');
 service('C30-E-02','Przewód do oświetlenia',[[-1.17,2.56,.30],[-1.17,2.56,.220],[1.60,2.56,.220],[1.60,2.30,.220],[1.76,2.30,.220],[1.76,1.24,.220],[1.40,1.24,.220],[1.40,1.24,.253]],.010,electric,'power');
 const junction=box(root,.13,.12,.055,1.60,2.30,.191,mat('#475751'));
 register(junction,{id:'C30-E-03',type:'Puszka instalacyjna',surface:'Warstwa instalacyjna od wnętrza',length:'Instalacja elektryczna',metricLabel:'Obwód',detailLabel:'Położenie',detail:'Przed rdzeniem konstrukcji'},'power');services.push(junction);

 // A finished room remains around the opening, giving the cutaway a spatial reference.
 box(root,width+.32,.12,1.82,0,-.06,.70,floorMaterial);
 const seam=mat('#927d63');for(let x=left;x<right;x+=.19)box(root,.001,.001,1.80,x,.001,.70,seam);
 const finishZ=.249,finishDepth=.025,cutL=left+.16,cutR=right-.16,cutB=.22,cutT=height-.22;
 box(root,width,.22,finishDepth,0,.11,finishZ,paint);box(root,width,.22,finishDepth,0,height-.11,finishZ,paint);
 box(root,.16,cutT-cutB,finishDepth,left+.08,(cutT+cutB)/2,finishZ,paint);box(root,.16,cutT-cutB,finishDepth,right-.08,(cutT+cutB)/2,finishZ,paint);
 const cover=box(root,1,cutT-cutB,finishDepth,0,(cutT+cutB)/2,finishZ,paint);
 const finishInfo={id:'C30-WYK-01',type:'Malowana okładzina ściany',surface:'Ściana od strony wnętrza',length:'Wykończenie wnętrza',metricLabel:'Warstwa',detailLabel:'Pod spodem',detail:'Konstrukcja, izolacja i instalacje'};
 register(cover,finishInfo,'finish');
 box(root,.09,height,.75,right+.045,height/2,.54,paint);
 box(root,width+.06,.07,.65,0,height+.035,.45,paint);
 box(root,width,.095,.022,0,.047,.278,white);box(root,.022,.095,.65,right-.01,.047,.61,white);
 const revealEdge=box(root,.007,cutT-cutB,.032,cutL,(cutB+cutT)/2,.255,mat('#43948c'));
 const mirror=new THREE.Group();root.add(mirror);
 box(mirror,.79,1.03,.014,-1.17,1.80,.270,metal);
 const mirrorCanvas=document.createElement('canvas');mirrorCanvas.width=64;mirrorCanvas.height=128;
 const mirrorContext=mirrorCanvas.getContext('2d'),gradient=mirrorContext.createLinearGradient(0,0,64,128);
 gradient.addColorStop(0,'#8caaa5');gradient.addColorStop(.50,'#cfdbd3');gradient.addColorStop(.51,'#acb7ad');gradient.addColorStop(1,'#c5bda5');mirrorContext.fillStyle=gradient;mirrorContext.fillRect(0,0,64,128);
 const mirrorTexture=new THREE.CanvasTexture(mirrorCanvas);mirrorTexture.colorSpace=THREE.SRGBColorSpace;
 const mirrorMaterial=new THREE.MeshBasicMaterial({map:mirrorTexture});box(mirror,.75,.99,.004,-1.17,1.80,.279,mirrorMaterial);
 // The mirror belongs to the removable finish, and shares the same reveal boundary.
 const mirrorPlane=new THREE.Plane(V(1,0,0),-cutL);mirror.traverse(m=>{if(m.isMesh){m.material=m.material.clone();m.material.clippingPlanes=[mirrorPlane];}});

 // Fixed appliances and outlets show where the routes actually lead.
 const vanity=new THREE.Group();root.add(vanity);
 box(vanity,1.0,.43,.43,-1.17,.51,.51,timber);
 box(vanity,1.06,.035,.48,-1.17,.742,.52,ceramic);
 const flute=mat('#8c6944');for(let x=-1.63;x<-0.70;x+=.035)box(vanity,.009,.39,.008,x,.51,.729,flute);
 const bowlShape=new THREE.Shape();bowlShape.absellipse(0,0,.34,.20,0,Math.PI*2,false);
 const hole=new THREE.Path();hole.absellipse(0,0,.285,.155,0,Math.PI*2,true);bowlShape.holes.push(hole);
 const bowlG=new THREE.ExtrudeGeometry(bowlShape,{depth:.11,bevelEnabled:true,bevelThickness:.01,bevelSize:.008,bevelSegments:2,steps:1,curveSegments:36});bowlG.rotateX(-Math.PI/2);
 const bowl=new THREE.Mesh(bowlG,ceramic);bowl.position.set(-1.17,.765,.52);vanity.add(bowl);
 const basin=new THREE.Mesh(new THREE.CylinderGeometry(.282,.25,.018,40),ceramic);basin.scale.z=.55;basin.position.set(-1.17,.772,.52);vanity.add(basin);
 tube(vanity,[[-1.17,.79,.32],[-1.17,1.03,.32],[-1.17,1.03,.49]],.016,metal);
 box(vanity,.045,.012,.032,-1.17,1.062,.335,metal);
 const outlet=(x,y,switchPlate=false)=>{
  const m=box(root,.135,.11,.019,x,y,.277,white);
  if(switchPlate)box(root,.09,.07,.009,x,y,.292,paint);
  else for(const dx of [-.032,.032]){const socket=new THREE.Mesh(new THREE.CylinderGeometry(.026,.026,.007,20),paint);socket.rotation.x=Math.PI/2;socket.position.set(x+dx,y,.291);root.add(socket);for(const dy of [-.008,.008])box(root,.006,.006,.004,x+dx,y+dy,.297,metal);}
  return m;
 };
 outlet(1.13,.47);outlet(1.40,1.24,true);
 box(root,.42,.036,.07,-1.17,2.57,.30,metal);box(root,.38,.008,.055,-1.17,2.548,.31,mat('#fff3cd',.4,{emissive:'#ffe2a3',emissiveIntensity:.6}));

 const highlight=new THREE.Box3Helper(new THREE.Box3(),0x287c78);highlight.visible=false;root.add(highlight);
 function choose(m){selected=m;highlight.visible=m!==cover;root.updateMatrixWorld(true);if(highlight.visible)highlight.box.setFromObject(m);onSelect(m.userData.info);}
 function visibleCandidate(m){
  if(m===cover)return cover.visible;
  if(reveal<=.001)return false;
  m.geometry.computeBoundingBox();const b=m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld);
  return b.max.x>cutL&&b.min.x<cutL+(cutR-cutL)*reveal&&b.max.y>cutB&&b.min.y<cutT;
 }
 function finish(v){
  reveal=THREE.MathUtils.clamp(v,0,1);const edge=cutL+(cutR-cutL)*reveal,w=cutR-edge;
  cover.scale.x=w;cover.position.x=(edge+cutR)/2;cover.visible=w>.00001;
  mirrorPlane.constant=-edge;mirror.visible=edge<-1.17+.395;
  revealEdge.position.x=edge;revealEdge.visible=reveal>.005&&reveal<.995;
  if(selected&&selected!==cover&&!visibleCandidate(selected))choose(cover);
 }
 finish(0);choose(cover);
 return{
  root,direction:V(.48,.20,3),focus:new THREE.Box3(V(left-.10,-.10,-.16),V(right+.12,height+.1,1.08)),
  annotation:'Odsłoń ścianę suwakiem',finish,
  selectAt(ray){
   root.updateMatrixWorld(true);
   const hit=ray.intersectObjects(root.children,true).find(h=>{
    if(!h.object.isMesh)return false;
    for(let m=h.object;m;m=m.parent)if(!m.visible)return false;
    return !(h.object.material.clippingPlanes||[]).some(p=>p.distanceToPoint(h.point)<0);
   });
   if(hit?.object.userData.info)choose(hit.object);
  },
  next(){const options=selectable.filter(visibleCandidate);if(options.length)choose(options[(++cursor)%options.length]);},
  getSelected(){return selected?.userData.info;},
  getWallState(){return{reveal,boardCount:boards.length,insulationCount:insulation.length,serviceCount:services.length,coverWidth:cover.scale.x,insideFacing:true};}
 };
}
