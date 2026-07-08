# Priced Service Packages — Revenue + Focus + Client Acquisition

**Date:** 2026-07-07 · **Status:** ✅ Shipped (build-verified) · **Trigger:** owner — focus on high-value matters, show charges, get more clients.

## What & why
Productised the owner's focus matters into fixed-fee packages entered via the ₹499 Case Assessment (the value ladder: ₹499 assessment → priced engagement). This serves three goals at once:
- **Revenue** — every matter now has a charge.
- **Focus** — only the high-intent, high-budget matters the owner named.
- **Client acquisition** — the `/pricing` page + schema target buyer-intent queries ("company incorporation cost", "trademark registration India", "cheque bounce charges", "mutual consent divorce cost") — the same transactional SEO that wins clients for IndiaFilings/Vakilsearch.

## Build
- `src/data/service-packages.ts` — 4 clusters, 14 packages (Corporate/Commercial: incorporation, LLP, cheque-bounce notice + case, commercial recovery, NCLT/IBC; Startup/IP: trademark, patent, co-founder agreement, contract drafting; Property: RERA, due diligence; Family: mutual-consent divorce, HNW alimony). One `priceFrom` per package drives both copy and schema. **Prices are indicative placeholders — edit `priceFrom` to set real charges.**
- `src/app/pricing/page.tsx` — cards by cluster (price, timeline, includes, "Book Assessment" CTA, deep-link to the matching guide), AEO answer block, OfferCatalog + priceSpecification schema, FAQ, related links, BCI-safe disclaimer.
- Wired into Navbar, Footer, sitemap.

## BCI Rule 36
Framed as platform/package pricing with "from" indicative engagement fees; advocate professional fees are set by the matched advocate and confirmed in writing at the assessment; government fees extra. Disclaimer states NyaySevak does not practise law or advertise individual advocates.

## Owner follow-ups
1. **Set real prices** — one file (`service-packages.ts`), one field (`priceFrom`).
2. **Per-matter landing pages** — for max client acquisition, give the top 4–5 matters their own "[matter] cost & process in India" page (each ranks for its transactional query). The guides already exist; pricing pages layer buyer intent on top.
3. **Off-page (Week 18)** — still the ceiling for ranking these pages.
