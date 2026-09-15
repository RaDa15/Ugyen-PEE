# Design System
## Ugyen Pee Education Consultancy & Placement Firm — Public Website

**Version:** 1.0
**Scope:** Public-facing website only

---

## 1. Brand Foundation

The existing Ugyen Pee logo is the anchor of the visual identity: a deep purple/lavender circular border, black typography, Bhutanese blue/teal water, gold/yellow details, red/orange flame elements, green foliage, and a white background.

**Decision: do not redesign the logo.** It carries Bhutanese national symbolism (dragon, lotus, flame, water) and is already identifiable. Instead, build a modern digital identity *around* it:

> Traditional logo → modern website → clean typography → restrained purple/teal/gold palette.

Not every logo color should appear with equal weight on the site — that reads as visually busy. Instead, use a controlled design system with one dominant brand color and the rest as accents.

## 2. Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Ugyen Pee Purple | `#6B5575` | Primary buttons, nav highlights, section headings, important links, icons, active states |
| Primary Dark | Deep Purple | `#3F304A` | Hero background, footer, strong headings, nav text, high-emphasis elements |
| Primary Light | Soft Lavender | `#EDE8F0` | Section backgrounds, cards, hover states, info panels |
| Secondary | Bhutanese Teal/Blue | `#176B73` | Secondary buttons, destination cards, links, small highlights, statistics |
| Secondary Light | Teal Light | `#E7F2F2` | Supporting backgrounds/panels for teal elements |
| Accent | Gold | `#D5A928` | Decorative lines, icons, highlights, awards/achievements, hover accents (sparing use) |
| Accent | Red/Coral | `#C65B4B` | Sparingly — notices, small decorative details, cultural accents |
| Accent | Green | `#5E8B58` | Nature/cultural imagery, success indicators, Bhutan-related visuals |
| Neutral | White | `#FFFFFF` | Main background |
| Neutral | Soft Background | `#F8F7F9` | Alternate section background |
| Neutral | Text | `#202024` | Body text |
| Neutral | Secondary Text | `#66636A` | Muted/supporting text |
| Neutral | Border | `#E4DFE7` | Dividers, card borders |

### Color Ratio Guideline

```
WHITE / LIGHT   60–65%
PURPLE          20–25%
TEAL / BLUE      5–10%
GOLD             2–5%
RED / GREEN      1–2%
```

The logo establishes the identity; the website modernizes it — the site should never look like the logo was simply pasted onto a colorful background.

### Color Usage Rule

- **Purple = brand**
- **Teal = education / global opportunities**
- **Gold = premium / highlight**
- **Red / green = supporting accents only**

### CSS Variables

```css
:root {
  --up-purple: #6B5575;
  --up-purple-dark: #3F304A;
  --up-purple-light: #EDE8F0;

  --up-teal: #176B73;
  --up-teal-light: #E7F2F2;

  --up-gold: #D5A928;
  --up-red: #C65B4B;
  --up-green: #5E8B58;

  --up-white: #FFFFFF;
  --up-background: #F8F7F9;

  --up-text: #202024;
  --up-text-muted: #66636A;

  --up-border: #E4DFE7;
}
```

## 3. Typography

| Role | Typeface | Notes |
|---|---|---|
| Headings | Cormorant Garamond | Refined, established, slightly Bhutanese/cultural feel |
| Body | Inter or Manrope | Modern, highly readable |

**Example pairing:**
- Heading (Cormorant Garamond): "Your Journey to Global Education Starts Here"
- Body (Inter): "Explore courses, universities and international study opportunities with guidance from Ugyen Pee."

## 4. Navigation

```
[UGYEN PEE LOGO]   Home  About Us  Services  Study Destinations
                    Universities  Courses  News & Events  Contact
                                          [Book a Consultation]
```

- Primary CTA in the nav: **Book a Consultation** — opens the contact/enquiry form (no account required)
- Keep the nav flat and simple; no deep dropdown menus in this phase beyond the sitemap already defined in `prd.md`

## 5. Homepage Layout Direction

