'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, PiggyBank, Sparkles, Timer } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

import { Button } from '../ui/button';
import PerspectiveGrid from '../ui/PerspectiveGrid';

const content = {
  headline: {
    pre: 'Visual Infrastructure',
    pro: 'for Fashion Commerce',
  },
  subheadline: {
    lineA:
      'Transform garments into photorealistic campaign visuals in minutes — not weeks.',
    libeB: 'Anaqio optimizes fashion art for scalable commerce.',
  },
  supportLine:
    'Built for designers, brands, and agencies who need consistent, brand-safe visuals at scale.',
  cta: {
    act: 'Start Creating',
    learn: 'See How It Works',
  },
};
export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const el = mediaRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const distanceFromCenter = center - vh / 2;
      const normalized = Math.max(
        -1,
        Math.min(1, distanceFromCenter / (vh / 2))
      );
      setParallax(normalized * 20); // max 20px translate
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const primaryCta = content.cta.act;
  const secondaryCta = content.cta.learn;
  const headlineA = (
    <>
      {content.headline.pre}
      <br />
      <span className="text-brand-gradient animate-gradient font-serif font-light italic">
        {content.headline.pro}.
      </span>
    </>
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-background pb-16 pt-28 sm:px-12 lg:px-20"
    >
      {/* Decorative Background: soft radial + subtle gradient
      <div className="-z-10 absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(37,99,235,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.15),transparent_20%)]" />
      </div> */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:items-end">
        {/* Left Column: Badge, Headline, CTA */}
        <div className="flex w-full flex-col items-start gap-10 lg:w-1/2 lg:pb-24">
          {/* Eyebrow badge
          <span className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-1 border border-border/60 rounded-full font-bold text-[10px] text-slate-600 uppercase tracking-[0.3em]">
            <Sparkles className="w-3 h-3 text-aq-blue" /> Early Access Open
          </span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <h1
              suppressHydrationWarning
              className="font-display font-bold lg:text-[5rem] xl:text-[6rem] text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight"
            >
              {headlineA}
            </h1>

            <p className="max-w-xl font-light text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed">
              {content.subheadline.lineA}
              <br className="hidden sm:block" /> {content.subheadline.libeB}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex sm:flex-row flex-col items-start sm:items-center gap-6 sm:gap-8"
          >
           
            <Button
              variant="brand"
              onClick={() =>
                document
                  .getElementById('waitlist')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group flex items-center gap-4 px-8 rounded-xl h-14 font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300"
            >
              <span suppressHydrationWarning>{primaryCta}</span>
              <div className="relative flex justify-center items-center bg-white/20 group-hover:bg-white/30 rounded-full w-8 h-8 overflow-hidden transition-colors">
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-300" />
              </div>
            </Button>
                     <Button
              variant="ghost"
              className="px-6 rounded-xl h-14 font-semibold text-sm"
              onClick={() =>
                document
                  .getElementById('lookbook')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              aria-label="Scroll to Lookbook"
            >
              <span suppressHydrationWarning>{secondaryCta}</span>
            </Button>
         
            <div className="flex flex-col gap-1">
              <span className="font-bold text-aq-blue text-xs uppercase tracking-[0.2em]">
                {content.supportLine}
              </span>
            </div>
          </motion.div>
          
          {/** 
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 mt-4 w-full">
            <div className="bg-white/40 backdrop-blur-sm p-4 border border-border/60 rounded-xl">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <Timer className="w-4 h-4 text-aq-blue" /> 30-min Turnarounds
              </div>
              <p className="mt-1 text-muted-foreground text-xs">
                Idea to lookbook before coffee cools.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-4 border border-border/60 rounded-xl">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <PiggyBank className="w-4 h-4 text-aq-blue" /> 15,000+ MAD Saved
              </div>
              <p className="mt-1 text-muted-foreground text-xs">
                Cut studio, models, and set costs.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-4 border border-border/60 rounded-xl">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-aq-blue" /> Casablanca Private
                Beta
              </div>
              <p className="mt-1 text-muted-foreground text-xs">
                Limited to 200 early brands.
              </p>
            </div>
          </div>
          */}
        </div>

        {/** Right Column: Editorial Image
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-1/2 lg:max-w-[600px] overflow-visible"
          ref={mediaRef}
          style={{ transform: `translateY(${parallax}px)` }}
        >
         
          <div className="relative shadow-aq-blue/10 shadow-xl p-[2px] rounded-[2rem] ring-1 ring-white/30">
            <div className="-z-10 absolute -inset-0.5 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(37,99,235,0.4),rgba(124,58,237,0.35),rgba(37,99,235,0.4))] opacity-40 blur-xl rounded-[2rem]" />

         
            <div
              className="relative rounded-[2rem] w-full"
              style={{ paddingBottom: '125%' }}
            >
            
              <div className="z-10 absolute inset-0 animated-grid opacity-20 rounded-[2rem] pointer-events-none" />

           
              {!prefersReducedMotion && !videoError ? (
                <video
                  className="absolute inset-0 rounded-[2rem] w-full h-full object-center object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/hero-model.png"
                  onError={() => setVideoError(true)}
                >
                  <source src="/videos/hero.webm" type="video/webm" />
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
              ) : (
                <Image
                  src="/images/hero-model.png"
                  alt="Editorial fashion photography generated by Anaqio AI, featuring a model in a purple checkered suit"
                  fill
                  className="rounded-[2rem] object-center object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-[2rem]" />
            </div>
          </div>

        
          <div className="top-4 left-4 z-10 absolute flex justify-between items-center mix-blend-difference">
            <span className="font-mono text-white/70 text-xs tracking-widest">
              AQ-AI-V1.0
            </span>
          </div>

      
          <div className="-bottom-6 left-6 z-10 absolute bg-white/70 shadow-xl backdrop-blur-md p-4 border border-white/20 rounded-2xl w-[min(80%,280px)]">
            <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
              <PiggyBank className="w-4 h-4 text-aq-blue" /> Save 15,000+ MAD
            </div>
            <p className="mt-1 text-slate-600 text-xs">
              Per campaign vs. traditional shoots.
            </p>
          </div>
        </motion.div>
        **/}
      </div>
      <div className="bg-brand-diag pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full bg-purple-500 font-semibold text-white shadow-md hover:shadow-lg">
        <PerspectiveGrid />
      </div>
    </section>
  );
}
