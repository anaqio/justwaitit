"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const BrandGradient = "linear-gradient(135deg, #3F57AF 0%, #484DA9 32%, #6049A8 67%, #6F47A7 100%)";

const scenes = [
  { name: "identity", duration: 2000 },
  { name: "problem", duration: 2300 },
  { name: "solution", duration: 2700 },
  { name: "outro", duration: 2000 },
];

const IdentityScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex items-center justify-center bg-[#0a0a08]"
  >
    <div className="absolute w-[600px] h-[600px] rounded-full opacity-60 blur-[60px]"
      style={{ background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)" }} />
    
    <motion.div
      initial={{ scale: 0.8, y: 30, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-center relative z-10"
    >
      <h1 className="text-[140px] font-[800] tracking-[-0.03em] m-0 leading-none"
        style={{ fontFamily: "var(--font-syne)", background: BrandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        anaqio
      </h1>
      <p className="text-[36px] text-[#94A3B8] mt-4 italic tracking-[0.02em]"
        style={{ fontFamily: "var(--font-cormorant)" }}>
        the future of fashion commerce
      </p>
    </motion.div>
  </motion.div>
);

const ProblemScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex items-center justify-center bg-[#0a0a08] px-[60px]"
  >
    <div className="text-center max-w-[900px]">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[56px] text-white uppercase tracking-[0.15em] leading-[1.2]"
        style={{ fontFamily: "var(--font-syne)" }}>
        Traditional shoots are
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="h-[3px] rounded-[2px] mx-auto my-[30px]"
        style={{ background: BrandGradient }} />
      
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-[72px] my-[20px] tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        Expensive & Slow
      </motion.h3>
      
      <p className="text-[36px] text-[#64748B] mt-[30px] italic"
        style={{ fontFamily: "var(--font-cormorant)" }}>
        Weeks of planning. Thousands in DH.
      </p>
    </div>
  </motion.div>
);

const SolutionScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex items-center justify-center overflow-hidden"
  >
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1200"
        className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
        alt="Marrakech" />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(10,10,8,0.6) 0%, rgba(10,10,8,0.8) 50%, rgba(10,10,8,0.9) 100%)" }} />
    </motion.div>
    
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center z-10 px-[60px]">
      <h2 className="text-[64px] text-white tracking-[-0.02em] leading-[1.1]"
        style={{ fontFamily: "var(--font-syne)" }}>
        Enter the
      </h2>
      <h2 className="text-[80px] my-[10px] tracking-[-0.03em]"
        style={{ fontFamily: "var(--font-syne)", background: BrandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        Virtual Studio
      </h2>
    </motion.div>
    
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute bottom-[120px] flex justify-center gap-[80px]">
      <div className="text-center">
        <div className="text-[64px] font-[600] text-[#3B82F6] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}>10x</div>
        <div className="text-[14px] text-[#94A3B8] uppercase tracking-[0.2em] mt-[8px]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}>Faster</div>
      </div>
      <div className="w-[2px] h-[60px] bg-[rgba(148,163,184,0.3)] self-center" />
      <div className="text-center">
        <div className="text-[64px] font-[600] text-[#8B5CF6] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}>90%</div>
        <div className="text-[14px] text-[#94A3B8] uppercase tracking-[0.2em] mt-[8px]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}>Cheaper</div>
      </div>
    </motion.div>
  </motion.div>
);

const OutroScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex items-center justify-center bg-[#0a0a08] overflow-hidden"
  >
    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.8] blur-[80px]"
      style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)" }} />
    
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center z-10">
      <h2 className="text-[42px] text-[#94A3B8] uppercase tracking-[0.3em] font-[400] mb-[20px]"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}>
        Start Creating in
      </h2>
      <h1 className="text-[120px] tracking-[-0.03em] m-0"
        style={{ fontFamily: "var(--font-syne)", background: BrandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        Morocco
      </h1>
    </motion.div>
    
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mt-[60px] z-10">
      <div className="px-[48px] py-[24px] border-2 border-[#2563EB] rounded-[16px] bg-[rgba(37,99,235,0.1)] backdrop-blur-[10px]">
        <span className="text-[28px] text-white font-[600] uppercase tracking-[0.15em]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}>
          Join the Waitlist
        </span>
      </div>
    </motion.div>
  </motion.div>
);

interface IntroScenesProps {
  onComplete: () => void;
}

export function IntroScenes({ onComplete }: IntroScenesProps) {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    if (currentScene >= scenes.length) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCurrentScene((prev) => prev + 1);
    }, scenes[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, onComplete]);

  return (
    <div className="fixed inset-0 z-50">
      <AnimatePresence mode="wait">
        {currentScene === 0 && <IdentityScene key="identity" />}
        {currentScene === 1 && <ProblemScene key="problem" />}
        {currentScene === 2 && <SolutionScene key="solution" />}
        {currentScene === 3 && <OutroScene key="outro" />}
      </AnimatePresence>
    </div>
  );
}
