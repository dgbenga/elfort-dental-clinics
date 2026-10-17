import React from 'react';
import { Check, ArrowRight, AlertCircle } from 'lucide-react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { SITE_CONTENT } from '@/data/content';

export const ScopeBoundariesOrganism: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4">
            {SITE_CONTENT.scope.title}
          </HeadingAtom>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.scope.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* What We Can Do */}
          <CardAtom variant="default" className="bg-white border-2 border-sky-line">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-main text-primary flex items-center justify-center font-bold text-lg border border-sky-line shrink-0">
                ✓
              </div>
              <HeadingAtom level={3} className="text-2xl text-primary font-bold">
                {SITE_CONTENT.scope.canDo.title}
              </HeadingAtom>
            </div>

            <ul className="space-y-3.5" role="list">
              {SITE_CONTENT.scope.canDo.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-main text-primary flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <span className="text-foreground text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardAtom>

          {/* What Requires a Clinic */}
          <CardAtom variant="default" className="bg-sky-main/20 border-2 border-sky-line">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white text-ink-muted flex items-center justify-center font-bold text-lg border border-sky-line shrink-0">
                →
              </div>
              <HeadingAtom level={3} className="text-2xl text-primary font-bold">
                {SITE_CONTENT.scope.cannotDo.title}
              </HeadingAtom>
            </div>

            <ul className="space-y-3.5" role="list">
              {SITE_CONTENT.scope.cannotDo.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white text-ink-muted flex items-center justify-center shrink-0 mt-1 border border-sky-line/80">
                    <ArrowRight className="w-3 h-3 stroke-[2]" aria-hidden="true" />
                  </div>
                  <span className="text-foreground text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardAtom>
        </div>

        {/* Ethical Referral Guarantee Banner */}
        <div className="p-6 rounded-2xl bg-sky-main/40 border border-sky-line flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 border border-sky-line/60">
            <AlertCircle className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="font-semibold text-primary block text-lg mb-1">
              Our Clinic Referral & Support Promise
            </span>
            <p className="text-foreground text-base sm:text-lg leading-relaxed">
              {SITE_CONTENT.scope.cannotDo.referralNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
