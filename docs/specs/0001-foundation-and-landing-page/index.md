# Spec: 0001 — Home-Visit Dentist Mobile-First Landing Page

**Status:** Accepted  
**Tier:** Tier 1: Mini-Website  
**Owner:** Solo Licensed Dentist Practice  
**Date:** October 2026  
**Implementation Targets:** Single-Page High-Conversion Landing Page with WhatsApp-First Architecture  

---

## 1. Executive Summary & Problem Statement

This specification defines the complete end-to-end frontend architecture for a high-conversion, mobile-first landing page representing a solo licensed dental practitioner who provides home and workplace dental visits.

Traditional dental clinics present high friction for frail seniors, family caregivers, shift workers, and anxious dental avoiders. The objective of this web application is to remove all cognitive friction, demystify costs, provide unshakeable medical and hygiene reassurance, and facilitate an immediate, pressure-free connection via WhatsApp (`wa.me`) or telephone.

---

## 2. 100% Requirement Ingestion Matrix (Anti-Lossy Traceability)

| Detail # | User / Discovery Requirement | Implementation Target | Acceptance Criterion |
|---|---|---|---|
| **D-1** | Clear, honest everyday positioning: "The friendly, honest dentist who comes to you." | `src/components/organisms/HeroOrganism.tsx` | **AC-1** |
| **D-2** | WhatsApp-first primary conversion with service-specific prefilled messages (`wa.me`). | `src/components/molecules/WhatsAppCTAButton.tsx` | **AC-2** |
| **D-3** | Telephone click-to-call fallback for seniors and non-WhatsApp users. | `src/components/molecules/PhoneCallButton.tsx` | **AC-3** |
| **D-4** | Anti-Pill Law: strictly no rounded badge pills or emoji chips above headings. | All components (`HeadingAtom.tsx`, Organisms) | **AC-4** |
| **D-5** | Single-Knob Global CSS Cascading: HSL variables in `globals.css` mapped to Tailwind CSS. | `src/index.css` & `tailwind.config.ts` | **AC-5** |
| **D-6** | Senior-first accessibility: min 48×48px tap targets, 18px body copy floor, WCAG 2.1 AAA contrast. | `src/index.css` & UI tokens | **AC-6** |
| **D-7** | Radical honesty: "What we can & can't do at home" + clinic referral promise. | `src/components/organisms/ScopeBoundariesOrganism.tsx` | **AC-7** |
| **D-8** | Hygiene reassurance: sterile, sealed single-use pouches unsealed in front of patient. | `src/components/organisms/EquipmentSafetyOrganism.tsx` | **AC-8** |
| **D-9** | Price transparency: "From" prices upfront and "Clear price before we start" guarantee. | `src/components/organisms/ServicesPricingOrganism.tsx` | **AC-9** |
| **D-10** | Mobile sticky floating WhatsApp dock with safe-area padding (`pb-safe`). | `src/components/organisms/FloatingWhatsAppCTAOrganism.tsx` | **AC-10** |
| **D-11** | Lightweight client observability via Sentry browser monitoring. | `src/main.tsx` (Sentry ErrorBoundary) | **AC-11** |
| **D-12** | Local healthcare structured data (`Dentist` / `LocalBusiness` JSON-LD). | `index.html` | **AC-12** |

---

## 3. Non-Destructive Blast-Radius Contract (Anti-Regression Lock)

