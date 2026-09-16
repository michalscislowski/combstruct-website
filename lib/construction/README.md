# Catalogue construction models: Combstruct 30, 90 and 125

These sources replace the old model generators under `outputs/combstruct-90` and
`outputs/combstruct-125` in the shared workspace. In particular, 125 no longer
extracts geometry from the advertising film. The film is unchanged.
Combstruct 30 now shares `30/structure.js` and its connector schedule with the
handbook and Flow; `lib/technology/structure.js` is only a re-export. The static site serves the committed `site/assets/*-model.js` bundles.

## Shared rules

- Active models use 2500 / 6 mm modules, 240 mm board depth and two 18 mm
  plies. Slot stations are preserved when an end is modified.
- In 30, X is the shorter bearing direction. In 90 and 125 it is Z. These ribs
  open upwards in floors and ceilings. Exterior wall uprights open outward;
  roof rafters open towards the roof covering.
- All three models default to the full-end-slot strategy. The old lateral-cut
  schedules remain available only with `jointStrategy: 'lateral-cuts'` for
  regression comparisons. No lateral-cut family is present in the current kits.
- At a through junction, the plain half of the ordinary end extends by 18 mm.
  Its original half-slot therefore becomes a full 36 mm end slot. The adjoining
  ending is shortened by another 18 mm (258 mm instead of 240 mm). The open
  reservation is still 240 mm wide; it moves onto the appropriate rib face.
- Wall depth centres sit 138 mm from their station, keeping their faces beside
  the transverse pair. This adjusts the panel depth position, not the shared
  rib planes or slot spacing. Floors and terraces retain their grid stations.
- A slab bottom sits on the TOP face of the horizontal wall pair: 18 mm above
  its station. Wall caps are included, also on internal walls. Lower and upper
  upright lengths reserve the slab band. No side cut is used to clear that cap.
- Paired stock is planned together with staggered seams. Real delivered length,
  including end treatment, cannot exceed 2500 mm. An extended six-module ordinary
  board is rejected and the span is repartitioned. No delivered board is shorter
  than the 240 mm structural depth in the three current models.
- Four-way wall ownership is determined using wall junction stations, not the
  shifted depth centres, so T junctions retain their opening jambs.

## Levels and architecture

Combstruct 30 retains its 13 × 15 module footprint and seven-module terrace.
The ceiling bottom is at 3.351 m, directly above the 3.333 m wall-cap station.
The ceiling top is at 3.591 m. Both pitched roof halves move with the new ceiling.

Combstruct 90 retains its 9.583 × 6.667 m footprint, terrace, balcony, three
bedrooms and ground-floor office. The ground cap uses seven modules: the slab
bottom is at 2.935 m and the upper floor at 3.175 m. Ground-floor clear height is
2.695 m. The 45-degree roof and attic ceiling follow the revised level datum.
The stair retains sixteen risers (about 183.4 mm) and 275 mm treads. Opening
bottoms and lintels follow the new storey datum while retaining their module
stations. This is a geometric adaptation, not a structural or code approval.

Combstruct 125 retains its 12.5 × 10 m footprint and continuous terrace.
The flat roof slab rests above the nine-module wall cap: bottom 3.768 m,
top 4.008 m. The interior wall cap rows are present too.

## Verification of the new strategy

`qa/audit-length-joints.js` checks positive-volume intersections between exact
orthogonal stock cells, including half-space clipping at gables. It rejects
lateral cuts and overlength stock. `qa/check-connections.js PROJECT validate`
independently checks rendered solids; angled pairs are sampled, not exhaustively
proven. `qa/audit-model.js` checks grounded contact connectivity and slot
orientation. `scripts/stock-profile.test.mjs` tests full end slots, stock limits,
stagger and mirrored production variants. `scripts/audit-kit-stock.js` checks
all delivered pieces against their uncut source stocks. Opening-frame and Flow
assembly-prefix audits are regenerated from these same models.

These are geometric checks. They do not establish load capacity, joint strength,
fastener requirements, fabrication tolerances or stability during erection.

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
The last four slab endings are removed by exchanging the full and ending
upright plies in `upper-hall-notch-west` and `upper-hall-notch-north`.
`verticalPhase` selects the full upright ply; the supporting slab and upper
ceiling reserve that same ply. The exchange applies throughout each upright,
keeping staggered seams and all wall axes, rooms and openings unchanged.

| Project | Short endings before → after | Delivered boards | Installed pieces | Sheets | Insulation pieces |
| --- | --- | ---: | ---: | ---: | ---: |
| 30 | 84 → 0 | 1,331 | 1,364 | 193 | 1,393 |
| 90 | 151 → 0 | 3,401 | 3,528 | 482 | 2,685 |
| 125 | 254 → 0 | 2,652 | 2,738 | 414 | 2,316 |

`qa/stock-layout.json` records the before/after counts. Per-rib volume and merged
longitudinal intervals were compared before connector cuts: all 468 / 1,256 /
850 rib lines and openings are preserved. In 90, the four reviewed walls gain
material at previously shortened ends; every previous solid interval remains.
All other raw rib volumes and limits are unchanged in that terminal extension
step. The subsequent upright-ply exchange preserves combined raw volumes and
longitudinal intervals across all 629 paired ribs (`qa/90-ply-swap-coverage.json`);
individual physical plies change intentionally. Connector
schedules were then regenerated and checked for intersections. Axis-aligned
pairs use profile-cell samples; angled pairs use representative interior samples,
not an exhaustive solid Boolean proof. Shared diagonal end faces are contacts,
not intersections; boundary samples within 1 micrometre are excluded.

