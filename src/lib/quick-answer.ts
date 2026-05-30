// Week 11: helpers for deriving AEO "Quick Answer" text.
//
// The AnswerBlock primitive (shipped Week 9) wants a 40-90-word declarative
// paragraph that directly answers the page's head query. Rather than hand-wire
// a bespoke paragraph into every one of the ~80 indexable templated pages, we
// derive the answer from content that already exists on the page (the opening
// of a practice-area overview, a city's fee + court data, an article excerpt),
// trimmed to a clean sentence boundary inside the snippet-eligible word range.
//
// These helpers are pure and server-safe (no client APIs) so they can run
// inside server components during static prerender.

/**
 * Trim `text` to at most `maxWords`, cutting at the last sentence boundary that
 * fits so the result always reads as complete sentences. Falls back to a hard
 * word cut (with an ellipsis) only when a single sentence already exceeds the
 * budget.
 */
export function trimToSentences(text: string, maxWords = 70): string {
  const clean = text.replace(/\s+/g, " ").trim();
  const words = clean.split(" ");
  if (words.length <= maxWords) return clean;

  const budget = words.slice(0, maxWords).join(" ");
  // Prefer the last sentence terminator inside the budget.
  const lastStop = Math.max(
    budget.lastIndexOf(". "),
    budget.lastIndexOf("! "),
    budget.lastIndexOf("? "),
  );
  if (lastStop > 40) {
    return budget.slice(0, lastStop + 1).trim();
  }
  return budget.trim().replace(/[,;:]?$/, "") + "…";
}

/** Word count of a string (whitespace-delimited). Used by callers to validate range. */
export function wordCount(text: string): number {
  return text.replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length;
}
