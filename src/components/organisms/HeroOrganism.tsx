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
    <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-border bg-background">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-dentist-home.jpg"
          alt="Friendly licensed mobile dentist providing gentle dental care to a patient in a comfortable home living room"
          className="w-full h-full object-cover object-[center_right] sm:object-right-top"
          loading="eager"
          fetchPriority="high"
        />
        {/* Responsive Dual-Layer Lighting Overlay for WCAG AAA Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 hidden lg:block" />
        <div className="absolute inset-0 bg-white/92 backdrop-blur-[2px] lg:hidden" />
      </div>

      {/* Hero Content (z-10 relative) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Main Headline (Anti-Pill Law strictly applied: pure typographic power) */}
            <HeadingAtom
              level={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.12] mb-6 drop-shadow-xs"
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
                className="bg-white/90 hover:bg-secondary text-primary border-2 border-border text-lg shadow-xs"
              />
            </div>

            {/* Micro Assurance Copy */}
            <p className="text-sm text-muted-foreground mb-8">
              {PRACTICE_CONFIG.responsePromise}
            </p>

            {/* Trust Proof Badges (Inline below buttons) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-border/80">
              {SITE_CONTENT.hero.trustPoints.map((point, idx) => (
                <TrustProofMolecule
                  key={idx}
                  iconName={point.icon}
                  text={point.text}
                  className="w-full justify-start text-left bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-border/50"
                />
              ))}
            </div>
          </div>

          {/* Right Column: Floating Medical Reassurance Badge (5 cols on Desktop) */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-end items-end">
            <CardAtom
              variant="default"
              className="p-6 bg-white/90 backdrop-blur-md border border-white/80 shadow-clinical-hover relative overflow-hidden max-w-md w-full"
            >
              {/* Top Accent Strip */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0">
                    <Award className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-primary block leading-tight text-base">
                      {PRACTICE_CONFIG.dentistName}
                    </span>
                    <span className="text-xs text-muted-foreground block">
                      {PRACTICE_CONFIG.credentials}
                    </span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-secondary text-primary text-xs font-semibold border border-border">
                  Licensed Practice
                </div>
              </div>

              {/* Core Reassurance Callout List */}
              <div className="space-y-3.5 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 mt-0.5 border border-border">
                    <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-primary block text-sm leading-snug">
                      Living Room or Armchair Care
                    </span>
                    <span className="text-xs text-foreground/90 leading-relaxed block">
                      Treated comfortably in your home with quiet portable dental equipment.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 mt-0.5 border border-border">
                    <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-primary block text-sm leading-snug">
                      Hospital-Grade Sterilization
                    </span>
                    <span className="text-xs text-foreground/90 leading-relaxed block">
                      Autoclaved, vacuum-sealed instruments unsealed right in front of you.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 mt-0.5 border border-border">
                    <Tag className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-primary block text-sm leading-snug">
                      Transparent Upfront Pricing
                    </span>
                    <span className="text-xs text-foreground/90 leading-relaxed block">
                      Agreed before any treatment begins. Zero surprises.
                    </span>
                  </div>
                </div>
              </div>

              {/* Urgent Availability Footer Strip */}
              <div className="p-3 rounded-xl bg-secondary/60 border border-border text-xs flex items-center justify-between text-foreground">
                <span className="flex items-center gap-2 font-medium">
                  <Clock className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
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
