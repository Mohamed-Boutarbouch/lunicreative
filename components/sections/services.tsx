import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/spotlight-card";
import { services } from "@/data/services";
import { FuseReveal } from "@/components/animations/fuse-reveal";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/reveal";

export function ServicesSection() {
  return (
    <section id="services" className="py-14 sm:py-22">
      <div className="mx-auto mb-10 w-full max-w-3xl text-left sm:mb-14 sm:text-center">
        <FuseReveal
          as="h2"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          parts={[
            "Tout ce qu'il faut pour ",
            {
              text: "donner vie",
              className:
                "font-serif font-semibold italic tracking-wider text-primary",
            },
            " à vos projets",
          ]}
        />

        <Reveal
          as="p"
          variant="blurIn"
          delay={1.2}
          className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Du développement web à l&apos;impression, de la création graphique à
          l&apos;événementiel, nous réunissons les savoir-faire nécessaires pour
          transformer une idée en réalisation.
        </Reveal>
      </div>

      <RevealGroup
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        stagger={0.3}
      >
        {services.map((service, index) => (
          <RevealItem
            key={service.title}
            variant="fadeUp"
            className={`h-full ${service.className ?? ""}`}
          >
            <Link href={service.href} className="group block h-full">
              <SpotlightCard className="relative h-full overflow-hidden border border-border/60 bg-muted/40 p-0 shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <CardContent
                  className={
                    index === 0
                      ? "relative z-10 grid h-full grid-cols-1 gap-0 p-0 lg:grid-cols-2"
                      : "relative z-10 flex h-full flex-col gap-0 p-0"
                  }
                >
                  <div
                    className={
                      index === 0
                        ? "flex flex-col justify-center p-5 lg:p-7"
                        : "p-5"
                    }
                  >
                    <h3 className="font-heading text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={
                      index === 0
                        ? "relative min-h-56 overflow-hidden bg-muted lg:min-h-full"
                        : "relative mt-auto aspect-video overflow-hidden bg-muted"
                    }
                  >
                    <div className="absolute inset-0 z-10 bg-linear-to-t from-black/25 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute right-3 bottom-3 z-20 flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/95 text-foreground shadow-md shadow-black/10 ring-1 ring-black/5 transition-all duration-300 ease-out group-hover:rotate-45 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25 sm:right-4 sm:bottom-4"
                  >
                    <IconArrowUpRight className="size-4" />
                  </span>
                </CardContent>
              </SpotlightCard>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
