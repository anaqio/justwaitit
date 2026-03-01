"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ThemeOverlayProps {
  isActive: boolean;
  position: { x: number; y: number };
  onComplete: () => void;
}

export function ThemeOverlay({ isActive, position, onComplete }: ThemeOverlayProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the maximum distance from the button to any corner
  const maxDistance = Math.sqrt(
    Math.max(
      Math.pow(position.x, 2) + Math.pow(position.y, 2),
      Math.pow(windowSize.width - position.x, 2) + Math.pow(position.y, 2),
      Math.pow(position.x, 2) + Math.pow(windowSize.height - position.y, 2),
      Math.pow(windowSize.width - position.x, 2) + Math.pow(windowSize.height - position.y, 2)
    )
  );

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isActive && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute bg-background dark:bg-slate-950"
            style={{
              left: position.x,
              top: position.y,
              width: 1,
              height: 1,
              borderRadius: "50%",
              transformOrigin: "center",
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: maxDistance * 2.5, opacity: 1 }}
            exit={{ scale: maxDistance * 2.5, opacity: 0 }}
            transition={{
              scale: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.1,
                delay: 0.5,
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
