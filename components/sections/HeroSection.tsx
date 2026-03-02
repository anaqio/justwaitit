"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowDownRight } from "lucide-react";

// Refined, slower cinematic animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.6,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const currentTheme = (resolvedTheme || theme) as "light" | "dark";
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  // Parallax optimized for horizontal layout
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const elementY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-gradient snap-start px-6 sm:px-12 lg:px-20 py-24"
    >
      {/* Immersive background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/50" />
        <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-aq-blue/5 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-purple-500/5 rounded-full blur-[100px] mix-blend-screen opacity-30" />
      </div>

      {/* Main Content Container - Golden Grid Layout */}
      <motion.div
        ref={contentRef}
        style={{ opacity: containerOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-16 lg:gap-24 items-center"
      >
        {/* Primary Fraction (1.618) - Core Messaging */}
        <motion.div style={{ y: textY }} className="flex flex-col items-start gap-12 lg:gap-16">

          <div className="flex flex-col gap-8 w-full">
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tighter leading-[0.95] text-balance"
            >
              Skip the Studio. <br />
              <span className="font-serif italic font-light tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-aq-blue to-purple-400">Ship the Collection.</span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-light max-w-xl"
            >
              Stop paying 5,000–20,000 MAD for unpredictable photoshoots. Anaqio's AI replaces expensive sets and models so you can style and launch your next campaign today.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pt-4"
          >
            <button
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Get Early Access to Anaqio"
              className="group flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-full font-bold text-sm tracking-[0.2em] uppercase transition-all duration-700 hover:bg-aq-blue hover:text-white"
            >
              <span>Secure Beta Access</span>
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowDownRight className="w-4 h-4" />
              </div>
            </button>

            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-aq-blue">Only 200 Spots</span>
              <span className="text-sm font-serif italic text-muted-foreground">Takes 30 seconds</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Golden Fraction (1) - Structured Negative Space / Interactive Element */}
        <motion.div
          style={{ y: elementY }}
          variants={fadeUpVariants}
          className="hidden lg:flex flex-col items-end justify-center h-full relative"
        >
          {/* Typographic Art & Negative Space */}
          <div className="glass-strong border border-white/5 rounded-[3rem] p-12 aspect-[3/4] w-full max-w-[400px] flex flex-col justify-between shadow-2xl overflow-hidden relative group">

            <div className="absolute inset-0 bg-gradient-to-br from-aq-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="flex justify-between items-start z-10 w-full">
              <span className="text-xs font-mono text-muted-foreground/50">SYS.01</span>
              <span className="text-xs font-mono text-muted-foreground/50">AQ-CORE</span>
            </div>

            <div className="space-y-4 z-10">
              <h3 className="text-5xl font-serif italic text-white/90 leading-none">
                Fluid
                <br />
                <span className="font-display not-italic font-bold text-4xl uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Reality</span>
              </h3>
              <div className="w-12 h-[1px] bg-aq-blue shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
              <p className="text-sm font-light text-muted-foreground/70 tracking-wide max-w-[200px]">
                Physics-based lighting and structural fabric AI simulations.
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
