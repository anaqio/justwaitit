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
        className="absolute top-0 left-0 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto pointer-events-none z-10 mix-blend-overlay dark:mix-blend-soft-light"
      >
        <LiToSliMemo className="w-full h-auto" />
      </motion.div>

      <motion.div 
        style={{ y: sliceY2 }}
        variants={sliceVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto pointer-events-none z-10 mix-blend-overlay dark:mix-blend-soft-light"
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
        className="relative z-20 flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 text-center w-full max-w-4xl"
      >
        {/* Logo with Parallax */}
        <motion.div 
          variants={logoVariants}
          style={{ scale: logoScale }}
          className="w-full flex justify-center"
        >
          <TypoLogo
            theme={mounted ? currentTheme : "dark"}
            className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[340px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Text and CTA Wrapper */}
        <div className="flex flex-col items-center gap-6 sm:gap-10">
          {/* Main Headline */}
          <motion.div variants={fadeUpVariants} className="space-y-3 sm:space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1] text-pretty">
              <span className="text-brand-gradient">AI Visual Studio</span>
              <span className="block text-foreground">for Fashion Commerce</span>
            </h1>
            <motion.p 
              variants={fadeUpVariants}
              className="text-base sm:text-xl lg:text-2xl text-muted-foreground font-medium tracking-tight"
            >
              Generate studio-quality fashion visuals instantly.
            </motion.p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed px-2"
          >
            Empowering Moroccan fashion brands with cutting-edge AI tools to transform concepts into commerce-ready imagery in seconds.
          </motion.p>

          {/* CTA Group */}
          <motion.div variants={fadeUpVariants} className="flex flex-col items-center gap-5 pt-2">
            <motion.button
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Get Early Access to Anaqio"
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-aq-blue text-white rounded-full font-bold text-sm sm:text-base transition-all hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Early Access
              <span className="absolute -inset-px rounded-full border border-white/20 pointer-events-none" />
            </motion.button>
            <motion.div 
              variants={fadeUpVariants}
              className="flex flex-col items-center gap-2 pt-1"
            >
              <span className="text-aq-blue font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">The future of fashion</span>
              <motion.div 
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-0.5 w-8 bg-aq-blue/40 origin-center"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUpVariants}
          className="pt-6 sm:pt-10 absolute bottom-6 sm:bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-aq-blue/40 flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-1.5 rounded-full bg-aq-blue" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
