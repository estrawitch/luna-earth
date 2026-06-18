import * as d3 from "d3";
import type { TriangularDistribution } from "../data/dataCenterScenarios";

export function UncertaintyHistogram({
  distribution,
  samples
}: {
  distribution: TriangularDistribution;
  samples: number[];
}) {
  const width = 720;
  const height = 210;
  const bins = 14;
  const min = distribution.min;
  const max = distribution.max;

  if (min === max) {
    return (
      <svg
        aria-label="Point estimate with no spread"
        className="h-auto w-full rounded-lg border border-slate-200 bg-white"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <rect fill="#0f766e" height="110" rx="10" width="560" x="80" y="48" />
        <text fill="#ffffff" fontSize="18" fontWeight="800" textAnchor="middle" x="360" y="108">
          Fixed baseline: no modeled spread
        </text>
      </svg>
    );
  }

  const x = d3.scaleLinear().domain([min, max]).range([46, width - 24]);
  const histogram = d3
    .bin<number, number>()
    .domain([min, max])
    .thresholds(bins);
  const grouped = histogram(samples);
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(grouped, (bin) => bin.length) ?? 1])
    .range([height - 38, 30]);

  return (
    <svg
      aria-labelledby="uncertainty-chart-title uncertainty-chart-desc"
      className="h-auto w-full rounded-lg border border-slate-200 bg-white"
      role="img"
      viewBox={`0 0 ${width} ${height}`}
    >
      <title id="uncertainty-chart-title">Simulation uncertainty histogram</title>
      <desc id="uncertainty-chart-desc">
        A histogram of the sampled simulation outcomes, showing more common results
        as taller bars.
      </desc>
      <line stroke="#cbd5e1" strokeWidth="2" x1="46" x2={width - 24} y1={height - 38} y2={height - 38} />
      {grouped.map((bin, index) => {
        const barX = x(bin.x0 ?? min) + 2;
        const barWidth = Math.max(2, x(bin.x1 ?? max) - x(bin.x0 ?? min) - 4);
        const barHeight = height - 38 - y(bin.length);

        return (
          <rect
            fill={index % 2 === 0 ? "#0f766e" : "#14b8a6"}
            height={barHeight}
            key={`${bin.x0}-${bin.x1}`}
            rx="4"
            width={barWidth}
            x={barX}
            y={y(bin.length)}
          />
        );
      })}
      {[min, distribution.likely, max].map((tick) => (
        <g key={tick}>
          <line stroke="#94a3b8" strokeDasharray="4 4" x1={x(tick)} x2={x(tick)} y1="25" y2={height - 38} />
          <text fill="#475569" fontSize="12" fontWeight="700" textAnchor="middle" x={x(tick)} y={height - 14}>
            {tick.toLocaleString()}
          </text>
        </g>
      ))}
    </svg>
  );
}
