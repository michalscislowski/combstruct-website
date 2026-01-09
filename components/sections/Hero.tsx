"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const audienceCardKeys = [
  "selfBuilders",
  "architects",
  "developers",
  "suppliers",
] as const;

const audienceCardHrefs = {
  selfBuilders: "/products#diy",
  architects: "/products#architects",
  developers: "/products#developers",
  suppliers: "/contact",
};

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations("hero");

  // Respect reduced motion preference
  useEffect(() => {
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [prefersReducedMotion]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Animation variants - disabled if reduced motion preferred
  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section
      className="relative min-h-screen flex flex-col"
      aria-labelledby="hero-heading"
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/slider1a.webp"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
          {/* Fallback text for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Refined overlay - lighter and asymmetric for better video visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-[72px]">
        <div className="relative mx-auto max-w-[1400px] w-full px-6 lg:px-10 py-20 lg:py-32">
          {/* Play/Pause Button - positioned in bottom right of content area */}
          <button
            onClick={togglePlayPause}
            className="absolute bottom-6 right-6 lg:bottom-8 lg:right-10 z-20 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2"
            aria-label={isPlaying ? t("pauseVideo") : t("playVideo")}
            aria-pressed={isPlaying}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-foreground" aria-hidden="true" />
            ) : (
              <Play className="h-5 w-5 text-foreground ml-0.5" aria-hidden="true" />
            )}
          </button>
          {/* Headline */}
          <div className="max-w-4xl">
            <motion.h1
              id="hero-heading"
              {...animationProps}
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground"
              style={{ textShadow: "0 2px 20px rgba(255,255,255,0.8), 0 1px 3px rgba(255,255,255,0.9)" }}
            >
              {t("headline")}
              <br />
              {t("headlineBreak")}
            </motion.h1>

            <motion.p
              {...animationProps}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
              }
              className="mt-8 text-[clamp(1.125rem,2vw,1.375rem)] leading-relaxed text-foreground/90 max-w-2xl"
              style={{ textShadow: "0 1px 15px rgba(255,255,255,0.7), 0 1px 2px rgba(255,255,255,0.8)" }}
            >
              {t("subheadline")}
            </motion.p>

            <motion.div
              {...animationProps}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
              }
              className="mt-10 flex flex-wrap gap-4"
            >
              {/* Primary CTA - more prominent */}
              <Link href="/contact" className="btn-primary">
                {t("ctaPrimary")}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>

              {/* Secondary CTA */}
              <Link href="/products" className="btn-secondary">
                {t("ctaSecondary")}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Audience Cards - WikiHouse Style */}
        <motion.div
          {...animationProps}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
          }
          className="w-full border-t border-border bg-white"
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <nav aria-label="Audience navigation">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0">
                {audienceCardKeys.map((cardKey, index) => (
                  <li key={index}>
                    <Link
                      href={audienceCardHrefs[cardKey]}
                      className="group flex items-center justify-between py-6 lg:py-8 px-0 lg:px-6 border-b sm:border-b-0 sm:border-r border-border last:border-0 hover:bg-secondary/50 transition-colors min-h-[80px]"
                    >
                      <div className="flex-1">
                        <span className="block text-[15px] lg:text-[17px] font-semibold text-foreground">
                          {t(`audienceCards.${cardKey}.title`)}
                        </span>
                        <span className="block mt-1 text-[13px] lg:text-[14px] text-muted">
                          {t(`audienceCards.${cardKey}.description`)}
                        </span>
                      </div>
                      <ArrowRight
                        className="h-5 w-5 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all ml-4 flex-shrink-0"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      </div>

      {/* Screen reader announcement for video status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isPlaying ? t("videoPlaying") : t("videoPaused")}
      </div>
    </section>
  );
}
