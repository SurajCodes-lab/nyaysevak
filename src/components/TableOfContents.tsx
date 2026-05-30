import { List } from "lucide-react";

export type TocItem = {
  id: string;
  label: string;
};

// Renders a jump-link list of in-page anchors so Google can surface
// "Jump to section" sitelinks under the result, and so readers can scan
// the page structure at a glance (lifts dwell time on long YMYL pages).
// Pair with <section id="..."> markers in the parent template.
export default function TableOfContents({
  items,
  variant = "dark",
}: {
  items: TocItem[];
  variant?: "dark" | "cream";
}) {
  if (items.length === 0) return null;

  const isDark = variant === "dark";

  return (
    <nav
      aria-label="On this page"
      className={
        isDark
          ? "bg-dark border-y border-gold/[0.08] py-6 sm:py-8"
          : "bg-cream border-y border-gold/15 py-6 sm:py-8"
      }
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2.5 shrink-0">
            <List
              className={
                isDark
                  ? "h-4 w-4 text-gold/60"
                  : "h-4 w-4 text-gold-dark/70"
              }
              strokeWidth={1.5}
            />
            <span
              className={
                isDark
                  ? "text-[10px] uppercase tracking-[0.3em] text-gold/60 font-semibold"
                  : "text-[10px] uppercase tracking-[0.3em] text-gold-dark/70 font-semibold"
              }
            >
              On this page
            </span>
          </div>
          <ol className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm">
            {items.map((item, i) => (
              <li key={item.id} className="flex items-center gap-2">
                <a
                  href={`#${item.id}`}
                  className={
                    isDark
                      ? "text-gray-400 hover:text-gold transition-colors duration-200"
                      : "text-gray-600 hover:text-gold-dark transition-colors duration-200"
                  }
                >
                  <span
                    className={
                      isDark ? "text-gold/40 mr-1.5" : "text-gold-dark/50 mr-1.5"
                    }
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
}
