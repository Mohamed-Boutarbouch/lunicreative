import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { WorkSection } from "@/components/sections/work";
import { ContactUsSection } from "@/components/sections/contact-us";
import { ClientsSection } from "@/components/sections/clients";

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-32 lg:space-y-40">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactUsSection />
      <ClientsSection />
    </main>
  );
}
