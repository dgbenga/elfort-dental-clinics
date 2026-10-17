# Build Checklist & Quality Assurance Floor: Home-Visit Dentist

**Tier:** Tier 1: Mini-Website (High-Conversion Landing Page)  
**Standard:** Silicon Valley Production Quality Floor (WCAG 2.1 AA, Lighthouse 95+, Zero AI Slop)  
**Rule:** The engineering agent cannot claim the site is finished until every single item is verified.  

---

## 1. The 5-Second Value Proposition Test
- [ ] **Instant Clarity:** Within 5 seconds of opening the page, any stranger can immediately state: *"This is a licensed dentist who visits your home or workplace for check-ups and cleanings."*
- [ ] **Audience Self-Identification:** Seniors, caregivers, shift workers, and nervous patients immediately see themselves represented in Section 4.
- [ ] **Primary Action Unmistakable:** The WhatsApp chat button is prominently visible in the viewport at all times, with zero visual ambiguity about what happens next.

---

## 2. Multi-Device Responsiveness (375px Floor)
- [ ] **375px Mobile Screen Verification:** Tested down to `375px` viewport width (iPhone SE / standard Android) with zero horizontal scrollbar or squished text.
- [ ] **768px Tablet Verification:** Tested at `768px` (iPad Portrait); card grids transition smoothly between 1-column and 2-column layouts.
- [ ] **1280px+ Desktop Verification:** Layout is centered with maximum content container width of `1200px` (`max-w-6xl`), preventing awkward ultra-wide stretching.
- [ ] **Senior-First Touch Targets:** Every button, accordion trigger, and link has a minimum clickable/tappable area of `48×48px`.
- [ ] **Mobile Floating CTA Dock:** Floating WhatsApp dock on mobile screens sits cleanly above the bottom edge, respects `env(safe-area-inset-bottom)`, and does not permanently occlude footer disclosures.

---

## 3. The Anti-AI-Slop & Design Invariants Audit
- [ ] **The Anti-Pill / Anti-Badge Law:** Verified that ZERO rounded badge pills with emoji chips (e.g. `[✨ OUR SERVICES]`, `[🚀 HOW IT WORKS]`) exist above headings. All section titles rely purely on typographic hierarchy (`h2` in Figtree Bold).
- [ ] **Single-Knob Global CSS Cascade Verification:**
  - [ ] Verified that changing `--primary` in `globals.css` instantly updates primary buttons, icons, links, and the final CTA band app-wide without manual overrides.
  - [ ] Verified that changing `--radius` in `globals.css` cascades across all cards and buttons.
  - [ ] Zero hardcoded hex colors or raw utility classes (`bg-blue-600`) used in component files.
- [ ] **Atomic shadcn/Radix Foundation:** All interactive components (Buttons, Accordion, Cards) consume structured shadcn/ui and headless Radix UI primitives.
- [ ] **Zero Lorem Ipsum Guarantee:** 100% of copy matches the approved human copywriting in `context/page-specs.md`. No placeholder text, hollow buzzwords, or `TODO` markers.

---

## 4. Accessibility Floor (WCAG 2.1 AA & AAA Baseline)
- [ ] **Contrast Verification:**
  - Deep Navy `#0B3A75` on White `#FFFFFF` ≥ `11:1` (Passes AAA).
  - Deep Navy `#0B3A75` on Soft Sky `#EAF3FF` ≥ `10:1` (Passes AAA).
  - Body Text `#2F4562` on White `#FFFFFF` ≥ `9.7:1` (Passes AAA).
  - Body Text `#2F4562` on Soft Sky `#EAF3FF` ≥ `8.7:1` (Passes AAA).
  - Muted Captions `#576F8E` on White `#FFFFFF` ≥ `5.4:1` (Passes AA).
- [ ] **Visible Keyboard Focus:** All interactive elements feature visible, high-contrast focus rings (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`). Outlines are never hidden.
- [ ] **Semantic HTML5 Structure:** Single `h1` on the page, proper sequential hierarchy (`h1` → `h2` → `h3`), semantic `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`.
- [ ] **Senior-First Typography Floor:** Body copy is strictly minimum `18px` (`text-lg`) with `1.65` line height.
- [ ] **Screen Reader Labels:** All icons and icon buttons have descriptive `aria-label` or `aria-hidden="true"` attributes.
- [ ] **Reduced Motion:** Verified `@media (prefers-reduced-motion: reduce)` disables or minimizes all transitions and scroll animations.

---

## 5. Conversion & WhatsApp Architecture
- [ ] **Valid wa.me URLs:** All WhatsApp links use international format (`https://wa.me/447000000000?text=...`) with valid URL-encoded query parameters.
- [ ] **Context-Aware Prefilled Messages:**
  - Hero CTA: General home visit inquiry.
  - Check-up Card CTA: Specific check-up inquiry.
  - Cleaning Card CTA: Specific cleaning inquiry.
  - Family Card CTA: Combined household visit inquiry.
- [ ] **Working Phone Fallback:** `tel:` links verified for mobile direct dial in Header, Meet Dentist, Final CTA Band, and Footer.
- [ ] **Analytics Event Tracking:** Click event listeners attached to every WhatsApp CTA button tracking `button_location` (header, hero, services, final, floating).

---

## 6. Observability & Runtime Reliability
- [ ] **Lightweight Sentry Browser SDK:** Configured in `src/main.tsx` or root layout with release tracking to capture unhandled client errors, broken links, or runtime script exceptions.
- [ ] **Zero Console Errors:** Zero unhandled exceptions or React hydration warnings in the browser console.

---

## 7. Performance & Core Web Vitals Budget
- [ ] **Target LCP < 1.5s:** Hero section loads instantly without heavy blocking render assets.
- [ ] **Target CLS < 0.05:** All images have explicit `width` and `height` attributes to prevent layout shifts.
- [ ] **Target INP < 100ms:** All button clicks and accordion toggles react immediately.
- [ ] **Asset Optimization:** Headshot and photography converted to modern WebP format, compressed, and self-hosted.
- [ ] **Lighthouse Scores (Mobile):** Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

---

## 8. SEO & Local Healthcare Structured Data
- [ ] **Meta Title:** `Home Visit Dentist | Gentle Dental Care at Home & Work` (< 60 chars).
- [ ] **Meta Description:** `A friendly, licensed dentist visits your home or workplace for check-ups, cleanings, and simple repairs. Clear prices, sterile care, zero pressure.` (< 155 chars).
- [ ] **OpenGraph Social Card:** Complete `og:title`, `og:description`, `og:image`, `og:type="website"`.
- [ ] **LocalBusiness / Dentist JSON-LD Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dr. [Dentist Name] Home Dental Care",
  "description": "Friendly, licensed mobile dentist providing home and workplace dental care.",
  "telephone": "+44-7000-000000",
  "areaServed": ["City / Postcodes"],
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-18:30, Sa 09:00-16:00"
}
```
