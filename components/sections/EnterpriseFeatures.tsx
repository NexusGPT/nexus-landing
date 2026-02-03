"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button, FadeInUp } from "@/components/ui";

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
  const [indicatorTop, setIndicatorTop] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Update line height to match tabs container on mobile, image container on desktop
  useEffect(() => {
    const updateLineHeight = () => {
      const tabsContainer = tabsContainerRef.current;
      const lineContainer = lineContainerRef.current;
      const imageContainer = imageContainerRef.current;
      
      if (!lineContainer) return;
      
      if (window.innerWidth < 1024) {
        // Mobile: match tabs height
        if (tabsContainer) {
          const tabsHeight = tabsContainer.offsetHeight;
          lineContainer.style.height = `${tabsHeight}px`;
        }
      } else {
        // Desktop: match image container height
        if (imageContainer) {
          const imageHeight = imageContainer.offsetHeight;
          lineContainer.style.height = `${imageHeight}px`;
        }
      }
    };

    // Update on mount and resize
    updateLineHeight();
    window.addEventListener('resize', updateLineHeight);
    
    // Also update when images load (in case they affect container height)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('load', updateLineHeight);
    });
    
    return () => {
      window.removeEventListener('resize', updateLineHeight);
      images.forEach(img => {
        img.removeEventListener('load', updateLineHeight);
      });
    };
  }, [activeTab]);

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

  // Calculate indicator position based on active tab's position
  useEffect(() => {
    const updateIndicatorPosition = () => {
      const activeTabElement = tabRefs.current[activeTab];
      const lineContainer = lineContainerRef.current;
      
      if (!activeTabElement || !lineContainer) return;
      
      // Get the common parent container (the flex container holding both tabs and line)
      const parentContainer = activeTabElement.closest('.flex.items-start');
      if (!parentContainer) return;
      
      const tabRect = activeTabElement.getBoundingClientRect();
      const parentRect = (parentContainer as HTMLElement).getBoundingClientRect();
      const containerRect = lineContainer.getBoundingClientRect();
      
      // Calculate the center of the tab text relative to the parent container
      const tabCenterRelativeToParent = tabRect.top + tabRect.height / 2 - parentRect.top;
      
      // The line container starts at the same top as the parent (items-start alignment)
      // So we can use the tab's position relative to parent directly
      const relativePosition = tabCenterRelativeToParent;
      
      // Subtract half the indicator height to center it on the text
      const indicatorHeight = window.innerWidth >= 1024 ? 20 : window.innerWidth >= 640 ? 20 : 16; // h-4 = 16px, h-5 = 20px
      setIndicatorTop(relativePosition - indicatorHeight / 2);
    };

    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(() => {
      updateIndicatorPosition();
    });
    
    window.addEventListener('resize', updateIndicatorPosition);
    
    return () => window.removeEventListener('resize', updateIndicatorPosition);
  }, [activeTab]);

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="relative h-[200vh] sm:h-[250vh] lg:h-[300vh] bg-nexus-white"
    >
      <div className="sticky top-0 min-h-screen flex items-center px-8 lg:px-20 py-12 sm:py-16 lg:py-28">
        <div className="max-w-[1440px] mx-auto w-full">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-8 sm:mb-12 lg:mb-16">
          <FadeInUp>
            <h2 className="font-pp-fragment text-2xl sm:text-3xl lg:text-5xl font-normal text-nexus-black leading-tight mb-4 sm:mb-6">
              Enterprise power without
              <br />
              enterprise complexity
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="font-sans text-sm sm:text-base max-w-[700px] mx-auto mb-6 sm:mb-8 text-nexus-grey-medium leading-normal">
              From zero to production in minutes. Works with every tool you already
              use. Grows with your business, not your headcount.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <Button
              href="https://calendly.com/d/crcb-qfd-592"
              variant="primary"
              newTab
              className="mt-4"
            >
              REQUEST A DEMO
            </Button>
          </FadeInUp>
        </div>

        {/* Feature Display */}
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-12 relative">
          {/* Left Navigation with line */}
          <div className="flex items-start gap-2 sm:gap-3 shrink-0 w-full lg:w-auto">
            {/* Line container - spans full image height on desktop, matches tabs height on mobile */}
            <div ref={lineContainerRef} className="relative w-0.5 h-[200px] sm:h-[250px] order-1 lg:order-2">
              {/* Grey background line */}
              <div className="absolute inset-0 bg-nexus-black/10" />
              
              {/* Orange animated line */}
              <div
                className="absolute left-0 right-0 bg-[#F5461A] transition-all duration-500 ease-out h-4 sm:h-5"
                style={{
                  top: `${indicatorTop}px`,
                }}
              ></div>
            </div>
            
            {/* Navigation buttons */}
            <div ref={tabsContainerRef} className="flex flex-col gap-3 sm:gap-4 lg:gap-6 order-2 lg:order-1">
              {featureTabs.map((tab, index) => (
                <div
                  key={tab.id}
                  ref={(el) => { tabRefs.current[index] = el; }}
                  className="flex items-center justify-start lg:justify-end text-left lg:text-right group"
                >
                  <span
                    className={`font-mono text-[10px] sm:text-xs lg:text-sm tracking-wider transition-colors duration-300 text-left lg:text-right ${
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
          </div>

          {/* Center Image - full width on mobile, fills space on desktop */}
          <div ref={imageContainerRef} className="flex-1 relative aspect-[4/3] lg:aspect-auto lg:min-h-[450px] absolute lg:relative left-[calc(50%-50vw)] lg:left-auto w-screen lg:w-auto min-w-0">
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
                  className="object-contain object-center lg:object-left-top"
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
