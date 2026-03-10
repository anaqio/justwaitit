'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

import { useDeviceTier } from '@/hooks/use-device-tier';
import { ProblemSectionText } from '@/lib/content/problem';
import { clipReveal } from '@/lib/motion';

export function ProblemSection() {
  const reduced = useReducedMotion();
  const tier = useDeviceTier();
  const animated = !reduced && tier !== 'low';
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headlineY = useTransform(scrollYProgress, [0, 0.4], ['60px', '0px']);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  const { eyebrow, visualHeadline, painPoints } = ProblemSectionText;

  return (
    <section
      ref={sectionRef}
      id="problem"
      aria-labelledby="problem-heading"
      className="relative min-h-[100dvh] w-full overflow-hidden"
    >
      <h2 id="problem-heading" className="sr-only">
        {eyebrow}: {visualHeadline.line1} {visualHeadline.line2}
      </h2>

      {/* Eyebrow [PINNED, top-10% left-8.33%] */}
      <p
        data-atom
        className="absolute left-[8.33%] top-[10%] font-label text-[0.65rem] uppercase tracking-label text-muted-foreground"
      >
        {eyebrow}
      </p>

      {/* Large statement [ANCHORED at top-18% left-8.33%] */}
      <motion.div
        data-atom
        aria-hidden="true"
        style={
          animated
            ? {
                y: headlineY,
                opacity: headlineOpacity,
                fontSize: 'clamp(2.8rem, 5.5vw, 7rem)',
              }
            : { fontSize: 'clamp(2.8rem, 5.5vw, 7rem)' }
        }
        className="absolute left-[8.33%] top-[18%] z-20 max-w-[14ch] font-display font-light leading-[0.95] text-foreground"
      >
        {visualHeadline.line1}
        <br />
        <em className="text-brand-gradient pt-2 not-italic">
          {visualHeadline.line2}
        </em>
      </motion.div>

      {/* Accent line [PINNED horizontal rule, top-42% left-8.33% w-1/4] */}
      <div
        data-atom
        data-decorative
        aria-hidden="true"
        className="absolute left-[8.33%] top-[42%] h-px w-1/4 bg-border/40"
      />

      {/* Pain points [4 atoms, each DRIFTING, staggered clip-path reveals] */}
      {painPoints.map((point, i) => (
        <motion.div
          key={point.text}
          data-atom
          {...(animated ? clipReveal(reduced, i * 0.12) : {})}
          className="absolute z-20 flex items-start gap-4 border-l border-aq-blue/30 pl-4"
          style={{
            top: `${48 + i * 13}%`,
            left: '8.33%',
            maxWidth: '38ch',
          }}
        >
          <point.icon
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-aq-blue"
            aria-hidden="true"
          />
          <span className="font-label text-xs uppercase tracking-label text-muted-foreground">
            {point.text}
          </span>
        </motion.div>
      ))}

      {/* Atmospheric "?" [PINNED, right-5% top-15%] */}
      <span
        data-atom
        data-decorative
        aria-hidden="true"
        className="absolute right-[5%] top-[15%] z-0 select-none font-display font-light leading-none text-foreground opacity-[0.03]"
        style={{ fontSize: 'clamp(8rem, 20vw, 24rem)' }}
      >
        ?
      </span>
    </section>
  );
}
