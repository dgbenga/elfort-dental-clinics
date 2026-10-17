import React from 'react';
import { FileCheck, ShieldCheck, Stethoscope } from 'lucide-react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { SITE_CONTENT } from '@/data/content';

const PROMISE_ICONS = [FileCheck, ShieldCheck, Stethoscope];

export const TrustPromiseOrganism: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-sky-main/50 border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4">
            {SITE_CONTENT.promise.title}
          </HeadingAtom>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.promise.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SITE_CONTENT.promise.promises.map((item, idx) => {
            const Icon = PROMISE_ICONS[idx] || ShieldCheck;
            return (
              <CardAtom
                key={idx}
                variant="default"
                className="bg-white border border-sky-line flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-main text-primary flex items-center justify-center border border-sky-line mb-6">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <HeadingAtom level={3} className="text-2xl text-primary font-bold mb-3">
                    {item.title}
                  </HeadingAtom>
                  <p className="text-foreground text-lg leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </CardAtom>
            );
          })}
        </div>
      </div>
    </section>
  );
};
