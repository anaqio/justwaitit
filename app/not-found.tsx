import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="glass-strong w-full max-w-md space-y-8 rounded-[2.5rem] border-white/5 p-12 text-center">
        {/* Animated 404 Number */}
        <div className="relative mx-auto select-none">
          <span className="text-brand-gradient font-display text-[8rem] font-black leading-none tracking-tighter">
            404
          </span>
          <div className="animate-glow pointer-events-none absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="space-y-2">
          <h1 className="font-display text-2xl font-bold italic tracking-tight">
            Page not found
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This page doesn&apos;t exist in our studio yet. It may have been
            moved, renamed, or is still in production.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button asChild variant="brand" className="h-12 rounded-xl font-bold">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
          >
            <Link href="/#waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
