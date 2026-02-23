import { HeroSection } from "@/components/sections/HeroSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth relative bg-background text-foreground selection:bg-aq-blue/20">
      <Header />
      <div className="snap-section">
        <HeroSection />
      </div>
      <div className="snap-section">
        <WaitlistSection />
      </div>
      <Footer />
    </main>
  );
}