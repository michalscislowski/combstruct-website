import * as THREE from 'three';
import {planStock,stockSegments} from './stock-layout.js';
export const P=2.5/6,H=.24,T=.018,HALF=H/2,EPS=1e-7;
export const X=new THREE.Vector3(1,0,0),Y=new THREE.Vector3(0,1,0),Z=new THREE.Vector3(0,0,1);
// Shared native profiles, staggered stock and four connection cuts from the
// accepted Combstruct 30 demonstration. All dimensions are metres.
export function createConstruction(materials={},connectorSchedule={},options={}){
 const wood=materials.wood||new THREE.MeshStandardMaterial({color:'#c7a46f',side:THREE.DoubleSide}),end=materials.end||wood;
 const boards=[];let nextId=0;
  const segments = stockSegments;

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
    const record = {id: `board-${++nextId}`, mesh, surface: target.name, kind: meta.kind || 'standard', axis: meta.axis, index: meta.index, layer, stockLayer: p.layer, start: p.start, stockLength: p.pixels * P, trim: p.trim || null, custom, connectorKey, connectorCuts, stock: {...p}, along: along.toArray(), normal: normal.toArray(), thick: thick.toArray(), frameOrigin: origin.toArray(), clippingPlanes: planes.map(q=>({n:q.n.toArray(),c:q.c})), actualStart:p.start+Math.max(p.minCut||0,p.trim==='left'?H:0),actualEnd:p.start+Math.min(p.limit??p.pixels*P,p.trim==='right'?p.pixels*P-H:p.pixels*P),...meta};
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

  const jointStock = planStock;

 return{boards,segments,jointStock,openStock,addBoard,grid};
}
