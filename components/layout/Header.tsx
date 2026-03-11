'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

import { AnaqioTypographyLogo } from '@/components/ui/anaqio-typography-logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverKey, setHoverKey] = useState(0);
  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const prev = lastScrollYRef.current;
      const isScrollingDown = current > prev && current > 80;

      setIsHidden(isScrollingDown);
      setIsScrolled(current > 40);
      lastScrollYRef.current = current;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (isScrollingDown) {
        scrollTimeoutRef.current = setTimeout(() => {
          setIsHidden(false);
        }, 1000);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setHoverKey((k) => k + 1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <header
      className={cn(
        'ease-smooth pointer-events-none fixed left-0 right-0 top-0 z-50 p-2 transition-all duration-500',
        'animate-in fade-in slide-in-from-top-full fill-mode-both',
        isHidden
          ? '-translate-y-[120px] opacity-0'
          : 'translate-y-0 opacity-100',
        isScrolled ? 'py-2' : 'py-4'
      )}
      style={{ viewTransitionName: 'site-header' }}
    >
      <nav
        aria-label="Main Navigation"
        className={cn(
          'ease-smooth pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-xl border border-border/40 bg-background/40 shadow-md backdrop-blur-xl backdrop-saturate-150 transition-[padding,opacity,transform,box-shadow] duration-500',
          isScrolled ? 'px-3 py-2 sm:px-5' : 'px-4 py-3 sm:px-6'
        )}
        style={{ touchAction: 'manipulation' }}
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label="Anaqio Home"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ viewTransitionName: 'site-logo' }}
        >
          <AnaqioTypographyLogo
            key={hoverKey}
            className={cn(
              'ease-smooth transition-all duration-500',
              isScrolled ? 'w-24' : 'w-32'
            )}
            variant={isHovered ? 'outline-fill' : 'none'}
          />
          <span className="sr-only">anaqio</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden items-center gap-4 text-sm font-medium text-foreground/70 md:flex">
            <Link
              href="/about"
              className={cn(
                'transition-all duration-500 hover:text-aq-blue',
                isScrolled ? 'text-xs' : 'text-sm'
              )}
            >
              About
            </Link>
            <Link
              href="/terms"
              className={cn(
                'transition-all duration-500 hover:text-aq-blue',
                isScrolled ? 'text-xs' : 'text-sm'
              )}
            >
              Terms
            </Link>
          </div>
          <Button
            variant="brand"
            className={cn(
              'mr-1 rounded backdrop-blur-xl transition-all duration-500 sm:mr-2',
              isScrolled ? 'text-xs' : 'text-sm'
            )}
            onClick={() => {
              document
                .getElementById('waitlist')
                ?.scrollIntoView({ behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
            aria-label="Scroll to Waitlist Section"
          >
            Join Waitlist
          </Button>

          <button
            className="flex items-center justify-center p-1 text-foreground/70 transition-colors hover:text-aq-blue md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-xl border border-border/40 bg-background/95 p-4 shadow-xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 text-sm font-medium text-foreground/70">
              <Link
                href="/about"
                className="transition-colors hover:text-aq-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-aq-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Terms
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
