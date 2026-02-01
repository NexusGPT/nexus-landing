"use client";

import { useReportWebVitals } from "next/web-vitals";

type Metric = {
  id: string;
  name: string;
  value: number;
  delta: number;
  entries: PerformanceEntry[];
  navigationType?: string;
  rating?: "good" | "needs-improvement" | "poor";
};

export function reportWebVitals(metric: Metric) {
  // Log warnings for poor Core Web Vitals scores
  if (metric.name === "CLS" && metric.value > 0.1) {
    console.warn("High CLS detected:", metric);
  }
  if (metric.name === "INP" && metric.value > 200) {
    console.warn("High INP detected:", metric);
  }
  if (metric.name === "LCP" && metric.value > 2500) {
    console.warn("High LCP detected:", metric);
  }

  // Optional: Send to analytics endpoint
  // In production, you might want to send this to your analytics service
  // fetch('/api/vitals', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(metric),
  // });
}

export default function WebVitals() {
  useReportWebVitals(reportWebVitals);

  return null;
}
