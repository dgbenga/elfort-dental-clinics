import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { FAQAccordionItem } from '@/components/molecules/FAQAccordionItem';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT } from '@/data/content';

export const FAQOrganism: React.FC = () => {
  return (
    <section id="faq" className="py-14 sm:py-20 bg-sky-main/40 border-b border-sky-line/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-4">
            {SITE_CONTENT.faq.title}
          </HeadingAtom>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.faq.subtitle}
          </p>
        </div>

        {/* Radix UI Accordion */}
        <Accordion.Root type="single" collapsible defaultValue="faq-1" className="w-full">
          {SITE_CONTENT.faq.items.map((item) => (
            <FAQAccordionItem key={item.id} item={item} />
          ))}
        </Accordion.Root>

        {/* Have another question? Banner */}
        <div className="mt-10 p-8 rounded-2xl bg-white border border-sky-line shadow-clinical text-center max-w-2xl mx-auto">
          <span className="text-xl font-bold text-primary block mb-2">
            Have a specific question about your home or loved one?
          </span>
          <p className="text-foreground text-lg mb-6 leading-relaxed">
            We are always happy to answer questions with zero obligation before you decide to book.
          </p>
          <WhatsAppCTAButton
            label="Ask a Question on WhatsApp"
            prefilledText="Hello Dr. Jenkins, I have a question about whether a home visit is right for my situation."
            locationTag="faq_cta"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
