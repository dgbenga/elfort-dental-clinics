import React from 'react';
import { FileText, Sparkles } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { CardAtom } from '@/components/atoms/CardAtom';
import { ServiceCardMolecule } from '@/components/molecules/ServiceCardMolecule';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT } from '@/data/content';

export const ServicesPricingOrganism: React.FC = () => {
  const comboService = SITE_CONTENT.services.items.find((s) => s.id === 'combo');
  const otherServices = SITE_CONTENT.services.items.filter((s) => s.id !== 'combo');

  return (
    <section id="services" className="py-14 sm:py-20 bg-white border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4">
            {SITE_CONTENT.services.title}
          </HeadingAtom>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.services.subtitle}
          </p>
        </div>

        {/* Featured Combo Card (Wide 16:9 Banner Aspect Ratio) */}
        {comboService && (
          <div className="mb-10">
            <CardAtom
              variant="default"
              className="p-8 sm:p-10 bg-sky-main/40 border-2 border-primary/40 shadow-clinical-hover rounded-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      Most Popular & Best Value
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-primary">
                      {comboService.price}
                    </span>
                  </div>

                  <HeadingAtom level={3} className="text-2xl sm:text-3xl text-primary font-bold mb-3">
                    {comboService.title}
                  </HeadingAtom>

                  <p className="text-foreground text-lg mb-6 leading-relaxed max-w-2xl">
                    {comboService.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {comboService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-foreground text-base sm:text-lg">
                        <span className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center shrink-0 border border-sky-line font-bold text-xs">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center">
                  <WhatsAppCTAButton
                    size="lg"
                    label={comboService.buttonText}
                    prefilledText={comboService.prefilledText}
                    locationTag="service_combo_featured"
                    className="w-full text-center text-lg"
                  />
                  <span className="text-xs text-ink-muted text-center lg:text-right mt-2 block">
                    Zero travel surcharges within local catchment
                  </span>
                </div>
              </div>
            </CardAtom>
          </div>
        )}

        {/* 2x2 Grid for Other Services: Maintains balanced 4:3 / 16:10 card aspect ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {otherServices.map((service) => (
            <ServiceCardMolecule
              key={service.id}
              service={service}
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
