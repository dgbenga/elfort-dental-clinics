import React from 'react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { MinimalistContactActions } from '@/components/molecules/MinimalistContactActions';
import { SITE_CONTENT } from '@/data/content';

export const FinalCTABandOrganism: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-primary text-white border-b border-navy-hover">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HeadingAtom
          level={2}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
        >
          {SITE_CONTENT.finalCTA.title}
        </HeadingAtom>

        <p className="text-base sm:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto font-normal">
          {SITE_CONTENT.finalCTA.subtitle}
        </p>

        {/* Small Minimalist Contact Action Icons */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <MinimalistContactActions
            size="lg"
            variant="inverted"
            locationTag="final_cta_band"
          />
        </div>

        <p className="text-xs sm:text-sm text-white/70">
          Tap WhatsApp or Call icon · {SITE_CONTENT.finalCTA.microCopy}
        </p>
      </div>
    </section>
  );
};
