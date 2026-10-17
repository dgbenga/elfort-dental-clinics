import React from 'react';
import { Check } from 'lucide-react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import type { ServiceItem } from '@/data/content';
import { cn } from '@/lib/utils';

export interface ServiceCardMoleculeProps {
  service: ServiceItem;
  featured?: boolean;
  className?: string;
}

export const ServiceCardMolecule: React.FC<ServiceCardMoleculeProps> = ({
  service,
  featured = false,
  className,
}) => {
  return (
    <CardAtom
      variant="default"
      className={cn(
        'flex flex-col justify-between h-full bg-white relative transition-all duration-200',
        featured ? 'ring-2 ring-primary border-primary shadow-clinical-hover' : '',
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <HeadingAtom level={3} className="text-2xl text-primary font-bold">
            {service.title}
          </HeadingAtom>
          <div className="shrink-0 px-3.5 py-1.5 rounded-xl bg-sky-main text-primary font-bold text-base border border-sky-line">
            {service.price}
          </div>
        </div>

        <p className="text-foreground text-lg mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-3 mb-8 pt-4 border-t border-sky-line/50">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-sky-main text-primary flex items-center justify-center shrink-0 border border-sky-line/60">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              </div>
              <span className="text-foreground text-base sm:text-lg">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <WhatsAppCTAButton
          variant={featured ? 'primary' : 'secondary'}
          size="default"
          label={service.buttonText}
          prefilledText={service.prefilledText}
          locationTag={`service_${service.id}`}
          className="w-full justify-center"
        />
      </div>
    </CardAtom>
  );
};
