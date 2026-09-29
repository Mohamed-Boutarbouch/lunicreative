import Image from "next/image";

import { Marquee } from "@/components/animations/marquee";
import { clients } from "@/data/clients";

export function MarqueeClientsSection() {
  return (
    <section className="relative mb-20 w-full overflow-hidden md:mb-28 lg:mb-36">
      {/* Section heading */}
      <div className="mx-auto mb-12 max-w-2xl px-4 text-center sm:mb-16 md:mb-20">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Ils nous{" "}
          <span className="font-serif font-semibold italic text-primary">
            font confiance
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Nous accompagnons des entreprises, institutions et marques dans leurs
          projets de communication, de création et de développement.
        </p>
      </div>

      {/* Client logos */}
      <div className="relative">
        <Marquee className="w-full p-0 [--duration:90s]" pauseOnHover>
          {clients.map((client) => (
            <div
              key={client.name}
              className="group/client flex h-16 w-40 shrink-0 cursor-pointer items-center justify-center lg:h-25 lg:w-48"
            >
              <Image
                src={client.image}
                alt={client.name}
                aria-label={client.name}
                width={275}
                height={170}
                className="max-h-full max-w-full object-contain px-4 grayscale transition-[filter,transform] duration-300 ease-out group-hover/client:scale-[1.04] group-hover/client:grayscale-0"
              />
            </div>
          ))}
        </Marquee>

        {/* Soft edge fades */}
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
