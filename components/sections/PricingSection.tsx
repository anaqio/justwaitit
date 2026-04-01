'use client';

import { PricingTierAtom } from '@/components/atoms/PricingTierAtom';
import { useAnimationReady } from '@/hooks/use-animation-ready';
import { PRICING_TIERS } from '@/lib/data/pricing-section';

export function PricingSection({
  background = 'bg-background',
}: {
  background?: string;
}) {
  const { animated } = useAnimationReady();

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className={`relative flex min-h-[100dvh] flex-col items-center justify-center px-4 pb-24 pt-32 lg:pt-48 ${background}`}
    >
      <h2 id="pricing-heading" className="sr-only">
        Pricing Plans
      </h2>

      <div className="mb-16 text-center">
        <p className="mb-4 text-center font-label text-[0.65rem] uppercase tracking-label text-muted-foreground">
          Simple, Transparent Pricing
        </p>
        <h3 className="text-center font-display text-[clamp(2.5rem,5vw,6rem)] font-light leading-tight">
          Plans for every{' '}
          <em className="text-brand-gradient not-italic">stage</em> of growth
        </h3>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {PRICING_TIERS.map((tier, index) => (
          <PricingTierAtom
            key={tier.name}
            tier={tier}
            index={animated ? index : 0}
          />
        ))}
      </div>
    </section>
  );
}
