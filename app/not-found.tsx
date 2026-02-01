import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-nexus-white flex items-center justify-center px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-pp-fragment font-normal text-nexus-black mb-6">
          404
        </h1>
        <h2 className="text-3xl font-sans font-semibold text-nexus-black mb-4">
          Page Not Found
        </h2>
        <p className="text-nexus-grey-medium font-sans text-base leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/">
            Go Home
          </Button>
          <Button variant="secondary-white" href="/#use-case">
            View Use Cases
          </Button>
        </div>
      </div>
    </div>
  );
}
