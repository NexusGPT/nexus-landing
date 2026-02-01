"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary-white" | "sign-in";
  href?: string;
  onClick?: () => void;
  iconVisible?: boolean;
  className?: string;
  newTab?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  iconVisible = false,
  className = "",
  newTab = false,
}: ButtonProps) {
  const baseClasses = "font-mono text-[13px] uppercase tracking-wide px-4 md:px-6 py-2 md:py-3 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap border border-solid font-thin";
  
  const variantClasses = {
    primary: "bg-black text-white hover:bg-opacity-90 border-black",
    "secondary-white": "bg-white text-black border-black hover:bg-neutral-200",
    "sign-in": "bg-transparent text-nexus-black border-none hover:opacity-70",
  };

  const PlayIcon = () => (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M 0.5 12 C 0.224 12 0 11.776 0 11.5 L 0 0.5 C 0 0.323 0.093 0.16 0.246 0.07 C 0.398 -0.02 0.586 -0.023 0.741 0.062 L 10.741 5.562 C 10.901 5.65 11 5.818 11 6 C 11 6.182 10.901 6.35 10.741 6.438 L 0.741 11.938 C 0.667 11.979 0.584 12 0.5 12 Z M 1 1.345 L 1 10.655 L 9.462 6 Z"
        fill="rgb(10,10,10)"
      />
    </svg>
  );

  const content = (
    <>
      {iconVisible && (
        <div className="flex-shrink-0">
          <PlayIcon />
        </div>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
