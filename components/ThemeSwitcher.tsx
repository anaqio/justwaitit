"use client";

import { Button } from "@/components/ui/button";
import { ThemeOverlay } from "@/components/ThemeOverlay";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  const handleToggle = () => {
    // Get button position
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setShowOverlay(true);
    setIsAnimating(true);

    // Change theme after overlay starts
    setTimeout(() => {
      setTheme(isDark ? "light" : "dark");
    }, 100);

    // Reset animation state after overlay completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const handleOverlayComplete = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <ThemeOverlay
        isActive={showOverlay}
        position={buttonPosition}
        onComplete={handleOverlayComplete}
      />
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
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
