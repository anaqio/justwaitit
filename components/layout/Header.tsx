"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <nav className="glass-strong mx-auto max-w-5xl rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gradient"
        >
          anaqio
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Privacy
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
