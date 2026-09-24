import { MarqueeClients } from "@/components/marquee-clients";
import { AboutSection } from "@/components/sections/about";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MarqueeClients />
    </>
  );
}
