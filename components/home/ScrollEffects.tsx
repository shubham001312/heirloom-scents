"use client";

import { useEffect } from "react";

/**
 * Runs the scroll-reveal observers for the home page:
 * - `.fade-in-up` sections fade in as they enter the viewport
 * - `.ritual-step` rows dim-to-full as they enter (desktop ritual scroll)
 *
 * Renders nothing; effects only. The `js` class is added here — after
 * hydration — so content is never hidden for no-JS visitors and React never
 * sees a pre-hydration DOM mutation (which would log a mismatch warning).
 * Elements already in the viewport are revealed synchronously to avoid any
 * flash of hidden content.
 */
export function ScrollEffects() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const observers: IntersectionObserver[] = [];

    const reveal = (el: Element, threshold: number) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) =>
            entry.target.classList.toggle("in-view", entry.isIntersecting)
          );
        },
        { threshold }
      );
      observer.observe(el);
      observers.push(observer);
    };

    const inViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    document.querySelectorAll(".fade-in-up").forEach((el) => {
      if (inViewport(el)) el.classList.add("in-view");
      else reveal(el, 0.2);
    });

    document.querySelectorAll(".ritual-step").forEach((el) => {
      if (inViewport(el)) el.classList.add("in-view");
      else reveal(el, 0.6);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return null;
}
