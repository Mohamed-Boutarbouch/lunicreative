import { services as allServices } from "@/data/services";

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceProps {
  href: string;
  title: string;
  description: string;
}

// « Nos services » (menu déroulant) s'affiche en premier, puis ces liens.
// Ordre aligné sur le pied de page : Services, Réalisations, À propos, Contact.
export const primaryRoutes: RouteProps[] = [];

export const secondaryRoutes: RouteProps[] = [
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/carriere", label: "Carrière" },
  { href: "/#contact", label: "Contact" },
];

export const services: ServiceProps[] = allServices.map(
  ({ href, title, short }) => ({ href, title, description: short }),
);
