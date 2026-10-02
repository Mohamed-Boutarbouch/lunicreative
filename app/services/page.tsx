import type { Metadata } from "next";

import {
  serviceGroups,
  serviceDetails,
  type ServiceGroup,
} from "@/data/services";
import { Reveal } from "@/components/animations/reveal";
import { ServiceRow } from "@/components/services/row";
import { QuoteCta } from "@/components/services/quote-cta";

export const metadata: Metadata = {
  title: "Nos services | L'unicreative",
  description:
    "Identité visuelle, impression, sites web, applications, 3D et événementiel : tous les services de L'unicreative à Fès.",
};

export default function ServicesPage() {
  const groups = Object.keys(serviceGroups) as ServiceGroup[];

  return (
    <main className="space-y-16 pb-8 pt-26 md:space-y-24">
      <header className="max-w-3xl">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Nos{" "}
          <span className="font-serif font-semibold italic tracking-normal text-primary">
            services
          </span>
        </h1>
        <Reveal
          as="p"
          variant="blurIn"
          delay={0.3}
          className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Identité visuelle, impression, web, 3D et événementiel. Une seule
          équipe pour une image cohérente sur tous vos supports.
        </Reveal>
      </header>

      <div className="space-y-14">
        {groups.map((group) => (
          <section
            key={group}
            aria-labelledby={`group-${group}`}
            className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12"
          >
            <div>
              <h2
                id={`group-${group}`}
                className="font-heading text-2xl font-semibold tracking-tight"
              >
                {serviceGroups[group].label}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {serviceGroups[group].description}
              </p>
            </div>
            <div className="border-t border-border">
              {serviceDetails
                .filter((service) => service.group === group)
                .map((service) => (
                  <ServiceRow key={service.slug} service={service} />
                ))}
            </div>
          </section>
        ))}
      </div>

      <div className="max-w-md">
        <QuoteCta />
      </div>
    </main>
  );
}
