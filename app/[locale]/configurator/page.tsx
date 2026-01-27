"use client";

import dynamic from "next/dynamic";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CombBeamEditor = dynamic(
  () => import("@/components/configurator/CombBeamEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-secondary">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-8 h-8 border-2 border-foreground border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[14px] text-muted">Loading configurator...</p>
        </motion.div>
      </div>
    )
  }
);

export default function ConfiguratorPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const t = useTranslations("configurator");

  // Listen for fullscreen changes (e.g., user pressing Escape)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Top bar - matching website header style */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            <Link
              href="/"
              className="group flex items-center gap-2 text-foreground hover:text-muted transition-colors text-[15px] font-medium"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t("backToSite")}
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-muted uppercase tracking-wide hidden sm:inline">
                Combstruct
              </span>
              <span className="text-[17px] font-semibold text-foreground tracking-[-0.01em]">
                {t("pageTitle")}
              </span>
            </div>

            <button
              onClick={toggleFullscreen}
              className="group flex items-center gap-2 text-foreground hover:text-muted transition-colors text-[15px] font-medium"
              aria-label={isFullscreen ? t("exitFullscreen") : t("enterFullscreen")}
            >
              <span className="hidden sm:inline">
                {isFullscreen ? t("exitFullscreen") : t("enterFullscreen")}
              </span>
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Editor container */}
      <div className="pt-[72px] h-screen">
        <CombBeamEditor />
      </div>
    </div>
  );
}
