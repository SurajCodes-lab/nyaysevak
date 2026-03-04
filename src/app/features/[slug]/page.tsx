import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Shield, Clock, Users, Star,
  CircleCheck, ChevronRight, BadgeCheck, HelpCircle, Phone,
  Search, CalendarCheck, BookOpen, Landmark, MessageCircle, Sparkles,
  Zap, Globe, Lock, HeartHandshake,
} from "lucide-react";
import { platformFeatures } from "@/data/features";
import { notFound } from "next/navigation";

const lucideFeatureIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "lawyer-directory": Users,
  "service-booking": CalendarCheck,
  "legal-guides-resources": BookOpen,
  "court-tribunal-information": Landmark,
  "faq-sections": HelpCircle,
  "whatsapp-integration": MessageCircle,
};

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

const featureContent: Record<string, { longDesc: string; howItWorks: { title: string; desc: string }[]; highlights: { label: string; desc: string }[]; whyChoose: string[]; faqs: { q: string; a: string }[] }> = {
  "lawyer-directory": {
    longDesc: "NyaySevak's Lawyer Directory is the most comprehensive, verified database of legal professionals in India. Every lawyer on our platform undergoes Bar Council registration verification, ensuring you only connect with legitimate, qualified advocates. Our advanced search engine lets you filter by practice area, court, location, language, fee range, and availability — making it effortless to find the perfect lawyer for your specific legal need.",
    howItWorks: [
      { title: "Enter Your Legal Need", desc: "Describe your matter or browse by practice area to start your search." },
      { title: "Apply Smart Filters", desc: "Narrow results by location, court, language, fee range, and availability." },
      { title: "Review Verified Profiles", desc: "Check detailed lawyer profiles with Bar Council verification and credentials." },
      { title: "Compare Side-by-Side", desc: "Compare multiple lawyers on experience, fees, ratings, and specializations." },
      { title: "Read Client Reviews", desc: "Check genuine client feedback and success metrics for each lawyer." },
      { title: "Book & Connect", desc: "Book a consultation or hire directly through the secure NyaySevak platform." },
    ],
    highlights: [
      { label: "1,000+ Verified Lawyers", desc: "Bar Council verified professionals across India" },
      { label: "26 Practice Areas", desc: "Complete coverage of all legal specializations" },
      { label: "15+ Languages", desc: "Lawyers available in major Indian languages" },
      { label: "Quarterly Verification", desc: "Profiles updated and verified every quarter" },
      { label: "Under 2 Hour Response", desc: "Average response time for urgent matters" },
      { label: "Pan-India Coverage", desc: "Supreme Court to District Courts across India" },
    ],
    whyChoose: [
      "Every lawyer undergoes rigorous Bar Council registration verification before listing",
      "Transparent profiles with real client reviews, ratings, and success metrics",
      "Advanced search with 10+ filter parameters for precise lawyer matching",
      "Side-by-side comparison tool to evaluate multiple lawyers simultaneously",
      "Secure in-platform communication and document sharing",
      "100% satisfaction guarantee — if unhappy, we rematch you for free",
    ],
    faqs: [
      { q: "How do you verify lawyers on the platform?", a: "Every lawyer undergoes a multi-step verification process: Bar Council registration check, identity verification, qualification validation, and reference checks. We also verify their court enrollment and practice history." },
      { q: "Can I search for lawyers who speak my language?", a: "Yes. Our directory supports filtering by 15+ Indian languages including Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and more." },
      { q: "How are lawyer ratings calculated?", a: "Ratings are based on verified client reviews, case outcomes, response times, professionalism scores, and peer recommendations. Only clients who have actually engaged a lawyer can leave a review." },
      { q: "Is there a cost to search the directory?", a: "Browsing and searching the directory is completely free. You only pay when you book a consultation or engage a lawyer's services." },
    ],
  },
  "service-booking": {
    longDesc: "Booking legal services should be as easy as booking a doctor's appointment. NyaySevak's Service Booking system allows you to schedule consultations, document services, and legal aid — all with transparent, upfront pricing and flexible scheduling. Our platform handles everything from slot selection to payment processing, reminders, and follow-ups.",
    howItWorks: [
      { title: "Select Your Service", desc: "Choose from consultations, document services, representation, and more." },
      { title: "Choose a Lawyer", desc: "Pick a verified lawyer or let our AI match you with the best fit." },
      { title: "Pick a Time Slot", desc: "Select instant availability or schedule for a convenient future time." },
      { title: "Transparent Pricing", desc: "See exact costs upfront before confirming — zero hidden charges." },
      { title: "Get Confirmations", desc: "Receive instant booking confirmation with automated reminders." },
      { title: "Connect & Follow Up", desc: "Join via your preferred mode with post-consultation support." },
    ],
    highlights: [
      { label: "Same-Day Booking", desc: "Available for urgent legal matters" },
      { label: "Zero Hidden Fees", desc: "Complete price transparency guaranteed" },
      { label: "Secure Payments", desc: "Bank-grade encrypted payment gateway" },
      { label: "Free Rescheduling", desc: "Flexible rescheduling up to 4 hours before" },
      { label: "Auto Reminders", desc: "Email and SMS appointment notifications" },
      { label: "Post-Session Support", desc: "Follow-up assistance after consultation" },
    ],
    whyChoose: [
      "Transparent, upfront pricing displayed before you commit to any booking",
      "Multiple communication modes: video call, audio call, chat, and in-person",
      "Instant booking for urgent matters — connect with a lawyer within minutes",
      "Bank-grade payment security with SSL encryption and PCI compliance",
      "Free rescheduling and hassle-free cancellation policies",
      "Automated reminders and follow-up support after every session",
    ],
    faqs: [
      { q: "How quickly can I book a consultation?", a: "For urgent matters, you can connect with a lawyer within minutes through our instant booking feature. For scheduled appointments, you can book slots as early as 30 minutes from now." },
      { q: "What payment methods are accepted?", a: "We accept UPI, debit/credit cards, net banking, and popular wallets like Paytm and PhonePe. All payments are processed through our secure, PCI-compliant gateway." },
      { q: "What if I need to cancel my booking?", a: "You can cancel free of charge up to 4 hours before your appointment. Cancellations within 4 hours may be subject to a nominal fee depending on the lawyer's policy." },
      { q: "Can I book for someone else (family member)?", a: "Yes. During booking, you can specify that the consultation is for another person. The lawyer will be informed accordingly." },
    ],
  },
  "legal-guides-resources": {
    longDesc: "Legal literacy is the foundation of empowerment. NyaySevak's Legal Guides & Resources section is a comprehensive knowledge hub covering all aspects of Indian law — from simple explainers on filing RTI applications to in-depth analyses of corporate governance requirements. Every guide is written by practicing lawyers and reviewed by senior advocates.",
    howItWorks: [
      { title: "Browse by Category", desc: "Explore guides organized by 26 practice areas for easy navigation." },
      { title: "Search by Topic", desc: "Use our search to find specific answers to your legal questions." },
      { title: "Read Expert Content", desc: "Articles written by practicing lawyers in plain, accessible language." },
      { title: "Follow Step-by-Step Guides", desc: "Process guides walk you through legal procedures with clarity." },
      { title: "Access Legal Repository", desc: "Browse acts, statutes, and case law summaries in one place." },
      { title: "Connect if Needed", desc: "Seamlessly connect with a lawyer for personalized advice." },
    ],
    highlights: [
      { label: "500+ Legal Guides", desc: "Comprehensive articles covering all areas" },
      { label: "26 Practice Areas", desc: "Complete topical coverage of Indian law" },
      { label: "Regular Updates", desc: "New laws, amendments, and case summaries" },
      { label: "Bilingual Content", desc: "Available in English and Hindi" },
      { label: "Process Guides", desc: "Step-by-step legal procedure walkthroughs" },
      { label: "Free Access", desc: "All educational content is completely free" },
    ],
    whyChoose: [
      "Content written by practicing lawyers and reviewed by senior legal experts",
      "Plain-language explanations that make complex legal concepts accessible",
      "Step-by-step process guides for common legal procedures and applications",
      "Regular updates reflecting the latest amendments and court rulings",
      "Comprehensive acts and statutes repository with easy search",
      "Free access to all educational content — no registration required",
    ],
    faqs: [
      { q: "Who writes the legal guides?", a: "All guides are written by practicing lawyers with expertise in the relevant practice area. Each article is reviewed by a senior advocate before publication to ensure accuracy." },
      { q: "How often is the content updated?", a: "We update content regularly — especially when new laws are enacted, amendments are made, or significant court judgments are passed. Major guides are reviewed quarterly." },
      { q: "Are the guides available in regional languages?", a: "Currently our guides are available in English and Hindi. We are working on adding Tamil, Telugu, Bengali, and other regional languages in the coming months." },
      { q: "Can I suggest a topic for a guide?", a: "Yes! We welcome topic suggestions from our users. Use the feedback form on the resources page or contact us directly." },
    ],
  },
  "court-tribunal-information": {
    longDesc: "India's judicial system is vast and complex with thousands of courts and tribunals. NyaySevak's Court & Tribunal Information feature provides detailed, structured information about every judicial institution in the country. For each court, you'll find jurisdiction details, bench locations, types of cases handled, filing procedures, fee structures, and verified lawyer availability.",
    howItWorks: [
      { title: "Select Court Type", desc: "Choose from Supreme Court, High Courts, District Courts, or Tribunals." },
      { title: "Browse by Location", desc: "Filter by state, city, or jurisdiction to find relevant courts." },
      { title: "View Detailed Info", desc: "See jurisdiction, bench locations, case types, and filing details." },
      { title: "Check Procedures", desc: "Access filing procedures, required documents, and fee structures." },
      { title: "Find Enrolled Lawyers", desc: "See verified lawyers who practice at your selected court." },
      { title: "Book Representation", desc: "Hire a lawyer directly from the court information page." },
    ],
    highlights: [
      { label: "25 High Courts", desc: "Complete coverage with bench details" },
      { label: "700+ District Courts", desc: "All 36 states and UTs covered" },
      { label: "20+ Tribunal Types", desc: "Financial, tax, regulatory, and more" },
      { label: "Arbitration Centres", desc: "All major arbitration institutions" },
      { label: "Filing Guides", desc: "Procedures and checklists for each court" },
      { label: "Direct Booking", desc: "Hire lawyers for any court instantly" },
    ],
    whyChoose: [
      "The most comprehensive court database covering India's entire judicial system",
      "Detailed information for every court: jurisdiction, benches, procedures, and fees",
      "Direct integration with our lawyer directory for instant representation booking",
      "Filing procedure guides with required documents checklist for each court type",
      "Regular updates to reflect new tribunal establishments and jurisdiction changes",
      "Free access — navigate India's judicial system with confidence",
    ],
    faqs: [
      { q: "Does the database cover all courts in India?", a: "Yes. We cover the Supreme Court, all 25 High Courts with bench locations, 700+ District Courts across 36 states and UTs, 20+ tribunal categories, and all major arbitration centres." },
      { q: "How accurate is the filing procedure information?", a: "Filing procedures are compiled by lawyers practicing in each court and updated regularly. However, we always recommend confirming with your advocate as procedures may change." },
      { q: "Can I find lawyers for a specific court?", a: "Yes. Each court page shows verified lawyers who are enrolled and actively practicing at that court, making it easy to find representation." },
      { q: "Is fee structure information included?", a: "Yes, we provide general court fee guidelines for common filing types. Actual fees may vary, and your lawyer will advise on the exact court fees applicable to your matter." },
    ],
  },
  "faq-sections": {
    longDesc: "Legal questions shouldn't require a lawyer just to understand the basics. NyaySevak's FAQ Sections provide quick, plain-language answers to the most common legal questions across every practice area. Whether you want to know your rights in a property dispute, understand the bail process, or learn about consumer complaint procedures — our FAQs give you clarity in minutes.",
    howItWorks: [
      { title: "Browse by Practice Area", desc: "FAQs are organized into 26 legal categories for easy navigation." },
      { title: "Search by Keyword", desc: "Type your question to instantly find relevant answers." },
      { title: "Read Clear Answers", desc: "Get concise, jargon-free responses written by legal experts." },
      { title: "Explore Related Guides", desc: "Follow links to detailed articles for deeper understanding." },
      { title: "Bookmark Favorites", desc: "Save frequently accessed FAQs for quick future reference." },
      { title: "Ask a Lawyer", desc: "If you need more clarity, connect with a lawyer directly." },
    ],
    highlights: [
      { label: "26 Legal Categories", desc: "FAQs covering all practice areas" },
      { label: "Jargon-Free Language", desc: "Simple, accessible explanations" },
      { label: "Regular Updates", desc: "Reflecting latest legal changes" },
      { label: "Deep-Linked Resources", desc: "Connected to detailed guides" },
      { label: "Smart Search", desc: "Find answers by keyword instantly" },
      { label: "Free Access", desc: "All FAQ content is free for everyone" },
    ],
    whyChoose: [
      "Answers written by practicing lawyers in simple, accessible language",
      "Organized by 26 practice areas for easy discovery of relevant questions",
      "Smart keyword search that understands legal terminology and common language",
      "Deep-linked to comprehensive guides for those who want detailed explanations",
      "Regularly updated to reflect new laws, amendments, and court decisions",
      "Free and instantly accessible — no signup or registration required",
    ],
    faqs: [
      { q: "How reliable are the FAQ answers?", a: "All FAQ answers are written by lawyers with expertise in the relevant practice area and reviewed for accuracy. They are intended as general guidance — for specific legal advice, we recommend consulting a lawyer." },
      { q: "How often are FAQs updated?", a: "We review and update FAQs regularly, especially when significant legal changes occur such as new legislation, important court rulings, or procedural changes." },
      { q: "Can I submit a question for the FAQ?", a: "Yes! If you have a legal question that isn't covered, you can submit it through our platform. Common questions are added to the FAQ after expert review." },
      { q: "Are FAQs available in Hindi?", a: "Yes, our most popular FAQs are available in both English and Hindi. We're expanding to more regional languages progressively." },
    ],
  },
  "whatsapp-integration": {
    longDesc: "For millions of Indians, WhatsApp is the most natural communication tool. NyaySevak's WhatsApp Integration brings legal services to where you already are — enabling instant query resolution, document sharing, appointment booking, case status updates, and notifications through a simple chat interface. No app downloads, no complex portals — just message us.",
    howItWorks: [
      { title: "Save Our Number", desc: "Add our WhatsApp number or scan the QR code to connect." },
      { title: "Send Your Query", desc: "Describe your legal need or ask any question in your language." },
      { title: "Get Instant Response", desc: "Our team responds promptly with guidance and next steps." },
      { title: "Share Documents", desc: "Securely send photos of documents for quick review." },
      { title: "Book Appointments", desc: "Schedule lawyer consultations directly through WhatsApp chat." },
      { title: "Get Updates", desc: "Receive case status notifications and hearing reminders." },
    ],
    highlights: [
      { label: "10+ Indian Languages", desc: "Chat in your preferred language" },
      { label: "Instant Responses", desc: "Quick replies during business hours" },
      { label: "Secure Sharing", desc: "End-to-end encrypted document exchange" },
      { label: "Chat Booking", desc: "Book appointments through conversation" },
      { label: "Case Notifications", desc: "Status updates and hearing alerts" },
      { label: "7-Day Availability", desc: "Support available throughout the week" },
    ],
    whyChoose: [
      "No app downloads or complex registration — just start a WhatsApp chat",
      "Communicate in 10+ Indian languages for maximum accessibility",
      "End-to-end encryption ensures your legal matters stay completely private",
      "Seamless booking and scheduling directly through the chat interface",
      "Proactive case status updates and hearing date reminders",
      "Available 7 days a week with quick response during business hours",
    ],
    faqs: [
      { q: "Is my WhatsApp conversation secure?", a: "Yes. WhatsApp provides end-to-end encryption for all messages and documents. Additionally, our team follows strict confidentiality protocols. Your legal matters are completely private." },
      { q: "Can I send documents via WhatsApp for review?", a: "Yes. You can share photos of documents, agreements, court orders, and other papers for quick review. For sensitive documents, we recommend using our secure portal as an additional safeguard." },
      { q: "What languages are supported on WhatsApp?", a: "You can chat in Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and several other Indian languages. Our team will respond in your preferred language." },
      { q: "Is there a cost for WhatsApp consultations?", a: "Initial queries and basic guidance via WhatsApp are free. If your matter requires a detailed consultation with a specialist lawyer, the consultation fee (displayed upfront) applies." },
    ],
  },
};

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = platformFeatures.find((f) => f.slug === slug);
  if (!feature) notFound();

  const content = featureContent[slug] || {
    longDesc: feature.description,
    howItWorks: feature.bullets.map((b) => ({ title: b, desc: "" })),
    highlights: [],
    whyChoose: [],
    faqs: [],
  };

  const FeatureIcon = lucideFeatureIcons[slug] || Sparkles;

  const idx = platformFeatures.findIndex((f) => f.slug === slug);
  const others = platformFeatures.filter((_, i) => i !== idx).slice(0, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com/" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://nyaysevak.com/features" },
      { "@type": "ListItem", position: 3, name: feature.title, item: `https://nyaysevak.com/features/${slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero — Dark Premium ── */}
      <section className="relative bg-dark-deep overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 pt-32 sm:pt-36 pb-16 sm:pb-20">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-600" />
            <Link href="/features" className="transition-colors hover:text-gold">Features</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-600" />
            <span className="text-gold font-medium">{feature.title}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="icon-gold h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex items-center justify-center shrink-0">
              <FeatureIcon className="h-8 w-8 sm:h-10 sm:w-10 text-black" strokeWidth={1.5} />
            </div>

            <div className="flex-1">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">Platform Feature</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white heading-glow">{feature.title}</h1>
              <p className="mt-3 text-base text-gray-400 max-w-2xl">{feature.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                  <Zap className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                  Fast & Reliable
                </span>
                <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                  <Globe className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                  Pan-India Access
                </span>
                <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                  <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                  Secure & Private
                </span>
                <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                  <HeartHandshake className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                  Free to Try
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-separator" />
      </section>

      {/* ── About This Feature ── */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="glass-cream p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-box-cream h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                <BookOpen className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-heading font-bold text-gray-900">About {feature.title}</h2>
                <p className="mt-2 text-sm text-gray-500">A detailed overview of this feature</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">{content.longDesc}</p>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="relative bg-dark-deep py-16 sm:py-20 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">Capabilities</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-4">
            Key Features
          </h2>
          <p className="text-sm text-gray-400 mb-10 max-w-2xl">Everything {feature.title.toLowerCase()} offers to make your legal journey smoother.</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {feature.bullets.map((b, i) => (
              <div key={i} className="glass-card !rounded-xl p-5 sm:p-6 group hover:border-gold/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="icon-box-dark h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                    <CircleCheck className="h-4 w-4 text-gold/80" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed pt-2">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-gold-dark/70 font-bold shrink-0">Step by Step</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
          <h3 className="text-center text-2xl sm:text-3xl font-heading font-bold text-gray-900 heading-glow-cream mb-10">
            How It Works
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.howItWorks.map((step, i) => (
              <div key={i} className="glass-cream p-6 sm:p-7 relative">
                {/* Watermark step number */}
                <span className="absolute top-4 right-5 text-4xl font-heading font-bold text-gold/[0.07] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-box-cream h-9 w-9 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xs font-heading font-bold text-gold-dark">{i + 1}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900">{step.title}</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      {content.highlights.length > 0 && (
        <section className="relative bg-dark py-16 sm:py-20 overflow-hidden">
          <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">By the Numbers</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-10">
              Feature Highlights
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.highlights.map((h, i) => (
                <div key={i} className="glass-card !rounded-xl p-5 sm:p-6 hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    <h3 className="text-sm font-semibold text-white">{h.label}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Why Choose ── */}
      {content.whyChoose.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <h2 className="text-xs uppercase tracking-[0.3em] text-gold-dark/70 font-bold shrink-0">Why NyaySevak</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </div>
            <h3 className="text-center text-2xl sm:text-3xl font-heading font-bold text-gray-900 heading-glow-cream mb-10">
              Why Choose NyaySevak&apos;s {feature.title}
            </h3>

            <div className="glass-cream p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {content.whyChoose.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <CircleCheck className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {content.faqs.length > 0 && (
        <section className="relative bg-dark-deep py-16 sm:py-20 overflow-hidden dark-section-depth">
          <div className="pointer-events-none absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">Common Questions</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-10">
              Frequently Asked Questions
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {content.faqs.map((faq, i) => (
                <div key={i} className="faq-card-dark p-5 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="icon-box-dark h-8 w-8 rounded-lg flex items-center justify-center shrink-0">
                      <HelpCircle className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-sm font-semibold text-white pt-1">{faq.q}</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed ml-11">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="glass-cream p-8 sm:p-12">
            <div className="icon-box-cream h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FeatureIcon className="h-7 w-7 text-gold-dark" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 heading-glow-cream">
              Try {feature.title} Now
            </h2>
            <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-500 leading-relaxed">
              Experience this feature and all other powerful tools on NyaySevak — India&apos;s first complete legal ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300">
                Get Started
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link href="/features" className="inline-flex items-center gap-2 text-sm text-gold-dark font-semibold hover:text-gold transition-colors">
                Explore All Features
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Features ── */}
      <section className="relative bg-dark py-16 sm:py-20 overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <h3 className="mb-10 text-center text-xl font-heading font-bold text-white heading-glow">Explore More Features</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((f) => {
              const OtherIcon = lucideFeatureIcons[f.slug] || Sparkles;
              return (
                <Link key={f.slug} href={`/features/${f.slug}`} className="glass-card !rounded-xl p-5 sm:p-6 group hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-box-dark h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                      <OtherIcon className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{f.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{f.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gold/60 font-medium">
                    <span>Explore Feature</span>
                    <ArrowRight className="h-3 w-3" strokeWidth={2} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
