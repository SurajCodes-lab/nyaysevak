const items = [
  "Supreme Court Coverage",
  "25+ High Courts",
  "700+ District Courts",
  "20+ Tribunals",
  "1000+ Verified Lawyers",
  "26 Practice Areas",
  "36 States & UTs",
  "B2B + B2C Platform",
  "Arbitration & ADR",
  "24/7 Emergency Support",
];

function MarqueeContent() {
  return (
    <>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-4 sm:gap-6 shrink-0 px-4 sm:px-8">
          <span className="h-2 w-2 rounded-full bg-dark-deep shrink-0" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-dark-deep whitespace-nowrap">
            {item}
          </span>
        </span>
      ))}
    </>
  );
}

export default function StatsMarquee() {
  return (
    <div className="bg-gradient-to-r from-gold via-gold-light to-gold py-4 sm:py-5 overflow-hidden shadow-lg shadow-gold/20">
      <div className="marquee-track" style={{ "--marquee-duration": "35s" } as React.CSSProperties}>
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
