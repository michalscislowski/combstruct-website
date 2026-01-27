import * as THREE from 'three';

// ============================================
// COMB BEAM BASE PARAMETERS (cm)
// ============================================
const BASE_CONFIG = {
    height: 24,
    thickness: 1.8,
    slotDepth: 12,
    halfSlotWidth: 1.8,
    fullSectionLength: 37.9,
    slotWidth: 3.6,
};

// ============================================
// BEAM VARIANTS
// ============================================
export const BeamVariant = {
    FULL: 'FULL',     // 6 sections, 5 slots = 249 cm
    HALF: 'HALF',     // 3 sections, 2 slots = 124.5 cm
    DOUBLE: 'DOUBLE', // 2 sections, 1 slot  = 83 cm
    SINGLE: 'SINGLE', // 1 section,  0 slots = 41.5 cm
};

const VARIANT_CONFIG = {
    [BeamVariant.FULL]:   { sections: 6, slots: 5 },
    [BeamVariant.HALF]:   { sections: 3, slots: 2 },
    [BeamVariant.DOUBLE]: { sections: 2, slots: 1 },
    [BeamVariant.SINGLE]: { sections: 1, slots: 0 },
};

// ============================================
// CALCULATE BEAM LENGTH
// ============================================
export function getBeamLength(variant) {
    const { sections, slots } = VARIANT_CONFIG[variant];
    return 2 * BASE_CONFIG.halfSlotWidth +
           sections * BASE_CONFIG.fullSectionLength +
           slots * BASE_CONFIG.slotWidth;
}

// ============================================
// GET BEAM DIMENSIONS
// ============================================
export function getBeamDimensions(variant) {
    return {
        length: getBeamLength(variant),
        height: BASE_CONFIG.height,
        thickness: BASE_CONFIG.thickness,
        slotWidth: BASE_CONFIG.slotWidth,
        slotDepth: BASE_CONFIG.slotDepth,
        halfSlotWidth: BASE_CONFIG.halfSlotWidth,
        fullSectionLength: BASE_CONFIG.fullSectionLength,
        ...VARIANT_CONFIG[variant],
    };
}

// ============================================
// CREATE BEAM GEOMETRY
// ============================================
function createBeamGeometry(variant) {
    const { sections, slots } = VARIANT_CONFIG[variant];
    const { height, thickness, slotDepth, halfSlotWidth, fullSectionLength, slotWidth } = BASE_CONFIG;

    const shape = new THREE.Shape();
    const topY = height;
    const slotBottomY = height - slotDepth;
    const totalLength = getBeamLength(variant);

    // Calculate main slot centers
    const mainSlotCenters = [];
    for (let i = 0; i < slots; i++) {
        const center = halfSlotWidth + fullSectionLength +
                       i * (fullSectionLength + slotWidth) + slotWidth / 2;
        mainSlotCenters.push(center);
    }

    // Draw outline clockwise
    shape.moveTo(0, 0);
    shape.lineTo(totalLength, 0);
    shape.lineTo(totalLength, slotBottomY);
    shape.lineTo(totalLength - halfSlotWidth, slotBottomY);
    shape.lineTo(totalLength - halfSlotWidth, topY);

    // Draw main slots (right to left)
    for (let i = slots - 1; i >= 0; i--) {
        const slotRight = mainSlotCenters[i] + slotWidth / 2;
        const slotLeft = mainSlotCenters[i] - slotWidth / 2;
        shape.lineTo(slotRight, topY);
        shape.lineTo(slotRight, slotBottomY);
        shape.lineTo(slotLeft, slotBottomY);
        shape.lineTo(slotLeft, topY);
    }

    shape.lineTo(halfSlotWidth, topY);
    shape.lineTo(halfSlotWidth, slotBottomY);
    shape.lineTo(0, slotBottomY);
    shape.lineTo(0, 0);

    // Extrude
    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: thickness,
        bevelEnabled: false,
    });

    // Center on Z axis
    geometry.translate(0, 0, -thickness / 2);
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    return geometry;
}

