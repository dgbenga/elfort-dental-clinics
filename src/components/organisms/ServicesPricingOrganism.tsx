import React, { useState } from 'react';
import { FileText, ChevronLeft, ChevronRight, Layers, List } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { ServiceCardMolecule } from '@/components/molecules/ServiceCardMolecule';
import { SITE_CONTENT } from '@/data/content';

export const ServicesPricingOrganism: React.FC = () => {
  const services = SITE_CONTENT.services.items;
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [mobileViewMode, setMobileViewMode] = useState<'card' | 'list'>('card');

  // Short labels for mobile pill navigation
  const mobileTabLabels = [
    'Scaling & Polish',
    'Root Planing',
    'Fluoride & Sealant',
    'Whitening',
    'Oral Counseling',
  ];

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

        {/* ========================================================
            MOBILE VIEW: Interactive Service Switcher & Clean List
            (Eliminates broken sticky scroll-traps on mobile screens)
           ======================================================== */}
        <div className="block lg:hidden">
          {/* Mobile View Mode Switcher */}
          <div className="flex items-center justify-between gap-2 mb-4 p-1.5 rounded-xl bg-sky-main/60 border border-sky-line">
            <button
              type="button"
              onClick={() => setMobileViewMode('card')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                mobileViewMode === 'card'
                  ? 'bg-primary text-white shadow-2xs'
                  : 'text-primary hover:bg-white/60'
              }`}
              aria-label="View services one by one"
            >
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Card Explorer</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileViewMode('list')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                mobileViewMode === 'list'
                  ? 'bg-primary text-white shadow-2xs'
                  : 'text-primary hover:bg-white/60'
              }`}
              aria-label="View all services as a list"
            >
              <List className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Full List ({services.length})</span>
            </button>
          </div>

          {mobileViewMode === 'card' ? (
            <div>
              {/* Horizontal Scrollable Service Filter Pills */}
              <div
                className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none -mx-4 px-4 focus:outline-none"
                role="tablist"
                aria-label="Select dental service"
              >
                {services.map((service, idx) => (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    aria-selected={mobileActiveIndex === idx}
                    onClick={() => setMobileActiveIndex(idx)}
                    className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all active:scale-95 ${
                      mobileActiveIndex === idx
                        ? 'bg-primary text-white border-primary shadow-xs'
                        : 'bg-white text-primary border-sky-line hover:bg-sky-main'
                    }`}
                  >
                    {mobileTabLabels[idx] || service.title}
                  </button>
                ))}
              </div>

              {/* Single Active Service Card (Zero scroll trap!) */}
              <div className="relative animate-in fade-in duration-200">
                <ServiceCardMolecule
                  service={services[mobileActiveIndex]}
                  index={mobileActiveIndex}
                  total={services.length}
                  featured={mobileActiveIndex === 0}
                />
              </div>

              {/* Mobile Carousel Navigation Controls */}
              <div className="flex items-center justify-between mt-5 pt-3 border-t border-sky-line/50">
                <button
                  type="button"
                  onClick={() => setMobileActiveIndex((prev) => Math.max(0, prev - 1))}
                  disabled={mobileActiveIndex === 0}
                  className="flex items-center gap-1 px-3.5 py-2.5 rounded-xl border border-sky-line bg-white text-primary font-bold text-xs disabled:opacity-35 disabled:pointer-events-none active:scale-95 transition-all shadow-2xs"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Prev</span>
                </button>

                {/* Step indicator dots */}
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  {services.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setMobileActiveIndex(dotIdx)}
                      className={`h-2 rounded-full transition-all ${
                        mobileActiveIndex === dotIdx
                          ? 'w-6 bg-primary'
                          : 'w-2 bg-sky-line hover:bg-primary/50'
                      }`}
                      aria-label={`Jump to service ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setMobileActiveIndex((prev) => Math.min(services.length - 1, prev + 1))}
                  disabled={mobileActiveIndex === services.length - 1}
                  className="flex items-center gap-1 px-3.5 py-2.5 rounded-xl border border-sky-line bg-white text-primary font-bold text-xs disabled:opacity-35 disabled:pointer-events-none active:scale-95 transition-all shadow-2xs"
                  aria-label="Next service"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          ) : (
            /* Clean Vertical Stacked List without sticky traps */
            <div className="space-y-6">
              {services.map((service, index) => (
                <ServiceCardMolecule
                  key={service.id}
                  service={service}
                  index={index}
                  total={services.length}
                  featured={index === 0}
                />
              ))}
            </div>
          )}
        </div>

        {/* ========================================================
            DESKTOP VIEW: Stacking Landscape Card Deck
            (Preserved for large viewports >= 1024px)
           ======================================================== */}
        <div className="hidden lg:block relative space-y-24 pb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card-stack-item sticky transition-all duration-300"
              style={{
                top: `calc(var(--stack-top-base, 5.5rem) + ${index} * var(--stack-step, 1.1rem))`,
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
