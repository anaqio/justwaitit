"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
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
    <section id="waitlist" className="relative py-24 sm:py-32 px-4">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-lg"
      >
        {/* Glass card */}
        <div className="glass-strong rounded-3xl p-8 sm:p-10 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Join the Waitlist
            </h2>
            <p className="text-sm text-muted-foreground">
              Be the first to experience Anaqio. Sign up for early access.
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  disabled={isPending}
                  className="flex-1 h-12 rounded-xl bg-background/50 border-border/50 placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
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
                    "Join Waitlist"
                  )}
                </Button>
              </div>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-destructive"
                >
                  {message}
                </motion.p>
              )}

              <p className="text-xs text-muted-foreground/60">
                By joining, you agree to our{" "}
                <a
                  href="/terms"
                  className="underline hover:text-foreground transition-colors"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="underline hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
