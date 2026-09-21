# Technology page

`site/technologie.html` presents four tabs: an 18-topic construction handbook, an interactive BIM demonstration, Combstruct Flow for digital design/production/assembly, and Combstruct Robotics. Navigation links are present in the existing desktop/mobile navigation and footers. Each handbook topic and technology has a URL hash and supports browser history.

`content.js` contains Polish handbook copy and four end-profile choices: ordinary,
240 mm ending, full 36 mm end slot, and 258 mm ending. `geometry.js` uses the
shared construction engine for these profiles and selects actual house records
for joint details. The roof–wall topic uses a compact parametric sample from the same shared `roof-wall-lap.js` rules as the houses. The transverse rib is visible initially in joint scenes;
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

The generator finds triangle-surface contacts with a 0.05 mm tolerance, using a spatial hash and BVHs. Each added board must touch the ground or an already installed board; wall verticals and horizontal rows advance from lower to higher levels. Every prefix is audited, disconnected models fail generation, and the output retains each board's earlier contact as a witness. The regenerated model passes all 1,424 assembly prefixes with an earlier contact recorded for each added piece. The test proves geometric connectivity, not load-bearing stability, fastening, collision-free insertion paths or an engineered erection plan. Coplanar BVH edge warnings are counted: the algorithm uses distance only, not the unavailable contact-edge coordinates. Slider updates reveal whole source boards and work in both directions.

The page distinguishes the existing model/identification/presentation tooling from the developing automatic adaptation of arbitrary client floor plans and production-order generation. No arbitrary-plan upload/conversion service, validated CAM export, or external manufacturing-order API is implemented by this website change. The collaboration CTA uses the existing contact route. The old material tab and its scene/styles are removed; old `#mycelium` and `#manufacturing` links resolve to `#flow`.

## Combstruct Robotics

`robotics.js` adds two concept animations, with Polish and English copy from the
same locale pipeline. `#robotics` opens a lights-off production line;
`#robotics-montaz` opens the gantry assembly example. Pause, restart, a timeline,
stage buttons and an overview/operation close-up control are available. Automatic
motion stops offscreen, in background tabs and under reduced-motion preferences.
The factory close-up follows the sheet/board group's actual position every frame.
Framing eases around milling and camera motion is damped in time; caption changes
never reset the view. Tracking preserves manual orbit, pan and relative zoom.
Overview mode remains stationary. Seeking/restarting explicitly repositions the
camera, while pause/resume retains the current frame without a catch-up jump.

The factory follows the requested order: feed one 2500 × 1250 × 18 mm sheet,
cut five straight blanks, stand them on their long edges, mill from above,
inspect/identify, then package. Seven stationary spindles form a row along the
board's long Z axis, at the native profile's five full slots and two end half-slots.
Upright boards move across that row along X at a constant speed, continuing to
inspection without batch stops. There is no plunging or tool-head indexing. All
seven slots appear together as each board passes through the row. The completed
part uses `beamGeometry(6)` directly; moving saddles remain below the slot roots.
Boards then tip onto the kit individually. Fixtures, conveyors, tooling,
scanner and packing equipment are illustrative, not designed machine assemblies.
Lengths/variants and project kits remain governed by Flow and the existing stock
catalogue. This is a representative five-board cycle, not an entire house order.

The assembly example uses the actual Combstruct 30 geometry and the existing
1,424-piece contact-ordered sequence. It shows four complete native boards at
each of four construction stages, then the completed model. Selection rejects
opening/skew fragments and verifies the actual geometry against its uncut stock
dimensions. It does not substitute longer geometry for a short installed piece.
The house retains its existing geometry and sequence; omitted operations are
represented by the preceding installed prefix and identified as skips in the UI.
Native profiles and lengths are grouped into seven persistent stockpiles on low
dunnage. Mirrored endings share a pile: their source pose is canonicalized with
a rigid flip, preserving the exact final geometry. These piles are representative
supply for the 16 shown picks, not a full-house bill of materials. The robot selects
the matching pile from the required model part, grips its top board and removes
exactly one layer. The next pickup is 18 mm lower when that pile is used again.
Counts and visible layers are derived from progress, so seeking and replay restore
stock deterministically. No operator feeds boards in sequence or changes the
source shape between operations.

Both profile axes are aligned for flat pickup, then transformed back to the exact
installed pose. The selected part remains attached to the gripper in transit,
then joins the installed prefix at release. The gantry returns directly to the
next required pile, with a continuous pose across cycle and stage boundaries.
IDs, predecessor contacts, selected pile, remaining stock and tool positions
are exposed in `getRoboticsState()` for QA. This demonstrates geometric sequence
and material handling, not a collision-checked path, rated machine, stability
assessment, robot controller program or operational lights-off factory.

