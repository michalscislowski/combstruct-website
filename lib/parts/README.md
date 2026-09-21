# Shared project / Flow parts catalogue

`catalogue.js` supplies the controls for both project pages and Flow production.
`scene.js` displays the native board supplied in the kit, before site cutting.
Project pages lazily load `viewer.js` and only their own `assets/parts/{id}.json`;
Flow imports the same `30.json` into its existing renderer.

## Quantity semantics

- `totalBoards` counts boards delivered BEFORE cuts for openings and roof edges.
  `installedPieces` counts the fragments present in the assembled house model.
- `stock.js` groups descendants of one original stock board using its location,
  axes, layer and native profile. Cutting limits do not create another board.
- All current models use ordinary and ending boards. End extensions and extra
  shortening are part of the source identity, length and preview. Full end slots
  add 18 mm to the plain half; the matching ending reserves 258 mm. The legacy
  side-cut union remains only for comparison data.
- Each delivered board belongs to one family and one length variant. Mirroring a
  flat board does not create an additional variant. There is no fitted category.
- `qa/{id}.json` records every model piece's parent board and its native profile.
- `material.lengthM` sums the native lengths of these distinct delivered boards.
  Sheet equivalents use 12.5 m per sheet (five full 2.5 m strips), as requested.
- The quantity audit retains `actualLengthM` for the assembled model and adds
  `deliveryBoards` / `deliveryLengthM`. Its sheets and offers use the delivered
  stock lengths, as recorded by `materialBasis: delivery-before-cutting`.

## Regeneration and checks

Bundle and run `scripts/build-parts-data.js` from the repository root with the
construction viewers' Three.js. It verifies unchanged house geometry hashes,
coverage, parent assignments, category sums and native preview dimensions.
Run `node scripts/sync-kit-offers.mjs` to update sheet counts and prices using the
existing user rates. Then rebundle `lib/parts/viewer.js` and
`lib/technology/viewer.js` into their existing site asset paths and build the site.

Bundle/run `scripts/audit-kit-stock.js` with the same Three.js. It independently
checks provenance against the original construction schedule and tests all
2.5 million model vertices against their delivered stock boundaries and merged
connector cuts. Current model counts are 1424 / 3618 / 2806; delivery counts are
1363 / 3447 / 2720.

Browser QA covers native variants, absence of fitted previews, identical Flow
and project data, tabs, assembly, mobile widths and all 12 price/order variants.

## Battens

`families` and `totalBoards` retain structural-board semantics. `additionalFamilies`
adds a flat 2500 × 60 × 18 mm batten with its full-stock quantity and 3D preview.
Both project parts and Flow production use the shared catalogue controls; the
Flow assembly sequence continues to describe the structural core.

`battens.lengthM` is installed length, `stockStrips` is the feasible number of
2500 mm blanks after reusing offcuts, and `sheets` rounds those blanks up at twenty
per sheet, without kerf. `material.sheets` remains structural stock only;
`material.battenSheets` adds batten stock and `material.totalSheets` is the kit
total used by offers. The public page shows all three batten quantities and the
structural/batten sheet breakdown. Full cutting plans are stored in construction
QA reports; the public JSON carries the summary.
