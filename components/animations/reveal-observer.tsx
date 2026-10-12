"use client";

import { useEffect } from "react";

const PENDING =
  "[data-reveal]:not([data-in-view]), [data-reveal-group]:not([data-in-view]), [data-fuse]:not([data-in-view])";

export function RevealObserver() {
  useEffect(() => {
    let raf = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          entry.target.setAttribute("data-in-view", "true");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0 },
    );

    const scan = () => {
      if (!started) return;

      document.querySelectorAll(PENDING).forEach((el) => {
        io.observe(el);
      });
    };

    raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => {
        started = true;
        scan();
      });
    });

    const mo = new MutationObserver(() => {
      if (!started) return;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
