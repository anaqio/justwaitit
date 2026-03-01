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

  useEffect(() => setMounted(true), []);

  const currentTheme = (resolvedTheme || theme) as "light" | "dark";
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const sliceY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const sliceY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient snap-start px-6 py-24"
    >
      {/* Background Decorative Slices */}
      <motion.div 
        style={{ y: sliceY1 }}
        variants={sliceVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-[-5%] left-[-5%] w-[300px] sm:w-[500px] md:w-[600px] pointer-events-none z-0 mix-blend-overlay dark:mix-blend-soft-light"
      >
        <LiToSliMemo className="w-full h-auto" />
      </motion.div>

      <motion.div 
        style={{ y: sliceY2 }}
        variants={sliceVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-[-5%] right-[-5%] w-[300px] sm:w-[500px] md:w-[600px] pointer-events-none z-0 mix-blend-overlay dark:mix-blend-soft-light"
      >
        <RiBoSliMemo className="w-full h-auto" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-10 sm:gap-16 text-center w-full max-w-5xl pt-12"
      >
        {/* Logo */}
        <motion.div variants={logoVariants} className="w-full flex justify-center">
          <TypoLogo
            theme={mounted ? currentTheme : "dark"}
            className="relative w-full max-w-[240px] sm:max-w-[340px] md:max-w-[400px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Text and CTA Wrapper */}
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          {/* Tagline */}
          <motion.div variants={fadeUpVariants} className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05]">
              <span className="text-brand-gradient">AI Visual Studio</span>
              <br />
              <span className="text-foreground">for Fashion Commerce</span>
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl text-muted-foreground font-medium tracking-tight font-serif italic">
              Generate studio-quality fashion visuals instantly.
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-body"
          >
            Empowering Moroccan fashion brands with cutting-edge AI tools to transform concepts into commerce-ready imagery.
          </motion.p>

          {/* CTA Group */}
          <motion.div variants={fadeUpVariants} className="flex flex-col items-center gap-6">
            <button
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Get Early Access to Anaqio"
              className="group relative px-10 py-5 bg-aq-blue text-white rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Get Early Access
              <span className="absolute -top-px -left-px -right-px -bottom-px rounded-full border-white/20 pointer-events-none border-2" />
            </button>
            <div className="flex flex-col items-center gap-2">
              <span className="text-aq-blue font-bold uppercase tracking-[0.4em] text-[10px]">The future of fashion is here</span>
              <div className="h-px w-12 bg-aq-blue/30" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUpVariants}
          className="pt-4 sm:pt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-aq-blue/30 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-aq-blue" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section >
  );
}
