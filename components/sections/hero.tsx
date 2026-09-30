import Link from "next/link";
import { IconArrowDown } from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import { CtaButton } from "@/components/cta-button";

export function HeroSection() {
  return (
    <section className="relative z-10 mt-26">
      <div className="relative isolate">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 py-18 md:py-28">
            <div className="flex flex-col items-start gap-4 text-left sm:items-center sm:text-center sm:gap-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Agence de communication et de publicité · Fès, Maroc
              </p>

              <h1 className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Chaque projet, une{" "}
                <span className="font-serif font-semibold italic tracking-normal text-primary">
                  création
                </span>{" "}
                qui a du sens
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Identité visuelle, impression, sites web, stands et événements :
                un seul interlocuteur, du concept à la réalisation.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center">
              <CtaButton href="/#contact">Démarrer un projet</CtaButton>
              <Link
                href="/#realisations"
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                Voir nos réalisations
                <IconArrowDown className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
