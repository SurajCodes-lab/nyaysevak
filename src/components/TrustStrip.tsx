// BCI-safe trust signals.
//
// Why: at ~0 leads, every visitor that does land needs an immediate reason to
// trust the platform. These are factual, non-promissory signals that comply with
// Bar Council of India advertising rules — NO ratings, NO testimonials, NO named
// individual lawyers (all of which are prohibited / low-trust for a new domain).
// Mount it under the AnswerBlock on money pages (practice areas, services, city
// pages, tools).

import { ShieldCheck, Gift, Landmark, Clock } from "lucide-react";

const signals = [
  { icon: ShieldCheck, label: "Bar-Council-verified advocates" },
  { icon: Gift, label: "Paid case assessment" },
  { icon: Landmark, label: "Supreme Court · 25 High Courts · 700+ District Courts" },
  { icon: Clock, label: "Callback within 24 hours" },
];

export default function TrustStrip({ variant = "dark" }: { variant?: "dark" | "cream" }) {
  const isCream = variant === "cream";
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border px-5 py-4 ${
        isCream ? "border-gray-200 bg-white" : "border-white/[0.08] bg-white/[0.02]"
      }`}
    >
      {signals.map((s) => {
        const Icon = s.icon;
        return (
          <span
            key={s.label}
            className={`inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium ${
              isCream ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <Icon className="h-4 w-4 text-gold shrink-0" strokeWidth={1.5} />
            {s.label}
          </span>
        );
      })}
    </div>
  );
}
