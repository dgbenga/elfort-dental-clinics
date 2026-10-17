import React from 'react';
import { Award, ShieldCheck, Tag, Clock, CheckCircle } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { CardAtom } from '@/components/atoms/CardAtom';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { PhoneCallButton } from '@/components/molecules/PhoneCallButton';
import { TrustProofMolecule } from '@/components/molecules/TrustProofMolecule';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const HeroOrganism: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-sky-main/60 pt-10 sm:pt-16 pb-14 sm:pb-20 border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-3">
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
            <p className="text-sm text-ink-muted mb-8">
              {PRACTICE_CONFIG.responsePromise}
            </p>

            {/* Trust Proof Badges (Inline below buttons) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-sky-line/50">
              {SITE_CONTENT.hero.trustPoints.map((point, idx) => (
                <TrustProofMolecule
                  key={idx}
                  iconName={point.icon}
                  text={point.text}
                  className="w-full justify-start text-left"
                />
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor (5 cols on Desktop) - Balances 16:9 / 16:10 Widescreen */}
          <div className="lg:col-span-5 hidden lg:block">
            <CardAtom
              variant="default"
              className="p-8 bg-white border-2 border-sky-line shadow-clinical-hover relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="flex items-center justify-between pb-6 border-b border-sky-line/60 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-main text-primary flex items-center justify-center font-bold text-lg border border-sky-line">
                    <Award className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-primary block leading-tight text-lg">
                      {PRACTICE_CONFIG.dentistName}
                    </span>
                    <span className="text-xs text-ink-muted block">
                      {PRACTICE_CONFIG.credentials}
                    </span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-sky-main text-primary text-xs font-semibold border border-sky-line/80">
                  GDC Reg. 248910
                </div>
              </div>

              {/* Core Reassurance Callout List */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-sky-main text-primary flex items-center justify-center shrink-0 mt-0.5 border border-sky-line/70">
                    <CheckCircle className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-primary block text-base leading-snug">
                      Kitchen or Living Room Care
                    </span>
                    <span className="text-sm text-foreground leading-relaxed block">
                      Treated comfortably in your favorite armchair or sofa with quiet portable equipment.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-sky-main text-primary flex items-center justify-center shrink-0 mt-0.5 border border-sky-line/70">
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-primary block text-base leading-snug">
                      Hospital-Grade Sterilization
                    </span>
                    <span className="text-sm text-foreground leading-relaxed block">
                      Instruments vacuum-sealed in single-use surgical pouches and unsealed in your presence.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-sky-main text-primary flex items-center justify-center shrink-0 mt-0.5 border border-sky-line/70">
                    <Tag className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-primary block text-base leading-snug">
                      Guaranteed Upfront Pricing
                    </span>
                    <span className="text-sm text-foreground leading-relaxed block">
                      Confirmed in writing before any procedure begins. Zero surprise bills.
                    </span>
                  </div>
                </div>
              </div>

              {/* Urgent Availability Footer Strip */}
              <div className="p-4 rounded-xl bg-sky-main/50 border border-sky-line text-sm flex items-center justify-between text-ink">
                <span className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                  Next Available Slots:
                </span>
                <span className="font-bold text-primary">This Week</span>
              </div>
            </CardAtom>
          </div>
        </div>
      </div>
    </section>
  );
};
