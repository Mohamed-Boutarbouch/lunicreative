"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconBrandAdobe,
  IconChevronDown,
  IconChevronUp,
  IconPalette,
  IconPrinter,
  IconWorld,
} from "@tabler/icons-react";
import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PROJECTS_LIMIT = 8;

const projects = [
  // Graphic
  {
    category: "graphic",
    title: "Arganol",
    tags: ["Création graphique", "Communication"],
    image: "/work/graphic/01_arganol.jpeg",
  },

  // Impression
  {
    category: "impression",
    title: "Armonia",
    tags: ["Impression", "Supports imprimés"],
    image: "/work/impression/01_armonia.jpeg",
  },
  {
    category: "impression",
    title: "Imagine Creative",
    tags: ["Impression", "Supports imprimés"],
    image: "/work/impression/02_imagine_creative.jpeg",
  },
  {
    category: "impression",
    title: "IRC",
    tags: ["Impression", "Supports grand format"],
    image: "/work/impression/03_irc.jpeg",
  },
  {
    category: "impression",
    title: "Rayhana",
    tags: ["Impression", "Supports imprimés"],
    image: "/work/impression/04_rayhana.jpg",
  },
  {
    category: "impression",
    title: "IRC",
    tags: ["Impression", "Supports grand format"],
    image: "/work/impression/05_irc.jpg",
  },
  {
    category: "impression",
    title: "Imagine Creative",
    tags: ["Impression", "Supports imprimés"],
    image: "/work/impression/06_imagine_creative.jpg",
  },
  {
    category: "impression",
    title: "Ferm",
    tags: ["Impression", "Supports imprimés"],
    image: "/work/impression/07_ferm.jpg",
  },
  {
    category: "impression",
    title: "Al Houda",
    tags: ["Impression", "Supports imprimés"],
    image: "/work/impression/08_al_houda.jpg",
  },
  {
    category: "impression",
    title: "Teka",
    tags: ["Impression", "Supports imprimés"],
    image: "/work/impression/09_teka.jpg",
  },
  {
    category: "impression",
    title: "Restaurant",
    tags: ["Impression", "Supports imprimés"],
    image: "/work/impression/10_restaurant.jpg",
  },
  {
    category: "impression",
    title: "Bina Colle",
    tags: ["Impression", "Supports imprimés"],
    image: "/work/impression/11_bina_colle.jpg",
  },

  // Logo
  {
    category: "logo",
    title: "The Corner Barber",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/01_the_corner_barber.jpeg",
  },
  {
    category: "logo",
    title: "Academy Akaff",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/02_academy_akaff.jpeg",
  },
  {
    category: "logo",
    title: "Malaga Transport",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/03_malaga_transport.jpeg",
  },
  {
    category: "logo",
    title: "Rêves d'Orient",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/04_reves-dorient.jpeg",
  },
  {
    category: "logo",
    title: "Rayhana",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/05_rayhana.jpeg",
  },
  {
    category: "logo",
    title: "Royal Golf Fès",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/06_royal_golf_fes.jpg",
  },
  {
    category: "logo",
    title: "Le Narval",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/07_le_narval.jpg",
  },
  {
    category: "logo",
    title: "Green Bike",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/08_green_bike.jpg",
  },
  {
    category: "logo",
    title: "Smile Lab",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/09_smile_lab.jpg",
  },
  {
    category: "logo",
    title: "Agrin",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/10_agrin.jpg",
  },
  {
    category: "logo",
    title: "La Relance",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/11_la_relance.jpg",
  },
  {
    category: "logo",
    title: "Sarlat",
    tags: ["Identité visuelle", "Logo"],
    image: "/work/logo/12_sarlat.jpg",
  },

  // Website
  {
    category: "website",
    title: "Sarapro Maroc",
    tags: ["Site web", "Développement web"],
    image: "/work/website/01_saraprocmaroc.jpeg",
    href: "https://www.saraprocmaroc.com/",
  },
  {
    category: "website",
    title: "Projet Web",
    tags: ["Site web", "Développement web"],
    image: "/work/website/02_website.jpeg",
    href: "https://oldy.ma/",
  },
  {
    category: "website",
    title: "Rêves d'Orient",
    tags: ["Site web", "Développement web"],
    image: "/work/website/03_reves-dorient.jpeg",
    href: "http://www.revedorient.net/",
  },
  {
    category: "website",
    title: "Projet Web",
    tags: ["Site web", "Développement web"],
    image: "/work/website/04_website.jpeg",
    href: "https://filalimaths.com/",
  },
  {
    category: "website",
    title: "INDH",
    tags: ["Site web", "Développement web"],
    image: "/work/website/05_indh.jpeg",
    href: "https://indh-ifrane.ma/",
  },
  {
    category: "website",
    title: "Olive",
    tags: ["Site web", "Développement web"],
    image: "/work/website/06_olive.jpeg",
    href: "http://www.huilesdesaiss.com/",
  },
  {
    category: "website",
    title: "Projet Web",
    tags: ["Site web", "Développement web"],
    image: "/work/website/07_website.jpeg",
    href: "www.classcof.com",
  },
  {
    category: "website",
    title: "ANPMA",
    tags: ["Site web", "Développement web"],
    image: "/work/website/08_anpma.jpeg",
    href: "https://anpma.ma/",
  },
  {
    category: "website",
    title: "INDH",
    tags: ["Site web", "Développement web"],
    image: "/work/website/09_indh.jpeg",
    href: "https://indh-taounate.ma/",
  },
  {
    category: "website",
    title: "INDH",
    tags: ["Site web", "Développement web"],
    image: "/work/website/10_indh.jpeg",
    href: "https://indh-sefrou.ma/",
  },
  {
    category: "website",
    title: "Sarlat",
    tags: ["Site web", "Développement web"],
    image: "/work/website/11_sarlat.jpeg",
    href: "https://www.sarlat.ma/",
  },
  {
    category: "website",
    title: "GIP",
    tags: ["Site web", "Développement web"],
    image: "/work/website/12_gip.jpeg",
    href: "https://gip.ma/",
  },
];

