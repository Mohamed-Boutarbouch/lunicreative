import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

export const contactItems = [
  {
    icon: IconMapPin,
    title: "Retrouvez-nous",
    content:
      "Bureaux Ibn Yassin, à côté de l'Institut Français, avenue Lalla Hasnae, Fès, Maroc",
    href: "https://www.google.com/maps/search/?api=1&query=L%27UNICREATIVE+Fes",
  },
  {
    icon: IconPhone,
    title: "Appelez-nous",
    content: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY!,
    href: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE!}`,
  },
  {
    icon: IconMail,
    title: "Écrivez-nous",
    content: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL!}`,
  },
];
