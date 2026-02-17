import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      {
        /**
               <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
              <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                  <Link href={"/"}>anaqio</Link>
                </div>
                <div className="flex items-center gap-4">
                  <Suspense>
                    <AuthButton />
                  </Suspense>
                  <ThemeSwitcher />
                </div>
              </div>
            </nav>
         */
      }

      <div className="flex-1 flex items-center justify-center w-full">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/logo.svg"
            alt="anaqio logo"
            width={300}
            height={300}
            priority
            className="w-auto h-auto"
          />
        </div>
      </div>

      <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8">
        <p className="text-foreground/60">
          © 2026 anaqio. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
