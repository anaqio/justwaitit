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
    <main className="relative bg-background text-foreground selection:bg-aq-blue/20 page-entrance">
      <Header />
      <div className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <div className="snap-start">
          <HeroSection />
        </div>
        <div className="snap-start">
          <ProblemSection />
        </div>
        <div className="snap-start">
          <ProductPreviewSection />
        </div>
        <div className="snap-start">
          <DemoSection />
        </div>
        <div className="snap-start">
          <ComingSoonSection />
        </div>
        <div className="snap-start">
          <SocialProofSection />
        </div>
        <div className="snap-start">
          <WaitlistSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}