`qa/audit-stock-layout.js` checks 2,346 schedules, 40 terminal policies and compares
12 small cases with an independent exhaustive enumeration.
`qa/audit-90-short-endings.js` verifies the longer balcony/hall boards and the
absence of one-module boards, the four longer replacements, and matching
upright/slab/ceiling ply reservations.
`qa/audit-model.js` checks stock profiles,
connector cut volumes, slot direction and contact connectivity. An independent
vertex-to-surface check covers very thin angled tips when the geometry BVH's
threshold query misses their contact. `qa/audit-vertex-contact.js` also tests
separated and remote coplanar faces. All 3,528 / 2,738 pieces in 90 / 125 are
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

## Roof–wall lap between slots

`roof-wall-lap.js` sets a common slot phase for each entire roof plane while
preserving all wall and slab axes. The short upright in physical ply A supports
the underside of a continuous roof board. Physical ply B extends alongside that
roof board; B roof pieces end at either side of the upright. Only upper corners
beside neighbouring slots are relieved, keeping the lower lap intact. The 1 mm
clearance is a model allowance pending fabrication/connection engineering.

Combstruct 30 uses this at 35°, without a knee wall; the short-ply filler above
the unchanged slab follows the roof underside. Its roof is lowered by 18 mm ×
tan(35°) to meet the actual outer wall face. Combstruct 90 uses the same rule at
45° on its knee walls. The 125 flat-roof model is geometrically unchanged.
The ridge now uses the alternating-ply lap described below.

| Model | Delivered native boards | Installed pieces | Sheets | Insulation pieces |
| --- | ---: | ---: | ---: | ---: |
| 30 | 1,363 | 1,424 | 195 | 1,358 |
| 90 | 3,447 | 3,618 | 486 | 2,411 |
| 125 | 2,720 | 2,806 | 430 | 2,279 |

The catalogue continues to count full delivered profiles before on-site cuts,
combining descendants of each stock board. Flow/Robotics/BIM and the house
viewers use the regenerated model and contact sequence.

Validation: `roof-model-regression.json` compares actual mesh coordinates with
release e434af1. All floor/slab/ceiling meshes are unchanged in 30 and 90; all
125 meshes are unchanged. It checks 1,540 swept roof-slot volumes against the
rendered post/roof meshes. To rerun `audit-roof-models.js`, bundle the three
`baseline-30/90/125` aliases from that release alongside the current structures.
`check-connections.js` reports no sampled intersections, and
`audit-length-joints.js` no exact orthogonal profile-cell intersections. Both
houses are connected to their ground contact graphs. The opening audit verifies
20 wall openings, three rooflights and 2,442 continuous frame sections. The stock
audit checks each installed vertex against its delivered native board.

Contact connectivity and geometric fit are not structural strength, fastening,
construction-stage stability or fabrication certification.

## Alternating-ply ridge lap

`roof-ridge-lap.js` is shared by the handbook and the pitched 30/90 models.
Left slope ply A reaches the opposite roof top; right slope ply A stops at its
underside. Ply B reverses that arrangement. This retains the largest geometric
intersection of the two roof strips available within their existing slots and
the unchanged outer envelope. No new stock profile, filled slot, removed cross
rib or thickness rebate is introduced. Existing native stock is lengthened by
whole modules where needed at the head, and cut to the roof end planes.

If a long end enters the insertion path of an existing transverse pair, only
that end is relieved. Slot pitch and the roof phase established at the wall stay
unchanged. This means the actual 30/90 lap silhouettes can differ from the
centred-slot tutorial example. The model-specific handbook presets use the
actual house phases; purple highlights only the shared material remaining in
both long plies. The tutorial preset reproduces the approved full diamond lap
at 45 degrees. All displayed profiles come from the existing native engine.

`qa/audit-ridge.js` checks 123 combinations (three slot layouts, 20–60 degrees),
actual face overlap, no same-ply intersections, the roof envelope, and 984 swept
slot checks. The centred 45-degree example retains the full 240 × 240 mm face.
`qa/audit-ridge-models.js` compares against release 380fc5b: all 42 house ridge
nodes match their handbook presets; wall/slab geometry and every transverse roof
rib are identical to that release. All 125 geometry remains identical. It also
checks 1,540 wall-joint slot insertion envelopes. Bundle `baseline-30/90/125`
from 380fc5b to rerun this regression. Results are in `ridge-laps.json` and
`ridge-model-regression.json`.

Both pitched models pass the sampled collision, ground-contact and opening-frame
checks. Flow assembly and all stock assignments are regenerated from these
meshes. The 90 rafter schedule ends at the actual eave envelope rather than an
extra padded module; its delivered count remains 3,447, with an estimated 486
sheets under the existing five-boards-per-sheet convention. Stock/price rates
are unchanged. These are geometry and material-accounting checks, not a
structural capacity or fastening approval.
