# Implementation 11 — `sameAs` / social dead-link cleanup (entity hygiene)

**Phase:** 2 (entity) · **Effort:** Small · **Impact:** Medium · **Status:** ✅ Implemented (build passes; awaiting batch deploy)
**Date:** 2026-06-26

---

## 1. Problem

Schema `sameAs` (and Twitter card meta + author profiles) linked to social accounts —
but a live HTTP check showed **half of them do not exist**:

| Handle | HTTP status | Verdict |
|--------|-------------|---------|
| `facebook.com/nyaysevak` | **200** | live — keep |
| `instagram.com/nyaysevak` | **200** | live — keep |
| `twitter.com/nyaysevak` | 301 → `x.com/nyaysevak` | dead |
| `x.com/nyaysevak` | **404** | **dead — remove** |
| `linkedin.com/company/nyaysevak` | **404** | **dead — remove** |

Why it matters: `sameAs` is an **entity-identity claim**. Pointing it at a 404 is a
negative trust signal and *weakens* the very brand-disambiguation we are trying to win
against the `nyayasevak.com` name-twin (Implementation 06). Dead links in author
`Person` schema also dent E-E-A-T.

---

## 2. Change

Removed the two dead URLs (X/Twitter, LinkedIn) and kept only the live ones
(Facebook, Instagram) everywhere they appeared:

| File | What changed |
|------|--------------|
| `src/app/layout.tsx` | `organizationJsonLd.sameAs` **and** `professionalServiceJsonLd.sameAs` → Facebook + Instagram only (`replace_all`). |
| `src/app/layout.tsx` | Twitter card `site`/`creator: "@nyaysevak"` removed (the X handle 404s). |
| `src/app/lawyers/[city]/page.tsx` | `localBusinessJsonLd.sameAs` → dropped dead LinkedIn. |
| `src/data/authors.ts` | Author `socialProfiles` → dropped dead LinkedIn/Twitter (kept Facebook where present; emptied the rest). |

Each removal carries an inline comment explaining *why* and noting they can be re-added
once the accounts are actually created.

Build passes; `grep` confirms **0** remaining references to the dead URLs (only the
explanatory comments mention them).

---

## 3. Why it helps
- **Entity/SEO:** every `sameAs` now resolves to a live, brand-matching profile → a
  cleaner, more trustworthy entity graph and stronger separation from the name-twin.
- **E-E-A-T:** author profiles no longer point at dead company pages.

---

## 4. Owner follow-up (from Playbook 03)
The fastest way to *strengthen* this (rather than just clean it) is to **create** the
missing profiles — a real LinkedIn Company page and X account under `nyaysevak` — then
re-add them to `sameAs`, plus add Wikidata/Crunchbase. Creating these is also a top
brand-disambiguation lever (Playbook 03 §2).

## 5. Verification
```bash
grep -rn "twitter.com/nyaysevak\|x.com/nyaysevak\|linkedin.com/company/nyaysevak" src/   # only comments
# post-deploy: Rich Results Test on / → Organization sameAs lists 2 live URLs
```
