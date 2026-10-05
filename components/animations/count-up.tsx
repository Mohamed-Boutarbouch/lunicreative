"use client";

import { useEffect, useMemo, useRef } from "react";

type CountUpProps = {
  value: number;
  duration?: number;
  delay?: number;
  locale?: string;
};

export function CountUp({
  value,
  duration = 2,
  delay = 0,
  locale = "fr-FR",
}: CountUpProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const outRef = useRef<HTMLSpanElement>(null);
  const formatter = useMemo(() => new Intl.NumberFormat(locale), [locale]);

  useEffect(() => {
    const root = rootRef.current;
    const out = outRef.current;
    if (!root || !out) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        if (reduce) {
          out.textContent = formatter.format(value);
          return;
        }

        const start = performance.now() + delay * 1000;
        const tick = (now: number) => {
          const t = Math.min(Math.max((now - start) / (duration * 1000), 0), 1);
          const eased = 1 - (1 - t) ** 4; // ease-out quart
          out.textContent = formatter.format(Math.round(value * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    io.observe(root);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, delay, formatter]);

  return (
    <span ref={rootRef} className="relative inline-grid">
      <span className="sr-only">{formatter.format(value)}</span>

      {/* Invisible copy reserves the final width, so the layout never jumps */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {formatter.format(value)}
      </span>

      <span
        ref={outRef}
        aria-hidden="true"
        className="col-start-1 row-start-1 text-center"
      >
        0
      </span>
    </span>
  );
}
