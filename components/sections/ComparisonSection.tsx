"use client";

import Image from "next/image";
import { Button } from "@/components/ui";

// Row labels for the comparison
const rowLabels = ["FLEXIBILITY", "CONTROL", "SPEED", "COST"];

// Column data structure
const columns = [
  {
    id: "ai-tools",
    title: "Off-the-shelf AI tool",
    logos: [
      { src: "/competitors/openai.avif", alt: "OpenAI" },
      { src: "/competitors/copilot.avif", alt: "Copilot" },
      { src: "/competitors/dust.avif", alt: "Dust" },
      { src: "/competitors/stackai.avif", alt: "StackAI" },
      { src: "/competitors/wordware.svg", alt: "Wordware" },
    ],
    isPositive: false,
    items: [
      "Locked into vendor's ecosystem",
      "Vendor gatekeeps every modification",
      "Depends on vendor's roadmap",
      "Per-user pricing explodes at scale",
    ],
  },
  {
    id: "rpa",
    title: "RPA solution",
    logos: [
      { src: "/competitors/uipath.avif", alt: "UiPath" },
      { src: "/competitors/a.avif", alt: "Automation Anywhere" },
      { src: "/competitors/make.avif", alt: "Make" },
      { src: "/competitors/n8n.avif", alt: "n8n" },
    ],
    isPositive: false,
    items: [
      "Breaks when processes change",
      "Technical team bottlenecked for progress",
      "Months to reach production",
      "Specialist fees for customization",
    ],
  },
  {
    id: "custom",
    title: "Custom development",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
        <path
          d="M11.4993 12.1667H12.9993M2.49935 11.1667V3.83333C2.49935 3.09695 3.0963 2.5 3.83268 2.5H12.166C12.9024 2.5 13.4993 3.09695 13.4993 3.83333V5.83333M2.49935 11.1667H1.16602V12.1667C1.16602 12.9031 1.76297 13.5 2.49935 13.5H9.49935M2.49935 11.1667H9.49935M13.4993 5.83333H10.8327C10.0963 5.83333 9.49935 6.43029 9.49935 7.16667V12.8333C9.49935 13.5697 10.0963 14.1667 10.8327 14.1667H13.4993C14.2357 14.1667 14.8327 13.5697 14.8327 12.8333V7.16667C14.8327 6.43029 14.2357 5.83333 13.4993 5.83333Z"
          stroke="#171717"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isPositive: false,
    items: [
      "Requires development for every change",
      "Developer team holds all keys",
      "Minimum 6 to 12 month project",
      "Agents adapt, scripts break",
    ],
  },
  {
    id: "nexus",
    title: "Nexus AI Agents",
    logo: "/nexus-logo-small.svg",
    isPositive: true,
    items: [
      "Ecosystem agnostic and adaptable",
      "Business teams own deployment",
      "Agents live in days to weeks",
      "Full team plus infrastructure costs",
    ],
  },
];

// X icon for negative items
const XIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1"
  >
    <path
      d="M1 1L9 9M9 1L1 9"
      stroke="#EF4444"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// Checkmark icon for positive items
