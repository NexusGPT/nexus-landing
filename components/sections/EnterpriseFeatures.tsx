"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui";

interface FeatureTab {
  id: string;
  label: string;
  image: string;
  description: string;
}

const featureTabs: FeatureTab[] = [
  {
    id: "technology-agnostic",
    label: "TECHNOLOGY AGNOSTIC",
    image: "/entreprise-features/agnostic.avif",
    description:
      "Connect any system, choose any AI model, integrate any tool. With 3,000+ plugins plus custom API support, your agents work with your entire tech stack. No vendor lock-in.",
  },
  {
    id: "intelligent-automation",
    label: "INTELLIGENT AUTOMATION",
    image: "/entreprise-features/automation.avif",
    description:
      "Agents make decisions, adapt to situations, and bring humans into the loop when needed. They start automatically on triggers, handle exceptions, and get smarter with use.",
  },
  {
    id: "universal-deployment",
    label: "UNIVERSAL DEPLOYMENT",
    image: "/entreprise-features/deployment.avif",
    description:
      "Generate real documents using your templates - proposals, presentations, reports. Deploy agents anywhere: Office apps, Teams, Slack, email, phone. They work in your tools, not just chat windows.",
  },
];

export default function EnterpriseFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress through the section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        -rect.top / (sectionHeight - viewportHeight)
      ));
      
      // Map progress to tab index
      const tabIndex = Math.min(
        featureTabs.length - 1, 
        Math.floor(scrollProgress * featureTabs.length)
      );
      
      setActiveTab(tabIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[200vh] sm:h-[250vh] lg:h-[300vh] bg-nexus-white"
    >
      <div className="sticky top-0 h-screen flex items-center px-8 lg:px-20 py-12 sm:py-16 lg:py-28">
        <div className="max-w-[1440px] mx-auto w-full">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-pp-fragment text-2xl sm:text-3xl lg:text-5xl font-normal text-nexus-black leading-tight mb-4 sm:mb-6">
            Enterprise power without
            <br />
            enterprise complexity
          </h2>
          <p className="font-sans text-sm sm:text-base max-w-[700px] mx-auto mb-6 sm:mb-8 text-nexus-grey-medium leading-normal">
            From zero to production in minutes. Works with every tool you already
            use. Grows with your business, not your headcount.
          </p>
          <Button
            href="https://calendly.com/d/crcb-qfd-592"
            variant="primary"
            newTab
          >
            REQUEST A DEMO
          </Button>
        </div>

        {/* Feature Display */}
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-12">
          {/* Left Navigation with line */}
          <div className="flex items-start gap-2 sm:gap-3 shrink-0 w-full lg:w-auto">
            {/* Navigation buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
              {featureTabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className="flex items-center justify-end text-right group"
                >
                  <span
                    className={`font-mono text-[10px] sm:text-xs lg:text-sm tracking-wider transition-colors duration-300 text-right ${
                      activeTab === index
                        ? "text-[#F5461A]"
                        : "text-nexus-black/50"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Line container - spans full image height */}
            <div className="relative w-0.5 h-[200px] sm:h-[250px] lg:h-[450px]">
              {/* Grey background line */}
              <div className="absolute inset-0 bg-nexus-black/10" />
              
              {/* Orange animated line */}
              <div
                className="absolute left-0 right-0 bg-[#F5461A] transition-all duration-500 ease-out h-4 sm:h-5"
                style={{
                  top: `calc(${activeTab} * (0.75rem + 1rem))`,
                }}
              ></div>
            </div>
          </div>

          {/* Center Image - fills space */}
          <div className="flex-1 relative min-h-[200px] sm:min-h-[250px] lg:min-h-[450px] w-full">
            {featureTabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`absolute inset-0 ${
                  activeTab === index
                    ? "opacity-100 translate-y-0 transition-all duration-500 ease-out"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <Image
                  src={tab.image}
                  alt={tab.label}
                  fill
                  className="object-contain object-left-top"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Right Description - Hidden on mobile, shown at bottom on tablet */}
          <div className="w-full lg:w-[375px] shrink-0 mt-4 lg:mt-0">
            {featureTabs.map((tab, index) => (
              <p
                key={tab.id}
                className={`font-sans text-nexus-grey-medium text-sm lg:text-base leading-relaxed ${
                  activeTab === index
                    ? "opacity-100 translate-y-0 transition-all duration-500 ease-out"
                    : "opacity-0 translate-y-4 absolute pointer-events-none"
                }`}
              >
                {tab.description}
              </p>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