// ============================================
// COMB BEAM SYSTEM
// Manages instanced rendering of all variants
// ============================================
export class CombBeamSystem {
    constructor(maxInstancesPerVariant = 2000) {
        this.maxInstances = maxInstancesPerVariant;

        // Create geometries for each variant
        this.geometries = {};
        for (const variant of Object.values(BeamVariant)) {
            this.geometries[variant] = createBeamGeometry(variant);
        }

        // OSB material (shared)
        this.material = new THREE.MeshStandardMaterial({
            color: 0xc9a66b,
            roughness: 0.8,
            metalness: 0.0,
        });

        // Edge material (black lines)
        this.edgeMaterial = new THREE.LineBasicMaterial({
            color: 0x000000,
            linewidth: 1,
        });

        // Create instanced mesh for each variant
        this.meshes = {};
        this.edgeMeshes = {};
        this.instanceCounts = {};

        for (const variant of Object.values(BeamVariant)) {
            // Main mesh
            const mesh = new THREE.InstancedMesh(
                this.geometries[variant],
                this.material,
                maxInstancesPerVariant
            );
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.count = 0;
            mesh.name = `CombBeam_${variant}`;

            this.meshes[variant] = mesh;
            this.instanceCounts[variant] = 0;

            // Edge geometry template
            this.edgeMeshes[variant] = new THREE.EdgesGeometry(this.geometries[variant], 15);
        }

        // Store individual edge line objects (for visibility)
        this.edgeLines = [];
        this._scene = null;

        // Temp objects for matrix calculations
        this._matrix = new THREE.Matrix4();
        this._position = new THREE.Vector3();
        this._quaternion = new THREE.Quaternion();
        this._scale = new THREE.Vector3(1, 1, 1);
        this._euler = new THREE.Euler();
    }

    // Add beam instance
    addBeam(variant, x, y, z, rotationX = 0, rotationY = 0, rotationZ = 0) {
        if (!this.meshes[variant]) {
            console.error(`Unknown variant: ${variant}`);
            return -1;
        }

        if (this.instanceCounts[variant] >= this.maxInstances) {
            console.warn(`Max instances reached for ${variant}`);
            return -1;
        }

        const index = this.instanceCounts[variant];

        this._position.set(x, y, z);
        this._euler.set(rotationX, rotationY, rotationZ);
        this._quaternion.setFromEuler(this._euler);

        this._matrix.compose(this._position, this._quaternion, this._scale);
        this.meshes[variant].setMatrixAt(index, this._matrix);

        this.instanceCounts[variant]++;
        this.meshes[variant].count = this.instanceCounts[variant];
        this.meshes[variant].instanceMatrix.needsUpdate = true;

        // Create edge lines for this beam
        const edgeLine = new THREE.LineSegments(
            this.edgeMeshes[variant],
            this.edgeMaterial
        );
        edgeLine.position.set(x, y, z);
        edgeLine.rotation.set(rotationX, rotationY, rotationZ);
        edgeLine.userData = { variant, index };
        this.edgeLines.push(edgeLine);

        // Add to scene if we have a reference
        if (this._scene) {
            this._scene.add(edgeLine);
        }

        return index;
    }

    // Update beam transform
    updateBeam(variant, index, x, y, z, rotationX = 0, rotationY = 0, rotationZ = 0) {
        if (index < 0 || index >= this.instanceCounts[variant]) return false;

        this._position.set(x, y, z);
        this._euler.set(rotationX, rotationY, rotationZ);
        this._quaternion.setFromEuler(this._euler);

        this._matrix.compose(this._position, this._quaternion, this._scale);
        this.meshes[variant].setMatrixAt(index, this._matrix);
        this.meshes[variant].instanceMatrix.needsUpdate = true;

        return true;
    }

    // Get total beam count
    getTotalCount() {
        return Object.values(this.instanceCounts).reduce((a, b) => a + b, 0);
    }

    // Get count per variant
    getCount(variant) {
        return this.instanceCounts[variant] || 0;
    }

