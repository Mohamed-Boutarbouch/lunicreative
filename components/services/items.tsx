import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/reveal";

export function ServiceItems({
  title = "Nos domaines d'intervention",
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <section aria-labelledby="items-heading">
      <Reveal
        as="h2"
        variant="fadeUp"
        className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </Reveal>

      <RevealGroup
        as="ul"
        stagger={0.06}
        amount={0.15}
        className="mt-6 grid border-t border-border sm:grid-cols-2 sm:gap-x-10"
      >
        {items.map((item) => (
          <RevealItem
            as="li"
            key={item}
            variant="fadeUp"
            className="border-b border-border py-4 text-base text-foreground"
          >
            {item}
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
