import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/30 py-10 px-4 snap-start bg-background/50 backdrop-blur-sm relative z-10">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <p className="text-sm text-muted-foreground font-body">
            {"\u00A9"} 2026 Anaqio. All rights reserved.
          </p>
          <ThemeSwitcher />
        </div>

        <nav aria-label="Footer Navigation" className="grid grid-cols-2 sm:flex items-center gap-x-10 gap-y-4">
          <Link
            href="/brand"
            className="text-[10px] font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-[0.2em]"
          >
            Brand
          </Link>
          <Link
            href="/legal-mentions"
            className="text-[10px] font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-[0.2em]"
          >
            Legal
          </Link>
          <Link
            href="/terms"
            className="text-[10px] font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-[0.2em]"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-[10px] font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-[0.2em]"
          >
            Privacy
          </Link>
          <Link
            href="/cookies"
            className="text-[10px] font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-[0.2em]"
          >
            Cookies
          </Link>
        </nav>
      </div>
    </footer>
  );
}
