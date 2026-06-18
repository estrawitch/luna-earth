import * as d3 from "d3";

const paths = [
  {
    id: "air",
    label: "Air-heavy cooling",
    saved: "Lower direct water",
    cost: "More cooling electricity in hard conditions",
    color: "#0f766e"
  },
  {
    id: "water",
    label: "Water-assisted cooling",
    saved: "Better heat handling",
    cost: "Higher direct water concern if evaporated",
    color: "#0369a1"
  }
];

export function CoolingTradeoffInfographic() {
  const width = 720;
  const height = 250;
  const y = d3.scalePoint<string>().domain(paths.map((path) => path.id)).range([80, 178]);

  return (
    <figure className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
        Cooling trade-off
      </p>
      <h3 className="mt-1 text-lg font-bold text-slate-950">
        Cooling choices move pressure between water and electricity
      </h3>
      <svg
        aria-labelledby="cooling-chart-title cooling-chart-desc"
        className="mt-4 h-auto w-full"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <title id="cooling-chart-title">Cooling trade-off paths</title>
        <desc id="cooling-chart-desc">
          A split path diagram comparing air-heavy cooling with water-assisted cooling.
        </desc>
        <g>
          <rect fill="#f1f5f9" height="54" rx="10" width="136" x="0" y="104" />
          <text fill="#0f172a" fontSize="15" fontWeight="800" textAnchor="middle" x="68" y="127">
            AI heat
          </text>
          <text fill="#64748b" fontSize="12" textAnchor="middle" x="68" y="146">
            has to leave
          </text>
        </g>
        {paths.map((path) => {
          const cy = y(path.id) ?? 0;
          const linePath = `M 136 131 C 240 131, 245 ${cy}, 350 ${cy}`;

          return (
            <g key={path.id}>
              <path d={linePath} fill="none" stroke={path.color} strokeLinecap="round" strokeWidth="5" />
              <circle cx="370" cy={cy} fill={path.color} r="10" />
              <rect fill="#f8fafc" height="64" rx="10" stroke="#cbd5e1" width="292" x="398" y={cy - 32} />
              <text fill="#0f172a" fontSize="15" fontWeight="800" x="414" y={cy - 9}>
                {path.label}
              </text>
              <text fill="#166534" fontSize="13" fontWeight="700" x="414" y={cy + 13}>
                {path.saved}
              </text>
              <text fill="#92400e" fontSize="13" x="414" y={cy + 34}>
                {path.cost}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-sm leading-6 text-slate-600">
        Real facilities can reduce pressure with recycled water, closed loops, efficient
        chips, cleaner power, and location-aware design.
      </figcaption>
    </figure>
  );
}
