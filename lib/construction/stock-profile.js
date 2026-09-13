// End treatment changes length only. Internal slot stations remain i * P.
export const MODULE = 2.5 / 6, DEPTH = .24, THICKNESS = .018;
export function stockBounds(p, installed = true) {
  const length=p.pixels*MODULE;
  const low=(p.trim==='left'?DEPTH:0)+(p.extraStartTrim||0)-(p.extendStart||0);
  const high=length-(p.trim==='right'?DEPTH:0)-(p.extraEndTrim||0)+(p.extendEnd||0);
  return installed ? [Math.max(p.minCut??-Infinity,low),Math.min(p.limit??Infinity,high)] : [low,high];
}
export function stockSlots(p) {
  const length=p.pixels*MODULE;
  return [[-(p.extendStart||0),THICKNESS],...Array.from({length:p.pixels-1},(_,i)=>[(i+1)*MODULE-THICKNESS,(i+1)*MODULE+THICKNESS]),[length-THICKNESS,length+(p.extendEnd||0)]];
}
export function endTreatment(p) {
  return Object.fromEntries(['extendStart','extendEnd','extraStartTrim','extraEndTrim'].filter(k=>p[k]).map(k=>[k,p[k]]));
}
