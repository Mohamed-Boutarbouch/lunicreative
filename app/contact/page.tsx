import type { Metadata } from "next";

import { ContactHero } from "@/components/sections/contact-hero";
import { ContactSection } from "@/components/sections/contact";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Parlez-nous de votre projet : formulaire, téléphone ou visite dans nos bureaux à Fès. L'équipe L'unicreative est à votre écoute.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="my-18">
      <div className="container mx-auto">
        <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
          <ContactHero />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
