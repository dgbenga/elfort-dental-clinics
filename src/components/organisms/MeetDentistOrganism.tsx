import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { CardAtom } from '@/components/atoms/CardAtom';
import { MinimalistContactActions } from '@/components/molecules/MinimalistContactActions';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const MeetDentistOrganism: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <CardAtom
              variant="default"
              className="p-5 sm:p-8 bg-sky-main/30 border-2 border-sky-line text-center relative overflow-hidden rounded-2xl"
            >
              {/* Doctor Avatar / Visual Illustration */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-5 rounded-3xl bg-white border-2 border-sky-line flex items-center justify-center shadow-clinical text-primary">
                <svg
                  className="w-14 h-14 sm:w-16 sm:h-16 fill-current opacity-90"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>

              <span className="text-xl sm:text-2xl font-bold text-primary block leading-tight">
                {PRACTICE_CONFIG.dentistName}
              </span>
              <span className="text-sm sm:text-base font-semibold text-foreground block mb-1">
                {PRACTICE_CONFIG.credentials}
              </span>
              <span className="text-xs sm:text-sm text-ink-muted block mb-4 sm:mb-5">
                {PRACTICE_CONFIG.title}
              </span>

              {/* Verified Credentials Box */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-sky-line text-left space-y-2 text-xs sm:text-sm text-foreground">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span className="font-medium">{PRACTICE_CONFIG.regulatorText}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>{PRACTICE_CONFIG.insuranceText}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>12+ Years Clinical Practice</span>
                </div>
              </div>
            </CardAtom>
          </div>

          {/* Right Column: Bio Story & Practice Philosophy (7 cols) */}
          <div className="lg:col-span-7">
            <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4 sm:mb-6">
              {SITE_CONTENT.about.title}
            </HeadingAtom>

            <div className="space-y-3.5 sm:space-y-4 text-foreground text-base sm:text-xl leading-relaxed mb-6 sm:mb-8">
              <p>{SITE_CONTENT.about.bioParagraph1}</p>
              <p>{SITE_CONTENT.about.bioParagraph2}</p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-sky-line/50">
              <MinimalistContactActions
                prefilledText={SITE_CONTENT.about.prefilledText}
                locationTag="about_section"
                size="md"
              />
              <span className="text-xs text-ink-muted">Tap to message or call directly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
