'use client';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { ScrollLink } from '@/components/ui/scroll-link';
import { Section, SectionContainer } from '@/components/ui/section';
import { FinalCTAText } from '@/lib/content/final-cta';

export function FinalCTA() {
  const { headline, cta } = FinalCTAText;

  return (
    <Section id="final-cta" className="relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aq-blue/10 blur-[100px]" />

      <SectionContainer>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold leading-tight text-secondary-foreground md:text-5xl lg:text-6xl">
              {headline.pre}
              <br />
              <span className="text-brand-gradient">{headline.gradient}</span>
            </h2>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <ScrollLink targetId="waitlist">{cta.primary}</ScrollLink>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <ScrollLink targetId="how-it-works">{cta.secondary}</ScrollLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </Section>
  );
}
