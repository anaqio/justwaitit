"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
  hidden: { opacity: 0, scale: 0.8, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient snap-start">
      {/* Decorative orbs */}
      <motion.div style={{ y: y1 }} className="glow-orb w-[500px] h-[500px] bg-purple-500/10 top-[-10%] left-[-10%] animate-float-slow" />
      <motion.div style={{ y: y2 }} className="glow-orb w-[400px] h-[400px] bg-pink-500/10 bottom-[-5%] right-[-5%] animate-float" />
      <motion.div style={{ y: y3 }} className="glow-orb w-[300px] h-[300px] bg-indigo-500/8 top-[30%] right-[10%] animate-glow" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-8 px-4 text-center"
      >
        {/* Logo */}
        <motion.div variants={logoVariants} className="relative">
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl animate-glow" />
          <Image
            src="/logo.svg"
            alt="Anaqio logo"
            width={260}
            height={260}
            priority
            className="relative w-auto h-auto max-w-[220px] sm:max-w-[260px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div variants={fadeUpVariants} className="space-y-4 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1]">
            <span className="text-brand-gradient">AI Visual Studio</span>
            <br />
            <span className="text-foreground">for Fashion Commerce</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium tracking-tight font-display italic">
            Generate studio-quality fashion visuals instantly.
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUpVariants}
          className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed font-body"
        >
          Empowering fashion brands with cutting-edge AI tools to transform concepts into commerce-ready imagery.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUpVariants} className="flex flex-col items-center gap-4">
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Join the Anaqio waitlist"
            className="group relative px-8 py-4 bg-aq-blue text-white rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]"
          >
            Join the Waitlist
            <span className="absolute -top-px -left-px -right-px -bottom-px rounded-2xl border-white/20 pointer-events-none border-2" />
          </button>
          <span className="text-aq-blue font-bold uppercase tracking-[0.3em] text-[10px]">Experience the future of fashion</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-aq-blue/20 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-aq-blue/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
