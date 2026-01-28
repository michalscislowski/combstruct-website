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
import { ChevronUp, ChevronDown, Plus, Undo2, Download, Upload, Move3D, RotateCcw, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type VariantKey = "FULL" | "HALF" | "DOUBLE" | "SINGLE";

const variantLabels: Record<VariantKey, string> = {
  FULL: "249 cm",
  HALF: "124.5 cm",
  DOUBLE: "83 cm",
  SINGLE: "41.5 cm",
};

export default function CombBeamEditor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const beamSystemRef = useRef<CombBeamSystem | null>(null);
  const ghostMeshRef = useRef<THREE.Mesh | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [currentVariant, setCurrentVariant] = useState<VariantKey>("FULL");
  const [beamCount, setBeamCount] = useState(0);
  const [panelCollapsed, setPanelCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<"variant" | "position">("variant");

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
      color: 0x1a1a1a,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });

    const ghost = new THREE.Mesh(geometry, material);
    ghost.renderOrder = 999;
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

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f7f7);
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

    // Refined lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(100, 200, 100);
    mainLight.castShadow = true;
    scene.add(mainLight);
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-50, 50, -50);
    scene.add(fillLight);

    // Subtle grid - horizontal floor plane (X-Z)
    const gridHelper = new THREE.GridHelper(600, 60, 0xe5e5e5, 0xf0f0f0);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Minimal axes
    const axesHelper = new THREE.AxesHelper(30);
    scene.add(axesHelper);

    // Beam system
    const beamSystem = new CombBeamSystem(2000);
    beamSystem.addToScene(scene);
    beamSystemRef.current = beamSystem;

    // Create initial ghost beam
    const dims = getBeamDimensions(BeamVariant.FULL);
    const geometry = new THREE.BoxGeometry(dims.length, dims.height, dims.thickness);
    geometry.translate(dims.length / 2, dims.height / 2, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    const ghost = new THREE.Mesh(geometry, material);
    ghost.renderOrder = 999;
    ghostMeshRef.current = ghost;
    scene.add(ghost);

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Load default construction
    fetch('/combstructure3.json')
      .then(res => res.json())
      .then(data => {
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
      })
      .catch(err => console.error('Failed to load default construction:', err));

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

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

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
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
    <div className="relative w-full h-full bg-secondary">
      <div ref={containerRef} className="w-full h-full" />

      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleFileImport}
        className="hidden"
      />

      {/* Main Control Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute top-4 left-4 right-4 sm:right-auto sm:w-[320px] bg-white border border-border shadow-lg transition-all ${
          panelCollapsed ? "overflow-hidden" : ""
        }`}
      >
        {/* Panel Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b border-border cursor-pointer sm:cursor-default select-none"
          onClick={() => setPanelCollapsed(!panelCollapsed)}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-foreground tracking-[-0.01em]">
                {t("title")}
              </h2>
              <p className="text-[12px] text-muted">
                {beamCount} {beamCount === 1 ? "beam" : "beams"}
              </p>
            </div>
          </div>
          <button className="sm:hidden w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors">
            {panelCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        <AnimatePresence>
          {!panelCollapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {/* Tab Navigation */}
              <div className="flex border-b border-border">
                <button
                  onClick={() => setActiveTab("variant")}
                  className={`flex-1 px-4 py-3 text-[13px] font-medium transition-colors ${
                    activeTab === "variant"
                      ? "text-foreground border-b-2 border-foreground -mb-px"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {t("variant")}
                </button>
                <button
                  onClick={() => setActiveTab("position")}
                  className={`flex-1 px-4 py-3 text-[13px] font-medium transition-colors ${
                    activeTab === "position"
                      ? "text-foreground border-b-2 border-foreground -mb-px"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {t("position")}
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-4">
                {activeTab === "variant" ? (
                  <div className="space-y-2">
                    {(["FULL", "HALF", "DOUBLE", "SINGLE"] as const).map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setCurrentVariant(variant)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all ${
                          currentVariant === variant
                            ? "bg-foreground text-white"
                            : "bg-secondary text-foreground hover:bg-border"
                        }`}
                      >
                        <span className="text-[14px] font-medium">{variant}</span>
                        <span className={`text-[13px] ${currentVariant === variant ? "text-white/70" : "text-muted"}`}>
                          {variantLabels[variant]}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Position */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Move3D className="w-4 h-4 text-muted" />
                        <span className="text-[12px] font-medium text-muted uppercase tracking-wide">
                          {t("position")} (cm)
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {(["x", "y", "z"] as const).map((axis) => (
                          <div key={axis} className="bg-secondary px-3 py-2">
                            <span className="text-[11px] text-muted uppercase">{axis}</span>
                            <p className="text-[14px] font-medium text-foreground tabular-nums">
                              {position[axis].toFixed(1)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rotation */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <RotateCcw className="w-4 h-4 text-muted" />
                        <span className="text-[12px] font-medium text-muted uppercase tracking-wide">
                          {t("rotation")}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {(["x", "y", "z"] as const).map((axis) => (
                          <div key={axis} className="bg-secondary px-3 py-2">
                            <span className="text-[11px] text-muted uppercase">{axis}</span>
                            <p className="text-[14px] font-medium text-foreground tabular-nums">
                              {((rotation[axis] * 180) / Math.PI).toFixed(0)}°
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="px-4 pb-4 space-y-2">
                <button
                  onClick={placeBeam}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-white text-[14px] font-semibold hover:bg-dark-lighter transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  {t("place")}
                </button>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={undoLastBeam}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 border border-border text-[13px] font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    <Undo2 className="w-3.5 h-3.5" />
                    {t("undo")}
                  </button>
                  <button
                    onClick={exportConstruction}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 border border-border text-[13px] font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {t("export")}
                  </button>
                  <button
                    onClick={importConstruction}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 border border-border text-[13px] font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    {t("import")}
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="hidden sm:block px-4 pb-4 pt-2 border-t border-border">
                <p className="text-[11px] text-muted mb-2 uppercase tracking-wide font-medium">Shortcuts</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-muted">
                  <div className="flex justify-between">
                    <span>Move X/Y</span>
                    <span className="text-foreground">Arrow keys</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Move Z</span>
                    <span className="text-foreground">R / T</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rotate</span>
                    <span className="text-foreground">Q W A S D F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Place beam</span>
                    <span className="text-foreground">Space</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Undo</span>
                    <span className="text-foreground">Z</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fine adjust</span>
                    <span className="text-foreground">Shift</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Beam Counter Badge - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-6 right-6 bg-white border border-border px-4 py-2 shadow-lg"
      >
        <p className="text-[11px] text-muted uppercase tracking-wide">Total</p>
        <p className="text-[24px] font-semibold text-foreground tabular-nums leading-tight">
          {beamCount}
        </p>
      </motion.div>
    </div>
  );
}
