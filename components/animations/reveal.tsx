"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { EASE, variants, type AnimationVariant } from "@/lib/animations";

type Tag = "div" | "span" | "p" | "li" | "ul" | "dl" | "section";

type BaseProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
};

/** One element, animates on its own when scrolled into view. */
export function Reveal({
  children,
  as = "div",
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.3,
}: BaseProps & {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that staggers its RevealItem children. */
export function RevealGroup({
  children,
  as = "div",
  className,
  delay = 0,
  stagger = 0.1,
  once = true,
  amount = 0.15,
}: BaseProps & {
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren: delay, staggerChildren: stagger },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}

/** Child of RevealGroup. Timing comes from the group. */
export function RevealItem({
  children,
  as = "div",
  className,
  variant = "fadeUp",
  duration = 0.6,
}: BaseProps & { variant?: AnimationVariant; duration?: number }) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants[variant]}
      transition={{ duration, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
