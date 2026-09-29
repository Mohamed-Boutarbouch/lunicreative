interface RouteProps {
  href: string;
  label: string;
}

interface ServiceProps {
  href: string;
  title: string;
  description: string;
}

export const primaryRoutes: RouteProps[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
];

export const secondaryRoutes: RouteProps[] = [
  { href: "/realisations", label: "Réalisations" },
  { href: "/carriere", label: "Carrière" },
  { href: "/contact", label: "Contact" },
];

export const services: ServiceProps[] = [
  {
    href: "/services/conception-creation-graphique",
    title: "Conception & création graphique",
    description:
      "Identité de marque, logos, cartes de visite, flyers et supports promotionnels.",
  },
  {
    href: "/services/impression-numerique-offset",
    title: "Impression numérique & offset",
    description:
      "Affiches, flyers et supports imprimés en numérique et offset.",
  },
  {
    href: "/services/creation-site-web",
    title: "Création de site web",
    description: "Sites vitrines, CMS dynamiques et solutions e-commerce.",
  },
  {
    href: "/services/design-creation-3d",
    title: "Design & création 3D",
    description: "Modélisation, rendu et design 3D pour vos projets.",
  },
  {
    href: "/services/conception-evenementielle",
    title: "Conception événementielle",
    description:
      "Stands modulables, séminaires, colloques, inaugurations et production technique.",
  },
];
