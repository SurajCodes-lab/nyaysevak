# Change: LocalBusiness → Service-Area `Service` Schema

**Status:** ✅ Shipped · **Commit:** `4838cc8` · **Type:** structured data (entity integrity)

## What was wrong
Every city hub emitted a `LegalService` block containing a `PostalAddress` with that city as `addressLocality` **and precise `GeoCoordinates` for the city centre**. Verified in the build output: **22 of 22 hubs asserted a physical location.** The site was declaring 22 distinct business premises, while the Organization schema states a single New Delhi address.

Two independent problems, pointing the same way:

1. **It contradicted the BCI posture.** Per the owner: *"we have team but as per BCI we aren't showcasing."* The site deliberately publishes no advocate names, no fees, and no local offices. Structured data is a public claim exactly like visible copy — it must not assert what the page itself declines to say.
2. **It worked against the GBP goal.** Google cross-checks on-site markup against the verified profile. Dropping a single verified New Delhi GBP into `sameAs` on 22 blocks each claiming a different location asserts that one verified business is simultaneously in Jodhpur, Surat, Kota and 19 other places. That weakens the entity association the last six cycles have been trying to build.

## What we changed
Replaced the per-city `LegalService` with a `Service` provided by the single `Organization` entity:
- `provider` → `@id` of the one real Organization
- `areaServed` → City + State (unchanged; this already carried the local signal)
- contact details → a `ServiceChannel` (a way to reach us), not a branch address
- `offers` → the free case assessment at price 0
- `address`, `geo`, `openingHoursSpecification`, and `sameAs` removed from the per-city block

`sameAs` now lives only on the entity in `layout.tsx`, because `sameAs` describes an entity, not a service.

## Why it helps
- **No local relevance is lost.** `areaServed` already carried the city signal, and local pack ranking comes from the Google Business Profile — never from on-page `LocalBusiness` markup. What was lost is a claim we could not stand behind.
- Removes a direct conflict with the verified GBP before that link is wired in.
- Brings the structured data into line with the compliance posture the visible content already follows.

## Verification & timeline
`next build` ✓ — **0 of 22** city hubs now assert a `PostalAddress`; grep-verified against the built HTML. Structured-data changes are typically re-crawled within **1–3 weeks**.

