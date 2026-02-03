"use client";

import { Button, FadeInUp } from "@/components/ui";
import HeroBackground from "@/components/sections/HeroBackground";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-nexus-white flex items-center justify-center px-6 sm:px-8 overflow-hidden">
      {/* Background */}
      <HeroBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* 404 Display */}
        <FadeInUp>
          <div className="relative inline-block mb-6">
            <h1 
              className="text-[120px] sm:text-[180px] lg:text-[220px] font-pp-fragment font-normal leading-none tracking-tight bg-clip-text text-transparent select-none"
              style={{
                backgroundImage: "linear-gradient(353deg, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.18) 125%)",
              }}
            >
              404
            </h1>
            {/* Decorative accent line */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-[rgb(245,70,26)] rounded-full" />
          </div>
        </FadeInUp>

        {/* Heading */}
        <FadeInUp delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-pp-fragment font-normal text-nexus-black mb-4">
            Page Not Found
          </h2>
        </FadeInUp>

        {/* Description */}
        <FadeInUp delay={0.2}>
          <p className="text-nexus-grey-medium font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to a new location.
          </p>
        </FadeInUp>

        {/* CTA Buttons */}
        <FadeInUp delay={0.3}>
          <div className="flex mt-4 flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" href="/">
              Go Home
            </Button>
            <Button variant="secondary-white" href="/#use-case">
              View Use Cases
            </Button>
          </div>
        </FadeInUp>

        {/* Helpful links */}
        <FadeInUp delay={0.4}>
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm text-nexus-grey-medium font-sans mb-4">
              Or explore these popular pages:
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm font-sans">
              <a 
                href="/#solutions" 
                className="text-nexus-black hover:text-[rgb(245,70,26)] transition-colors duration-200"
              >
                Solutions
              </a>
              <span className="text-neutral-300">•</span>
              <a 
                href="/#features" 
                className="text-nexus-black hover:text-[rgb(245,70,26)] transition-colors duration-200"
              >
                Features
              </a>
              <span className="text-neutral-300">•</span>
              <a 
                href="/blog" 
                className="text-nexus-black hover:text-[rgb(245,70,26)] transition-colors duration-200"
              >
                Blog
              </a>
              <span className="text-neutral-300">•</span>
              <a 
                href="https://calendly.com/d/crcb-qfd-592" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-nexus-black hover:text-[rgb(245,70,26)] transition-colors duration-200"
              >
                Request Demo
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none h-[200px]"
        style={{
          background: "linear-gradient(to top, white 0%, white 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
