import * as THREE from 'three';
import connectorSchedule from './connectors.json';

// Dimensional convention retained from the previously accepted demonstration models.
export const P = 2.5 / 6;
export const H = .24;
export const T = .018;
const HALF = H / 2;
const X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0), Z = new THREE.Vector3(0, 0, 1);
const EPS = 1e-7;

export function buildStructure(materials = {}, options = {}) {
  const wood = materials.wood || new THREE.MeshStandardMaterial({color: '#ba7c43', roughness: .85});
  const end = materials.end || wood;
  const root = new THREE.Group(); root.name = 'Combstruct 30 — węzły w jednej osi';
  const group = name => { const g = new THREE.Group(); g.name = name; root.add(g); return g; };
  const groups = { floor: group('Płyta podłogowa i ciągły taras'), walls: ['rear', 'left', 'front', 'right'].map(name => group(name)), partitions: group('Ściany wewnętrzne'), ceiling: group('Sufit'), roof: group('Dach 35°'), gables: group('Poziome rzędy szczytów'), pergola: group('Pergola') };
  const W = 13 * P, D = 15 * P, terraceDepth = 7 * P;
  const x0 = -W / 2, x1 = W / 2, z0 = -D / 2, z1 = D / 2, terraceZ = z0 - terraceDepth;
  const ceilingModule = 8, wallTop = ceilingModule * P, ceilingBottom = wallTop - H, ceilingTop = wallTop;
  const angle = 35 * Math.PI / 180, sine = Math.sin(angle), cosine = Math.cos(angle), tangent = Math.tan(angle);
  // The vertical wall boards extend through the ceiling band to the roof underside.
  const roofEaveY = ceilingTop, roofUnderRidgeY = roofEaveY + tangent * W / 2;
  const roofRidgeY = roofUnderRidgeY + H / cosine;
  const dimensions = {width: W, depth: D, halfWidth: W / 2, halfDepth: D / 2, terraceDepth, terraceRearZ: terraceZ, wallDepth: H, floorBottom: 0, floorTop: H, wallTop, ceilingBottom, ceilingTop, clearHeight: ceilingBottom - H, roofAngle: 35, roofEaveY, roofUnderRidgeY, roofRidgeY, roofOverhang: P, module: P, boardDepth: H, boardThickness: T, referenceWidth: 5.65, referenceDepth: 6.10, roofGableOverhang: P, constructionOnly: true};
  const boards = [], wallPanels = [], joints = [], openings = {rear: [], left: [], front: [], right: [], partitions: []};
  let nextId = 0;

  // Exactly one ply has the 24 cm shortened termination at either assembly end.
  // A remainder in the stock schedule does NOT mean both plies should be shortened.
  function segments(pixels, offset = 2) {
    const out = [];
    for (let layer = 0; layer < 2; layer++) {
      let pos = 0;
      if (layer === 1) {
        const count = Math.min(offset, pixels);
        out.push({pixels: count, start: 0, layer, trim: 'left'}); pos = count;
      }
      while (pos < pixels) {
        const count = Math.min(6, pixels - pos);
        out.push({pixels: count, start: pos * P, layer, trim: layer === 1 && pos + count === pixels ? 'right' : null});
        pos += count;
      }
    }
    return out;
  }

  function cutPolygon(points, axis, value, sign) {
    const result = [];
    for (let i = 0; i < points.length; i++) {
      const a = points[i], b = points[(i + 1) % points.length], da = sign * (a[axis] - value), db = sign * (b[axis] - value);
      if (da >= -EPS) result.push(a.clone());
      if ((da >= -EPS) !== (db >= -EPS)) result.push(a.clone().lerp(b, da / (da - db)));
    }
    return result;
  }

  function profile(p) {
    const length = p.pixels * P;
    const points = [new THREE.Vector2(0, 0), new THREE.Vector2(length, 0), new THREE.Vector2(length, HALF), new THREE.Vector2(length - T, HALF), new THREE.Vector2(length - T, H)];
    for (let i = p.pixels - 1; i >= 1; i--) {
      const c = i * P;
      points.push(new THREE.Vector2(c + T, H), new THREE.Vector2(c + T, HALF), new THREE.Vector2(c - T, HALF), new THREE.Vector2(c - T, H));
    }
    points.push(new THREE.Vector2(T, H), new THREE.Vector2(T, HALF), new THREE.Vector2(0, HALF));
    let result = points;
    const lo = Math.max(p.minCut || 0, p.trim === 'left' ? H : 0);
    const hi = Math.min(p.limit ?? length, p.trim === 'right' ? length - H : length);
    if (hi <= lo + EPS) return null;
    if (lo > EPS) result = cutPolygon(result, 'x', lo, 1);
    if (hi < length - EPS) result = cutPolygon(result, 'x', hi, -1);
    if (result.length < 3) return null;
    const shape = new THREE.Shape(result); shape.closePath();
    const geometry = new THREE.ExtrudeGeometry(shape, {depth: T, bevelEnabled: false, curveSegments: 1});
    geometry.translate(0, -HALF, 0);
    const uv = geometry.getAttribute('uv');
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 2.5, uv.getY(i) / H);
    return geometry;
  }

  function openStock(p, axis, transverse, holes = [], span = null) {
    let lo = Math.max(p.minCut || 0, p.trim === 'left' ? H : 0);
    let hi = Math.min(p.limit ?? p.pixels * P, p.trim === 'right' ? p.pixels * P - H : p.pixels * P);
    if (span) { lo = Math.max(lo, span[0] - p.start); hi = Math.min(hi, span[1] - p.start); }
    let intervals = hi > lo + EPS ? [[lo, hi]] : [];
    for (const h of holes) {
      const t0 = axis === 0 ? h.v0 : h.u0, t1 = axis === 0 ? h.v1 : h.u1;
      if (transverse + T <= t0 + EPS || transverse >= t1 - EPS) continue;
      const a = (axis === 0 ? h.u0 : h.v0) - p.start, b = (axis === 0 ? h.u1 : h.v1) - p.start;
      intervals = intervals.flatMap(([l, r]) => b <= l || a >= r ? [[l, r]] : [[l, Math.min(r, a)], [Math.max(l, b), r]].filter(([low, high]) => high > low + EPS));
    }
    return intervals.map(([minCut, limit]) => ({...p, minCut, limit}));
  }

  // Cells close angled profiles and the four standard connector cut variants.
  // Shared internal faces are cancelled, retaining the visible comb outline.
  function clippedProfile(p, basis, position, planes) {
    const length = p.pixels * P, low = Math.max(p.minCut || 0, p.trim === 'left' ? H : 0), high = Math.min(p.limit ?? length, p.trim === 'right' ? length - H : length);
    if (high <= low + EPS) return null;
    const slots = [[0, T], [length - T, length]];
    for (let i = 1; i < p.pixels; i++) slots.push([i * P - T, i * P + T]);
    const cornerCuts=(p.connectorCuts||[]).map(c=>({
      x0:c.end==='start'?(c.offset||0):length-(c.offset||0)-HALF,
      x1:c.end==='start'?(c.offset||0)+HALF:length-(c.offset||0),
      y0:c.edge==='slotted'?HALF-T:-HALF,y1:c.edge==='slotted'?HALF:-HALF+T
    }));
    const cuts = [low, high];
    for (const slot of slots) for (const c of slot) if (c > low + EPS && c < high - EPS) cuts.push(c);
    for(const r of cornerCuts)for(const c of [r.x0,r.x1])if(c>low+EPS&&c<high-EPS)cuts.push(c);
    cuts.sort((a, b) => a - b);
    const faces = new Map(); let actuallyCut = false;
    const vertexKey = v => `${Math.round(v.x * 1e8)},${Math.round(v.y * 1e8)},${Math.round(v.z * 1e8)}`;
    function clipFaces(polys, plane) {
      const next = [], intersections = [];
      for (const poly of polys) {
        const out = [];
        for (let i = 0; i < poly.length; i++) {
          const a = poly[i], b = poly[(i + 1) % poly.length], da = plane.c - plane.n.dot(a.clone().add(position)), db = plane.c - plane.n.dot(b.clone().add(position));
          if (da >= -EPS) out.push(a);
          else actuallyCut = true;
          if ((da >= -EPS) !== (db >= -EPS)) { const cross = a.clone().lerp(b, da / (da - db)); out.push(cross); intersections.push(cross); }
        }
        if (out.length >= 3) next.push(out);
      }
      const unique = [...new Map(intersections.map(v => [vertexKey(v), v])).values()];
      if (unique.length >= 3) {
        const center = unique.reduce((a, v) => a.add(v), new THREE.Vector3()).divideScalar(unique.length);
        const n = plane.n.clone().normalize(), u = (Math.abs(n.y) > .9 ? X : Y).clone().cross(n).normalize(), v = n.clone().cross(u);
        unique.sort((a, b) => Math.atan2(a.clone().sub(center).dot(v), a.clone().sub(center).dot(u)) - Math.atan2(b.clone().sub(center).dot(v), b.clone().sub(center).dot(u)));
        next.push(unique);
      }
      return next;
    }
    function block(a, b, bottom, top) {
      const local = [[a,bottom,0],[b,bottom,0],[b,top,0],[a,top,0],[a,bottom,T],[b,bottom,T],[b,top,T],[a,top,T]].map(v => new THREE.Vector3(...v).applyMatrix4(basis));
      let polys = [[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(ids => ids.map(i => local[i]));
      // Mirrored orthonormal bases invert the initial winding.
      if (basis.determinant() < 0) polys.forEach(poly => poly.reverse());
      for (const plane of planes) { polys = clipFaces(polys, plane); if (!polys.length) return; }
      for (const poly of polys) {
        const compact = poly.filter((v, i) => i === 0 || v.distanceToSquared(poly[i - 1]) > 1e-18);
        if (compact.length < 3) continue;
        const key = compact.map(vertexKey).sort().join('|');
        if (faces.has(key)) faces.delete(key); else faces.set(key, compact);
      }
    }
    for (let i = 0; i < cuts.length - 1; i++) {
      const a = cuts[i], b = cuts[i + 1], midpoint = (a + b) / 2;
      if (b - a < EPS) continue;
      const levels=[...new Set([-HALF,0,HALF,...cornerCuts.flatMap(r=>[r.y0,r.y1])])].sort((a,b)=>a-b);
      for(let j=0;j<levels.length-1;j++){
        const bottom=levels[j],top=levels[j+1],midY=(bottom+top)/2;
        if(midY>0&&slots.some(([lo,hi])=>midpoint>lo&&midpoint<hi))continue;
        if(cornerCuts.some(r=>midpoint>r.x0-EPS&&midpoint<r.x1+EPS&&midY>r.y0-EPS&&midY<r.y1+EPS))continue;
        block(a,b,bottom,top);
      }
    }
    const vertices = [], uv = [];
    for (const poly of faces.values()) for (let i = 1; i < poly.length - 1; i++) {
      const a = poly[0], b = poly[i], c = poly[i + 1];
      if (b.clone().sub(a).cross(c.clone().sub(a)).lengthSq() < 1e-20) continue;
      for (const v of [a, b, c]) { vertices.push(v.x, v.y, v.z); uv.push(v.dot(new THREE.Vector3().setFromMatrixColumn(basis, 0)) / 2.5, v.dot(new THREE.Vector3().setFromMatrixColumn(basis, 1)) / H); }
    }
    if (!vertices.length) return null;
    const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geometry.computeVertexNormals();
    geometry.userData.angledCut = actuallyCut;
    return geometry;
  }

  function addBoard(target, p, along, normal, thick, origin, meta = {}, phase = 0, planes = []) {
    const connectorKey=JSON.stringify([target.name,meta.wallId||'',meta.kind||'standard',meta.axis,meta.index,p.layer,phase,...[p.start,p.pixels,p.minCut||0,p.limit??p.pixels*P].map(n=>Math.round(n*1e7)/1e7)]);
    const connectorCuts=options.connectors===false?[]:(connectorSchedule[connectorKey]||[]);
    p={...p,connectorCuts};
    const layer = p.layer ^ phase, position = origin.clone().addScaledVector(along, p.start).addScaledVector(thick, layer === 0 ? -T : 0);
    const basis = new THREE.Matrix4().makeBasis(along, normal, thick);
    const clipped = planes.length || (p.minCut || 0) > EPS || p.limit !== undefined || connectorCuts.length;
    const geometry = clipped ? clippedProfile(p, basis, position, planes) : profile(p);
    if (!geometry) return null;
    if (!clipped) geometry.applyMatrix4(basis);
    const custom = !!geometry.userData.angledCut || (p.minCut || 0) > (p.trim === 'left' ? H : 0) + EPS || (p.limit ?? p.pixels * P) < p.pixels * P - (p.trim === 'right' ? H : 0) - EPS;
    const mesh = new THREE.Mesh(geometry, p.trim || custom ? end : wood); mesh.position.copy(position); mesh.castShadow = true; mesh.receiveShadow = true;
    const record = {id: `board-${++nextId}`, mesh, surface: target.name, kind: meta.kind || 'standard', axis: meta.axis, index: meta.index, layer, stockLayer: p.layer, start: p.start, stockLength: p.pixels * P, trim: p.trim || null, custom, connectorKey, connectorCuts, stock: {...p}, along: along.toArray(), normal: normal.toArray(), thick: thick.toArray(), frameOrigin: origin.toArray(), clippingPlanes: planes.map(q=>({n:q.n.toArray(),c:q.c})), ...meta};
    mesh.name = record.id; mesh.userData = {...record, mesh: undefined}; target.add(mesh); boards.push(record); return mesh;
  }

  function grid(target, nx, nz, origin, u, v, n, {phaseU = 0, phaseV = 0, holes = [], keepTop = false, clearances = [0,0], startClearances = [0,0], verticalPlanes = [], verticalModules = nz, kind = 'standard'} = {}) {
    for (let axis = 0; axis < 2; axis++) {
      const length = axis === 0 ? nx : verticalModules, count = axis === 0 ? nz : nx, along = axis === 0 ? u : v, thick = axis === 0 ? v : u, normal = n.clone().multiplyScalar(axis === 0 ? 1 : -1), phase = axis === 0 ? phaseU : phaseV;
      for (let i = 1; i < count; i++) for (const stock of segments(length)) {
        let p = {...stock};
        if (keepTop && axis === 1 && p.trim === 'right') p.trim = null;
        const clearance = clearances[axis] || 0;
        if (clearance && Math.abs(p.start + p.pixels * P - length * P) < EPS) p.limit = p.pixels * P - (p.trim === 'right' ? H : 0) - clearance;
        if (startClearances[axis] && p.start===0) p.minCut = (p.trim==='left'?H:0)+startClearances[axis];
        const transverse = i * P + ((p.layer ^ phase) === 0 ? -T : 0);
        for (const f of openStock(p, axis, transverse, holes)) addBoard(target, f, along, normal, thick, origin.clone().addScaledVector(thick, i * P), {kind, axis, index: i}, phase, axis === 1 ? verticalPlanes : []);
      }
    }
  }

  // One coordinate system for all touching pairs. Junction bands reserve one
  // stock ply; the other ply bridges the junction without an aligned butt joint.
  function jointStock(modules, phase, gaps = []) {
    const result=[];
    const shortPhysical=1^phase, other=shortPhysical^1;
    const seams=[[],[]];
    for(const physical of [shortPhysical,other]) {
      const layer=physical^phase;
      const stops=[0,modules,...gaps.filter(g=>g.layer===physical).map(g=>g.at)];
      if(layer===1)stops.push(Math.min(2,modules));
      const nodes=[...new Set(stops)].sort((a,b)=>a-b);
      for(let k=0;k<nodes.length-1;k++) {
        const a=nodes[k],b=nodes[k+1];
        for(let pos=a;pos<b;) {
          let count=Math.min(6,b-pos);
          const forbidden=[...seams[physical^1],...gaps.filter(g=>g.layer!==physical).map(g=>g.at)];
          if(pos+count<b&&forbidden.includes(pos+count)) {
            const choices=[count-2,count-1,count-3,count-4,count-5].filter(n=>n>0&&!forbidden.includes(pos+n));
            if(!choices.length)throw Error('No staggered native stock schedule');
            count=choices[0];
          }
          const end=pos+count;
          const left=(layer===1&&pos===0)||gaps.some(g=>g.layer===physical&&g.at===pos&&g.side==='left');
          const right=(layer===1&&end===modules)||gaps.some(g=>g.layer===physical&&g.at===end&&g.side==='right');
          if(left&&right)throw Error('Two terminations in one stock piece');
          result.push({pixels:count,start:pos*P,layer,trim:left?'left':right?'right':null});
          if(end<modules)seams[physical].push(end);pos=end;
        }
      }
    }
    return result;
  }
  const bedX=x0+6*P-HALF, bathX=bedX, dividerZ=z0+8*P-HALF;
  const floorOrigin=new THREE.Vector3(x0,HALF,terraceZ);
  function horizontalPanel(target,nx,nz,origin,kind) {
    const terrace=kind==='floor', houseOffset=terrace?7:0;
    for(let axis=0;axis<2;axis++) {
      const length=axis===0?nx:nz,count=axis===0?nz:nx;
      for(let i=1;i<count;i++) {
        // Connector edge notches clear crossing ribs, including those tangent
        // to an interior wall. Keep every rib on the original module line.
        const gaps=[];
        if(axis===0&&i>houseOffset)gaps.push({at:6,side:'right',layer:1});
        if(axis===1) {
          if(terrace)gaps.push({at:7,side:'left',layer:1});
          if(i<6)gaps.push({at:houseOffset+8,side:'right',layer:1});
        }
        let stocks=jointStock(length,0,gaps);
        for(const p of stocks)addBoard(target,p,axis===0?X:Z,axis===0?Y:Y.clone().negate(),axis===0?Z:X,origin.clone().addScaledVector(axis===0?Z:X,i*P),{kind,axis,index:i},0);
      }
    }
  }
  horizontalPanel(groups.floor,13,22,floorOrigin,'floor');

  const sideNames = ['rear', 'left', 'front', 'right'];
  // At the rear the floor continues onto the terrace. Keep the rear face of the
  // vertical boards just beside, rather than inside, its full transverse rib.
  const wallOrigins = [new THREE.Vector3(x0, 0, z0 + HALF), new THREE.Vector3(x0 + HALF, 0, z0), new THREE.Vector3(x0, 0, z1 - HALF), new THREE.Vector3(x1 - HALF, 0, z0)];
  const wallNormals = [Z, X, Z.clone().negate(), X.clone().negate()];
  function hole(side, kind, a, b, bottom, top, id) {
    return {id, kind, u0: a * P + T, u1: b * P - T, v0: bottom, v1: top};
  }
  openings.front = [hole('front','window',1,3,3*P+T,6*P-T,'front-window-left'), hole('front','door',6,9,H,6*P-T,'entrance'), hole('front','window',10,12,3*P+T,6*P-T,'front-window-right')];
  openings.rear = [hole('rear','window',1,5,2*P+T,6*P-T,'bedroom-window'), hole('rear','door',8,12,H,6*P-T,'terrace-door')];
  openings.right = [hole('right','window',3,7,2*P+T,6*P-T,'living-window')];
  function describeHole(h, wallId, axis, origin, fixed) {
    const along0 = (axis === 0 ? origin.x : origin.z) + h.u0, along1 = (axis === 0 ? origin.x : origin.z) + h.u1;
    Object.assign(h, {wallId, axis, origin: {x: origin.x, y: origin.y, z: origin.z}, world: axis === 0 ? {x0: along0, x1: along1, z0: fixed-HALF, z1: fixed+HALF, y0: h.v0, y1: h.v1} : {x0: fixed-HALF, x1: fixed+HALF, z0: along0, z1: along1, y0: h.v0, y1: h.v1}});
    return h;
  }
  const gablePlanes = [{n: new THREE.Vector3(-tangent,1,0), c: roofEaveY + tangent*W/2}, {n: new THREE.Vector3(tangent,1,0), c: roofEaveY + tangent*W/2}];
  const fullHeightModules = Math.ceil(roofUnderRidgeY/P)+1;
  for (let wi = 0; wi < 4; wi++) {
    const axis = wi % 2, along = axis === 0 ? X : Z, origin = wallOrigins[wi], fixed = axis === 0 ? origin.z : origin.x, count = axis === 0 ? 13 : 15;
    const side = sideNames[wi], holes = openings[side]; holes.forEach(h => describeHole(h, side, axis, origin, fixed));
    wallPanels.push({id: side, axis, start: axis===0?origin.x:origin.z, end: (axis===0?origin.x:origin.z) + count*P - (axis===0?T:2*T), fixed, depth: H, holes, exterior: true, origin: {x:origin.x,y:0,z:origin.z}});
    for(let direction=0;direction<2;direction++) {
      const len=direction===0?count:fullHeightModules, phase=direction===0?(axis===0?0:1):1;
      for(let i=1;i<(direction===0?ceilingModule+1:count);i++) {
        const gaps=direction===0?(axis===0?[{at:6,side:'right',layer:1}]:wi===1?[{at:8,side:'right',layer:0}]:[]):[{at:ceilingModule,side:'right',layer:0}];
        for(const stock of jointStock(len,phase,gaps)) {
          const p={...stock};if(direction===1&&p.trim==='right'&&p.start+p.pixels*P===len*P)p.trim=null;
          const transverse=i*P+((p.layer^phase)===0?-T:0);
          for(const f of openStock(p,direction,transverse,holes))addBoard(groups.walls[wi],f,direction===0?along:Y,direction===0?wallNormals[wi]:wallNormals[wi].clone().negate(),direction===0?Y:along,origin.clone().addScaledVector(direction===0?Y:along,i*P),{kind:'wall',axis:direction,index:i},phase,direction===1||i===ceilingModule?gablePlanes:[]);
        }
      }
    }
    if (axis===0) for (let row=ceilingModule+1; row<fullHeightModules; row++) for (const p of segments(13)) {
      for (const f of openStock(p,0,row*P+(p.layer===0?-T:0),holes)) addBoard(groups.gables,f,X,wallNormals[wi],Y,origin.clone().addScaledVector(Y,row*P),{kind:'gable',axis:0,index:row,wallId:side},0,gablePlanes);
    }
  }

  horizontalPanel(groups.ceiling,13,15,new THREE.Vector3(x0,ceilingBottom+HALF,z0),'ceiling');

  const inner={left:x0+H,right:x1-H,rear:z0+H,front:z1-H};
  function partition(id,axis,modules,fixed,doorIndices=[]) {
    const panel=new THREE.Group();panel.name=id;groups.partitions.add(panel);
    const origin=axis===0?new THREE.Vector3(x0,0,fixed):new THREE.Vector3(fixed,0,z0);
    const along=axis===0?X:Z,normal=axis===0?Z:X;
    const holes=doorIndices.map(([a,b])=>({id:`${id}-door-${a}`,kind:'door',u0:a*P+T,u1:b*P-T,v0:H,v1:6*P-T}));
    holes.forEach(h=>describeHole(h,id,axis,origin,fixed));openings.partitions.push(...holes);
    panel.userData={id,axis,start:axis===0?x0:z0,end:(axis===0?x0:z0)+modules*P,fixed,depth:H,holes,origin:{x:origin.x,y:0,z:origin.z}};
    wallPanels.push({...panel.userData,exterior:false});
    for(let direction=0;direction<2;direction++) {
      const phase=direction===0?(axis===0?0:1):1,len=direction===0?modules:ceilingModule;
      const gaps=direction===0?(axis===1?[{at:8,side:'right',layer:0}]:[]):[];
      for(let i=1;i<(direction===0?ceilingModule:modules);i++) {
        for(const stock of jointStock(len,phase,gaps)) {
          const p={...stock};
          // The same reserved ply accepts the full floor/ceiling rib at both ends.
          for(const f of openStock(p,direction,i*P+((p.layer^phase)===0?-T:0),holes))addBoard(panel,f,direction===0?along:Y,direction===0?normal:normal.clone().negate(),direction===0?Y:along,origin.clone().addScaledVector(direction===0?Y:along,i*P),{kind:'partition',wallId:id,axis:direction,index:i},phase);
        }
      }
    }
  }
  partition('bedroom-right',1,15,bedX,[[5,7],[10,12]]);
  partition('bedroom-front',0,6,dividerZ);
  const bedroom={id:'bedroom',name:'Sypialnia',x0:inner.left,x1:bedX-HALF,z0:inner.rear,z1:dividerZ-HALF};
  const bathroom={id:'bathroom',name:'Łazienka',x0:inner.left,x1:bathX-HALF,z0:dividerZ+HALF,z1:inner.front};
  const livingPolygon=[{x:bedX+HALF,z:inner.rear},{x:inner.right,z:inner.rear},{x:inner.right,z:inner.front},{x:bathX+HALF,z:inner.front},{x:bathX+HALF,z:dividerZ+HALF},{x:bedX+HALF,z:dividerZ+HALF}];
  const polygonArea=poly=>Math.abs(poly.reduce((a,p,i)=>a+p.x*poly[(i+1)%poly.length].z-poly[(i+1)%poly.length].x*p.z,0))/2;
  const rooms=[bedroom,bathroom].map(room=>({...room,area:(room.x1-room.x0)*(room.z1-room.z0)}));
  rooms.push({id:'living',name:'Salon z kuchnią',x0:bathX+HALF,x1:inner.right,z0:inner.rear,z1:inner.front,polygon:livingPolygon,area:polygonArea(livingPolygon)});

  // Both roof halves are clipped to x=0. Their complete 24 cm sections meet at a
  // true 110-degree ridge mitre; no pretend 90-degree half-lap or overlapping ends.
  const roofZ=z0-P, roofN=17, roofU=-P/2, roofRun=W/2+P;
  const slopeModules=Math.ceil((roofRun/cosine-roofU)/P)+1;
  const roofCenterY=roofUnderRidgeY+HALF/cosine;
  const roofAxes=[], wallAxes=Array.from({length:14},(_,i)=>z0+(i+1)*P);
  for(const side of [-1,1]) {
    const u=new THREE.Vector3(side*cosine,-sine,0), n=new THREE.Vector3(side*sine,cosine,0);
    const origin=new THREE.Vector3(0,roofCenterY,roofZ).addScaledVector(u,roofU);
    const roofPart=new THREE.Group();roofPart.name=side===-1?'roof-left':'roof-right';groups.roof.add(roofPart);
    const planes=side===-1?[{n:X.clone(),c:0},{n:X.clone().negate(),c:roofRun}]:[{n:X.clone().negate(),c:0},{n:X.clone(),c:roofRun}];
    for(let j=1;j<roofN;j++) {
      const z=roofZ+j*P;
      if(side===-1)roofAxes.push(z);
      for(const stock of segments(slopeModules)) {
        const p={...stock,trim:null};
        addBoard(roofPart,p,u,n,Z,origin.clone().addScaledVector(Z,j*P),{kind:'roof-slope',axis:0,index:j,roofSide:side,detail:'Mitre and eave ends are angled cuts'},side===-1?0:1,planes);
      }
    }
    for(let i=1;i<slopeModules;i++)for(const p of segments(roofN))addBoard(roofPart,p,Z,n.clone().negate(),u,origin.clone().addScaledVector(u,i*P),{kind:'roof-cross',axis:1,index:i,roofSide:side},0,planes);
  }

  dimensions.usableConceptArea=rooms.reduce((sum,room)=>sum+room.area,0);
  dimensions.structuralFootprintArea=W*D;dimensions.terraceArea=W*terraceDepth;

  joints.push(
    {id:'edge-floor',title:'Podłoga — ściana zewnętrzna',description:'Długi pion zajmuje miejsce po zakończeniu podłogi. Krótki pion opiera się na pełnej desce.',position:[x0+3*P,H/2,z1-HALF],planeAxis:0,viewDirection:[1.4,1.1,1.5],members:[{surface:groups.floor.name,axis:1,index:3},{surface:'front',axis:1,index:3}]},
    {id:'terrace',title:'Podłoga — ściana — taras',description:'Deska łączeniowa: wybranie 18 × 102 mm + istniejący półwpust 18 mm odsłania pełne 120 mm na poprzeczne żebro podłogi.',position:[x0+7*P,H/2,z0+HALF],planeAxis:0,viewDirection:[1.6,1.0,1.3],members:[{surface:groups.floor.name,axis:1,index:7},{surface:'rear',axis:1,index:7}],crossingMembers:[{surface:groups.floor.name,axis:0,index:7}]},
    {id:'interior-floor',title:'Podłoga — ściana wewnętrzna',description:'Wybranie w pełnej krawędzi, odsunięte od końca deski, odsłania wpust na drugie żebro podłogi. Sam koniec deski pozostaje pełny.',position:[bedX,H/2,z0+3*P],planeAxis:2,viewDirection:[1.2,1.0,1.8],members:[{surface:groups.floor.name,axis:0,index:10},{surface:'bedroom-right',axis:1,index:3}],crossingMembers:[{surface:groups.floor.name,axis:1,index:6}]},
    {id:'wall-wall',title:'Ściana wewnętrzna — zewnętrzna',description:'Wybranie w krawędzi z zębami, odsunięte od końca deski, odsłania wpust na pion ściany zewnętrznej. Końcówka i wspólna linia żeber zostają zachowane.',position:[bedX,3*P,z0+HALF],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:'rear',axis:0,index:3},{surface:'bedroom-right',axis:0,index:3}],crossingMembers:[{surface:'rear',axis:1,index:6}]},
    {id:'partition-t',title:'Połączenie ścian wewnętrznych',description:'Przegroda poprzeczna zamyka się w warstwach ciągłej ściany. Wybranie odsłania wpust na pion w tej samej linii.',position:[bedX,3*P,dividerZ],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:'bedroom-right',axis:0,index:3},{surface:'bedroom-front',axis:0,index:3}],crossingMembers:[{surface:'bedroom-right',axis:1,index:8}]},
    {id:'ceiling-wall',title:'Strop — ściana zewnętrzna',description:'Wybranie narożnika deski łączeniowej odsłania wpust. Przywrócony poziomy rząd ściany mieści się w nim bez przesuwania żeber.',position:[x0+HALF,ceilingBottom+HALF,z0+9*P],planeAxis:2,viewDirection:[1.3,1.0,1.7],members:[{surface:'left',axis:1,index:9},{surface:groups.ceiling.name,axis:0,index:9}],crossingMembers:[{surface:'left',axis:0,index:ceilingModule}]},
    {id:'connector-120',title:'Deska łączeniowa — wariant 18 × 120 mm',description:'Drugi wariant deski łączeniowej w tym domu: wybranie narożnika 18 × 120 mm. Odsłania miejsce na poziome żebro ściany przy stropie.',position:[x0+3*P,ceilingBottom+HALF,z1-HALF],planeAxis:0,viewDirection:[1.6,1.0,1.3],members:[{surface:'front',axis:1,index:3},{surface:groups.ceiling.name,axis:1,index:3}],crossingMembers:[{surface:'front',axis:0,index:ceilingModule}]},
    {id:'ceiling-partition',title:'Strop — ściana wewnętrzna',description:'Pełna deska stropu przechodzi przez węzeł. Wybranie w desce pionowej odsłania wpust na poprzeczne żebro stropu.',position:[bedX,ceilingBottom+HALF,z0+3*P],planeAxis:2,viewDirection:[1.3,1.0,1.7],members:[{surface:'bedroom-right',axis:1,index:3},{surface:groups.ceiling.name,axis:0,index:3}],crossingMembers:[{surface:groups.ceiling.name,axis:1,index:6}]}
  );
  const validation={module:P,stockMaxLength:2.5,terminalDifference:H,pairWidth:2*T,junctionsCoplanar:true,floorTerraceContinuous:true,partitionGroundY:0,partitionShortY:H,exteriorVerticalSlots:'outward',ceilingModule,ceilingTop,roofPitchDegrees:35,roofAxes,wallAxes,roofAxesAligned:wallAxes.every(z=>roofAxes.some(r=>Math.abs(r-z)<EPS)),connectorBoards:boards.filter(b=>b.connectorCuts.length).length,connectorVariants:[{position:'corner',edge:'slotted',removedMm:[18,102]},{position:'corner',edge:'plain',removedMm:[18,120]},{position:'inset',edge:'slotted',removedMm:[18,120],offsetMm:120},{position:'inset',edge:'plain',removedMm:[18,120],offsetMm:120}],restoredBoundaryRibs:['terrace-floor-cross-row','divider-floor-cross-row','exterior-wall-cap-rows','interior-wall-tangent-floor-and-ceiling-ribs','wall-to-wall-uprights'],remainingJunctionAssumptions:'Interior wall top horizontal rows at ceiling height are still omitted: adding them would duplicate parallel ceiling material. This separate assembly layout has not been resolved by connector cuts.',loadValidated:false};
  root.updateMatrixWorld(true);
  return {root,groups,openings,rooms,dimensions,boards,joints,wallPanels,validation};
}
