"use client";

import { useEffect } from "react";
import { siteConfig } from "@/content/site-config";

/**
 * Global pointer-tracking enhancer. One passive listener updates the
 * --gx/--gy CSS variables on whichever `[data-glow]` element the pointer
 * is over; globals.css turns that into a soft sensor-style glow.
 *
 * Renders nothing. Skips touch devices and respects the motion toggle —
 * the site works identically without it.
 */
export function PointerFX() {
  useEffect(() => {
    if (!siteConfig.enableMotion) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-glow]");
      if (!(el instanceof HTMLElement)) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--gx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--gy", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
