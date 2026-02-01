/**
 * Structured Data (JSON-LD) Schema Generators
 * Provides reusable functions for generating JSON-LD schemas
 */

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface Review {
  reviewBody: string;
  author: {
    name: string;
    jobTitle?: string;
  };
  ratingValue?: string;
}

/**
 * Generates Organization schema JSON-LD
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexus",
    url: "https://agent.nexus",
    logo: "https://agent.nexus/nexus-logo.svg",
    sameAs: [
      "https://www.linkedin.com/company/nexusgpt/",
      "https://x.com/nexus_gpt",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://calendly.com/d/crcb-qfd-592",
    },
  };
}

/**
 * Generates WebSite schema JSON-LD
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexus",
    url: "https://agent.nexus",
    description: "Business-led Enterprise AI Platform",
    publisher: {
      "@type": "Organization",
      name: "Nexus Enterprises, Inc.",
    },
  };
}

/**
 * Generates SoftwareApplication schema JSON-LD
 */
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nexus AI Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "The only enterprise platform where business teams transform workflows into autonomous AI agents in days, not months.",
    offers: {
      "@type": "Offer",
      category: "Enterprise",
    },
    featureList: [
      "SOC 2 Type II Certified",
      "ISO 27001 Certified",
      "ISO 42001 Certified",
      "No-code AI agent builder",
      "Enterprise workflow automation",
    ],
  };
}

/**
 * Generates BreadcrumbList schema JSON-LD
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

/**
 * Generates Review schema JSON-LD
 */
export function reviewSchema(review: Review) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: review.reviewBody,
    author: {
      "@type": "Person",
      name: review.author.name,
      ...(review.author.jobTitle && { jobTitle: review.author.jobTitle }),
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "Nexus AI Platform",
    },
    ...(review.ratingValue && {
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.ratingValue,
      },
    }),
  };
}

/**
 * Escapes HTML characters in JSON-LD strings to prevent XSS
 */
export function escapeJsonLd(json: object): string {
  return JSON.stringify(json).replace(/</g, "\\u003c");
}
