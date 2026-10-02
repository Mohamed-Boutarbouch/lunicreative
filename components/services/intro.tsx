import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/reveal";

export function ServiceIntro({ paragraphs }: { paragraphs: string[] }) {
  const [lead, ...rest] = paragraphs;
  if (!lead) return null;

  return (
    <section className="max-w-3xl space-y-5">
      <Reveal
        as="p"
        variant="fadeUp"
        className="font-heading text-xl leading-snug tracking-tight sm:text-2xl"
      >
        {lead}
      </Reveal>

      <RevealGroup as="div" stagger={0.08} amount={0.2}>
        {rest.map((paragraph) => (
          <RevealItem
            key={paragraph}
            as="p"
            variant="fadeUp"
            className="text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {paragraph}
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
