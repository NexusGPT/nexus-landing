"use client";

import { Button, FadeInUp } from "@/components/ui";
import HeroBackground from "@/components/sections/HeroBackground";

export default function BlogHero() {
  return (
    <div className="relative w-full overflow-hidden">
      <HeroBackground />
      <section className="relative w-full py-16 lg:py-12 px-8 lg:px-20 min-h-[600px] items-center justify-center flex">
        <div className="max-w-[1440px] w-full relative z-10">
          <div className="text-center flex flex-col items-start">
            <FadeInUp>
              <h1 className="font-pp-fragment text-left text-4xl lg:text-6xl font-normal text-nexus-black leading-tight mb-6">
                The latest from Nexus
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="font-sans text-left text-base lg:text-lg text-nexus-grey-medium leading-relaxed max-w-2xl mx-auto mb-8">
                The only enterprise platform where business teams transform their workflows into autonomous agents in days, not months.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <Button variant="primary" href="https://calendly.com/d/crcb-qfd-592" className="!rounded-none mt-4">
                REQUEST A DEMO
              </Button>
            </FadeInUp>
          </div>
        </div>
      </section>
      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none h-[300px] lg:h-[489px]"
        style={{
          background:
            "linear-gradient(to top, white 0%, white 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
