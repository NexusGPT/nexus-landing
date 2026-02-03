import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
// @ts-ignore
import "./globals.css";
import WebVitals from "@/components/WebVitals";
import { Header, Footer } from "@/components/layout";
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  escapeJsonLd,
} from "@/lib/structured-data";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agent.nexus"),
  title: {
    default: "Nexus - Business-led Enterprise AI Platform",
    template: "%s | Nexus",
  },
  description:
    "The only enterprise platform where business teams transform workflows into autonomous AI agents in days, not months. SOC 2, ISO 27001, ISO 42001 certified.",
  keywords: [
    "enterprise AI",
    "AI agents",
    "business automation",
    "no-code AI",
    "workflow automation",
    "agentic AI",
    "enterprise automation",
    "AI workflow",
    "autonomous agents",
    "SOC 2 certified AI",
    "ISO 27001 AI platform",
    "enterprise AI platform",
    "AI for business teams",
    "low-code AI",
    "AI automation platform",
  ],
  authors: [{ name: "Nexus Enterprises, Inc." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agent.nexus",
    siteName: "Nexus",
    title: "Nexus - Business-led Enterprise AI Platform",
    description:
      "Transform workflows into autonomous AI agents in days, not months.",
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
    title: "Nexus - Business-led Enterprise AI",
    description:
      "Transform workflows into autonomous AI agents in days, not months.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://agent.nexus",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect for PP Fragment Serif font */}
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
      </head>
      <body className={playfairDisplay.variable}>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: escapeJsonLd(organizationSchema()),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: escapeJsonLd(websiteSchema()),
          }}
        />
        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: escapeJsonLd(softwareApplicationSchema()),
          }}
        />
        <WebVitals />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
