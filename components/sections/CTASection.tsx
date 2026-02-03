"use client";

import { useEffect, useRef } from "react";
import { Button, FadeInUp } from "@/components/ui";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current || !svgRef.current) return;

      // Cancel any pending animation frame
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }

      // Schedule update for next frame
      rafId.current = requestAnimationFrame(() => {
        if (sectionRef.current && svgRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          // Calculate position relative to section, even if cursor is outside
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          svgRef.current.style.transform = `translate(${x - 807.5}px, ${
            y - 442.5
          }px) rotate(45deg)`;
          rafId.current = null;
        }
      });
    };

    // Attach to window to track cursor globally
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 lg:py-24 px-8 lg:px-20 overflow-hidden"
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-[#171717]">
        {/* Grain texture overlay */}
        <svg
          ref={svgRef}
          style={{
            width: "1615px",
            height: "885px",
            willChange: "transform",
            transformOrigin: "center",
            transform: "translate(0px, 0px) rotate(45deg)",
          }}
          className="absolute blur-[100px]"
          viewBox="0 0 1798 1427"
          fill="none"
        >
          <g filter="url(#filter0_f_5011_657)">
            <path
              d="M772.575 1147.99C921.802 1187.98 1074.89 1200.79 1213.33 1184.87C1351.78 1168.96 1469.65 1125.01 1552.72 1058.32C1635.79 991.64 1680.49 905.081 1681.42 809.105C1682.35 713.13 1639.48 611.846 1557.98 517.494L1357.89 566.05C1414.66 631.77 1444.53 702.318 1443.88 769.168C1443.23 836.019 1412.09 896.311 1354.23 942.759C1296.37 989.207 1214.27 1019.82 1117.84 1030.91C1021.4 1041.99 914.774 1033.07 810.832 1005.21L772.575 1147.99Z"
              fill="#91D5FF"
            />
            <path
              d="M567.98 396.694C464.78 462.838 392.153 567.38 366.078 687.323C340.003 807.265 362.614 932.784 428.938 1036.27C495.261 1139.75 599.865 1212.71 719.736 1239.12C839.607 1265.52 964.928 1243.19 1068.13 1177.05L941.576 979.598C890.601 1012.27 828.7 1023.3 769.49 1010.26C710.28 997.215 658.612 961.173 625.852 910.059C593.091 858.944 581.923 796.945 594.802 737.7C607.682 678.455 643.556 626.817 694.531 594.146L567.98 396.694Z"
              fill="#8AB3FF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_5011_657"
              x="-4.00195"
              y="-4"
              width="1805.29"
              height="1434.44"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_5011_657"
              />
            </filter>
          </defs>
        </svg>
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: "url('/bg-grain.avif')",
            backgroundRepeat: "repeat",
            backgroundSize: "1024px 527px",
          }}
        />
        {/* >
          <img
            src="/bg-grain.avif"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center">
        <FadeInUp>
          <h2 className="font-pp-fragment text-3xl lg:text-[46px] font-normal text-white leading-tight mb-6 lg:mb-8">
            Your next
            <br /> step is clear
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="font-sans text-base text-white leading-relaxed mb-8 lg:mb-10 max-w-[450px]">
            The only enterprise platform where business teams transform their
            workflows into autonomous agents in days, not months.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Button
            href="https://calendly.com/d/crcb-qfd-592"
            variant="secondary-white"
            newTab
            className="mt-4"
          >
            REQUEST A DEMO
          </Button>
        </FadeInUp>
      </div>
    </section>
  );
}
