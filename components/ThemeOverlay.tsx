"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface ThemeOverlayProps {
  isActive: boolean;
  position: { x: number; y: number };
  onComplete: () => void;
}

export function ThemeOverlay({ isActive, position, onComplete }: ThemeOverlayProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  // Calculate the maximum distance from the button to any corner
  const maxDistance = Math.sqrt(
    Math.max(
      Math.pow(position.x, 2) + Math.pow(position.y, 2),
      Math.pow(windowSize.width - position.x, 2) + Math.pow(position.y, 2),
      Math.pow(position.x, 2) + Math.pow(windowSize.height - position.y, 2),
      Math.pow(windowSize.width - position.x, 2) + Math.pow(windowSize.height - position.y, 2)
    )
  );

  // Determine overlay color based on current theme (will be old theme during transition)
  const overlayColor = resolvedTheme === "dark" 
    ? "rgb(15, 23, 42)" // dark theme background color
    : "rgb(248, 250, 252)"; // light theme background color

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isActive && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            style={{
              left: position.x,
              top: position.y,
              width: 1,
              height: 1,
              borderRadius: "50%",
              transformOrigin: "center",
              backgroundColor: overlayColor,
            }}
            className="absolute"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: maxDistance * 2.8, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scale: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.3,
                delay: 0.5,
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
