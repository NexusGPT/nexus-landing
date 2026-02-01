"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import { UnicornScene } from "unicornstudio-react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <div className="relative overflow-hidden w-full h-auto min-h-[600px] md:h-[800px]">
      {/* Blend Mode Example - Small demo at top */}
      <HeroBackground />
      <section className="flex items-center min-h-[600px] md:min-h-[800px] px-8 md:px-20 relative overflow-hidden py-12 md:py-0">
        <div className="max-w-[1440px] mx-auto w-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center relative w-full">
          {/* Left Column - Content */}
          <div className="col-span-1 z-10 md:col-span-7 flex flex-col">
            {/* Y Combinator Badge */}
            <div className="flex items-center gap-2">
              <span className="text-nexus-black font-sans text-xs sm:text-sm font-medium">
                Backed by
              </span>
              <Image
                src="/backed-by-yc.png"
                alt="Y Combinator"
                width={120}
                height={20}
                className="h-4 sm:h-5 w-auto"
              />
            </div>
            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] mt-3 sm:mt-4 font-pp-fragment font-normal leading-[1.1] tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(353deg, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.18) 125%)",
              }}
            >
              Business-led Enterprise AI
            </h1>


            {/* Sub-headline */}
            <p className="font-sans font-normal mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base text-nexus-black leading-relaxed max-w-[600px]">
              The only enterprise platform where business teams transform<br className="hidden sm:block"/> their
              workflows into autonomous agents in days, not months.
            </p>

            {/* Feature List */}
            <div className="flex items-start gap-2 sm:gap-3 mt-6 sm:mt-8">
              <div className="flex-shrink-0 mt-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="9"
                  fill="none"
                  overflow="visible"
                  className="w-6 sm:w-[30px]"
                >
                  <path
                    d="M 30 9 L 0 9 L 0 0"
                    fill="transparent"
                    stroke="rgb(245, 70, 26)"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                  ></path>
                </svg>
              </div>
              <span className="text-sm sm:text-base font-sans font-medium text-nexus-black">
                Secure. Reliable. Flexible.
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
              <Button
                variant="primary"
                href="https://calendly.com/d/crcb-qfd-592"
                newTab
                className="!py-3 sm:!py-4 w-full sm:w-auto"
              >
                REQUEST A DEMO
              </Button>
              <Button variant="secondary-white" iconVisible className="!py-3 sm:!py-4 w-full sm:w-auto">
                WATCH INTRO
              </Button>
            </div>
          </div>

          {/* Right Column - Unicorn Studio Animation */}
          <div className="col-span-1 md:col-span-5 bg-transparent relative h-[300px] sm:h-[400px] md:h-[600px] lg:h-[844px] flex items-center justify-center mt-6 md:mt-0">
            <div
              className="w-full h-full max-w-[280px] sm:max-w-[390px] md:max-w-full bg-transparent"
              style={{ mixBlendMode: "multiply", position: "relative" }}
              aria-label="Nexus AI Agent Platform"
              role="img"
            >
              <UnicornScene
                projectId="QQW1WZgKv5zd6v6RC22m"
                className="w-full h-full opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none hidden md:block"
        style={{
          height: "489px",
          background:
            "linear-gradient(to top, white 0%, white 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
