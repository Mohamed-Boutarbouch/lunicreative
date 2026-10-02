import Link from "next/link";
import { IconArrowLeft, IconMapPin } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { FuseReveal } from "@/components/animations/fuse-reveal";
import type { ServiceDetail } from "@/data/services";

const accentClass =
  "font-serif font-semibold italic tracking-wider text-primary";

export function ServiceHero({
  eyebrow = "Fès, Maroc",
  title,
  accent,
  subtitle,
}: ServiceDetail["hero"]) {
  const i = title.indexOf(accent);
  const parts =
    i === -1
      ? [title]
      : [
          title.slice(0, i),
          { text: accent, className: accentClass },
          title.slice(i + accent.length),
        ].filter((part) => typeof part !== "string" || part.length > 0);

  return (
    <section className="relative z-10 pt-10">
      <div className="max-w-4xl">
        <Reveal variant="fadeUp" delay={1}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <IconArrowLeft className="size-4" aria-hidden="true" />
            Tous les services
          </Link>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.1} className="mt-8">
          <Badge
            variant="ghost"
            className="h-auto gap-2 px-0 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm"
          >
            <IconMapPin aria-hidden="true" />
            {eyebrow}
          </Badge>
        </Reveal>

        <FuseReveal
          as="h1"
          delay={0.2}
          className="mt-3 font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-5xl"
          parts={parts}
        />

        <Reveal
          as="p"
          variant="blurIn"
          delay={0.9}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {subtitle}
        </Reveal>
      </div>
    </section>
  );
}
