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

## Stock planning and verification

All three models and the handbook samples use `stock-layout.js`. The planner
chooses seams in both plies together. A junction fixes a seam only where its
native half-lock requires one. Optional seams never coincide in the two plies.
Boards remain one to six modules long, with at most one 240 mm shortened end.

The planner first minimizes one-module shortened endings, then other one-module
boards, then the total stock count. For equal counts it balances usable lengths.
This avoids the former greedy six-module board followed by a 176.7 mm ending.
Terminal reservations are explicit per end. In 90, the two balcony wing walls
have free horizontal ends, and the two recessed hall walls can start full because
the crossing wall lies before their start node. Their far T ends retain the
240 mm reservation. Extending those native boards removes another 42 short
endings without moving a wall or opening, or introducing a new board profile.
Four remain in the slab between offset ground-floor and attic partition nodes.
Extending any of those four towards either neighbor intersects an upright.
This is a constraint of the current junction layout, not a general lower bound
for Combstruct designs.

| Project | Short endings before → after | Delivered boards | Installed pieces | Sheets | Insulation pieces |
| --- | --- | ---: | ---: | ---: | ---: |
| 30 | 84 → 0 | 1,331 | 1,364 | 193 | 1,393 |
| 90 | 151 → 4 | 3,405 | 3,532 | 482 | 2,685 |
| 125 | 254 → 0 | 2,652 | 2,738 | 414 | 2,316 |

`qa/stock-layout.json` records the before/after counts. Per-rib volume and merged
longitudinal intervals were compared before connector cuts: all 468 / 1,256 /
850 rib lines and openings are preserved. In 90, the four reviewed walls gain
material at previously shortened ends; every previous solid interval remains.
All other raw rib volumes and limits are unchanged. Connector
schedules were then regenerated and checked for intersections. Axis-aligned
pairs use profile-cell samples; angled pairs use representative interior samples,
not an exhaustive solid Boolean proof. Shared diagonal end faces are contacts,
not intersections; boundary samples within 1 micrometre are excluded.

`qa/audit-stock-layout.js` checks 2,346 schedules, 40 terminal policies and compares
12 small cases with an independent exhaustive enumeration.
`qa/audit-90-short-endings.js` verifies the longer balcony/hall boards and the
uprights blocking both extension directions for each of the four remaining ends.
`qa/audit-model.js` checks stock profiles,
connector cut volumes, slot direction and contact connectivity. An independent
vertex-to-surface check covers very thin angled tips when the geometry BVH's
threshold query misses their contact. `qa/audit-vertex-contact.js` also tests
separated and remote coplanar faces. All 3,532 / 2,738 pieces in 90 / 125 are
connected to the ground contact graph. Regenerating Flow checks all 1,364 assembly
prefixes of 30, requiring contact with an already placed element or the ground.

These geometry/contact checks do not establish load capacity, fastening details,
manufacturing tolerances or erection safety.

## Catalogue and Flow quantities

`30/structure.js` is shared by the catalogue, handbook, BIM and Flow. Regenerate
`scripts/build-flow-data.js`, `qa/audit-30.js`, and the two larger model audits
before updating `qa/quantities.json`. `scripts/build-parts-data.js` generates
physical delivered stock, combining descendants of the same pre-cut board.
`scripts/audit-kit-stock.js` independently checks membership and that every fitted
piece is contained in its delivered native profile.

`scripts/sync-kit-offers.mjs` updates the customer totals and offers. Prices retain
the owner's rates: OSB3 150 zł/sheet, plywood 300 zł/sheet, insulation 15 zł/piece,
assembly 120 zł/sheet; offers round up to 1,000 zł. Five 2.5 m boards per sheet is
the owner's estimating convention. It is not a manufacturing nesting result.
Insulation quantities include cavity pieces clipped at openings and roof slopes;
the reports describe the current cut subdivision, which can change with the stock
layout while the filled cavities remain the same.

Browser verification covers the model views, 17 handbook scenes, all delivered
part variants, mobile layout, Flow assembly and project/order price consistency.
