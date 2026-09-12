import {boardFamily,nativeVariantKey} from './families.js';

const rounded = values => values.map(n=>Math.round(n*1e7)/1e7);

// openStock can leave several pieces of one original board on either side of
// an opening. Its local origin, layer and stock profile survive that operation.
// Cut limits and roof clipping planes must NOT distinguish delivered boards.
export function sourceStockKey(board) {
  return JSON.stringify([board.surface,board.wallId||'',board.kind,board.axis,board.index,
    board.layer,board.stockLayer,board.stock.pixels,board.trim,
    rounded(board.mesh.position.toArray()),rounded(board.along),rounded(board.normal),rounded(board.thick)]);
}

export function deliveryStock(boards) {
  const sources=new Map();
  for(const board of boards){
    const key=sourceStockKey(board);
    if(!sources.has(key))sources.set(key,{
      id:`stock-${sources.size+1}`,key,stock:{pixels:board.stock.pixels},
      trim:board.trim,connectorCuts:[],members:[],
    });
    const stock=sources.get(key);stock.members.push(board.id);
    for(const cut of board.connectorCuts||[]){
      const cutKey=c=>JSON.stringify([c.end,c.edge,c.offset||0,c.width,c.removedRun]);
      if(!stock.connectorCuts.some(existing=>cutKey(existing)===cutKey(cut)))stock.connectorCuts.push({...cut});
    }
  }
  return [...sources.values()].map(stock=>({...stock,family:boardFamily(stock),variantKey:nativeVariantKey(stock),
    lengthM:stock.stock.pixels*2.5/6-(stock.trim ? .24 : 0)}));
}
