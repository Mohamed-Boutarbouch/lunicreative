import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/animations/reveal";
import type { ServiceDetail } from "@/data/services";

export function ServiceFaq({
  items,
}: {
  items: NonNullable<ServiceDetail["faq"]>;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a.join(" "),
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading">
      <Reveal variant="fadeUp">
        <h2
          id="faq-heading"
          className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Questions fréquentes
        </h2>
      </Reveal>

      <Reveal variant="fadeUp" delay={0.1} className="mt-6">
        <Accordion className="border-y border-border">
          {items.map(({ q, a }, index) => (
            <AccordionItem
              key={q}
              value={`item-${index}`}
              className="border-b border-border last:border-b-0"
            >
              <AccordionTrigger className="group py-5 font-heading text-base font-semibold tracking-tight hover:no-underline sm:text-lg">
                <span>{q}</span>
              </AccordionTrigger>

              <AccordionContent className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                <div className="space-y-3">
                  {a.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}
