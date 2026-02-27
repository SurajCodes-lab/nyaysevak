import Link from "next/link";
import { platformFeatures } from "@/data/features";

export default function FeaturesPreview() {
  return (
    <section id="features" className="bg-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold/70 text-center">
          Platform Features
        </p>
        <h2 className="text-center text-4xl font-heading font-bold tracking-tight text-white lg:text-5xl">
          Why Choose NyaySevak
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          A comprehensive platform designed to make India&apos;s legal system accessible to everyone
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platformFeatures.map((feature, i) => (
            <Link
              key={feature.slug}
              href={`/features/${feature.slug}`}
              className="group border border-white/5 p-8 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.02]"
            >
              <span className="text-3xl font-heading font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-lg font-heading font-bold text-white group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold/60 group-hover:text-gold transition-colors">
                Learn More
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 border border-gold/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold"
          >
            View All Features
          </Link>
        </div>
      </div>
    </section>
  );
}
