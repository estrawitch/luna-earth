import * as d3 from "d3";
import { homesPoweredForOneYear } from "../data/contextConversions";
import { impactStats } from "../data/impactStats";
import { siteImages } from "../data/siteImages";
import { ImageCredit } from "./ImageCredit";

const energyStats = impactStats.filter((stat) =>
  ["global-data-center-electricity-2024", "global-data-center-electricity-2030"].includes(stat.id)
);

function formatHomes(twh: number) {
  return `${Math.round(homesPoweredForOneYear(twh) / 1_000_000)}M homes`;
}

export function ElectricityInfographic() {
  const gridImage = siteImages.electricityGrid;
  const width = 720;
  const height = 270;
  const values = energyStats.map((stat) => Number(stat.value));
  const maxValue = d3.max(values) ?? 1;
  const x = d3.scaleLinear().domain([0, maxValue]).range([0, 430]).nice();

  return (
    <figure className="rounded-lg border border-slate-200 bg-slate-50 p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Electricity scale
          </p>
          <h3 className="mt-1 text-xl font-bold text-slate-950">
            Data-center electricity is measured in country-sized numbers
          </h3>
        </div>
        <a
          className="text-sm font-semibold text-teal-700 underline"
          href={energyStats[0]?.sourceUrl}
        >
          Source: IEA
        </a>
      </div>

      <svg
        aria-labelledby="electricity-chart-title electricity-chart-desc"
        className="mt-5 h-auto w-full"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <title id="electricity-chart-title">Data-center electricity comparison</title>
        <desc id="electricity-chart-desc">
          A bar chart comparing 415 terawatt-hours in 2024 with 945 terawatt-hours by
          2030, including approximate U.S. home electricity equivalents.
        </desc>
        {energyStats.map((stat, index) => {
          const value = Number(stat.value);
          const y = 58 + index * 95;
          const barWidth = x(value);
          const color = index === 0 ? "#0f766e" : "#0369a1";

          return (
            <g key={stat.id}>
              <text fill="#0f172a" fontSize="17" fontWeight="700" x="0" y={y - 18}>
                {stat.title}
              </text>
              <rect fill="#e2e8f0" height="34" rx="8" width="430" x="0" y={y} />
              <rect fill={color} height="34" rx="8" width={barWidth} x="0" y={y} />
              <text fill="#ffffff" fontSize="16" fontWeight="700" x="18" y={y + 23}>
                {value.toLocaleString()} TWh
              </text>
              <text fill="#334155" fontSize="15" fontWeight="700" x="458" y={y + 22}>
                roughly {formatHomes(value)}
              </text>
              <text fill="#64748b" fontSize="13" x="458" y={y + 43}>
                of average U.S. home electricity for one year
              </text>
            </g>
          );
        })}
        <line stroke="#cbd5e1" strokeWidth="2" x1="0" x2="430" y1="238" y2="238" />
        {[0, 315, 630, 945].map((tick) => (
          <g key={tick}>
            <line stroke="#cbd5e1" strokeWidth="2" x1={x(tick)} x2={x(tick)} y1="232" y2="244" />
            <text fill="#64748b" fontSize="12" textAnchor="middle" x={x(tick)} y="263">
              {tick} TWh
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-5 grid gap-4 sm:grid-cols-[0.72fr_1fr] sm:items-center">
        <img
          alt={gridImage.alt}
          className="max-h-72 w-full rounded-lg border border-slate-200 bg-white object-contain p-3"
          src={gridImage.localPath}
        />
        <div className="text-sm leading-6 text-slate-600">
          <p className="font-semibold text-slate-800">
            The grid image shows why data-center electricity is not just a private
            facility issue.
          </p>
          <p className="mt-2">
            More demand can require generation, transmission, transformers, and local
            distribution upgrades.
          </p>
          <div className="mt-3">
            <ImageCredit image={gridImage} />
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-sm leading-6 text-slate-600">
        The bar lengths are generated from the same source-backed values used by the
        statistic cards.
      </figcaption>
    </figure>
  );
}
