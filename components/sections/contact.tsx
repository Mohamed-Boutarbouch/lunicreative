import { Card, CardContent } from "@/components/ui/card";
import { GoogleMapsIframe } from "@/components/google-maps-iframe";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";
import { Reveal } from "@/components/animations/reveal";

export function ContactSection() {
  return (
    <section
      id="formulaire"
      aria-label="Formulaire de contact et coordonnées"
      className="scroll-mt-28"
    >
      <Reveal variant="fadeUp" delay={0.4}>
        <Card className="overflow-hidden p-0">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="border-b p-6 lg:border-b-0 lg:border-r lg:p-8">
                <ContactInfo />
              </div>

              <div className="p-6 lg:p-8">
                <ContactForm />
              </div>
            </div>

            <div className="border-t">
              <GoogleMapsIframe />
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}
