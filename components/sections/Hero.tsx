"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button, FadeInUp } from "@/components/ui";
import HeroBackground from "./HeroBackground";


// Lazy load UnicornScene to improve LCP - it's a heavy WebGL component
const UnicornScene = dynamic(
  () => import("unicornstudio-react").then((mod) => mod.UnicornScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-transparent flex items-center justify-center">
        <Image
          src="/unicorm-snapshot.png"
          alt="Nexus AI Agent Platform"
          width={574}
          height={844}
          className="w-full h-full object-contain opacity-70"
          priority
        />
      </div>
    ),
  }
);

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Check if mobile on initial render (client-side only)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false; // Default to desktop for SSR
  });
  const [isSceneLoaded, setIsSceneLoaded] = useState(false);
  // Always start with loading screen visible on desktop
  const [showLoadingScreen, setShowLoadingScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024; // Show on desktop
    }
    return true; // Default to showing for SSR
  });
  const [loadingProgress, setLoadingProgress] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const minDisplayTimeRef = useRef(false);
  const startTimeRef = useRef<number>(Date.now());
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // If switching to mobile, hide loading screen immediately
      if (mobile) {
        setIsSceneLoaded(true);
        setShowLoadingScreen(false);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Animate loading progress bar
  useEffect(() => {
    if (isMobile) {
      setShowLoadingScreen(false);
      setLoadingProgress(0);
      return;
    }

    // Reset progress when starting
    setLoadingProgress(0);

    // Start progress animation
    let progress = 0;
    const updateProgress = () => {
      if (!isSceneLoaded && progress < 90) {
        progress += Math.random() * 15 + 5; // Increment by 5-20%
        if (progress > 90) progress = 90; // Cap at 90% until scene loads
        setLoadingProgress(progress);
        if (!isSceneLoaded) {
          progressIntervalRef.current = setTimeout(updateProgress, 200 + Math.random() * 300);
        }
      }
    };

    // Start the progress animation
    progressIntervalRef.current = setTimeout(updateProgress, 100);

    return () => {
      if (progressIntervalRef.current) {
        clearTimeout(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [isMobile, isSceneLoaded]);

  // Ensure minimum display time for loading screen (desktop only)
  useEffect(() => {
    if (isMobile) {
      setShowLoadingScreen(false);
      return;
    }
    
    startTimeRef.current = Date.now();
    
    // Set minimum display time to 1200ms so users can see it
    const minDisplayTimer = setTimeout(() => {
      minDisplayTimeRef.current = true;
      // If scene is already loaded, hide the loading screen now
      if (isSceneLoaded) {
        setTimeout(() => {
          setShowLoadingScreen(false);
        }, 400);
      }
    }, 1200);

    return () => clearTimeout(minDisplayTimer);
  }, [isMobile]);

  // Detect when UnicornScene is loaded (desktop only)
  useEffect(() => {
    if (isMobile) {
      // On mobile, we use static image so no loading needed
      setIsSceneLoaded(true);
      setShowLoadingScreen(false);
      return;
    }

    let observer: MutationObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // Check if scene is loaded
    const checkIfLoaded = (): boolean => {
      if (sceneRef.current) {
        const hasCanvas = sceneRef.current.querySelector("canvas");
        const hasIframe = sceneRef.current.querySelector("iframe");
        
        // UnicornScene typically renders a canvas or iframe when loaded
        if (hasCanvas || hasIframe) {
          // Quickly complete the loading bar
          setLoadingProgress(100);
          setIsSceneLoaded(true);
          // Wait for minimum display time before hiding
          const hideLoading = () => {
            const elapsed = Date.now() - startTimeRef.current;
            if (minDisplayTimeRef.current || elapsed >= 1200) {
              setTimeout(() => {
                setShowLoadingScreen(false);
              }, 400);
            } else {
              // Check again after minimum time
              setTimeout(hideLoading, 100);
            }
          };
          hideLoading();
          return true;
        }
      }
      return false;
    };

    // Wait for ref to be available, then check
    const setupObserver = () => {
      if (!sceneRef.current) {
        timeoutId = setTimeout(setupObserver, 50);
        return;
      }

      // Do initial check
      if (checkIfLoaded()) {
        return;
      }

      // Set up MutationObserver to watch for changes
      observer = new MutationObserver(() => {
        if (checkIfLoaded() && observer) {
          observer.disconnect();
        }
      });

      observer.observe(sceneRef.current, {
        childList: true,
        subtree: true,
      });

      // Fallback: mark as loaded after max 5 seconds to prevent infinite loading
      timeoutId = setTimeout(() => {
        setLoadingProgress(100);
        setIsSceneLoaded(true);
        const hideLoading = () => {
          const elapsed = Date.now() - startTimeRef.current;
          if (minDisplayTimeRef.current || elapsed >= 1200) {
            setTimeout(() => {
              setShowLoadingScreen(false);
            }, 400);
          } else {
            setTimeout(hideLoading, 100);
          }
        };
        hideLoading();
        if (observer) observer.disconnect();
      }, 5000);
    };

    // Small delay to ensure loading screen renders first
    const initTimer = setTimeout(() => {
      setupObserver();
    }, 100);

    return () => {
      if (observer) observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      clearTimeout(initTimer);
    };
  }, [isMobile]);
  return (
    <div className="relative w-full h-auto min-h-[700px] sm:min-h-[700px] overflow-hidden">
      {/* Loading Screen - Shows Nexus logo while UnicornScene loads (desktop only) */}
      {showLoadingScreen && (
        <div 
          className={`fixed inset-0 z-[9999] bg-nexus-white flex flex-col items-center justify-center transition-opacity duration-500 ${
            isSceneLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          } ${isMobile ? 'hidden' : ''}`}
          aria-hidden="true"
        >
          {/* Hero Background */}
          <div className="absolute inset-0 overflow-hidden">
            <HeroBackground />
          </div>
          {/* Logo and Progress Bar */}
          <div className="relative z-10 mb-20 flex flex-col items-center gap-4">
            <Image
              src="/nexus-logo.svg"
              alt="Nexus"
              width={120}
              height={46}
              className="h-12 w-auto animate-pulse"
              priority
            />
            {/* Progress Bar under Logo */}
            <div className="w-48 h-1 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[rgb(245,70,26)] transition-all ease-out rounded-full"
                style={{
                  width: `${loadingProgress}%`,
                  transitionDuration: isSceneLoaded ? '0.3s' : '0.2s',
                }}
              />
            </div>
          </div>
          {/* Loading Bar at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent z-10">
            <div
              className="h-full bg-[rgb(245,70,26)] transition-all ease-out"
              style={{
                width: `${loadingProgress}%`,
                transitionDuration: isSceneLoaded ? '0.3s' : '0.2s',
              }}
            />
          </div>
        </div>
      )}
      {/* Blend Mode Example - Small demo at top */}
      <HeroBackground />
      <section className="flex items-center min-h-[700px] sm:min-h-[700px] lg:min-h-[800px] px-6 sm:px-8 lg:px-20 relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12 lg:py-0">
        <div className="max-w-[1440px] mx-auto w-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative w-full">
          {/* Left Column - Content */}
          <div className="col-span-1 z-10 lg:col-span-7 flex flex-col">
            {/* Y Combinator Badge */}
            <FadeInUp>
              <div className="flex items-center gap-2">
                <span className="text-nexus-black font-sans text-xs sm:text-sm font-medium">
                  Backed by
                </span>
                <Image
                  src="/backed-by-yc.png"
                  alt="Y Combinator"
                  width={120}
                  height={20}
                  className="h-4 sm:h-5 w-auto"
                  priority
                />
              </div>
            </FadeInUp>
            {/* Main Headline */}
            <FadeInUp delay={0.1}>
              <h1
                className="text-5xl sm:text-5xl lg:text-5xl xl:text-[90px] mt-3 sm:mt-4 font-pp-fragment font-normal leading-[1.1] tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(353deg, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.18) 125%)",
                }}
              >
                Business-Led Enterprise AI
              </h1>
            </FadeInUp>


            {/* Sub-headline */}
            <FadeInUp delay={0.2}>
              <p className="font-sans font-normal mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-base text-nexus-black leading-relaxed max-w-[600px]">
                The only enterprise platform where business teams transform<br className="hidden sm:block"/> their
                workflows into autonomous agents in days, not months.
              </p>
            </FadeInUp>

            {/* Feature List */}
            <FadeInUp delay={0.3}>
              <div className="flex items-start gap-2 sm:gap-3 mt-6 sm:mt-8">
                <div className="flex-shrink-0 mt-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="9"
                    fill="none"
                    overflow="visible"
                    className="w-6 sm:w-[30px]"
                  >
                    <path
                      d="M 30 9 L 0 9 L 0 0"
                      fill="transparent"
                      stroke="rgb(245, 70, 26)"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                    ></path>
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-sans font-medium text-nexus-black">
                  Secure. Reliable. Flexible.
                </span>
              </div>
            </FadeInUp>

            {/* CTA Buttons */}
            <FadeInUp delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 mt-6 sm:mt-8 lg:mt-10">
                <Button
                  variant="primary"
                  href="https://calendly.com/d/crcb-qfd-592"
                  newTab
                  className="!py-3 sm:!py-4 w-full sm:w-auto"
                >
                  REQUEST A DEMO
                </Button>
                <Button 
                  variant="secondary-white" 
                  iconVisible 
                  className="!py-3 sm:!py-4 w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  WATCH INTRO
                </Button>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column - Unicorn Studio Animation */}
          <div className="absolute right-[-50%] sm:right-[-20%] md:right-auto lg:relative lg:right-auto lg:top-auto  col-span-5 bg-transparent lg:w-[574px] lg:h-[844px] w-[574px] h-[844px] flex items-center justify-center lg:mt-0">
            <div
              ref={sceneRef}
              className="bg-transparent  w-full h-full"
              style={{ mixBlendMode: "multiply", position: "relative" }}
              aria-label="Nexus AI Agent Platform"
              role="img"
            >
              {isMobile ? (
                <Image
                  src="/unicorm-snapshot.png"
                  alt="Nexus AI Agent Platform"
                  width={574}
                  height={844}
                  className="w-full h-full object-contain opacity-70"
                  priority
                />
              ) : (
                <UnicornScene
                  projectId="QQW1WZgKv5zd6v6RC22m"
                  className="opacity-70  w-full h-full"
                  placeholder={<Image src="/unicorm-snapshot.png" alt="Nexus AI Agent Platform" width={574} height={844} className="w-full h-full object-contain opacity-70" priority />}
                  showPlaceholderWhileLoading={true}
                  showPlaceholderOnError={true}
                  lazyLoad={true}
                />
              )}
            </div> 
          </div>
        </div>
      </div>
      </section>
      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none h-[300px] lg:h-[489px]"
        style={{
          background:
            "linear-gradient(to top, white 0%, white 30%, transparent 100%)",
        }}
      />

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors"
              aria-label="Close video"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Video Iframe */}
            <iframe
              src="https://player.mux.com/J9G6C2HHQ4Z76rc9xG02ntrD6rOIXs4FRRnHCQWiThj4?metadata-video-title=Nexus+-+Demo&video-title=Nexus+-+Demo"
              style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
