"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroImageProps {
  slides: readonly HeroSlide[];
  /** How long each slide stays visible before the crossfade begins */
  intervalMs?: number;
}

/**
 * Full-bleed hero background that crossfades between slides every
 * `intervalMs`, starting on the first slide. The inactive slide keeps its
 * alt text empty so assistive tech only ever reads the visible image.
 * Under `prefers-reduced-motion` the loop is disabled (first slide only).
 */
export function HeroImage({ slides, intervalMs = 5000 }: HeroImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [slides.length, intervalMs]);

  return (
    <div className="hero-image-stack">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={isActive ? slide.alt : ""}
            fill
            priority
            sizes="100vw"
            className={`hero-image${isActive ? " hero-image--active" : ""}`}
            style={{ objectFit: "cover" }}
          />
        );
      })}
    </div>
  );
}
