# Change: NAP Consolidation + Google Business Profile Wiring

**Status:** ⚠️ Shipped, one input outstanding · **Commit:** `4838cc8` · **Type:** entity / off-page support

## What was wrong
Two problems, one root cause — no single source of truth for the business identity.

1. **NAP was duplicated.** The phone number, email, price range, opening hours and `sameAs` list were written out separately in `layout.tsx` (twice — Organization and LegalService) and again in `lawyers/[city]/page.tsx`. Local search treats NAP consistency as a trust signal, and duplicated literals drift: one gets updated, the other does not, and the site then emits two different phone numbers for the same entity.
2. **The Google Business Profile was not referenced anywhere on the site.** A grep of `src/` found no maps URL, no place ID, no GBP link. Both `sameAs` arrays listed only `facebook.com/nyaysevak` and `instagram.com/nyaysevak` — while the one profile Google has itself verified was absent. This matters more than usual here, because the brand competes on the SERP with `nyayasevak.com`, and binding the site to a verified GBP is the strongest available signal for separating two same-name entities.

## What we changed
Added `src/lib/business.ts` as the single source of truth for name, telephone (both E.164 and display forms), email, address, price range, opening hours, `GOOGLE_BUSINESS_PROFILE_URL`, and owned social profiles. Both `layout.tsx` blocks and the city hub now source from it.

`sameAs()` lists the GBP **first** (highest-trust corroborating reference) and **filters empty values**, so an unset URL emits nothing rather than a dead link — a `sameAs` pointing at a dead or non-canonical URL is a negative trust signal, as the site's own Week 15 comment notes.

## What is still outstanding
`GOOGLE_BUSINESS_PROFILE_URL` is deliberately empty. Two links were supplied this cycle and neither is usable:
- A `google.com/search?…&stick=…` URL — a search-session address. Not stable, not canonical, not crawler-resolvable.
- A `share.google/…` link — redirects to `google.com/share.google?q=…`, which serves an "enable JavaScript" stub to every non-browser client. The 92KB response contains no CID, no place ID and no maps URL.

**Needed:** a `maps.app.goo.gl/…`, `g.page/…`, or `google.com/maps?cid=…` link, obtainable from the Maps address bar with the listing open. Setting it is a one-line change.

## Verification & timeline
`next build` ✓ — verified in the rendered HTML that `sameAs` emits the two socials with **no empty string**, confirming the filter works. Entity consolidation takes effect once the GBP link is set and re-crawled, typically **2–4 weeks**.