const categories = [
  { value: "website", label: "Web", icon: IconWorld },
  { value: "logo", label: "Identité & logo", icon: IconBrandAdobe },
  { value: "impression", label: "Impression", icon: IconPrinter },
  { value: "graphic", label: "Création graphique", icon: IconPalette },
];

export function WorkSection() {
  const [category, setCategory] = useState("website");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (project) => project.category === category,
  );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, PROJECTS_LIMIT);

  const hasMoreProjects = filteredProjects.length > PROJECTS_LIMIT;

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setShowAll(false);
  };

  return (
    <section id="realisations" className="py-14 sm:py-22">
      <div className="flex flex-col items-center gap-10 md:gap-16">
        <div className="max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Nos{" "}
            <span className="font-serif font-semibold italic text-primary">
              réalisations
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Découvrez une sélection de nos projets en communication, création
            graphique, impression et développement web.
          </p>
        </div>

        <Tabs value={category} onValueChange={handleCategoryChange}>
          <TabsList className="h-auto max-w-full overflow-x-auto">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="shrink-0 gap-2"
                >
                  <Icon className="size-4" stroke={1.8} />

                  <span className="hidden sm:inline">{item.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visibleProjects.map((project) => {
            const card = (
              <Card className="relative h-full overflow-hidden border border-border/60 bg-muted/40 p-0 shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-625/410 overflow-hidden bg-muted">
                  <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {project.href && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-3 right-3 z-20 flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/95 text-foreground shadow-md shadow-black/10 ring-1 ring-black/5 transition-all duration-300 ease-out group-hover:rotate-45 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25 sm:bottom-4 sm:right-4"
                    >
                      <IconArrowUpRight className="size-4" />
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-3 p-5">
                  <h3 className="font-heading text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.category === "website" && project.href && (
                    <Badge
                      variant="secondary"
                      className="w-fit gap-1.5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <IconWorld className="size-3.5" />
                      Visiter le site
                      <IconArrowUpRight className="size-3.5" />
                    </Badge>
                  )}
                </div>
              </Card>
            );

            if (project.href) {
              return (
                <Link
                  key={project.image}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  {card}
                </Link>
              );
            }

            return (
              <div key={project.image} className="group block h-full">
                {card}
              </div>
            );
          })}
        </div>

        {hasMoreProjects && (
          <Button
            variant="outline"
            onClick={() => setShowAll((current) => !current)}
            className="gap-2"
          >
            {showAll ? (
              <>
                Voir moins
                <IconChevronUp className="size-4" />
              </>
            ) : (
              <>
                Voir plus
                <IconChevronDown className="size-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </section>
  );
}
