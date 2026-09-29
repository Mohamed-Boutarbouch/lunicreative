import Link from "next/link";
import Image from "next/image";

import { Marquee } from "@/components/animations/marquee";

type Client = {
  image: string;
  name: string;
  href: string;
};

const clientList: Client[] = [
  {
    image: "/clients/01_giantlink.png",
    name: "GiantLink",
    href: "#",
  },
  {
    image: "/clients/02_palais-medina-riad.png",
    name: "Palais Medina Riad",
    href: "#",
  },
  {
    image: "/clients/03_la-relance.png",
    name: "La Relance",
    href: "#",
  },
  {
    image: "/clients/04_sarlat.png",
    name: "Sarlat",
    href: "#",
  },
  {
    image: "/clients/05_reves-dorient.png",
    name: "Rêves d'Orient",
    href: "#",
  },
  {
    image: "/clients/06_olive.png",
    name: "O'live",
    href: "#",
  },
  {
    image: "/clients/07_saraproc.png",
    name: "Saraproc",
    href: "#",
  },
  {
    image: "/clients/08_sicopa.png",
    name: "Sicopa",
    href: "#",
  },
  {
    image: "/clients/09_swissport.png",
    name: "Swissport",
    href: "#",
  },
  {
    image: "/clients/10_teka.png",
    name: "Teka",
    href: "#",
  },
  {
    image: "/clients/11_across.png",
    name: "Across",
    href: "#",
  },
  {
    image: "/clients/12_armonia.png",
    name: "Armonia",
    href: "#",
  },
  {
    image: "/clients/13_bonbino-confort.png",
    name: "Bonbino Confort",
    href: "#",
  },
  {
    image: "/clients/14_ebentra.png",
    name: "Ebentra",
    href: "#",
  },
  {
    image: "/clients/15_mda.png",
    name: "MDA",
    href: "#",
  },
  {
    image: "/clients/16_ader.png",
    name: "ADER",
    href: "#",
  },
  {
    image: "/clients/17_axa.png",
    name: "AXA",
    href: "#",
  },
  {
    image: "/clients/18_renault.png",
    name: "Renault",
    href: "#",
  },
  {
    image: "/clients/19_ford.png",
    name: "Ford",
    href: "#",
  },
  {
    image: "/clients/20_cjd.png",
    name: "CJD",
    href: "#",
  },
  {
    image: "/clients/21_indh.png",
    name: "INDH",
    href: "#",
  },
  {
    image: "/clients/22_anpma.png",
    name: "ANPMA",
    href: "#",
  },
];

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
          {clientList.map((client) => (
            <div
              key={client.name}
              className="group/client flex h-16 w-40 shrink-0 cursor-pointer items-center justify-center lg:h-25 lg:w-48"
            >
              <Link href={client.href} aria-label={client.name}>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={275}
                  height={170}
                  className="max-h-full max-w-full object-contain px-4 grayscale transition-[filter,transform] duration-300 ease-out group-hover/client:scale-[1.04] group-hover/client:grayscale-0"
                />
              </Link>
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
