# Product Requirements Document (PRD)
## Ugyen Pee Education Consultancy & Placement Firm — Public Website

**Location:** Thimphu, Bhutan
**Platform:** Responsive Web Application (public-facing only)
**Version:** 1.0
**Status:** Draft for Client Validation
**Date:** September 2026

---

## 1. Overview

Ugyen Pee Education Consultancy & Placement Firm is an education consultancy based in Thimphu, Bhutan, supporting students exploring local and international study opportunities. This phase of the project covers **only the public-facing marketing/informational website** — no student login, applications, document uploads, or admin dashboard. Those are deferred to a future phase (see Section 8).

The site should introduce Ugyen Pee, explain its consultancy services, showcase study destinations, and give prospective students and parents a clear way to get in touch — without requiring account creation.

## 2. Goals

The website should let a visitor answer these questions within minutes:

- Who is Ugyen Pee?
- What does Ugyen Pee do?
- Where can I study?
- What services do they provide?
- Which universities/courses can I explore?
- Why should I choose Ugyen Pee?
- How can I contact them?

**Target feel:** Trustworthy + Professional + Bhutanese + Educational + Modern.

## 3. Non-Goals (Out of Scope for This Phase)

- Student registration / login / accounts
- Application submission or tracking
- Document upload
- Admin or staff dashboards
- Online payments
- Any implication that admission or visa approval is guaranteed

## 4. Target Users

| User | Needs |
|---|---|
| Prospective student | Research destinations, courses, universities; contact the firm |
| Parent | Verify legitimacy and services; find contact info |
| Returning visitor | Check events, news, FAQs |

No authenticated roles exist in this phase — everyone is a public visitor.

## 5. Site Structure / Sitemap

```
HOME
├── ABOUT US
│   ├── Our Story
│   ├── Mission & Vision
│   ├── Our Team
│   └── Why Choose Us
├── SERVICES
│   ├── Education Counselling
│   ├── University Selection
│   ├── Course Selection
│   ├── Application Assistance
│   ├── Visa Guidance
│   └── Pre-Departure
├── STUDY DESTINATIONS
│   ├── Australia
│   ├── UK
│   ├── Canada
│   ├── USA
│   ├── New Zealand
│   ├── Ireland
│   ├── Singapore
│   ├── France
│   ├── Germany
│   └── Switzerland
├── UNIVERSITIES
├── COURSES
├── NEWS & EVENTS
├── SUCCESS STORIES
├── FAQ
└── CONTACT
```

## 6. Page-by-Page Requirements

### 6.1 Home
- Hero section with headline, supporting text, two CTAs (Explore Study Destinations, Talk to a Counsellor)
- "Guidance You Can Trust" stats strip (years of experience, destinations, students assisted, partners — **figures TBC**, see Section 9)
- Study destination cards (linking to country pages)
- "Why Choose Ugyen Pee" — 4–5 value-proposition cards
- "How It Works" 5-step timeline: Discover → Counselling → Choose → Apply → Begin Your Journey
- Success stories preview
- Contact CTA

### 6.2 About Us
- Company overview, history, mission, vision, leadership, why-choose-us, partnerships
- All content pending official confirmation from Ugyen Pee (Section 9)

### 6.3 Services
Service catalog (subject to confirmation):
- Education Counselling
- University Selection
- Course Selection
- Application Assistance
- Visa Guidance
- Scholarship Guidance
- English-language Test Guidance
- Pre-Departure Support

Only services actually provided should be published.

### 6.4 Study Destinations
- Grid of destination cards → individual country detail pages
- Country detail page sections: Why this country, popular study areas, universities, courses, entry requirements, English requirements, intakes, scholarships, cost info, application guidance, FAQ, CTA

### 6.5 Universities
- Searchable/filterable public directory (filters: country, city, study level, course, institution type, intake)
- University card: logo, name, country, popular programs, "View University" link
- University detail page: profile, courses, intakes, requirements, tuition, scholarships, contact, partner status

