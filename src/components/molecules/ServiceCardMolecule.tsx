import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import type { ServiceItem } from '@/data/content';
import { cn } from '@/lib/utils';

export interface ServiceCardMoleculeProps {
  service: ServiceItem;
  featured?: boolean;
  className?: string;
  index?: number;
  total?: number;
}

export const ServiceCardMolecule: React.FC<ServiceCardMoleculeProps> = ({
  service,
  featured = false,
  className,
  index = 0,
  total = 5,
}) => {
  return (
    <CardAtom
      variant="default"
      className={cn(
        'bg-card text-card-foreground border border-sky-line/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_-5px_rgba(11,58,117,0.10),0_4px_12px_-2px_rgba(11,58,117,0.06)] hover:shadow-clinical-hover transition-all duration-300 relative',
        featured ? 'ring-2 ring-primary/40 border-primary/50' : '',
        className
      )}
    >
      {/* Structural Metadata Header: Counter & Upfront Price Tag */}
      <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-sky-line/50">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-md bg-sky-main border border-sky-line tracking-wider uppercase">
            Service {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="text-ink-muted text-xs font-medium hidden sm:inline">
            Direct Home Visit
          </span>
        </div>
        <div className="shrink-0 px-3.5 py-1.5 rounded-xl bg-sky-main text-primary font-bold text-base sm:text-lg border border-sky-line shadow-2xs">
          {service.price}
        </div>
      </div>

      {/* Landscape Layout: Left Overview (7 cols) & Right Action (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Service Overview */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <HeadingAtom level={3} className="text-2xl sm:text-3xl text-primary font-bold mb-3 tracking-tight">
              {service.title}
            </HeadingAtom>

            <p className="text-foreground text-lg leading-relaxed mb-6">
              {service.description}
            </p>
          </div>

          {/* Clinical Assurance Footnote */}
          <div className="pt-4 border-t border-sky-line/40 flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              Hospital-Grade Sterilization
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 inline-block" />
              Zero Travel Surcharges
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 inline-block" />
              Itemized Written Receipt
            </span>
          </div>
        </div>

        {/* Right Column: Features & Direct WhatsApp Action */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-sky-main/40 rounded-2xl p-6 sm:p-7 border border-sky-line/60">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-4">
              What&apos;s Included:
            </span>
            <div className="space-y-3 mb-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center shrink-0 border border-sky-line/80 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <span className="text-foreground text-base sm:text-lg leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 mt-auto">
            <WhatsAppCTAButton
              variant="primary"
              size="lg"
              label={service.buttonText}
              prefilledText={service.prefilledText}
              locationTag={`service_${service.id}`}
              containerClassName="w-full"
              className="w-full text-center text-lg justify-center shadow-xs"
            />
            <span className="text-xs text-ink-muted text-center mt-2 block">
              Clear price confirmed upfront before booking
            </span>
          </div>
        </div>
      </div>
    </CardAtom>
  );
};