```
                 UGYEN PEE
       EDUCATION CONSULTANCY
                  ◉

      YOUR JOURNEY TO
      GLOBAL EDUCATION
         STARTS HERE

     [ Explore Destinations ]
     [ Talk to a Counsellor ]
──────────────────────────────
        GUIDANCE YOU CAN TRUST
       20+          10+
     Experience   Destinations
──────────────────────────────
       EXPLORE YOUR OPTIONS
   Australia  UK  Canada  USA
     New Zealand  Ireland
     Germany  France
──────────────────────────────
        WHY CHOOSE UGYEN PEE?
       🎓        🌏        🤝
     Guidance   Global    Support
──────────────────────────────
       FIND YOUR FUTURE
   Search Courses / Universities
──────────────────────────────
         START YOUR JOURNEY
       [ BOOK A CONSULTATION ]
──────────────────────────────
             FOOTER
```

### Hero Section
- Background: white → soft lavender gradient, with subtle gold decorative elements
- Imagery: Bhutanese student + university/international education visual + subtle Bhutan landscape (avoid generic stock photography)
- Headline (Cormorant Garamond): "Your Journey to Global Education Starts Here"
- Supporting text (Inter): "Explore international education opportunities with guidance from Ugyen Pee Education Consultancy & Placement Firm."
- Two CTAs: **Explore Study Destinations** (primary, purple) / **Talk to a Counsellor** (secondary, teal or outline)

### Trust/Stats Section
- Stat blocks (years of experience, destinations, students assisted, partners) — **do not publish numbers until confirmed by the client** (see `prd.md` Section 9)

### Why Choose Us
- 4–5 cards, icon + short label + one-line description, on soft lavender or white background, purple icon accents

### How It Works
- 5-step horizontal/vertical timeline: Discover → Counselling → Choose → Apply → Begin Your Journey
- Numbered circles in purple, connecting line in a lighter tint

## 6. Component Patterns

### Destination Card
```
┌─────────────┐
│ 🇦🇺          │
│ Australia   │
│ Explore →   │
└─────────────┘
```
- Light lavender background, teal "Explore →" link, flag/icon top

### University Card
```
┌──────────────────────────┐
│ UNIVERSITY LOGO           │
│ University Name           │
│ Country                   │
│ Popular Programs          │
│ [ View University ]       │
└──────────────────────────┘
```
- White card, subtle border (`--up-border`), purple CTA button

### Course Finder
- Search bar + filter row (Country, Study Level, Field) + purple "Search" button
- Results as course cards below

### Testimonial Card
- Quote, student photo (with consent only), name, destination
- Soft lavender background, gold accent line or quotation mark

### FAQ Accordion
- Category tabs or grouped headers, expand/collapse rows, purple active-state indicator

### Contact / Enquiry Form
- Fields: Name, Phone, Email, Interested Country (dropdown), Message
- Single primary button: **Send Enquiry** (purple, full-width on mobile)

## 7. Responsive Behavior

- Breakpoints: mobile, tablet, laptop, desktop
- Nav collapses to a hamburger menu on mobile; "Book a Consultation" CTA remains visible or moves into the menu header
- Destination/university/course card grids: 3–4 columns desktop → 2 columns tablet → 1 column mobile
- Hero image stacks below text on mobile

## 8. Accessibility

- Maintain sufficient contrast between text and background colors (verify `--up-text` on `--up-purple-light` and `--up-teal-light`)
- Readable font sizes, clear focus states for keyboard navigation
- Descriptive alt text for all imagery, especially destination flags/icons and university logos
- Form fields with clear labels and inline validation messages

## 9. Content/Imagery Guidelines

- Avoid generic international stock photography where possible; prefer imagery that feels Bhutanese + globally-minded
- Only publish verified statistics, testimonials (with consent), services, and destinations — mark unconfirmed content clearly internally until approved (cross-reference `prd.md` Section 9)
- Never phrase content in a way that implies guaranteed admission or visa approval

## 10. Next Step

Turn this into a full page-by-page UI spec (exact section order, spacing, image direction, mobile layout) before implementation in React/Vite.
