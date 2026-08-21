# NyaySevak — SEO & Growth Report · Week 24

**From five metros to a real regional footprint — and one structured-data claim that had to go.**
NCR completion · Gujarat · Rajasthan · Hyderabad brought to parity · Service-area schema correction · The GBP suspension.

**Date:** 2026-08-21 · **Prepared by:** SEO Architecture Team · **Confidential.**

**This cycle in one line:** Week 23 tuned what already ranked (the GSC-driven, fee-intent description rewrite). Week 24 **expands the local footprint by 70%** — nine new cities across NCR, Gujarat and Rajasthan, with Hyderabad taken from one deep page to full parity with Delhi — and corrects a structured-data claim that would have actively undermined the Google Business Profile the last six cycles have been trying to stand up.

---

## PART I — Strategic Context

### 1.1 The three forces that shaped this cycle

1. **Hyderabad is working (owner, from Search Console).** It is the strongest-performing city in the console — and it was carrying **one** matter page against Delhi's six. The city with proven demand was the city with the thinnest deep-page coverage. Depth where traction already exists compounds faster than breadth into cold regions.
2. **The expansion brief (owner):** NCR, Gujarat, and Rajasthan. On audit, NCR turned out to be the *best*-covered region already (Week 18–19 work), with one hole; Gujarat and Rajasthan were single-city stubs — Ahmedabad and Jaipur, one matter page each.
3. **The GBP has never been connected to the site.** Six cycles of reports have named the Google Business Profile as the highest-leverage off-page lever. A grep of `src/` found no maps URL, no place ID, no GBP link anywhere. Meanwhile every city hub was emitting a `LocalBusiness` block claiming a physical address in that city.

### 1.2 Why Hyderabad depth came before Gujarat breadth

A new city hub in Surat starts from zero authority and zero topical history. A new matter page in Hyderabad inherits the topical authority the existing Hyderabad cluster has already accumulated, and targets transactional, high-buyer-intent queries ("anticipatory bail lawyer in Hyderabad", "cheque bounce lawyer Hyderabad") rather than informational ones. Same authoring effort; materially faster payback. **Hyderabad shipped first.**

### 1.3 The one-line thesis

**Deepen where the console already shows traction, expand where the legal geography gives us something genuinely distinct to say, and stop asserting in schema what BCI norms stop us saying on the page.**

---

## PART II — What Shipped This Cycle (code, build-verified)

| Change | Detail |
|--------|--------|
| **9 new cities** | Greater Noida (NCR) · Surat, Vadodara, Rajkot, Gandhinagar (Gujarat) · Jodhpur, Udaipur, Kota, Ajmer (Rajasthan) |
| **45 new city × practice pages** | 5 core verticals × 9 cities, hand-written against each city's actual legal specifics |
| **Hyderabad → full parity with Delhi** | 5 new matter pages: anticipatory bail, cheque bounce, RERA, company registration, NCLT/IBC. **12 pages, matching Delhi exactly.** |
| **Ghaziabad → full parity** | 4 new matter pages: anticipatory bail, mutual consent divorce, company registration, NCLT/IBC |
| **New module `city-practice-expansion.ts`** | 280KB / 45 entries, kept out of the already-310KB `city-practice-content.ts`, mirroring the `city-matter-content.ts` pattern |
| **New module `lib/business.ts`** | Single source of truth for NAP, opening hours, GBP URL, and `sameAs()` — previously duplicated across `layout.tsx` and the city hub where it could drift |
| **Service-area schema correction** | 22 city hubs no longer claim a per-city `PostalAddress` + `GeoCoordinates` (Part VI) |
| **`districtCourtsSlug` fixed and wired** | Dead data with wrong-format values, now corrected, backfilled, and feeding the internal-link mesh (Part V) |

> **Build verified:** `next build` passes. 459 static pages generated, **410 URLs in the sitemap** (up from 347). Typecheck and ESLint clean.
> **Not deployed.** Committed to a branch this cycle; `git push` is an owner decision (Appendix B).

### 2.1 Page count

| | Before | After | Net new |
|---|---|---|---|
| City hubs | 13 | **22** | +9 |
| City × practice | 65 | **110** | +45 |
| City × matter | 30 | **39** | +9 |
| **Total city pages** | **108** | **171** | **+63** |

---

## PART III — The City Portfolio

Every one of the 22 cities now has **complete 5/5 core practice coverage**. Matter-page depth is where the gap now sits.

