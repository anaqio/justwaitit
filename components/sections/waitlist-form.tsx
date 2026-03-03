"use client";

import { useState, useTransition, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist } from "@/lib/actions/waitlist";
import { cn } from "@/lib/utils";
import { useMultiStepForm } from "@/hooks/use-multi-step-form";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { FormStep } from "@/components/sections/form-step";
import { StepTransition } from "@/components/sections/step-transition";
import { FULL_VARIANT_STEPS } from "@/lib/types/waitlist-form";
import { sanitizeEmail } from "@/lib/utils/form-validation";

interface WaitlistFormProps {
  source: string;
  variant?: "simple" | "full";
  className?: string;
}

export function WaitlistForm({ source, variant = "full", className }: WaitlistFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  // Memoize step configurations for performance
  const steps = useMemo(() => FULL_VARIANT_STEPS, []);

  // Multi-step form state (only for full variant)
  const {
    currentStep,
    totalSteps,
    formData,
    errors,
    isAnimating,
    next,
    previous,
    updateField,
    markFieldTouched,
    validateCurrentStep,
    setIsAnimating,
  } = useMultiStepForm(steps);

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

  const handleMultiStepSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate current step before proceeding
    if (!validateCurrentStep()) {
      return;
    }

    // If not on final step, advance to next step
    if (currentStep < totalSteps) {
      setDirection("forward");
      setIsAnimating(true);
      setTimeout(() => {
        next();
        setIsAnimating(false);
      }, 400);
      return;
    }

    // Final step - submit form
    const submitFormData = new FormData();
    submitFormData.append("source", source);

    // Add all form data with email sanitization
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "email") {
        submitFormData.append(key, sanitizeEmail(value));
      } else {
        submitFormData.append(key, value);
      }
    });

    startTransition(async () => {
      try {
        const result = await joinWaitlist(submitFormData);
        if (result.success) {
          setStatus("success");
          setMessage(result.message);
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

  const handlePrevious = () => {
    setDirection("backward");
    setIsAnimating(true);
    setTimeout(() => {
      previous();
      setIsAnimating(false);
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // Handle Enter key to submit/continue
    if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
      e.preventDefault();
      const form = e.currentTarget;
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      submitButton?.click();
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-4 py-8 text-center"
      >
        <div className="flex justify-center items-center bg-green-500/10 mx-auto border border-green-500/20 rounded-full w-16 h-16">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-foreground text-xl">You&apos;re on the list!</p>
          <p className="text-muted-foreground text-sm">{message}</p>
        </div>
      </motion.div>
    );
  }

  if (variant === "simple") {
    return (
      <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
        <input type="hidden" name="source" value={source} />
        {/* Simple variant still needs role for validation, but we can default it or hide it if needed. 
            Actually the schema REQUIRES role. So simple variant might need to be more clever or we update schema.
            For now, let's keep simple variant minimal but compliant. */}
        <input type="hidden" name="full_name" value="Early Access User" />
        <input type="hidden" name="role" value="Other" />
        <Input
          type="email"
          name="email"
          placeholder="professional@email.com"
          required
          disabled={isPending}
          className="bg-background/50 px-6 border-white/10 rounded-xl h-14"
        />
        <Button variant="brand" className="px-8 rounded-xl h-14 shrink-0" disabled={isPending}>
          {isPending ? "Joining..." : "Get Access"}
        </Button>
        {status === "error" && (
          <p className="-bottom-6 left-0 absolute text-destructive text-xs">{message}</p>
        )}
      </form>
    );
  }

  // Full variant with multi-step form
  return (
    <form onSubmit={handleMultiStepSubmit} onKeyDown={handleKeyDown} className={cn("z-10 relative space-y-6", className)}>
      {/* Progress Indicator */}
      <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

      {/* Step Content with Transition */}
      <StepTransition currentStep={currentStep} direction={direction}>
        <FormStep
          step={steps[currentStep - 1]}
          formData={formData}
          errors={errors}
          onChange={updateField}
          onBlur={markFieldTouched}
          disabled={isPending || isAnimating}
        />
      </StepTransition>

      {/* Server Error Message */}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-destructive text-sm text-center"
        >
          {message}
        </motion.p>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        {currentStep > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={isPending || isAnimating}
            className="px-6 rounded-xl h-14"
          >
            ← Back
          </Button>
        )}
        <Button
          type="submit"
          variant="brand"
          disabled={isPending || isAnimating}
          className="flex-1 shadow-aq-blue/20 shadow-lg rounded-xl h-14 font-bold text-base"
        >
          {isPending
            ? "Securing your spot..."
            : currentStep < totalSteps
            ? "Continue →"
            : "Secure Beta Access →"}
        </Button>
      </div>
    </form>
  );
}
