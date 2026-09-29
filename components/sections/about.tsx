import { IconPlus } from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";
import { pillars, stats } from "@/data/about";

export function AboutSection() {
  return (
    <section
      id="a-propos"
      aria-labelledby="about-heading"
      className="py-14 sm:py-22"
    >
      <div className="flex flex-col items-center gap-10 sm:gap-14">
        <div className="w-full max-w-4xl text-left sm:text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Une agence qui donne{" "}
            <span className="font-serif font-semibold italic tracking-normal text-primary">
              forme aux idées
            </span>
          </h2>

          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Basée à Fès, L&apos;unicreative imagine, conçoit et produit des
            expériences de communication qui réunissent le print, le digital et
            l&apos;événementiel.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {pillars.map(({ label, icon: Icon }) => (
              <article key={label} className="flex" aria-label={label}>
                <Card className="w-fit shrink-0 flex-row items-center gap-3 rounded-full border-0 bg-muted py-2 text-muted-foreground shadow-none transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Icon aria-hidden="true" className="ml-5 size-6 shrink-0" />

                  <CardContent className="p-0 pr-5">
                    <span className="font-serif text-2xl font-normal italic sm:text-3xl">
                      {label}
                    </span>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>

        <dl className="flex w-fit flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-1.5 px-10 py-6 sm:py-0"
            >
              <dt className="text-sm text-muted-foreground sm:text-base">
                {label}
              </dt>

              <dd className="order-first flex items-center justify-center font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                {new Intl.NumberFormat("fr-FR").format(value)}
                <IconPlus
                  aria-hidden="true"
                  className="ml-1 size-7 text-primary sm:size-8 lg:size-9"
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
