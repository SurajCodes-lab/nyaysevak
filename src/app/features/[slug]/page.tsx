import type { Metadata } from "next";
import Link from "next/link";
import { platformFeatures } from "@/data/features";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return platformFeatures.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const feature = platformFeatures.find((f) => f.slug === slug);
  if (!feature) return { title: "Not Found | NyaySevak" };

  return {
    title: `${feature.title} - Platform Feature | NyaySevak India`,
    description: `${feature.description} ${feature.bullets.join(". ")}. Available on NyaySevak — India's first complete legal ecosystem.`,
    keywords: `${feature.title.toLowerCase()}, NyaySevak feature, legal platform India`,
    openGraph: {
      title: `${feature.title} | NyaySevak Platform Feature`,
      description: feature.description,
      type: "website",
    },
  };
}

const featureContent: Record<string, { longDesc: string; howItWorks: string[]; highlights: string[] }> = {
  "lawyer-directory": {
    longDesc: "NyaySevak's Lawyer Directory is the most comprehensive, verified database of legal professionals in India. Every lawyer on our platform undergoes Bar Council registration verification, ensuring you only connect with legitimate, qualified advocates. Our advanced search engine lets you filter by practice area, court, location, language, fee range, and availability — making it effortless to find the perfect lawyer for your specific legal need.",
    howItWorks: ["Enter your legal need or browse by practice area", "Apply filters for location, court, language, and fee range", "Review detailed lawyer profiles with verified credentials", "Compare multiple lawyers side-by-side", "Read client reviews and check success metrics", "Book a consultation or hire directly through the platform"],
    highlights: ["1000+ verified lawyers across India", "All 26 practice areas covered", "Lawyers available in 15+ Indian languages", "Profiles updated and verified quarterly", "Average response time under 2 hours", "Covers Supreme Court to District Courts"],
  },
  "service-booking": {
    longDesc: "Booking legal services should be as easy as booking a doctor's appointment. NyaySevak's Service Booking system allows you to schedule consultations, document services, and legal aid — all with transparent, upfront pricing and flexible scheduling.",
    howItWorks: ["Select the type of legal service you need", "Choose a verified lawyer or let us match you", "Pick a time slot — instant or scheduled", "Confirm booking with transparent pricing shown upfront", "Receive confirmation and automated reminders", "Connect at the scheduled time via your preferred mode"],
    highlights: ["Same-day booking available for urgent matters", "Zero hidden fees", "Secure payment gateway", "Free rescheduling up to 4 hours before appointment", "Automated email and SMS reminders", "Post-consultation feedback and follow-up support"],
  },
  "legal-guides-resources": {
    longDesc: "Legal literacy is the foundation of empowerment. NyaySevak's Legal Guides & Resources section is a comprehensive knowledge hub covering all aspects of Indian law — from simple explainers on filing RTI applications to in-depth analyses of corporate governance requirements.",
    howItWorks: ["Browse guides by practice area or search by topic", "Read expert-written articles in plain language", "Follow step-by-step process guides for legal procedures", "Access the acts and statutes repository", "Check case law summaries for relevant precedents", "Connect with a lawyer for personalized advice if needed"],
    highlights: ["500+ legal guides and articles", "Covering all 26 practice areas", "Regular updates with new laws and amendments", "Available in English and Hindi", "Step-by-step process guides included", "Free access for all users"],
  },
  "court-tribunal-information": {
    longDesc: "India's judicial system is vast and complex. NyaySevak's Court & Tribunal Information feature provides detailed, structured information about every judicial institution in the country. For each court, you'll find jurisdiction details, bench locations, types of cases handled, filing procedures, fee structures, and lawyer availability.",
    howItWorks: ["Select the type of court or tribunal", "Browse by state, city, or jurisdiction", "View detailed information about the selected court", "Check filing procedures and fee structures", "Find verified lawyers enrolled in that court", "Book representation directly from the court page"],
    highlights: ["Covers all 25 High Courts with bench details", "700+ District Courts across 36 states and UTs", "20+ Tribunal categories", "All major arbitration centres", "Filing procedure guides for each court type", "Direct lawyer booking for any court"],
  },
  "faq-sections": {
    longDesc: "Legal questions shouldn't require a lawyer just to understand the basics. NyaySevak's FAQ Sections provide quick, plain-language answers to the most common legal questions across every practice area.",
    howItWorks: ["Browse FAQs by practice area category", "Search for specific questions or keywords", "Read concise answers in plain language", "Follow links to detailed guides for more information", "Bookmark frequently accessed FAQs", "Contact a lawyer for personalized clarification"],
    highlights: ["Covering all 26 practice area categories", "Written in simple, jargon-free language", "Regularly updated with latest legal changes", "Links to detailed resources and guides", "Searchable by keyword", "Free access for all users"],
  },
  "whatsapp-integration": {
    longDesc: "For millions of Indians, WhatsApp is the most natural communication tool. NyaySevak's WhatsApp Integration brings legal services to where you already are — enabling instant query resolution, document sharing, appointment booking, case status updates, and notifications through a simple chat interface.",
    howItWorks: ["Save our WhatsApp number or scan the QR code", "Send your legal query or request", "Receive instant response from our team", "Share documents for quick review or verification", "Book appointments and receive confirmations", "Get case status updates and hearing reminders"],
    highlights: ["Available in 10+ Indian languages", "Instant response during business hours", "Secure document sharing and verification", "Appointment booking through chat", "Case status notifications and reminders", "Available 7 days a week"],
  },
};

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = platformFeatures.find((f) => f.slug === slug);
  if (!feature) notFound();

  const content = featureContent[slug] || {
    longDesc: feature.description,
    howItWorks: feature.bullets,
    highlights: [],
  };

  const idx = platformFeatures.findIndex((f) => f.slug === slug);
  const others = platformFeatures.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero — Dark */}
      <div className="bg-black pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <nav className="mb-10 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/features" className="transition-colors hover:text-gold">Features</Link>
            <span>/</span>
            <span className="text-gold">{feature.title}</span>
          </nav>

          <h1 className="text-4xl font-heading font-bold text-white lg:text-5xl">{feature.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">{feature.description}</p>
        </div>
      </div>

      {/* Long Description — Cream */}
      <div className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="border-l-2 border-gold pl-8">
            <p className="text-base leading-relaxed text-gray-600">{content.longDesc}</p>
          </div>
        </div>
      </div>

      {/* Key Features — Dark */}
      <div className="bg-dark py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-heading font-bold text-white">Key Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {feature.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <span className="text-sm font-heading font-bold text-gold/40">{String(i + 1).padStart(2, "0")}.</span>
                <span className="text-sm text-gray-300">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works — Cream */}
      <div className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-heading font-bold text-gray-900">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.howItWorks.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-gold/10 text-xs font-bold text-gold-dark">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-600 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights — Dark */}
      {content.highlights.length > 0 && (
        <div className="bg-black py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="mb-10 text-2xl font-heading font-bold text-white">Highlights</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 border-l border-gold/20 pl-4">
                  <span className="text-sm text-gray-300">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA — Cream */}
      <div className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900">
            Try {feature.title} Now
          </h2>
          <p className="mx-auto mt-4 mb-8 max-w-lg text-gray-500">Experience this feature and more on NyaySevak.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light">
            Get Started
          </Link>
        </div>
      </div>

      {/* Other Features — Dark */}
      <div className="bg-dark py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h3 className="mb-10 text-center text-xl font-heading font-bold text-white">Explore More Features</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {others.map((f) => (
              <Link key={f.slug} href={`/features/${f.slug}`} className="group border border-white/5 p-6 transition-colors hover:border-gold/30">
                <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{f.title}</h4>
                <p className="mt-2 text-xs text-gray-500">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
