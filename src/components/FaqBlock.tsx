// Reusable FAQ block — renders BOTH the visible <details> FAQ and the matching
// FAQPage JSON-LD (AEO). Spec 08. Visible text mirrors the schema so Google's
// FAQ rich-result / AI-Overview extraction has a 1:1 source.
import { faqPageJsonLd } from "@/lib/schema";
import { HelpCircle } from "lucide-react";

export type Faq = { question: string; answer: string };

export default function FaqBlock({
  faqs,
  heading = "Frequently asked questions",
  variant = "dark",
}: {
  faqs: Faq[];
  heading?: string;
  variant?: "dark" | "cream";
}) {
  if (!faqs.length) return null;
  const isCream = variant === "cream";

  return (
    <section className={`${isCream ? "bg-cream cream-pattern" : "bg-dark"} py-14 sm:py-16`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className={`text-xl sm:text-2xl font-heading font-bold mb-8 ${isCream ? "text-gray-900" : "text-white"}`}>
          {heading}
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.question}
              className={`group rounded-xl border p-5 ${isCream ? "border-gray-200 bg-white/60" : "border-white/[0.06] bg-white/[0.015]"}`}
            >
              <summary className={`cursor-pointer list-none text-sm sm:text-base font-semibold flex items-start gap-2 ${isCream ? "text-gray-900" : "text-white"}`}>
                <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                {f.question}
              </summary>
              <p className={`mt-3 pl-6 text-sm leading-relaxed ${isCream ? "text-gray-600" : "text-gray-400"}`}>
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
