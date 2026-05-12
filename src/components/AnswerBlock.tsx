// Week 9: AnswerBlock — the AEO (Answer Engine Optimisation) primitive.
//
// Purpose:
//   AI answer engines (Google's AI Overview, Bing Copilot, Perplexity,
//   ChatGPT search) and traditional Featured-Snippet boxes preferentially
//   extract a concise 40-60 word "direct answer" paragraph that sits near
//   the top of the page, immediately after the H1.
//
//   We make that paragraph structurally explicit on the page so:
//     1. Extraction systems find it without ambiguity.
//     2. The Speakable schema can point its CSS selector at it
//        (`#answer` is the convention) for voice-assistant answer surfaces.
//     3. The first answer paragraph is identified semantically (not just
//        visually) — a single source of truth per page.
//
// Usage:
//   <AnswerBlock question="How do I file for divorce in India?">
//     A divorce in India is filed under either the Hindu Marriage Act 1955,
//     the Special Marriage Act 1954, or the personal law applicable to the
//     parties...
//   </AnswerBlock>
//
// The component renders a visually distinct, gold-bordered card with a
// "Quick Answer" eyebrow, the question as an H2 (if supplied), and the
// answer paragraph. The container has id="answer" so a page-level
// Speakable JSON-LD can target it. Pages that have several AnswerBlocks
// (e.g., a long Q&A explainer) should pass `id` to disambiguate.
import type { ReactNode } from "react";

type AnswerBlockProps = {
  question?: string;
  /** Defaults to "answer". For multi-block pages, supply unique ids like "answer-bail-timeline". */
  id?: string;
  /** The direct-answer paragraph. Keep it 40-90 words for snippet eligibility. */
  children: ReactNode;
  /** Optional eyebrow. Defaults to "Quick Answer". */
  eyebrow?: string;
};

export default function AnswerBlock({
  question,
  id = "answer",
  children,
  eyebrow = "Quick Answer",
}: AnswerBlockProps) {
  return (
    <section
      id={id}
      aria-label={question ? `Quick answer: ${question}` : "Quick answer"}
      className="not-prose my-8 rounded-2xl border border-gold/40 bg-gold/[0.06] p-5 md:p-6"
      data-aeo-answer-block="true"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
        {eyebrow}
      </p>
      {question && (
        <h2 className="mt-2 text-lg md:text-xl font-semibold text-white leading-snug">
          {question}
        </h2>
      )}
      <div className="mt-2 text-white/90 leading-relaxed text-[15px] md:text-base">
        {children}
      </div>
    </section>
  );
}
