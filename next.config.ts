import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  // Prevent trailing-slash duplicates (Google indexes /page and /page/ separately)
  trailingSlash: false,

  // Week 4: Image optimization for Core Web Vitals (LCP improvement)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Week 4: Compress output for faster page loads
  compress: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Explicit indexing signal for Googlebot on all pages
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.(js|css|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache HTML pages for moderate time (helps with Core Web Vitals)
      {
        source: "/((?!api).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // Week 4: SEO-friendly redirects for common URL variations
  async redirects() {
    return [
      // Redirect common misspellings and alternate URLs
      { source: "/service", destination: "/services", permanent: true },
      { source: "/practice-area", destination: "/practice-areas", permanent: true },
      { source: "/court", destination: "/courts", permanent: true },
      { source: "/feature", destination: "/features", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/tos", destination: "/terms-of-service", permanent: true },
      // Lawyer search intent redirects
      // Note: /lawyers is now a real index page (city-based), so no longer redirected.
      { source: "/advocates", destination: "/lawyers", permanent: true },
      { source: "/consultation", destination: "/services/lawyer-consultation", permanent: true },
      { source: "/free-legal-consultation", destination: "/case-assessment", permanent: true },

      // Week 8 — Workstream B: intent-aliased URL aliases.
      // High-volume search-friendly URLs forwarded (301) to canonical practice
      // pages. Captures user-typed URLs, branded shares, AI-search citations.
      { source: "/property-lawyer", destination: "/practice-areas/property-real-estate", permanent: true },
      { source: "/property-lawyers", destination: "/practice-areas/property-real-estate", permanent: true },
      { source: "/real-estate-lawyer", destination: "/practice-areas/property-real-estate", permanent: true },
      { source: "/divorce-lawyer", destination: "/practice-areas/family-matrimonial", permanent: true },
      { source: "/divorce-lawyers", destination: "/practice-areas/family-matrimonial", permanent: true },
      { source: "/family-lawyer", destination: "/practice-areas/family-matrimonial", permanent: true },
      { source: "/matrimonial-lawyer", destination: "/practice-areas/family-matrimonial", permanent: true },
      { source: "/criminal-lawyer", destination: "/practice-areas/criminal-law", permanent: true },
      { source: "/criminal-lawyers", destination: "/practice-areas/criminal-law", permanent: true },
      { source: "/bail-lawyer", destination: "/practice-areas/criminal-law", permanent: true },
      { source: "/civil-lawyer", destination: "/practice-areas/civil-law", permanent: true },
      { source: "/corporate-lawyer", destination: "/practice-areas/corporate-business", permanent: true },
      { source: "/business-lawyer", destination: "/practice-areas/corporate-business", permanent: true },
      { source: "/company-lawyer", destination: "/practice-areas/corporate-business", permanent: true },
      { source: "/cyber-crime-lawyer", destination: "/practice-areas/cyber-law", permanent: true },
      { source: "/cyber-lawyer", destination: "/practice-areas/cyber-law", permanent: true },
      { source: "/tax-lawyer", destination: "/practice-areas/tax-law", permanent: true },
      { source: "/income-tax-lawyer", destination: "/practice-areas/tax-law", permanent: true },
      { source: "/gst-lawyer", destination: "/practice-areas/tax-law", permanent: true },
      { source: "/consumer-court-lawyer", destination: "/practice-areas/consumer-protection", permanent: true },
      { source: "/consumer-lawyer", destination: "/practice-areas/consumer-protection", permanent: true },
      { source: "/labour-lawyer", destination: "/practice-areas/labour-employment", permanent: true },
      { source: "/employment-lawyer", destination: "/practice-areas/labour-employment", permanent: true },
      { source: "/ip-lawyer", destination: "/practice-areas/intellectual-property", permanent: true },
      { source: "/trademark-lawyer", destination: "/practice-areas/intellectual-property", permanent: true },
      { source: "/patent-lawyer", destination: "/practice-areas/intellectual-property", permanent: true },
      { source: "/banking-lawyer", destination: "/practice-areas/banking-finance", permanent: true },
      { source: "/cheque-bounce-lawyer", destination: "/practice-areas/banking-finance", permanent: true },
      { source: "/arbitration-lawyer", destination: "/practice-areas/arbitration-adr", permanent: true },
      { source: "/cbi-lawyer", destination: "/practice-areas/cbi-cases", permanent: true },
      { source: "/ed-lawyer", destination: "/practice-areas/ed-cases", permanent: true },
      { source: "/pmla-lawyer", destination: "/practice-areas/ed-cases", permanent: true },
      { source: "/ndps-lawyer", destination: "/practice-areas/ndps-cases", permanent: true },
      { source: "/medical-negligence-lawyer", destination: "/practice-areas/health-medical-law", permanent: true },
      { source: "/best-lawyer-india", destination: "/practice-areas", permanent: true },
      { source: "/lawyer-india", destination: "/practice-areas", permanent: true },
      { source: "/online-lawyer", destination: "/services/lawyer-consultation", permanent: true },

      // Week 8 — Workstream D: city × variant redirects (8 cities × 5 variants = 40).
      // Captures the hyper-local "[lawyer-type] in [city]" search-term pattern.
      // Property lawyer × city
      { source: "/property-lawyer-in-delhi", destination: "/lawyers/delhi/property-real-estate", permanent: true },
      { source: "/property-lawyer-in-mumbai", destination: "/lawyers/mumbai/property-real-estate", permanent: true },
      { source: "/property-lawyer-in-bangalore", destination: "/lawyers/bangalore/property-real-estate", permanent: true },
      { source: "/property-lawyer-in-chennai", destination: "/lawyers/chennai/property-real-estate", permanent: true },
      { source: "/property-lawyer-in-hyderabad", destination: "/lawyers/hyderabad/property-real-estate", permanent: true },
      { source: "/property-lawyer-in-pune", destination: "/lawyers/pune/property-real-estate", permanent: true },
      { source: "/property-lawyer-in-kolkata", destination: "/lawyers/kolkata/property-real-estate", permanent: true },
      { source: "/property-lawyer-in-ahmedabad", destination: "/lawyers/ahmedabad/property-real-estate", permanent: true },
      // Divorce lawyer × city
      { source: "/divorce-lawyer-in-delhi", destination: "/lawyers/delhi/family-matrimonial", permanent: true },
      { source: "/divorce-lawyer-in-mumbai", destination: "/lawyers/mumbai/family-matrimonial", permanent: true },
      { source: "/divorce-lawyer-in-bangalore", destination: "/lawyers/bangalore/family-matrimonial", permanent: true },
      { source: "/divorce-lawyer-in-chennai", destination: "/lawyers/chennai/family-matrimonial", permanent: true },
      { source: "/divorce-lawyer-in-hyderabad", destination: "/lawyers/hyderabad/family-matrimonial", permanent: true },
      { source: "/divorce-lawyer-in-pune", destination: "/lawyers/pune/family-matrimonial", permanent: true },
      { source: "/divorce-lawyer-in-kolkata", destination: "/lawyers/kolkata/family-matrimonial", permanent: true },
      { source: "/divorce-lawyer-in-ahmedabad", destination: "/lawyers/ahmedabad/family-matrimonial", permanent: true },
      // Criminal lawyer × city
      { source: "/criminal-lawyer-in-delhi", destination: "/lawyers/delhi/criminal-law", permanent: true },
      { source: "/criminal-lawyer-in-mumbai", destination: "/lawyers/mumbai/criminal-law", permanent: true },
      { source: "/criminal-lawyer-in-bangalore", destination: "/lawyers/bangalore/criminal-law", permanent: true },
      { source: "/criminal-lawyer-in-chennai", destination: "/lawyers/chennai/criminal-law", permanent: true },
      { source: "/criminal-lawyer-in-hyderabad", destination: "/lawyers/hyderabad/criminal-law", permanent: true },
      { source: "/criminal-lawyer-in-pune", destination: "/lawyers/pune/criminal-law", permanent: true },
      { source: "/criminal-lawyer-in-kolkata", destination: "/lawyers/kolkata/criminal-law", permanent: true },
      { source: "/criminal-lawyer-in-ahmedabad", destination: "/lawyers/ahmedabad/criminal-law", permanent: true },
      // Civil lawyer × city
      { source: "/civil-lawyer-in-delhi", destination: "/lawyers/delhi/civil-law", permanent: true },
      { source: "/civil-lawyer-in-mumbai", destination: "/lawyers/mumbai/civil-law", permanent: true },
      { source: "/civil-lawyer-in-bangalore", destination: "/lawyers/bangalore/civil-law", permanent: true },
      { source: "/civil-lawyer-in-chennai", destination: "/lawyers/chennai/civil-law", permanent: true },
      { source: "/civil-lawyer-in-hyderabad", destination: "/lawyers/hyderabad/civil-law", permanent: true },
      { source: "/civil-lawyer-in-pune", destination: "/lawyers/pune/civil-law", permanent: true },
      { source: "/civil-lawyer-in-kolkata", destination: "/lawyers/kolkata/civil-law", permanent: true },
      { source: "/civil-lawyer-in-ahmedabad", destination: "/lawyers/ahmedabad/civil-law", permanent: true },
      // Corporate lawyer × city
      { source: "/corporate-lawyer-in-delhi", destination: "/lawyers/delhi/corporate-business", permanent: true },
      { source: "/corporate-lawyer-in-mumbai", destination: "/lawyers/mumbai/corporate-business", permanent: true },
      { source: "/corporate-lawyer-in-bangalore", destination: "/lawyers/bangalore/corporate-business", permanent: true },
      { source: "/corporate-lawyer-in-chennai", destination: "/lawyers/chennai/corporate-business", permanent: true },
      { source: "/corporate-lawyer-in-hyderabad", destination: "/lawyers/hyderabad/corporate-business", permanent: true },
      { source: "/corporate-lawyer-in-pune", destination: "/lawyers/pune/corporate-business", permanent: true },
      { source: "/corporate-lawyer-in-kolkata", destination: "/lawyers/kolkata/corporate-business", permanent: true },
      { source: "/corporate-lawyer-in-ahmedabad", destination: "/lawyers/ahmedabad/corporate-business", permanent: true },
      // "Lawyer near me" / "advocate near me" — go to the lawyers hub for city-grid
      { source: "/lawyer-near-me", destination: "/lawyers", permanent: true },
      { source: "/advocate-near-me", destination: "/lawyers", permanent: true },
      { source: "/best-lawyer-near-me", destination: "/lawyers", permanent: true },
    ];
  },
};

export default nextConfig;
