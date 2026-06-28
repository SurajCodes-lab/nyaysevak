# Spec 08 — AEO / GEO Deepening (win AI citations while organic matures)

**Phase:** 4 · **Effort:** Small · **Impact:** Medium · **Status:** 🟡 Partially implemented

---

## ✅ As-built (2026-06-26)
- **City hub `/lawyers/[city]` now has `FAQPage`** (8A) — 4 genuine Q&As derived from
  the city's own data (court, fees, online consult) + a visible `<details>` FAQ. 26 pages.
  Build passes.

### Remaining (follow-ups)
- 8A: FAQ on `/courts`, `/legal-tools`, `/legal-industry-statistics-india` hubs.
- 8B/8C: extend direct-answer + `Speakable` to remaining pillars (largely present).
- 8D/8E: `llms.txt`/`llms-full.txt` drift-guard + entity statement.

---

---

## 1. Context

AEO/GEO are already **mature** here: FAQPage, Article, HowTo, Speakable, DefinedTerm,
WebApplication schema; AI-crawler allowlist in robots; `llms.txt` + `llms-full.txt`;
hand-authored "Quick Answer" blocks on pillar articles; IndexNow feeding Bing (which
powers ChatGPT Search). So this spec is **targeted gap-filling, not a rebuild** — we do
NOT add schema for its own sake.

Why it still matters: while backlinks (the organic ceiling) take months, **AI engines
can cite a new domain quickly** if the answer is extractable and the entity is clear.
GEO is the fastest path to *any* visibility for this site.

---

## 2. Implementation (small, surgical)

### 8A — Hub-page FAQs (the only real FAQ gap)
Add `faqPageJsonLd` + a visible FAQ to the hubs that lack it and have query intent:
`/lawyers/[city]` (city hub), `/courts`, `/legal-tools`,
`/legal-industry-statistics-india`. 4–6 genuine Q&As each (e.g. city hub: "How do I find
a verified lawyer in <city>?", "What does a first consultation cost in <city>?").
Skip pure utility/legal pages (privacy, terms) — no FAQ there.

### 8B — Extractable direct answers everywhere
Every informational page should open with a 2–4 sentence **direct answer** in the first
~320 characters (the `AnswerBlock` component already does this on articles). Extend the
pattern to: practice-area pillars, city hubs, and glossary terms (glossary already uses
`definedTermJsonLd` — ensure the visible first sentence is a clean standalone definition).

### 8C — `Speakable` on Q&A and definitions
`webPageSpeakableJsonLd` helper exists; apply it to FAQ answers and glossary definitions
so voice/assistant surfaces can read them. Low effort, marks the citable spans.

### 8D — Keep `llms.txt` / `llms-full.txt` in sync
These are static today. Add a build-time check (or a note in the content checklist) so
new pillar guides/tools (Spec 07) get appended. An out-of-date `llms.txt` under-sells the
site to AI crawlers. Consider generating `llms.txt` from the same data sources the
sitemap uses, so it can never drift.

### 8E — Entity clarity for GEO
Ensure `llms-full.txt` opens with a crisp, unambiguous entity statement: what NyaySevak
is, the canonical domain `www.nyaysevak.com`, and that it is distinct from similarly
named services (mirrors Spec 06 disambiguation). AI engines read this verbatim.

---

## 3. Why it helps
- **AEO:** fills the few FAQ/answer gaps that block AI-Overview / featured-snippet
  eligibility on hubs and pillars.
- **GEO:** synced `llms.txt` + extractable answers + clear entity statement maximise the
  chance ChatGPT/Claude/Perplexity/Gemini cite *us* (and describe us correctly, not the
  competitor) — the fastest visibility channel for a no-authority domain.

---

## 4. Acceptance criteria
- [ ] City/courts/tools/stats hubs have visible FAQ + `faqPageJsonLd`.
- [ ] Every informational page opens with a ≤320-char direct answer.
- [ ] `llms.txt`/`llms-full.txt` include all current pillars/tools; drift guard in place.
- [ ] `llms-full.txt` opens with the disambiguating entity statement.
- [ ] Rich Results Test: FAQ valid on all updated hubs.

## 5. Verification
- Rich Results Test (FAQ/Speakable) on updated pages.
- Manual GEO spot-check: ask ChatGPT/Perplexity "What is NyaySevak?" and "best way to
  file anticipatory bail in India" — track whether we're cited and described correctly.
  Re-check monthly.

## 6. Expected impact
- **Timeline:** AI citation visibility can appear in **days–weeks** (faster than
  organic). Modest absolute traffic, but high-quality and a leading indicator that
  entity clarity is working.
