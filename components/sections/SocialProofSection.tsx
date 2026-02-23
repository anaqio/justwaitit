"use client";

import { motion } from "framer-motion";

export function SocialProofSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 snap-start">
      <div className="max-w-6xl mx-auto w-full text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-sm font-bold text-aq-blue uppercase tracking-[0.3em]">Coming Soon</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display">
            Trusted by the <span className="text-brand-gradient">avant-garde.</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body">
            We are currently in private beta with selected fashion houses and independent stylists. 
            Official testimonials and case studies are launching soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-30 grayscale contrast-125">
          {/* Logo Placeholders */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 flex items-center justify-center">
              <div className="w-32 h-8 bg-foreground/20 rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
