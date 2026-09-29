import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

export const contactItems = [
  {
    icon: IconMapPin,
    title: "Retrouvez-nous",
    content:
      "Bureaux Ibn Yassin à côté de l'institut français, Ave Lalla Hasnae, Fès, Maroc",
    href: "https://www.google.com/maps/search/?api=1&query=L%27UNICREATIVE+Fes",
  },
  {
    icon: IconPhone,
    title: "Appelez-nous",
    content: "+212 6 61 88 15 53",
    href: "tel:+212661881553",
  },
  {
    icon: IconMail,
    title: "Écrivez-nous",
    content: "contact@lunicreative.ma",
    href: "mailto:contact@lunicreative.ma",
  },
];

export const services = [
  {
    value: "conception-creation-graphique",
    label: "Conception & création graphique",
  },
  {
    value: "impression-numerique-offset",
    label: "Impression numérique & offset",
  },
  {
    value: "creation-sites-web",
    label: "Création de sites web",
  },
  {
    value: "design-creation-3d",
    label: "Design & création 3D",
  },
  {
    value: "conception-evenementielle",
    label: "Conception événementielle",
  },
  {
    value: "autre",
    label: "Autre",
  },
] as const;
