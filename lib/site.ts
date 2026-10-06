export const siteConfig = {
  name: "L'unicreative",
  alternateName: "Imagin Creative",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lunicreative.com",
  locale: "fr_FR",
  description:
    "Agence à Fès : création de sites web, identité visuelle, impression numérique et offset, 3D et événementiel. Une seule équipe pour tous vos supports.",
  phone: "+212535653985",
  phoneDisplay: "05 35 65 39 85",
  email: "lunicreative.maroc@gmail.com",
  address: {
    street: "Avenue Lalla Hasnae, Bureaux Ibn Yassin",
    city: "Fès",
    country: "MA",
  },
} as const;
