import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path: string; // "/services", "/services/creation-site-web"
  absoluteTitle?: boolean; // skip the "| L'unicreative" template (home)
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noIndex,
}: SeoInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
