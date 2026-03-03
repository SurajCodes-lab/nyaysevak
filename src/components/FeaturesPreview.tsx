import Link from "next/link";
import { platformFeatures } from "@/data/features";
import ScrollReveal from "./ScrollReveal";

export default function FeaturesPreview() {
  return (
    <section id="features" className="bg-cream cream-pattern py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-8 w-1 bg-gold-dark rounded-full" />
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
            Platform Features
          </p>
        </div>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-gray-900">
          Why Choose NyaySevak
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-600">
          A comprehensive platform designed to make India&apos;s legal system accessible to everyone
        </p>

        {/* Alternating left-right rows */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          {platformFeatures.map((feature, i) => {
            const isOdd = i % 2 === 0; // 0-indexed: first row has number on left
            const num = String(i + 1).padStart(2, "0");

            return (
              <ScrollReveal key={feature.slug}>
                <Link
                  href={`/features/${feature.slug}`}
                  className={`group flex flex-col ${
                    isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-6 sm:gap-8 lg:gap-12 py-10 sm:py-12 lg:py-14 ${
                    i < platformFeatures.length - 1
                      ? "border-b border-gold/10"
                      : ""
                  }`}
                >
                  {/* Number + icon side */}
                  <div className="flex items-center gap-4 lg:gap-6 shrink-0 lg:w-[200px]">
                    <span className="text-7xl lg:text-8xl font-heading font-bold stat-gradient leading-none select-none">
                      {num}
                    </span>
                    <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:from-gold/30 group-hover:to-gold/10">
                      <svg
                        className="h-7 w-7 sm:h-8 sm:w-8 text-gold-dark"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={feature.iconPath}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Title + description side */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 group-hover:text-gold-dark transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-600 max-w-xl">
                      {feature.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gold-dark/60 group-hover:text-gold-dark transition-colors duration-300">
                      Learn More
                      <svg
                        className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5"
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
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/features"
            className="btn-gold-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 sm:px-10 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            View All Features
          </Link>
        </div>
      </div>
    </section>
  );
}
