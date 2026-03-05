'use client';

import { Asterisk } from 'lucide-react';

const problems = [
  {
    title: 'Expensive Productions',
    description:
      'Traditional studio shoots cost thousands in equipment, talent, and logistics.',
  },
  {
    title: 'Slow Time-to-Market',
    description:
      "Weeks of planning and editing delay your collection's digital launch.",
  },
  {
    title: 'Creative Limits',
    description:
      'Physical constraints limit your ability to experiment with diverse environments and styles.',
  },
];

export function ProblemSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 py-24 sm:px-12 lg:px-20">
      <div className="z-10 mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Heading */}
          <div className="flex max-w-xl flex-col justify-center duration-1000 animate-in fade-in slide-in-from-bottom-8 fill-mode-both">
            <h2 className="text-balance font-display text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Old Way is <br />
              <span className="font-serif italic">Costing You</span>.
            </h2>
            <p className="mt-6 text-lg font-light text-muted-foreground sm:text-xl">
              Fashion ecommerce moves fast. Waiting weeks and paying premium
              rates for traditional photography holds your brand back.
            </p>
          </div>

          {/* Right Column - Problem List */}
          <div className="flex flex-col justify-center gap-12">
            {problems.map((item, index) => (
              <div
                key={index}
                className="group flex gap-6 duration-1000 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                style={{ animationDelay: `${200 * (index + 1)}ms` }}
              >
                <div className="flex-shrink-0 pt-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aq-blue/10">
                    <Asterisk className="h-5 w-5 text-aq-blue transition-transform duration-700 ease-out group-hover:rotate-180" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
