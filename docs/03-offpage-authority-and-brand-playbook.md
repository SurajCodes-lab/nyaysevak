# Implementation 03 — Off-Page Authority & Brand-Disambiguation Playbook

**Status:** 📄 Playbook (owner executes off-site) — folds in the brand-vs-competitor work.
**Date:** 2026-06-26
**Severity addressed:** 🔴 High — this is the **actual ceiling**. No on-page change removes it.

---

## 0. Read this first — the honest framing

The site has **excellent on-page SEO and ~0 off-page authority**. For a **15-week-old
domain in the YMYL legal niche in India** — one of the most competitive verticals on
the web — that combination *guarantees* low impressions/traffic regardless of how good
the code is. Google ranks YMYL pages on **E-E-A-T** (Experience, Expertise,
Authoritativeness, Trust), and the biggest external proxy for Authoritativeness/Trust
is **who links to and references you**. Right now: almost nobody.

**Everything below is off-site work only the owner can do.** It is the difference
between "indexed with impressions" (where fixes 01/04 get you) and "ranked with
clicks." Budget **3–6 months** of consistent effort. There is no shortcut and no
on-page trick that substitutes for it.

Priority order is deliberate. Do them top-to-bottom.

---

## 1. 🥇 Google Business Profile (GBP) — do this week

**Why first:** it is the single highest-ROI action for a local Indian service
business, it is free, and it simultaneously (a) creates a verified real-world entity
that **disambiguates you from `nyayasevak.com`**, (b) makes you eligible for Maps/local
pack, and (c) is a trusted entity citation Google itself controls.

- Create a profile for **NyaySevak** at the New Delhi address already in your schema
  (must be a real, reachable address — GBP mails a verification postcard/PIN).
- Category: **Legal Services / Legal Consultant**.
- Use the **exact** NAP (Name, Address, Phone) that appears in your
  `ProfessionalService` schema: `+91-9868666715`, New Delhi. Consistency is the signal.
- Add website `https://www.nyaysevak.com` (the new canonical host — note the `www`).
- Post weekly updates, add photos, answer Q&A. Seed the first 3–5 **genuine** client
  reviews (real clients only — never fake; fake reviews are detectable and a trust
  killer, which is also why self-authored review *schema* was removed from the site).

> This one action does more for the brand-collision problem than any code change.

---

## 2. 🥇 Entity disambiguation from `nyayasevak.com` (the name-twin)

Searches for your brand currently surface the competitor `nyayasevak.com` (extra "a").
You must build an **independent entity footprint** so Google's Knowledge Graph separates
the two. On-site schema already does its part (distinct `@id`, `legalName`,
`alternateName`, `sameAs`); the missing half is **off-site corroboration**:

