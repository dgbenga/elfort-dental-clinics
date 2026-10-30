import React from 'react';
import { FileText } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { ServiceCardMolecule } from '@/components/molecules/ServiceCardMolecule';
import { SITE_CONTENT } from '@/data/content';

export const ServicesPricingOrganism: React.FC = () => {
  const services = SITE_CONTENT.services.items;

  return (
    <section id="services" className="py-12 sm:py-20 bg-white border-b border-sky-line/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-16">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-3 sm:mb-4">
            {SITE_CONTENT.services.title}
          </HeadingAtom>
          <p className="text-base sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.services.subtitle}
          </p>
        </div>

        {/* Sticky Stacking Landscape Card Deck (The Cards Overlay Part) */}
        <div className="relative space-y-10 sm:space-y-16 lg:space-y-24 pb-16 sm:pb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card-stack-item sticky transition-all duration-300"
              style={{
                top: `calc(var(--stack-top-base, 4.5rem) + ${index} * var(--stack-step, 0.75rem))`,
                zIndex: 10 + index,
              }}
            >
              <ServiceCardMolecule
                service={service}
                index={index}
                total={services.length}
                featured={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Pricing Assurance / Insurance Note */}
        <div className="relative z-30 mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl bg-sky-main/50 border border-sky-line flex items-start gap-3.5 sm:gap-4 max-w-3xl">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 border border-sky-line/60 shadow-xs">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="font-semibold text-primary block text-base sm:text-lg mb-1">
              Transparent Receipts & Insurance Claims
            </span>
            <p className="text-foreground text-sm sm:text-lg leading-relaxed">
              {SITE_CONTENT.services.assuranceNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
