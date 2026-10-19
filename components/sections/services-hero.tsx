import Image from "next/image";
import { IconStack2 } from "@tabler/icons-react";

import { FuseReveal } from "@/components/animations/fuse-reveal";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { serviceGroups, type ServiceGroup } from "@/data/services";

// One image per slice, in the same order as the keys of `serviceGroups`.
// If there are more groups than images, they cycle.
const IMAGES = [
  {
    src: "/services/service-hero-01.webp",
    alt: "Réalisation L'unicreative, 1",
  },
  {
    src: "/services/service-hero-02.webp",
    alt: "Réalisation L'unicreative, 2",
  },
  {
    src: "/services/service-hero-03.webp",
    alt: "Réalisation L'unicreative, 3",
  },
];

// Top offset of each slice (fraction of band height), cycled if more groups.
const TOPS = [0.14, 0, 0.22, 0.06, 0.18];

export function ServicesHero() {
  const groups = Object.keys(serviceGroups) as ServiceGroup[];
  const n = groups.length;

  return (
    <section className="relative z-10">
      <div className="flex flex-col gap-10 lg:gap-14">
        {/* Headline row */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col items-start gap-6 lg:col-span-8">
            <Reveal variant="fadeUp" eager>
              <Badge
                variant="ghost"
                className="h-auto gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-normal text-primary sm:text-sm"
              >
                <IconStack2 aria-hidden="true" />
                Services
              </Badge>
            </Reveal>

            <FuseReveal
              as="h1"
              delay={0.15}
              className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
              parts={[
                "Nos ",
                {
                  // Instrument Serif only ships weight 400: no font-semibold.
                  text: "services",
                  className: "font-serif tracking-wider text-primary",
                },
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
            Identité visuelle, impression, web, 3D et événementiel. Une seule
            équipe pour une image cohérente sur tous vos supports.
          </Reveal>
        </div>

        {/* Sliced band: one slice (and one photo) per service group */}
        <div className="relative pb-8">
          <div className="relative aspect-4/5 w-full sm:aspect-16/10 lg:aspect-21/9">
            {groups.map((group, i) => {
              const t = TOPS[i % TOPS.length];
              const image = IMAGES[i % IMAGES.length];

              return (
                <a
                  key={group}
                  href={`#group-${group}`}
                  aria-label={serviceGroups[group].label}
                  className="group absolute bottom-0 animate-[strip-reveal_900ms_cubic-bezier(0.2,0.7,0.2,1)_both] overflow-hidden border-l-[3px] border-background bg-neutral-950 text-white transition-transform duration-500 first:border-l-0 motion-reduce:animate-none motion-safe:hover:-translate-y-2"
                  style={{
                    left: `${(i * 100) / n}%`,
                    width: `${100 / n}%`,
                    top: `${t * 100}%`,
                    animationDelay: `${200 + i * 90}ms`,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority
                    sizes={`(max-width: 1280px) ${Math.ceil(100 / n)}vw, ${Math.ceil(1280 / n)}px`}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Flat scrim for label legibility */}
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/25" />

                  <div className="relative flex h-full flex-col justify-between p-3 sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80 sm:text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-sm leading-tight font-semibold wrap-break-word rotate-180 [writing-mode:vertical-rl] sm:text-lg lg:rotate-0 lg:text-xl lg:[writing-mode:horizontal-tb]">
                      {serviceGroups[group].label}
                    </span>
                  </div>

                  {/* Red accent bar, appears on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                  />
                </a>
              );
            })}
          </div>

          {/* Meta label */}
          <p className="absolute right-0 bottom-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
            Fès, Maroc
          </p>
        </div>
      </div>
    </section>
  );
}
