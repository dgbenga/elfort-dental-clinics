import React from 'react';
import { Church, Building2, Users2, Check, Mail, Phone, HeartHandshake } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { CardAtom } from '@/components/atoms/CardAtom';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

const PILLAR_ICONS = [Church, Building2, Users2];

export const CommunityOutreachOrganism: React.FC = () => {
  return (
    <section id="outreach" className="py-14 sm:py-20 bg-sky-main/50 border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 border border-primary/20">
            <HeartHandshake className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>Community Health Mission</span>
          </div>

          <HeadingAtom level={2} className="text-3xl sm:text-4xl lg:text-[2.65rem] mb-4">
            {SITE_CONTENT.outreach.title}
          </HeadingAtom>

          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.outreach.subtitle}
          </p>
        </div>

        {/* 3 Collaboration Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SITE_CONTENT.outreach.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || Users2;
            return (
              <CardAtom
                key={idx}
                variant="default"
                className="bg-white border-2 border-sky-line flex flex-col justify-between hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line mb-6">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <HeadingAtom level={3} className="text-2xl text-primary font-bold mb-3">
                    {pillar.title}
                  </HeadingAtom>

                  <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-sky-line/60">
                    {pillar.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-sky-main text-primary flex items-center justify-center shrink-0 mt-0.5 border border-sky-line/80 font-bold text-xs">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-foreground text-sm sm:text-base leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardAtom>
            );
          })}
        </div>

        {/* Outreach Partnership Action Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-sky-line shadow-clinical-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-sm font-bold uppercase tracking-wider text-primary block mb-2">
                Organize an Outreach with Us
              </span>
              <HeadingAtom level={3} className="text-2xl sm:text-3xl text-primary font-bold mb-3">
                Are you a Pastor, HR Director, or Community Leader?
              </HeadingAtom>
              <p className="text-foreground text-base sm:text-lg leading-relaxed">
                We make coordinating dental outreaches seamless. Our mobile dental team provides the clinical equipment, educational materials, and professional expertise to serve your members with dignity.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <WhatsAppCTAButton
                size="lg"
                label={SITE_CONTENT.outreach.ctaText}
                prefilledText={SITE_CONTENT.outreach.prefilledText}
                locationTag="outreach_partner_cta"
                className="w-full text-center"
              />

              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <a
                  href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-sky-main hover:bg-sky-deep text-primary font-semibold text-sm border border-sky-line transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Call {PRACTICE_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${PRACTICE_CONFIG.email}?subject=Inquiry%20about%20Dental%20Outreach%20Partnership`}
                  className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-white hover:bg-sky-main text-primary font-semibold text-sm border border-sky-line transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
