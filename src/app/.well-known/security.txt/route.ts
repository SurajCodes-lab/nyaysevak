// Week 7: RFC 9116 security.txt — vulnerability disclosure policy.
// Browsers and security scanners look for this exact path. It is a trust signal
// that Google's quality systems also pick up on YMYL sites.
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);
  expires.setUTCHours(0, 0, 0, 0);

  const body = `Contact: mailto:nyaysevak@gmail.com
Contact: tel:+91-9868666715
Expires: ${expires.toISOString()}
Preferred-Languages: en, hi
Canonical: ${SITE_URL}/.well-known/security.txt
Policy: ${SITE_URL}/disclaimer
# Responsible-disclosure policy
# We accept reports of security vulnerabilities by email at the contact above.
# Please include reproduction steps and affected URLs. We aim to acknowledge within 5 business days.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
