# Technology page

`site/technologie.html` presents three tabs: a 17-topic construction handbook, an interactive BIM demonstration, and the textile-mycelium material development concept. Navigation links are present in the existing desktop/mobile navigation and footers. Each handbook topic and technology has a URL hash and supports browser history.

`content.js` contains Polish handbook copy and the six board choices (ordinary, ending, four connector profiles). `geometry.js` builds orientation examples and selects actual records for connection details. `viewer.js` owns one shared Three.js renderer, navigation, picking, and the controls.

`structure.js` and `connectors.json` are a snapshot of the reviewed Combstruct 30 linear-joint demonstration, including the four connector profiles and the restored crossing ribs. This is not a replacement for the catalogue project assets or their quantities/prices. IDs shown by the BIM demonstration are unique within this fixed model snapshot; persistence across project edits and an AR camera registration system are not implemented. The page explicitly presents AR as a development direction.

The slab and roof examples have upward-opening slots in the ribs parallel to the shorter panel edge. In the wall example those ribs are vertical and their slots face the exterior. End shortening is 240 mm. Corner reliefs remove 18 × 102 mm on the slotted edge or 18 × 120 mm on the plain edge. The two inset reliefs remove 18 × 120 mm, 120 mm from the full end. Inset dimensions were fitted to actual model intersections following the user's reference photos.

The snapshot retains its 2500 / 6 mm module convention. The interior-wall top horizontal rows are not duplicated over the parallel ceiling material; this remaining assembly-layout assumption is retained from the local prototype. Geometry checks are not structural load certification.

The mycelium section distinguishes the proposed textile substrate from a tested/certified commercial insulation product. The EU textile-waste figure is attributed to EEA (6.94 million tonnes, 2022). The business plan describes a developing mycelium line and digital twin; the latest user brief specifies the textile substrate. No private business-plan file is published.

## Build

The static deployment uses the committed `site/assets/technologie.js` bundle; `npm run build` checks local links and assets and produces `dist/` as for the existing site. For source changes, bundle `lib/technology/viewer.js` with esbuild (browser, IIFE, ES2020, minify, legal comments retained) and the installed Three.js package, then run the site build. In the shared workspace the reproducible command is `python3 outputs/combstruct-technology/build.py` from the workspace root.

## Validation performed

- All 17 handbook topics, all six board choices, crossing and spread controls.
- Equality of the ordinary tutorial profile and the house profile by volume; exact removed volumes for all four connector variants; transformed slot directions in slabs, walls and roofs.
- Unique board identifiers, selection through the next-element control, wall-layer slider, three material stages.
- Browser history, direct topic links, keyboard tab navigation, mobile menu, 390 px phone layout and 820 px navigation layout across the existing pages.
- No browser errors or failed local resource loads; all static local links verified during build.

Local verification scripts and screenshots are in `outputs/combstruct-technology/qa/` in the shared workspace.