| City | Region | Core | Matter | Pages |
|------|--------|------|--------|-------|
| Delhi | NCR | 5/5 | 6/6 | 12 |
| Noida | NCR | 5/5 | 6/6 | 12 |
| Gurgaon | NCR | 5/5 | 6/6 | 12 |
| Faridabad | NCR | 5/5 | 6/6 | 12 |
| **Ghaziabad** | NCR | 5/5 | **6/6** ⬆ | **12** |
| **Greater Noida** | NCR | **5/5** 🆕 | 0/6 | **6** |
| **Hyderabad** | South | 5/5 | **6/6** ⬆ | **12** |
| Ahmedabad | Gujarat | 5/5 | 1/6 | 7 |
| **Surat** | Gujarat | **5/5** 🆕 | 0/6 | **6** |
| **Vadodara** | Gujarat | **5/5** 🆕 | 0/6 | **6** |
| **Rajkot** | Gujarat | **5/5** 🆕 | 0/6 | **6** |
| **Gandhinagar** | Gujarat | **5/5** 🆕 | 0/6 | **6** |
| Jaipur | Rajasthan | 5/5 | 1/6 | 7 |
| **Jodhpur** | Rajasthan | **5/5** 🆕 | 0/6 | **6** |
| **Udaipur** | Rajasthan | **5/5** 🆕 | 0/6 | **6** |
| **Kota** | Rajasthan | **5/5** 🆕 | 0/6 | **6** |
| **Ajmer** | Rajasthan | **5/5** 🆕 | 0/6 | **6** |
| Mumbai · Bangalore · Chennai · Pune · Kolkata | Metro | 5/5 | 0–1/6 | 6–7 |

---

## PART IV — Why These Are Not Doorway Pages

Google penalises templated local pages. The defence is that each city has **genuinely different law applying to it**, and the content says so explicitly. This is the substantive work of the cycle, and it is what a competitor spinning up city pages cannot cheaply copy.

| City | The distinguishing legal fact |
|------|------------------------------|
| **Jodhpur** | **Principal seat** of the Rajasthan High Court — Jaipur is only a bench. Writs from the western districts are filed here, and the pages say which districts and why. |
| **Kota** & **Ajmer** | Fall under the **Jaipur Bench**, not the Jodhpur principal seat. Stated explicitly, because filing at the wrong seat costs months. |
| **Ajmer** | Seat of the **Board of Revenue** — Rajasthan's apex revenue court, hearing second appeals from every district in the state. Also RPSC and the state education board → service, recruitment and examination litigation. |
| **Udaipur** | Much of the division is a **Fifth Schedule Scheduled Area**. Section 42 of the Rajasthan Tenancy Act restricts transfer of tribal land; a completed sale can be undone by restoration proceedings years later. |
| **Kota** | India's coaching capital — **coaching fee-refund consumer claims**, hostel/PG tenancy, institutional liability, and guardianship for minors whose parents live elsewhere. No other Indian city generates this. |
| **Surat** & **Rajkot** | **Gujarat is a prohibition state** (2017 amendments: non-bailable, up to 10 years). Rajkot adds **Saurashtra's separate tenure laws** (Gharkhed / Barkhali), which do not apply in mainland Gujarat. |
| **Vadodara** | Organised-sector industrial base → **Factories Act and pollution-control prosecutions** naming occupiers and managers personally; standing orders and contract labour as day-to-day work. |
| **Gandhinagar** | State capital + **GIFT City**, India's only operational IFSC, regulated by the **IFSCA** — a category of corporate work that exists nowhere else in India. Plus PC Act prosecutions against public servants. |
| **Greater Noida** | Differentiated from Noida by the **allotting authority (GNIDA/YEIDA)**, not the courthouse — both are heard at Gautam Buddh Nagar, Surajpur. Pages say so rather than implying a separate court. |

**Jurisdictional accuracy that most competitors get wrong:** NCLT bench and High Court seat do not follow the same map. Jodhpur's High Court work is at Jodhpur but its **NCLT work is at Jaipur**. Ghaziabad and Greater Noida trade inside the NCR but file at the **NCLT Allahabad Bench**, not New Delhi. Every affected page states this.

---

## PART V — Bugs Found & Fixed

### 5.1 `districtCourtsSlug` was dead data (crawl-equity leak)

The `City` type carried a `districtCourtsSlug` field. Two problems: its stored values were in the **wrong format** (`gujarat-district-courts`, where `courts.ts` generates `district-courts-gujarat`), and it was **never read anywhere in the codebase**.

Fixed the format, backfilled the five cities missing it entirely (Jaipur, Noida, Ghaziabad, Faridabad, Gurgaon), and wired it into `relatedGroupsForCity` — gated on the slug resolving to a real page so it can never 404.

**Why it matters:** district-court pages are the thinnest programmatic pages on the site and had **no inlink at all** besides the sitemap. That is precisely the profile that parks pages in *"Discovered — currently not indexed."* All 22 city hubs now link to their state's district-courts page.

### 5.2 Ahmedabad was cannibalising Gandhinagar

