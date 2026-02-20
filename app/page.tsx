import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
