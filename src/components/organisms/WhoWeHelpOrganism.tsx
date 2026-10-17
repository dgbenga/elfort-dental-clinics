import React from 'react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { AudienceCardMolecule } from '@/components/molecules/AudienceCardMolecule';
import { SITE_CONTENT } from '@/data/content';

export const WhoWeHelpOrganism: React.FC = () => {
  return (
    <section id="who-we-help" className="py-20 sm:py-24 bg-sky-main/40 border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4">
            {SITE_CONTENT.whoWeHelp.title}
          </HeadingAtom>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.whoWeHelp.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONTENT.whoWeHelp.audiences.map((audience, idx) => (
            <AudienceCardMolecule key={idx} audience={audience} />
          ))}
        </div>
      </div>
    </section>
  );
};
