import { CtaButton } from "@/components/cta-button";

export function QuoteCta() {
  return (
    <div className="rounded-md border border-border bg-muted/40 p-6">
      <p className="font-heading text-xl font-semibold tracking-tight">
        Un projet{" "}
        <span className="font-serif italic text-primary">en tête</span> ?
      </p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Décrivez-nous votre besoin, nous vous répondons avec un devis.
      </p>
      <div className="mt-5">
        <CtaButton href="/demande-devis">Demander un devis</CtaButton>
      </div>
    </div>
  );
}
