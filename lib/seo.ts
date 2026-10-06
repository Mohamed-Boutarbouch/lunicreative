import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
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

  const canonicalUrl = `${siteConfig.url}${path}`;
  const ogImageUrl = `${siteConfig.url}/opengraph-image.png`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: canonicalUrl,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Print | Web | Design`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },

    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
