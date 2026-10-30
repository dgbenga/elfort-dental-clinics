import React from 'react';
import { Church, Building2, Users2, Check, Mail } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { CardAtom } from '@/components/atoms/CardAtom';
import { MinimalistContactActions } from '@/components/molecules/MinimalistContactActions';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

const PILLAR_ICONS = [Church, Building2, Users2];

export const CommunityOutreachOrganism: React.FC = () => {
  return (
    <section id="outreach" className="py-12 sm:py-20 bg-sky-main/50 border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-14">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl lg:text-[2.65rem] mb-3 sm:mb-4">
            {SITE_CONTENT.outreach.title}
          </HeadingAtom>

          <p className="text-base sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.outreach.subtitle}
          </p>
        </div>

        {/* 3 Collaboration Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mb-8 sm:mb-12">
          {SITE_CONTENT.outreach.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || Users2;
            return (
              <CardAtom
                key={idx}
                variant="default"
                className="bg-white border-2 border-sky-line flex flex-col justify-between hover:border-primary/40 transition-colors p-5 sm:p-7 rounded-2xl"
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line mb-4 sm:mb-6">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  </div>

                  <HeadingAtom level={3} className="text-xl sm:text-2xl text-primary font-bold mb-2.5 sm:mb-3">
                    {pillar.title}
                  </HeadingAtom>

                  <p className="text-foreground text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-3 sm:pt-4 border-t border-sky-line/60">
                    {pillar.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-sky-main text-primary flex items-center justify-center shrink-0 mt-0.5 border border-sky-line/80 font-bold text-xs">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-foreground text-xs sm:text-base leading-snug">
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
        <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-white border-2 border-sky-line shadow-clinical-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary block mb-2">
                Organize an Outreach with Us
              </span>
              <HeadingAtom level={3} className="text-2xl sm:text-3xl text-primary font-bold mb-3">
                Are you a Pastor, HR Director, or Community Leader?
              </HeadingAtom>
              <p className="text-foreground text-sm sm:text-lg leading-relaxed">
                We make coordinating dental outreaches seamless. Our mobile dental team provides the clinical equipment, educational materials, and professional expertise to serve your members with dignity.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end gap-3">
              <MinimalistContactActions
                prefilledText={SITE_CONTENT.outreach.prefilledText}
                locationTag="outreach_partner_cta"
                size="lg"
              />
              <a
                href={`mailto:${PRACTICE_CONFIG.email}?subject=Inquiry%20about%20Dental%20Outreach%20Partnership`}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-primary flex items-center justify-center border-2 border-sky-line hover:bg-sky-main/60 active:scale-95 transition-all shadow-xs"
                aria-label="Email us about partnership"
                title="Email us"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
