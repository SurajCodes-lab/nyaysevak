# NyaySevak — SEO & Growth Report · Week 18

**From "any lawyer, free advice" to "the specialist for high-value matters."**
Strategic focus · BCI-safe free assessment · Competitor gap analysis · Per-matter SEO plan · The off-page authority push.

**Date:** 2026-07-07 · **Prepared by:** SEO Architecture Team · **Confidential.**

**This cycle in one line:** Week 17 fixed *how the site converts* (titles, mesh, GSC-driven diagnosis). Week 18 fixes *what the site is for* — it stops trying to be a broad, free-advice, everyone's-lawyer platform (a fight it cannot win against LawRato/Vakilsearch) and re-points at a **defined set of high-value matters** where clients have real money and intent, delivered through a **BCI-compliant free Case Assessment**.

---

## PART I — Strategic Context

### 1.1 The three forces that shaped this cycle
1. **The conversion problem (owner):** every lead was taking the *free consultation* and vanishing — classic free-advice-seekers. → We removed the "free consultation" hook.
2. **The BCI constraint (owner):** displaying legal *pricing* risks Bar Council Rule 36 exposure for a platform brushing against advocate advertising. → We removed all visible pricing and reverted to a **free** assessment (no fee shown), keeping the compliant "we match you" model.
3. **The competitive reality (analysis):** NyaySevak cannot out-scale 15-year-old, thousands-of-advocate directories. → We must **win a niche**, not the market.

### 1.2 The resolution — a focused, compliant model
- **Offer:** a **free Case Assessment** — framed as *"we assess your matter and match you with the right verified advocate + give you a next-step plan,"* NOT "free legal advice." The word *assessment* (a diagnosis) + a **buying-intent qualifier** on the form now filter freebie-seekers **without** needing a price barrier.
- **Focus:** a defined portfolio of **high-value matters** (Part II) where the buyer is a business, a founder, a property buyer, or an affluent individual — people who convert, not tyre-kickers.
- **Compliance:** platform matching + free assessment; no advocate fees advertised; no advocate profiles ranked. (Confirm final posture with a practising advocate.)

### 1.3 The one-line thesis
**Stop competing on scale and "free." Compete on depth in a handful of high-value matters, get found for the transactional and informational searches those buyers make, and earn the off-page authority that lifts those pages into the click zone.**

---

## PART II — The Focus: 13 High-Value Matters

Grouped into four clusters. Each is chosen because the client has **budget + intent to hire** — the opposite of the free-advice seeker the old model attracted.

### Cluster A — Corporate & Commercial Recovery
| Matter | Why it's high-value |
|--------|---------------------|
| **NCLT matters (IBC / company petitions)** | Businesses/creditors with lakhs–crores at stake; high fee ceilings; low competition on "NCLT lawyer" long-tail. |
| **Cheque Bounce (S.138 NI Act)** | Huge volume, clear procedure, recoverable money → clients pay to recover; strong existing content. |
| **Commercial Suit / Money Recovery** | B2B recovery under the Commercial Courts Act; serious sums; repeat business. |

### Cluster B — Property & RERA
| Matter | Why it's high-value |
|--------|---------------------|
| **RERA disputes** | Home-buyers fighting builders for lakhs; urgent, emotional, willing to pay; strong existing guide. |
| **Property due diligence** | Buyers protecting the largest cheque of their life; pre-purchase = high intent; strong existing guide. |

### Cluster C — Startup, IP & Contracts
| Matter | Why it's high-value |
|--------|---------------------|
| **Trademark / Patent registration** | Founders protecting brand/IP; recurring; well-defined process. |
| **Co-founders' Agreement** | Every funded startup needs one; high willingness to pay for "done right." |
| **Company Incorporation (LLP / Pvt Ltd)** | The startup entry point; volume + upsell to compliance; strong existing guides. |
| **Contract drafting** | Recurring B2B need; fast turnaround; predictable. |

### Cluster D — Family (Premium)
| Matter | Why it's high-value |
|--------|---------------------|
| **Mutual Consent Divorce** | High search volume; clear procedure; clients pay for a clean, fast process; strong existing guide. |
| **High-Net-Worth Alimony Settlements** | Asset-protective settlements for affluent clients; premium fees; low competition. |

