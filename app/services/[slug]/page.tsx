import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getService, serviceDetails } from "@/data/services";
import { ServiceHero } from "@/components/services/hero";
import { ServiceIntro } from "@/components/services/intro";
import { ServiceItems } from "@/components/services/items";
import { ServiceReasons } from "@/components/services/reasons";
import { ServiceFaq } from "@/components/services/faq";
import { QuoteCta } from "@/components/services/quote-cta";
import { RelatedServices } from "@/components/services/related";
import { Reveal } from "@/components/animations/reveal";
import { HeroCarousel } from "@/components/hero-carousel";
import { ServicePricing } from "@/components/services/pricing";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service introuvable", robots: { index: false } };
  }

  return createMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  // Built inside the component: it depends on `service`, which only exists
  // after the params are resolved and the notFound() guard has passed.
  const url = `${siteConfig.url}/services/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.meta.description,
        url,
        // Same @id as the LocalBusiness JSON-LD on the home page
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: [
          {
            "@type": "City",
            name: "Fès",
          },
          {
            "@type": "Country",
            name: "Maroc",
          },
          {
            "@type": "Country",
            name: "France",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteConfig.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <main className="space-y-16 pb-8 md:space-y-24">
      <JsonLd data={jsonLd} />

      <section className="relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
          <ServiceHero {...service.hero} />

          <Reveal variant="fadeUp" delay={0.45} className="w-full">
            <HeroCarousel
              items={service.gallery}
              className="max-w-xl lg:max-w-none"
            />
          </Reveal>
        </div>
      </section>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div className="space-y-16 md:space-y-20">
          <ServiceIntro paragraphs={service.intro} />

          {service.items && (
            <ServiceItems title={service.itemsTitle} items={service.items} />
          )}

          {service.reasons && <ServiceReasons reasons={service.reasons} />}

          {service.pricing && (
            <ServicePricing
              title={service.pricing.title}
              plans={service.pricing.plans}
            />
          )}

          {service.faq && <ServiceFaq items={service.faq} />}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <QuoteCta quoteService={service.quoteService} />
        </aside>
      </div>

      <RelatedServices exclude={service.slug} />
    </main>
  );
}
