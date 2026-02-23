"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist } from "@/lib/actions/waitlist";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function WaitlistSection() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        const result = await joinWaitlist(formData);
        if (result.success) {
          setStatus("success");
          setMessage(result.message);
          (e.target as HTMLFormElement).reset();
        } else {
          setStatus("error");
          setMessage(result.message);
        }
      } catch {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <section id="waitlist" className="relative min-h-screen flex items-center justify-center py-24 px-4 snap-start overflow-hidden">
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
              <p className="text-muted-foreground font-body">
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
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-foreground">You&apos;re on the list!</p>
                  <p className="text-muted-foreground">{message}</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <input type="hidden" name="source" value="home" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                    <Input
                      type="text"
                      name="full_name"
                      placeholder="Your name"
                      required
                      disabled={isPending}
                      className="h-12 rounded-xl bg-background/40 border-white/10 placeholder:text-muted-foreground/30 focus:border-aq-blue/50 transition-all font-body px-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="professional@email.com"
                      required
                      disabled={isPending}
                      className="h-12 rounded-xl bg-background/40 border-white/10 placeholder:text-muted-foreground/30 focus:border-aq-blue/50 transition-all font-body px-4"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Role</label>
                  <select
                    name="role"
                    required
                    disabled={isPending}
                    className="flex h-12 w-full rounded-xl border border-white/10 bg-background/40 px-4 py-2 text-sm shadow-sm transition-colors focus:border-aq-blue/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none font-body text-foreground"
                  >
                    <option value="" disabled selected>Select your professional role</option>
                    <option value="Brand">Brand Owner / Representative</option>
                    <option value="Stylist">Fashion Stylist</option>
                    <option value="Seller">E-commerce Seller</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Company (Optional)</label>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Brand or Studio name"
                      disabled={isPending}
                      className="h-12 rounded-xl bg-background/40 border-white/10 placeholder:text-muted-foreground/30 focus:border-aq-blue/50 transition-all font-body px-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Revenue (Optional)</label>
                    <select
                      name="revenue_range"
                      disabled={isPending}
                      className="flex h-12 w-full rounded-xl border border-white/10 bg-background/40 px-4 py-2 text-sm shadow-sm transition-colors focus:border-aq-blue/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none font-body text-foreground"
                    >
                      <option value="" selected>Monthly Revenue Range</option>
                      <option value="0-10k">$0 - $10k</option>
                      <option value="10k-50k">$10k - $50k</option>
                      <option value="50k-250k">$50k - $250k</option>
                      <option value="250k+">$250k+</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="brand"
                  disabled={isPending}
                  className="w-full h-14 rounded-xl text-base font-bold shadow-lg shadow-aq-blue/20"
                >
                  {isPending ? "Securing your spot..." : "Join the Waitlist"}
                </Button>

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-destructive font-medium text-center"
                  >
                    {message}
                  </motion.p>
                )}

                <p className="text-[10px] text-muted-foreground/50 font-body text-center">
                  By joining you agree to our{" "}
                  <Link href="/terms" className="underline hover:text-aq-blue transition-colors">Terms</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="underline hover:text-aq-blue transition-colors">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