- **Target Blast Radius**: New greenfield Vite project initialization within `c:\Users\HP\Documents\elfote`.
  - Target files: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/index.css`, `src/App.tsx`, `src/main.tsx`, `src/components/**`.
- **Protected Working Surface ("DO NOT TOUCH")**:
  - `AGENTS.md` (Governing rulebook)
  - `context/site-overview.md`
  - `context/design-tokens.md`
  - `context/page-specs.md`
  - `context/build-checklist.md`
  - `context/designs/stitch-mockup-prompt.md`
  - `concierge-dentist-discovery-v2.md`
- **Surgical Edit Guarantee**: Context files are source-of-truth reference locks and will remain preserved.

---

## 4. Numbered Acceptance Criteria

- **AC-1 (Positioning & Hero Clarity):** When a visitor lands on the page, the hero displays "Dental care that comes to you" and the subheadline within the first viewport, passing the 5-Second Test with zero ambiguity.
- **AC-2 (Prefilled WhatsApp Links):** Every WhatsApp button generates a valid `wa.me` URL with correctly URL-encoded intent messages corresponding to that section (e.g. general, checkup, cleaning, family).
- **AC-3 (Phone Call Fallback):** Direct dial `tel:` links are active in the header, hero, meet-the-dentist, final CTA, and footer.
- **AC-4 (Anti-Pill Invariant):** Zero pill-shaped badges, emoji tags, or miniature tags appear above any `h1`, `h2`, or `h3` heading.
- **AC-5 (Single-Knob CSS Cascade):** All theme colors derive from CSS variables in `index.css` (`--primary`, `--background`, `--card`, `--radius`). Modifying `--primary` cascades globally.
- **AC-6 (Senior Accessibility):** All interactive buttons and accordion triggers have a minimum clickable area of 48×48px. Body text font size is ≥18px (`1.125rem`). Contrast meets WCAG 2.1 AAA standards.
- **AC-7 (Scope & Limits):** The "What We Can & Can't Do at Home" section explicitly lists treatable services alongside clinic referrals.
- **AC-8 (Hygiene Reassurance):** Equipment section clearly outlines sterile instrument packaging and minimal home requirements (chair, light, plug).
- **AC-9 (Pricing Clarity):** Service cards display clear starting prices and confirm no surprise fees.
- **AC-10 (Mobile Floating Dock):** On viewports ≤768px, a floating WhatsApp CTA remains docked at bottom-center with z-index 50 without occluding vital disclosures.
- **AC-11 (Observability):** Sentry browser SDK initializes gracefully with sample error handling and release tracking.
- **AC-12 (SEO & Schema):** Valid `Dentist` JSON-LD structured data is embedded in `index.html`.

---

## 5. Atomic Component Architecture & Module Mapping

```text
src/
├── components/
│   ├── atoms/
│   │   ├── ButtonAtom.tsx         <-- Radix Slot / Tailwind atomic button
│   │   ├── CardAtom.tsx           <-- 16px soft radius clinical surface
│   │   ├── HeadingAtom.tsx        <-- Typographic h1/h2/h3 without pills
│   │   ├── IconWrapperAtom.tsx    <-- Lucide outline icon styling
│   │   └── SeparatorAtom.tsx      <-- Light blue divider (#C7DCF3)
│   ├── molecules/
│   │   ├── WhatsAppCTAButton.tsx  <-- Context-aware wa.me URL generator
│   │   ├── PhoneCallButton.tsx    <-- Accessible tel: link
│   │   ├── ServiceCardMolecule.tsx<-- Service details + "From" price + CTA
│   │   ├── ProcessStepMolecule.tsx<-- Step number + title + plain description
│   │   ├── TrustProofMolecule.tsx <-- Shield/Checkmark + credential text
│   │   ├── FAQAccordionItem.tsx   <-- Accessible accordion item
│   │   └── AudienceCardMolecule.tsx<-- Persona card (Families, Seniors, etc.)
│   └── organisms/
│       ├── HeaderOrganism.tsx
│       ├── HeroOrganism.tsx
│       ├── HowItWorksOrganism.tsx
│       ├── WhoWeHelpOrganism.tsx
│       ├── ServicesPricingOrganism.tsx
│       ├── EquipmentSafetyOrganism.tsx
│       ├── ScopeBoundariesOrganism.tsx
│       ├── TrustPromiseOrganism.tsx
│       ├── MeetDentistOrganism.tsx
│       ├── FAQOrganism.tsx
│       ├── ServiceAreaHoursOrganism.tsx
│       ├── FinalCTABandOrganism.tsx
│       ├── FooterOrganism.tsx
│       └── FloatingWhatsAppCTAOrganism.tsx
├── data/
│   └── content.ts                 <-- Exact human copy from context/page-specs.md
├── lib/
│   ├── sentry.ts                  <-- Sentry error monitoring initialization
│   └── utils.ts                   <-- cn() class merger
├── App.tsx                        <-- Master Single-Page composition
├── index.css                      <-- Single-knob CSS variables & Figtree font
└── main.tsx                       <-- Root mount & ErrorBoundary
```

---

## 6. Verification Plan & Testing Script

1. **Static Analysis & Typecheck:** Run `npx tsc --noEmit` to verify 100% strict TypeScript compliance.
2. **Production Bundle Verification:** Run `npm run build` to verify clean static bundling with zero asset or dependency errors.
3. **Responsive Visual Audit:**
   - 375px viewport (mobile): Verify full-width touch targets, floating dock, zero horizontal overflow.
   - 768px viewport (tablet): Verify 2-column grid reflow.
   - 1280px viewport (desktop): Verify centered 1200px container, floating dock hidden.
4. **WhatsApp URL Validation:** Test every CTA click to verify valid query strings (`wa.me/447000000000?text=...`).
5. **Keyboard & Accessibility Navigation:** Tab through all buttons and accordion headers; verify visible high-contrast focus rings (`ring-2 ring-primary`).
