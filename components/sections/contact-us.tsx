import { Card, CardContent } from "@/components/ui/card";
import { GoogleMapsIframe } from "@/components/google-maps-iframe";
import { ContactUsForm } from "@/components/contact-us-form";
import { ContactUsInfo } from "@/components/contact-us-info";

export function ContactUsSection() {
  return (
    <section>
      <div className="mx-auto mb-10 w-full max-w-3xl text-left sm:mb-14 sm:text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Un projet en{" "}
          <span className="font-serif font-normal italic tracking-normal text-primary">
            tête
          </span>
          ?
        </h2>

        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Une idée, un besoin ou un projet à construire ? Parlons-en et
          imaginons ensemble la meilleure façon de lui donner vie.
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
