"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-nexus-white flex items-center justify-center px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-pp-fragment font-normal text-nexus-black mb-6">
          Something went wrong
        </h1>
        <h2 className="text-3xl font-sans font-semibold text-nexus-black mb-4">
          An error occurred
        </h2>
        <p className="text-nexus-grey-medium font-sans text-base leading-relaxed mb-8">
          We're sorry, but something unexpected happened. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" onClick={reset}>
            Try Again
          </Button>
          <Button variant="secondary-white" href="/">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
