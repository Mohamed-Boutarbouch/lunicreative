import type { ServiceDetail } from "@/data/services";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/reveal";

export function ServiceReasons({
  title = "Pourquoi choisir L'unicreative ?",
  reasons,
}: {
  title?: string;
  reasons: NonNullable<ServiceDetail["reasons"]>;
}) {
  return (
    <section aria-labelledby="reasons-heading">
      <Reveal
        as="h2"
        variant="fadeUp"
        className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </Reveal>

      <RevealGroup
        as="ul"
        stagger={0.08}
        amount={0.15}
        className="mt-6 divide-y divide-border border-y border-border"
      >
        {reasons.map(({ title, text }) => (
          <RevealItem
            as="li"
            key={title}
            variant="fadeUp"
            className="grid gap-2 py-6 md:grid-cols-[1fr_2fr] md:gap-10"
          >
            <h3 className="font-heading text-lg font-semibold tracking-tight">
              {title}
            </h3>

            <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {text}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
