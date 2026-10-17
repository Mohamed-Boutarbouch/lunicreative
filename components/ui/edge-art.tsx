import { useId } from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "cn";

type EdgeArtProps = {
  /** Which viewport edge the art sticks to */
  side: "left" | "right";
  /** The RAW photo (no effects baked in). Public path or static import */
  src: string | StaticImageData;
  alt?: string;
  /** Flip horizontally. Defaults to true on the left so the art faces inward */
  mirror?: boolean;
  /** Max rendered width in px (default 620) */
  maxSize?: number;
  /** Rendered width on small screens, in vw (default 70) */
  sizeVw?: number;
  /** % of the art's own width pushed off-screen (default 22) */
  offset?: number;
  /** Vertical position, any CSS length. Use `top` or `bottom` */
  top?: string | number;
  bottom?: string | number;
  /** Optional inner-edge fade (0–100). Off by default: the shape already has a clean edge */
  fade?: number | false;
  /** Turn the subtle motion off */
  animate?: boolean;
  /** Extra classes on the positioned wrapper (opacity, hiding on mobile, etc.) */
  className?: string;
  priority?: boolean;
};

/* ------------------------------------------------------------------ *
 * Everything below is drawn in the coordinate space of the original
 * Photoshop artboard (1082 x 1155), so shapes can be tweaked by eye.
 * ------------------------------------------------------------------ */
const W = 1082;
const H = 1155;

/** Silhouette the photo is cropped to: straight diagonal top-left, big soft arc on the inner side */
const BLOB =
  "M610 0 H1082 V880 C1040 940 960 975 870 985 C760 1000 650 1045 540 1040 " +
  "C340 1030 190 830 190 590 C190 420 330 250 500 110 Z";

/** Translucent red bands: they tint the photo where they overlap it and read as pale pink outside it */
const PILLS = [
  // cx, cy, length, thickness, drift duration (s), delay (s), opacity
  { cx: 380, cy: 640, len: 720, th: 140, dur: 11, delay: 0, o: 0.3 },
  { cx: 790, cy: 190, len: 800, th: 150, dur: 13, delay: -4, o: 0.34 },
  { cx: 930, cy: 610, len: 480, th: 170, dur: 12, delay: -7, o: 0.28 },
  { cx: 700, cy: 950, len: 580, th: 120, dur: 10, delay: -2, o: 0.26 },
] as const;

/** Thin diagonal lines */
const LINES = [
  { x1: 320, y1: 248, x2: 568, y2: 0, cls: "stroke-primary", w: 4 },
  { x1: 55, y1: 232, x2: 187, y2: 100, cls: "stroke-primary/30", w: 4 },
  { x1: 186, y1: 610, x2: 455, y2: 350, cls: "stroke-white", w: 3 },
  { x1: 965, y1: 370, x2: 1082, y2: 255, cls: "stroke-white", w: 3 },
  { x1: 805, y1: 890, x2: 1082, y2: 615, cls: "stroke-white", w: 3 },
  { x1: 290, y1: 1012, x2: 625, y2: 677, cls: "stroke-primary", w: 3 },
  { x1: 872, y1: 1115, x2: 1082, y2: 905, cls: "stroke-primary", w: 4 },
] as const;

/**
 * Decorative photo that bleeds off the viewport edge: the picture is cropped
 * to a soft blob and crossed by translucent red bands and thin lines.
 * Parent section must be `relative isolate` and must not use
 * `content-visibility: auto` / `contain: paint`.
 */
export function EdgeArt({
  side,
  src,
  alt = "",
  mirror = side === "left",
  maxSize = 620,
  sizeVw = 70,
  offset = 22,
  top,
  bottom,
  fade = false,
  animate = true,
  className,
  priority,
}: EdgeArtProps) {
  const isRight = side === "right";
  const clipId = `ea${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  const mask =
    fade === false
      ? undefined
      : `linear-gradient(to ${isRight ? "left" : "right"}, #000 ${fade}%, transparent 100%)`;

  const verticalStyle =
    top === undefined && bottom === undefined
      ? { top: "2.5rem" }
      : { top, bottom };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
    >
      <div
        className={cn(
          "absolute opacity-35 md:opacity-60 xl:opacity-100 dark:opacity-60 xl:dark:opacity-80",
          className,
        )}
        style={{
          ...verticalStyle,
          [side]: 0,
          width: `min(${sizeVw}vw, ${maxSize}px)`,
          transform: `translateX(${isRight ? offset : -offset}%)`,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        <div
          className={cn("relative w-full", mirror && "-scale-x-100")}
          style={{ aspectRatio: `${W} / ${H}` }}
        >
          {/* 1. Photo, cropped to the blob */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `url(#${clipId})` }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={`(min-width: 1024px) ${maxSize}px, ${sizeVw}vw`}
              className={cn(
                "select-none object-cover",
                animate && "edge-art-kenburns",
              )}
            />
          </div>

          {/* 2. Bands + lines on top (also holds the clipPath definition) */}
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="absolute inset-0 size-full overflow-visible"
            fill="none"
          >
            <defs>
              {/* Same path, normalised to 0–1 so it can crop the HTML <div> */}
              <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                <path d={BLOB} transform={`scale(${1 / W} ${1 / H})`} />
              </clipPath>
            </defs>

            {PILLS.map((p, i) => (
              <g
                key={i}
                className={animate ? "edge-art-drift" : undefined}
                style={{
                  animationDuration: `${p.dur}s`,
                  animationDelay: `${p.delay}s`,
                }}
              >
                <rect
                  x={-p.len / 2}
                  y={-p.th / 2}
                  width={p.len}
                  height={p.th}
                  rx={p.th / 2}
                  transform={`translate(${p.cx} ${p.cy}) rotate(-45)`}
                  className="fill-primary"
                  fillOpacity={p.o}
                />
              </g>
            ))}

            {LINES.map((l, i) => (
              <g
                key={i}
                className={animate ? "edge-art-line" : undefined}
                style={{ animationDelay: `${-i * 1.7}s` }}
              >
                <line
                  x1={l.x1}
                  y1={l.y1}
                  x2={l.x2}
                  y2={l.y2}
                  strokeWidth={l.w}
                  strokeLinecap="round"
                  className={l.cls}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
