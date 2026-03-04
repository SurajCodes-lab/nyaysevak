import {
  Landmark, Building2, MapPin, Scale, Users, BookOpen,
  Globe, Briefcase, Gavel, PhoneCall,
} from "lucide-react";

const items = [
  { label: "Supreme Court Coverage", Icon: Landmark },
  { label: "25+ High Courts", Icon: Building2 },
  { label: "700+ District Courts", Icon: MapPin },
  { label: "20+ Tribunals", Icon: Scale },
  { label: "1000+ Verified Lawyers", Icon: Users },
  { label: "29 Practice Areas", Icon: BookOpen },
  { label: "36 States & UTs", Icon: Globe },
  { label: "B2B + B2C Platform", Icon: Briefcase },
  { label: "Arbitration & ADR", Icon: Gavel },
  { label: "24/7 Emergency Support", Icon: PhoneCall },
];

function MarqueeContent() {
  return (
    <>
      {items.map((item) => {
        const ItemIcon = item.Icon;
        return (
          <span key={item.label} className="flex items-center gap-3 sm:gap-4 shrink-0 px-5 sm:px-8">
            <span className="h-6 w-6 sm:h-7 sm:w-7 rounded-md bg-black/10 flex items-center justify-center shrink-0">
              <ItemIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-dark-deep/70" strokeWidth={2} />
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-dark-deep whitespace-nowrap">
              {item.label}
            </span>
          </span>
        );
      })}
    </>
  );
}

export default function StatsMarquee() {
  return (
    <div className="relative bg-gradient-to-r from-gold via-gold-light to-gold overflow-hidden shadow-[0_4px_20px_rgba(201,168,76,0.3)]">
      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/5 pointer-events-none" />
      <div className="relative py-4 sm:py-5">
        <div className="marquee-track" style={{ "--marquee-duration": "40s" } as React.CSSProperties}>
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
}
