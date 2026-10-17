import React from 'react';
import { PhoneCallButton } from '@/components/molecules/PhoneCallButton';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const HeaderOrganism: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-sky-line transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand / Logo Title */}
        <a
          href="#"
          className="flex flex-col text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
          aria-label={`${PRACTICE_CONFIG.dentistName} Home Dental Care home`}
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary group-hover:text-primary-hover transition-colors leading-tight">
            {PRACTICE_CONFIG.dentistName}
          </span>
          <span className="text-xs sm:text-sm font-medium text-ink-muted leading-none">
            Home & Workplace Dental Care
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {SITE_CONTENT.header.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-ink hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Contact Actions */}
        <div className="flex items-center gap-3">
          <PhoneCallButton
            size="sm"
            label={PRACTICE_CONFIG.phoneDisplay}
            className="hidden sm:inline-flex border-sky-line text-sm"
          />
          <WhatsAppCTAButton
            size="sm"
            label="Message Us"
            locationTag="header"
            className="text-sm px-5 h-[46px]"
          />
        </div>
      </div>
    </header>
  );
};