### 6.6 Courses
- Course finder: search by course, country, study level, institution, intake
- Course detail page: name, university, country, duration, intake, entry/English requirements, overview, enquire CTA

### 6.7 News & Events
- News: education updates, university announcements, scholarship info, deadlines
- Events: education fairs, university visits, counselling sessions, info sessions
- Event fields: title, description, date, time, location, registration, image, status

### 6.8 Success Stories
- Student name, destination, university, course, year, testimonial text, photo (with consent)

### 6.9 FAQ
- Accordion UI; categories: General, Admission, Courses, Countries, Documents, Visa, Scholarships

### 6.10 Contact
- Enquiry form: Name, Phone, Email, Interested Country, Message → Send Enquiry
- Office info: address, phone, email, business hours, map, social links

### 6.11 Footer (global)
- Logo + tagline, quick links, study destinations list, contact info, copyright, Privacy Policy / Terms links

## 7. Functional Requirements Summary

| ID | Requirement |
|---|---|
| FR-01 | Visitors can browse company info, services, destinations, universities, courses without an account |
| FR-02 | Visitors can filter/search universities and courses |
| FR-03 | Visitors can submit a general enquiry via the contact form |
| FR-04 | Visitors can request a consultation via a CTA (routes to enquiry/contact form) |
| FR-05 | Admin-managed content (services, destinations, universities, courses, events, testimonials, FAQs) is data-driven, not hardcoded, to allow future CMS/admin integration |
| FR-06 | Only administrator-approved content is publicly published (see BR-007 below) |
| FR-07 | Testimonials/photos are published only with consent (see BR-008) |
| FR-08 | No page may state or imply guaranteed admission or visa approval (see BR-009, BR-010) |

## 8. Future Phases (Not This Build)

- **Phase 2 — Student Portal:** registration, login, profile, enquiry, appointments, applications, documents, tracking, notifications
- **Phase 3 — Admin Portal:** dashboard, students, applications, universities, courses, countries, documents, appointments, events, testimonials, FAQs, reports
- **Phase 4 — Advanced:** course recommendation engine, university comparison, scholarship finder, automated email, SMS/WhatsApp notifications, online payments, analytics, mobile app

## 9. Information Requiring Client Confirmation (TBC)

The following must be validated with Ugyen Pee before being presented as fact on the live site — public third-party listings (e.g. UniAgents) are the only current source and should not be treated as official:

- Official company name, registration info, establishment year
- Mission, vision, leadership/team bios
- Current office address, phone, email, official website, social accounts
- Currently served countries and university partnerships
- Current course offerings and consultancy services
- Student/success statistics
- Fees or service charges
- Application workflow and document requirements
- Privacy policy text

## 10. Business Rules

- **BR-001:** No account required to browse public content (this phase has no accounts at all)
- **BR-007:** Country/university/course info is published only after administrative approval
- **BR-008:** Testimonials/photos require consent before publication
- **BR-009:** The site must not represent visa approval as guaranteed
- **BR-010:** University admission decisions remain with the respective institution — never implied otherwise

## 11. Non-Functional Requirements

- **Performance:** Fast page loads under normal network conditions
- **Responsiveness:** Desktop, laptop, tablet, mobile
- **Accessibility:** Readable fonts, adequate contrast, keyboard navigation, clear labels, meaningful error messages
- **Security:** HTTPS in production, input validation on the contact/enquiry form, no PII exposure
- **Scalability:** Content structures (destinations, universities, courses) should be data-driven to support a future CMS/admin layer without rearchitecting

## 12. Success Criteria

- Visitors can find company info, services, and destinations within a few clicks
- Visitors can search/browse universities and courses
- Visitors can submit an enquiry successfully
- Site renders correctly on desktop and mobile
- No unconfirmed data is presented as official fact

## 13. Next Steps

1. Confirm TBC items with Ugyen Pee (Section 9)
2. Finalize page-by-page UI spec (see `design.md`)
3. Build in React/Vite per the agreed design system
