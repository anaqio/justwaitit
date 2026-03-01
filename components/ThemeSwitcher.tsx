"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  const handleToggle = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setShowOverlay(true);
    setIsAnimating(true);

    // Change theme after overlay starts expanding
    setTimeout(() => {
      setTheme(isDark ? "light" : "dark");
    }, 350);

    // Close overlay after animation completes
    setTimeout(() => {
      setShowOverlay(false);
      setIsAnimating(false);
    }, 900);
  };

  // Calculate distance from button to farthest corner
  const maxDistance = Math.sqrt(
    Math.max(
      Math.pow(buttonPosition.x, 2) + Math.pow(buttonPosition.y, 2),
      Math.pow(windowSize.width - buttonPosition.x, 2) + Math.pow(buttonPosition.y, 2),
      Math.pow(buttonPosition.x, 2) + Math.pow(windowSize.height - buttonPosition.y, 2),
      Math.pow(windowSize.width - buttonPosition.x, 2) + Math.pow(windowSize.height - buttonPosition.y, 2)
    )
  );

  const overlayColor = isDark ? "rgb(248, 250, 252)" : "rgb(15, 23, 42)";

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
          >
            <motion.div
              style={{
                left: buttonPosition.x,
                top: buttonPosition.y,
                width: 1,
                height: 1,
                borderRadius: "50%",
                transformOrigin: "center",
                backgroundColor: overlayColor,
                position: "absolute",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: maxDistance * 3 }}
              exit={{ scale: maxDistance * 3 }}
              transition={{
                scale: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={false}
      >
        <Button
          ref={buttonRef}
          variant="ghost"
          size="icon"
          onClick={handleToggle}
          aria-label="Toggle theme"
          className="relative h-9 w-9 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-colors overflow-hidden"
        >
          <motion.div
            animate={{ rotate: isAnimating ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {isDark ? (
              <Moon className="h-[1.2rem] w-[1.2rem] text-amber-400" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500" />
            )}
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </motion.div>
    </>
  );
};

export default ThemeSwitcher;
