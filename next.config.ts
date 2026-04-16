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
    ];
  },
};

export default nextConfig;
