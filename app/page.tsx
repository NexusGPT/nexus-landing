import type { Metadata } from "next";
import {
  Hero,
  EnterpriseSection,
  SolutionSection,
  EnterpriseFeatures,
  CTASection,
  TrustBar,
  Testimonials,
  ComparisonSection,
} from "@/components/sections";
import { createPageMetadata } from "@/lib/metadata";
import { reviewSchema, escapeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Nexus - Business-led Enterprise AI Platform",
  description:
    "The only enterprise platform where business teams transform workflows into autonomous AI agents in days, not months. SOC 2, ISO 27001, ISO 42001 certified. Backed by Y Combinator.",
  path: "/",
  openGraph: {
    title: "Nexus - Business-led Enterprise AI Platform",
    description:
      "Transform your business workflows into autonomous AI agents in days, not months. Enterprise-grade security with SOC 2 & ISO certifications.",
  },
});

export default function Home() {
  return (
    <div className="min-h-screen bg-nexus-white">
      <Hero />
      <TrustBar />
      <EnterpriseSection />
      <SolutionSection />
      <EnterpriseFeatures />
      <Testimonials />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: escapeJsonLd(
            reviewSchema({
              reviewBody:
                "I can enhance the agent or test new use cases directly, which allows us to respond quickly to business needs and continuously refine the experience.",
              author: {
                name: "Tom Guisgand",
                jobTitle: "Senior Customer Journey Designer",
              },
              ratingValue: "5",
            })
          ),
        }}
      />
      <ComparisonSection />
      <CTASection />
    </div>
  );
}
