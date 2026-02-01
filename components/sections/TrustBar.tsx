"use client";

import Image from "next/image";

export default function TrustBar() {
  const customerLogos = [
    { name: "Proximus", src: "/customers/proximus.avif", width: 123, height: 36 },
    { name: "Orange", src: "/customers/orange.avif", width: 49, height: 49 },
    { name: "Intys", src: "/customers/intys.avif", width: 71, height: 30},
    { name: "Monizze", src: "/customers/monizze.avif", width: 108, height: 18 },
    { name: "Telesign", src: "/customers/telesign.avif", width: 118, height: 24 },
    { name: "Lambda", src: "/customers/lambda.avif", width: 130, height: 30 },
    { name: "Dalberg", src: "/customers/dalberg.avif", width: 98, height: 29 },
    { name: "Waterland", src: "/customers/waterland.png", width: 204, height: 12 },
    { name: "D'Ieteren", src: "/customers/d'ieteren.avif", width: 127, height: 27 },
    { name: "Delivery Associate", src: "/customers/deliveryassociate.png", width: 128, height: 38 },
  ];

  // Duplicate logos for seamless infinite scroll (duplicate twice for smooth loop)
  const duplicatedLogos = [...customerLogos, ...customerLogos];

  return (
    <section id="use-case" className="pb-12 lg:pb-16">
      <div className="flex flex-col items-center gap-8 pb-16 max-w-[1440px] mx-auto px-8 lg:px-20">
        {/* Label */}
        <p className="text-[#666666] font-sans text-sm font-thin">
          Trusted by industry leaders
        </p>
      </div>

      {/* Auto-scrolling Logo Cloud - Full Width */}
      <div className="w-full overflow-hidden relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-64 bg-[linear-gradient(to_right,white_0%,white_30%,transparent_100%)] z-10 pointer-events-none"></div>
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-64 bg-[linear-gradient(to_left,white_0%,white_30%,transparent_100%)] z-10 pointer-events-none"></div>
        
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center py-2.5 gap-[64px] flex-shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] [&>img]:bg-transparent [&>canvas]:bg-transparent"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo - Nexus customer`}
                height={logo.height}
                width={logo.width}
                className="object-contain bg-transparent"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
