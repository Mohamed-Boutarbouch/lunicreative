import { Suspense } from "react";
import { Metadata } from "next";

import { QuoteHero } from "@/components/sections/quote-hero";
import { QuoteForm } from "@/components/quote-form";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Demander un devis",
  description:
    "Décrivez votre projet (site web, impression, identité visuelle, 3D, événementiel) et demandez un devis à L'unicreative, agence à Fès.",
  path: "/devis",
});

export default function QuotePage() {
  return (
    <main className="my-18">
      <QuoteHero />
      <Suspense
        fallback={<div className="mx-auto mt-12 h-128 max-w-4xl md:mt-16" />}
      >
        <QuoteForm />
      </Suspense>
    </main>
  );
}
