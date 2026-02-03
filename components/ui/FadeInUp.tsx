"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in seconds
  threshold?: number; // Intersection threshold (0-1)
  as?: ElementType; // HTML element to render
}

export default function FadeInUp({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  as: Component = "div",
}: FadeInUpProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`fade-in-up-on-scroll ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </Component>
  );
}
