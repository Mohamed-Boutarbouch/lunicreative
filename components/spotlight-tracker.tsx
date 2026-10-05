"use client";

import { useEffect } from "react";

export function SpotlightTracker() {
  useEffect(() => {
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const target = event.target;

      if (!(target instanceof Element)) return;

      const card = target.closest<HTMLElement>("[data-spotlight]");

      if (!card) return;

      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();

        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
