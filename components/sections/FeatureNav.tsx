"use client";

import { useState } from "react";

interface FeatureNavProps {
  features: string[];
  activeFeature: number;
  onFeatureChange: (index: number) => void;
}

export default function FeatureNav({
  features,
  activeFeature,
  onFeatureChange,
}: FeatureNavProps) {
  return (
    <nav className="flex items-center gap-4 overflow-x-auto pb-2">
      {features.map((feature, index) => (
        <button
          key={index}
          onClick={() => onFeatureChange(index)}
          className={`font-sans text-sm font-medium whitespace-nowrap transition-opacity ${
            activeFeature === index
              ? "text-nexus-black opacity-100"
              : "text-nexus-grey-medium opacity-60 hover:opacity-100"
          }`}
        >
          {feature}
        </button>
      ))}
    </nav>
  );
}
