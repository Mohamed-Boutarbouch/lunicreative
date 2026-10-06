import Link from "next/link";
import { IconArrowDown, IconMapPin } from "@tabler/icons-react";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaButton } from "@/components/cta-button";
import { FuseReveal } from "@/components/animations/fuse-reveal";
import { HeroCarousel } from "@/components/hero-carousel";
import { assetPath } from "@/lib/asset";

export function HeroSection() {
  return (
    <section className="relative z-10 mt-26">
      <div className="relative isolate">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-7xl items-center gap-12 py-4 md:py-8 lg:grid-cols-2 lg:gap-16">
            {/* Text column */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-start gap-4 text-left sm:items-center sm:gap-6 sm:text-center lg:items-start lg:text-left">
                <Reveal variant="fadeUp" eager>
                  <Badge
                    variant="ghost"
                    className="h-auto gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-normal text-primary sm:text-sm"
                  >
                    <IconMapPin aria-hidden="true" />
                    Agence de communication et de publicité · Fès, Maroc
                  </Badge>
                </Reveal>

                <FuseReveal
                  as="h1"
                  className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-5xl xl:text-6xl"
                  delay={0}
                  stagger={0.02}
                  parts={[
                    "Chaque projet, une ",
                    {
                      text: "création",
                      className:
                        "font-serif font-semibold tracking-wider text-primary",
                    },
                    " qui a du sens",
                  ]}
                  eager
                />

                <Reveal
                  as="p"
                  variant="blurIn"
                  delay={0.5}
                  className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                  eager
                >
                  Identité visuelle, impression, sites web, stands et événements
                  : un seul interlocuteur, du concept à la réalisation.
                </Reveal>
              </div>

              <div className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
                <RevealGroup
                  className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center lg:justify-start"
                  delay={0.7}
                  stagger={0.1}
                  eager
                >
                  <RevealItem variant="pop">
                    <CtaButton href="/#contact">Démarrer un projet</CtaButton>
                  </RevealItem>
                  <RevealItem variant="pop">
                    <a
                      href="#realisations"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "lg",
                      })}
                    >
                      Voir nos réalisations
                      <IconArrowDown
                        className="ml-2 size-4"
                        aria-hidden="true"
                      />
                    </a>
                  </RevealItem>
                </RevealGroup>
              </div>
            </div>

            {/* Carousel column */}
            <Reveal className="w-full" variant="fadeUp" delay={0.2} eager>
              <HeroCarousel
                items={[
                  {
                    src: assetPath("/slides/home-1.webp"),
                    alt: "L'unicreative — création et communication",
                  },
                  {
                    src: assetPath("/slides/home-2.webp"),
                    alt: "L'unicreative — événementiel",
                  },
                  {
                    src: assetPath("/slides/home-3.webp"),
                    alt: "L'unicreative — impression",
                  },
                  {
                    src: assetPath("/slides/home-4.webp"),
                    alt: "L'unicreative — identité visuelle",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
