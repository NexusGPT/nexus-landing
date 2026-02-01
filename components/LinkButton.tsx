"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";

interface LinkButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  newTab?: boolean;
}

export default function LinkButton({
  children,
  href = "#",
  onClick,
  className = "",
  newTab = false,
}: LinkButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group flex flex-col items-center gap-0.5 pt-1.5 cursor-pointer text-decoration-none ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="font-sans text-sm font-normal text-nexus-black select-none whitespace-pre">
          {children}
        </span>
      </div>
      <div className="w-full h-px bg-nexus-grey-medium relative overflow-hidden">
        <div
          className={`h-full bg-nexus-grey-medium transition-all duration-500 ease-out ${
            isHovered ? "w-full" : "w-0"
          }`}
        />
      </div>
    </Link>
  );
}
