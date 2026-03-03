"use client";

import { memo } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { FormStepProps } from "@/lib/types/waitlist-form";

export const FormStep = memo(function FormStep({
  step,
  formData,
  errors,
  onChange,
  onBlur,
  disabled,
}: FormStepProps) {
  return (
    <div className="space-y-5">
      {/* Step title and description */}
      <div className="space-y-2 mb-6 text-center">
        <h3 className="font-bold text-foreground text-xl">{step.title}</h3>
        <p className="text-muted-foreground text-sm">{step.description}</p>
      </div>

      {/* Form fields */}
      <div className="space-y-5">
        {step.fields.map((field) => {
          const fieldValue = formData[field.name] || "";
          const fieldError = errors[field.name];
          const fieldId = `${step.id}-${field.name}`;

          return (
            <div key={field.name} className="space-y-2">
              <label
                htmlFor={fieldId}
                className="ml-1 font-bold text-muted-foreground text-xs uppercase tracking-widest"
              >
                {field.label}
              </label>

              {/* Text and Email inputs */}
              {(field.type === "text" || field.type === "email") && (
                <Input
                  id={fieldId}
                  type={field.type}
                  name={field.name}
                  value={fieldValue}
                  placeholder={field.placeholder}
                  required={field.required}
                  disabled={disabled}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  onBlur={() => onBlur(field.name)}
                  className={cn(
                    "bg-background/40 border-white/10 rounded-xl h-12",
                    "placeholder:text-muted-foreground/30",
                    "focus:border-aq-blue/50 transition-all px-4",
                    fieldError && "border-destructive/50"
                  )}
                  aria-invalid={!!fieldError}
                  aria-describedby={fieldError ? `${fieldId}-error` : undefined}
                />
              )}

              {/* Select dropdown */}
              {field.type === "select" && (
                <select
                  id={fieldId}
                  name={field.name}
                  value={fieldValue}
                  required={field.required}
                  disabled={disabled}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  onBlur={() => onBlur(field.name)}
                  className={cn(
                    "flex border border-white/10 rounded-xl w-full h-12",
                    "bg-background/40 px-4 py-2 text-sm shadow-sm",
                    "transition-colors focus:border-aq-blue/50 focus:outline-none",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "appearance-none text-foreground",
                    fieldError && "border-destructive/50"
                  )}
                  aria-invalid={!!fieldError}
                  aria-describedby={fieldError ? `${fieldId}-error` : undefined}
                >
                  <option value="" disabled>
                    {field.placeholder || `Select ${field.label}`}
                  </option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}

              {/* Error message */}
              {fieldError && (
                <p
                  id={`${fieldId}-error`}
                  className="ml-1 font-medium text-destructive text-xs"
                  role="alert"
                >
                  {fieldError}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});
