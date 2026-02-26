"use client";

import { motion } from "framer-motion";

export function SocialProofSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 snap-start">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale contrast-150 relative z-10">
          {/* Logo Placeholders with brand-like feel */}
          {["VOGUE", "HARPER'S", "ELLE", "LOOFFICIEL"].map((brand) => (
            <div key={brand} className="h-16 flex items-center justify-center">
              <span className="font-display font-black text-2xl tracking-[0.4em] text-foreground/40">{brand}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-12">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-aq-blue/40">Selected Partners Only</p>
        </div>
      </div>
    </section>
  );
}
