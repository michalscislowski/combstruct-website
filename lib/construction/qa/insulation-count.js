import * as THREE from 'three';

const P=2.5/6,T=.018,H=.24,EPS=1e-7;
const V=(...a)=>new THREE.Vector3(...a),X=V(1,0,0),Y=V(0,1,0),Z=V(0,0,1);
const boxFaces=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];
function boxPoly(lo,hi,transform=v=>v){
  const v=[[lo.x,lo.y,lo.z],[hi.x,lo.y,lo.z],[hi.x,hi.y,lo.z],[lo.x,hi.y,lo.z],
    [lo.x,lo.y,hi.z],[hi.x,lo.y,hi.z],[hi.x,hi.y,hi.z],[lo.x,hi.y,hi.z]].map(p=>transform(V(...p)));
  return boxFaces.map(f=>f.map(i=>v[i]));
}
const bounds=poly=>new THREE.Box3().setFromPoints(poly.flat());
function planes(poly){
  const center=poly.flat().reduce((s,v)=>s.add(v),V(0,0,0)).divideScalar(poly.flat().length);
  return poly.map(f=>{
    let n;
    for(let i=1;i<f.length-1;i++){
      n=f[i].clone().sub(f[0]).cross(f[i+1].clone().sub(f[0]));
      if(n.lengthSq()>1e-16)break;
    }
    n.normalize();if(n.dot(center.clone().sub(f[0]))>0)n.negate();
    return {n,c:n.dot(f[0])};
  }).filter(p=>p.n.lengthSq()>.5);
}
function clip(poly,{n,c}){
  const out=[],crossings=[];
  for(const face of poly){
    const next=[];
    for(let i=0;i<face.length;i++){
      const a=face[i],b=face[(i+1)%face.length],da=c-n.dot(a),db=c-n.dot(b);
      if(da>=-EPS)next.push(a);
      if((da>=-EPS)!==(db>=-EPS)){
        const v=a.clone().lerp(b,da/(da-db));next.push(v);crossings.push(v);
      }
    }
    if(next.length>=3)out.push(next);
  }
  const unique=[...new Map(crossings.map(v=>[v.toArray().map(x=>Math.round(x*1e7)).join(','),v])).values()];
  if(unique.length>=3){
    const center=unique.reduce((s,v)=>s.add(v),V(0,0,0)).divideScalar(unique.length);
    const u=(Math.abs(n.y)<.9?Y:X).clone().cross(n).normalize(),v=n.clone().cross(u);
    unique.sort((a,b)=>Math.atan2(a.clone().sub(center).dot(v),a.clone().sub(center).dot(u))-Math.atan2(b.clone().sub(center).dot(v),b.clone().sub(center).dot(u)));
    out.push(unique);
  }
  return out;
}
function volume(poly){
  if(!poly.length)return 0;
  const center=poly.flat().reduce((s,v)=>s.add(v),V(0,0,0)).divideScalar(poly.flat().length);
  let total=0;
  for(const f of poly)for(let i=1;i<f.length-1;i++)total+=Math.abs(f[0].clone().sub(center).dot(f[i].clone().sub(center).cross(f[i+1].clone().sub(center))))/6;
  return total;
}
function subtract(poly,cut){
  if(!bounds(poly).intersectsBox(cut.bounds))return [poly];
  // First establish a genuine intersection, avoiding fragments from disjoint
  // oriented boxes whose world bounding boxes happen to overlap.
  let intersection=poly;
  for(const p of cut.planes){intersection=clip(intersection,p);if(!intersection.length)return [poly]}
  if(volume(intersection)<1e-10)return [poly];
  let core=poly;const outside=[];
  for(const p of cut.planes){
    const part=clip(core,{n:p.n.clone().negate(),c:-p.c});
    if(volume(part)>1e-10)outside.push(part);
    core=clip(core,p);if(!core.length)break;
  }
  return outside;
}
function cutter(poly){return {bounds:bounds(poly),planes:planes(poly)}}

// Meaningful geometric checks: conserved volume, an angled half-cell and a
// disjoint cutter. These operations determine whether a physical block exists.
const unit=boxPoly(V(0,0,0),V(1,1,1));
const centerCut=cutter(boxPoly(V(.25,.25,.25),V(.75,.75,.75)));
if(Math.abs(subtract(unit,centerCut).reduce((s,p)=>s+volume(p),0)-.875)>1e-7)throw Error('Insulation subtraction volume');
if(Math.abs(volume(clip(unit,{n:V(1,1,0).normalize(),c:Math.SQRT1_2}))-.5)>1e-7)throw Error('Insulation angled clipping');
if(subtract(unit,cutter(boxPoly(V(2,2,2),V(3,3,3)))).length!==1)throw Error('Insulation disjoint cutter');

