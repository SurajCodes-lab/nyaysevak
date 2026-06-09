import { Star, Quote, BadgeCheck } from "lucide-react";
import { reviews, aggregateRatingValue, aggregateRatingCount } from "@/data/reviews";

// Server component (no "use client") — static content, zero client JS.
// Surfaces the REAL, verifiable client reviews from src/data/reviews.ts so the
// Review / AggregateRating schema below matches visible on-page content (Google
// requires this for review rich-results). Framed as reviews of NyaySevak's
// SERVICE — not advertisements of any individual advocate — to stay within the
// Bar Council of India advertising guidelines.

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://nyaysevak.com/#organization",
  name: "NyaySevak",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: aggregateRatingValue,
    reviewCount: aggregateRatingCount,
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.reviewerName },
    datePublished: r.datePublished,
    reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
    reviewBody: r.reviewBody,
  })),
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? "h-3.5 w-3.5 text-gold fill-gold" : "h-3.5 w-3.5 text-gray-600"}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Show the most substantive reviews first (longer bodies read as more credible).
  const featured = [...reviews]
    .sort((a, b) => b.reviewBody.length - a.reviewBody.length)
    .slice(0, 6);

  return (
    <section
      className="relative bg-dark-deep py-16 lg:py-24 overflow-hidden dark-section-depth"
      aria-label="Client testimonials"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="absolute top-0 left-0 right-0 section-separator" />
      <div className="glow-pulse pointer-events-none absolute top-[20%] right-[5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold mb-3">
            Verified Client Experiences
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">
            What People Say About NyaySevak
          </h2>
          <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/[0.05] px-5 py-2">
            <Stars rating={Math.round(Number(aggregateRatingValue))} />
            <span className="text-sm font-semibold text-white">{aggregateRatingValue}</span>
            <span className="text-xs text-gray-400">
              from {aggregateRatingCount} verified clients
            </span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <figure
              key={`${r.reviewerName}-${r.datePublished}`}
              className="glass-card !rounded-2xl p-6 flex flex-col"
            >
              {/* Authentic Indian court-file red-ribbon tab (law-theme accent) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-5 h-6 w-2.5 bg-gradient-to-b from-[#9b2c2c] to-[#7a1f1f] opacity-80"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}
              />
              <div className="flex items-center justify-between mb-4">
                <Quote className="h-6 w-6 text-gold/30" strokeWidth={1.5} aria-hidden="true" />
                <Stars rating={r.rating} />
              </div>
              <blockquote className="flex-1 text-sm text-gray-300 leading-relaxed">
                {r.reviewBody}
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <span className="seal-badge h-9 w-9 rounded-full flex items-center justify-center shrink-0">
                  <BadgeCheck className="h-4 w-4 text-gold" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{r.reviewerName}</p>
                  <p className="text-xs text-gray-400">
                    {r.reviewerCity ? `${r.reviewerCity} · ` : ""}
                    {r.serviceCategory}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Reviews reflect clients&apos; experience of NyaySevak&apos;s lawyer-matching and
          coordination service. Outcomes vary by matter; nothing here is a guarantee of any
          particular legal result.
        </p>
      </div>
    </section>
  );
}
