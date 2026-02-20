import { HeroSection } from "@/components/sections/HeroSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <HeroSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