function specifications(model,project){
  const d=model.dimensions,W=d.width,D=d.depth,x0=-W/2,z0=-D/2;
  const list=[],roofHeight=d.roofUnderRidgeY;
  const roofNormal=project==='30'?X:Z,tan=project==='30'?Math.tan(d.roofAngle*Math.PI/180):1;
  const topPlanes=[-1,1].map(sign=>({n:Y.clone().addScaledVector(roofNormal,sign*tan),c:roofHeight}));
  function panel(id,label,origin,u,v,n,nx,ny,holes=[],cuts=[]){list.push({id,label,origin,u,v,n,nx,ny,holes,cuts})}
  panel('floor','Podłoga i taras',V(x0,H/2,project==='30'?d.terraceRearZ:z0),X,Z,Y,project==='30'?13:30,project==='30'?22:16);
  for(const wall of model.wallPanels.filter(w=>w.exterior)){
    const origin=V(wall.origin.x,wall.origin.y,wall.origin.z),u=wall.axis===0?X:Z,n=wall.axis===0?Z:X;
    const nx=Math.round((wall.axis===0?W:D)/P),ny=Math.ceil((roofHeight-origin.y)/P)+1;
    const cuts=[...topPlanes];
    if(project==='90'&&wall.level==='ground')cuts.push({n:Y,c:d.slabTop});
    const start=wall.start-(wall.axis===0?origin.x:origin.z),end=wall.end-(wall.axis===0?origin.x:origin.z);
    cuts.push({n:u.clone().negate(),c:-u.dot(origin)-start},{n:u,c:u.dot(origin)+end});
    panel(wall.id,'Ściany zewnętrzne',origin,u,Y,n,nx,ny,wall.holes,cuts);
  }
  // Recover each roof's exact grid frame from an existing rafter placement.
  // This keeps the slope direction, stagger and overhangs in the model's phase.
  for(const side of [-1,1]){
    const r=model.boards.find(b=>b.kind==='roof-slope'&&b.roofSide===side);
    const basis=new THREE.Matrix4().fromArray(r.mesh.userData.partsBasis);
    const u=V(0,0,0).setFromMatrixColumn(basis,0),n=V(0,0,0).setFromMatrixColumn(basis,1),v=V(0,0,0).setFromMatrixColumn(basis,2);
    const origin=r.mesh.position.clone().addScaledVector(u,-r.start).addScaledVector(v,-r.index*P-(r.layer===0?-T:0));
    const cross=model.boards.filter(b=>b.kind==='roof-cross'&&b.roofSide===side);
    const nx=Math.max(...cross.map(b=>b.index))+1,ny=project==='30'?17:27;
    const run=(project==='30'?W:D)/2+d.roofOverhang;
    const cuts=[{n:roofNormal.clone().multiplyScalar(-side),c:0},{n:roofNormal.clone().multiplyScalar(side),c:run}];
    const holes=project==='90'?model.openings.roof.filter(h=>h.roofSide===side):[];
    panel(`roof-${side}`,'Dach',origin,u,v,n,nx,ny,holes,cuts);
  }
  return list;
}

export function countInsulation(model,records,project){
  if(project==='125'){
    const layers=model.insulationLayers.map((l,i)=>({id:`layer-${i}`,label:i===0?'Podłoga i taras':i===5?'Stropodach':'Ściany zewnętrzne',count:l.boxes.length}));
    const count=layers.reduce((s,l)=>s+l.count,0);
    if(count!==model.insulationCount||model.insulationLayers.some(l=>l.mesh.count!==l.boxes.length))throw Error('Insulation instance coverage');
    return {count,method:'existing-model-instances',layers};
  }
  model.root.updateMatrixWorld(true);
  const solids=records.map(r=>{
    const basis=new THREE.Matrix4().fromArray(r.mesh.userData.partsBasis),inverse=basis.clone().invert();
    const position=r.mesh.geometry.attributes.position,local=[];
    for(let i=0;i<position.count;i++)local.push(V(0,0,0).fromBufferAttribute(position,i).applyMatrix4(inverse));
    const box=new THREE.Box3().setFromPoints(local);
    return cutter(boxPoly(box.min,box.max,v=>v.applyMatrix4(basis).applyMatrix4(r.mesh.matrixWorld)));
  });
  const occupied=[],layers=[];
  for(const s of specifications(model,project)){
    const world=p=>s.origin.clone().addScaledVector(s.u,p.x).addScaledVector(s.v,p.y).addScaledVector(s.n,p.z);
    const apertures=s.holes.map(h=>cutter(boxPoly(V(h.u0-.001,h.v0-.001,-H),V(h.u1+.001,h.v1+.001,H),world)));
    const blocks=[];let filledCells=0;
    for(let j=0;j<s.ny;j++)for(let i=0;i<s.nx;i++){
      let cell=boxPoly(V(i*P+(i?.019:.001),j*P+(j?.019:.001),-H/2+.001),V((i+1)*P-(i===s.nx-1?.001:.019),(j+1)*P-(j===s.ny-1?.001:.019),H/2-.001),world);
      for(const cut of s.cuts){cell=clip(cell,cut);if(!cell.length)break}
      if(volume(cell)<1e-9)continue;
      const bb=bounds(cell),cuts=[...apertures,...solids,...occupied].filter(c=>c.bounds.intersectsBox(bb));
      let pieces=[cell];
      for(const cut of cuts){pieces=pieces.flatMap(p=>subtract(p,cut));if(!pieces.length)break}
      let added=0;
      for(let piece of pieces){
        const local=piece.flat().map(p=>{const q=p.clone().sub(s.origin);return V(q.dot(s.u),q.dot(s.v),q.dot(s.n))});
        const size=new THREE.Box3().setFromPoints(local).getSize(V(0,0,0));
        if(Math.min(size.x,size.y,size.z)<.003||volume(piece)<1e-9)continue;
        for(const p of planes(piece)){piece=clip(piece,{n:p.n,c:p.c-.0003});if(!piece.length)break}
        if(volume(piece)<1e-9)continue;
        const shape=cutter(piece);occupied.push(shape);added++;
        blocks.push({cell:[i,j],volumeM3:volume(piece),faces:piece.map(f=>f.map(v=>v.toArray()))});
      }
      if(added)filledCells++;
    }
    layers.push({id:s.id,label:s.label,count:blocks.length,filledCells,blocks});
  }
  const count=layers.reduce((s,l)=>s+l.count,0);
  return {count,method:'generated-cavity-blocks',layers};
}
