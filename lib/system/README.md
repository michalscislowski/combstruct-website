# Homepage system viewer

`viewer.js` is the human-readable source of `site/system-viewer.js`. It retains
the previously published cinema-derived board and insulation geometry and adds
a separate wall-batten group for stage 6. The first five stages are unchanged.

Bundle with esbuild, Three.js, OrbitControls and BufferGeometryUtils (IIFE,
ES2020, minified, legal comments inline), then run `node scripts/build-site.mjs`
to generate English assets. Shared-workspace build command:
`python3 outputs/combstruct-battens/build.py`.

The controller supports six stages and reports counts in
`window.combstructViewer.getState()`. `getBattens()` returns the face-space
rectangles and world-space centres/sizes for geometry checks.

Batten strips follow actual wall rib extents and axes. Outside strips are
vertical; inside strips are horizontal. Their inner face is tangent to the
240 mm core. Slots are bridged, stock spans do not exceed 2500 mm, and window
and door openings trim all intersecting strip geometry. The teal colour marks
the new layer for explanation; it is cut from the same panel material.