Ahmedabad listed "Gandhinagar" as one of its own neighbourhoods and "Gandhinagar District & Sessions Court" among its courts. With Gandhinagar now a hub in its own right, both were removed (replaced with Shahibaug and Commercial Court, Ahmedabad).

### 5.3 A factual error caught before shipping

The first draft of the Gandhinagar data listed a *Gujarat State Administrative Tribunal*. Gujarat abolished its SAT — state service matters go to the High Court by writ, and central employees to the CAT Ahmedabad Bench. Corrected before the content was written against it.

---

## PART VI — The Schema Correction (the important one)

### 6.1 What the site was claiming

Every city hub emitted a `LegalService` block containing:

```
"address": {"@type":"PostalAddress","addressLocality":"Jodhpur","addressRegion":"Rajasthan",...},
"geo": {"@type":"GeoCoordinates","latitude":26.2389,"longitude":73.0243}
```

Verified in the build output: **22 of 22 city hubs asserted a PostalAddress and precise GeoCoordinates.** The site was declaring 22 distinct physical business locations, while the Organization schema states a single New Delhi address.

### 6.2 Why it had to change

Two independent reasons, and they point the same way:

1. **It contradicted the BCI posture.** Per owner: *"we have team but as per BCI we aren't showcasing."* The site deliberately publishes no advocate names, no fees, and no local offices. **Structured data is a public claim exactly like visible copy** — it must not assert what the page itself declines to say.
2. **It worked against the GBP goal.** Google cross-checks on-site markup against the verified profile. Dropping a single verified New Delhi GBP into `sameAs` on 22 blocks each claiming a different location asserts that one verified business is simultaneously in Jodhpur, Surat, Kota and 19 other places. That **weakens** the entity association it was meant to build.

### 6.3 What it is now

A `Service` provided by the single `Organization` entity, with `areaServed` carrying the city and state, contact details as a `ServiceChannel` (a way to reach us, not a branch address), and a free-assessment `Offer`. `sameAs` lives on the entity in `layout.tsx` and is no longer repeated across 22 service descriptions — because `sameAs` describes an entity, not a service.

**No local relevance is lost.** `areaServed` already carried the city signal, and **local pack ranking comes from the GBP, never from on-page LocalBusiness markup.** What is lost is a claim we could not stand behind.

### 6.4 GBP wiring — built, blocked on one input

`lib/business.ts` now holds `GOOGLE_BUSINESS_PROFILE_URL` and a `sameAs()` helper that **filters empty values**, so an unset URL emits nothing rather than a broken link. Setting it is a one-line change.

The two links provided this cycle could not be resolved:
- A `google.com/search?…&stick=…` URL — a search-session address, not stable, not canonical, not crawler-resolvable.
- A `share.google/…` link — resolves to `google.com/share.google?q=…`, which serves an *"enable JavaScript"* stub to every non-browser client. The 92KB response contains no CID, no place ID, and no maps URL.

**Needed:** a `maps.app.goo.gl/…`, `g.page/…`, or `google.com/maps?cid=…` link — obtainable from the Maps address bar with the listing open.

---

## PART VII — The GBP Suspension (live, unresolved)

The profile was reported suspended during this cycle. **No change from this cycle could have caused it:** nothing was committed or pushed while it happened (`git log origin/main..HEAD` = 0), no GBP credentials were ever held, and the IndexNow `postbuild` hook was deliberately bypassed — and that script only submits to Bing, Yandex, Naver and Seznam, never Google.

**Diagnosis needs two inputs the owner holds:** the suspension email (soft suspension = listing still public, management access lost; hard = removed from Maps and Search — different recovery paths), and the profile's current name, address, and primary category.

**Most likely causes, ranked for this business model:**

1. **The address.** Google requires a service-area business to *hide* its address, and any displayed address to be a real location staffed during stated hours. A virtual office, co-working desk, registered-agent address, or visible home address is the single most common suspension trigger for legal SABs.
2. **Keywords in the business name.** Anything beyond plain "NyaySevak" is the second most common trigger.
3. **A recent edit.** Changes to name, address, category, or website URL trigger automated re-review — the moment a borderline listing flips.

**Context that matters:** legal services is one of Google's **high-scrutiny verticals**, alongside locksmiths and addiction treatment. Enforcement is more aggressive than in ordinary categories.

**For the appeal:** business registration (GST or incorporation certificate), a utility bill or lease for the address, and signage photos if a physical office exists. Filed via the Business Redressal Complaint Form.

---

## PART VIII — KPIs & The Loop