const CheckIcon = () => (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1"
  >
    <path
      d="M1 5L4.5 8.5L11 1.5"
      stroke="#3B82F6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 px-8 lg:px-20 bg-nexus-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-24">
          <h2 className="font-pp-fragment text-3xl sm:text-4xl lg:text-5xl font-normal text-nexus-black leading-tight mb-8">
            Why leaders choose Nexus
            <br />
            over other solutions
          </h2>
          <Button
            href="https://calendly.com/d/crcb-qfd-592"
            variant="primary"
            newTab
          >
            REQUEST A DEMO
          </Button>
        </div>

        {/* Mobile Comparison Cards - Show on screens below lg */}
        <div className="lg:hidden flex flex-col gap-6">
          {/* Nexus Card - Featured at top on mobile */}
          <div 
            className="rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/nexus-col.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 relative">
                  <Image
                    src={columns[3].logo!}
                    alt="Nexus"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-sans text-lg font-medium text-nexus-black">
                  {columns[3].title}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {columns[3].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-sans text-sm text-nexus-black leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Competitor Cards */}
          {columns.slice(0, 3).map((column) => (
            <div key={column.id} className="bg-neutral-50 rounded-lg overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  {column.id === "ai-tools" || column.id === "rpa" ? (
                    <div className="flex items-center gap-2">
                      {column.logos?.slice(0, 3).map((logo, idx) => (
                        <div key={idx} className="w-5 h-5 relative">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                      <span className="font-mono text-[10px] text-nexus-grey-medium">
                        +{(column.logos?.length || 0) - 3}
                      </span>
                    </div>
                  ) : (
                    <div className="text-nexus-black">{column.icon}</div>
                  )}
                </div>
                <h3 className="font-sans text-lg font-medium text-nexus-black mb-4">
                  {column.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {column.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <XIcon />
                      <span className="font-sans text-sm text-nexus-grey-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Comparison Grid - Hidden on mobile */}
        <div className="hidden lg:block w-full overflow-x-auto">
          <div className="min-w-[1000px]">
            {/* Grid Layout */}
            <div className="grid grid-cols-[140px_1fr_1fr_1fr_1fr] gap-x-3">
              {/* Column 0: Row Labels */}
              <div className="flex flex-col pt-[104px] mt-4">
                {rowLabels.map((label) => (
                  <div key={label} className="h-[56px] flex items-center pr-4">
                    <span className="font-mono flex-1 mr-2 text-right text-[10px] tracking-widest text-nexus-black font-medium">
                      {label}
                    </span>
                    <div className="flex gap-[2px]">
                      <div className="w-[1px] h-3 bg-neutral-300" />
                      <div className="w-[1px] h-3 bg-neutral-300" />
                      <div className="w-[1px] h-3 bg-neutral-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Columns 1-3: Competitors */}
              {columns.slice(0, 3).map((column) => (
                <div key={column.id} className="flex flex-col">
                  {/* Header */}
                  <div className="h-[104px] flex relative flex-col justify-end mb-4 pb-4">
                    <div className="border-b h-px w-12 border-[rgba(55,65,81,0.4)] absolute bottom-0 left-0 right-0"></div>
                    <div className="flex items-center gap-2 mb-4 h-6">
                      {column.id === "ai-tools" || column.id === "rpa" ? (
                        <>
                          <div className="flex items-center gap-2">
                            {column.logos?.map((logo, idx) => (
                              <div key={idx} className="w-5 h-5 relative">
                                <Image
                                  src={logo.src}
                                  alt={logo.alt}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            ))}
                          </div>
                          <span className="font-mono text-[10px] text-nexus-grey-medium whitespace-nowrap">
                            & MORE
                          </span>
                        </>
                      ) : (
                        <div className="text-nexus-black">{column.icon}</div>
                      )}
                    </div>
                    <h3 className="font-sans text-lg font-normal text-nexus-black leading-tight">
                      {column.title}
                    </h3>
                  </div>

                  {/* Items */}
                  {column.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="h-[56px] bg-neutral-50 flex items-center gap-3 p-3 border-b border-neutral-200 last:border-0"
                    >
                      <XIcon />
                      <span className="font-sans text-[13px] text-nexus-grey-medium leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Column 4: Nexus */}
              <div 
                className="flex flex-col relative rounded-sm"
                style={{
                  backgroundImage: "url('/nexus-col.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Header */}
                <div className="h-[104px] flex flex-col justify-end pb-4 border-b border-blue-100/30 pl-6">
                  <div className="w-5 h-5 relative mb-4">
                    <Image
                      src={columns[3].logo!}
                      alt="Nexus"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-sans text-lg font-normal text-nexus-black leading-tight">
                    {columns[3].title}
                  </h3>
                </div>

                {/* Items */}
                {columns[3].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="h-[56px] flex items-center gap-3 pl-6 border-b border-blue-100/30 last:border-0"
                  >
                    <CheckIcon />
                    <span className="font-sans text-[13px] text-nexus-black leading-tight pt-[2px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
