import type { Metadata } from "next";

import {
  serviceGroups,
  serviceDetails,
  type ServiceGroup,
} from "@/data/services";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/reveal";
import { ServiceRow } from "@/components/services/row";
import { QuoteCta } from "@/components/services/quote-cta";
import { createMetadata } from "@/lib/seo";
import { ServicesHero } from "@/components/sections/services-hero";

export const metadata: Metadata = createMetadata({
  title: "Nos services",
  description:
    "Identité visuelle, impression, sites web, applications, 3D et événementiel : tous les services de L'unicreative à Fès.",
  path: "/services",
});

export default function ServicesPage() {
  const groups = Object.keys(serviceGroups) as ServiceGroup[];

  return (
    <main className="space-y-16 pb-8 md:space-y-24">
      <ServicesHero />

      <div className="space-y-14">
        {groups.map((group) => (
          <Reveal
            key={group}
            as="section"
            variant="fadeUp"
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

            <RevealGroup className="border-t border-border" stagger={0.12}>
              {serviceDetails
                .filter((service) => service.group === group)
                .map((service) => (
                  <RevealItem key={service.slug} variant="fadeUp">
                    <ServiceRow service={service} />
                  </RevealItem>
                ))}
            </RevealGroup>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto w-full max-w-md">
        <QuoteCta />
      </div>
    </main>
  );
}
