import { MarqueeClients } from "@/components/marquee-clients";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MarqueeClients />
    </>
  );
}
