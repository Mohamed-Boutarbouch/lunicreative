import type { MetadataRoute } from "next";

import { serviceDetails } from "@/data/services";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    "/",
    "/services",
    ...serviceDetails.map(({ slug }) => `/services/${slug}`),
    "/devis",
    "/carriere",
  ];

  return urls.map((url) => ({
    url: `${siteConfig.url}${url}`,
  }));
}
