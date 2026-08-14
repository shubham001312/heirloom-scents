"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Site-wide client effects (renders nothing):
 *
 * 1. Marks every <img> as `.img-done` once its pixels are available — CSS
 *    shows a shimmer skeleton until then, then fades the image in.
 * 2. Runs the `.fade-in-up` scroll reveal for sections on every page.
 *
 * The layout persists across client-side navigations (only {children} is
 * swapped), so a single mount-time scan is not enough: a MutationObserver
 * re-scans both images and `.fade-in-up` sections whenever the DOM changes
 * (navigations, gallery filter swaps, dynamic content). Elements already in
 * the viewport are revealed synchronously to avoid any flash of hidden
 * content — this is what keeps a freshly navigated page fully visible.
 *
 * The `js` class is added here — after hydration — so content is never
 * hidden for no-JS visitors and React never sees a pre-hydration DOM
 * mutation (which would log a mismatch warning).
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

    // --- 2. Scroll fade-in-up ---
    // One observer, rebuilt on each scan: elements already in the viewport
    // reveal synchronously (no flash), the rest reveal as they scroll in.
    let fadeObserver: IntersectionObserver | null = null;
    const inViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };
    const scanFadeIns = () => {
      if (fadeObserver) fadeObserver.disconnect();
      fadeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              fadeObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      document.querySelectorAll(".fade-in-up").forEach((el) => {
        if (el.classList.contains("in-view")) return;
        if (inViewport(el)) el.classList.add("in-view");
        else fadeObserver!.observe(el);
      });
    };
    let fadeScanQueued = false;
    const scheduleFadeScan = () => {
      if (fadeScanQueued) return;
      fadeScanQueued = true;
      requestAnimationFrame(() => {
        fadeScanQueued = false;
        scanFadeIns();
      });
    };
    scanFadeIns();

    // --- 3. DOM observer: re-scan images + reveals on any DOM change ---
    // Covers client-side navigations (new sections/images arrive with the
    // swapped children), gallery filter swaps, and dynamic content.
    const domObserver = new MutationObserver(() => {
      scanImages();
      scheduleFadeScan();
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    // --- 4. Background prefetch: warm the whole site in the backend ---
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
      domObserver.disconnect();
      fadeObserver?.disconnect();
    };
  }, [router]);

  return null;
}
