"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconChevronDown,
  IconChevronUp,
  IconWorld,
} from "@tabler/icons-react";
import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, projects, PROJECTS_LIMIT } from "@/data/work";

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
        <div className="w-full max-w-3xl text-left sm:text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Des projets{" "}
            <span className="font-serif font-semibold italic tracking-normal text-primary">
              qui prennent vie
            </span>
          </h2>

          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Découvrez une sélection de projets imaginés et réalisés pour des
            marques, entreprises et événements.
          </p>
        </div>

        <Tabs value={category} onValueChange={handleCategoryChange}>
          <TabsList className="h-auto max-w-full overflow-x-auto overflow-y-hidden">
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
              <SpotlightCard className="relative h-full overflow-hidden border border-border/60 bg-muted/40 p-0 shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative z-10 aspect-625/410 overflow-hidden bg-muted">
                  <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
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

                <div className="relative z-10 flex flex-col gap-3 p-5">
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
                      {project.href}
                      <IconArrowUpRight className="size-3.5" />
                    </Badge>
                  )}
                </div>
              </SpotlightCard>
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
