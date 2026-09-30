import Image from "next/image";

import { Marquee } from "@/components/animations/marquee";
import { clients } from "@/data/clients";
import { FuseReveal } from "@/components/animations/fuse-reveal";
import { Reveal } from "@/components/animations/reveal";

export function ClientsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto mb-12 w-full max-w-3xl px-4 text-left sm:mb-16 sm:text-center md:mb-20">
        <FuseReveal
          as="h2"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          parts={[
            "Ils nous font ",
            {
              text: "confiance",
              className:
                "font-serif font-semibold italic tracking-normal text-primary",
            },
          ]}
        />

        <Reveal
          as="p"
          variant="blurIn"
          delay={0.3}
          className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Une sélection des entreprises, institutions et marques que nous
          accompagnons.
        </Reveal>
      </div>

      <div className="relative">
        <Reveal variant="fadeIn" duration={8}>
          <Marquee className="w-full p-0 [--duration:90s]" pauseOnHover>
            {clients.map((client) => (
              <div
                key={client.name}
                className="group/client flex h-16 w-40 shrink-0 cursor-pointer items-center justify-center lg:h-25 lg:w-48"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={275}
                  height={170}
                  className="max-h-full max-w-full object-contain px-4 grayscale transition-[filter,transform] duration-300 ease-out group-hover/client:scale-[1.04] group-hover/client:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </Reveal>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background via-background/60 to-transparent lg:w-28"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background via-background/60 to-transparent lg:w-28"
        />
      </div>
    </section>
  );
}
