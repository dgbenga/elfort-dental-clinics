# UI Component Registry & Atomic Taxonomy (Elfort Dental Clinics)

*Living registry maintained per `AGENTS.md` and `imprint` workflow. All components adhere to locked HSL design tokens, single-knob CSS variables in `src/index.css`, headless Radix UI / shadcn/ui primitives, and Senior-First WCAG AAA accessibility standards.*

---

## 1. Atoms

### [ATOM]: Button
- **Filepath**: `src/components/ui/button.tsx`
- **Atomic Tier**: `Atom`
- **Underlying Primitives**: Radix UI `Slot`, `cva` (class-variance-authority)
- **Purpose**: Indivisible interactive touch target with guaranteed >=48px touch floor on mobile.
- **Tokens Consumed**:
  - Background: `bg-primary`, `bg-accent`, `bg-secondary`
  - Text: `text-primary-foreground`, `text-accent-foreground`
  - Focus Ring: `focus-visible:ring-2 focus-visible:ring-ring`
  - Radius: `rounded-lg` (`var(--radius)`)
- **Canonical Usage**:
  ```tsx
  <Button variant="whatsapp" size="lg">Send Message</Button>
  ```

### [ATOM]: Card
- **Filepath**: `src/components/ui/card.tsx`
- **Atomic Tier**: `Atom`
- **Underlying Primitives**: Semantic HTML `<div>` with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- **Purpose**: Standard surface container for services, pricing, steps, and outreach cards.
- **Tokens Consumed**:
  - Background: `bg-card`
  - Text: `text-card-foreground`
  - Border: `border-border`
  - Radius: `rounded-xl` / `rounded-2xl`
- **Canonical Usage**:
  ```tsx
  <Card className="p-6 border border-border bg-card">
    <CardTitle>Service Title</CardTitle>
  </Card>
  ```

### [ATOM]: Accordion
- **Filepath**: `src/components/ui/accordion.tsx`
- **Atomic Tier**: `Atom`
- **Underlying Primitives**: Radix UI `@radix-ui/react-accordion`
- **Purpose**: Senior-friendly, keyboard-accessible collapsible panels for FAQ section.
- **Tokens Consumed**:
  - Border: `border-border`
  - Focus Ring: `focus-visible:ring-2 focus-visible:ring-ring`

---

## 2. Molecules

### [MOLECULE]: WhatsAppCTAButton
- **Filepath**: `src/components/molecules/WhatsAppCTAButton.tsx`
- **Atomic Tier**: `Molecule`
- **Underlying Primitives**: Composed `Button` + WhatsApp SVG emblem
- **Purpose**: Primary conversion engine across all sections with prefilled intent deep-linking to `https://wa.me/2348144199019`.
- **Supported States**: `default`, `hover`, `focus-visible`, full-width or inline.
- **Canonical Usage**:
  ```tsx
  <WhatsAppCTAButton intent="general" label="Chat on WhatsApp" />
  ```

### [MOLECULE]: PhoneCallButton
- **Filepath**: `src/components/molecules/PhoneCallButton.tsx`
- **Atomic Tier**: `Molecule`
- **Underlying Primitives**: Composed `Button` + Phone SVG icon
- **Purpose**: Direct telephone call fallback for senior citizens and emergency consults (`tel:+2348144199019`).
- **Canonical Usage**:
  ```tsx
  <PhoneCallButton phoneNumber="0814 419 9019" />
  ```

### [MOLECULE]: ServiceCard
- **Filepath**: `src/components/molecules/ServiceCard.tsx`
- **Atomic Tier**: `Molecule`
- **Underlying Primitives**: `Card` + `WhatsAppCTAButton` + typography stack
- **Purpose**: Displays clinical procedure details, transparent pricing in Nigerian Naira (₦), inclusions list, and direct booking trigger.

