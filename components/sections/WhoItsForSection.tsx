'use client';

import { FeatureCard } from '@/components/ui/feature-card';
import { Section, SectionContainer } from '@/components/ui/section';
import { GradientText, SectionHeader } from '@/components/ui/section-header';
import { WhoItsForSectionText } from '@/lib/content/who-its-for';

export function WhoItsForSection() {
  const { eyebrow, headline, footer, audiences } = WhoItsForSectionText;

  return (
    <Section id="who-its-for">
      <SectionContainer>
        <SectionHeader eyebrow={eyebrow}>
          {headline.pre} <GradientText>{headline.gradient}</GradientText>
        </SectionHeader>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <FeatureCard
              key={a.title}
              icon={a.icon}
              title={a.title}
              body={a.body}
              index={i}
            />
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{footer}</p>
      </SectionContainer>
    </Section>
  );
}
