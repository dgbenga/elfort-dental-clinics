import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/data/content';
import { cn } from '@/lib/utils';

export interface FAQAccordionItemProps {
  item: FAQItem;
  className?: string;
}

export const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({
  item,
  className,
}) => {
  return (
    <Accordion.Item
      value={item.id}
      className={cn(
        'rounded-2xl bg-white border border-sky-line shadow-clinical overflow-hidden transition-all duration-200 mb-4 data-[state=open]:border-primary/40 data-[state=open]:shadow-clinical-hover',
        className
      )}
    >
      <Accordion.Header className="flex">
        <Accordion.Trigger className="group flex flex-1 items-center justify-between p-6 text-left font-semibold text-lg sm:text-xl text-primary transition-all hover:bg-sky-main/30 min-h-[58px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
          <span className="pr-4 leading-snug">{item.question}</span>
          <div className="w-8 h-8 rounded-full bg-sky-main flex items-center justify-center shrink-0 border border-sky-line group-hover:bg-sky-deep transition-colors">
            <ChevronDown
              className="w-4 h-4 text-primary shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="px-6 pb-6 pt-1 text-foreground text-lg leading-relaxed border-t border-sky-line/40">
          {item.answer}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};
