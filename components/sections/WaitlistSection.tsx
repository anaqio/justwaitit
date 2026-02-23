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
    <section id="waitlist" className="relative h-screen flex items-center justify-center px-4 snap-start overflow-hidden">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-lg"
      >
        {/* Glass card */}
        <div className="glass-strong rounded-[2rem] border-white/5 p-8 sm:p-12 text-center space-y-8 noise-overlay">
          <div className="space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
              Join the Waitlist
            </h2>
            <p className="text-base text-muted-foreground font-body">
              Be the first to experience the Anaqio studio. Sign up for early access to the future of fashion.
            </p>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-foreground font-medium">{message}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <input type="hidden" name="source" value="home" />
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your professional email"
                  required
                  disabled={isPending}
                  className="flex-1 h-14 rounded-xl bg-background/40 border-white/10 placeholder:text-muted-foreground/40 focus:border-aq-blue/50 transition-all font-body px-6"
                />
                <Button
                  type="submit"
                  variant="brand"
                  disabled={isPending}
                  className="h-14 px-8 rounded-xl text-sm"
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    "Get Access"
                  )}
                </Button>
              </div>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-destructive font-medium"
                >
                  {message}
                </motion.p>
              )}

              <p className="text-xs text-muted-foreground/50 font-body">
                By joining you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-aq-blue transition-colors"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-aq-blue transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
