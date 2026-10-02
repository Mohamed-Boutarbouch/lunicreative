import { serviceDetails } from "@/data/services";
import { ServiceRow } from "@/components/services/row";

export function RelatedServices({ exclude }: { exclude: string }) {
  const others = serviceDetails.filter((service) => service.slug !== exclude);

  return (
    <section aria-labelledby="related-heading" className="max-w-4xl">
      <h2
        id="related-heading"
        className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        Nos autres services
      </h2>
      <div className="mt-4 border-t border-border">
        {others.map((service) => (
          <ServiceRow key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
