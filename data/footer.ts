import { services as allServices } from "@/data/services";

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export const services = allServices.map(({ title, href }) => ({
  label: title,
  href,
}));

export const contactLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Imagin-Creative-399997584176202/",
    external: true,
  },
  {
    label: "+212 5 35 65 39 85",
    href: "tel:+212535653985",
  },
  {
    label: "lunicreative.maroc@gmail.com",
    href: "mailto:lunicreative.maroc@gmail.com",
  },
];
