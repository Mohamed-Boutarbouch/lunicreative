import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getService, serviceDetails } from "@/data/services";
import { ServiceHero } from "@/components/services/hero";
import { ServiceGallery } from "@/components/services/gallery";
import { ServiceIntro } from "@/components/services/intro";
import { ServiceItems } from "@/components/services/items";
import { ServiceReasons } from "@/components/services/reasons";
import { ServiceFaq } from "@/components/services/faq";
import { QuoteCta } from "@/components/services/quote-cta";
import { RelatedServices } from "@/components/services/related";

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  return getService(slug)?.meta ?? {};
}

export default async function ServicePage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="space-y-16 pb-8 md:space-y-24">
      <ServiceHero {...service.hero} />
      <ServiceGallery images={service.gallery} />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div className="space-y-16 md:space-y-20">
          <ServiceIntro paragraphs={service.intro} />
          {service.items && (
            <ServiceItems title={service.itemsTitle} items={service.items} />
          )}
          {service.reasons && <ServiceReasons reasons={service.reasons} />}
          {service.faq && <ServiceFaq items={service.faq} />}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <QuoteCta />
        </aside>
      </div>

      <RelatedServices exclude={service.slug} />
    </main>
  );
}
