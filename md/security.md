# Security Guidelines
## Ugyen Pee Education Consultancy & Placement Firm — Public Website

**Version:** 1.0
**Scope:** Defensive security practices for the public-facing website (Phase 1)

This document complements `prd.md` (Section 11, Security Requirements) and `design.md`. It's meant to be a practical checklist for whoever builds and hosts the site — not a compliance/legal document.

---

## 1. Threat Model for This Phase

Even though Phase 1 has no logins, no payments, and no document uploads, the site still has real attack surface:

- A public contact/enquiry form (input handling, spam, injection)
- A CMS/admin layer feeding destinations/universities/courses/events (Section 6 of `prd.md`) — even if the public site itself has no accounts, whoever manages that content has credentials worth protecting
- DNS, domain registration, and hosting/CDN accounts
- Third-party services: email delivery, maps, analytics, image hosting
- The brand itself — a well-known consultancy name is a natural target for phishing/impersonation aimed at prospective students

Treat "the website has no student accounts" as reducing risk, not eliminating it.

## 2. Transport & Infrastructure

- **HTTPS everywhere.** Force HTTPS via HSTS (`Strict-Transport-Security` header), redirect all HTTP → HTTPS at the server/CDN level.
- Use a reputable CDN/WAF (e.g., Cloudflare or similar) in front of the origin server — this is the single most effective mitigation for DDoS and much of the "third-party attack" surface below.
- Keep the actual origin server IP private where possible so attacks must go through the CDN/WAF.
- Renew and monitor TLS certificates (auto-renewal via Let's Encrypt/ACME is fine); alert before expiry.
- Set strong security headers:
  - `Content-Security-Policy` (restrict script/style/image sources to known domains)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY` or `frame-ancestors 'none'` (prevents clickjacking)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` to disable unused browser features (camera, mic, geolocation, etc.)

## 3. Protecting Against Malware & Supply-Chain / Third-Party Risk

"Third party" risk mostly comes in through dependencies and embedded content, not the website's own code:

- Pin and regularly audit npm/frontend dependencies (`npm audit`, Dependabot or similar) — an outdated library is the most common way malware ends up on a site.
- Only load third-party scripts (analytics, chat widgets, fonts, maps) from sources you trust, and use **Subresource Integrity (SRI)** hashes on any script/style tag loaded from a CDN.
- Avoid embedding third-party ad networks or unaudited widgets — these are a common malware/malvertising vector.
- Scan uploaded content (in later phases, when document upload is introduced) with antivirus/file-type validation before storage — not needed in Phase 1 since there's no upload feature yet, but plan for it now so it isn't bolted on later.
- Keep the CMS/admin panel (whatever powers destinations/universities/courses/events) and its plugins/extensions patched and updated on a schedule, not "when we remember."

## 4. Protecting Against Phishing / Brand Impersonation

Phishing targeting *your* users usually doesn't attack the website directly — it impersonates it. Defenses:

- Set up **SPF, DKIM, and DMARC** records for the domain so spoofed "official" emails claiming to be from Ugyen Pee are rejected or flagged by mail providers.
- Register close-lookalike domains (common typosquats of the official domain) if budget allows, or at minimum monitor for them.
- Keep a single, clearly published official domain, email pattern, and phone number on every page (footer + contact page) so students have one source of truth to check against.
- Never ask for sensitive info (passport numbers, payment details) via the public enquiry form in this phase — the current scope shouldn't need it; if a future phase adds it, do it through an authenticated, encrypted channel and say so explicitly on the form ("We will never ask for payment via email").
- Consider a short "How to recognize official communication from us" note in the FAQ — a common and effective anti-phishing measure for consultancies, since scam education agents are a known problem in this industry.

## 5. Protecting Against Man-in-the-Middle (MITM) Attacks

- HTTPS/TLS (Section 2) is the primary defense — without it, MITM is trivial on public Wi-Fi.
- Use HSTS with `includeSubDomains` and a `preload` directive once the domain is stable, so browsers refuse to connect over plain HTTP even on the first visit.
- Avoid mixed content (loading any script, image, or font over `http://` on an `https://` page) — this reopens MITM injection points even with HTTPS enabled.
- If the enquiry form or any future API calls use third-party services (e.g. a form-to-email service), confirm that service also enforces TLS end-to-end, not just on the site's own domain.

## 6. Protecting Against Denial-of-Service (DoS/DDoS)

- Put the site behind a CDN/WAF with built-in DDoS mitigation (Section 2) — this is the standard, effective answer for a site of this size and is far more practical than building custom rate-limiting from scratch.
- Rate-limit the contact/enquiry form endpoint specifically (e.g., N submissions per IP per minute) to stop both DoS attempts and spam floods through the same mechanism.
- Set sane request size limits (form field lengths, no large file uploads accepted in this phase) so a flood of oversized requests can't exhaust server resources.
- Enable caching aggressively for static/public content (destinations, universities, courses, news pages don't change per-visitor) so a traffic spike hits the CDN cache, not the origin server or database.
- Have a monitoring/alerting setup (uptime + traffic anomaly alerts) so an attack is noticed quickly rather than discovered from user complaints.

## 7. Protecting Against Ransomware

Ransomware risk on a site like this is almost entirely about **who can write to production**, not the public-facing pages:

- Restrict CMS/admin and server access to named individuals with unique accounts — no shared logins.
- Enforce strong passwords + **multi-factor authentication (MFA)** on every account that can modify site content, DNS, hosting, or the domain registrar.
- Take regular, automated backups (database + uploaded assets + configuration) and — critically — **store at least one backup copy offline or in a separate account/provider** that a compromised admin account cannot also delete.
- Test backup restoration periodically; a backup that has never been restored is not a verified backup.
- Keep the server OS, web server software, and CMS core up to date — most ransomware on websites arrives through a known, unpatched vulnerability.
- Limit what the web server process can write to — content/media directories only, not application code — so a compromised upload path can't overwrite core files.

## 8. Injection & Input Handling (Contact/Enquiry Form)

This is the main user-input surface in Phase 1:

- Validate and sanitize all form input server-side (never trust client-side validation alone).
- Use parameterized queries / an ORM for any database writes — never string-concatenate user input into SQL.
- Escape all user-submitted content before it's ever rendered back anywhere (e.g., in an admin panel showing enquiries) to prevent stored XSS.
- Add a spam/bot defense on the form (CAPTCHA, honeypot field, or similar) — this also reduces DoS-style load from automated submission floods.
- Send form notification emails using a transactional email service (not a raw `mail()` call) to avoid the server being used as an open relay for spam.

## 9. Logging & Monitoring

- Log administrative actions (content published/edited, logins to the CMS/admin) — required by BR-level logging already noted in `prd.md` Section 11.
- Monitor for unusual traffic patterns, repeated failed admin logins, or sudden spikes in form submissions.
- Set up alerting for TLS certificate expiry, uptime failures, and failed backup jobs.
- Keep logs for a reasonable retention period and restrict who can read them (logs of enquiry submissions may contain personal data — see `prd.md` Section 32/33 privacy notes).

## 10. Operational Checklist (Quick Reference)

| Area | Action |
|---|---|
| Transport | HTTPS + HSTS everywhere, no mixed content |
| Infrastructure | CDN/WAF in front of origin, hide origin IP |
| Dependencies | Automated vulnerability scanning, SRI on third-party scripts |
| Email/domain | SPF, DKIM, DMARC configured; monitor for lookalike domains |
| Access control | Unique accounts + MFA for all admin/CMS/hosting/DNS access |
| Backups | Automated, offsite/offline copy, tested restores |
| Form security | Server-side validation, parameterized queries, CAPTCHA/honeypot, rate limiting |
| Monitoring | Uptime alerts, admin action logs, failed-login alerts, cert-expiry alerts |
| Updates | Patch CMS core, plugins, server OS on a schedule |

## 11. What's Deliberately Deferred

Some protections become relevant only in later phases and shouldn't be over-built now:

- Session/token security, password hashing policy, and account lockout — relevant once student login (Phase 2) exists
- File-upload malware scanning — relevant once document upload (Phase 2) exists
- Payment security / PCI concerns — relevant only if online payments are ever added (currently explicit non-goal)

Revisit this document when those phases are scoped, rather than designing controls for features that don't exist yet.