### [MOLECULE]: PostcodeEligibilityChecker
- **Filepath**: `src/components/molecules/PostcodeEligibilityChecker.tsx`
- **Atomic Tier**: `Molecule`
- **Underlying Primitives**: Form input + submit button + immediate interactive verification state
- **Purpose**: Calms patient anxiety regarding home visit coverage areas.

---

## 3. Organisms

### [ORGANISM]: HeaderOrganism
- **Filepath**: `src/components/organisms/HeaderOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: Semantic `<header>`, `<nav>`, clinical emblem on single baseline, sleek `h-16` bar, ordered desktop nav links, `WhatsAppCTAButton`, clean mobile drawer.
- **Tokens Consumed**:
  - Main Bar: `bg-card/95 backdrop-blur-md`, `border-border`, height `h-16` (64px)
  - Typography: `text-primary`, `text-foreground/80`
  - Conversion: Primary `WhatsAppCTAButton` only
- **Accessibility**: Skip link ready, `aria-expanded` on mobile hamburger toggle, keyboard navigable focus rings.

### [ORGANISM]: HeroOrganism
- **Filepath**: `src/components/organisms/HeroOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: High-resolution mobile dentistry photograph (`/hero-dentist-home.jpg`), dual-layer WCAG AAA contrast lighting gradient, 7:5 widescreen balanced grid, primary H1 typography, dual conversion CTAs, trust metric badges, floating glass medical reassurance card.
- **Tokens Consumed**:
  - Surface: `bg-background`, `bg-white/90 backdrop-blur-md`
  - Typography: `text-primary`, `text-foreground`
  - Border & Shadow: `border-border/80`, `shadow-clinical-hover`
- **Accessibility**: Descriptive image `alt`, `loading="eager"` with `fetchPriority="high"`, guaranteed 11:1 AAA contrast on typography over image overlay.

### [ORGANISM]: ServicesPricingOrganism
- **Filepath**: `src/components/organisms/ServicesPricingOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: Wide featured combination service banner + balanced 2×2 card grid showcasing all 5 clinical offerings with transparent pricing.

### [ORGANISM]: CommunityOutreachOrganism
- **Filepath**: `src/components/organisms/CommunityOutreachOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: 3 collaboration pillar cards (Churches, Corporate Wellness, Communities) + interactive partnership WhatsApp & email action banner.

### [ORGANISM]: HowItWorksOrganism
- **Filepath**: `src/components/organisms/HowItWorksOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: 3-step numbered journey explaining WhatsApp booking, home arrival with autoclave-sterilized portable kit, and clean wrap-up.

### [ORGANISM]: CatchmentOrganism
- **Filepath**: `src/components/organisms/CatchmentOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: Coverage zone badges, travel policy disclosure, and `PostcodeEligibilityChecker`.

### [ORGANISM]: SafetyHygieneOrganism
- **Filepath**: `src/components/organisms/SafetyHygieneOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: 4-point clinical sterilization reassurance grid with medical-grade protocols.

### [ORGANISM]: MeetDentistOrganism
- **Filepath**: `src/components/organisms/MeetDentistOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: Dentist personal statement, clinical credentials, kitchen-table philosophy, and verified registration.

### [ORGANISM]: FAQOrganism
- **Filepath**: `src/components/organisms/FAQOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: Accessible Radix `Accordion` answering top senior, carer, and family anxiety questions.

### [ORGANISM]: FloatingWhatsAppCTAOrganism
- **Filepath**: `src/components/organisms/FloatingWhatsAppCTAOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: Fixed mobile bottom conversion bar (`md:hidden`) with dual WhatsApp and Telephone direct dial actions.

### [ORGANISM]: FooterOrganism
- **Filepath**: `src/components/organisms/FooterOrganism.tsx`
- **Atomic Tier**: `Organism`
- **Underlying Primitives**: Semantic `<footer>`, clinic details, official email `elfortdentalclinics@gmail.com`, phone `0814 419 9019`, emergency disclaimers, and copyright.