1. **Create the social profiles your schema already claims.** Your `sameAs` lists
   `facebook.com/nyaysevak`, `twitter.com/nyaysevak`, `linkedin.com/company/nyaysevak`,
   `instagram.com/nyaysevak`. **Verify each actually exists and is yours.** A `sameAs`
   pointing to a non-existent or someone-else's profile is a weak/negative signal.
   - If any don't exist → **create them now** with the `www.nyaysevak.com` site link,
     the same logo, and a bio that defines the entity ("NyaySevak — verified-lawyer
     matching platform, nyaysevak.com").
   - If you cannot own a handle → **remove that URL from `sameAs`** in
     `src/app/layout.tsx` rather than point at a stranger.
2. **Wikidata item** (free, high-trust KG signal): create an item "NyaySevak",
   instance-of *online legal services platform*, official website
   `https://www.nyaysevak.com`. This is one of the strongest disambiguation signals
   available to a small brand.
3. **Crunchbase / LinkedIn Company / IndiaMART company page** — each a corroborating
   entity reference with consistent NAP + the `www` domain.
4. **Be ruthlessly consistent**: same brand spelling (`NyaySevak`), same domain
   (`www.nyaysevak.com`), same phone, everywhere. Every inconsistency lets Google keep
   the two name-twins merged.

**Decision to confirm with owner:** are the four social profiles in `sameAs` real and
owned? → If not, we will edit `src/app/layout.tsx` to drop/replace them (a real code
change tracked as a follow-up implementation).

---

## 3. 🥈 Foundational citations / directories (NAP consistency)

Indian local-business + legal directories. Each is a backlink + a citation that
reinforces the entity. Use identical NAP everywhere.

- **Legal-specific:** LawRato (profile), Vakilsearch community, Bar & Bench / LiveLaw
  (as a source/contributor, see §5), Indian Kanoon (cite-and-link where relevant),
  legalserviceindia.com.
- **General Indian directories:** JustDial, Sulekha, IndiaMART, TradeIndia, Yellow
  Pages India, AskMe, Hotfrog India.
- **Global trust:** Crunchbase, F6S, Clutch (if offering services), a Google Sites /
  about.me as a secondary corroboration.

Target: **15–25 consistent citations** in month 1. These rarely rank you alone but they
build the entity's trust floor that everything else stands on.

---

## 4. 🥈 Content that *earns* links (the on-site asset → off-site link engine)

You cannot out-link LawRato by asking. You earn links by publishing **reference assets
people cite**. You already have the raw material; point outreach at it:

- **`/legal-industry-statistics-india`** — this is a deliberate "cite-magnet." Make it
  the best free, current, **sourced** stat page on Indian legal data (case pendency,
  court counts, fee benchmarks). Journalists and bloggers link to stat pages.
- **The 5 calculators in `/legal-tools`** (court-fee, etc.) — free tools earn links.
  Pitch them to legal-aid sites, student forums, r/LegalAdviceIndia, law-college groups.
- **The 25 insight guides** (cheque-bounce, anticipatory bail, mutual-consent divorce) —
  these target winnable informational long-tail. Promote them where the audience asks
  the question: Quora, Reddit (r/india, r/LegalAdviceIndia), legal Facebook groups,
  LinkedIn. Answer the question, link the guide as the deeper resource (no spam).

**Action:** pick the 3 strongest assets and do **10 genuine outreach/answer touches per
week** (Quora answers, relevant forum replies, emails to legal bloggers offering the
stat page as a source). Track them.

---

## 5. 🥉 Digital PR & contributor backlinks (month 2+)

- **HARO-style / SourceBottle / Indian journalist requests** on Twitter/X
  (`#journorequest`): offer expert commentary on legal-procedure stories. A single
  link from LiveLaw / Bar & Bench / a mainstream outlet outweighs 50 directories.
- **Guest articles** on legal/startup blogs (with a contextual link, not a footer link).
- **Partnerships:** law colleges, CA/CS firms, startup incubators — co-published
  resources earn relevant links and referral traffic.

---

## 6. What NOT to do (these actively hurt a YMYL domain)

- ❌ Buy links / PBNs / fiverr "1000 backlinks" — a fast track to suppression.
- ❌ Fake reviews or self-authored review schema (already correctly removed).
- ❌ Auto-template the 75 missing city×practice pages just to have more pages
  (recreates doorway risk — see Implementation 04 §4).
- ❌ Mass-comment spam or irrelevant directory blasts.

---

## 7. 30-day scorecard (track in this file)

| Metric | Baseline (wk15) | 30-day target |
|--------|-----------------|---------------|
| Google Business Profile | none | verified + 5 reviews |
| Real referring domains (Ahrefs/GSC Links) | ~0 | 15–25 |
| Branded SERP: "nyaysevak" shows YOUR site #1 | no | yes |
| Social profiles in `sameAs` that exist & are owned | unknown | 4/4 |
| Wikidata item | none | live |
| GSC impressions (post fixes 01+04) | ~0 | rising (hundreds/wk) |

---

## 8. How this connects to the code fixes

Fixes **01 (canonical → www)** and **04 (sitemap 404s)** make the site *trustable and
indexable* — they remove the reasons Google was suppressing it. This playbook supplies
the *authority and entity identity* that converts that indexability into rankings and
clicks. **Both halves are required.** Doing only the code = impressions but few clicks;
doing only off-page = wasted links pointing at a self-contradicting site. We did the
code; this is your half.
