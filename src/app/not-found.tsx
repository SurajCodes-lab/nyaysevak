import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist or has been moved. Browse NyaySevak's legal services, practice areas, and court coverage across India.",
  robots: {
    index: false,
    follow: true,
  },
};

const suggestedLinks = [
  { label: "Home", href: "/", desc: "Return to our homepage" },
  { label: "Services", href: "/services", desc: "Browse our legal services" },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    desc: "Explore 29 practice areas",
  },
  { label: "Courts", href: "/courts", desc: "Find courts across India" },
  { label: "Contact Us", href: "/contact", desc: "Get legal consultation" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark-deep flex flex-col items-center justify-center px-4 sm:px-6 text-center">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-2xl">
        {/* 404 Number */}
        <p className="text-8xl sm:text-9xl font-heading font-bold gradient-text-gold tracking-tight">
          404
        </p>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
          <div className="h-2.5 w-2.5 bg-gold rotate-45 shadow-[0_0_20px_rgba(201,168,76,0.5)]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        {/* Suggested links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {suggestedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-left transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.04]"
            >
              <p className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                {link.label}
              </p>
              <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <Link
          href="/"
          className="btn-gold-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
