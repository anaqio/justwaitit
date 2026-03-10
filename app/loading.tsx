'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { AnaqioTypographyLogo } from '@/components/ui/anaqio-typography-logo';

// ─── Loading Stages ──────────────────────────────────────────────────────────
const STAGES = [
  { threshold: 0, label: 'Initializing' },
  { threshold: 25, label: 'Loading assets' },
  { threshold: 60, label: 'Rendering' },
  { threshold: 88, label: 'Preparing studio' },
  { threshold: 100, label: 'Ready' },
] as const;

function resolveStage(p: number) {
  return [...STAGES].reverse().find((s) => p >= s.threshold) ?? STAGES[0];
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const reduced = useReducedMotion();
  const raf = useRef<number>(0);
  const current = useRef(0);

  useEffect(() => {
    // Smooth easing toward a target value
    const animateTo = (to: number, onDone?: () => void) => {
      cancelAnimationFrame(raf.current);
      if (reduced) {
        current.current = to;
        setProgress(to);
        onDone?.();
        return;
      }
      const tick = () => {
        const gap = to - current.current;
        if (Math.abs(gap) > 0.15) {
          current.current += gap * 0.07;
          setProgress(Math.round(current.current));
          raf.current = requestAnimationFrame(tick);
        } else {
          current.current = to;
          setProgress(to);
          onDone?.();
        }
      };
      raf.current = requestAnimationFrame(tick);
    };

    const complete = () =>
      animateTo(100, () => setTimeout(() => setVisible(false), 350));

    // Initial jump to feel immediately responsive
    animateTo(20);

    // DOM interactive (HTML parsed, sub-resources not yet loaded)
    const onReadyState = () => {
      if (document.readyState === 'interactive') animateTo(60);
      if (document.readyState === 'complete') animateTo(90);
    };
    document.addEventListener('readystatechange', onReadyState);
    onReadyState();

    // Web fonts resolved
    document.fonts?.ready.then(() => {
      if (current.current < 85) animateTo(85);
    });

    // All resources (images, scripts, styles) loaded
    if (document.readyState === 'complete') {
      complete();
    } else {
      window.addEventListener('load', complete, { once: true });
    }

    // Safety net — never hang longer than 6 s
    const safety = setTimeout(complete, 6000);

    return () => {
      cancelAnimationFrame(raf.current);
      document.removeEventListener('readystatechange', onReadyState);
      clearTimeout(safety);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stage = resolveStage(progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-aq-ink"
          initial={{ opacity: 1 }}
          exit={
            reduced
              ? { opacity: 0, transition: { duration: 0.3 } }
              : {
                  opacity: 0,
                  scale: 1.03,
                  filter: 'blur(8px)',
                  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                }
          }
        >
          {/* ── Atmospheric glows ──────────────────────────────── */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aq-blue/[0.06] blur-[100px]" />
            <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-aq-purple/[0.06] blur-[100px]" />
          </div>

          {/* ── Eyebrow ────────────────────────────────────────── */}
          <motion.p
            className="relative z-10 mb-10 font-label text-[0.6rem] uppercase tracking-label text-muted-foreground/30"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Digital Atelier
          </motion.p>

          {/* ── Logo ───────────────────────────────────────────── */}
          <motion.div
            className="relative z-10"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnaqioTypographyLogo
              variant={reduced ? 'none' : 'cinematic-reveal'}
              className="w-56 sm:w-72"
            />
          </motion.div>

          {/* ── Progress ───────────────────────────────────────── */}
          <motion.div
            className="relative z-10 mt-12 flex w-56 flex-col items-center gap-2.5 sm:w-72"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Track */}
            <div className="relative h-px w-full overflow-hidden rounded-full bg-white/[0.08]">
              {/* Glow layer */}
              <motion.div
                className="absolute -top-0.5 bottom-0 left-0 h-[3px] rounded-full blur-sm"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                style={{
                  background: 'linear-gradient(90deg, #3F57AF, #6F47A7)',
                  opacity: 0.5,
                }}
              />
              {/* Sharp fill */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                style={{
                  background: 'linear-gradient(90deg, #3F57AF, #6F47A7)',
                }}
              />
            </div>

            {/* Stage label + percentage */}
            <div className="flex w-full items-center justify-between">
              <AnimatePresence mode="wait">
                <motion.span
                  key={stage.label}
                  className="font-label text-[0.58rem] uppercase tracking-label text-muted-foreground/35"
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.18 }}
                >
                  {stage.label}
                </motion.span>
              </AnimatePresence>

              <span className="font-label text-[0.58rem] tabular-nums tracking-label text-muted-foreground/35">
                {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
