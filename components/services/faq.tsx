import { IconPlus } from "@tabler/icons-react";

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
      acceptedAnswer: { "@type": "Answer", text: a.join(" ") },
    })),
  };

  return (
    <section aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        Questions fréquentes
      </h2>

      <div className="mt-6 divide-y divide-border border-y border-border">
        {items.map(({ q, a }) => (
          <details key={q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-heading text-base font-semibold tracking-tight marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden">
              {q}
              <IconPlus
                aria-hidden="true"
                className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <div className="max-w-3xl space-y-3 pb-5 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {a.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}
