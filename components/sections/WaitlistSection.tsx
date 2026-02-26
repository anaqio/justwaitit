"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WaitlistForm } from "./waitlist-form";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function WaitlistSection() {
  return (
    <section id="waitlist" className="relative min-h-screen flex items-center justify-center py-24 px-4 snap-start overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aq-blue/10 rounded-full blur-[160px] pointer-events-none animate-glow" />
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-2xl w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Incentives */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight font-display">
                Exclusive <br />
                <span className="text-brand-gradient">Incentives.</span>
              </h2>
              <p className="text-muted-foreground font-body text-sm">
                Join our private beta and help shape the future of fashion commerce.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Early Access", desc: "Be the first to create with our AI studio." },
                { title: "20% Lifetime Discount", desc: "Locked-in pricing for our early supporters." },
                { title: "Beta Testing Access", desc: "Direct input on features and roadmap." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aq-blue/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-aq-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-3 glass-strong rounded-[2rem] border-white/5 p-8 sm:p-10 text-left space-y-8 noise-overlay">
            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl font-bold tracking-tight font-display">
                Join the Waitlist
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Complete the form below to secure your spot.
              </p>
            </div>

            <WaitlistForm source="home" />

            <p className="text-[10px] text-muted-foreground/50 font-body text-center relative z-10">
              By joining you agree to our{" "}
              <Link href="/terms" className="underline hover:text-aq-blue transition-colors">Terms</Link>
              {" "}and{" "}
              <Link href="/privacy" className="underline hover:text-aq-blue transition-colors">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
