"use client";

import dynamic from "next/dynamic";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";

const CombBeamEditor = dynamic(
  () => import("@/components/configurator/CombBeamEditor"),
  { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center text-white">Loading...</div> }
);

export default function ConfiguratorPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const t = useTranslations("configurator");

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-foreground">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("backToSite")}
            </Link>
            <span className="text-white font-semibold tracking-wide">
              {t("pageTitle")}
            </span>
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
              aria-label={isFullscreen ? t("exitFullscreen") : t("enterFullscreen")}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("exitFullscreen")}</span>
                </>
              ) : (
                <>
                  <Maximize2 className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("enterFullscreen")}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Editor container */}
      <div className="pt-16 h-screen">
        <CombBeamEditor />
      </div>
    </div>
  );
}
