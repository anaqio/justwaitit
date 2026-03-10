'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

import { useDeviceTier } from '@/hooks/use-device-tier';
import { HowItWorksSectionText } from '@/lib/content/how-it-works';
import { ease } from '@/lib/motion';

function StepAtom({
  step,
  index,
  animated,
}: {
  step: { num: string; title: string; body: string };
  index: number;
  animated: boolean;
}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: `-${20 + index * 15}%` as any,
  });

  return (
    <motion.div
      ref={ref}
      data-atom
      animate={
        animated && !inView
          ? { opacity: 0.15, filter: 'blur(6px)', y: 20 }
          : { opacity: 1, filter: 'blur(0px)', y: 0 }
      }
      transition={{ duration: 0.7, ease }}
      className="flex flex-col gap-5 sm:max-w-[280px]"
    >
      <motion.span
        animate={
          animated && inView
            ? { boxShadow: '0 0 0 8px hsl(var(--primary) / 0)' }
            : {}
        }
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-aq-blue/5 font-display font-light text-aq-blue ring-1 ring-border"
        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.25rem)' }}
      >
        {step.num}
      </motion.span>
      <div className="space-y-2">
        <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-light text-foreground">
          {step.title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const { eyebrow, headline, steps } = HowItWorksSectionText;
  const reduced = useReducedMotion();
  const tier = useDeviceTier();
  const animated = !reduced && tier !== 'low';

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative flex min-h-screen flex-col justify-center px-4 py-24 sm:px-12 lg:px-24"
    >
      {/* Semantic Headings */}
      <h2 id="how-it-works-heading" className="sr-only">
        {eyebrow}: {headline.pre} {headline.gradient}
      </h2>

      <div className="mx-auto w-full max-w-7xl">
        <p
          data-atom
          className="mb-6 font-label text-[0.65rem] uppercase tracking-label text-muted-foreground"
        >
          {eyebrow}
        </p>

        <p
          data-atom
          aria-hidden="true"
          className="mb-20 max-w-2xl font-display text-[clamp(2.5rem,5vw,5rem)] font-light leading-tight"
        >
          {headline.pre}{' '}
          <em className="text-brand-gradient not-italic">
            {headline.gradient}
          </em>{' '}
          {headline.post}
        </p>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <StepAtom key={s.num} step={s} index={i} animated={animated} />
          ))}
        </div>
      </div>
    </section>
  );
}
