"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  /** Base path without extension, e.g. "/images/hero-video". Expects .mp4 and -poster.jpg siblings. */
  src: string;
  label?: string;
  className?: string;
}

/**
 * Renders a muted, looping background video that only downloads and plays once
 * it scrolls near the viewport. Keeps heavy media off the critical path and
 * avoids fetching it entirely for visitors who never reach the section.
 */
export default function LazyVideo({
  src,
  label,
  className = "absolute inset-0 w-full h-full object-cover",
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) ref.current?.play().catch(() => {});
  }, [inView]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={`${src}-poster.jpg`}
      className={className}
      aria-label={label}
    >
      {inView && <source src={`${src}.mp4`} type="video/mp4" />}
    </video>
  );
}
