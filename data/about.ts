import {
  IconBolt,
  IconBulb,
  IconHeartHandshake,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";

// Valeurs reprises de la rubrique « Pourquoi nous choisir ? » de l'ancien site.
export const values = [
  {
    title: "Qualité",
    description:
      "Des solutions pertinentes pour une communication ciblée, à des tarifs accessibles.",
    icon: IconRosetteDiscountCheck,
  },
  {
    title: "Engagement",
    description:
      "Une implication constante dans la réussite de vos projets et un point d'honneur à respecter les délais.",
    icon: IconHeartHandshake,
  },
  {
    title: "Créativité",
    description:
      "Des supports personnalisés, en phase avec votre image, vos valeurs, vos objectifs et les tendances du moment.",
    icon: IconBulb,
  },
  {
    title: "Performance",
    description:
      "Une veille permanente dans chacun de nos métiers pour rester à jour des pratiques et des outils.",
    icon: IconBolt,
  },
];

// Chiffres de l'ancien site : « +7000 », « +300 », « 12 » (sans signe plus).
export const stats = [
  { value: 7000, label: "Projets réalisés", plus: true },
  { value: 300, label: "Clients accompagnés", plus: true },
  { value: 12, label: "Années d'expérience", plus: false },
];
