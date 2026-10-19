import { services as allServices } from "@/data/services";

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "/contact" },
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
    label: "06 15 66 08 70",
    href: "tel:+212615660870",
  },
  {
    label: "lunicreative.maroc@gmail.com",
    href: "mailto:lunicreative.maroc@gmail.com",
  },
];
