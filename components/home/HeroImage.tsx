"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroImageProps {
  slides: readonly HeroSlide[];
  /** How long each slide stays visible (ms) before the next begins. */
  holdsMs?: readonly number[];
}

/** Default rhythm: hero-photo holds 3s, then hero-clean holds 2s, repeat. */
const DEFAULT_HOLDS = [3000, 2000] as const;

/**
 * Full-bleed hero background that cycles through `slides` with a smooth
 * slide-and-fade transition. Each slide holds for its own duration (default
 * 3s on the first, 2s on the second). The inactive slide keeps its alt text
 * empty so assistive tech only ever reads the visible image. Under
 * `prefers-reduced-motion` the loop is disabled (first slide only).
 */
export function HeroImage({ slides, holdsMs = DEFAULT_HOLDS }: HeroImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Chain timeouts (not setInterval) so each slide can hold for a
    // different duration. The slide that just appeared sets the pace for
    // the next change.
    let timeout: number;
    const advance = () => {
      const next = (activeIndexRef.current + 1) % slides.length;
      activeIndexRef.current = next;
      setActiveIndex(next);
      timeout = window.setTimeout(
        advance,
        holdsMs[next % holdsMs.length] ?? holdsMs[0]
      );
    };

    timeout = window.setTimeout(advance, holdsMs[0]);
    return () => window.clearTimeout(timeout);
  }, [slides.length, holdsMs]);

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
