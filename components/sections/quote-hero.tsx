import { IconFileDescription } from "@tabler/icons-react";

import { FuseReveal } from "@/components/animations/fuse-reveal";
import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";

export function QuoteHero() {
  return (
    <section className="relative z-10">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal variant="fadeUp">
            <Badge
              variant="ghost"
              className="h-auto gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm"
            >
              <IconFileDescription aria-hidden="true" />
              Demande de devis
            </Badge>
          </Reveal>

          <FuseReveal
            as="h1"
            className="mt-6 font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            delay={0.15}
            parts={[
              "Parlons de votre ",
              {
                text: "projet",
                className:
                  "font-serif font-semibold tracking-wider text-primary",
              },
            ]}
          />

          <Reveal
            as="p"
            variant="blurIn"
            delay={1.2}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Afin de répondre au mieux à votre demande de devis, merci de remplir
            le formulaire ci-dessous en nous donnant quelques détails sur votre
            projet.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
