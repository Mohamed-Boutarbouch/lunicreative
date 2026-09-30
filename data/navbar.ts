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

export const primaryRoutes: RouteProps[] = [{ href: "/", label: "Accueil" }];

export const secondaryRoutes: RouteProps[] = [
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/carriere", label: "Carrière" },
];

export const services: ServiceProps[] = allServices.map(
  ({ href, title, short }) => ({ href, title, description: short }),
);
