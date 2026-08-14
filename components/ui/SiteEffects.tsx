"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Site-wide client effects (renders nothing):
 *
 * 1. Marks every <img> as `.img-loaded` once its pixels are available — CSS
 *    shows a shimmer skeleton until then, then fades the image in. A
 *    MutationObserver covers images added later (e.g. gallery filter swaps).
 * 2. Runs the `.fade-in-up` scroll reveal for sections on every page.
 *
 * The `js` class is added here — after hydration — so content is never
 * hidden for no-JS visitors and React never sees a pre-hydration DOM
 * mutation (which would log a mismatch warning). Elements already in the
 * viewport are revealed synchronously to avoid any flash of hidden content.
 */
export function SiteEffects() {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.add("js");

    // --- 1. Image load reveal (skeleton → fade-in) ---
    // Images already complete when we observe them only stop the shimmer
    // (`.img-done`) — no fade, avoiding a flash of hidden content. Images
    // that load after observation get `.img-fade` too, so the skeleton
    // visibly dissolves into the picture.
    const markLoaded = (img: HTMLImageElement) => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add("img-done");
      } else {
        img.addEventListener(
          "load",
          () => {
            img.classList.add("img-done");
            img.classList.add("img-fade");
          },
          { once: true }
        );
      }
    };
    const scanImages = () => document.querySelectorAll("img").forEach(markLoaded);
    scanImages();
    const imageObserver = new MutationObserver(scanImages);
    imageObserver.observe(document.body, { childList: true, subtree: true });

    // --- 2. Scroll fade-in-up ---
    const revealObservers: IntersectionObserver[] = [];
    const reveal = (el: Element) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) =>
            entry.target.classList.toggle("in-view", entry.isIntersecting)
          );
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      revealObservers.push(observer);
    };
    const inViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };
    document.querySelectorAll(".fade-in-up").forEach((el) => {
      if (inViewport(el)) el.classList.add("in-view");
      else reveal(el);
    });

    // --- 3. Background prefetch: warm the whole site in the backend ---
    // After the page is idle, fetch each route's JS/RSC payload one-by-one
    // (staggered) so navigation is instant even on slow networks. Low
    // priority — never competes with the initial paint or hero image.
    const routes = ["/experience", "/gallery", "/about", "/inquire"];
    // `timeout` guarantees the callback fires even if the browser is never
    // idle (e.g. slow network keeps it busy) — prefetch then proceeds.
    // `auto` kind prefetches static routes fully — which every route here is.
    const schedulePrefetch = () => {
      routes.forEach((route, index) => {
        window.setTimeout(() => router.prefetch(route), index * 250);
      });
    };
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as unknown as {
        requestIdleCallback: (cb: () => void, opts?: { timeout?: number }) => number;
      }).requestIdleCallback(schedulePrefetch, { timeout: 2500 });
    } else {
      globalThis.setTimeout(schedulePrefetch, 1500);
    }

    return () => {
      imageObserver.disconnect();
      revealObservers.forEach((observer) => observer.disconnect());
    };
  }, [router]);

  return null;
}
