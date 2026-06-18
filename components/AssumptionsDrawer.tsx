import type { TriangularDistribution } from "../data/dataCenterScenarios";

type AssumptionEntry = {
  label: string;
  distribution?: TriangularDistribution;
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: value >= 100 ? 0 : 2
  }).format(value);
}

function derivedMean(distribution: TriangularDistribution) {
  return (distribution.min + distribution.likely + distribution.max) / 3;
}

function derivedStdDev(distribution: TriangularDistribution) {
  const { min, likely, max } = distribution;
  const variance =
    (min ** 2 +
      likely ** 2 +
      max ** 2 -
      min * likely -
      min * max -
      likely * max) /
    18;

  return Math.sqrt(variance);
}

export function AssumptionsDrawer({ entries }: { entries: AssumptionEntry[] }) {
  const availableEntries = entries.filter((entry) => entry.distribution);

  return (
    <details className="rounded-lg border border-slate-200 bg-white p-4">
      <summary className="cursor-pointer text-sm font-semibold text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
        Why this number varies
      </summary>
      <div className="mt-4 space-y-5 text-sm leading-6 text-slate-700">
        <p>
          Exact prediction is impossible because real impacts depend on model size,
          hardware, data-center efficiency, cooling method, electricity source, location,
          and usage volume.
        </p>

        {availableEntries.map(({ label, distribution }) => {
          if (!distribution) return null;

          return (
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-4" key={label}>
              <h4 className="font-semibold text-slate-950">{label}</h4>
              <dl className="mt-3 grid gap-3 sm:grid-cols-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Min
                  </dt>
                  <dd className="font-semibold text-slate-900">
                    {formatNumber(distribution.min)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Likely
                  </dt>
                  <dd className="font-semibold text-slate-900">
                    {formatNumber(distribution.likely)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Max
                  </dt>
                  <dd className="font-semibold text-slate-900">
                    {formatNumber(distribution.max)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Mean
                  </dt>
                  <dd className="font-semibold text-slate-900">
                    {formatNumber(derivedMean(distribution))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Std. dev.
                  </dt>
                  <dd className="font-semibold text-slate-900">
                    {formatNumber(derivedStdDev(distribution))}
                  </dd>
                </div>
              </dl>
              <p className="mt-3 text-xs text-slate-500">Unit: {distribution.unit}</p>
              <p className="mt-3">{distribution.sourceNote}</p>
              <p className="mt-2 text-slate-600">{distribution.distributionNote}</p>
            </div>
          );
        })}
      </div>
    </details>
  );
}
