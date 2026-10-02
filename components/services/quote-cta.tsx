import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/animations/reveal";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/spotlight-card";

export function QuoteCta() {
  return (
    <Reveal variant="fadeUp" delay={0.2}>
      <SpotlightCard className="group overflow-hidden border-border/60 bg-card shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
        <CardHeader className="relative z-10">
          <CardTitle className="font-heading text-2xl font-semibold tracking-tight">
            Un projet{" "}
            <span className="font-serif font-semibold italic tracking-wider text-primary">
              en tête ?
            </span>
          </CardTitle>

          <p className="text-sm text-muted-foreground">
            Décrivez-nous votre besoin, nous vous répondons avec un devis.
          </p>
        </CardHeader>

        <CardContent className="relative z-10 flex w-full justify-center">
          <CtaButton href="/devis" className="mx-auto">
            Demander un devis
          </CtaButton>
        </CardContent>
      </SpotlightCard>
    </Reveal>
  );
}
