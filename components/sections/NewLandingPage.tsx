'use client';

import dynamic from 'next/dynamic';

import { VideoHeroSection } from './VideoHeroSection';

// Below-fold sections: dynamic imports for code-splitting (ssr: true for SEO)
const ProblemSection = dynamic(
  () =>
    import('@/components/sections/ProblemSection').then(
      (mod) => mod.ProblemSection
    ),
  { ssr: true }
);
const SolutionSection = dynamic(
  () =>
    import('@/components/sections/SolutionSection').then(
      (mod) => mod.SolutionSection
    ),
  { ssr: true }
);
const HowItWorksSection = dynamic(
  () =>
    import('@/components/sections/HowItWorksSection').then(
      (mod) => mod.HowItWorksSection
    ),
  { ssr: true }
);
const WhyAnaqioSection = dynamic(
  () =>
    import('@/components/sections/WhyAnaqioSection').then(
      (mod) => mod.WhyAnaqioSection
    ),
  { ssr: true }
);
const VisionSection = dynamic(
  () =>
    import('@/components/sections/VisionSection').then(
      (mod) => mod.VisionSection
    ),
  { ssr: true }
);
const FinalCTA = dynamic(
  () => import('@/components/sections/FinalCTA').then((mod) => mod.FinalCTA),
  { ssr: true }
);
const Footer = dynamic(
  () => import('@/components/layout/Footer').then((mod) => mod.Footer),
  { ssr: true }
);

export function NewLandingPage() {
  return (
    <div className="flex w-full flex-col">
      <VideoHeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <WhyAnaqioSection />
      <VisionSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