An XYZ gantry with rotating gripper was selected for this visual concept. The
industrial precedent consulted was Güdel WoodFlex automatic wood machining and
assembly: https://uk.gudel.com/news/The%20future%20of%20modular%20construction%20today_n7831
No third-party robot or company is presented as a Combstruct partner.

Local QA: `outputs/combstruct-robotics/check.cjs` checks both processes at their
main milestones in PL/EN, rejects renderer errors, checks motion/pause, switches
back to BIM/Flow, and captures desktop and 390 px layouts. Existing locale tests
also verify quantity/coordinate preservation and deterministic English builds.
`check-camera.cjs` samples playback across all factory stage boundaries, checks
continuous tracking, stationary overview, manual orbit/zoom, pause and restart.
Bundle `scripts/robotics-assembly.test.js` with the same Three.js and run with Node
to check native selection, rejection of the 24 cm fragments, reconstruction of
every carried vertex in its installed position, grip contacts and predecessors.
It also compares stock/pick silhouettes despite differing triangulations, checks
shared mirrored stock and deterministic depletion. `check-assembly.cjs` exercises
all 16 operations in PL/EN, stock counts, the 18 mm pickup-height change, backwards
seeking and continuity between every cycle, including the final parking pose.

## Between-slot roof–wall lap

The roof–wall topic offers knee wall / floor-and-roof variants, each with or
without an eave. Pitch ranges from 20° to 60°. Layer separation exposes the short
bearing ply, continuous roof ply and long overlapping upright ply. A separate
control lifts the transverse roof pairs along the insertion direction.

`roof-joint.js` uses the native stock engine and `construction/roof-wall-lap.js`.
The slab always keeps its native, unbevelled profile and original rib planes.
Without a knee wall, the short-ply filler is above the slab. Upper upright corners
are relieved only where they approach neighbouring roof slots; the lower lap
remains continuous. The 1 mm slot clearance is a geometric allowance in the
visualisation, not a validated manufacturing tolerance.

`qa/audit-roof-detail.js` checks all 164 pitch/variant combinations, clips actual
mesh triangles against the swept slot volumes, verifies slab invariance and
exercises separation/insertion controls. `qa/roof-wall-laps.json` records results.
These checks do not validate load capacity or fastening.

## Ridge lap

`ridge-joint.js` uses the shared `construction/roof-ridge-lap.js` and existing
native profiles. The default 45-degree example shows the accepted full lap
between slots. The 30/90 presets retain each house's actual roof slot phase.
Long ends are trimmed only where they obstruct a transverse rib's insertion
path; no slot or transverse row is removed. The angle control covers 20–60°.

Purple is the exact projected overlap of the two rendered long plies, not an
additional board. It disappears when the layers are separated. Cross ribs are
hidden initially in this topic, can be enabled, and can be lifted through their
working slots. Scene controls and copy are translated through the PL/EN pipeline.
`audit-ridge.js` validates all three layouts throughout the angle range, and
`audit-ridge-models.js` verifies the same lap areas in all 42 house ridge nodes.

## Wall battening

`#stelazowanie` adds a wall-face detail after the exterior-wall rules. The 60 × 18 mm
strips are cut from the same panel material, stock length 2500 mm. They cap the
36 mm paired-rib edges: vertical on the exterior/open-slot face of uprights and
horizontal on the interior/open-slot face of horizontal ribs. The teal colour
identifies the new strips, not a different material. The centre of the strip
aligns with the rib centre, leaving 12 mm on either side.

Outside/inside views share one insulated sample (one cell is intentionally open);
the T-section view is a short cut between slots. The existing separation slider
moves only the strips away from the wall faces. The homepage has the same layer
as stage 6 after insulation. `lib/construction/battens.js` handles stock lengths
and subtracts apertures from the full 60 mm width, including jamb-edge overhangs.

This addition visualises the proposed wall layer. It does not define screw type,
spacing, composite-action design values, fastening at splices, or a production
cutting schedule. Existing catalogue board quantities and prices are unchanged;
rendered strip fragments are not a procurement count. Catalogue roof geometry
and joints are unchanged.

Validation: `node --test scripts/battens.test.mjs scripts/locales.test.mjs`; local
responsive PL/EN browser checks in `outputs/combstruct-battens/check.cjs` exercise
all six stages, directions, dimensions, detail views, separation, keyboard
navigation, and switching back to the existing ridge joint.
