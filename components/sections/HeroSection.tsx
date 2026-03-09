'use client';

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { Button } from '../ui/button';

import heroModelImage from '@/public/images/model-t.png';

const content = {
  eyebrow: 'Visual AI for Fashion',
  headline: {
    pre: 'Visual Infrastructure',
    pro: 'for Fashion Commerce',
  },
  subheadline: {
    a: 'Transform garments into photorealistic campaign visuals in minutes — not weeks.',
    b: 'Anaqio optimizes fashion art for scalable commerce.',
  },
  supportLine: {
    words: ['designers', 'brands', 'agencies'],
  },
  cta: {
    act: 'Start Creating',
    learn: 'See How It Works',
  },
};

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Image drifts up at ~60% of scroll speed → parallax depth
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex(
        (prev) => (prev + 1) % content.supportLine.words.length
      );
    }, 2500);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen flex-col overflow-hidden bg-background"
    >
      {/* ── Model — absolute background layer, behind text ── */}
      {/* Outer: parallax transform only — never animates opacity on the same layer */}
      <motion.div
        style={{ y: imageY }}
        className="pointer-events-none absolute inset-y-0 bottom-0 right-0 z-0 w-[52%] select-none"
        aria-hidden
      >
        {/* Inner: fade-in isolated to its own element, no transform */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={heroModelImage}
            alt=""
            fill
            className="object-contain object-right-bottom"
            draggable={false}
            priority
            placeholder="blur"
            quality={75}
            sizes="52vw"
          />
          {/* Left edge fade — model blends into cream text area */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* ── Text content — in front of image ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pt-24 sm:px-12 lg:px-16">
        <div className="flex max-w-[640px] flex-col gap-8">
          {/* Eyebrow badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {content.eyebrow}
          </motion.span>

          {/* Headline — one line each via whitespace-nowrap + fluid size */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[1.06] tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 4.5rem)' }}
          >
            <span className="block whitespace-nowrap">
              {content.headline.pre}
            </span>
            <span className="text-brand-gradient animate-gradient block whitespace-nowrap font-serif font-light italic">
              {content.headline.pro}.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {content.subheadline.a}
            <br />
            {content.subheadline.b}
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button
              variant="brand"
              onClick={() =>
                document
                  .getElementById('waitlist')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group flex h-12 items-center gap-3 rounded-xl px-7 text-sm font-bold uppercase tracking-[0.15em]"
            >
              <span>{content.cta.act}</span>
              <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white/20 transition-colors group-hover:bg-white/30">
                <ArrowDownRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </span>
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById('lookbook')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="h-12 rounded-xl border-border px-7 text-sm font-semibold text-foreground hover:bg-muted"
            >
              {content.cta.learn}
            </Button>
          </motion.div>

          {/* Animated tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground"
          >
            Built for{' '}
            <span className="relative inline-flex justify-center">
              <span className="invisible" aria-hidden>
                agencies
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: 10, opacity: 0, filter: 'blur(2px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -10, opacity: 0, filter: 'blur(2px)' }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="text-brand-gradient absolute left-0 top-0 w-full text-center italic"
                >
                  {content.supportLine.words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            who need consistent, brand-safe visuals at scale.
          </motion.p>
        </div>
      </div>

      {/* ── Bottom: brand gradient + perspective grid ── */}
      <aside className="relative z-20 h-52 w-full overflow-hidden sm:h-60">
        <div className="absolute inset-0 bg-gradient-to-r from-aq-grad-start via-aq-grad-mid2 to-aq-grad-end" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="perspective-grid mx-auto h-[160%] w-[120%]" />
        </div>
        <div className="grid-shimmer pointer-events-none absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent" />
      </aside>
    </section>
  );
}
