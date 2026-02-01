"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
  className = "",
}: ProgressBarProps) {
  return (
    <div className={`flex gap-0 h-0.5 bg-nexus-grey-medium relative ${className}`}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-full transition-all duration-300 ${
            index < currentStep ? "bg-nexus-orange" : "bg-transparent"
          }`}
          style={{
            width: `${100 / totalSteps}%`,
          }}
        />
      ))}
    </div>
  );
}
