"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  CombBeamSystem,
  BeamVariant,
  getBeamDimensions,
} from "@/lib/CombBeam";
import { ChevronUp, ChevronDown } from "lucide-react";

type VariantKey = "FULL" | "HALF" | "DOUBLE" | "SINGLE";

export default function CombBeamEditor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const beamSystemRef = useRef<CombBeamSystem | null>(null);
  const ghostMeshRef = useRef<THREE.Mesh | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use state for UI updates
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [currentVariant, setCurrentVariant] = useState<VariantKey>("FULL");
  const [beamCount, setBeamCount] = useState(0);
  const [panelCollapsed, setPanelCollapsed] = useState(false);

  const placedBeamsRef = useRef<Array<{
    variant: VariantKey;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    index: number;
  }>>([]);

  const t = useTranslations("configurator");
  const moveStep = 41.5;
  const rotationStep = Math.PI / 2;

  // Update ghost beam position when state changes
  useEffect(() => {
    if (ghostMeshRef.current) {
      ghostMeshRef.current.position.set(position.x, position.y, position.z);
      ghostMeshRef.current.rotation.set(rotation.x, rotation.y, rotation.z);
    }
  }, [position, rotation]);

  // Create/update ghost beam when variant changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (ghostMeshRef.current) {
      scene.remove(ghostMeshRef.current);
      ghostMeshRef.current.geometry.dispose();
      (ghostMeshRef.current.material as THREE.Material).dispose();
    }

    const dims = getBeamDimensions(BeamVariant[currentVariant]);
    const geometry = new THREE.BoxGeometry(dims.length, dims.height, dims.thickness);
    geometry.translate(dims.length / 2, dims.height / 2, 0);

    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 0.5,
    });

    const ghost = new THREE.Mesh(geometry, material);
    ghost.position.set(position.x, position.y, position.z);
    ghost.rotation.set(rotation.x, rotation.y, rotation.z);
    ghostMeshRef.current = ghost;
    scene.add(ghost);
  }, [currentVariant, position, rotation]);

  const placeBeam = () => {
    const beamSystem = beamSystemRef.current;
    if (!beamSystem) return;

    const index = beamSystem.addBeam(
      BeamVariant[currentVariant],
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z
    );

    if (index >= 0) {
      placedBeamsRef.current.push({
        variant: currentVariant,
        position: { ...position },
        rotation: { ...rotation },
        index,
      });
      setBeamCount(beamSystem.getTotalCount());
    }
  };

  const undoLastBeam = () => {
    const beamSystem = beamSystemRef.current;
    if (!beamSystem || placedBeamsRef.current.length === 0) return;

    const last = placedBeamsRef.current.pop()!;
    const variantKey = BeamVariant[last.variant] as string;
    (beamSystem.instanceCounts as Record<string, number>)[variantKey]--;
    const mesh = (beamSystem.meshes as Record<string, THREE.InstancedMesh>)[variantKey];
    mesh.count = (beamSystem.instanceCounts as Record<string, number>)[variantKey];
    mesh.instanceMatrix.needsUpdate = true;
    beamSystem.removeLastEdgeLine();
    setBeamCount(beamSystem.getTotalCount());
  };

  const exportConstruction = () => {
    const beamSystem = beamSystemRef.current;
    if (!beamSystem) return;

    const json = beamSystem.exportToJSON();

    // Create download link
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "combstruct-construction.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importConstruction = () => {
    fileInputRef.current?.click();
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        loadConstructionData(data);
      } catch (err) {
        console.error("JSON parse error:", err);
        alert(t("importError"));
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  };

  const loadConstructionData = (data: { beams: Array<{ variant: string; position: number[]; rotation: number[] }> }) => {
    const beamSystem = beamSystemRef.current;
    if (!beamSystem) return;

    beamSystem.clear();
    placedBeamsRef.current = [];

    const euler = new THREE.Euler();
    const quaternion = new THREE.Quaternion();

    for (const beam of data.beams) {
      quaternion.set(beam.rotation[0], beam.rotation[1], beam.rotation[2], beam.rotation[3]);
      euler.setFromQuaternion(quaternion);

      const variantKey = beam.variant as VariantKey;
      const index = beamSystem.addBeam(
        BeamVariant[variantKey],
        beam.position[0],
        beam.position[1],
        beam.position[2],
        euler.x,
        euler.y,
        euler.z
      );

      if (index >= 0) {
        placedBeamsRef.current.push({
          variant: variantKey,
          position: { x: beam.position[0], y: beam.position[1], z: beam.position[2] },
          rotation: { x: euler.x, y: euler.y, z: euler.z },
          index,
        });
      }
    }

    setBeamCount(beamSystem.getTotalCount());
  };

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      10000
    );
    camera.position.set(200, 150, 300);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(100, 20, 0);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(100, 200, 100);
    mainLight.castShadow = true;
    scene.add(mainLight);
    scene.add(new THREE.DirectionalLight(0x4ecdc4, 0.3).translateX(-50).translateY(50));

    // Grid
    const gridHelper = new THREE.GridHelper(600, 60, 0x444466, 0x333355);
    gridHelper.rotation.x = Math.PI / 2;
    gridHelper.position.y = -0.5;
    scene.add(gridHelper);
    scene.add(new THREE.AxesHelper(50));

    // Beam system
    const beamSystem = new CombBeamSystem(2000);
    beamSystem.addToScene(scene);
    beamSystemRef.current = beamSystem;

    // Create initial ghost beam
    const dims = getBeamDimensions(BeamVariant.FULL);
    const geometry = new THREE.BoxGeometry(dims.length, dims.height, dims.thickness);
    geometry.translate(dims.length / 2, dims.height / 2, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 0.5,
    });
    const ghost = new THREE.Mesh(geometry, material);
    ghostMeshRef.current = ghost;
    scene.add(ghost);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      beamSystem.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Keyboard controls - separate effect to use current state
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't handle if typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      const step = event.shiftKey ? 0.1 : moveStep;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          setPosition(p => ({ ...p, x: p.x + step }));
          break;
        case "ArrowLeft":
          event.preventDefault();
          setPosition(p => ({ ...p, x: p.x - step }));
          break;
        case "ArrowUp":
          event.preventDefault();
          setPosition(p => ({ ...p, y: p.y + step }));
          break;
        case "ArrowDown":
          event.preventDefault();
          setPosition(p => ({ ...p, y: p.y - step }));
          break;
        case "r":
        case "R":
          setPosition(p => ({ ...p, z: p.z + step }));
          break;
        case "t":
        case "T":
          setPosition(p => ({ ...p, z: p.z - step }));
          break;
        case "q":
        case "Q":
          setRotation(r => ({ ...r, x: r.x + rotationStep }));
          break;
        case "w":
        case "W":
          setRotation(r => ({ ...r, x: r.x - rotationStep }));
          break;
        case "a":
        case "A":
          setRotation(r => ({ ...r, y: r.y + rotationStep }));
          break;
        case "s":
        case "S":
          setRotation(r => ({ ...r, y: r.y - rotationStep }));
          break;
        case "d":
        case "D":
          setRotation(r => ({ ...r, z: r.z + rotationStep }));
          break;
        case "f":
        case "F":
          setRotation(r => ({ ...r, z: r.z - rotationStep }));
          break;
        case " ":
          event.preventDefault();
          placeBeam();
          break;
        case "z":
        case "Z":
          if (!event.metaKey && !event.ctrlKey) {
            undoLastBeam();
          }
          break;
        case "1":
          setCurrentVariant("FULL");
          break;
        case "2":
          setCurrentVariant("HALF");
          break;
        case "3":
          setCurrentVariant("DOUBLE");
          break;
        case "4":
          setCurrentVariant("SINGLE");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [placeBeam, undoLastBeam]);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />

      {/* Hidden file input for import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleFileImport}
        className="hidden"
      />

      {/* UI Panel - responsive */}
      <div className={`absolute top-4 left-4 right-4 sm:right-auto bg-black/90 rounded-lg text-white font-mono text-xs sm:max-w-[240px] transition-all ${panelCollapsed ? 'max-h-12' : 'max-h-[80vh]'} overflow-hidden`}>
        {/* Header with collapse toggle */}
        <div
          className="flex items-center justify-between p-3 cursor-pointer sm:cursor-default"
          onClick={() => setPanelCollapsed(!panelCollapsed)}
        >
          <h2 className="text-[#4ecdc4] font-bold text-sm">{t("title")}</h2>
          <button className="sm:hidden text-white/60">
            {panelCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        <div className={`px-3 pb-3 ${panelCollapsed ? 'hidden' : 'block'} sm:block overflow-y-auto max-h-[calc(80vh-48px)]`}>
          {/* Variant selection */}
          <h3 className="text-[#ffe66d] font-bold mb-2">{t("variant")}:</h3>
          <div className="grid grid-cols-4 gap-1 mb-3">
            {(["FULL", "HALF", "DOUBLE", "SINGLE"] as const).map((variant) => (
              <button
                key={variant}
                className={`px-2 py-2 border rounded text-[10px] transition-colors ${
                  currentVariant === variant
                    ? "border-[#4ecdc4] bg-[#2a5a5a] text-white"
                    : "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setCurrentVariant(variant)}
              >
                {variant}
              </button>
            ))}
          </div>

          {/* Position & Rotation - 2 columns on mobile */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div>
              <h3 className="text-[#ffe66d] font-bold mb-1 text-[10px]">{t("position")} (cm):</h3>
              <div className="bg-gray-900 p-2 rounded text-[9px] space-y-0.5">
                <div>X: {position.x.toFixed(1)}</div>
                <div>Y: {position.y.toFixed(1)}</div>
                <div>Z: {position.z.toFixed(1)}</div>
              </div>
            </div>
            <div>
              <h3 className="text-[#ffe66d] font-bold mb-1 text-[10px]">{t("rotation")}:</h3>
              <div className="bg-gray-900 p-2 rounded text-[9px] space-y-0.5">
                <div>X: {((rotation.x * 180) / Math.PI).toFixed(0)}°</div>
                <div>Y: {((rotation.y * 180) / Math.PI).toFixed(0)}°</div>
                <div>Z: {((rotation.z * 180) / Math.PI).toFixed(0)}°</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <h3 className="text-[#ffe66d] font-bold mb-2">{t("actions")}:</h3>
          <div className="grid grid-cols-2 gap-1 mb-3">
            <button
              className="px-2 py-2 bg-[#4ecdc4] text-black font-bold rounded text-[11px] hover:bg-[#3dbdb4] active:scale-95 transition-transform"
              onClick={placeBeam}
            >
              {t("place")}
            </button>
            <button
              className="px-2 py-2 bg-[#ff6b6b] text-white font-bold rounded text-[11px] hover:bg-[#e55a5a] active:scale-95 transition-transform"
              onClick={undoLastBeam}
            >
              {t("undo")}
            </button>
            <button
              className="px-2 py-2 bg-[#ffe66d] text-black font-bold rounded text-[11px] hover:bg-[#ecd55c] active:scale-95 transition-transform"
              onClick={exportConstruction}
            >
              {t("export")}
            </button>
            <button
              className="px-2 py-2 bg-[#9b59b6] text-white font-bold rounded text-[11px] hover:bg-[#8e44ad] active:scale-95 transition-transform"
              onClick={importConstruction}
            >
              {t("import")}
            </button>
          </div>

          {/* Beam count */}
          <div className="text-[#4ecdc4] font-bold mb-3">
            {t("beamCount")}: {beamCount}
          </div>

          {/* Controls help - hidden on very small screens */}
          <div className="hidden sm:block text-[8px] text-gray-400 space-y-0.5 border-t border-gray-700 pt-2">
            <div><span className="bg-gray-700 px-1 rounded">Arrows</span> X/Y <span className="bg-gray-700 px-1 rounded">R/T</span> Z</div>
            <div><span className="bg-gray-700 px-1 rounded">QW</span> rot.X <span className="bg-gray-700 px-1 rounded">AS</span> Y <span className="bg-gray-700 px-1 rounded">DF</span> Z</div>
            <div><span className="bg-gray-700 px-1 rounded">Space</span> {t("place")} <span className="bg-gray-700 px-1 rounded">Z</span> {t("undo")}</div>
            <div><span className="bg-gray-700 px-1 rounded">Shift</span> 0.1cm <span className="bg-gray-700 px-1 rounded">1-4</span> {t("variant")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
