import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WorkSection } from "@/components/sections/work";
import { AboutSection } from "@/components/sections/about";
import { ClientsSection } from "@/components/sections/clients";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-32 lg:space-y-40">
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
