import { services as allServices } from "@/data/services";

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "#realisations" },
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
    label: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY!,
    href: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE!}`,
  },
  {
    label: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL!}`,
  },
];
