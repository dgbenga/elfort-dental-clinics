# Architecture Rationale: 0001 — Home-Visit Dentist Mobile Landing Page

**Spec:** `docs/specs/0001-foundation-and-landing-page/index.md`  
**Status:** Accepted  

---

## 1. Technical Stack Selection: Why Vite + React 19 + TypeScript

### Alternatives Evaluated:
1. **Plain HTML5 + Tailwind CLI:**  
   *Pros:* Minimal disk footprint, single file.  
   *Cons:* Lacks typed atomic composition, makes URL prefill parameter encoding brittle, harder to implement reusable Radix accordion state, and lacks robust single-knob cascade token enforcement across modular components.
2. **Next.js App Router (Full SSR):**  
   *Pros:* Powerful full-stack capabilities, server actions.  
   *Cons:* Overkill for a single-page landing page with $0/month infrastructure budget. Introduces unnecessary Node runtime dependencies and server cold starts.
3. **Vite + React 19 + TypeScript (Selected):**  
   *Rationale:* Compiles to a 100% pure static bundle (`dist/`) that can be hosted permanently for $0/month on Cloudflare Pages, Netlify, or Vercel Edge. Delivers sub-1-second mobile LCP, enables strict atomic design (Atoms/Molecules/Organisms), supports typed WhatsApp prefilled message helpers, and gives full single-knob CSS cascading in `index.css`.

---

## 2. Senior-First Usability & Cognitive Load Rationale

- **Why 18px Body Minimum:** Many patients seeking home visits are aged 65+ or caregivers reading on mobile screens under various lighting conditions. 18px text paired with 1.65 line height reduces reading fatigue.
- **Why 48×48px Minimum Touch Targets:** Prevents mis-taps by older adults with tremors or busy parents holding an infant with one hand.
- **Why Navy (#0B3A75) Instead of Green for WhatsApp Button:** While WhatsApp is traditionally green, a bright neon green button disrupts the calm, clinical atmosphere of healthcare reassurance. By styling the button in our primary Deep Navy with a crisp white WhatsApp icon and clear label, the page retains visual elegance and medical authority while remaining instantly recognizable.

---

## 3. Observability Architecture (Sentry)

- Lightweight Sentry browser client (`@sentry/react`) tracks unhandled script crashes or unhandled promise rejections.
- Configured with `beforeSend` PII scrubbing to ensure patient phone numbers or personal query text are never leaked to external telemetry servers.
