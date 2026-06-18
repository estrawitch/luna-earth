import type { ImpactStat } from "../data/impactStats";

const categoryStyles: Record<ImpactStat["category"], string> = {
  energy: "border-teal-200 bg-teal-50 text-teal-900",
  water: "border-sky-200 bg-sky-50 text-sky-900",
  efficiency: "border-lime-200 bg-lime-50 text-lime-900",
  context: "border-slate-200 bg-slate-50 text-slate-900"
};

export function StatCard({ stat }: { stat: ImpactStat }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <p
          className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${categoryStyles[stat.category]}`}
        >
          {stat.category}
        </p>
        <p className="text-sm font-medium text-slate-500">{stat.year}</p>
      </div>

      <h3 className="mt-4 text-base font-semibold leading-6 text-slate-950">{stat.title}</h3>

      <p className="mt-4">
        <span className="text-3xl font-bold leading-none text-slate-950">{stat.value}</span>
        <span className="ml-2 text-sm font-medium text-slate-600">{stat.unit}</span>
      </p>

      <p className="mt-4 rounded-lg border border-teal-100 bg-teal-50 p-3 text-sm leading-6 text-teal-950">
        <span className="font-semibold">What this means:</span> {stat.scaleMeaning}
      </p>

      <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
        <span className="font-semibold">Why this is concerning:</span> {stat.whyAlarming}
      </p>

      <p className="mt-4 text-sm leading-6 text-slate-700">{stat.plainLanguageMeaning}</p>

      <div className="mt-auto pt-5">
        <a
          className="text-sm font-semibold text-teal-700 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          href={stat.sourceUrl}
          rel="noreferrer"
          target="_blank"
        >
          {stat.sourceName}
        </a>
        <p className="mt-3 text-xs leading-5 text-slate-500">
          <span className="font-semibold text-slate-700">Source caveat:</span> {stat.caveat}
        </p>
      </div>
    </article>
  );
}
