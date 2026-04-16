import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * URL normalization middleware — prevents duplicate URLs that cause
 * "Alternative page with proper canonical tag" in Google Search Console.
 *
 * Handles: trailing slash removal, tracking-param cleanup, path lowercasing.
 *
 * NOTE: www → non-www and HTTP → HTTPS are intentionally NOT handled here.
 * Vercel (and most modern hosts) handle these at the edge. Doing it twice
 * causes ERR_TOO_MANY_REDIRECTS when the host redirects in the opposite
 * direction. Configure the canonical domain in the Vercel dashboard instead.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let shouldRedirect = false;

  // 1. Remove trailing slash (except root "/")
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    shouldRedirect = true;
  }

  // 2. Strip tracking query params that create duplicate URLs in Google's index
  const paramsToStrip = ["fbclid", "gclid", "msclkid", "_ga", "mc_cid", "mc_eid"];
  for (const param of paramsToStrip) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      shouldRedirect = true;
    }
  }

  // 3. Lowercase the path (prevents /Services vs /services duplicates)
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
