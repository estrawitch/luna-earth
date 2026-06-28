const navItems = [
  { label: "Overview", href: "/#overview" },
  { label: "AI Footprint by the Numbers", href: "/#ai-footprint-by-the-numbers" },
  { label: "Hidden Costs", href: "/#hidden-costs" },
  { label: "Interactive Comparison", href: "/#interactive-comparison" }
];

export function SiteHeader() {
  return (
    <header
      className="site-header sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 text-slate-950 shadow-sm backdrop-blur"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8"
      >
        <a
          className="site-header-brand font-extrabold text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          href="/#top"
        >
          AI Footprint Lab
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <details className="mobile-nav relative lg:hidden">
          <summary
            aria-label="Toggle navigation"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-slate-300 text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <span className="sr-only">Menu</span>
            <span className="mobile-nav-icon flex flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-5 rounded-full bg-current transition" />
              <span className="h-0.5 w-5 rounded-full bg-current transition" />
              <span className="h-0.5 w-5 rounded-full bg-current transition" />
            </span>
          </summary>

          <div
            className="absolute right-0 top-12 w-[min(18rem,calc(100vw-3rem))] rounded-lg border border-slate-200 bg-white p-2 shadow-xl"
            id="mobile-navigation"
          >
            {navItems.map((item) => (
              <a
                className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
