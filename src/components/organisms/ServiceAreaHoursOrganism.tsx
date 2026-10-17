import React, { useState } from 'react';
import { MapPin, Clock, AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { CardAtom } from '@/components/atoms/CardAtom';
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
    <section className="py-14 sm:py-20 bg-white border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4">
            {SITE_CONTENT.areaAndHours.title}
          </HeadingAtom>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.areaAndHours.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Catchment Area Card */}
          <CardAtom variant="default" className="bg-white border-2 border-sky-line flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line shrink-0">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <HeadingAtom level={3} className="text-2xl text-primary font-bold">
                  {SITE_CONTENT.areaAndHours.catchmentTitle}
                </HeadingAtom>
              </div>

              <p className="text-foreground text-lg mb-6 leading-relaxed">
                {SITE_CONTENT.areaAndHours.catchmentText}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {PRACTICE_CONFIG.catchmentAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-sky-main text-primary font-medium text-base border border-sky-line/80"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Instant Postcode Checker */}
              <div className="p-4 rounded-xl bg-sky-main/40 border border-sky-line mb-6">
                <label htmlFor="postcode-input" className="block text-sm font-semibold text-primary mb-2">
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
                    className="flex-1 h-11 px-3.5 rounded-xl bg-white border border-sky-line text-foreground text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary uppercase"
                  />
                  <button
                    type="submit"
                    className="h-11 px-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <Search className="w-4 h-4" aria-hidden="true" />
                    <span>Check</span>
                  </button>
                </form>

                {result === 'eligible' && (
                  <div className="mt-3 text-sm font-semibold text-emerald-800 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>✓ Confirmed! Your area qualifies for standard zero-surcharge visits.</span>
                  </div>
                )}
                {result === 'inquire' && (
                  <div className="mt-3 text-sm text-primary flex items-start gap-2">
                    <span className="shrink-0 font-bold">•</span>
                    <span>We can likely still visit! Send us a quick WhatsApp message to confirm travel options for this postal code.</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-ink-muted text-base pt-4 border-t border-sky-line/60">
              {SITE_CONTENT.areaAndHours.travelNote}
            </p>
          </CardAtom>

          {/* Hours & Emergency Notice Card */}
          <CardAtom variant="default" className="bg-white border-2 border-sky-line flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line shrink-0">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>
                <HeadingAtom level={3} className="text-2xl text-primary font-bold">
                  Visiting Hours
                </HeadingAtom>
              </div>

              <div className="space-y-3 mb-6 text-foreground text-lg">
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
            <div className="p-4 rounded-xl bg-sky-main/40 border border-sky-line text-sm text-foreground flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
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
