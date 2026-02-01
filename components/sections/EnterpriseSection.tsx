"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui";
import {
  ExecutiveIcon,
  BusinessIcon,
  EngineeringIcon,
  ComplianceIcon,
  EmpowerDepartmentsIcon,
  ROIIcon,
  DeployFasterIcon,
  ShipAgentsIcon,
  BuildAgentsIcon,
  OwnRoadmapIcon,
  EliminateInfrastructureIcon,
  EnterpriseSecurityIcon,
  DeployToEnvironmentIcon,
  SecurityBuiltInIcon,
  AuditTrailsIcon,
  GroundedAIIcon,
} from "@/components/icons";

// Dynamically import RiveAnimation with SSR disabled to avoid server-side rendering issues
const RiveAnimation = dynamic(() => import("@/components/ui").then(mod => ({ default: mod.RiveAnimation })), { ssr: false });

interface Feature {
  icon: ReactNode;
  text: string;
}

interface TabConfig {
  id: string;
  label: string;
  icon: ReactNode;
  animationUrl: string;
  artboard?: string;
  stateMachineName?: string;
  animationDuration: number; // Duration in milliseconds - should match the animation length
  stateMachineInput?: {
    name: string;
    value: boolean | number;
  };
  features: Feature[];
}

// Shared animation URL - using local file for better performance and reliability
const SHARED_ANIMATION_URL = "/enterprise-animations.riv";

const tabs: TabConfig[] = [
  {
    id: "executive",
    label: "EXECUTIVE TEAMS",
    icon: <ExecutiveIcon />,
    animationUrl: SHARED_ANIMATION_URL,
    artboard: "FOR C-SUITE", // Update with actual artboard name from your Rive file
    stateMachineName: "C-suite-animation",
    animationDuration: 8000, // Update with actual animation duration in milliseconds
    features: [
      {
        icon: <EmpowerDepartmentsIcon />,
        text: "Empower every department to solve their own challenges",
      },
      {
        icon: <ROIIcon />,
        text: "See measurable ROI within 2 weeks, not 2 years",
      },
      {
        icon: <DeployFasterIcon />,
        text: "Deploy 100x faster than custom solutions with 100x less cost",
      },
    ],
  },
  {
    id: "business",
    label: "FOR BUSINESS TEAMS",
    icon: <BusinessIcon />,
    animationUrl: SHARED_ANIMATION_URL,
    artboard: "FOR BUSINESS TEAM", // Update with actual artboard name from your Rive file
    stateMachineName: "Business-team-animation",
    animationDuration: 8000, // Update with actual animation duration in milliseconds
    features: [
      {
        icon: <ShipAgentsIcon />,
        text: "Ship production-ready agents in 3-5 days instead of 6-12 months",
      },
      {
        icon: <BuildAgentsIcon />,
        text: "Build complex agents without writing code or waiting for IT.",
      },
      {
        icon: <OwnRoadmapIcon />,
        text: "Own and evolve your AI roadmap independently.",
      },
    ],
  },
  {
    id: "engineering",
    label: "ENGINEERING TEAMS",
    icon: <EngineeringIcon />,
    animationUrl: SHARED_ANIMATION_URL,
    artboard: "ENGINEERING TEAMS", // Update with actual artboard name from your Rive file
    stateMachineName: "Engineering-team-animation",
    animationDuration: 8000, // Update with actual animation duration in milliseconds
    features: [
      {
        icon: <EliminateInfrastructureIcon />,
        text: "Eliminate 90% of infrastructure work that delays your AI initiatives",
      },
      {
        icon: <EnterpriseSecurityIcon />,
        text: "Enterprise-grade security (SOC 2, ISO 27001, ISO 42001, GDPR certified)",
      },
      {
        icon: <DeployToEnvironmentIcon />,
        text: "Deploy to your existing environment instantly: Office, Teams, Email, Phone, etc.",
      },
    ],
  },
  {
    id: "compliance",
    label: "FOR COMPLIANCE TEAMS",
    icon: <ComplianceIcon />,
    animationUrl: SHARED_ANIMATION_URL,
    artboard: "COMPLIANCE TEAMS", // Update with actual artboard name from your Rive file
    stateMachineName: "Compliance-teams-animation",
    animationDuration: 8000, // Update with actual animation duration in milliseconds
    features: [
      {
        icon: <SecurityBuiltInIcon />,
        text: "Built from the ground up with security in mind (SOC 2, ISO 42001, ISO 27001, GDPR-certified)",
      },
      {
        icon: <AuditTrailsIcon />,
        text: "Full audit trails and role-based access controls for every agent interaction",
      },
      {
        icon: <GroundedAIIcon />,
        text: "Grounded AI responses traced to source documents - no unverified outputs",
      },
    ],
  },
];

