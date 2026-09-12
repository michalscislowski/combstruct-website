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
- Connector cuts required by different descendants are united on their shared
  parent board. Native ending profiles retain their 24 cm shortening.
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
connector cuts. Model counts remain 1437 / 3627 / 3110; delivery counts are
1380 / 3480 / 2970. Full ordinary 2.5 m delivery quantities: 562 / 1309 / 1278.

Browser QA covers 73 native variants, absence of fitted previews, identical Flow
and project data, tabs, assembly, mobile widths and all 12 price/order variants.
