import Link from "next/link";
import {
  ArrowRight, Users, CalendarCheck, BookOpen, Landmark,
  HelpCircle, MessageCircle, Globe, Smartphone, Lock,
  BarChart3, CreditCard, Headphones, Shield, CircleCheck,
} from "lucide-react";
import { platformFeatures } from "@/data/features";

const lucideFeatureIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "lawyer-directory": Users,
  "service-booking": CalendarCheck,
  "legal-guides-resources": BookOpen,
  "court-tribunal-information": Landmark,
  "faq-sections": HelpCircle,
  "whatsapp-integration": MessageCircle,
};

const additionalFeatures = [
  { Icon: Globe, title: "Multi-Language Support", desc: "Access legal services in Hindi, English, and regional languages for seamless communication." },
  { Icon: Smartphone, title: "Mobile Responsive", desc: "Full-featured experience on any device — desktop, tablet, or smartphone." },
  { Icon: Lock, title: "Secure Document Vault", desc: "Encrypted cloud storage for all your legal documents with easy retrieval and sharing." },
  { Icon: BarChart3, title: "Case Status Tracking", desc: "Real-time updates on your case progress with hearing dates and milestone notifications." },
  { Icon: CreditCard, title: "EMI Payment Options", desc: "Flexible payment plans for legal services — make legal help affordable for everyone." },
  { Icon: Headphones, title: "24/7 Support", desc: "Round-the-clock customer support via phone, email, and chat for urgent legal queries." },
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
      {/* Hero — Dark Premium */}
      <div className="relative bg-dark-deep overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Platform Features</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-white heading-glow lg:text-6xl">
              Everything You Need in One Platform
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400">
              NyaySevak combines a verified lawyer directory, instant service booking, comprehensive legal resources,
              court information, and real-time support — all designed to make India&apos;s legal system accessible to everyone.
            </p>
          </div>
        </div>
        <div className="section-separator" />
      </div>

      {/* Each feature gets its OWN full-width section — alternating dark/cream */}
      {platformFeatures.map((feature, i) => {
        const isDark = i % 2 === 0;
        const FeatureIcon = lucideFeatureIcons[feature.slug] || HelpCircle;
        return (
          <div key={feature.slug} className={`relative overflow-hidden ${isDark ? "bg-cream" : "bg-dark dark-section-depth"}`}>
            {!isDark && (
              <div className="pointer-events-none absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
            )}
            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
              <div className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Icon + Number side */}
                <div className="lg:w-1/3 flex flex-col items-center justify-center gap-4">
                  <div className={isDark ? "icon-box-cream h-16 w-16 rounded-2xl flex items-center justify-center" : "icon-gold h-16 w-16 rounded-2xl flex items-center justify-center"}>
                    <FeatureIcon className={`h-7 w-7 ${isDark ? "text-gold-dark" : "text-black"}`} strokeWidth={1.5} />
                  </div>
                  <span className={`text-[6rem] font-heading font-bold leading-none select-none ${isDark ? "text-gold/[0.08]" : "text-gold/[0.06]"}`}>
                    0{i + 1}
                  </span>
                </div>

                {/* Content side */}
                <div className="lg:w-2/3">
                  <Link href={`/features/${feature.slug}`} className="group">
                    <h3 className={`text-2xl sm:text-3xl font-heading font-bold tracking-tight lg:text-4xl transition-colors ${isDark ? "text-gray-900 group-hover:text-gold-dark heading-glow-cream" : "text-white group-hover:text-gold heading-glow"}`}>
                      {feature.title}
                    </h3>
                  </Link>
                  <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className={`flex items-start gap-3 text-sm ${isDark ? "text-gray-600" : "text-gray-400"}`}>
                        <CircleCheck className={`h-4 w-4 mt-0.5 shrink-0 ${isDark ? "text-gold-dark/60" : "text-gold/60"}`} strokeWidth={1.5} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/features/${feature.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Additional features — glass cards */}
      <div className="relative bg-dark-deep py-20 lg:py-28 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">And More</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <h2 className="text-center text-3xl font-heading font-bold text-white heading-glow lg:text-4xl mb-12">
            Additional Platform Capabilities
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additionalFeatures.map((f) => (
              <div key={f.title} className="glass-card !rounded-xl p-5 sm:p-6 hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-box-dark h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                    <f.Icon className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm font-semibold text-white">{f.title}</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security — Cream with glass treatment */}
      <div className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="glass-cream p-8 sm:p-12 text-center">
            <div className="icon-box-cream h-14 w-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-6 w-6 text-gold-dark" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 heading-glow-cream">
              Built on Trust & Security
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 leading-relaxed">
              Your data, documents, and communications are protected by industry-leading security standards.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {securityItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-lg bg-gold/[0.08] border border-gold/15 px-4 py-2.5 text-sm text-gray-700 font-medium">
                  <Lock className="h-3.5 w-3.5 text-gold-dark/60" strokeWidth={1.5} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA — Dark Premium */}
      <div className="relative bg-dark-deep py-20 lg:py-28 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow lg:text-4xl">
                Experience NyaySevak Today
              </h3>
              <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-400 leading-relaxed">
                Join India&apos;s first complete legal ecosystem and get access to all features.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:text-gold"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
