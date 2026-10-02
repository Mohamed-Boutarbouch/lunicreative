import type { ServiceGroup } from "@/data/services";

export const serviceGroups: Record<
  ServiceGroup,
  { label: string; description: string }
> = {
  digital: {
    label: "Digital",
    description: "Sites web et applications sur mesure.",
  },
  "identite-impression": {
    label: "Identité et impression",
    description: "De la création graphique au support imprimé.",
  },
  espace: {
    label: "Espace et événementiel",
    description: "Modélisation 3D, stands et événements.",
  },
};

export const quoteServices = [
  {
    value: "site-web",
    label: "Site web",
    group: "digital",
  },
  {
    value: "site-vitrine",
    label: "Site web vitrine",
    group: "digital",
  },
  {
    value: "site-dynamique",
    label: "Site web dynamique",
    group: "digital",
  },
  {
    value: "site-e-commerce",
    label: "Site web e-commerce",
    group: "digital",
  },
  {
    value: "applications",
    label: "Création d'applications",
    group: "digital",
  },
  {
    value: "creation-graphique",
    label: "Conception et création graphique",
    group: "identite-impression",
  },
  {
    value: "impression",
    label: "Impression numérique et offset",
    group: "identite-impression",
  },
  {
    value: "design-3d",
    label: "Design et création 3D",
    group: "espace",
  },
  {
    value: "communication-evenementielle",
    label: "Communication événementielle",
    group: "espace",
  },
] as const;
