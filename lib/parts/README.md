# Shared project / Flow parts catalogue

`catalogue.js` supplies the controls for both project pages and Flow production.
`scene.js` displays actual model geometry, in each piece's local coordinates.
Project pages lazily load `viewer.js` and only their own `assets/parts/{id}.json`;
Flow imports the very same `30.json` into its existing renderer.

## Quantity semantics

- `totalBoards` is the number of physical pieces in the house.
- A family count includes all its native length variants plus its fitted subset.
- Each native variant's count belongs to its displayed shape and length. Mirrored
  orientations of a flat board share a variant; ending/connector profiles do not.
- `custom` model pieces belong to `fitted`, never to the displayed full-length
  board. Their preview shows several labelled examples without a per-shape count.
- Each piece occurs exactly once. `qa/{id}.json` records its assignment.
- Full-board material equivalents remain in `construction/qa/quantities.json`
  for sheet estimates and pricing. They are not physical quantities in this UI.

## Regeneration and checks

Bundle and run `scripts/build-parts-data.js` from the repository root using the
same Three.js as the construction viewers. It checks current geometry hashes,
full coverage, category sums, native dimensions and the Flow model's totals.
Rebundle `lib/parts/viewer.js` into `site/assets/parts-viewer.js` and
`lib/technology/viewer.js` into `site/assets/technologie.js`, then run the site
build. Both browser bundles use the existing OrbitControls / Three.js vendor.

The site build rejects stale geometry hashes or inconsistent physical sums.
Browser QA covers all 71 native variants, fitted subsets, matching Flow data,
project tabs, completed assembly, and widths 320 / 390 / 1440 px.
An independent dimension/volume check of actual meshes confirms the ordinary
2.5 m counts: 358 (30), 893 (90), 1036 (125). No house geometry changed here.
