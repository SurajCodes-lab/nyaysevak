// Title and description length control.
//
// Why this exists: an audit of the rendered site found 396 of 467 pages (85%)
// carrying a meta description longer than 160 characters — median 231, worst
// 491 — and 140 pages with a title over 60. Google truncates both. A 231-char
// description is not "more information"; it is a description whose last third,
// usually the call to action, never appears in the result.
//
// The fix is not to hand-shorten 396 pages. It is to assemble metadata through
// these helpers so length is enforced at the template, and any page added later
// inherits the constraint.
//
// Targets are deliberately just under the visible limits, because Google
// measures pixel width rather than characters and truncates a little earlier for
// wide glyphs:
//   title       ~60 characters, including the brand suffix appended by layout
//   description ~155 characters
//
// Truncation is at a word boundary, and the CTA is placed BEFORE the variable
// part so it can never be the thing that gets cut.

export const TITLE_MAX = 60;
export const DESC_MAX = 155;

// Slack allowed past TITLE_MAX before truncating, so a title that overshoots by
// a word survives intact instead of being cut inside a city or statute name.
const TITLE_TOLERANCE = 8;

// Words that must never be the last thing in a clamped string. Cutting on a
// word boundary alone is not enough: "…Verified Lawyers in" and "…the Rajasthan
// High" are both valid word boundaries and both read as broken.
const DANGLING =
  /\s+(?:the|a|an|and|or|of|in|on|at|to|for|with|by|from|is|are|was|were|as|that|which|who|its|their|this|these|per|across|before|under|over|into|about|High|Supreme|District|Sessions|Family|Commercial)$/i;

/** Trim at the last word boundary at or before `max`, dropping dangling words. */
export function clamp(text: string, max: number): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max + 1);
  const sp = cut.lastIndexOf(" ");
  let out = cut.slice(0, sp > max * 0.6 ? sp : max);
  // Strip trailing connectives repeatedly — "of the", "in the" etc.
  let prev: string;
  do { prev = out; out = out.replace(DANGLING, ""); } while (out !== prev);
  return out.replace(/[\s,;:.–—-]+$/, "");
}

/**
 * A readable excerpt: prefer a whole sentence, then a whole clause, and only
 * fall back to a hard cut with an ellipsis. Used where a page's own opening
 * line is folded into the description — a mid-sentence stop there reads as a
 * bug to anyone scanning results.
 */
export function snippet(text: string, max: number): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const window = t.slice(0, max);
  const stop = Math.max(window.lastIndexOf(". "), window.lastIndexOf("; "));
  if (stop > max * 0.45) return t.slice(0, stop + 1);
  const comma = window.lastIndexOf(", ");
  if (comma > max * 0.45) return clamp(t.slice(0, comma), max - 1) + "…";
  return clamp(t, max - 1) + "…";
}

/**
 * Build a title from ordered parts joined with an em dash, keeping the earliest
 * parts and dropping later ones whole. Prevents the half-phrase titles a blind
 * clamp produces — "Name — Criminal" instead of just "Name".
 */
export function titleParts(parts: Array<string | false | undefined>, max: number = TITLE_MAX): string {
  const budget = Math.max(20, max - BRAND_SUFFIX_LEN);
  const kept: string[] = [];
  let len = 0;
  for (const raw of parts) {
    if (!raw) continue;
    const p = raw.replace(/\s+/g, " ").trim();
    if (!p) continue;
    const add = kept.length ? p.length + 3 : p.length; // " — "
    if (len + add > budget) continue;
    kept.push(p);
    len += add;
  }
  if (!kept.length) {
    const first = parts.find((p): p is string => Boolean(p));
    return first ? clamp(first, budget) : "";
  }
  return kept.join(" — ");
}

/**
 * Build a description from ordered parts, keeping the earliest parts intact.
 *
 * Pass the parts that must survive first — the keyword and location — and the
 * expendable detail last. Anything that does not fit is dropped whole rather
 * than truncated mid-sentence, so the description always ends cleanly.
 */
export function description(parts: Array<string | false | undefined>, max: number = DESC_MAX): string {
  const kept: string[] = [];
  let len = 0;
  for (const raw of parts) {
    if (!raw) continue;
    const p = raw.replace(/\s+/g, " ").trim();
    if (!p) continue;
    const add = kept.length ? p.length + 1 : p.length;
    if (len + add > max) continue; // drop this part, try the next (shorter) one
    kept.push(p);
    len += add;
  }
  // Nothing fitted — fall back to a clean clamp of the first part.
  if (!kept.length) {
    const first = parts.find((p): p is string => Boolean(p));
    return first ? clamp(first, max) : "";
  }
  return kept.join(" ");
}

/**
 * Build a page title that stays within TITLE_MAX once the root layout appends
 * its brand suffix.
 *
 * The layout template is "%s | NyaySevak.com", so the suffix costs 17
 * characters. Titles are therefore budgeted against the remainder. Pass the
 * title WITHOUT any brand — several pages currently end in "| NyaySevak" and
 * then get the layout suffix too, producing "… | NyaySevak | NyaySevak.com".
 */
export const BRAND_SUFFIX_LEN = " | NyaySevak.com".length;

export function title(text: string, max: number = TITLE_MAX): string {
  // Strip any brand the caller has already appended, so it is never doubled.
  const bare = text
    .replace(/\s*[|–—-]\s*NyaySevak(\.com)?\s*$/i, "")
    .replace(/\s*[|–—-]\s*NyaySevak(\.com)?\s*$/i, "")
    .trim();
  return clamp(bare, Math.max(20, max - BRAND_SUFFIX_LEN));
}

/**
 * Return the first candidate that fits the title budget, falling back to a
 * clamp of the shortest one.
 *
 * Use where a title has an optional lead-in ("Best …", "What is …?") that is
 * worth keeping when there is room and worth losing when there is not. Passing
 * progressively shorter phrasings gives a clean title at every length instead
 * of a truncated version of the longest.
 */
export function titleFit(candidates: string[], max: number = TITLE_MAX): string {
  const budget = Math.max(20, max - BRAND_SUFFIX_LEN);
  const cleaned = candidates
    .map((c) => c.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  for (const c of cleaned) if (c.length <= budget) return c;
  const shortest = cleaned.reduce((a, b) => (b.length < a.length ? b : a), cleaned[0] ?? "");
  if (!shortest) return "";
  // A few characters over is better than a truncated proper noun. Without this,
  // "Mutual Consent Divorce Lawyer in Greater Noida" (one over) became
  // "...in Greater", which reads as a broken title rather than a long one.
  if (shortest.length <= budget + TITLE_TOLERANCE) return shortest;
  return clamp(shortest, budget);
}
