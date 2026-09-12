# Catalogue construction models: Combstruct 30, 90 and 125

These sources replace the old model generators under `outputs/combstruct-90` and
`outputs/combstruct-125` in the shared workspace. In particular, 125 no longer
extracts geometry from the advertising film. The film is unchanged.
Combstruct 30 now shares `30/structure.js` and its connector schedule with the
handbook and Flow; `lib/technology/structure.js` is only a re-export. The static site serves the committed `site/assets/*-model.js` bundles.

## Shared rules

- The reviewed visual-model convention is 2500 / 6 mm per module, 240 mm board
  depth and two 18 mm plies. Full and ending boards have one to six modules;
  the ending difference is 240 mm. This preserves the reviewed 30 convention,
  rather than mixing it with the editor's older 2490 mm specification.
- Z is the shorter bearing direction in both house footprints. These horizontal
  ribs open upwards; perpendicular ribs open downwards. Exterior uprights open
  outwards. Roof rafters also open outwards/upwards.
- Floor, terrace, walls, slab, balcony and roof use shared rib planes. No global
  18 mm or 40 mm plan shift is added to solve a connection.
- Native staggered stock reserves a ply at each crossing. A full end runs beside
  the crossing rib and its 240 mm shorter partner bears on it. Separate native
  pieces are used when a span meets multiple junctions.
- Four connector cuts expose obstructed half-slots: corner cuts of 18 × 102 mm
  on the slotted edge or 18 × 120 mm on the plain edge; inset cuts of 18 × 120 mm
  on either edge, 120 mm from the end. JSON schedules record the actual cuts.
- At the four-way ground-wall junction in 90, the Z wall owns the shared upright
  pair. The X branches use native T ends and a stock seam bridged by the crossing
  plaster. Perpendicular full uprights are not superimposed.
- A slab supplies the crossing horizontal material at a shared wall/slab node;
  the wall does not duplicate it. At continuous storey transitions the lower
  upright owns the shared slab band and the upper starting pair uses endings.

## Levels and architecture

90 retains its 9.583 × 6.667 m footprint, terrace, balcony, three bedrooms and
ground-floor office. Slab top is 3.333 m; clear ground height is 2.853 m. The
45° roof starts at 4.760 m, with a 1.427 m knee wall above the upper floor.
The attic ceiling is clipped to the roof. Three rooflights and the stair opening
remain. Stairs have sixteen 193.33 mm rises and 275 mm treads. The checked minimum
clearance to the structural envelope is 2.853 m.

125 retains its 12.5 × 10 m footprint, three bedrooms and 7.5 × 2.5 m terrace
continuing from the floor. Roof-slab top is 3.750 m; clear height is 3.270 m.
Internal axes are snapped to the same rib grid. Plan SVGs use the revised layout.

## Rebuilding

Bundle `30/viewer-source.js`, `90/viewer-source.js` and `125/viewer-source.js` with esbuild, Three.js and
its OrbitControls/BufferGeometryUtils addons: browser IIFE, ES2020, minified,
legal comments retained. Write the respective `site/assets/*-model.js` files (30 retains the public
`krokusy-2-model.js` asset filename).
Then run `npm run build`, which verifies static links and writes `dist/`.

In the shared workspace, the reproducible entry is
`python3 outputs/combstruct-project-updates/build.py`. It pins Three.js to the
same vendored build used during geometry validation.

`qa/build-plans.js` writes the three SVG plans. Bundle it for Node with Three.js
and execute from this repository root. Other audit scripts use a
`project-structure` alias pointing to the project's `structure.js` and take
`90` or `125` as their first argument. They use `three-mesh-bvh` 0.9.9.

`qa/check-connections.js PROJECT` generates connector schedules only when every
detected intersection has a supported native cut. Run it again with `validate`
as the second argument to validate the finished geometry. `qa/audit-model.js`
checks stock profiles, cut volumes, slot direction and ground connectivity.

## Validation and quantity records

Committed QA reports describe the exact geometry fingerprints:

| Check | 90 | 125 |
| --- | ---: | ---: |
| Physical model boards | 3,627 | 3,110 |
| Connector boards / cuts | 332 / 339 | 381 / 381 |
| Connected to the ground contact graph | 3,627 | 3,110 |
| Detected solid intersections after cuts | 0 | 0 |
| Descriptive material length, m | 5,199.388 | 4,673.782 |
| Full 2.5 m board equivalents, rounded up | 2,080 | 1,870 |
| 2500 × 1250 × 18 mm sheet equivalents | 416 | 374 |
| Insulation pieces | 2,835 | 2,316 |

Axis-aligned intersections are checked at the cells defined by the actual
profile edges. Angled roof intersections use representative interior samples;
this is not an exhaustive solid-boolean proof. Contacts use triangle distance
with a 0.05 mm tolerance. Exact removed-volume checks pass for all non-angled
connector profiles. Connectivity and geometry checks do not establish load
capacity, fastening requirements, manufacturing tolerances or erection safety.

Insulation counts are cavity pieces, including pieces clipped at openings and
roof slopes. 90 uses `qa/insulation-count.js`; 125 counts the rendered insulation
instances. The counts exclude duplicate occupied volumes. `qa/quantities.json`
records material lengths, sheet equivalents, rates and rounded offer prices.
Five full boards per sheet is the owner's estimating convention; this is not a
sheet nesting or manufacturing waste estimate.

Browser verification covers all thirteen existing model views, mobile layout,
both embedded viewers, three floor plans, material counts and all eight order
variants. Detailed scripts and screenshots are kept in the shared workspace's
`outputs/combstruct-project-updates/qa/` folder.

## Combstruct 30 catalogue synchronization

The source move from the technology folder preserves every board ID and the
geometry fingerprint `cd56316f80216d5fefa7ade6c77fd358cdf2a269904543ee0c93c4c0926868fa`.
Flow and the catalogue now share all 1,437 boards and 117 connector boards. X is
the shorter bearing direction in this footprint; its floor and ceiling ribs
open upwards. The reviewed 35 degree roof and room arrangement remain.

`qa/audit-30.js` checks the shared fingerprint, unique IDs, slot directions and
material length. `qa/30-validate.json` reports zero detected intersections across
6,021 candidate pairs (angled pairs are sampled as described above). Regenerating
Flow verifies all 1,437 assembly prefixes and 10,732 surface contacts.

The corrected material total is 2,088.932 m: 836 full-board equivalents,
168 sheet equivalents and 1,393 insulation pieces. “Elementy do montażu” in
Flow counts the actual short/full/ending/connector pieces; “Materiał w deskach
2,5 m” in the catalogue identifies the material-equivalent unit. Neither is a
count of distinct board types. The old 843 total belonged to the former model.

`qa/build-plan-30.js` generates the plan directly from the same model. The
catalogue viewer is verified in all six existing views plus the embedded page
and phone layout. Prices use the existing owner-supplied rates; details remain
in `qa/quantities.json`.
