"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient snap-start">
      {/* Decorative orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-purple-500/10 top-[-10%] left-[-10%] animate-float-slow" />
      <div className="glow-orb w-[400px] h-[400px] bg-pink-500/10 bottom-[-5%] right-[-5%] animate-float" />
      <div className="glow-orb w-[300px] h-[300px] bg-indigo-500/8 top-[30%] right-[10%] animate-glow" />

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
        <motion.div variants={fadeUpVariants} className="space-y-4 max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter">
            <span className="text-brand-gradient">Anaqio</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground font-medium tracking-tight font-display italic">
            Virtual studio. Real commerce.
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUpVariants}
          className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed font-body"
        >
          Empowering the next generation of fashion brands with AI-driven creative tools.
          <br />
          <span className="text-aq-blue font-bold mt-4 inline-block uppercase tracking-[0.3em] text-[10px]">Experience the future</span>
        </motion.p>

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