| KPI | Now | 6-week target | Source |
|-----|-----|---------------|--------|
| Indexed city pages | 108 → **171 submitted** | 140+ indexed | GSC Coverage |
| Hyderabad matter-page impressions | 0 (new) | rising | GSC Performance |
| Gujarat / Rajasthan impressions | ~0 | first impressions landing | GSC Performance |
| District-court pages indexed | low (no inlinks) | rising post-mesh fix | GSC Coverage |
| Fee-intent query CTR (Week 23 work) | 15/101 clicks, avg pos 9.6 | pos < 7 | GSC Performance |
| GBP status | **suspended** | reinstated + verified | GBP |
| Referring domains | ~0 | 15–25 | Ahrefs / GSC |

**The loop is unchanged:** re-pull GSC every two weeks; the city or matter with the worst rank-for-its-intent gets the next tranche.

---

## PART IX — Honest Limits

- **63 new pages will not rank quickly.** Gujarat and Rajasthan are cold regions with no existing authority. Expect impressions before clicks, and months before position. The Hyderabad and Ghaziabad matter pages should move faster because they inherit an existing cluster's authority.
- **Nine cities still have zero matter pages.** Greater Noida and all eight new Gujarat/Rajasthan cities carry core coverage only. Mumbai, Chennai, Pune and Kolkata remain at 0/6 despite being long-standing metros. This is the largest remaining content gap.
- **The GBP remains the binding constraint, and it is now worse than "missing" — it is suspended.** Every prior report named it the highest-leverage lever. On-page work cannot substitute for it.
- **Legal accuracy is a considered non-lawyer synthesis.** The jurisdictional facts (High Court seats, NCLT benches, Section 42 restrictions, Saurashtra tenure, prohibition provisions) are stated carefully and specifically, but should be spot-checked by a practising advocate in each state before being treated as authoritative.
- **Nothing is deployed.** The work is committed to a branch and builds clean; pushing is an owner decision.

---

## Appendix A — New URL Inventory (63)

**City hubs (9):** `/lawyers/greater-noida` · `/lawyers/surat` · `/lawyers/vadodara` · `/lawyers/rajkot` · `/lawyers/gandhinagar` · `/lawyers/jodhpur` · `/lawyers/udaipur` · `/lawyers/kota` · `/lawyers/ajmer`

**City × practice (45):** each of the nine cities × `criminal-law`, `civil-law`, `family-matrimonial`, `property-real-estate`, `corporate-business`

**Hyderabad matter pages (5):** `/lawyers/hyderabad/{anticipatory-bail, cheque-bounce-recovery, rera-complaint, company-registration, nclt-ibc}`

**Ghaziabad matter pages (4):** `/lawyers/ghaziabad/{anticipatory-bail, mutual-consent-divorce, company-registration, nclt-ibc}`

## Appendix B — Owner Action Checklist (Week 24)

1. **🥇 Resolve the GBP suspension.** Forward the suspension email and confirm the profile's name, address, and primary category. This outranks everything else in this report.
2. **🥇 Send the canonical GBP link** once reinstated — `maps.app.goo.gl/…`, `g.page/…`, or `?cid=…`. One-line change, already wired.
3. **Confirm opening hours** in `lib/business.ts` match the GBP exactly. Google cross-checks; a mismatch weakens the association.
4. **Verify the owned socials.** `facebook.com/nyaysevak` and `instagram.com/nyaysevak` are in `sameAs` but could not be verified (both block automated checks). A dead `sameAs` is a negative trust signal — per the site's own Week 15 comment.
5. **Review and push** the Week 24 branch. Then request indexing for the nine new hubs in GSC.
6. **Decide the next tranche:** matter pages for the nine cities at 0/6, or backfill Mumbai/Chennai/Pune/Kolkata.
7. **Spot-check the state-law claims** in Part IV with a practising advocate in Gujarat and Rajasthan.

---

## Appendix C — Files Changed

| File | Change |
|------|--------|
| `src/data/cities.ts` | +9 cities; `districtCourtsSlug` format fixed and backfilled; Ahmedabad de-duplicated |
| `src/data/city-practice-expansion.ts` | **new** — 45 city × practice entries |
| `src/data/city-matter-content.ts` | +9 matter entries (Hyderabad 5, Ghaziabad 4) |
| `src/data/city-practice-content.ts` | spreads the expansion module into the registry |
| `src/data/internal-links.ts` | `districtCourtItem()` — city hub → state district-courts page |
| `src/lib/business.ts` | **new** — NAP, hours, GBP URL, `sameAs()` |
| `src/app/layout.tsx` | both `sameAs` arrays sourced from `lib/business` |
| `src/app/lawyers/[city]/page.tsx` | `LocalBusiness` → service-area `Service`; NAP from `lib/business` |

> Two files carry **pre-existing uncommitted changes not part of this cycle** and were deliberately left alone: `src/app/lawyers/[city]/[slug]/page.tsx` (Week 23 fee-intent descriptions) and `src/data/legal-glossary.ts` (`inPractice` / `workedExample` fields).
