# Change: Ahmedabad ↔ Gandhinagar Cannibalisation Fix

**Status:** ✅ Shipped · **Commit:** `4838cc8` · **Type:** on-page (cannibalisation)

## What was wrong
The Ahmedabad city record listed **"Gandhinagar" as one of its own neighbourhoods** and **"Gandhinagar District & Sessions Court" among its district courts**. That was defensible while Gandhinagar had no page of its own — it sits in the Ahmedabad urban agglomeration.

With Gandhinagar added as a hub in its own right this cycle, it stopped being defensible: two pages would claim the same locality and the same courthouse, competing for the same local queries and splitting the relevance signal between them.

## What we changed
- Ahmedabad's neighbourhood list: "Gandhinagar" → **"Shahibaug"** (a genuine Ahmedabad locality that was missing).
- Ahmedabad's district courts: "Gandhinagar District & Sessions Court" → **"Commercial Court, Ahmedabad"** (genuine, and more useful to the page's commercial-intent readers).

Gandhinagar's own record retains both, since they are actually its own.

## Why it helps
- Removes a direct query overlap between two adjacent hubs before it can establish itself in the index.
- Each page now describes a distinct place, which is the whole basis on which local pages avoid being treated as duplicates.

## Verification & timeline
`next build` ✓. Effective from the next crawl; no lag beyond re-indexing.

