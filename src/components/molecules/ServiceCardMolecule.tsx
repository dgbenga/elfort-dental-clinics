import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { MinimalistContactActions } from '@/components/molecules/MinimalistContactActions';
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
        'bg-card text-card-foreground border border-sky-line/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_10px_30px_-5px_rgba(11,58,117,0.10),0_4px_12px_-2px_rgba(11,58,117,0.06)] hover:shadow-clinical-hover transition-all duration-300 relative',
        featured ? 'ring-2 ring-primary/40 border-primary/50' : '',
        className
      )}
    >
      {/* Structural Metadata Header: Counter, Price Tag & Minimalist Icons */}
      <div className="flex items-center justify-between gap-3 pb-3 sm:pb-4 mb-3 sm:mb-5 border-b border-sky-line/50">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-md bg-sky-main border border-sky-line tracking-wider uppercase">
            Service {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="text-ink-muted text-xs font-medium hidden sm:inline">
            Direct Home Visit
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="shrink-0 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-sky-main text-primary font-bold text-xs sm:text-base border border-sky-line shadow-2xs">
            {service.price}
          </div>
          {/* Small minimalist icons in header for immediate 1-tap action */}
          <MinimalistContactActions
            prefilledText={service.prefilledText}
            locationTag={`service_header_${service.id}`}
            size="sm"
          />
        </div>
      </div>

      {/* Landscape Layout: Left Overview (7 cols) & Right Action (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
        {/* Left Column: Service Overview */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <HeadingAtom level={3} className="text-xl sm:text-2xl text-primary font-bold mb-2 sm:mb-3 tracking-tight">
              {service.title}
            </HeadingAtom>

            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              {service.description}
            </p>
          </div>

          {/* Clinical Assurance Footnote */}
          <div className="pt-2.5 sm:pt-3 border-t border-sky-line/40 flex flex-wrap items-center gap-y-1.5 gap-x-3 sm:gap-x-4 text-xs text-ink-muted mb-3 lg:mb-0">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              Hospital-Grade Sterilization
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 inline-block" />
              Zero Travel Surcharges
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 inline-block" />
              Itemized Receipt
            </span>
          </div>
        </div>

        {/* Right Column: Features & Minimalist Icon Action */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-sky-main/40 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-sky-line/60">
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-primary uppercase tracking-wider block mb-2 sm:mb-3">
              What&apos;s Included:
            </span>
            <div className="space-y-2 mb-3 sm:mb-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-white text-primary flex items-center justify-center shrink-0 border border-sky-line/80 mt-0.5 shadow-2xs">
                    <Check className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <span className="text-foreground text-xs sm:text-sm leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Minimalist Bottom Bar: Small Minimalist Icons */}
          <div className="pt-2.5 border-t border-sky-line/60 flex items-center justify-between gap-3 mt-auto">
            <span className="text-[11px] text-ink-muted">
              Inquire or book visit:
            </span>
            <MinimalistContactActions
              prefilledText={service.prefilledText}
              locationTag={`service_footer_${service.id}`}
              size="sm"
            />
          </div>
        </div>
      </div>
    </CardAtom>
  );
};
