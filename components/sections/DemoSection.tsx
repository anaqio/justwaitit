"use client";

import { motion } from "framer-motion";

export function DemoSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 snap-start">
      <div className="max-w-5xl mx-auto w-full text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-sm font-bold text-aq-blue uppercase tracking-[0.3em]">See it in action</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display">
            From prompt to <span className="italic">perfection.</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-video rounded-3xl overflow-hidden glass-card border-white/5 shadow-2xl bg-black/40 flex items-center justify-center group"
        >
          {/* Placeholder for Demo GIF */}
          <div className="text-center p-12 space-y-6">
            <div className="w-24 h-24 bg-white/5 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-aq-blue ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-bold text-foreground tracking-tight">Demo GIF Preview</p>
              <p className="text-muted-foreground max-w-sm mx-auto font-body">
                Our AI studio demonstration is being prepared. Join the waitlist to be notified when it drops.
              </p>
            </div>
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
