import React from 'react';
import { ShieldCheck, Home, CheckCircle2 } from 'lucide-react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { SITE_CONTENT } from '@/data/content';

export const EquipmentSafetyOrganism: React.FC = () => {
  return (
    <section id="what-we-bring" className="py-14 sm:py-20 bg-sky-main/40 border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4">
            {SITE_CONTENT.equipment.title}
          </HeadingAtom>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.equipment.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What We Bring */}
          <CardAtom variant="default" className="bg-white border-2 border-sky-line">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line shrink-0">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <HeadingAtom level={3} className="text-2xl text-primary font-bold">
                {SITE_CONTENT.equipment.weBring.title}
              </HeadingAtom>
            </div>

            <ul className="space-y-4" role="list">
              {SITE_CONTENT.equipment.weBring.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1 stroke-[2.2]" aria-hidden="true" />
                  <span className="text-foreground text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardAtom>

          {/* What You Provide */}
          <CardAtom variant="default" className="bg-white border-2 border-sky-line">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line shrink-0">
                <Home className="w-6 h-6" aria-hidden="true" />
              </div>
              <HeadingAtom level={3} className="text-2xl text-primary font-bold">
                {SITE_CONTENT.equipment.youProvide.title}
              </HeadingAtom>
            </div>

            <ul className="space-y-4" role="list">
              {SITE_CONTENT.equipment.youProvide.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1 stroke-[2.2]" aria-hidden="true" />
                  <span className="text-foreground text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardAtom>
        </div>
      </div>
    </section>
  );
};
