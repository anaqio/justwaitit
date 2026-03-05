import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-border/30 bg-background/50 px-4 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 sm:flex-row">
        <div className="flex flex-col items-center gap-6 sm:items-start">
          <div className="space-y-2 text-center sm:text-left">
            <p className="font-display text-sm font-bold tracking-tighter">
              ANAQIO™
            </p>
            <p className="font-serif text-xs italic text-muted-foreground/80">
              Your Digital Atelier. Create. Style. Launch.
            </p>
            <p className="font-body text-xs text-muted-foreground">
              {'\u00A9'} 2026 Anaqio. All rights reserved.
            </p>
          </div>
          {/**
           * @TODO
           * - [ ] add social media iconss
           */}
        </div>

        <nav
          aria-label="Footer Navigation"
          className="grid grid-cols-2 items-center gap-x-10 gap-y-6 text-center sm:flex sm:text-left"
        >
          <Link
            href="/brand"
            className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-aq-blue"
          >
            Brand
          </Link>
          <Link
            href="/legal-mentions"
            className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-aq-blue"
          >
            Legal
          </Link>
          <Link
            href="/terms"
            className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-aq-blue"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-aq-blue"
          >
            Privacy
          </Link>
          <Link
            href="/cookies"
            className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-aq-blue"
          >
            Cookies
          </Link>
        </nav>
      </div>
    </footer>
  );
}
