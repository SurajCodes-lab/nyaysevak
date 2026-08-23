# Change: Regional Expansion — Gujarat & Rajasthan

**Status:** ✅ Shipped · **Commit:** `4838cc8` · **Type:** content (local intent)

## What was wrong
Gujarat and Rajasthan were single-city stubs. Gujarat had Ahmedabad only; Rajasthan had Jaipur only — 5 practice pages and 1 matter page each. Two of India's largest state economies were represented by one city apiece, and the state's most important legal venue was missing outright: **Jodhpur is the principal seat of the Rajasthan High Court**, and it had no page at all while the Jaipur *bench* did.

## What we changed
Added 8 cities — **Surat, Vadodara, Rajkot, Gandhinagar** (Gujarat) and **Jodhpur, Udaipur, Kota, Ajmer** (Rajasthan) — each with a hub and all 5 core practice verticals. 40 hand-written `CityPracticeContent` entries, plus 5 more for Greater Noida, live in a new module `src/data/city-practice-expansion.ts` (280KB, 45 entries) rather than growing the already-310KB `city-practice-content.ts`. This mirrors how `city-matter-content.ts` was split in Week 18 — same shape, same content gating.

Because the internal-link mesh, sitemap, and JSON-LD are all derived from the data layer, adding the entries wired every page into the mesh and sitemap automatically. No template changes were required.

## Why it helps
- **Local intent is winnable at low authority.** "Criminal lawyer in Rajkot" is a far shorter climb than any national head term, and these are transactional queries.
- **The content is defensibly distinct, not templated.** Each city is written against the law that actually applies to it: Saurashtra's separate tenure statutes in Rajkot, Section 42 tribal-land restrictions in Udaipur's Scheduled Areas, GIFT City/IFSCA in Gandhinagar, the Board of Revenue in Ajmer, coaching-sector consumer law in Kota, Gujarat prohibition across all four Gujarat cities.
- **Correct jurisdiction is a differentiator.** Pages state where the High Court seat and NCLT bench diverge — Jodhpur files High Court work at Jodhpur but NCLT work at Jaipur. Competitor city pages routinely get this wrong.

## Verification & timeline
`next build` ✓ — 54 new URLs in the sitemap for these 9 cities. Expect impressions within **3–6 weeks** and position movement over **3–6 months**; these are cold regions with no existing authority, so impressions will precede clicks by a wide margin.

