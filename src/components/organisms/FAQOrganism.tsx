import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Search, X, HelpCircle } from 'lucide-react';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { FAQAccordionItem } from '@/components/molecules/FAQAccordionItem';
import { MinimalistContactActions } from '@/components/molecules/MinimalistContactActions';
import { SITE_CONTENT } from '@/data/content';

export const FAQOrganism: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = SITE_CONTENT.faq.items.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query)
    );
  });

  return (
    <section id="faq" className="py-12 sm:py-20 bg-sky-main/40 border-b border-sky-line/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <HeadingAtom level={2} className="text-3xl sm:text-4xl mb-3 sm:mb-4">
            {SITE_CONTENT.faq.title}
          </HeadingAtom>
          <p className="text-base sm:text-xl text-ink-muted leading-relaxed">
            {SITE_CONTENT.faq.subtitle}
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-primary absolute left-4 pointer-events-none" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. costs, equipment, dementia)..."
              className="w-full h-12 pl-11 pr-10 rounded-2xl bg-white border border-sky-line text-foreground text-base placeholder:text-ink-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs transition-shadow"
              aria-label="Filter frequently asked questions"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-sky-line transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <div className="flex items-center justify-between px-2 pt-2 text-xs font-medium text-ink-muted">
            <span>
              Showing {filteredItems.length} of {SITE_CONTENT.faq.items.length} questions
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-primary hover:underline"
              >
                Reset filter
              </button>
            )}
          </div>
        </div>

        {/* Radix UI Accordion */}
        {filteredItems.length > 0 ? (
          <Accordion.Root type="single" collapsible defaultValue="faq-1" className="w-full">
            {filteredItems.map((item) => (
              <FAQAccordionItem key={item.id} item={item} />
            ))}
          </Accordion.Root>
        ) : (
          <div className="p-8 rounded-2xl bg-white border border-sky-line text-center max-w-xl mx-auto animate-in fade-in duration-200">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-sky-main text-primary flex items-center justify-center mb-4 border border-sky-line">
              <HelpCircle className="w-6 h-6" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-primary block mb-2">
              No matching questions found
            </span>
            <p className="text-foreground text-base mb-4 leading-relaxed">
              We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. Send Dr. Elfort a quick message and we will answer you directly!
            </p>
            <div className="flex items-center justify-center gap-3">
              <MinimalistContactActions
                size="md"
                prefilledText={`Hello Elfort Dental Clinics, I was searching your FAQs about "${searchQuery}" and would like to ask directly.`}
                locationTag="faq_empty_search"
              />
            </div>
          </div>
        )}

        {/* Have another question? Banner */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-2xl bg-white border border-sky-line shadow-clinical text-center max-w-2xl mx-auto">
          <span className="text-lg sm:text-xl font-bold text-primary block mb-2">
            Have a specific question about your home or loved one?
          </span>
          <p className="text-foreground text-sm sm:text-lg mb-4 sm:mb-5 leading-relaxed">
            We are always happy to answer questions with zero obligation before you decide to book.
          </p>
          <div className="flex items-center justify-center gap-3">
            <MinimalistContactActions
              prefilledText="Hello Elfort Dental Clinics, I have a question about whether a home visit or outreach is right for my situation."
              locationTag="faq_cta"
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
