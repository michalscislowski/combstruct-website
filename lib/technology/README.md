# Technology page

`site/technologie.html` presents three tabs: a 17-topic construction handbook, an interactive BIM demonstration, and Combstruct Flow for digital design, production and assembly. Navigation links are present in the existing desktop/mobile navigation and footers. Each handbook topic and technology has a URL hash and supports browser history.

`content.js` contains Polish handbook copy and four end-profile choices: ordinary,
240 mm ending, full 36 mm end slot, and 258 mm ending. `geometry.js` uses the
shared construction engine for these profiles and selects actual house records
for joint details. The transverse rib is visible initially in joint scenes;
users can hide it or spread the plies to inspect the slot.

`structure.js` re-exports `lib/construction/30/structure.js`. The handbook, Flow,
BIM and public catalogue share that model. It now uses full end slots and length
adjustments instead of lateral cuts. The slab sits above horizontal wall caps,
including internal walls. See `lib/construction/README.md` for the geometry,
stock limits and validation scope.

IDs in BIM are unique within this generated snapshot. Persistent identity across
edits, camera registration and an as-built installation model are not implemented.

## Build

The static deployment uses the committed `site/assets/technologie.js` bundle; `npm run build` checks local links and assets and produces `dist/` as for the existing site. For source changes, bundle `lib/technology/viewer.js` with esbuild (browser, IIFE, ES2020, minify, legal comments retained) and the installed Three.js package, then run the site build. In the shared workspace the reproducible command is `python3 outputs/combstruct-technology/build.py` from the workspace root.

## Validation performed

- All 17 handbook topics, all four board choices, crossing and spread controls.
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

Production uses the shared delivered-stock catalogue `site/assets/parts/30.json`.
Its ordinary and ending families include all native length/end treatments, before
cuts around openings or roof edges. Physical installed pieces and delivered
boards remain separate quantities. The production view and project parts view
use the same profiles, counts and selection controls.

`manufacturing-data.json` is generated offline by `scripts/build-flow-data.js`, using the same Three.js build and `three-mesh-bvh` 0.9.9. Regenerate after changing `lib/construction/30/structure.js`, its `connectors.json` or geometry. Bundle the generator with those dependencies for Node and execute it from the repository root before rebuilding the browser viewer. The browser consumes the committed data and does not need the BVH dependency.

The generator finds triangle-surface contacts with a 0.05 mm tolerance, using a spatial hash and BVHs. Each added board must touch the ground or an already installed board; wall verticals and horizontal rows advance from lower to higher levels. Every prefix is audited, disconnected models fail generation, and the output retains each board's earlier contact as a witness. The regenerated model passes all 1,398 assembly prefixes with an earlier contact recorded for each added piece. The test proves geometric connectivity, not load-bearing stability, fastening, collision-free insertion paths or an engineered erection plan. Coplanar BVH edge warnings are counted: the algorithm uses distance only, not the unavailable contact-edge coordinates. Slider updates reveal whole source boards and work in both directions.

The page distinguishes the existing model/identification/presentation tooling from the developing automatic adaptation of arbitrary client floor plans and production-order generation. No arbitrary-plan upload/conversion service, validated CAM export, or external manufacturing-order API is implemented by this website change. The collaboration CTA uses the existing contact route. The old material tab and its scene/styles are removed; old `#mycelium` and `#manufacturing` links resolve to `#flow`.
