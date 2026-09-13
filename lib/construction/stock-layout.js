import {stockBounds} from './stock-profile.js';
const P = 2.5 / 6, H = .24, T=.018;
const cache = new Map();
const better = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (Math.abs(a[i] - b[i]) > 1e-9) return a[i] < b[i];
  }
  return false;
};

// Plan both plies together. Only junctions fix a seam; filling a span greedily
// with six-module boards can leave a needless one-module ending (176.7 mm).
// Costs are lexicographic: avoid those endings, avoid other one-module pieces,
// minimize the number of boards, then prefer more balanced usable lengths.
// A terminal is shortened only where the adjoining rib needs its 240 mm band.
// A free end (or a corner already clear of that band) can retain the full board.
export function planStock(modules, phase = 0, gaps = [], offset = 2, terminals = {left: true, right: true}) {
  if (!Number.isInteger(modules) || modules < 2 || ![0, 1].includes(phase))
    throw new Error('A native paired span needs at least two whole modules');
  if (typeof terminals.left !== 'boolean' || typeof terminals.right !== 'boolean')
    throw new Error('Both terminal reservations must be explicit booleans');
  for (const g of gaps) if (!Number.isInteger(g.at) || g.at <= 0 || g.at >= modules || ![0, 1].includes(g.layer) || !['left', 'right', 'seam'].includes(g.side))
    throw new Error('Invalid native junction band');
  const key = JSON.stringify([modules, phase, gaps, offset, terminals]);
  if (cache.has(key)) return cache.get(key).map(p => ({...p}));
  const required = [0, 1].map(layer => new Set(gaps.filter(g => g.layer === layer).map(g => g.at)));
  let states = new Map([['0,0', {starts: [0, 0], score: [0, 0, 0, 0, 0], pieces: []}]]);
  for (let at = 1; at <= modules; at++) {
    const next = new Map();
    for (const state of states.values()) for (const end0 of [false, true]) for (const end1 of [false, true]) {
      const ends = [end0, end1];
      if (at < modules && end0 && end1 && !(required[0].has(at) && required[1].has(at))) continue;
      const starts = [...state.starts], score = [...state.score], pieces = [];
      let valid = true;
      for (const physical of [0, 1]) {
        const start = starts[physical], count = at - start, layer = physical ^ phase;
        if (count > 6 || (!ends[physical] && (at === modules || count === 6 || required[physical].has(at)))) { valid = false; break; }
        if (!ends[physical]) continue;
        const left = (terminals.left && layer === 1 && start === 0) || gaps.some(g => g.layer === physical && g.at === start && g.side === 'left');
        const right = (terminals.right && layer === 1 && at === modules) || gaps.some(g => g.layer === physical && g.at === at && g.side === 'right');
        // Two shortened ends would invent a non-native board profile.
        if (left && right) { valid = false; break; }
        const trim = left ? 'left' : right ? 'right' : null;
        const treatment={};
        for(const g of gaps.filter(g=>g.layer===physical&&g.fullEndSlot)){
          if(g.side==='left'&&g.at===at)treatment.extendEnd=T;
          if(g.side==='left'&&g.at===start)treatment.extraStartTrim=T;
          if(g.side==='right'&&g.at===at)treatment.extraEndTrim=T;
          if(g.side==='right'&&g.at===start)treatment.extendStart=T;
        }
        if(terminals.extraTrim&&left&&start===0)treatment.extraStartTrim=T;
        if(terminals.extraTrim&&right&&at===modules)treatment.extraEndTrim=T;
        const piece={pixels:count,start:start*P,layer,trim,...treatment};
        const [low,high]=stockBounds(piece,false);
        if(high-low>2.5+1e-9||high-low<=0){valid=false;break;}

        score[0] += Number(count === 1 && !!trim);
        score[1] += Number(count === 1);
        score[2]++;
        score[3] += 1 / (count * P - (trim ? H : 0));
        if (layer === 1 && start === 0) score[4] += Math.abs(count - offset);
        pieces.push(piece);
        starts[physical] = at;
      }
      if (!valid) continue;
      const k = starts.join(','), previous = next.get(k);
      if (!previous || better(score, previous.score)) next.set(k, {starts, score, pieces: [...state.pieces, ...pieces]});
    }
    states = next;
  }
  const result = states.get(`${modules},${modules}`);
  if (!result) throw new Error('No native staggered stock layout: ' + key);
  const pieces = result.pieces.sort((a, b) => b.layer - a.layer || a.start - b.start);
  cache.set(key, pieces);
  return pieces.map(p => ({...p}));
}

export function stockSegments(modules, offset = 2) {
  return planStock(modules, 0, [], offset).sort((a, b) => a.layer - b.layer || a.start - b.start);
}
