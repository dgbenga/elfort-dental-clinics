import React, { useState } from 'react';
import { Phone, Mail, Menu, X, HeartHandshake } from 'lucide-react';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const HeaderOrganism: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Top Utility Contact Strip (Visible on Desktop / Tablet) */}
      <div className="hidden md:block bg-primary text-white text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8 border-b border-navy-hover">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${PRACTICE_CONFIG.email}`}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
              aria-label={`Send email to ${PRACTICE_CONFIG.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-sky-deep shrink-0" aria-hidden="true" />
              <span>{PRACTICE_CONFIG.email}</span>
            </a>

            <a
              href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors font-medium"
              aria-label={`Call ${PRACTICE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-sky-deep shrink-0" aria-hidden="true" />
              <span>{PRACTICE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-white/80 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <span>Mobile Home Care · Church & Corporate Outreaches</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-sky-line shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1"
            aria-label={`${PRACTICE_CONFIG.practiceName} home`}
          >
            {/* Dental Medical Emblem Icon */}
            <div className="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl shadow-clinical group-hover:bg-primary-hover transition-colors shrink-0">
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2.5 15h-5v-1h5v1zm0-2h-5v-1h5v1zm-2.5-4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary leading-tight group-hover:text-primary-hover transition-colors">
                {PRACTICE_CONFIG.practiceName}
              </span>
              <span className="text-xs font-semibold text-ink-muted leading-tight">
                {SITE_CONTENT.header.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {SITE_CONTENT.header.navLinks.map((link) => {
              const isOutreach = link.href === '#outreach';
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-semibold px-3 py-2 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isOutreach
                      ? 'bg-sky-main text-primary hover:bg-sky-deep font-bold flex items-center gap-1.5'
                      : 'text-ink hover:text-primary hover:bg-sky-main/60'
                  }`}
                >
                  {isOutreach && <HeartHandshake className="w-4 h-4 text-primary" aria-hidden="true" />}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Contact Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-sky-main hover:bg-sky-deep text-primary font-bold text-sm border border-sky-line transition-colors"
              aria-label={`Call directly at ${PRACTICE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span>{PRACTICE_CONFIG.phoneDisplay}</span>
            </a>

            <WhatsAppCTAButton
              size="sm"
              label="Message Us"
              locationTag="header_nav"
              className="text-sm px-5 h-11"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
              className="sm:hidden w-10 h-10 rounded-xl bg-sky-main text-primary flex items-center justify-center border border-sky-line"
              aria-label="Call clinic directly"
            >
              <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-xl bg-sky-main text-primary flex items-center justify-center border border-sky-line focus-visible:ring-2 focus-visible:ring-primary"
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-sky-line px-4 pt-3 pb-6 shadow-xl">
            {/* Direct Contact Info in Mobile Menu */}
            <div className="p-3 rounded-xl bg-sky-main/50 border border-sky-line mb-4 text-sm space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={`tel:${PRACTICE_CONFIG.phoneRaw}`}>{PRACTICE_CONFIG.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2 text-ink text-xs">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${PRACTICE_CONFIG.email}`}>{PRACTICE_CONFIG.email}</a>
              </div>
            </div>

            <nav className="flex flex-col space-y-2">
              {SITE_CONTENT.header.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-ink hover:text-primary hover:bg-sky-main px-3 py-2.5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-5 pt-4 border-t border-sky-line">
              <WhatsAppCTAButton
                size="default"
                label="Message on WhatsApp"
                locationTag="mobile_menu"
                className="w-full text-center"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