    // Clear all beams
    clear() {
        for (const variant of Object.values(BeamVariant)) {
            this.instanceCounts[variant] = 0;
            this.meshes[variant].count = 0;
            this.meshes[variant].instanceMatrix.needsUpdate = true;
        }
        // Remove edge lines from scene
        if (this._scene) {
            for (const edgeLine of this.edgeLines) {
                this._scene.remove(edgeLine);
            }
        }
        this.edgeLines = [];
    }

    // Clear specific variant
    clearVariant(variant) {
        if (this.meshes[variant]) {
            this.instanceCounts[variant] = 0;
            this.meshes[variant].count = 0;
            this.meshes[variant].instanceMatrix.needsUpdate = true;
        }
    }

    // Remove last edge line (for undo)
    removeLastEdgeLine() {
        if (this.edgeLines.length > 0) {
            const edgeLine = this.edgeLines.pop();
            if (this._scene) {
                this._scene.remove(edgeLine);
            }
        }
    }

    // Add all meshes to scene
    addToScene(scene) {
        this._scene = scene;
        for (const mesh of Object.values(this.meshes)) {
            scene.add(mesh);
        }
        // Add existing edge lines
        for (const edgeLine of this.edgeLines) {
            scene.add(edgeLine);
        }
    }

    // Remove from scene
    removeFromScene(scene) {
        for (const mesh of Object.values(this.meshes)) {
            scene.remove(mesh);
        }
        for (const edgeLine of this.edgeLines) {
            scene.remove(edgeLine);
        }
        this._scene = null;
    }

    // Export construction to JSON
    exportToJSON() {
        const data = {
            version: 1,
            baseConfig: BASE_CONFIG,
            beams: [],
        };

        const matrix = new THREE.Matrix4();
        const position = new THREE.Vector3();
        const quaternion = new THREE.Quaternion();
        const scale = new THREE.Vector3();

        for (const variant of Object.values(BeamVariant)) {
            const count = this.instanceCounts[variant];
            for (let i = 0; i < count; i++) {
                this.meshes[variant].getMatrixAt(i, matrix);
                matrix.decompose(position, quaternion, scale);

                data.beams.push({
                    variant,
                    position: [position.x, position.y, position.z],
                    rotation: [quaternion.x, quaternion.y, quaternion.z, quaternion.w],
                });
            }
        }

        return JSON.stringify(data, null, 2);
    }

    // Import construction from JSON
    importFromJSON(jsonString) {
        const data = JSON.parse(jsonString);

        this.clear();

        const euler = new THREE.Euler();
        const quaternion = new THREE.Quaternion();

        for (const beam of data.beams) {
            quaternion.set(
                beam.rotation[0],
                beam.rotation[1],
                beam.rotation[2],
                beam.rotation[3]
            );
            euler.setFromQuaternion(quaternion);

            this.addBeam(
                beam.variant,
                beam.position[0],
                beam.position[1],
                beam.position[2],
                euler.x,
                euler.y,
                euler.z
            );
        }

        return this.getTotalCount();
    }

    // Dispose all resources
    dispose() {
        for (const geometry of Object.values(this.geometries)) {
            geometry.dispose();
        }
        for (const edgeGeom of Object.values(this.edgeMeshes)) {
            edgeGeom.dispose();
        }
        this.material.dispose();
        this.edgeMaterial.dispose();
    }
}

// ============================================
// HELPER: Get slot positions for a beam variant
// Useful for programmatic construction
// ============================================
export function getSlotPositions(variant) {
    const { slots } = VARIANT_CONFIG[variant];
    const { halfSlotWidth, fullSectionLength, slotWidth } = BASE_CONFIG;

    const positions = [];

    // Half-slot at start (x = 0)
    positions.push({
        type: 'half',
        x: halfSlotWidth / 2,
        width: halfSlotWidth,
    });

    // Main slots
    for (let i = 0; i < slots; i++) {
        const center = halfSlotWidth + fullSectionLength +
                       i * (fullSectionLength + slotWidth) + slotWidth / 2;
        positions.push({
            type: 'full',
            x: center,
            width: slotWidth,
        });
    }

    // Half-slot at end
    const length = getBeamLength(variant);
    positions.push({
        type: 'half',
        x: length - halfSlotWidth / 2,
        width: halfSlotWidth,
    });

    return positions;
}
