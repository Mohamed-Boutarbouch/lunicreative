import Image from "next/image";

import { CtaButton } from "@/components/cta-button";
import { FuseReveal } from "@/components/animations/fuse-reveal";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { IconBriefcase } from "@tabler/icons-react";
import { assetPath } from "@/lib/asset";

export function CareerHero() {
  return (
    <section className="relative z-10">
      <div className="container mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Content */}
            <div className="flex flex-col gap-6">
              <Reveal variant="fadeUp">
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
                className="max-w-2xl font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-5xl xl:text-6xl"
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
              />

              <Reveal
                as="p"
                variant="blurIn"
                className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                delay={1.2}
              >
                Emploi ou stage : envoyez-nous votre candidature. Nous étudions
                chaque profil.
              </Reveal>

              <Reveal variant="fadeUp" delay={1}>
                <CtaButton href="#candidature">Postuler maintenant</CtaButton>
              </Reveal>
            </div>

            {/* Image */}
            <Reveal
              variant="fadeUp"
              delay={0.4}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={assetPath("/career/career.webp")}
                  alt="L'équipe L'unicreative au travail"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