export default function EnterpriseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  const activeTabData = tabs[activeTab];
  const cycleDuration = activeTabData.animationDuration;

  // Auto-cycle logic
  useEffect(() => {
    // Clean up previous intervals
    if (intervalRef.current) clearTimeout(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    // Reset progress
    setProgress(0);
    isPausedRef.current = false;
    
    // Animate progress bar
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / cycleDuration) * 100, 100);
        setProgress(newProgress);
      }
    }, 16); // ~60fps

    // Cycle to next tab after duration
    intervalRef.current = setTimeout(() => {
      if (!isPausedRef.current) {
        setActiveTab((prev) => (prev + 1) % tabs.length);
      }
    }, cycleDuration);

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [activeTab, cycleDuration]);

  const handleTabClick = (index: number) => {
    // Clean up current intervals
    if (intervalRef.current) clearTimeout(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    // Reset and set new tab
    setProgress(0);
    setActiveTab(index);
    isPausedRef.current = false;
  };

  return (
    <section id="features" className="py-16 lg:py-24 px-8 lg:px-20 bg-nexus-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 mb-12 lg:mb-16">
          {/* Left: Title */}
          <div>
            <h2 className="text-2xl lg:text-5xl font-pp-fragment font-normal leading-[1.1] tracking-tight text-nexus-black">
              For the world&apos;s<br/>best enterprises
            </h2>
          </div>
          
          {/* Right: Description + CTA */}
          <div className="flex flex-col items-start lg:ml-auto w-full lg:w-[513px]">
            <p className="font-sans text-[#666666] text-base leading-relaxed mb-6 max-w-[500px]">
              Nexus enables your team to deploy 100x faster without involving your engineering team and with no compromise to security.            
            </p>
            <Button
              href="https://calendly.com/d/crcb-qfd-592"
              variant="primary"
              newTab
            >
              REQUEST A DEMO
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 w-full">
          <div className="flex items-end w-full overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(index)}
                className={`flex flex-col flex-1 min-w-0 items-start gap-2 lg:gap-3 whitespace-nowrap transition-colors pb-2 relative ${
                  activeTab === index
                    ? "text-nexus-black"
                    : "text-nexus-grey-medium"
                }`}
              >
                <div className="flex items-center pb-[29px] gap-1 sm:gap-2 lg:gap-3">
                  <div className={`flex-shrink-0 transition-colors duration-[3000ms] w-8 h-8 sm:w-10 sm:h-10 items-center justify-center flex flex-row ${activeTab === index ? "text-nexus-black bg-neutral-200" : "text-nexus-grey-medium bg-neutral-50"}`}>
                    {tab.icon}
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs lg:text-sm uppercase tracking-wide hidden sm:inline">
                    {tab.label}
                  </span>
                </div>
                
                {/* Underline for all tabs */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100`} />
                
                {/* Progress Bar - only show under active tab */}
                {activeTab === index && (
                  <div 
                    key={`progress-${activeTab}`}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent"
                  >
                    <div
                      className="h-full bg-nexus-orange transition-all duration-75 ease-linear"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            {/* Left Column: Rive Animation */}
            <div className="bg-[#f7f7f7] flex-1 flex items-center justify-center">
              <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[434px]">
                <RiveAnimation
                  key={activeTabData.id}
                  src={activeTabData.animationUrl}
                  className="w-full h-full"
                  artboard={activeTabData.artboard}
                  stateMachineName={activeTabData.stateMachineName}
                  inputName={activeTabData.stateMachineInput?.name}
                  inputValue={activeTabData.stateMachineInput?.value}
                />
              </div>
            </div>

            {/* Right Column: Feature Cards */}
            <div className="w-full lg:w-[400px] flex flex-col justify-center gap-4 lg:gap-8">
              {activeTabData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex h-auto min-h-[120px] lg:h-[134px] flex-col bg-[#f7f7f7] justify-center items-start gap-3 lg:gap-4 p-4"
                >
                  <div className="flex-shrink-0 bg-white p-2">
                    {feature.icon}
                  </div>
                  <p className="font-sans max-w-full lg:max-w-[370px] text-sm lg:text-base text-[#666666] leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
