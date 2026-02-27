import Link from "next/link";
import { platformFeatures } from "@/data/features";

export default function FeaturesPreview() {
  return (
    <section id="features" className="bg-dark py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 text-center">
          Platform Features
        </p>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white">
          Why Choose NyaySevak
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-400">
          A comprehensive platform designed to make India&apos;s legal system accessible to everyone
        </p>

        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {platformFeatures.map((feature, i) => (
            <Link
              key={feature.slug}
              href={`/features/${feature.slug}`}
              className="group rounded-2xl bg-dark-card border border-white/5 p-5 sm:p-6 lg:p-8 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-gold/30 group-hover:text-gold/60 transition-colors duration-300">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-heading font-bold text-white group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
              <span className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gold/60 group-hover:text-gold transition-colors duration-300">
                Learn More
                <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-xl border border-gold/40 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:shadow-lg hover:shadow-gold/10"
          >
            View All Features
          </Link>
        </div>
      </div>
    </section>
  );
}
