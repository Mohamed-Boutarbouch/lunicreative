"use client";

import { useEffect } from "react";

const PENDING =
  "[data-reveal]:not([data-in-view]), [data-reveal-group]:not([data-in-view]), [data-fuse]:not([data-in-view])";

export function RevealObserver() {
  useEffect(() => {
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

    const scan = () =>
      document.querySelectorAll(PENDING).forEach((el) => io.observe(el));

    scan();

    let raf = 0;
    const mo = new MutationObserver(() => {
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
