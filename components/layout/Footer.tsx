import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/30 py-10 px-4 snap-start">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {"\u00A9"} 2026 Anaqio. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
