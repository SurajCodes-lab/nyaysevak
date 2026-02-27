import Link from "next/link";
import { platformFeatures } from "@/data/features";

const additionalFeatures = [
  { title: "Multi-Language Support", desc: "Access legal services in Hindi, English, and regional languages for seamless communication." },
  { title: "Mobile Responsive", desc: "Full-featured experience on any device — desktop, tablet, or smartphone." },
  { title: "Secure Document Vault", desc: "Encrypted cloud storage for all your legal documents with easy retrieval and sharing." },
  { title: "Case Status Tracking", desc: "Real-time updates on your case progress with hearing dates and milestone notifications." },
  { title: "EMI Payment Options", desc: "Flexible payment plans for legal services — make legal help affordable for everyone." },
  { title: "24/7 Support", desc: "Round-the-clock customer support via phone, email, and chat for urgent legal queries." },
];

const securityItems = [
  "SSL/HTTPS Encryption",
  "Secure Cloud Hosting",
  "Privacy Policy Compliance",
  "IT Act 2000 Compliance",
  "Secure Form Submissions",
];

export default function Features() {
  return (
    <section className="overflow-hidden">
      {/* Hero — Dark */}
      <div className="bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold/70">
              Platform Features
            </p>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-white lg:text-6xl">
              Everything You Need in One Platform
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400">
              NyaySevak combines a verified lawyer directory, instant service booking, comprehensive legal resources,
              court information, and real-time support — all designed to make India&apos;s legal system accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Each feature gets its OWN full-width section — alternating dark/cream */}
      {platformFeatures.map((feature, i) => {
        const isDark = i % 2 === 0;
        return (
          <div key={feature.slug} className={isDark ? "bg-cream" : "bg-dark"}>
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
              <div className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Decorative number side */}
                <div className="lg:w-1/3 flex items-center justify-center">
                  <span className={`text-[8rem] font-heading font-bold leading-none ${isDark ? "text-gold/10" : "text-gold/[0.07]"}`}>
                    0{i + 1}
                  </span>
                </div>

                {/* Content side */}
                <div className="lg:w-2/3">
                  <Link href={`/features/${feature.slug}`} className="group">
                    <h3 className={`text-3xl font-heading font-bold tracking-tight lg:text-4xl ${isDark ? "text-gray-900" : "text-white"} group-hover:text-gold transition-colors`}>
                      {feature.title}
                    </h3>
                  </Link>
                  <p className={`mt-4 text-base leading-relaxed ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className={`flex items-start gap-3 text-sm ${isDark ? "text-gray-600" : "text-gray-400"}`}>
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/features/${feature.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
                  >
                    Learn More
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Additional features — 2-column list */}
      <div className="bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-heading font-bold text-white lg:text-4xl">
            And Much More
          </h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {additionalFeatures.map((f) => (
              <div key={f.title} className="border-l border-gold/20 pl-6">
                <h4 className="text-sm font-semibold text-white">{f.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security — Cream */}
      <div className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-gray-900">
            Built on Trust & Security
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Your data, documents, and communications are protected by industry-leading security standards.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {securityItems.map((item, i) => (
              <span key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="h-4 w-4 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                {item}
                {i < securityItems.length - 1 && <span className="ml-4 text-gold/30 hidden sm:inline">&#9679;</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA — Dark */}
      <div className="bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-heading font-bold text-white lg:text-4xl">
            Experience NyaySevak Today
          </h3>
          <p className="mx-auto mt-4 mb-10 max-w-lg text-gray-400">
            Join India&apos;s first complete legal ecosystem and get access to all features.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
            >
              Get Started
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 border border-gold/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
