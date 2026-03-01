"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TypoLogo } from "@/components/ui/TypoLogo";
import { useTheme } from "next-themes";
import RiBoSliMemo from "@/components/brand/RightBottomSlice";
import LiToSliMemo from "@/components/brand/LeftTopSlice";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const sliceVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] as const },
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

  // Enhanced parallax effects with different speeds for depth
  const sliceY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const sliceY2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const logoScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient snap-start px-4 sm:px-6"
    >
      {/* Depth layers for immersive effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/5 dark:to-background/10" />
        <div className="absolute inset-0 radial-gradient opacity-0 dark:opacity-50 transition-opacity duration-1000" />
      </div>

      {/* Background Decorative Slices */}
      <motion.div
        style={{ y: sliceY1 }}
        variants={sliceVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 left-0 w-[250px] sm:w-[260px] md:w-[360px] lg:w-[460px] h-auto pointer-events-none z-10"
      >
        <LiToSliMemo className="w-full h-auto" />
      </motion.div>

      <motion.div
        style={{ y: sliceY2 }}
        variants={sliceVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto pointer-events-none z-10"
      >
        <RiBoSliMemo className="w-full h-auto" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        ref={contentRef}
        style={{ y: contentY, opacity: contentOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 text-center w-full max-w-5xl px-4 sm:px-6 py-8"
      >
        {/* Logo with Parallax - Subtle positioning */}
        <motion.div
          variants={logoVariants}
          style={{ scale: logoScale }}
          className="w-full flex justify-center pt-8 sm:pt-12"
        >
          <TypoLogo
            theme={mounted ? currentTheme : "dark"}
            className="relative w-full max-w-[180px] sm:max-w-[240px] md:max-w-[280px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Core Message - Main Focus */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col items-center gap-8 sm:gap-10"
        >
          {/* Primary Tagline - Emphasizes the core message */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <motion.p
              variants={fadeUpVariants}
              className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.2] text-pretty max-w-3xl"
            >
              Generate <span className="text-brand-gradient">studio-quality</span> fashion visuals <span className="text-brand-gradient">instantly</span>
            </motion.p>

            {/* Supporting Headline */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-lg sm:text-2xl lg:text-3xl font-display font-medium text-muted-foreground tracking-tight text-pretty max-w-3xl"
            >
              AI Visual Studio for Fashion Commerce
            </motion.h1>
          </div>

          {/* Descriptive Paragraph */}
          <motion.p
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed font-light"
          >
            Empowering Moroccan fashion brands with cutting-edge AI tools to transform concepts into commerce-ready imagery in seconds. Redefine your creative workflow.
          </motion.p>

          {/* CTA Section - Prominent positioning */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col items-center gap-6 sm:gap-8 pt-4 sm:pt-6"
          >
            <motion.button
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Get Early Access to Anaqio"
              className="group relative px-10 sm:px-14 py-5 sm:py-6 bg-aq-blue text-white rounded-full font-bold text-base sm:text-lg transition-all hover:shadow-[0_0_80px_rgba(37,99,235,0.6)] active:scale-95"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Early Access
              <span className="absolute -inset-px rounded-full border border-white/20 pointer-events-none" />
            </motion.button>

            {/* Tagline under CTA */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-aq-blue font-bold uppercase tracking-widest text-xs sm:text-sm">The future of fashion</span>
              <motion.div
                animate={{ scaleX: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="h-0.5 w-10 bg-aq-blue/30 origin-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUpVariants}
          className="pt-8 sm:pt-12 absolute bottom-8 sm:bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-aq-blue/40 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-2 rounded-full bg-aq-blue" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
