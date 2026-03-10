'use client';

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useRef } from 'react';

import { useDeviceTier } from '@/hooks/use-device-tier';
import { PhilosophySectionText } from '@/lib/content/philosophy';

function ScrollWord({
  word,
  start,
  end,
  scrollYProgress,
  animated,
}: {
  word: string;
  start: number;
  end: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollYProgress: any;
  animated: boolean;
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.18, 1]);
  return (
    <motion.span
      data-atom
      style={animated ? { opacity } : {}}
      className="mr-[0.28em] inline-block font-display text-[clamp(1.6rem,3.2vw,3.5rem)] font-light leading-tight text-foreground"
    >
      {word}
    </motion.span>
  );
}

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const tier = useDeviceTier();
  const animated = !reduced && tier !== 'low';

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const words = PhilosophySectionText.body.split(' ');
  const wordCount = words.length;

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative flex min-h-[140vh] flex-col items-center justify-center overflow-hidden px-4 md:px-16"
    >
      <h2 id="philosophy-heading" className="sr-only">
        {PhilosophySectionText.eyebrow}
      </h2>

      {/* Atmospheric Atom */}
      <span
        data-atom
        data-decorative
        aria-hidden="true"
        className="absolute right-[5%] top-[40%] select-none font-display font-light leading-none text-foreground opacity-[0.04]"
        style={{ fontSize: 'clamp(8rem, 15vw, 15rem)' }}
      >
        .
      </span>

      <div className="relative z-10 mx-auto max-w-5xl text-left">
        {words.map((word, i) => {
          const start = i / wordCount;
          const end = start + 3 / wordCount;

          return (
            <ScrollWord
              key={`${word}-${i}`}
              word={word}
              start={start}
              end={end}
              scrollYProgress={scrollYProgress}
              animated={animated}
            />
          );
        })}
      </div>
    </section>
  );
}
