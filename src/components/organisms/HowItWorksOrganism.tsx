import React from 'react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { ProcessStepMolecule } from '@/components/molecules/ProcessStepMolecule';
import { SITE_CONTENT } from '@/data/content';

export const HowItWorksOrganism: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4">
            {SITE_CONTENT.howItWorks.title}
          </HeadingAtom>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SITE_CONTENT.howItWorks.steps.map((step) => (
            <ProcessStepMolecule
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
