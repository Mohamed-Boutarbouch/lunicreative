import { IconPlus } from "@tabler/icons-react";

import { CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/spotlight-card";
import { stats, values } from "@/data/about";
import { FuseReveal } from "@/components/animations/fuse-reveal";

export function AboutSection() {
  return (
    <section
      id="a-propos"
      aria-labelledby="about-heading"
      className="py-14 sm:py-22"
    >
      <div className="flex flex-col items-center gap-10 sm:gap-14">
        <div className="w-full max-w-4xl text-left sm:text-center">
          <FuseReveal
            as="h2"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            parts={[
              "Une agence qui donne ",
              {
                text: "forme aux idées",
                className:
                  "font-serif font-semibold italic tracking-normal text-primary",
              },
            ]}
          />

          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            L&apos;unicreative accompagne PME, institutions et marques dans
            toute leur communication : identité visuelle, impression, web, 3D et
            événementiel. Une seule équipe pour une image cohérente sur tous vos
            supports.
          </p>
        </div>

        <dl className="flex w-fit flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
          {stats.map(({ value, label, plus }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-1.5 px-10 py-6 sm:py-0"
            >
              <dt className="text-sm text-muted-foreground sm:text-base">
                {label}
              </dt>

              <dd className="order-first flex items-center justify-center font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                {new Intl.NumberFormat("fr-FR").format(value)}
                {plus && (
                  <IconPlus
                    aria-hidden="true"
                    className="ml-1 size-7 text-primary sm:size-8 lg:size-9"
                  />
                )}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="grid w-full max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, icon: Icon }) => (
            <li key={title} className="group">
              <SpotlightCard className="h-full overflow-hidden border border-border/60 bg-muted/40 p-0 shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="relative z-10 flex h-full flex-col gap-4 p-5 sm:p-6">
                  <span
                    aria-hidden="true"
                    className="flex size-11 items-center justify-center rounded-full border border-border/60 bg-background text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon className="size-5" stroke={1.8} />
                  </span>

                  <div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </SpotlightCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
