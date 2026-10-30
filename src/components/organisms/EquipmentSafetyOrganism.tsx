import React from 'react';
import { ShieldCheck, Home, CheckCircle2 } from 'lucide-react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { SITE_CONTENT } from '@/data/content';

export const EquipmentSafetyOrganism: React.FC = () => {
  return (
    <section id="what-we-bring" className="py-12 sm:py-20 bg-sky-main/40 border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-14">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-3 sm:mb-4">
            {SITE_CONTENT.equipment.title}
          </HeadingAtom>
          <p className="text-base sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.equipment.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {/* What We Bring */}
          <CardAtom
            variant="default"
            className="bg-white border-2 border-sky-line hover:border-primary/50 hover:shadow-clinical-hover transition-all duration-300 p-5 sm:p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <HeadingAtom level={3} className="text-xl sm:text-2xl text-primary font-bold">
                {SITE_CONTENT.equipment.weBring.title}
              </HeadingAtom>
            </div>

            <ul className="space-y-2.5 sm:space-y-3" role="list">
              {SITE_CONTENT.equipment.weBring.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-1.5 sm:p-2 rounded-xl hover:bg-sky-main/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1 stroke-[2.2]" aria-hidden="true" />
                  <span className="text-foreground text-sm sm:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-sky-line/50 text-xs text-ink-muted">
              <span>All sterilization verified in accordance with national infection control guidelines.</span>
            </div>
          </CardAtom>

          {/* What You Provide */}
          <CardAtom
            variant="default"
            className="bg-white border-2 border-sky-line hover:border-primary/50 hover:shadow-clinical-hover transition-all duration-300 p-5 sm:p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line shrink-0 shadow-2xs">
                <Home className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <HeadingAtom level={3} className="text-xl sm:text-2xl text-primary font-bold">
                {SITE_CONTENT.equipment.youProvide.title}
              </HeadingAtom>
            </div>

            <ul className="space-y-2.5 sm:space-y-3" role="list">
              {SITE_CONTENT.equipment.youProvide.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-1.5 sm:p-2 rounded-xl hover:bg-sky-main/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1 stroke-[2.2]" aria-hidden="true" />
                  <span className="text-foreground text-sm sm:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-sky-line/50 text-xs text-ink-muted">
              <span>We bring our own specialized mobile dental chair—no special furniture or plumbing required.</span>
            </div>
          </CardAtom>
        </div>
      </div>
    </section>
  );
};
