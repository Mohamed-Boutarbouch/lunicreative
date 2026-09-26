import { MarqueeClients } from "@/components/marquee-clients";
import { AboutSection } from "@/components/sections/about";
import { ContactUsSection } from "@/components/sections/contact-us";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WorkSection } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactUsSection />
      <MarqueeClients />
    </>
  );
}
