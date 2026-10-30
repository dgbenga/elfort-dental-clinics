import React from 'react';
import { Award, ShieldCheck, Tag, Clock, CheckCircle } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { CardAtom } from '@/components/atoms/CardAtom';
import { MinimalistContactActions } from '@/components/molecules/MinimalistContactActions';
import { TrustProofMolecule } from '@/components/molecules/TrustProofMolecule';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const HeroOrganism: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-20 pb-12 sm:pb-24 border-b border-border bg-background">
      {/* Background Image Container - Desktop Ambient Layer */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img
          src="/hero-dentist-home.jpg"
          alt="Friendly licensed mobile dentist providing gentle dental care to a patient in a comfortable home living room"
          className="w-full h-full object-cover object-[center_right] sm:object-right-top"
          loading="eager"
          fetchPriority="high"
        />
        {/* Desktop Gradient Overlay for WCAG AAA Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
      </div>

      {/* Hero Content (z-10 relative) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Live Availability Badge on Mobile */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold border border-sky-line shadow-2xs mb-4">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Direct Home & Workplace Dental Care</span>
            </div>

            {/* Main Headline (Anti-Pill Law strictly applied: pure typographic power) */}
            <HeadingAtom
              level={1}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.15] mb-4 sm:mb-6"
            >
              {SITE_CONTENT.hero.headline}
            </HeadingAtom>

            {/* Lead Subheadline */}
            <p className="text-lg sm:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal">
              {SITE_CONTENT.hero.subheadline}
            </p>

            {/* Mobile Visual Picture Card: Clear, Authentic & Human (visible only on mobile/tablet) */}
            <div className="block lg:hidden mb-6 rounded-2xl overflow-hidden border-2 border-sky-line shadow-clinical relative bg-sky-deep">
              <img
                src="/hero-dentist-home.jpg"
                alt="Friendly licensed mobile dentist treating a smiling patient at a home table"
                className="w-full h-56 sm:h-72 object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex items-end p-4">
                <div className="text-white">
                  <span className="text-xs font-bold uppercase tracking-wider block text-white/90">
                    Direct Care at Your Kitchen or Living Room
                  </span>
                  <p className="text-sm font-semibold text-white drop-shadow-xs">
                    Quiet portable equipment · Zero travel stress
                  </p>
                </div>
              </div>
            </div>

            {/* Minimalist Contact Actions: Small Minimalist Icons (No big bulky buttons or phone number text) */}
            <div className="flex items-center gap-4 mb-4">
              <MinimalistContactActions
                size="lg"
                locationTag="hero_minimalist_cta"
              />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-primary leading-tight">
                  Start a conversation
                </span>
                <span className="text-xs text-ink-muted leading-tight">
                  Tap WhatsApp or Call icon
                </span>
              </div>
            </div>

            {/* Micro Assurance Copy with Live Availability Pulse */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8 text-xs sm:text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>{PRACTICE_CONFIG.responsePromise}</span>
            </div>

            {/* Trust Proof Badges (Inline below buttons) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 sm:pt-5 border-t border-border/80">
              {SITE_CONTENT.hero.trustPoints.map((point, idx) => (
                <TrustProofMolecule
                  key={idx}
                  iconName={point.icon}
                  text={point.text}
                  className="w-full justify-start text-left bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-border/60"
                />
              ))}
            </div>

            {/* Mobile-Only Medical Reassurance Accord/Card */}
            <div className="block lg:hidden mt-6 p-4 rounded-2xl bg-white border border-sky-line shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-sky-line/50 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold shrink-0">
                    <Award className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-primary block leading-tight text-sm">
                      {PRACTICE_CONFIG.dentistName}
                    </span>
                    <span className="text-[11px] text-muted-foreground block">
                      {PRACTICE_CONFIG.credentials}
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-sky-main text-primary text-[11px] font-semibold border border-sky-line">
                  Licensed Team
                </span>
              </div>

              <div className="space-y-2 text-xs text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span>Living room or armchair treatment in your comfort</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span>Hospital-grade sterile vacuum-sealed instruments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span>Clear upfront fee confirmed before we begin</span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-sky-line/50 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  Next Available:
                </span>
                <span className="font-bold text-primary">This Week</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Medical Reassurance Badge (5 cols on Desktop) */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-end items-end">
            <CardAtom
              variant="default"
              className="p-6 bg-white/95 backdrop-blur-md border border-white/80 shadow-clinical-hover relative overflow-hidden max-w-md w-full"
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