**Everything else** (petty criminal, generic "lawyer near me", broad consumer) is **de-prioritised** — it attracted the low-intent traffic we are moving away from. The city×practice and practice-area pages stay live (they earn impressions), but content, internal-linking, and off-page effort now concentrate on the 13 matters above.

---

## PART III — What Shipped This Cycle (code, build-verified)

| Change | Detail |
|--------|--------|
| **Removed "free consultation" hook** | ~40 files repositioned to a **Case Assessment** (diagnosis + matching, not free advice). |
| **Removed all visible pricing (BCI)** | Deleted the `/pricing` page + priced packages; reverted the assessment to **free** (schema price 0); dropped nominal-fee wording. |
| **Buying-intent qualifier on the lead form** | New field — *"Where are you in the process?"* → ready-to-hire / need-next-steps / exploring — the freebie-seeker filter that replaces the price. |
| **CTA alignment** | "Get Consultation / Free Consultation" → **"Get Free Assessment" / "Book Your Assessment"** site-wide. |
| **Title/CTR fix (Week 17, same deploy)** | Killed the double-brand, 60-char-overflow titles that were crushing click-through. |
| **Court-page internal-link mesh (Week 17)** | Mesh now on 12 templates — every leaf page reachable. |

> Build passes (325 pages after the pricing page was removed). ⚠️ Legacy Week-9 *service* price ranges (document/corporate) still sit in schema-only (not visible) — recommend stripping for a fully BCI-clean schema.

---

## PART IV — Competitor Gap Analysis

### 4.1 The field
| Platform | Scale / age | Model | Speed & price |
|----------|-------------|-------|---------------|
| **Vakilsearch** | 5,000+ advocates, since **2010**, funded, productized filings | Directory + instant paid consult + registrations | ₹399/30 min, instant |
| **LawRato** | **10,000+ advocates, 700+ cities**, huge lawyer-answered Q&A | Directory + session consult | ₹499–2,999/session |
| **LegalKart** | ~2,500 advocates, app, subscription | Instant call + 30-day same-advocate follow-up | ₹299/call, ₹4,999/yr |
| **NyaySevak** | **~15 weeks, ~0 backlinks, no directory** | "We match you" → free assessment | Free, within 24 hrs |

### 4.2 Where we lack (ranked by impact)
1. **Authority & age — decisive.** They have 15 years + thousands of referring domains; we have ~0. This is *why* we sit at avg position 20 and they rank 1–3. **Only off-page fixes it.**
2. **No instant consultation.** They connect in minutes; we promise a callback "within 24 hrs." Distressed buyers pick instant.
3. **No visible trust volume.** They show thousands of reviews; we show none.
4. **No advocate directory.** LawRato's 10,000 profiles *are* its SEO moat — a page per lawyer. Our BCI stance forbids this; it removes our biggest potential page asset (a deliberate trade-off).
5. **Thin content library.** 25 guides + 58 glossary vs their thousands of Q&As/articles.
6. **Weak follow-up.** They keep the same advocate 30 days; we have one callback.
7. **Unknown brand + the `nyayasevak.com` name-twin.**

### 4.3 Where we can win (don't fight head-on)
- **Niche depth** on the 13 focus matters beats a generalist for a founder choosing an NCLT or IP lawyer.
- **Technical SEO / AEO / GEO** already ahead of many — faster AI-citation than authority alone predicts.
- **Winnable informational long-tail** (cheque-bounce process, mutual-consent divorce, incorporation) where we already rank pos 5–10.
- **Premium, compliant brand** — "we don't advertise lawyers, we match you" can read as *more* trustworthy to serious clients.

### 4.4 Strategic takeaway
We cannot out-scale them. We can **own a niche** via winnable SEO + AEO, **build authority** (the real ceiling), and **close two operational gaps**: faster first response, and real reviews/trust (a Google Business Profile).

---

## PART V — Per-Matter SEO & Content Strategy (the client-acquisition engine)

For each focus matter: the buyer's search intent, what we already have, and the gap to fill. **Transactional + "cost/process/how-to" queries are where paying clients search.**

