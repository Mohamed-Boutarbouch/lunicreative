import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Conception & création graphique",
    description:
      "Identité de marque, logos, cartes de visite, flyers et supports promotionnels pensés pour renforcer votre image.",
    image: "/services/graphic-design-placeholder.png",
    href: "/services/conception-creation-graphique",
    className: "lg:col-span-2",
  },
  {
    title: "Impression numérique & offset",
    description:
      "Affiches, flyers et supports imprimés de qualité pour vos campagnes et communications.",
    href: "/services/impression-numerique-offset",
    image: "/services/printing-placeholder.jpeg",
  },
  {
    title: "Création de sites web",
    description:
      "Sites vitrines, CMS dynamiques et solutions e-commerce adaptés à vos objectifs.",
    href: "/services/creation-site-web",
    image: "/services/web-placeholder.jpeg",
  },
  {
    title: "Design & création 3D",
    description:
      "Modélisation, rendu et design 3D pour donner vie à vos projets.",
    href: "/services/design-creation-3d",
    image: "/services/3d-placeholder.jpeg",
  },
  {
    title: "Conception événementielle",
    description:
      "Stands modulables, séminaires, colloques, inaugurations et production technique pour vos événements.",
    href: "/services/conception-evenementielle",
    image: "/services/events-placeholder.jpeg",
  },
];

export function ServicesSection() {
  return (
    <section className="py-14 sm:py-22">
      <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 sm:mb-14">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-6xl md:text-center">
          Nos services
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Développement web et applicatif, impression numérique et offset,
          conception graphique, design 3D et événementiel : L&apos;unicreative
          accompagne vos projets de communication à Fès et partout au Maroc.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Link
            key={service.title}
            href={service.href}
            className={`group block h-full ${service.className ?? ""}`}
          >
            <Card className="relative h-full overflow-hidden border border-border/60 bg-muted/40 p-0 shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
              <CardContent
                className={
                  index === 0
                    ? "grid h-full grid-cols-1 gap-0 p-0 lg:grid-cols-2"
                    : "flex h-full flex-col gap-0 p-0"
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
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
