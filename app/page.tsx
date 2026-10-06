import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WorkSection } from "@/components/sections/work";
import { AboutSection } from "@/components/sections/about";
import { ClientsSection } from "@/components/sections/clients";
import { ContactSection } from "@/components/sections/contact";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = createMetadata({
  title: "L'unicreative | Agence web, communication et publicité à Fès",
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  logo: `${siteConfig.url}/logo-symbol.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressCountry: siteConfig.address.country,
  },
  areaServed: { "@type": "Country", name: "Maroc" },
};

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-32 lg:space-y-40">
      <JsonLd data={localBusiness} />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
