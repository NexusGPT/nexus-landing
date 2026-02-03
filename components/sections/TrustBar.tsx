"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/ui";

export default function TrustBar() {
  const customerLogos = [
    { name: "Proximus", src: "/customers/proximus.avif", width: 123, height: 36, url: "https://www.proximus.com" },
    { name: "Orange", src: "/customers/orange.avif", width: 49, height: 49, url: "https://www.orange.com/en" },
    { name: "Intys", src: "/customers/intys.avif", width: 71, height: 30, url: "https://www.intys.eu" },
    { name: "Monizze", src: "/customers/monizze.avif", width: 108, height: 18, url: "https://www.monizze.be" },
    { name: "Telesign", src: "/customers/telesign.avif", width: 118, height: 24, url: "https://telesign.com" },
    { name: "Lambda", src: "/customers/lambda.avif", width: 130, height: 30, url: "https://lambdalabs.com" },
    { name: "Dalberg", src: "/customers/dalberg.avif", width: 98, height: 29, url: "https://dalberg.com" },
    { name: "Waterland", src: "/customers/waterland.png", width: 204, height: 12 },
    { name: "D'Ieteren", src: "/customers/d'ieteren.avif", width: 127, height: 27, url: "https://www.dieterengroup.com" },
    { name: "Delivery Associate", src: "/customers/deliveryassociate.png", width: 128, height: 38, url: "https://www.deliveryassociates.com" },
  ];

  // Duplicate logos for seamless infinite scroll (duplicate twice for smooth loop)
  const duplicatedLogos = [...customerLogos, ...customerLogos];

  return (
    <section id="use-case" className="pb-12 lg:pb-16">
      <FadeInUp className="flex flex-col items-center gap-8 pb-16 max-w-[1440px] mx-auto px-8 lg:px-20">
        {/* Label */}
        <p className="text-[#666666] font-sans text-sm font-thin">
          Trusted by industry leaders
        </p>
      </FadeInUp>

      {/* Auto-scrolling Logo Cloud - Full Width */}
      <div className="w-full overflow-hidden relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-64 bg-[linear-gradient(to_right,white_0%,white_30%,transparent_100%)] z-10 pointer-events-none"></div>
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-64 bg-[linear-gradient(to_left,white_0%,white_30%,transparent_100%)] z-10 pointer-events-none"></div>
        
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 animate-scroll">
          {duplicatedLogos.map((logo, index) => {
            const logoElement = (
              <Image
                src={logo.src}
                alt={`${logo.name} logo - Nexus customer`}
                height={logo.height}
                width={logo.width}
                className="object-contain bg-transparent"
              />
            );
            
            const containerClassName = "flex items-center justify-center py-2.5 gap-[64px] flex-shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] [&>img]:bg-transparent [&>canvas]:bg-transparent";
            
            return logo.url ? (
              <Link
                key={`${logo.name}-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={containerClassName}
              >
                {logoElement}
              </Link>
            ) : (
              <div
                key={`${logo.name}-${index}`}
                className={containerClassName}
              >
                {logoElement}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
