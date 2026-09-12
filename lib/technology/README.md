# Technology page

`site/technologie.html` presents three tabs: a 17-topic construction handbook, an interactive BIM demonstration, and Combstruct Flow for digital design, production and assembly. Navigation links are present in the existing desktop/mobile navigation and footers. Each handbook topic and technology has a URL hash and supports browser history.

`content.js` contains Polish handbook copy and the six board choices (ordinary, ending, four connector profiles). `geometry.js` builds orientation examples and selects actual records for connection details. `viewer.js` owns one shared Three.js renderer, navigation, picking, and the controls.

`structure.js` re-exports `lib/construction/30/structure.js`. The handbook, Flow and the public Combstruct 30 catalogue viewer now use that one reviewed model, including the four connector profiles and restored crossing ribs. The connector schedule lives only beside that shared model. IDs shown by the BIM demonstration are unique within this fixed model snapshot; persistence across project edits and an AR camera registration system are not implemented. The page explicitly presents AR as a development direction.

The slab and roof examples have upward-opening slots in the ribs parallel to the shorter panel edge. In the wall example those ribs are vertical and their slots face the exterior. End shortening is 240 mm. Corner reliefs remove 18 × 102 mm on the slotted edge or 18 × 120 mm on the plain edge. The two inset reliefs remove 18 × 120 mm, 120 mm from the full end. Inset dimensions were fitted to actual model intersections following the user's reference photos.

The snapshot retains its 2500 / 6 mm module convention. The interior-wall top horizontal rows are not duplicated over the parallel ceiling material; this remaining assembly-layout assumption is retained from the local prototype. Geometry checks are not structural load certification.

## Build

The static deployment uses the committed `site/assets/technologie.js` bundle; `npm run build` checks local links and assets and produces `dist/` as for the existing site. For source changes, bundle `lib/technology/viewer.js` with esbuild (browser, IIFE, ES2020, minify, legal comments retained) and the installed Three.js package, then run the site build. In the shared workspace the reproducible command is `python3 outputs/combstruct-technology/build.py` from the workspace root.

## Validation performed

- All 17 handbook topics, all six board choices, crossing and spread controls.
- Equality of the ordinary tutorial profile and the house profile by volume; exact removed volumes for all four connector variants; transformed slot directions in slabs, walls and roofs.
- Unique board identifiers, selection through the next-element control, wall-layer slider, four Flow stages.
- Browser history, direct topic links, keyboard tab navigation, mobile menu, 390 px phone layout and 820 px navigation layout across the existing pages.
- No browser errors or failed local resource loads; all static local links verified during build.

Local verification scripts and screenshots are in `outputs/combstruct-technology/qa/` in the shared workspace.

## Interior wall reveal

`interior.js` replaces the earlier translucent wall sample with a finished interior scene, viewed from the inside of the actual left wall. It reuses 77 source-board records, cropped only at the presentation boundary, and adds 80 opaque insulation cells. The slider opens a rectangular section of the interior finish; the mirror uses the same clipping boundary. Room floor, sanitary fixture, sockets and light stay in place.

Water supply, drain and electrical routes are illustrative presentation geometry in a service layer in front of the structural ribs. They are not an as-built installation plan or catalogue quantity input. Visible pipes, cables, insulation cells and boards can be picked; concealed objects are occluded by the opaque finish. The passport adapts its fields to the selected type. Source board IDs are retained, while finish/insulation/service IDs belong to this fixed demo. The AR application remains described as a development direction.

Direct link: `technologie.html#bim-sciana`. Starts with a fully finished wall. Local browser validation covers fully closed, partial and fully revealed states, pointer selection of water/cables/insulation, occlusion behind the finish, return to the house model, and mobile layout.

## Combstruct Flow

`manufacturing.js` presents the software workflow to developers, panel/element manufacturers, designers, construction partners and individual clients. The four scenes reuse one Combstruct 30 example: the actual footprint/openings, the identified structure, selectable board profiles with quantities, and a progressively revealed assembly.

Production uses actual source geometry transformed to the board's own axes. Seven groups cover standard boards, endings, the four connector cuts and the combined two-cut variant present in seven source pieces. Each board is counted once, including shorter lengths and opening/roof trims within its family. The production heading says “Elementy do montażu”: 1,437 physical pieces of different lengths. The same geometry totals 2,088.932 m, or 835.573 full 2.5 m boards, displayed as 836. The former catalogue value of 843 belonged to the old model. The generated `material` field bridges the two units in Flow; catalogue material/insulation totals and offers have been refreshed from this model.

`manufacturing-data.json` is generated offline by `scripts/build-flow-data.js`, using the same Three.js build and `three-mesh-bvh` 0.9.9. Regenerate after changing `lib/construction/30/structure.js`, its `connectors.json` or geometry. Bundle the generator with those dependencies for Node and execute it from the repository root before rebuilding the browser viewer. The browser consumes the committed data and does not need the BVH dependency.

The generator finds triangle-surface contacts with a 0.05 mm tolerance, using a spatial hash and BVHs. Each added board must touch the ground or an already installed board; wall verticals and horizontal rows advance from lower to higher levels. Every prefix is audited, disconnected models fail generation, and the output retains each board's earlier contact as a witness. The current model has 10,732 contact pairs and passes all 1,437 prefixes (the previous kind-only order introduced 15 disconnected pieces). The test proves geometric connectivity, not load-bearing stability, fastening, collision-free insertion paths or an engineered erection plan. Coplanar BVH edge warnings are counted: the algorithm uses distance only, not the unavailable contact-edge coordinates. Slider updates reveal whole source boards and work in both directions.

The page distinguishes the existing model/identification/presentation tooling from the developing automatic adaptation of arbitrary client floor plans and production-order generation. No arbitrary-plan upload/conversion service, validated CAM export, or external manufacturing-order API is implemented by this website change. The collaboration CTA uses the existing contact route. The old material tab and its scene/styles are removed; old `#mycelium` and `#manufacturing` links resolve to `#flow`.
