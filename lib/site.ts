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
  phone: "+212535653985",
  phoneDisplay: "05 35 65 39 85",
  email: "lunicreative.maroc@gmail.com",
  address: {
    street: "Avenue Lalla Hasnae, Bureaux Ibn Yassin",
    city: "Fès",
    country: "MA",
  },
} as const;
