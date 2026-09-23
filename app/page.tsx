import {
  IconConfetti,
  IconDeviceLaptop,
  IconMapPin,
  IconPrinter,
} from "@tabler/icons-react";

import { CtaButton } from "@/components/cta-button";

export default function Home() {
  return (
    <section className="container relative z-10 mx-auto">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 py-20 md:py-32">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
          <h1 className="text-5xl font-heading font-semibold tracking-tight md:text-6xl lg:text-8xl">
            Chaque projet, une{" "}
            <span className="text-primary font-serif font-semibold italic">
              création{" "}
            </span>
            sur mesure
          </h1>

          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Communication, publicité et événementiel. De l&apos;identité de
            marque à l&apos;impression, du web à la production
            d&apos;événements, L&apos;unicreative accompagne votre projet du
            concept à la réalisation.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <CtaButton href="/contact">Démarrer un projet</CtaButton>

          {/* Credibility strip — location + scope, no invented numbers */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2 text-muted-foreground">
              <IconMapPin className="size-5 shrink-0 text-primary" />
              <span className="text-sm">
                Basée à Fès, près de l&apos;Institut Français
              </span>
            </div>

            <div className="hidden h-8 w-px bg-border sm:block" />

            <div className="hidden flex-col gap-1.5 sm:flex">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary whitespace-nowrap">
                Une agence, tous vos supports
              </p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex items-center gap-1.5 text-sm">
                  <IconPrinter className="size-4" />
                  Print
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <IconDeviceLaptop className="size-4" />
                  Digital
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <IconConfetti className="size-4" />
                  Événementiel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
