"use client";

import { motion } from "framer-motion";

const BrandGradient = "linear-gradient(135deg, #3F57AF 0%, #484DA9 32%, #6049A8 67%, #6F47A7 100%)";

interface MorphTransitionProps {
  onComplete: () => void;
}

export function MorphTransition({ onComplete }: MorphTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#0a0a08]"
    >
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.8] blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)" }} />
      
      <motion.div
        layoutId="entrance-logo"
        initial={{ scale: 1 }}
        animate={{ scale: 0.4, y: -200 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center z-10">
        <h1 className="text-[120px] tracking-[-0.03em] m-0"
          style={{ fontFamily: "var(--font-syne)", background: BrandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          anaqio
        </h1>
      </motion.div>
      
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-10">
        <h2 className="text-[42px] text-[#94A3B8] uppercase tracking-[0.3em] font-[400]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}>
          Start Creating in Morocco
        </h2>
      </motion.div>
      
      <motion.div
        initial={{ y: 60, opacity: 1, scale: 1 }}
        animate={{ y: 200, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-10">
        <div className="px-[48px] py-[24px] border-2 border-[#2563EB] rounded-[16px] bg-[rgba(37,99,235,0.1)] backdrop-blur-[10px]">
          <span className="text-[28px] text-white font-[600] uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Join the Waitlist
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
