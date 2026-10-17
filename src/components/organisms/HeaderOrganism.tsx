import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const HeaderOrganism: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <a
          href="#"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1"
          aria-label={`${PRACTICE_CONFIG.practiceName} home`}
        >
          {/* Clinical Emblem */}
          <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold shadow-xs group-hover:bg-primary-hover transition-colors shrink-0">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2.5 15h-5v-1h5v1zm0-2h-5v-1h5v1zm-2.5-4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
            </svg>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary leading-none group-hover:text-primary-hover transition-colors">
              {PRACTICE_CONFIG.practiceName}
            </span>
            <span className="text-xs font-medium text-muted-foreground mt-1">
              Mobile & Outreach Dental Care
            </span>
          </div>
        </a>

        {/* Clean, Ordered Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {SITE_CONTENT.header.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-foreground/80 hover:text-primary hover:bg-secondary/60 px-3.5 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Direct Call & WhatsApp Action */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover px-3 py-2 rounded-lg hover:bg-secondary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Call directly at ${PRACTICE_CONFIG.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <span>{PRACTICE_CONFIG.phoneDisplay}</span>
          </a>

          <WhatsAppCTAButton
            size="sm"
            label="Chat on WhatsApp"
            locationTag="desktop_nav"
            className="h-11 px-5 text-sm font-semibold shadow-xs"
          />
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
            className="sm:hidden w-11 h-11 rounded-xl bg-secondary text-primary flex items-center justify-center border border-border focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Call clinic directly"
          >
            <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 rounded-xl bg-secondary text-primary flex items-center justify-center border border-border focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Clean Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Quick Contact Info */}
          <div className="p-3.5 rounded-xl bg-secondary/50 border border-border mb-4 text-sm space-y-2">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              <a href={`tel:${PRACTICE_CONFIG.phoneRaw}`} className="hover:underline">
                {PRACTICE_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 text-xs">
              <Mail className="w-4 h-4 shrink-0 text-primary" />
              <a href={`mailto:${PRACTICE_CONFIG.email}`} className="hover:underline">
                {PRACTICE_CONFIG.email}
              </a>
            </div>
          </div>

          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {SITE_CONTENT.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-foreground/80 hover:text-primary hover:bg-secondary px-3.5 py-2.5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-border">
            <WhatsAppCTAButton
              size="default"
              label="Chat on WhatsApp"
              locationTag="mobile_menu"
              className="w-full text-center h-12 text-base font-semibold"
            />
          </div>
        </div>
      )}
    </header>
  );
};

