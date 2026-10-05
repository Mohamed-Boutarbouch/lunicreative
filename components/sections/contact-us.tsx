import { Card, CardContent } from "@/components/ui/card";
import { GoogleMapsIframe } from "@/components/google-maps-iframe";
import { ContactUsForm } from "@/components/contact-us-form";
import { ContactUsInfo } from "@/components/contact-us-info";
import { FuseReveal } from "@/components/animations/fuse-reveal";
import { Reveal } from "@/components/animations/reveal";

export function ContactUsSection() {
  return (
    <section
      id="contact"
      className="[content-visibility:auto] [contain-intrinsic-size:auto_900px] mb-20 md:mb-28 lg:mb-36"
    >
      <div className="mx-auto mb-10 w-full max-w-3xl text-left sm:mb-14 sm:text-center">
        <FuseReveal
          as="h2"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          delay={0.15}
          parts={[
            "Un projet en ",
            {
              text: "tête ?",
              className: "font-serif font-semibold tracking-wider text-primary",
            },
          ]}
        />

        <Reveal
          as="p"
          variant="blurIn"
          delay={1.2}
          className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Décrivez-nous votre projet par le formulaire, par téléphone ou
          directement dans nos bureaux à Fès. Notre équipe est à votre écoute.
        </Reveal>
      </div>
      <Reveal variant="fadeUp" delay={0.4}>
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
      </Reveal>
    </section>
  );
}
