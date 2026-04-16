import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * URL normalization middleware — prevents duplicate URLs that cause
 * "Alternative page with proper canonical tag" in Google Search Console.
 *
 * Handles: www → non-www, trailing slash removal, query param cleanup.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let shouldRedirect = false;

  // 1. www → non-www redirect
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.replace(/^www\./, "");
    shouldRedirect = true;
  }

  // 2. Force HTTPS (belt-and-suspenders — hosting usually handles this)
  if (url.protocol === "http:") {
    url.protocol = "https:";
    shouldRedirect = true;
  }

  // 3. Remove trailing slash (except root "/")
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    shouldRedirect = true;
  }

  // 4. Strip tracking query params that create duplicate URLs in Google's index
  const paramsToStrip = ["fbclid", "gclid", "msclkid", "_ga", "mc_cid", "mc_eid"];
  for (const param of paramsToStrip) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      shouldRedirect = true;
    }
  }

  // 5. Lowercase the path (prevents /Services vs /services duplicates)
  const lowered = url.pathname.toLowerCase();
  if (url.pathname !== lowered) {
    url.pathname = lowered;
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

// Only run on page routes — skip static assets, API, and Next.js internals
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.png|robots.txt|sitemap.xml|api/).*)",
  ],
};
