"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none"
    >
      <nav className="glass-strong mx-auto max-w-5xl rounded-2xl px-6 py-3 flex items-center justify-between pointer-events-auto">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tighter text-brand-gradient font-display"
        >
          anaqio
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/terms"
              className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-[0.2em]"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-[0.2em]"
            >
              Privacy
            </Link>
          </div>
          
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[10px] font-bold bg-aq-blue text-white px-4 py-2 rounded-lg uppercase tracking-[0.2em] hover:bg-aq-blue/90 transition-colors"
          >
            Join Waitlist
          </button>
          <ThemeSwitcher />
        </div>
      </nav>
    </motion.header>
  );
}
