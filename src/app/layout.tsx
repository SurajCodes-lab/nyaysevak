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
import { ContactModalProvider } from "@/context/ContactModalContext";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LegalService"],
  "@id": "https://nyaysevak.com/#organization",
  name: "NyaySevak",
  alternateName: "NyaySevak Legal Services",
  description:
    "India's first complete legal ecosystem. Access Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals & Arbitration centres. Complete A-Z legal services for individuals and businesses.",
  url: "https://nyaysevak.com",
  logo: {
    "@type": "ImageObject",
    url: "https://nyaysevak.com/logo.png",
    width: 800,
    height: 800,
  },
  image: "https://nyaysevak.com/logo.png",
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
    "https://www.facebook.com/nyaysevak",
    "https://www.twitter.com/nyaysevak",
    "https://www.linkedin.com/company/nyaysevak",
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
  "@id": "https://nyaysevak.com/#website",
  name: "NyaySevak",
  alternateName: "NyaySevak - Defending Your Rights",
  url: "https://nyaysevak.com",
  publisher: { "@id": "https://nyaysevak.com/#organization" },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://nyaysevak.com/practice-areas?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Week 4: SiteNavigationElement for sitelinks in Google SERPs
const siteNavigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Main Navigation",
  url: "https://nyaysevak.com",
  hasPart: [
    { "@type": "SiteNavigationElement", name: "Legal Services", url: "https://nyaysevak.com/services", description: "B2B & B2C legal services for individuals and businesses" },
    { "@type": "SiteNavigationElement", name: "Practice Areas", url: "https://nyaysevak.com/practice-areas", description: "29 practice areas covering every domain of Indian law" },
    { "@type": "SiteNavigationElement", name: "Court Coverage", url: "https://nyaysevak.com/courts", description: "Supreme Court, 25 High Courts, 700+ District Courts & Tribunals" },
    { "@type": "SiteNavigationElement", name: "Platform Features", url: "https://nyaysevak.com/features", description: "AI-powered legal technology platform features" },
    { "@type": "SiteNavigationElement", name: "About NyaySevak", url: "https://nyaysevak.com/about", description: "About India's premier legal services platform" },
    { "@type": "SiteNavigationElement", name: "Contact Us", url: "https://nyaysevak.com/contact", description: "Get in touch for legal consultation" },
  ],
};

// Week 4: ProfessionalService schema for enhanced business listing
const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://nyaysevak.com/#professionalservice",
  name: "NyaySevak Legal Services",
  description: "India's first complete legal ecosystem offering verified lawyer consultation, document services, corporate advisory, and court representation across all Indian courts and tribunals.",
  url: "https://nyaysevak.com",
  telephone: "+91-9868666715",
  email: "nyaysevak@gmail.com",
  image: "https://nyaysevak.com/logo.png",
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
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Lawyer Consultation", description: "Connect with verified lawyers for free first consultation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Find & Hire Lawyers", description: "Search verified advocates by specialization, court & location" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Legal Document Services", description: "Professional legal document drafting, review & management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Legal Advisory", description: "Dedicated legal teams for enterprise strategy & governance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Court Representation", description: "Expert court representation across all Indian courts" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "2847",
    reviewCount: "1523",
  },
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
    "https://www.facebook.com/nyaysevak",
    "https://www.twitter.com/nyaysevak",
    "https://www.linkedin.com/company/nyaysevak",
    "https://www.instagram.com/nyaysevak",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nyaysevak.com"),
  title: {
    default: "NyaySevak - Best Lawyer Consultation & Legal Services in India | Free First Consultation",
    template: "%s | NyaySevak - India's Legal Services Platform",
  },
  description:
    "India's #1 legal services platform. Find & hire verified lawyers near you for Supreme Court, 25 High Courts, 700+ District Courts & all Tribunals. Online lawyer consultation, divorce lawyer, criminal lawyer, property lawyer, corporate advisory. 29 practice areas. Free first consultation. Call +91-9868666715.",
  keywords:
    "lawyer near me, advocate near me, best lawyer India, online lawyer consultation, find lawyer India, hire lawyer online, legal services India, free legal consultation, divorce lawyer, criminal lawyer, property lawyer, bail lawyer, corporate lawyer, cyber crime lawyer, Supreme Court advocate, High Court lawyer, District Court lawyer, NCLT lawyer, NyaySevak, legal aid India, family lawyer India, tax lawyer, IP lawyer India, consumer court lawyer, labour lawyer, arbitration lawyer, RERA lawyer, documentation lawyer, affordable lawyer India, verified advocate India, court representation India",
  authors: [{ name: "NyaySevak" }],
  creator: "NyaySevak",
  publisher: "NyaySevak",
  alternates: {
    canonical: "https://nyaysevak.com",
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
    url: "https://nyaysevak.com",
    siteName: "NyaySevak",
    title: "NyaySevak - Best Lawyer Consultation & Legal Services in India",
    description:
      "Find verified lawyers near you. Online consultation, court representation across Supreme Court, High Courts, District Courts & Tribunals. 29 practice areas. Free first consultation.",
    images: [
      {
        url: "https://nyaysevak.com/logo.png",
        width: 800,
        height: 800,
        alt: "NyaySevak - Best Legal Services Platform in India - Find Lawyers Near You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nyaysevak",
    creator: "@nyaysevak",
    title: "NyaySevak - Find Best Lawyers Near You in India | Free Consultation",
    description:
      "India's #1 legal platform. Verified lawyers for all courts. Criminal, divorce, property, corporate, cyber crime & more. Free first consultation.",
    images: ["https://nyaysevak.com/logo.png"],
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
        </ContactModalProvider>
      </body>
    </html>
  );
}
