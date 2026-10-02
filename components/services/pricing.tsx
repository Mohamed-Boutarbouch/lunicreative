import { IconCheck } from "@tabler/icons-react";

import { CtaButton } from "@/components/cta-button";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CountUp } from "@/components/animations/count-up";
import type { ServicePricingPlan } from "@/data/services";

type ServicePricingProps = {
  title: string;
  plans: ServicePricingPlan[];
};

export function ServicePricing({ title, plans }: ServicePricingProps) {
  return (
    <section aria-labelledby="service-pricing-title" className="space-y-10">
      <Reveal className="text-center" variant="fadeUp">
        <h2
          id="service-pricing-title"
          className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl"
        >
          {title}
        </h2>
      </Reveal>

      <RevealGroup
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        stagger={0.1}
      >
        {plans.map((plan) => (
          <RevealItem key={plan.name} className="h-full">
            <Card className="flex h-full flex-col">
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  {plan.name}
                </CardTitle>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">À partir de</p>

                  <p className="font-heading text-4xl font-semibold tracking-tight">
                    <CountUp value={plan.price} />
                    <span className="ml-1 text-base font-normal text-muted-foreground">
                      DH
                    </span>
                  </p>
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-y-10">
                <ul className="space-y-3 border-t pt-6 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <IconCheck
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0 text-primary"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <CtaButton href="/devis" className="mx-auto mt-auto">
                  Demander un devis
                </CtaButton>
              </CardContent>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
