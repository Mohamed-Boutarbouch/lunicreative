import { serviceDetails } from "@/data/services";
import { ServiceRow } from "@/components/services/row";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/reveal";

export function RelatedServices({ exclude }: { exclude: string }) {
  const others = serviceDetails.filter((service) => service.slug !== exclude);

  return (
    <section aria-labelledby="related-heading" className="max-w-4xl">
      <Reveal
        as="h2"
        variant="fadeUp"
        className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        Nos autres services
      </Reveal>

      <RevealGroup
        as="div"
        stagger={0.08}
        amount={0.1}
        className="mt-4 border-t border-border"
      >
        {others.map((service) => (
          <RevealItem key={service.slug} variant="fadeUp">
            <ServiceRow service={service} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
