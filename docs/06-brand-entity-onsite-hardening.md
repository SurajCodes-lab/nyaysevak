# Spec 06 — Brand Entity On-Site Hardening (separate us from `nyayasevak.com`)

**Phase:** 2 · **Effort:** Small · **Impact:** Medium · **Status:** ✅ Implemented (build passes; awaiting batch deploy)

---

## ✅ As-built (2026-06-26)

- `src/app/layout.tsx` `organizationJsonLd` now includes `legalName`,
  `disambiguatingDescription` (explicitly states independence from similarly-named
  services), `knowsLanguage`, and `brand`.
- `/about` already carried full `AboutPage` schema (`mainEntity` → `#organization`,
  `isPartOf` → `#website`, speakable) — verified, no change needed.
- **Still open (owner):** confirm the 4 `sameAs` social profiles are real & owned.
  If any are not, remove/replace in `layout.tsx`. `sameAs` to Wikidata/Crunchbase
  (Playbook 03 §2) to be added once those off-site entities exist.
- `npm run build` passes.

---

---

## 1. Problem

Brand searches for "nyaysevak" surface the **competitor `nyayasevak.com`** (extra "a")
— an established legal-services brand with active socials, a named founder, and PR.
Google conflates the two near-identical entities and routes brand authority to the
older one. The on-site half of disambiguation can be strengthened; the off-site half
lives in [03](./03-offpage-authority-and-brand-playbook.md).

> On-site schema cannot *win* disambiguation alone, but inconsistencies actively *hurt*.
> This spec removes the inconsistencies and adds the strongest on-site entity signals.

---

## 2. Implementation (all in `src/app/layout.tsx` unless noted)

### 2.1 ⚠️ Audit `sameAs` — the most important item
Current `organizationJsonLd.sameAs` / `professionalServiceJsonLd.sameAs` list:
```
facebook.com/nyaysevak · twitter.com/nyaysevak · linkedin.com/company/nyaysevak · instagram.com/nyaysevak
```
**Action — confirm each profile exists AND is owned by you:**
- ✅ Exists & owned → keep, and ensure each profile's bio links `https://www.nyaysevak.com`.
- ❌ Doesn't exist → **create it** (preferred) or **remove the URL** from `sameAs`.
  A `sameAs` pointing at a dead or stranger's profile is a negative trust signal and can
  *reinforce* the conflation if the handle resembles the competitor's.

> **This is the one open decision blocking a clean deploy.** Owner: confirm the 4 handles.

### 2.2 Add strong entity-defining properties to `organizationJsonLd`
```ts
legalName: "NyaySevak",
disambiguatingDescription:
  "NyaySevak (nyaysevak.com) is an online platform that matches individuals and " +
  "businesses in India with verified, independent advocates. It is a distinct entity, " +
  "operated independently and not affiliated with any similarly named service.",
foundingDate: "2024",
knowsLanguage: ["en-IN", "hi-IN"],
brand: { "@type": "Brand", name: "NyaySevak", url: "https://www.nyaysevak.com" },
```
(Keep the existing `alternateName` list — it is already correctly scoped to genuine
variants of *our* brand only.)

### 2.3 Add `Organization.identifier` once off-site IDs exist
After creating Wikidata / Crunchbase / LinkedIn entries (Playbook 03 §2), wire them in:
```ts
sameAs: [ /* …socials… */, "https://www.wikidata.org/wiki/QXXXXXXX",
          "https://www.crunchbase.com/organization/nyaysevak",
          "https://www.linkedin.com/company/nyaysevak" ],
```
`sameAs` to high-trust knowledge bases is the single strongest on-site disambiguation
signal available to a small brand.

### 2.4 `/about` page — make it an entity anchor
Add `AboutPage` + the org `@id` reference on `src/app/about/page.tsx`, and ensure the
visible copy explicitly states the legal name, founding year, what the service is/does,
and the canonical domain. Google reads the About page heavily for entity facts.

```ts
const aboutSchema = {
  "@context": "https://schema.org", "@type": "AboutPage",
  "@id": "https://www.nyaysevak.com/about#aboutpage",
  url: "https://www.nyaysevak.com/about",
  mainEntity: { "@id": "https://www.nyaysevak.com/#organization" },
};
```

### 2.5 Title/brand consistency check
Ensure every page's brand token is exactly **`NyaySevak`** (and the title template
`%s | NyaySevak.com`). One spelling everywhere — no spaces, no second "a".

---

## 3. Why it helps
- **SEO/Entity:** consistent, corroborated entity facts help Google build a separate
  Knowledge Graph node for `nyaysevak.com`, reclaiming branded SERPs from the twin.
- **AEO/GEO:** AI engines resolve "NyaySevak" to *our* entity with a clear, repeated
  self-definition, reducing the chance they describe the competitor when asked about us.

---

## 4. Acceptance criteria
- [ ] Every `sameAs` URL resolves to a live profile that is ours (or is removed).
- [ ] `legalName`, `disambiguatingDescription`, `foundingDate`, `brand` present on org schema.
- [ ] `/about` carries `AboutPage` schema + explicit entity copy.
- [ ] Rich Results Test passes for Organization + AboutPage; no warnings.

## 5. Verification
- Google Rich Results Test + Schema.org validator on `/` and `/about`.
- Post-deploy + Playbook 03 off-site work: re-check branded SERP in 4–8 weeks.

## 6. Expected impact
- Branded-search reclamation is gradual (**6–12 weeks**) and depends on Playbook 03
  off-site entity creation; this spec is the necessary on-site half.
