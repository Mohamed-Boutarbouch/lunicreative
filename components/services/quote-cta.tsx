import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/animations/reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function QuoteCta() {
  return (
    <Reveal variant="fadeUp" delay={0.2}>
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl font-semibold tracking-tight">
            Un projet{" "}
            <span className="font-serif font-semibold italic tracking-wider text-primary">
              en tête ?
            </span>
          </CardTitle>

          <CardDescription>
            Décrivez-nous votre besoin, nous vous répondons avec un devis.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex w-full justify-center">
          <CtaButton href="/demande-devis" className="mx-auto">
            Demander un devis
          </CtaButton>
        </CardContent>
      </Card>
    </Reveal>
  );
}
