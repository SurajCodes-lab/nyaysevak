// Week 7: ads.txt placeholder. Even with no advertisers, a present-but-empty
// ads.txt is the IAB-recommended signal of intent and prevents domain spoofing.
export const dynamic = "force-static";

export async function GET() {
  const body = `# NyaySevak — ads.txt
# IAB Tech Lab Authorized Digital Sellers
# Last updated: ${new Date().toISOString().slice(0, 10)}
#
# We do not currently sell programmatic advertising on this domain.
# Any ads.txt entry claiming authorisation is unauthorised and should be reported.
# Contact: nyaysevak@gmail.com
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
