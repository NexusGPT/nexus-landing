"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Track if we're at the top of the page
      setIsAtTop(currentScrollY < 10);
      
      // Always show header when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Show header when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#use-case", label: "Use case" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-8 lg:px-20 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop ? "bg-transparent" : "backdrop-blur-[10px] bg-white/30"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/nexus-logo.svg"
              alt="Nexus"
              width={80}
              height={31}
              className="h-6 lg:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden ml-[22px] lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-nexus-black font-sans text-sm font-medium transition-opacity"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-nexus-black transition-all duration-500 [transition-timing-function:cubic-bezier(1,0.17,0.16,0.88)] group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden ml-auto lg:flex items-center gap-2 lg:gap-4">
            <Button variant="primary" href="https://calendly.com/d/crcb-qfd-592" className="!py-2.5">REQUEST A DEMO</Button>
            <Button variant="secondary-white" href="https://gpt.nexus/app" className="!py-2.5">SIGN IN</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-nexus-black transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-nexus-black transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-nexus-black transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 py-4 border-t border-nexus-grey-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-nexus-black font-sans text-sm font-medium hover:opacity-70 transition-opacity py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Button variant="primary" href="https://calendly.com/d/crcb-qfd-592" className="w-full">
                REQUEST A DEMO
              </Button>
              <Button variant="sign-in" href="https://gpt.nexus/app" className="w-full">
                SIGN IN
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
