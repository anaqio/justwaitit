"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { TypoLogo } from "@/components/ui/TypoLogo";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

export function Header() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const { scrollY } = useScroll();

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = lastScrollY;
    const isScrollingDown = current > prev && current > 80;

    setIsHidden(isScrollingDown);
    setLastScrollY(current);

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Show header after scroll stops
    if (isScrollingDown) {
      scrollTimeoutRef.current = setTimeout(() => {
        setIsHidden(false);
      }, 1000);
    }
  });

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const currentTheme = (resolvedTheme || theme) as "light" | "dark";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? -120 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none"
    >
      <nav aria-label="Main Navigation" className="glass-strong mx-auto max-w-5xl rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between pointer-events-auto">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Anaqio Home"
        >
          <TypoLogo
            className="h-5 sm:h-6 w-auto"
            theme={mounted ? currentTheme : "dark"}
            animate={false}
          />
          <span className="sr-only">anaqio</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-8">
          <Button
            variant="outline"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll to Waitlist Section"
            className="text-[9px] sm:text-[10px] font-bold bg-aq-blue text-white px-3 sm:px-4 py-2 rounded-lg uppercase tracking-[0.2em] hover:bg-aq-blue/90 transition-colors whitespace-nowrap"
          >
            Join Waitlist
          </Button>

        </div>
      </nav>
    </motion.header>
  );
}
