# AGENTS.md — High-End Engineering Standards for Home-Visit Dentist Landing Page (Tier 1)

## Project Mandate & Core Identity

This repository hosts the mobile-first, high-conversion landing page for a solo licensed dentist providing home-visit and workplace dental care.
- **Core Positioning**: *The friendly, honest dentist who comes to you.* Not an exclusive concierge service, but a practical, trusted neighborhood professional.
- **Primary Conversion**: Direct WhatsApp chat (`wa.me`) with prefilled service intent messages, plus a direct telephone call fallback for older visitors.
- **Design Philosophy**: Deep calm, medical-grade hygiene and safety reassurance, transparent pricing, and effortless senior accessibility.

---

## The Mini-Context Protocol (Strict Execution Order)

Before writing or modifying any HTML, TSX, CSS, or component code, **read the project's context files in this strict sequence**:
1. [`context/site-overview.md`](file:///c:/Users/HP/Documents/elfote/context/site-overview.md): Brand identity, visitor personas, synthesized UX research (JTBD, pain point hierarchy, verbatim quotes), and conversion architecture.
2. [`context/design-tokens.md`](file:///c:/Users/HP/Documents/elfote/context/design-tokens.md): Locked color tokens, single-knob CSS variables in `globals.css`, Figtree typography scale, spacing rhythm, and micro-interactions.
3. [`context/page-specs.md`](file:///c:/Users/HP/Documents/elfote/context/page-specs.md): Atomic component taxonomy ([ATOM], [MOLECULE], [ORGANISM]), section-by-section wireframes, and finalized human copywriting.
4. [`context/build-checklist.md`](file:///c:/Users/HP/Documents/elfote/context/build-checklist.md): Definition of Done: 375px mobile responsiveness, WCAG 2.1 AA accessibility, Sentry error observability, and Core Web Vitals targets.

If any required context file is missing or contradictory, **stop and flag it to the developer** rather than guessing.

---

## Standing Invariants (Non-Negotiable)

### 1. The Anti-Pill / Anti-Badge Law (Strictly Banned)
* **BANNED**: Placing rounded pill badges, emoji chips, or miniature uppercase tags above headings (e.g., `[✨ OUR SERVICES]`, `[🦷 WHY HOME CARE]`, or rounded border pills).
* **ENFORCED**: Pure typographic hierarchy. Use standard semantic tags (`h1`, `h2`, `h3`) styled with intentional scale, font weight, line-height, and tracking.
* An eyebrow label is ONLY permitted if it encodes real structural metadata (e.g., a published date `OCTOBER 2026`, or an official licence designation `GDC REGISTRATION NO. 123456`).

### 2. Zero-Placeholder & Human Copywriting Guarantee
* **BANNED**: `Lorem Ipsum`, `// TODO`, generic filler copy, or hollow AI buzzwords (*"seamless"*, *"cutting-edge"*, *"luxury concierge"*, *"boutique sanctuary"*, *"pain-free guaranteed"*).
* **ENFORCED**: Use the exact, pre-defined human copy from `context/page-specs.md`. Every sentence must read like it was spoken by a kind, honest dentist at a patient's kitchen table.

### 3. shadcn/ui + Radix UI Atomic Foundation
* **ENFORCED**: All interactive components must be built on **shadcn/ui** and headless **Radix UI** primitives. No component may ever be guessed, improvised, or built from unstyled divs.
* **The Atomic Decomposition**:
  - **Atoms**: Indivisible primitives (`Button`, `Card`, `Separator`, `AccordionTrigger`).
  - **Molecules**: Purpose-built combinations (`WhatsAppCTAButton`, `PhoneCallButton`, `ProcessStepCard`, `TrustProofBadge`).
  - **Organisms**: Complete section compositions (`HeroOrganism`, `ServicesPricingOrganism`, `MeetDentistOrganism`, `FooterOrganism`).
* **Sprint Design System Immutability**: Any subsequent sprint addition or new section must be assembled strictly from registered Atoms and Molecules without prompting.

### 4. Global CSS Single-Knob Cascading (Figma Webhook Parity)
* All theme tokens MUST be configured as CSS variables in `globals.css` (e.g. `--primary`, `--background`, `--card`, `--radius`) mapped to Tailwind CSS.
* Changing a single color variable in `globals.css` must cascade instantaneously across every Atom, Molecule, and Organism app-wide—matching the behavior of a live Figma Tokens API / webhook updater. Hardcoded hex codes and raw ad-hoc classes (`bg-blue-600`) are strictly banned.

### 5. Senior-First Mobile Responsiveness (375px Floor)
* Every layout must be fully responsive down to `375px` viewport width without horizontal scrolling or squished typography.
* Touch targets must be at least `48x48px` to ensure effortless usability for older adults, tremors, or busy parents holding a phone with one hand.
* Body font size must never drop below `18px` on mobile or desktop.
* Floating WhatsApp CTA must stay permanently accessible on mobile without occluding essential footer disclosures or action buttons.

### 6. Accessibility Baseline (WCAG 2.1 AA & AAA Verified)
* Contrast ratios:
  - Deep Navy `#0B3A75` on White `#FFFFFF` is 11:1 (AAA).
  - Deep Navy `#0B3A75` on Sky Blue `#EAF3FF` is 10:1 (AAA).
  - Body Text `#2F4562` on White `#FFFFFF` is 9.7:1 (AAA).
  - Body Text `#2F4562` on Sky Blue `#EAF3FF` is 8.7:1 (AAA).
* All interactive elements must feature visible `focus-visible` styling rings (`ring-2 ring-primary ring-offset-2`).
* All images must feature descriptive `alt` tags (`alt=""` only for purely decorative SVGs).
* Forms/inputs must use semantic `<label>` elements linked via `id`. Placeholders are never a substitute for labels.

### 7. Observability & Crash Prevention
* Initialize lightweight **Sentry** browser monitoring with release tracking to capture runtime uncaught crashes or unhandled promise rejections.
* Enforce Core Web Vitals performance budget: LCP < 1.5s, CLS < 0.05, INP < 100ms.

---

## Execution Discipline

1. **Build UI with Locked Tokens First**: Assemble the visual structure and typography using `context/design-tokens.md` and `context/page-specs.md`.
2. **Compose Atomics**: Build atoms first, combine into molecules, and assemble into organisms.
3. **Never Drift**: Do not invent new components or styling classes that conflict with the design tokens.
4. **Circuit Breaker**: If a visual layout or styling bug persists after ONE failed correction, **stop immediately**. Do not guess blindly with random CSS tweaks. Inspect the root layout tree and apply a surgical fix.
5. **Pre-Ship Verification**: Verify the page against `context/build-checklist.md` (including single-knob CSS cascade check and Sentry initialization) before reporting completion.
