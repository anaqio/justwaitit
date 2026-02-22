import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/30 py-10 px-4 snap-start bg-background/50 backdrop-blur-sm relative z-10">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <p className="text-sm text-muted-foreground">
            {"\u00A9"} 2026 Anaqio. All rights reserved.
          </p>
          <ThemeSwitcher />
        </div>

        <div className="grid grid-cols-2 sm:flex items-center gap-x-8 gap-y-4">
          <Link
            href="/brand"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
          >
            Brand
          </Link>
          <Link
            href="/legal-mentions"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
          >
            Legal
          </Link>
          <Link
            href="/terms"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
          >
            Privacy
          </Link>
          <Link
            href="/cookies"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
