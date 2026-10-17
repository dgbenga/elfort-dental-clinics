import React from 'react';
import { Phone } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const FinalCTABandOrganism: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-primary text-white border-b border-navy-hover">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HeadingAtom
          level={2}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          {SITE_CONTENT.finalCTA.title}
        </HeadingAtom>

        <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
          {SITE_CONTENT.finalCTA.subtitle}
        </p>

        {/* Primary White Button (High Contrast on Navy) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <WhatsAppCTAButton
            variant="navy-inverted"
            size="lg"
            label={SITE_CONTENT.finalCTA.buttonText}
            prefilledText={SITE_CONTENT.finalCTA.prefilledText}
            locationTag="final_cta_band"
            className="text-lg sm:text-xl font-bold px-10 text-primary shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* Direct Phone Dial Option */}
        <div className="flex items-center justify-center gap-2 text-white/90 text-lg mb-4">
          <Phone className="w-5 h-5 text-white shrink-0" aria-hidden="true" />
          <span>
            {SITE_CONTENT.finalCTA.phonePrompt}{' '}
            <a
              href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
              className="font-bold underline underline-offset-4 hover:text-white transition-colors"
            >
              {PRACTICE_CONFIG.phoneDisplay}
            </a>
          </span>
        </div>

        <p className="text-sm text-white/70">
          {SITE_CONTENT.finalCTA.microCopy}
        </p>
      </div>
    </section>
  );
};
