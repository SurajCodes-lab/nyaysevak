import type { Metadata } from "next";
import PracticeAreas from "@/components/PracticeAreas";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practice Areas - A-Z Legal Services | NyaySevak",
  description:
    "Complete A-Z legal services across every domain of Indian law. Civil law, criminal law, family law, corporate law, IP, tax, consumer protection, arbitration, documentation & more. 26 practice areas with pan-India coverage.",
  keywords:
    "practice areas, civil law India, criminal lawyer, family lawyer, corporate lawyer, IP lawyer, tax lawyer, consumer protection, arbitration, legal documentation, Indian law, NyaySevak",
  openGraph: {
    title: "A-Z Legal Practice Areas | NyaySevak",
    description:
      "26 practice areas covering every domain of Indian law. Find verified lawyers for civil, criminal, family, corporate, IP, tax, and more.",
    type: "website",
  },
};

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/[0.03] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-gold/[0.02] blur-2xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 sm:mb-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-gold"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <svg
                  className="h-3.5 w-3.5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li className="text-gold">Practice Areas</li>
            </ol>
          </nav>

          {/* Heading content */}
          <div className="max-w-3xl">
            <p className="mb-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70">
              Comprehensive Legal Coverage
            </p>
            <h1 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              A&ndash;Z Legal{" "}
              <span className="text-gold">Practice Areas</span>
            </h1>
            <p className="mt-4 text-base text-gray-400 sm:mt-6 sm:text-lg lg:text-xl max-w-2xl">
              NyaySevak covers every domain of Indian law &mdash; from civil
              litigation and criminal defense to corporate advisory, intellectual
              property, and beyond.
            </p>
          </div>

          {/* Stat bar */}
          <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
            {[
              {
                value: "26",
                label: "Practice Areas",
                icon: (
                  <svg
                    className="h-5 w-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                ),
              },
              {
                value: "Pan-India",
                label: "Coverage",
                icon: (
                  <svg
                    className="h-5 w-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                ),
              },
              {
                value: "Verified",
                label: "Lawyers",
                icon: (
                  <svg
                    className="h-5 w-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-dark-card p-3 sm:p-4 text-center"
              >
                <div className="mb-2 flex justify-center">{stat.icon}</div>
                <p className="text-lg font-heading font-bold text-white sm:text-xl lg:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ── Practice Areas Listing ── */}
      <PracticeAreas />

      {/* ── Separator ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-gold/[0.03] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-gold/10">
            <svg
              className="h-7 w-7 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </div>

          <h2 className="mb-4 text-3xl font-heading font-bold text-white sm:text-4xl lg:text-5xl">
            Don&apos;t See Your{" "}
            <span className="text-gold">Legal Need</span> Listed?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-gray-400 sm:text-lg">
            We cover every area of Indian law. Tell us about your situation and
            we&apos;ll connect you with the right verified expert &mdash; no
            matter how niche your legal requirement.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Get Legal Help
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
