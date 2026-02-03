import type { Metadata } from "next";

const metadataBase = new URL("https://agent.nexus");

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
  };
}

export function createPageMetadata(options: PageMetadataOptions): Metadata {
  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    alternates: {
      canonical: `${metadataBase}${options.path}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: options.openGraph?.url || `${metadataBase}${options.path}`,
      siteName: "Nexus",
      title: options.openGraph?.title || options.title,
      description: options.openGraph?.description || options.description,
      images: [
        {
          url: "/og-image.png",
          width: 850,
          height: 447,
          alt: "Nexus AI Platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@nexus_gpt",
      creator: "@nexus_gpt",
      title: options.openGraph?.title || options.title,
      description: options.openGraph?.description || options.description,
      images: ["/og-image.png"],
    },
  };
}
