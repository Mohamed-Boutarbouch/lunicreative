import type { MetadataRoute } from "next";
import { serviceDetails } from "@/data/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    ...serviceDetails.map((s) => `/services/${s.slug}`),
    "/devis",
    "/carriere",
  ];
  return paths.map((p) => ({ url: `${siteConfig.url}${p}` }));
}
