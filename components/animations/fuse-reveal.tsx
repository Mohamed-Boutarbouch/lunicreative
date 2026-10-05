import { Fragment, type CSSProperties, type ElementType } from "react";

/** A plain string, or a string with its own classes (e.g. the serif accent). */
export type FusePart = string | { text: string; className?: string };

type FuseRevealProps = {
  parts: FusePart[];
  as?: ElementType;
  className?: string;
  /** Seconds before the fuse is lit once the heading is in view. */
  delay?: number;
  /** Seconds between two characters. */
  stagger?: number;
  /** Above the fold: start on first paint, without waiting for hydration. */
  eager?: boolean;
};

export function FuseReveal({
  parts,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.04,
  eager = false,
}: FuseRevealProps) {
  const normalized = parts.map((part) =>
    typeof part === "string" ? { text: part, className: undefined } : part,
  );
  const label = normalized.map((part) => part.text).join("");
  let order = 0;

  return (
    <Tag
      data-fuse=""
      data-in-view={eager ? "true" : undefined}
      aria-label={label}
      className={className}
      style={
        {
          "--fuse-delay": `${delay}s`,
          "--fuse-stagger": `${stagger}s`,
        } as CSSProperties
      }
    >
      {normalized.map((part, partIndex) => (
        <span key={partIndex} className={part.className}>
          {/* Split on regular spaces only, so "tête\u00A0?" stays glued together. */}
          {part.text.split(/( +)/).map((token, i) => {
            if (token === "") return null;
            if (token.startsWith(" ")) return <Fragment key={i}> </Fragment>;

            return (
              <span
                key={i}
                aria-hidden="true"
                className="inline-block whitespace-nowrap"
              >
                {Array.from(token).map((char, j) => (
                  <span
                    key={j}
                    className="fuse-char"
                    style={{ "--i": order++ } as CSSProperties}
                  >
                    {char}
                  </span>
                ))}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
