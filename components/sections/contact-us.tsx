import { Card, CardContent } from "@/components/ui/card";
import { GoogleMapsIframe } from "@/components/google-maps-iframe";
import { ContactUsForm } from "@/components/contact-us-form";
import { ContactUsInfo } from "@/components/contact-us-info";

export function ContactUsSection() {
  return (
    <section>
      <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 sm:mb-14">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-6xl md:text-center">
          Connectons-nous
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Vous avez un projet de communication, de création graphique,
          d&apos;événementiel ou de développement web ? Notre équipe est à votre
          écoute pour en discuter.
        </p>
      </div>

      <Card className="overflow-hidden p-0">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b p-6 lg:border-b-0 lg:border-r lg:p-8">
              <ContactUsInfo />
            </div>

            <div className="p-6 lg:p-8">
              <ContactUsForm />
            </div>
          </div>

          <div className="border-t">
            <GoogleMapsIframe />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
