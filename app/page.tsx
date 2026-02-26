import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth relative bg-background text-foreground selection:bg-aq-blue/20 page-entrance">
      <Header />
      <div className="snap-section">
        <HeroSection />
      </div>
      <div className="snap-section">
        <ProblemSection />
      </div>
      <div className="snap-section">
        <ProductPreviewSection />
      </div>
      <div className="snap-section">
        <DemoSection />
      </div>
      <div className="snap-section">
        <ComingSoonSection />
      </div>
      <div className="snap-section">
        <SocialProofSection />
      </div>
      <div className="snap-section">
        <WaitlistSection />
      </div>
      <Footer />
    </main>
  );
}