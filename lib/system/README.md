# Homepage system viewer

`model.js` imports the house directly from `construction/125/structure.js`.
Stages 4–6 use those exact board records, junctions, openings, partitions,
roof slab and insulation. There is no separate homepage house generator.
Stages 1–3 use `createConstruction` for the native board, staggered pair and grid.

`viewer.js` owns materials, camera, controls, stage visibility and render batches.
Batching preserves all source profiles and world transforms. The six-stage
postMessage contract is unchanged. `window.combstructViewer.getState()` exposes
the source, counts and dimensions; `getBattens()` returns closing-strip geometry.

Batten strips derive their axes and extents from the actual board records and wall
panels. Outside strips are vertical; inside strips are horizontal. Their inner
face is tangent to the 240 mm core. Slots are bridged, stock spans do not exceed
2500 mm, and openings trim the full 60 mm width. The teal colour highlights this
layer; it is cut from the same panel material. Battens are presentation geometry,
not part of the catalogue board or fastener schedule.

`construction/batten-clearance.js` clips strips against the actual board profiles
at the strip's width and depth. Each obstruction splits the full strip width,
with 0.5 mm clearance at cut ends; the strip resumes beyond it when needed.
Inner horizontal strips end at the inside corners, with X strips butting against
Z strips, so no ends project through the perpendicular wall.

Bundle `viewer.js` with esbuild, Three.js, OrbitControls and BufferGeometryUtils
(IIFE, ES2020, minified, legal comments inline), then run
`node scripts/build-site.mjs`. Shared-workspace build command:
`python3 outputs/combstruct-battens/build.py`.

Regression: bundle `scripts/system-geometry-check.js` with esbuild for Node and
execute it. It compares board fingerprints and every insulation instance against
the catalogue, checks rib module planes, roof support height, batten faces,
opening clearances and staggered sample seams. These are geometry checks.
`scripts/batten-clearance-check.js` also checks native half-slots, resumed strips,
tangent supporting faces, interior corner limits and independent triangle/box
collision checks on the final house battens. Bundle and run it the same way.
Run `node --test scripts/battens.test.mjs scripts/locales.test.mjs` as well.
