import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

import type { AnimationVariant } from "@/lib/animations";

type Tag = "div" | "span" | "h2" | "p" | "li" | "ul" | "dl" | "section";

type BaseProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  /** Above the fold: animate on first paint instead of waiting for the observer. */
  eager?: boolean;
};

/** One element, animates on its own when scrolled into view. */
export function Reveal({
  children,
  as = "div",
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  eager = false,
}: BaseProps & {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
}) {
  const Component: ElementType = as;

  return (
    <Component
      data-reveal=""
      data-variant={variant}
      data-in-view={eager ? "true" : undefined}
      className={className}
      style={{ "--d": `${delay}s`, "--dur": `${duration}s` } as CSSProperties}
    >
      {children}
    </Component>
  );
}

/** Parent that staggers its RevealItem children. */
export function RevealGroup({
  children,
  as = "div",
  className,
  delay = 0,
  stagger = 0.1,
  eager = false,
}: BaseProps & { delay?: number; stagger?: number }) {
  const Component: ElementType = as;
  let index = 0;

  return (
    <Component
      data-reveal-group=""
      data-in-view={eager ? "true" : undefined}
      className={className}
      style={{ "--gd": `${delay}s`, "--gs": `${stagger}s` } as CSSProperties}
    >
      {Children.map(children, (child) =>
        isValidElement<{ index?: number }>(child) && child.type === RevealItem
          ? cloneElement(child, { index: index++ })
          : child,
      )}
    </Component>
  );
}

/** Child of RevealGroup. Timing comes from the group. */
export function RevealItem({
  children,
  as = "div",
  className,
  variant = "fadeUp",
  duration = 0.6,
  index = 0,
}: Omit<BaseProps, "eager"> & {
  variant?: AnimationVariant;
  duration?: number;
  /** Injected by RevealGroup. */
  index?: number;
}) {
  const Component: ElementType = as;

  return (
    <Component
      data-reveal-item=""
      data-variant={variant}
      className={className}
      style={{ "--i": index, "--dur": `${duration}s` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
