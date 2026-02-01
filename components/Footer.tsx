import Image from "next/image";
import Link from "next/link";
import LinkButton from "./LinkButton";

export default function Footer() {
  return (
    <footer className="bg-nexus-white py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-16 md:gap-20">
          {/* Left Column - Logo and Certifications */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/nexus-logo.svg"
                alt="Nexus"
                width={80}
                height={31}
                className="h-8 w-auto"
              />
            </Link>
            
            <div className="flex flex-col gap-6">
              <p className="font-sans text-sm font-semibold text-nexus-black text-center md:text-left">
                Certifications
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/compliance/iso27001.avif"
                  alt="ISO 27001"
                  width={55}
                  height={55}
                  className="w-14 h-14 object-contain"
                  unoptimized
                />
                <Image
                  src="/compliance/iso42001.avif"
                  alt="ISO 42001"
                  width={55}
                  height={55}
                  className="w-14 h-14 object-contain"
                  unoptimized
                />
                <Image
                  src="/compliance/soc2.avif"
                  alt="SOC 2"
                  width={55}
                  height={55}
                  className="w-14 h-14 object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Right Columns - Contact, Resources, Connect */}
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            {/* Contact - Desktop only */}
            <div className="hidden md:flex flex-col gap-8">
              <p className="font-sans text-sm font-semibold text-nexus-black text-center">
                Contact
              </p>
              <div className="flex flex-col gap-1 text-nexus-grey-medium font-sans text-sm leading-relaxed">
                <p className="font-semibold text-nexus-black">Nexus Enterprises, Inc.</p>
                <p>251 Little Falls Drive</p>
                <p>19808 Wilmington, Delaware</p>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-8">
              <p className="font-sans text-sm font-semibold text-nexus-black text-center md:text-left">
                Resources
              </p>
              <div className="flex flex-col gap-7">
                <LinkButton href="/privacy-policy">Privacy Policy</LinkButton>
                <LinkButton href="/terms-and-conditions">Terms of Service</LinkButton>
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-8">
              <p className="font-sans text-sm font-semibold text-nexus-black text-center md:text-left">
                Connect
              </p>
              <div className="flex flex-col gap-7">
                <LinkButton href="https://www.linkedin.com/company/nexusgpt/" newTab>
                  LinkedIn
                </LinkButton>
                <LinkButton href="https://x.com/nexus_gpt" newTab>
                  X
                </LinkButton>
              </div>
            </div>

            {/* Contact - Mobile/Tablet only */}
            <div className="md:hidden flex flex-col gap-1 text-nexus-grey-medium font-sans text-sm leading-relaxed">
              <p className="font-semibold text-nexus-black">Nexus Enterprises, Inc.</p>
              <p>251 Little Falls Drive</p>
              <p>19808 Wilmington, Delaware</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
