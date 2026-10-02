import { Reveal } from "@/components/animations/reveal";

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
      {rest.map((paragraph) => (
        <p
          key={paragraph}
          className="text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}
