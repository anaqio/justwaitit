'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function SolutionSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="solution"
      className="flex min-h-screen w-full flex-col justify-center bg-background px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="mb-4 block w-full text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
            The Solution
          </span>
          Meet the AI-Native{' '}
          <span className="text-brand-gradient font-bold italic">
            Production Layer
          </span>{' '}
          for Fashion
        </motion.h2>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-3xl text-center"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Anaqio transforms simple garment images into photorealistic visuals
            using a structured AI pipeline built specifically for fashion
            brands.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:mt-24 md:flex-row md:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-[140px] w-full flex-col items-center justify-center rounded-2xl border border-border/80 bg-white/50 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:w-[260px] dark:border-white/10 dark:bg-card/40"
          >
            <span className="mb-2 text-sm font-medium text-muted-foreground">
              Input
            </span>
            <span className="font-display text-2xl font-bold text-foreground">
              Flat Lay
            </span>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex items-center justify-center p-2"
          >
            <motion.div
              className="hidden md:block"
              animate={prefersReducedMotion ? undefined : { x: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowRight className="h-6 w-6 text-[#7C3AED] opacity-80" />
            </motion.div>
            <motion.div
              className="md:hidden"
              animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowRight className="h-6 w-6 rotate-90 text-[#7C3AED] opacity-80" />
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-[140px] w-full flex-col items-center justify-center rounded-2xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:w-[260px] dark:bg-[#7C3AED]/10"
          >
            <span className="mb-2 text-sm font-medium text-[#7C3AED]">
              Process
            </span>
            <span className="font-display text-2xl font-bold text-foreground">
              AI Pipeline
            </span>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex items-center justify-center p-2"
          >
            <motion.div
              className="hidden md:block"
              animate={prefersReducedMotion ? undefined : { x: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            >
              <ArrowRight className="h-6 w-6 text-amber-500 opacity-80" />
            </motion.div>
            <motion.div
              className="md:hidden"
              animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            >
              <ArrowRight className="h-6 w-6 rotate-90 text-amber-500 opacity-80" />
            </motion.div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-[140px] w-full flex-col items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/5 shadow-[0_0_30px_rgba(245,158,11,0.05)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:w-[260px] dark:bg-amber-500/10 dark:shadow-[0_0_30px_rgba(245,158,11,0.1)]"
          >
            <span className="mb-2 text-sm font-medium text-amber-600 dark:text-amber-500">
              Output
            </span>
            <span className="font-display text-2xl font-bold text-foreground">
              Campaign Visual
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center text-muted-foreground sm:mt-24 sm:text-lg"
        >
          No photoshoot. No production delays. Just scalable visual generation.
        </motion.p>
      </div>
    </section>
  );
}
