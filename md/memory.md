# Project Memory — Ugyen Pee Education Consultancy Website

Purpose: a running context file for this project so future work (design, coding, content) starts from the same decisions instead of re-litigating them. Read this before touching `prd.md` or `design.md`.

---

## 1. What This Project Is

Public-facing marketing/informational website for **Ugyen Pee Education Consultancy & Placement Firm**, an education consultancy in Thimphu, Bhutan. Originally scoped as a full "Ugyen Pee Education Consultancy & Placement Management Portal" (student portal + admin portal + public site), but the client has **explicitly narrowed current scope to the public website only**.

## 2. Locked-In Scope Decision

- ✅ Build now: public website (info pages, destinations, universities, courses, news/events, testimonials, FAQ, contact/enquiry form)
- ❌ Not now: student accounts/login, application submission/tracking, document upload, admin/staff dashboards, online payments
- These deferred items are documented as Phase 2–4 in `prd.md` Section 8, purely for future reference — do not build toward them prematurely (e.g., don't add auth scaffolding "just in case").
- The public site should **not** require account creation at all in this phase.

## 3. Branding Decision

- **Do not redesign the existing Ugyen Pee logo.** It has Bhutanese cultural symbolism (dragon, lotus, flame, water) and public identifiability.
- Build a *modern digital identity around* the existing logo rather than replacing it.
- Color and typography system derived from the logo is fully specified in `design.md` — treat that as the source of truth for all visual work (primary purple `#6B5575`, teal secondary `#176B73`, gold/red/green as sparing accents, Cormorant Garamond headings + Inter/Manrope body).
- Explicit ratio guidance: white/light dominant (60–65%), purple 20–25%, teal 5–10%, gold/red/green combined under ~7%. Avoid a "logo pasted onto a colorful site" look.

## 4. Data Integrity / Content Rule (Important)

A large amount of "known" info about Ugyen Pee (establishment year 2001, ten study destinations, Zombla Complex address, proprietor name) comes from a **third-party public listing (UniAgents)**, not the client directly. This must **never be presented as confirmed/official content** on the live site.

- Full TBC list lives in `prd.md` Section 9 — company name, registration info, establishment year, mission/vision, leadership, current address/phone/email/socials, currently served countries, university partnerships, current courses, services, statistics, fees, application workflow, document requirements, privacy policy.
- Any statistic (years of experience, students assisted, partner count) must stay a placeholder or be omitted entirely until the client confirms it.
- Business rules BR-009 and BR-010 (no implied guaranteed admission/visa outcomes) apply to every page's copy, not just a disclaimer footer.

## 5. Deliverables Produced So Far

- `prd.md` — scoped PRD for the public website: goals, sitemap, page-by-page functional requirements, business rules, non-functional requirements, TBC list, next steps
- `design.md` — full design system: color palette + CSS variables, typography, navigation pattern, homepage layout, component patterns (destination card, university card, course finder, testimonial, FAQ accordion, contact form), responsive/accessibility notes

## 6. Recommended Next Steps (as of this writing)

1. Get the client (Ugyen Pee) to confirm the TBC list in `prd.md` Section 9 before writing final copy.
2. Produce a page-by-page UI specification (exact section order, spacing, responsive/mobile layout, image direction) using `design.md` as the base — this was the explicitly stated "next step" after the BRD/design decisions.
3. Only after that: begin React/Vite implementation using the CSS variables and component patterns in `design.md`.
4. If/when the project later reopens Phase 2/3 (student portal, admin portal), pull the full original BRD requirements (roles: Public Visitor, Student, Counsellor/Staff, Administrator; application workflow: Enquiry → Counselling → Course Selection → University Selection → Document Collection → Application Preparation → Application Submitted → Offer Received → Offer Accepted → Visa Preparation → Visa Application → Visa Decision → Pre-departure → Completed) — not included in the current public-site scope but preserved here for continuity.

## 7. Open Questions

- Exact final list of study destinations to publish (client-confirmed subset of the 10 currently listed publicly)
- Whether SMS/WhatsApp notifications or online payments will ever be in scope (currently explicitly out of scope / future-phase only)
- Final legal text for Privacy Policy / Terms of Use — needs validation against Bhutan's data-protection obligations, not just generic boilerplate
