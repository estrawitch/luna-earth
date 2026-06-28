export function OverviewSection() {
  const linkClass =
    "font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2";

  return (
    <section
      className="scroll-mt-28 bg-slate-50 px-6 py-16 text-slate-950 sm:px-8"
      id="overview"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            AI has a physical footprint
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            AI tools feel instant, but they run through{" "}
            <a className={linkClass} href="/#hidden-costs">
              data centers
            </a>{" "}
            packed with chips, cooling systems, backup power, and network equipment.
            Their{" "}
            <a className={linkClass} href="/#ai-footprint-by-the-numbers">
              electricity demand
            </a>{" "}
            and{" "}
            <a className={linkClass} href="/#ai-footprint-by-the-numbers">
              water use
            </a>{" "}
            can affect grids, climate goals, and communities near major facilities.
          </p>
          <p>
            Start with the source-backed numbers, then dig into the{" "}
            <a className={linkClass} href="/#hidden-costs">
              hidden costs
            </a>{" "}
            behind AI infrastructure or use the{" "}
            <a className={linkClass} href="/#interactive-comparison">
              interactive comparison
            </a>{" "}
            to explore low, likely, and high estimates.
          </p>
        </div>
      </div>
    </section>
  );
}
