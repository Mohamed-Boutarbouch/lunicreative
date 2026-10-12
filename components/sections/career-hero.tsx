import Image from "next/image";
import { IconArrowUpRight, IconBriefcase } from "@tabler/icons-react";

import { FuseReveal } from "@/components/animations/fuse-reveal";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { assetPath } from "@/lib/asset";

const IMAGE_SRC = assetPath("/career/career.webp");

const SLICE_TOPS = [0.14, 0, 0.22, 0.06, 0.18];
const N = SLICE_TOPS.length;

export function CareerHero() {
  return (
    <section className="relative z-10">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:gap-14">
          {/* Headline row */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="flex flex-col items-start gap-6 lg:col-span-8">
              <Reveal variant="fadeUp" eager>
                <Badge
                  variant="ghost"
                  className="h-auto gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-normal text-primary sm:text-sm"
                >
                  <IconBriefcase aria-hidden="true" />
                  Carrière
                </Badge>
              </Reveal>

              <FuseReveal
                as="h1"
                className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
                delay={0.15}
                parts={[
                  "Rejoignez une équipe qui donne ",
                  {
                    text: "forme",
                    className:
                      "font-serif font-semibold tracking-wider text-primary",
                  },
                  " aux idées",
                ]}
                eager
              />
            </div>

            <Reveal
              as="p"
              variant="blurIn"
              delay={0.6}
              className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-4 lg:justify-self-end"
              eager
            >
              Emploi ou stage : envoyez-nous votre candidature. Nous étudions
              chaque profil.
            </Reveal>
          </div>

          {/* Sliced image band */}
          <div className="relative pb-8">
            <div
              role="img"
              aria-label="L'équipe L'unicreative au travail"
              className="relative aspect-4/5 w-full sm:aspect-16/10 lg:aspect-21/9"
            >
              {SLICE_TOPS.map((t, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="absolute bottom-0 animate-[strip-reveal_900ms_cubic-bezier(0.2,0.7,0.2,1)_both] overflow-hidden border-l-[3px] border-background transition-transform duration-500 first:border-l-0 motion-reduce:animate-none motion-safe:hover:-translate-y-2"
                  style={{
                    left: `${(i * 100) / N}%`,
                    width: `${100 / N}%`,
                    top: `${t * 100}%`,
                    animationDelay: `${200 + i * 90}ms`,
                  }}
                >
                  {/* Full-size photo, offset so every slice shows its own part */}
                  <div
                    className="absolute"
                    style={{
                      width: `${N * 100}%`,
                      left: `${-i * 100}%`,
                      height: `${100 / (1 - t)}%`,
                      top: `${-(t / (1 - t)) * 100}%`,
                    }}
                  >
                    <Image
                      src={IMAGE_SRC}
                      alt=""
                      fill
                      priority
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Solid red CTA block overlapping the corner */}
            <Reveal
              variant="fadeUp"
              delay={1}
              className="absolute bottom-0 left-0 z-10"
            >
              <a
                href="#candidature"
                className="group flex items-center gap-6 bg-primary px-6 py-5 text-primary-foreground transition-colors hover:bg-primary/90 sm:px-8 sm:py-6"
              >
                <span className="font-heading text-lg font-semibold sm:text-xl">
                  Postuler maintenant
                </span>
                <IconArrowUpRight
                  aria-hidden="true"
                  className="size-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>

            {/* Meta labels */}
            <ul className="absolute right-0 bottom-0 flex gap-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
              <li>Emploi</li>
              <li>Stage</li>
              <li>Fès, Maroc</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
