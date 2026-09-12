export const familyDefinitions = [
  ['standard', 'Deska zwykła'], ['ending', 'Deska zakończeniowa'],
  ['corner-slotted', 'Łączeniowa · narożna 102 mm'], ['corner-plain', 'Łączeniowa · narożna 120 mm'],
  ['inset-slotted', 'Łączeniowa · odsunięta, zęby'], ['inset-plain', 'Łączeniowa · odsunięta, pełna krawędź'],
  ['combined', 'Łączeniowa · dwa wybrania'],
];

export function boardFamily(board) {
  const cuts = board.connectorCuts || [];
  return cuts.length > 1 ? 'combined' : cuts.length
    ? `${cuts[0].offset === 0 ? 'corner' : 'inset'}-${cuts[0].edge}`
    : board.trim ? 'ending' : 'standard';
}

// Flipping a flat board over does not create another production variant.
export function nativeVariantKey(board) {
  const keys = [false, true].map(flip => {
    const end = value => flip ? ({start:'end', end:'start', left:'right', right:'left'}[value]) : value;
    const cuts = (board.connectorCuts || []).map(c =>
      [end(c.end), c.edge, c.offset || 0, c.width, c.removedRun].join(':')).sort();
    return JSON.stringify([board.stock.pixels, board.trim ? end(board.trim) : null, cuts]);
  });
  return keys.sort()[0];
}
