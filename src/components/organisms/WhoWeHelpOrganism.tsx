import React from 'react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { AudienceCardMolecule } from '@/components/molecules/AudienceCardMolecule';
import { SITE_CONTENT } from '@/data/content';

export const WhoWeHelpOrganism: React.FC = () => {
  return (
    <section id="who-we-help" className="py-12 sm:py-20 bg-sky-main/40 border-b border-sky-line/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-14">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-3 sm:mb-4">
            {SITE_CONTENT.whoWeHelp.title}
          </HeadingAtom>
          <p className="text-base sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.whoWeHelp.subtitle}
          </p>
        </div>

        {/* 2x2 Grid for Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {SITE_CONTENT.whoWeHelp.audiences.map((audience, idx) => (
            <AudienceCardMolecule key={idx} audience={audience} />
          ))}
        </div>
      </div>
    </section>
  );
};
