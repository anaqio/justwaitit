"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Studio-quality lighting & textures",
  "Instant background transformation",
  "Diverse model AI generation",
  "Commerce-ready exports",
];

export function ProductPreviewSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 snap-start overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-aq-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-aq-blue uppercase tracking-[0.3em]">Product Preview</h2>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display leading-[1.1]">
              Your virtual studio, <br />
              <span className="text-brand-gradient">reimagined.</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-body">
              Transform your product shots into high-end editorial campaigns without leaving your desk. 
              Our AI understands fashion textures, draping, and lighting.
            </p>
          </div>

          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-foreground font-medium">
                <CheckCircle2 className="w-5 h-5 text-aq-blue" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden glass-card border-white/5 shadow-2xl"
        >
          {/* Placeholder for Product Image/Preview */}
          <div className="absolute inset-0 bg-gradient-to-br from-aq-blue/10 to-transparent flex items-center justify-center">
            <div className="text-center p-8 space-y-4">
              <div className="w-20 h-20 bg-aq-blue/20 rounded-2xl mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-aq-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-muted-foreground font-medium">Interactive Preview Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
