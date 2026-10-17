import React from 'react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { PhoneCallButton } from '@/components/molecules/PhoneCallButton';
import { TrustProofMolecule } from '@/components/molecules/TrustProofMolecule';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const HeroOrganism: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-sky-main/60 pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Main Headline (Anti-Pill Law strictly applied: no pill tags, pure typographic power) */}
          <HeadingAtom
            level={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.12] mb-6"
          >
            {SITE_CONTENT.hero.headline}
          </HeadingAtom>

          {/* Lead Subheadline */}
          <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-8 max-w-2xl font-normal">
            {SITE_CONTENT.hero.subheadline}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
            <WhatsAppCTAButton
              size="lg"
              label={SITE_CONTENT.hero.primaryButtonText}
              prefilledText={SITE_CONTENT.hero.prefilledText}
              locationTag="hero_primary"
              className="text-lg sm:text-xl shadow-[0_4px_18px_rgba(11,58,117,0.25)]"
            />
            <PhoneCallButton
              size="lg"
              label={SITE_CONTENT.hero.secondaryButtonText}
              className="bg-white hover:bg-sky-deep text-primary border-2 border-sky-line/80 text-lg"
            />
          </div>

          {/* Micro Assurance Copy */}
          <p className="text-sm text-ink-muted mb-12">
            {PRACTICE_CONFIG.responsePromise}
          </p>

          {/* 3 Trust Proof Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-sky-line/50">
            {SITE_CONTENT.hero.trustPoints.map((point, idx) => (
              <TrustProofMolecule
                key={idx}
                iconName={point.icon}
                text={point.text}
                className="w-full justify-start sm:justify-center text-center"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