| Matter | Existing asset | Target queries (buyer intent) | Gap / action |
|--------|----------------|------------------------------|--------------|
| **NCLT / IBC** | practice: corporate-business | "NCLT lawyer", "IBC section 9 petition", "insolvency lawyer India", "oppression mismanagement" | 🔴 **Build a dedicated NCLT guide + landing** — biggest low-competition, high-value gap |
| **Cheque Bounce (S.138)** | ✅ guide + banking-finance | "cheque bounce case", "138 notice format", "cheque bounce lawyer", "cheque bounce complaint procedure" | 🟢 Strong — add a "what it costs / how long" section + internal links |
| **Commercial Suit recovery** | practice: civil-law | "money recovery suit", "summary suit Order 37", "commercial court recovery" | 🔴 **Build a recovery-suit guide** |
| **RERA disputes** | ✅ guide (rera-complaint) | "file RERA complaint", "builder delay compensation", "RERA lawyer" | 🟢 Strong — reinforce internal links from property pages |
| **Property due diligence** | ✅ guide (title-verification) | "property title verification", "property due diligence India", "title search before buying" | 🟢 Strong |
| **Trademark registration** | ✅ guide (trademark) | "trademark registration India", "trademark cost/classes", "trademark search" | 🟢 Strong |
| **Patent registration** | practice: intellectual-property | "patent filing India", "provisional patent cost", "how to patent an idea India" | 🟡 **Add a patent guide** (deepen beyond the practice page) |
| **Co-founders' Agreement** | practice: corporate-business | "co-founder agreement India", "founders agreement template", "equity vesting agreement" | 🔴 **Build a co-founder-agreement guide** |
| **Company Incorporation (Pvt/LLP)** | ✅ guides (incorporation, pvt-vs-llp) | "company registration India", "private limited registration process", "LLP registration" | 🟢 Strong — top-of-funnel for the whole startup cluster |
| **Contract drafting** | service: contract-management | "contract drafting India", "agreement review lawyer", "vendor contract drafting" | 🟡 Strengthen the service page toward the query |
| **Mutual Consent Divorce** | ✅ guide (mutual-consent) | "mutual consent divorce procedure", "13B divorce", "mutual divorce documents" | 🟢 Strong |
| **HNW Alimony** | practice: family-matrimonial | "alimony settlement India", "permanent alimony", "high net worth divorce" | 🔴 **Build an HNW-alimony / settlement guide** |

### 5.1 Content build priority (Week 18–20)
**🔴 Highest — net-new guides for the biggest gaps + lowest competition:** NCLT/IBC · Commercial Suit recovery · Co-founders' Agreement · HNW Alimony · Patent. Each = a hand-written, India-specific guide (current statutes: IBC 2016, Commercial Courts Act 2015, HMA S.13B) with a Quick Answer (AEO), an FAQ, and internal links into its cluster + a **"Book Your Free Assessment"** CTA.

### 5.2 Why this drives clients (not just traffic)
These are **buyer-intent searches** — someone typing "NCLT lawyer" or "co-founder agreement India" is *ready to engage*, not seeking free advice. Ranking the guide → free assessment (now qualified) → matched advocate. This is the exact funnel IndiaFilings/Vakilsearch use — minus the pricing, plus the qualifier.

---

## PART VI — The Week 18 Priority: Off-Page Authority (the real ceiling)

Everything on-page is now sharp; the binding constraint on *rank* is authority. This is owner-led and the single highest-leverage growth lever.

1. **🥇 Google Business Profile — this week.** Free, highest-ROI, and it simultaneously (a) creates a verified real-world entity that separates you from `nyayasevak.com`, (b) unlocks Maps/local visibility, and (c) enables **real reviews** — the trust signal competitors have and you lack. Exact NAP from the schema (+91-9868666715, New Delhi), category Legal Services, site `www.nyaysevak.com`; seed 3–5 genuine client reviews.
2. **🥇 Entity footprint / brand disambiguation.** Wikidata item, Crunchbase / LinkedIn Company / IndiaMART, and the owned socials — consistent NAP everywhere so Google splits you from the name-twin.
3. **🥈 Foundational citations (15–25).** Indian legal + business directories, identical NAP.
4. **🥈 Link-earning outreach.** Point the statistics page + the focus-matter guides at Quora / r/LegalAdviceIndia / founder & legal communities — 10 genuine touches/week.
5. **🥉 Digital PR (month 2+).** Expert commentary via #journorequest; a single LiveLaw / Bar & Bench link outweighs 50 directories.

