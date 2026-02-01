import Image from "next/image";
import Link from "next/link";

function FooterLink({ href, children, newTab = false }: { href: string; children: React.ReactNode; newTab?: boolean }) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="group relative text-nexus-black font-sans text-sm transition-opacity w-fit"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-nexus-black transition-all duration-500 [transition-timing-function:cubic-bezier(1,0.17,0.16,0.88)] group-hover:w-full"></span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-nexus-white py-20 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16">
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
              <p className="font-mono text-xs uppercase tracking-wider text-nexus-black text-center lg:text-left">
                Certifications
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/compliance/iso27001.avif"
                  alt="ISO 27001 certification badge"
                  width={55}
                  height={55}
                  className="w-14 h-14 object-contain"
                />
                <Image
                  src="/compliance/iso42001.avif"
                  alt="ISO 42001 certification badge"
                  width={55}
                  height={55}
                  className="w-14 h-14 object-contain"
                />
                <Image
                  src="/compliance/soc2.avif"
                  alt="SOC 2 certification badge"
                  width={55}
                  height={55}
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Columns - Contact, Resources, Connect */}
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact - Desktop only */}
            <div className="hidden lg:flex flex-col gap-6">
              <p className="font-mono text-xs uppercase tracking-wider text-nexus-black text-center">
                Contact
              </p>
              <div className="flex flex-col gap-1 text-nexus-grey-medium font-sans text-sm leading-relaxed">
                <p className="font-semibold text-nexus-black">Nexus Enterprises, Inc.</p>
                <p>251 Little Falls Drive</p>
                <p>19808 Wilmington, Delaware</p>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-6">
              <p className="font-mono text-xs uppercase tracking-wider text-nexus-black text-center lg:text-left">
                Resources
              </p>
              <div className="flex flex-col gap-4">
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-and-conditions">Terms of Service</FooterLink>
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-6">
              <p className="font-mono text-xs uppercase tracking-wider text-nexus-black text-center lg:text-left">
                Connect
              </p>
              <div className="flex flex-col gap-4">
                <FooterLink href="https://www.linkedin.com/company/nexusgpt/" newTab>
                  LinkedIn
                </FooterLink>
                <FooterLink href="https://x.com/nexus_gpt" newTab>
                  X
                </FooterLink>
              </div>
            </div>

            {/* Contact - Mobile/Tablet only */}
            <div className="lg:hidden flex flex-col gap-1 text-nexus-grey-medium font-sans text-sm leading-relaxed">
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
