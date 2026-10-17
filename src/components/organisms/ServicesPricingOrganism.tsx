import React from 'react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { ServiceCardMolecule } from '@/components/molecules/ServiceCardMolecule';
import { SITE_CONTENT } from '@/data/content';
import { FileText } from 'lucide-react';

export const ServicesPricingOrganism: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4">
            {SITE_CONTENT.services.title}
          </HeadingAtom>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SITE_CONTENT.services.items.map((service, idx) => (
            <ServiceCardMolecule
              key={service.id}
              service={service}
              featured={idx === 1} // Cleaning highlighted subtly
            />
          ))}
        </div>

        {/* Pricing Assurance / Insurance Note */}
        <div className="p-6 rounded-2xl bg-sky-main/50 border border-sky-line flex items-start gap-4 max-w-3xl">
          <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 border border-sky-line/60 shadow-sm">
            <FileText className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="font-semibold text-primary block text-lg mb-1">
              Transparent Receipts & Insurance Claims
            </span>
            <p className="text-foreground text-base sm:text-lg leading-relaxed">
              {SITE_CONTENT.services.assuranceNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
