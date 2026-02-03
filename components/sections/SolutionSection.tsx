"use client";

import Image from "next/image";
import { Button, FadeInUp } from "@/components/ui";

interface ProblemCard {
  title: string;
  description: string;
}

interface BenefitCard {
  title: string;
  description: string;
}

const problems: ProblemCard[] = [
  {
    title: "CHANGES BREAK EVERYTHING",
    description:
      "A new form field, updated approval flow, or system upgrade means weeks of reconfiguration",
  },
  {
    title: "COMPLEXITY DEFAULTS MANUAL",
    description:
      "When scenarios don't fit the template, work routes back to your team, defeating automation's purpose",
  },
  {
    title: "UNEXPLAINABLE AI DECISIONS",
    description:
      "When outputs vary unpredictably, you can't explain to compliance why specific actions were taken",
  },
  {
    title: "SCALING MULTIPLIES PROBLEMS",
    description:
      "A new form field, updated approval flow, or system upgrade means weeks of reconfiguration",
  },
];

const benefits: BenefitCard[] = [
  {
    title: "ADAPTIVE INTELLIGENCE",
    description:
      "When your process hits an unexpected case, agents reshape their approach until they succeed",
  },
  {
    title: "ZERO HALLUCINATION",
    description:
      "Get 100% reliability for critical steps, creative problem-solving for everything else",
  },
  {
    title: "DYNAMIC PLANNING",
    description:
      "Agents don't just follow scripts - they create new paths based on what they discover",
  },
  {
    title: "CONTINUOUS LEARNING",
    description: "Each interaction makes your agents smarter",
  },
];

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 relative px-6 sm:px-8 lg:px-20 bg-[#191919] overflow-hidden">
      <div className="hidden sm:block">
        <SoluutionSectionBG />
      </div>
      <div className="hidden sm:block">
        <GlowWrapper />
      </div>
      {/* <Image
        src="/bg-grain.avif"
        alt="Noise texture"
        width={1200}
        height={947}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "color-burn" }}
      /> */}
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between mb-10 sm:mb-16 lg:mb-20 gap-4 sm:gap-6 lg:gap-8">
          <FadeInUp className="flex-1">
            <h2 className="text-3xl lg:text-5xl font-pp-fragment font-normal leading-[1.1] tracking-tight text-white mb-4 lg:mb-6">
              The only solution
              <br /> that adapts like you do
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1} className="flex-shrink-0 w-full lg:w-auto">
            <Button
              href="https://calendly.com/d/crcb-qfd-592"
              variant="secondary-white"
              newTab
              className="w-full lg:w-auto"
            >
              REQUEST A DEMO
            </Button>
          </FadeInUp>
        </div>
        <FadeInUp delay={0.2}>
          <p className="font-sans text-white/80 text-base lg:text-lg leading-relaxed">
            The more flexible solutions are, the less reliable they become. Most
            agentic systems are stuck in this trade-off.
          </p>
        </FadeInUp>
        {/* Trade-off Section */}
        <div className="mb-12 mt-4 sm:mb-16 lg:mb-24">
          <FadeInUp delay={0.1}>
            <div className="mb-3">
              <div className="relative w-full h-auto">
                <FlexibleSolutionBG />
                <Image
                  src="/solution-section/flexible-solution.svg"
                  alt="Reliability vs Flexibility Trade-off"
                  width={1440}
                  height={946}
                  className="w-full h-auto p-4 sm:p-8 lg:p-12"
                  priority
                />
              </div>
            </div>
          </FadeInUp>
          {/* Problem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {problems.map((problem, index) => (
              <FadeInUp key={index} delay={0.15 + index * 0.05}>
                <div className="bg-[#FFFFFF05] text-sm p-3 flex flex-col gap-2 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32"
                        height="32"
                        fill="#FF3D40"
                        fillOpacity="0.12"
                      />
                      <path
                        d="M11.1719 11.168L20.8385 20.8346M20.8385 11.168L11.1719 20.8346"
                        stroke="#F5461A"
                        strokeLinecap="square"
                      />
                    </svg>
                    <div className="flex-1">
                      <h3 className="font-mono uppercase tracking-wide text-white mb-2 lg:mb-3">
                        {problem.title}
                      </h3>
                      <p className="font-sans text-white/70 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <FadeInUp>
            <p className="font-sans text-white text-base lg:text-lg leading-relaxed max-w-[800px]">
              Nexus provides the best of both worlds: reliable AND flexible when
              needed.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="mb-3 mt-4">
              <div className="relative w-full h-auto overflow-hidden">
                <NexusSolutionBG />
                <Image
                  src="/solution-section/nexus-solution.svg"
                  alt="Nexus Solution"
                  width={1440}
                  height={953}
                  className="w-full h-auto p-4 sm:p-8 lg:p-12"
                  priority
                />
              </div>
            </div>
          </FadeInUp>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {benefits.map((benefit, index) => (
              <FadeInUp key={index} delay={0.15 + index * 0.05}>
                <div className="bg-[#FFFFFF05] text-sm p-3 flex flex-col gap-2 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32"
                        height="32"
                        fill="#2D81FF"
                        fillOpacity="0.13"
                      />
                      <mask
                        id="mask0_1424_916"
                        maskUnits="userSpaceOnUse"
                        x="8"
                        y="8"
                        width="16"
                        height="16"
                      >
                        <path d="M24 8H8V24H24V8Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1424_916)">
                        <path
                          d="M12 16.7595L14.9091 19.3224L20 12"
                          stroke="#0066FF"
                          strokeWidth="1.95439"
                          strokeLinecap="square"
                        />
                      </g>
                    </svg>

                    <div className="flex-1">
                      <h3 className="font-mono uppercase tracking-wide text-white mb-2 lg:mb-3">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-white/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FlexibleSolutionBG = () => (
  <>
    <div className="w-full absolute inset-0 bg-[#FFFFFF0A]"></div>
    <svg
      width="1280"
      height="500"
      viewBox="0 0 1280 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0  w-full h-full"
    >
      <g>
        <g opacity="0.15" filter="url(#filter0_f_23839_20526)">
          <path
            d="M1280 400C1280 455.228 1235.23 500 1180 500L100 500C44.7717 500 0.000196921 455.228 0.000176318 400L7.28387e-05 122.613C4.92203e-05 59.3012 58.09 11.9245 120.108 24.6553L1200.11 246.353C1246.62 255.9 1280 296.833 1280 344.31L1280 400Z"
            fill="#BF0708"
            fillOpacity="0.6"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_23839_20526"
          x="-234"
          y="-211.423"
          width="1748"
          height="945.423"
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
            stdDeviation="117"
            result="effect1_foregroundBlur_23839_20526"
          />
        </filter>
      </defs>
    </svg>
  </>
);

const NexusSolutionBG = () => (
  <>
    <div className="w-full absolute inset-0 bg-[#FFFFFF0A]"></div>
    <svg
      width="1280"
      height="500"
      viewBox="0 0 1280 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0  w-full h-full"
    >
      <g>
        <g opacity="0.2" filter="url(#filter0_f_23841_20533)">
          <path
            d="M1280 460C1280 482.091 1262.09 500 1240 500L40.0003 500C17.9089 500 0.000265091 482.091 0.000256759 460L0.000101766 49.0451C9.22149e-05 23.7205 23.2361 4.76979 48.0434 9.86213L1248.04 256.193C1266.65 260.012 1280 276.385 1280 295.376L1280 460Z"
            fill="#0091FF"
            fillOpacity="0.6"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_23841_20533"
          x="-234"
          y="-224.969"
          width="1748"
          height="958.969"
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
            stdDeviation="117"
            result="effect1_foregroundBlur_23841_20533"
          />
        </filter>
      </defs>
    </svg>
  </>
);
// width="1352"
// className="absolute inset-0 right-[-219px] top-[-100px]"
// height="305"

const SoluutionSectionBG = () => (
  <svg
    width="1880"
    height="821"
    viewBox="0 0 1880 821"
    fill="none"
    className="absolute inset-0 right-[-483px] top-[-364px]"
  >
    <g opacity="0.15" filter="url(#filter0_f_23843_20534)">
      <path
        d="M264 340.635C264 298.311 298.31 264 340.635 264L1516 264C1571.23 264 1616 308.772 1616 364L1616 456.445C1616 516.34 1563.71 562.801 1504.23 555.749L331.613 416.736C293.049 412.164 264 379.469 264 340.635Z"
        fill="#0776FF"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_23843_20534"
        x="0"
        y="0"
        width="1880"
        height="820.458"
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
          stdDeviation="132"
          result="effect1_foregroundBlur_23843_20534"
        />
      </filter>
    </defs>
  </svg>
);

const GlowWrapper = () => (
  <div className="absolute inset-0 top-[-750px] w-[1200px] h-[885px] blur-[100px] flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1615"
      height="885"
      fill="none"
    >
      <g transform="translate(393.225 441.23)">
        <path
          d="M 709.535 45.812 C 661.655 145.66 597.19 234.93 523.928 302.82 C 450.666 370.72 371.744 414.34 296.7 428.42 C 221.657 442.5 153.703 426.42 101.051 382.14 C 48.398 337.86 13.301 267.27 0 178.9 L 119.786 92.7 C 129.051 154.26 153.497 203.43 190.172 234.27 C 226.846 265.11 274.178 276.31 326.449 266.5 C 378.72 256.7 433.692 226.31 484.722 179.02 C 535.752 131.73 580.656 69.548 614.005 0 Z"
          fill="rgb(145,213,255)"
        ></path>
      </g>
      <g transform="translate(789.483 11.16)">
        <path
          d="M 0 13.975 C 84.144 -11.306 174.913 -2.035 252.337 39.749 C 329.767 81.534 387.507 152.409 412.857 236.783 C 438.207 321.157 429.087 412.119 387.517 489.657 C 345.947 567.2 275.317 624.96 191.171 650.24 L 142.8 489.249 C 184.363 476.761 219.247 448.229 239.787 409.929 C 260.317 371.629 264.817 326.699 252.297 285.023 C 239.777 243.347 211.257 208.338 173.013 187.699 C 134.769 167.06 89.934 162.48 48.372 174.968 Z"
          fill="rgb(138,179,255)"
        ></path>
      </g>
    </svg>
  </div>
);
