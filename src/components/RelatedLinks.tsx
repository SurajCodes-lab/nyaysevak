// Reusable internal-linking module.
//
// Why this exists (the core indexing fix):
//   On a young domain, leaf pages that are only reachable from the XML sitemap
//   tend to sit in Google's "Discovered – currently not indexed" bucket: Google
//   knows the URL exists but has no internal-link signal that it's worth
//   crawling/indexing. District-court pages, city×practice pages, author and
//   feature pages were dead-ends. RelatedLinks turns the site's star topology
//   (everything hangs off the sitemap) into a mesh so PageRank flows to leaves
//   and every page is reachable from several others.
//
// Render it near the bottom of any template with 1–3 groups of sibling/parent
// links. Visual style matches the existing glass-card grids used elsewhere.

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type RelatedLinkItem = {
  label: string;
  href: string;
  /** Optional one-line context shown under the label. */
  note?: string;
};

export type RelatedLinksGroup = {
  title: string;
  items: RelatedLinkItem[];
};

export default function RelatedLinks({
  groups,
  heading = "Explore related pages",
  variant = "dark",
}: {
  groups: RelatedLinksGroup[];
  heading?: string;
  variant?: "dark" | "cream";
}) {
  const visible = groups.filter((g) => g.items.length > 0);
  if (visible.length === 0) return null;

  const isCream = variant === "cream";

  return (
    <section
      aria-label={heading}
      className={`${isCream ? "bg-cream cream-pattern" : "bg-dark"} py-14 sm:py-16`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-xl sm:text-2xl font-heading font-bold mb-8 ${
            isCream ? "text-gray-900" : "text-white"
          }`}
        >
          {heading}
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((group) => (
            <div key={group.title}>
              <h3
                className={`mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] ${
                  isCream ? "text-gold-dark" : "text-gold/70"
                }`}
              >
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group inline-flex items-start gap-1.5 text-sm transition-colors duration-200 ${
                        isCream
                          ? "text-gray-700 hover:text-gold-dark"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <span className="link-underline">{item.label}</span>
                      <ArrowUpRight
                        className="mt-0.5 h-3 w-3 shrink-0 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                        strokeWidth={2}
                      />
                    </Link>
                    {item.note && (
                      <p
                        className={`mt-0.5 text-xs leading-snug ${
                          isCream ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        {item.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
