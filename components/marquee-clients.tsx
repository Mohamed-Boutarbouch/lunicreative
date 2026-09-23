import Image from "next/image";

import { Marquee } from "@/components/animations/marquee";
import { Separator } from "@/components/ui/separator";

type Client = {
  image: string;
  name: string;
};

const clientList: Client[] = [
  {
    image: "/clients/01_giantlink.png",
    name: "GiantLink",
  },
  {
    image: "/clients/02_palais-medina-riad.png",
    name: "Palais Medina Riad",
  },
  {
    image: "/clients/03_la-relance.png",
    name: "La Relance",
  },
  {
    image: "/clients/04_sarlat.png",
    name: "Sarlat",
  },
  {
    image: "/clients/05_reves-dorient.png",
    name: "Rêves d'Orient",
  },
  {
    image: "/clients/06_olive.png",
    name: "O'live",
  },
  {
    image: "/clients/07_saraproc.png",
    name: "Saraproc",
  },
  {
    image: "/clients/08_sicopa.png",
    name: "Sicopa",
  },
  {
    image: "/clients/09_swissport.png",
    name: "Swissport",
  },
  {
    image: "/clients/10_teka.png",
    name: "Teka",
  },
  {
    image: "/clients/11_across.png",
    name: "Across",
  },
  {
    image: "/clients/12_armonia.png",
    name: "Armonia",
  },
  {
    image: "/clients/13_bonbino-confort.png",
    name: "Bonbino Confort",
  },
  {
    image: "/clients/14_ebentra.png",
    name: "Ebentra",
  },
  {
    image: "/clients/15_mda.png",
    name: "MDA",
  },
  {
    image: "/clients/16_ader.png",
    name: "ADER",
  },
  {
    image: "/clients/17_axa.png",
    name: "AXA",
  },
  {
    image: "/clients/18_renault.png",
    name: "Renault",
  },
  {
    image: "/clients/19_ford.png",
    name: "Ford",
  },
  {
    image: "/clients/20_cjd.png",
    name: "CJD",
  },
  {
    image: "/clients/21_indh.png",
    name: "INDH",
  },
  {
    image: "/clients/22_anpma.png",
    name: "ANPMA",
  },
];

export function MarqueeClients() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative my-4 mb-6 px-4">
        <div className="absolute left-1/2 top-1/2 w-[50%] max-w-5xl -translate-x-1/2">
          <Separator />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Nos Clients
          </span>
        </div>
      </div>

      <Marquee className="[--duration:90s] w-full p-0" pauseOnHover>
        {clientList.map((client) => (
          <div
            key={client.name}
            className="group/client flex h-16 w-40 shrink-0 cursor-pointer items-center justify-center lg:h-20 lg:w-48"
          >
            <Image
              src={client.image}
              alt={client.name}
              width={275}
              height={170}
              className="max-h-full max-w-full object-contain px-4 grayscale transition-[filter,transform] duration-300 ease-out group-hover/client:grayscale-0 group-hover/client:scale-[1.04]"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
