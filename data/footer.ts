import { services as allServices } from "@/data/services";

export const navigation = [
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
];

export const services = allServices.map(({ title, href }) => ({
  label: title,
  href,
}));
