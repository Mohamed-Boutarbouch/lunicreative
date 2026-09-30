"use client";

import { Fragment, useRef, type ElementType } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "cn";

/** A plain string, or a string with its own classes (e.g. the serif accent). */
export type FusePart = string | { text: string; className?: string };

type FuseRevealProps = {
  parts: FusePart[];
  as?: ElementType;
  className?: string;
  /** Seconds before the fuse is lit once the heading is in view. */
  delay?: number;
  /** Seconds between two characters. Lower = faster fuse. */
  stagger?: number;
  once?: boolean;
};

const GLOW_ON = "0 0 14px rgba(251,146,60,1), 0 0 28px rgba(239,68,68,0.8)";
const GLOW_OFF = "0 0 0px rgba(251,146,60,0), 0 0 0px rgba(239,68,68,0)";

function Char({
  char,
  order,
  inView,
  delay,
  stagger,
}: {
  char: string;
  order: number;
  inView: boolean;
  delay: number;
  stagger: number;
}) {
  const start = delay + order * stagger;

  return (
    <motion.span
      aria-hidden="true"
      className="relative inline-block"
      initial={{ opacity: 0, x: -6, textShadow: GLOW_ON }}
      animate={inView ? { opacity: 1, x: 0, textShadow: GLOW_OFF } : undefined}
      transition={{
        opacity: { duration: 0.12, delay: start },
        x: { duration: 0.25, ease: "easeOut", delay: start },
        textShadow: { duration: 0.8, ease: "easeOut", delay: start },
      }}
    >
      {char}

      {/* The spark: flashes on the character being "lit" */}
      <motion.span
        className="pointer-events-none absolute top-1/2 -right-0.5 -mt-0.75 size-1.5 rounded-full bg-orange-300 shadow-[0_0_8px_3px_rgba(251,146,60,0.9)]"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          inView ? { opacity: [0, 1, 0], scale: [0, 1.5, 0] } : undefined
        }
        transition={{ delay: start, duration: 0.4, ease: "easeOut" }}
      />
    </motion.span>
  );
}

export function FuseReveal({
  parts,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.04,
  once = true,
}: FuseRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const Component = Tag as ElementType;

  const normalized = parts.map((part) =>
    typeof part === "string" ? { text: part, className: undefined } : part,
  );
  const label = normalized.map((part) => part.text).join("");

  if (reduceMotion) {
    return (
      <Component className={className}>
        {normalized.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}
          </span>
        ))}
      </Component>
    );
  }

  let order = 0;

  return (
    <Component ref={ref} aria-label={label} className={cn(className)}>
      {normalized.map((part, partIndex) => (
        <span key={partIndex} className={part.className}>
          {/* Split on regular spaces only, so "tête\u00A0?" stays glued together. */}
          {part.text.split(/( +)/).map((token, i) => {
            if (token === "") return null;
            if (token.startsWith(" ")) return <Fragment key={i}> </Fragment>;

            // Each word is inline-block so lines never wrap in the middle of a word.
            return (
              <span key={i} className="inline-block whitespace-nowrap">
                {Array.from(token).map((char, j) => (
                  <Char
                    key={j}
                    char={char}
                    order={order++}
                    inView={inView}
                    delay={delay}
                    stagger={stagger}
                  />
                ))}
              </span>
            );
          })}
        </span>
      ))}
    </Component>
  );
}
