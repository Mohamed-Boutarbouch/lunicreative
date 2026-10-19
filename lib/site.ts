const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL is required");
}

export const siteConfig = {
  name: "L'unicreative",
  alternateName: "Imagin Creative",
  url: siteUrl,
  locale: "fr_FR",
  description:
    "Agence de communication à Fès : web, identité visuelle, impression, 3D et événementiel.",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE!,
  phoneDisplay: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY!,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
  address: {
    street: "Avenue Lalla Hasnae, Bureaux Ibn Yassin",
    city: "Fès",
    country: "MA",
  },
} as const;
