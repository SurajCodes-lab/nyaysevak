import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import ScrollToTop from "@/components/ScrollToTop";
import ContactModal from "@/components/ContactModal";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingContactBar from "@/components/FloatingContactBar";
import EngagementTracker from "@/components/EngagementTracker";
import ExitIntentModal from "@/components/ExitIntentModal";
import { ContactModalProvider } from "@/context/ContactModalContext";

// Week 21 CWV: weights trimmed to those actually used — no font-black (900)
// or font-light (300) class appears anywhere in src, so those files were
// downloaded on every page for nothing. Two fewer font files per visit.
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LegalService"],
  "@id": "https://www.nyaysevak.com/#organization",
  name: "NyaySevak",
  legalName: "NyaySevak",
  // Week 15: explicit entity disambiguation. An established competitor,
  // nyayasevak.com (extra "a"), dominates the brand SERP and Google conflates
  // the two near-identical names. disambiguatingDescription is the schema field
  // designed to separate same-name entities; brand + knowsLanguage add corroborating
  // entity facts. The real disambiguation lever is OFF-SITE (GBP, Wikidata, owned
  // social profiles, consistent NAP) — see docs/06 + docs/03.
  disambiguatingDescription:
    "NyaySevak (nyaysevak.com) is an online platform that matches individuals and " +
    "businesses across India with verified, independent advocates. It is operated " +
    "independently and is not affiliated with any similarly named service.",
  knowsLanguage: ["en-IN", "hi-IN"],
  brand: { "@type": "Brand", name: "NyaySevak", url: "https://www.nyaysevak.com" },
  // Week 8: expanded alternateName so search engines and AI engines
  // associate every common user-vocabulary brand variant with this entity.
  // Only genuine forms of OUR OWN brand. The previous list included competitor
  // spellings ("Nyaya Sevak", "Nyayasevak") and random misspellings — that
  // REINFORCES Google conflating us with the established nyayasevak.com instead
  // of separating the two entities. Keep this list strictly to real variants
  // of nyaysevak.
  alternateName: [
    "NyaySevak Legal Services",
    "NyaySevak Lawyers",
    "NyaySevak Advocates",
    "NyaySevak.com",
    "Nyay Sevak",
    "न्याय सेवक",
  ],
  description:
    "India's complete legal ecosystem. Access the Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals & Arbitration centres. Complete A-Z legal services for individuals and businesses.",
  url: "https://www.nyaysevak.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.nyaysevak.com/logo.png",
    width: 800,
    height: 800,
  },
  image: "https://www.nyaysevak.com/logo.png",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "NyaySevak Team",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
    "@id": "https://en.wikipedia.org/wiki/India",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  // Week 8: serviceType expanded with the user-search vocabulary
  // ("Property Lawyer", "Divorce Lawyer", "Criminal Lawyer" etc.) alongside
  // the original entity-name service categories. Surfaces the brand for
  // searches that name the lawyer-type rather than the service-name.
  serviceType: [
    "Legal Consultation",
    "Lawyer Hiring",
    "Document Services",
    "Corporate Legal Advisory",
    "Compliance Management",
    "Contract Management",
    "IP Management",
    "Litigation Management",
    "Arbitration & ADR",
    "E-filing Assistance",
    "Legal Aid",
    // User-vocabulary lawyer-type variants
    "Criminal Lawyer Services",
    "Civil Lawyer Services",
    "Divorce Lawyer Services",
    "Family Lawyer Services",
    "Property Lawyer Services",
    "Real Estate Lawyer Services",
    "Corporate Lawyer Services",
    "Business Lawyer Services",
    "Cyber Crime Lawyer Services",
    "Tax Lawyer Services",
    "GST Lawyer Services",
    "Consumer Court Lawyer Services",
    "Labour Lawyer Services",
    "IP Lawyer Services",
    "Trademark Lawyer Services",
    "Patent Lawyer Services",
    "Banking Lawyer Services",
    "Cheque Bounce Lawyer Services",
    "Arbitration Lawyer Services",
    "PMLA Defence Lawyer Services",
    "NDPS Lawyer Services",
    "CBI Case Lawyer Services",
    "Medical Negligence Lawyer Services",
    "Constitutional Lawyer Services",
    "Bail Lawyer Services",
    "Online Lawyer Consultation",
    "Case Assessment",
  ],
  knowsAbout: [
    "Indian Law",
    "Supreme Court of India",
    "High Courts of India",
    "District Courts",
    "Tribunals",
    "Arbitration",
    "Corporate Law",
    "Criminal Law",
    "Civil Law",
    "Family Law",
    "Property Law",
    "Intellectual Property",
    "Bail Application Process",
    "Legal Documentation India",
    "Court Filing Procedures",
    "NCLT Proceedings",
    "Consumer Disputes",
    "Divorce Proceedings India",
  ],
  slogan: "Defending Your Rights",
  sameAs: [
    // Week 15: removed twitter/x.com/nyaysevak and linkedin.com/company/nyaysevak
    // — both return 404 (the profiles do not exist). A sameAs pointing at a dead
    // URL is a negative trust signal and weakens entity disambiguation. Only
    // profiles confirmed live (HTTP 200) remain. Re-add others once created.
    "https://www.facebook.com/nyaysevak",
    "https://www.instagram.com/nyaysevak",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9868666715",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "B2C Legal Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawyer Consultation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Find & Hire Lawyers" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Document Services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Legal Aid" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "B2B Legal Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Legal Advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compliance Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Litigation Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "M&A Support" } },
        ],
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.nyaysevak.com/#website",
  name: "NyaySevak",
  alternateName: "NyaySevak - Defending Your Rights",
  url: "https://www.nyaysevak.com",
  publisher: { "@id": "https://www.nyaysevak.com/#organization" },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.nyaysevak.com/practice-areas?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Week 4: SiteNavigationElement for sitelinks in Google SERPs
const siteNavigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Main Navigation",
  url: "https://www.nyaysevak.com",
  hasPart: [
    { "@type": "SiteNavigationElement", name: "Legal Services", url: "https://www.nyaysevak.com/services", description: "B2B & B2C legal services for individuals and businesses" },
    { "@type": "SiteNavigationElement", name: "Practice Areas", url: "https://www.nyaysevak.com/practice-areas", description: "29 practice areas covering every domain of Indian law" },
    { "@type": "SiteNavigationElement", name: "Court Coverage", url: "https://www.nyaysevak.com/courts", description: "Supreme Court, 25 High Courts, 700+ District Courts & Tribunals" },
    { "@type": "SiteNavigationElement", name: "Platform Features", url: "https://www.nyaysevak.com/features", description: "Verified lawyer matching and legal services platform features" },
    { "@type": "SiteNavigationElement", name: "About NyaySevak", url: "https://www.nyaysevak.com/about", description: "About India's premier legal services platform" },
    { "@type": "SiteNavigationElement", name: "Contact Us", url: "https://www.nyaysevak.com/contact", description: "Get in touch for legal consultation" },
  ],
};

// Week 4: ProfessionalService schema for enhanced business listing
const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.nyaysevak.com/#professionalservice",
  name: "NyaySevak Legal Services",
  description: "India's complete legal ecosystem offering verified lawyer consultation, document services, corporate advisory, and court representation across all Indian courts and tribunals.",
  url: "https://www.nyaysevak.com",
  telephone: "+91-9868666715",
  email: "nyaysevak@gmail.com",
  image: "https://www.nyaysevak.com/logo.png",
  priceRange: "Free - ₹₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6139,
    longitude: 77.2090,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    // Week 9: priceSpecification added to every Offer so rich-result systems
    // can surface "lawyer consultation price India" / "free legal advice"
    // queries with a price chip in SERP. The Case Assessment offer
    // uses price: "0" + priceCurrency: "INR" — the schema-validated way to
    // mark a free offer.
    itemListElement: [
      {
        "@type": "Offer",
        name: "Free Case Assessment",
        url: "https://www.nyaysevak.com/case-assessment",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "India" },
        itemOffered: { "@type": "Service", name: "Case Assessment", description: "A free case assessment with a verified lawyer — a diagnosis of your matter and a written next-step plan." },
      },
      {
        "@type": "Offer",
        name: "Online Lawyer Consultation (Paid)",
        url: "https://www.nyaysevak.com/services/lawyer-consultation",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "499",
          maxPrice: "5000",
          priceCurrency: "INR",
        },
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Find & Hire Lawyers", description: "Get matched with a verified advocate by specialization, court & location" },
      },
      {
        "@type": "Offer",
        name: "Legal Document Services",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "999",
          maxPrice: "25000",
          priceCurrency: "INR",
        },
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Legal Document Services", description: "Professional legal document drafting, review & management" },
      },
      {
        "@type": "Offer",
        name: "Corporate Legal Advisory",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "10000",
          priceCurrency: "INR",
        },
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Corporate Legal Advisory", description: "Dedicated legal teams for enterprise strategy & governance" },
      },
      {
        "@type": "Offer",
        name: "Court Representation",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "15000",
          priceCurrency: "INR",
        },
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Court Representation", description: "Expert court representation across all Indian courts" },
      },
    ],
  },
  // Week 9: makesOffer mirrors the catalog at the entity level so AI engines
  // that scan ProfessionalService.makesOffer (some Perplexity / Gemini index
  // pipelines do, even when hasOfferCatalog is not walked) still see pricing.
  makesOffer: {
    "@type": "AggregateOffer",
    offerCount: 5,
    lowPrice: "0",
    highPrice: "25000",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    eligibleRegion: { "@type": "Country", name: "India" },
    offeredBy: { "@id": "https://www.nyaysevak.com/#organization" },
  },
  // NOTE: aggregateRating + named reviews intentionally removed. Self-authored
  // review/rating schema about your own organization violates Google's review
  // snippet guidelines and is a low-trust signal for a new domain. Reinstate
  // ONLY when ratings come from a verifiable third party (Google Business
  // Profile, Trustpilot, etc.).
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    // Week 15: removed twitter/x.com/nyaysevak and linkedin.com/company/nyaysevak
    // — both return 404 (the profiles do not exist). A sameAs pointing at a dead
    // URL is a negative trust signal and weakens entity disambiguation. Only
    // profiles confirmed live (HTTP 200) remain. Re-add others once created.
    "https://www.facebook.com/nyaysevak",
    "https://www.instagram.com/nyaysevak",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nyaysevak.com"),
  title: {
    // Disambiguates the brand from similarly-spelled competitors by binding
    // the brand name to the canonical domain inside the title itself.
    default: "NyaySevak.com — India's Verified Lawyer Platform | Free Case Assessment",
    template: "%s | NyaySevak.com",
  },
  description:
    "India's trusted legal-services platform. Get matched with verified lawyers near you for the Supreme Court, 25 High Courts, 700+ District Courts & all Tribunals. Online lawyer consultation, divorce lawyer, criminal lawyer, property lawyer, corporate advisory. 29 practice areas. Free case assessment. Call +91-9868666715.",
  keywords:
    "lawyer near me, advocate near me, best lawyer India, online lawyer consultation, find lawyer India, hire lawyer online, legal services India, free legal consultation, divorce lawyer, criminal lawyer, property lawyer, bail lawyer, corporate lawyer, cyber crime lawyer, Supreme Court advocate, High Court lawyer, District Court lawyer, NCLT lawyer, NyaySevak, legal aid India, family lawyer India, tax lawyer, IP lawyer India, consumer court lawyer, labour lawyer, arbitration lawyer, RERA lawyer, documentation lawyer, affordable lawyer India, verified advocate India, court representation India",
  authors: [{ name: "NyaySevak" }],
  creator: "NyaySevak",
  publisher: "NyaySevak",
  alternates: {
    canonical: "https://www.nyaysevak.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nyaysevak.com",
    siteName: "NyaySevak",
    title: "NyaySevak - Best Lawyer Consultation & Legal Services in India",
    description:
      "Find verified lawyers near you. Online consultation, court representation across Supreme Court, High Courts, District Courts & Tribunals. 29 practice areas. Free case assessment.",
    images: [
      {
        url: "https://www.nyaysevak.com/logo.png",
        width: 800,
        height: 800,
        alt: "NyaySevak - Best Legal Services Platform in India - Find Lawyers Near You",
      },
    ],
  },
  twitter: {
    // site/creator "@nyaysevak" removed — the X/Twitter handle 404s (does not
    // exist). Pointing card attribution at a dead handle adds no value; re-add
    // once the account is created.
    card: "summary_large_image",
    title: "NyaySevak - Find Best Lawyers Near You in India | Case Assessment",
    description:
      "India's trusted legal platform. Verified lawyers for all courts. Criminal, divorce, property, corporate, cyber crime & more. Free case assessment.",
    images: ["https://www.nyaysevak.com/logo.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
      "yandex-verification": process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    },
  },
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <GoogleAnalytics />
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#080704" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-dark-deep text-white font-body`}
      >
        <ContactModalProvider>
          {/* Skip to content link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-gold focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-black focus:shadow-lg"
          >
            Skip to main content
          </a>
          <ScrollToTop />
          <NavigationProgress />
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />
          <ContactModal />
          <FloatingContactBar />
          <EngagementTracker />
          <ExitIntentModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