**Do NOT:** buy links, fake reviews, or auto-template pages. All are YMYL-toxic.

---

## PART VII — Operational Gaps to Close (product/ops, not code)

The two competitor gaps that no SEO closes:
1. **Speed to first response.** Competitors connect in minutes; you promise 24 hrs. Even a **"callback within 1 hour (business hours)"** promise + a WhatsApp auto-acknowledgement would materially lift conversion on the leads you already get. The new **intent qualifier** lets you triage "ready-to-hire" leads to the front of the queue.
2. **Reviews / trust.** Stand up the GBP and collect genuine reviews; add a tasteful, honest trust section (outcomes, not self-authored ratings) once real reviews exist.

---

## PART VIII — KPIs & The Bi-Weekly Loop

Re-pull GSC every two weeks; track:
| KPI | Now | 6-week target | Source |
|-----|-----|---------------|--------|
| CTR on re-titled pages | ~1.1% | rising toward 3–5% | GSC Performance |
| Impressions (focus-matter queries) | low | rising | GSC Performance |
| Avg position (focus matters) | 20–46 | drifting < 20 | GSC Performance |
| Referring domains | ~0 | 15–25 | Ahrefs / GSC |
| GBP: profile + reviews | none | verified + 5 reviews | GBP |
| Qualified leads ("ready-to-hire") | new metric | track from form | Sheet / CRM |
| Branded SERP = us #1 | no | yes | manual |

**The loop:** the focus matter with the worst rank-for-its-intent gets the next guide + link pass. Data chooses the next sprint.

---

## PART IX — Honest Limits

- **Off-page is months, not weeks.** Authority (Part VI) is a 3–6 month build; there is no shortcut. On-page is now as good as it can be without it.
- **The BCI stance costs reach.** No advocate directory and no pricing = we forgo LawRato's SEO moat and IndiaFilings' transactional pricing pages. This is a deliberate compliance trade-off; revisit it only with a practising advocate's sign-off.
- **Conversion still finishes off-site.** The free assessment + qualifier deliver a better lead; whether it becomes a paying client depends on the matched advocate's handling and follow-up. Fix the speed-to-respond gap (Part VII) or the best leads still leak.
- **Not a legal opinion.** The BCI framing here is a considered non-lawyer view; confirm the final model with a practising advocate before scaling.

---

## Appendix A — Focus-Matter → Existing Asset Map
| Matter | Guide | Practice/Service page |
|--------|-------|----------------------|
| Cheque Bounce S.138 | `/insights/section-138-ni-act-cheque-bounce-procedure-2026` | `/practice-areas/banking-finance` |
| RERA | `/insights/rera-complaint-procedure-buyer-guide-2026` | `/practice-areas/property-real-estate` |
| Property due diligence | `/insights/property-title-verification-india-checklist-2026` | `/practice-areas/property-real-estate` |
| Trademark | `/insights/trademark-registration-india-process-cost-classes-2026` | `/practice-areas/intellectual-property` |
| Company incorporation | `/insights/private-limited-company-incorporation-india-2026` · `/insights/private-limited-vs-llp-vs-opc-vs-partnership-india` | `/practice-areas/corporate-business` |
| Contract drafting | — | `/services/contract-management` |
| Mutual consent divorce | `/insights/mutual-consent-divorce-india-procedure-2026` | `/practice-areas/family-matrimonial` |
| NCLT · Commercial recovery · Co-founder agreement · HNW alimony · Patent | 🔴 to build | corporate-business / civil-law / family / intellectual-property |

## Appendix B — Owner Action Checklist (Week 18)
1. **Deploy** the committed batch (`git push`) — Week 17 titles + mesh + free-assessment reposition + qualifier.
2. **Google Business Profile** — create + verify this week; seed real reviews.
3. **Faster response** — set a "callback within 1 hour (business hours)" promise; triage "ready-to-hire" qualifier leads first.
4. **Commission the 5 net-new guides** (NCLT, commercial recovery, co-founder agreement, HNW alimony, patent) — human/SME-written, then I wire them into the mesh + schema.
5. **Confirm BCI posture** with a practising advocate; then decide whether to strip the legacy schema service-price ranges.
