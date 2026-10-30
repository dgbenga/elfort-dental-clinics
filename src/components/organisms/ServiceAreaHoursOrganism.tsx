import React, { useState } from 'react';
import { MapPin, Clock, AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { CardAtom } from '@/components/atoms/CardAtom';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const ServiceAreaHoursOrganism: React.FC = () => {
  const [postcode, setPostcode] = useState('');
  const [result, setResult] = useState<'idle' | 'eligible' | 'inquire'>('idle');

  const checkPostcode = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = postcode.trim().toUpperCase();
    if (!clean) return;

    // Check if starts with common local prefixes (BS, BA, GL)
    if (
      clean.startsWith('BS') ||
      clean.startsWith('BA1') ||
      clean.startsWith('BA2') ||
      clean.startsWith('GL12') ||
      clean.startsWith('GL9')
    ) {
      setResult('eligible');
    } else {
      setResult('inquire');
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-white border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-14">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-3 sm:mb-4">
            {SITE_CONTENT.areaAndHours.title}
          </HeadingAtom>
          <p className="text-base sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.areaAndHours.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-6 sm:mb-8">
          {/* Catchment Area Card */}
          <CardAtom variant="default" className="bg-white border-2 border-sky-line flex flex-col justify-between p-5 sm:p-8 rounded-2xl">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <HeadingAtom level={3} className="text-xl sm:text-2xl text-primary font-bold">
                  {SITE_CONTENT.areaAndHours.catchmentTitle}
                </HeadingAtom>
              </div>

              <p className="text-foreground text-sm sm:text-lg mb-5 sm:mb-6 leading-relaxed">
                {SITE_CONTENT.areaAndHours.catchmentText}
              </p>

              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                {PRACTICE_CONFIG.catchmentAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-sky-main text-primary font-medium text-xs sm:text-base border border-sky-line/80"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Instant Postcode Checker */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-sky-main/40 border border-sky-line mb-5 sm:mb-6">
                <label htmlFor="postcode-input" className="block text-xs sm:text-sm font-semibold text-primary mb-2">
                  Check Your Postal Code:
                </label>
                <form onSubmit={checkPostcode} className="flex gap-2">
                  <input
                    id="postcode-input"
                    type="text"
                    value={postcode}
                    onChange={(e) => {
                      setPostcode(e.target.value);
                      if (result !== 'idle') setResult('idle');
                    }}
                    placeholder="e.g. BS1 4DJ or BA1"
                    autoCapitalize="characters"
                    autoCorrect="off"
                    className="flex-1 h-12 px-3.5 rounded-xl bg-white border border-sky-line text-foreground text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary uppercase font-mono"
                  />
                  <button
                    type="submit"
                    className="h-12 px-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover active:scale-95 transition-all flex items-center gap-1.5 shrink-0 shadow-xs"
                  >
                    <Search className="w-4 h-4" aria-hidden="true" />
                    <span>Check</span>
                  </button>
                </form>

                {result === 'eligible' && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center gap-2 mb-2 font-bold text-sm text-emerald-800">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                      <span>Zero-Surcharge Catchment Area Confirmed</span>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-900/90 mb-3 leading-relaxed">
                      Postal code <strong>{postcode.toUpperCase()}</strong> qualifies for standard routine visits with zero travel surcharges.
                    </p>
                    <WhatsAppCTAButton
                      size="sm"
                      label={`Book Visit for ${postcode.toUpperCase()}`}
                      prefilledText={`Hello Elfort Dental Clinics, I verified my postal code (${postcode.toUpperCase()}) on your website and would like to ask about booking a home visit.`}
                      locationTag="postcode_eligible_cta"
                      className="w-full text-center text-sm font-semibold justify-center h-11"
                    />
                  </div>
                )}
                {result === 'inquire' && (
                  <div className="mt-4 p-4 rounded-xl bg-white border border-sky-line text-foreground animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center gap-2 mb-2 font-bold text-sm text-primary">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span>Custom Arrangement Available</span>
                    </div>
                    <p className="text-xs sm:text-sm text-ink-muted mb-3 leading-relaxed">
                      Postal code <strong>{postcode.toUpperCase()}</strong> may be just beyond our standard primary zone, but we frequently accommodate extended visits by prior arrangement.
                    </p>
                    <WhatsAppCTAButton
                      variant="outline"
                      size="sm"
                      label={`Ask About Visiting ${postcode.toUpperCase()}`}
                      prefilledText={`Hello Elfort Dental Clinics, my postal code is ${postcode.toUpperCase()} and I would like to check if a home visit can be arranged.`}
                      locationTag="postcode_inquire_cta"
                      className="w-full text-center text-sm font-semibold justify-center h-11"
                    />
                  </div>
                )}
              </div>
            </div>

            <p className="text-ink-muted text-xs sm:text-base pt-3 sm:pt-4 border-t border-sky-line/60">
              {SITE_CONTENT.areaAndHours.travelNote}
            </p>
          </CardAtom>

          {/* Hours & Emergency Notice Card */}
          <CardAtom variant="default" className="bg-white border-2 border-sky-line flex flex-col justify-between p-5 sm:p-8 rounded-2xl">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <HeadingAtom level={3} className="text-xl sm:text-2xl text-primary font-bold">
                  Visiting Hours
                </HeadingAtom>
              </div>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 text-foreground text-sm sm:text-lg">
                <div className="flex justify-between py-1.5 border-b border-sky-line/40">
                  <span className="font-medium">Monday – Friday</span>
                  <span className="text-primary font-semibold">8:00 AM – 6:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-sky-line/40">
                  <span className="font-medium">Saturday</span>
                  <span className="text-primary font-semibold">9:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-medium">Sunday / Evenings</span>
                  <span className="text-primary font-semibold">Urgent by arrangement</span>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-sky-main/40 border border-sky-line text-xs sm:text-sm text-foreground flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-ink-muted leading-relaxed">
                {SITE_CONTENT.areaAndHours.emergencyText}
              </p>
            </div>
          </CardAtom>
        </div>
      </div>
    </section>
  );
};
