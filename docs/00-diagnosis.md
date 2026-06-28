# Week 15 Diagnosis — Why 4–5 users/day

**Date:** 2026-06-26
**Method:** Static audit of the codebase + live HTTP/HTML inspection + SERP checks.
**Ground-truth from owner (Google Search Console):** pages **indexed but ~0 impressions**; **zero off-page work** done to date.

---

## 1. What is already excellent (so it is NOT the problem)

The site is technically far ahead of a typical 15-week-old project:

- **Schema:** Organization + LegalService, WebSite, SiteNavigationElement,
  ProfessionalService with priced OfferCatalog + AggregateOffer. Self-authored
  review schema was correctly removed (it is a low-trust signal for a new domain).
- **robots.ts:** explicit allow-list for every major AI crawler (GPTBot,
  ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, etc.).
- **sitemap.ts:** tiered priorities, stable `lastModified` (no crawl-budget waste).
- **GEO surface:** `/llms.txt` and `/llms-full.txt` shipped.
- **IndexNow:** auto-pings Bing/Yandex on production build (feeds ChatGPT Search).
- **Content depth:** 25 long-form insight articles with hand-authored "Quick
  Answer" blocks for AEO; 58 glossary terms; genuinely useful informational pages.
- **Rendering:** pages are SSG/SSR — full content is in the HTML (verified live).

**Conclusion:** more on-page schema will NOT move the needle. The bottleneck is
structural + off-page.

---

## 2. Root causes (ranked by leverage)

### 🔴 Cause 1 — Self-contradicting domain canonicalization *(FIXED, see 01)*
Live HTTP inspection found:

```
https://nyaysevak.com      → 307 Temporary Redirect → https://www.nyaysevak.com   (Vercel primary = WWW)
https://www.nyaysevak.com  → 200 OK
   …but its  <link rel="canonical">  =  https://nyaysevak.com   ← the NON-www host that redirects away
```

Every page declared a canonical pointing at a host that **immediately 307s
elsewhere**. The sitemap, robots `host`, all schema `@id`s and OpenGraph URLs were
**also** non-www, while the only page Google actually surfaced
(`/lawyers/ahmedabad/family-matrimonial`) was indexed on **www**.

Why this flattens impressions to ~0:
- A canonical that points to a redirecting URL is a **contradictory signal**.
  Google cannot trust either host, so it suppresses both.
- A **307 (temporary)** tells Google *"do not consolidate — keep both hosts."*
  Domain canonicalization must be **301/308 permanent**.
- The tiny authority the domain has is **split across two hosts**.

This is the classic signature of "indexed but zero impressions" on a small site.

### 🔴 Cause 2 — Brand entity collision with `nyayasevak.com`
A SERP check for the brand returns almost entirely the **competitor**
`nyayasevak.com` (note the extra "a") — an established, operating legal-services
company with active Instagram/Facebook/YouTube/LinkedIn, a named founder, and
"500th Trademark Certificate" PR. Our domain is `nyaysevak.com` (no second "a").

The names are near-identical, so Google **conflates the two entities** and routes
brand authority to the older, more-linked competitor. Even branded searches do
not reliably reach us.

### 🔴 Cause 3 — Zero off-page authority
Owner confirmed: **no backlinks, no Google Business Profile, no citations/
directories.** Indian "lawyer/advocate" queries are among the most competitive
**and** YMYL (Your-Money-or-Your-Life) niches on the web. Competitors (LawRato,
Vakilsearch, LegalKart) have thousands of referring domains and years of trust.
With ~0 referring domains, even our *winnable* informational pages cannot crack
page 1 yet. **This is the real long-term ceiling.** No on-page change removes it.

### ✅ Cause 4 — RETRACTED: there is no thin/404 city-page problem
**This "cause" was a measurement error and does not exist.** Two successive `grep`
miscounts inflated the city count (counting each city's nested `highCourt.slug` and
`districtCourtsSlug` as separate cities). The verified reality:

- **11 cities** (Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata,
  Ahmedabad, Jaipur, Noida, Gurgaon) — confirmed by counting top-level `name:` fields.
- **5 city-practice verticals** → **11 × 5 = 55 combos**, and **all 55 have rich,
  hand-written, genuinely differentiated content** (verified). **Zero 404s, zero thin
  pages.** The city×practice section is actually a *strength*, not a liability.
- Total real pages on the site: **326**.

So the only real causes are **1 (canonical — fixed)**, **2 (brand twin)**, and
**3 (zero off-page authority)**. Implementation 04 (sitemap filter) was kept as
defensive future-proofing but corrected nothing live. See `docs/CORRECTIONS.md`.

---

## 3. Strategy that follows from the diagnosis

Because the site has **zero authority** and competes in a **YMYL** niche, the
*only* organic path that produces results in **weeks rather than years** is:

1. **Fix the structural signal leaks** (canonical/host) so the authority we *do*
   earn is not split or distrusted. — *Implementation 01.*
2. **Disambiguate the brand** so we stop donating authority to the competitor. —
   *Implementation 02.*
3. **Start off-page authority** — the actual ceiling. On-site we can only build
   link-*earning* assets; the outreach itself is the owner's to execute. —
   *Implementation 03 (playbook).*
4. **Stop diluting quality** with 884 unwinnable commercial pages; concentrate
   crawl equity on winnable informational long-tail (which also feeds AEO/GEO). —
   *Implementation 04.*

The honest expectation: structural fixes (01, 02) can lift impressions within
**2–6 weeks**; meaningful click growth requires off-page authority (03) and is a
**3–6 month** effort. There is no on-page-only shortcut for a no-authority YMYL
domain.
