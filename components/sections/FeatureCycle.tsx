"use client";

import { useState, ReactNode } from "react";
import FeatureNav from "./FeatureNav";

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface FeatureCycleProps {
  features: Feature[];
}

export default function FeatureCycle({ features }: FeatureCycleProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  const featureTitles = features.map((f) => f.title);

  return (
    <section id="features" className="py-20 lg:py-28 px-8 lg:px-20 bg-nexus-grey-light">
      <div className="max-w-[1440px] mx-auto">
        {/* Feature Navigation */}
        <div className="mb-12 lg:mb-16">
          <FeatureNav
            features={featureTitles}
            activeFeature={activeFeature}
            onFeatureChange={setActiveFeature}
          />
        </div>

        {/* Feature Content */}
        <div className="bg-nexus-white p-8 lg:p-12 rounded-lg">
          {features[activeFeature] && (
            <div className="flex flex-col gap-6">
              {features[activeFeature].icon && (
                <div className="w-12 h-12">{features[activeFeature].icon}</div>
              )}
              <h3 className="font-serif text-3xl lg:text-4xl font-normal text-nexus-black">
                {features[activeFeature].title}
              </h3>
              <p className="font-sans text-base lg:text-lg text-nexus-grey-medium leading-relaxed">
                {features[activeFeature].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
