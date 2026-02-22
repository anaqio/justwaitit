import { HeroSection } from "@/components/sections/HeroSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Footer } from "@/components/layout/Footer";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth relative">
      <div className="fixed top-6 right-6 z-50">
        <ThemeSwitcher />
      </div>
      <HeroSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
