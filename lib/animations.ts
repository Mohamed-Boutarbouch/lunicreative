import type { Variants } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const variants = {
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, y: 12, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  // Left-to-right mask wipe, same direction as the fuse heading
  wipe: {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { clipPath: "inset(0 0% 0 0)" },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.85, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
} satisfies Record<string, Variants>;

export type AnimationVariant = keyof typeof variants;
