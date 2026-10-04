import { Suspense } from "react";

import { QuoteHero } from "@/components/sections/quote-hero";
import { QuoteForm } from "@/components/quote-form";

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
