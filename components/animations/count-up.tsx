"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

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
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  const formatter = useMemo(() => new Intl.NumberFormat(locale), [locale]);
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) =>
    formatter.format(Math.round(latest)),
  );

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value, duration, delay, count]);

  return (
    <span ref={ref} className="relative inline-grid">
      {/* Final value for screen readers */}
      <span className="sr-only">{formatter.format(value)}</span>

      {/* Invisible copy reserves the final width, so the layout never jumps */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {formatter.format(value)}
      </span>

      <motion.span
        aria-hidden="true"
        className="col-start-1 row-start-1 text-center"
      >
        {display}
      </motion.span>
    </span>
  );
}
