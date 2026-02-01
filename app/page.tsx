import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnterpriseSection from "@/components/EnterpriseSection";
import SolutionSection from "@/components/SolutionSection";
import TrustBar from "@/components/TrustBar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-nexus-white">
      <Header />
      <Hero />
      <TrustBar />
      <EnterpriseSection />
      <SolutionSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
