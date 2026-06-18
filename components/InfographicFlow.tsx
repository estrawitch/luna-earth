import * as d3 from "d3";

type FlowStep = {
  label: string;
  detail: string;
};

const steps: FlowStep[] = [
  { label: "Prompt", detail: "A user asks for help" },
  { label: "Data center", detail: "Servers and chips process it" },
  { label: "Electricity", detail: "Power keeps hardware running" },
  { label: "Cooling", detail: "Heat has to be removed" },
  { label: "Answer", detail: "The response returns quickly" }
];

export function InfographicFlow({ variant = "light" }: { variant?: "light" | "dark" }) {
  const width = 760;
  const height = 190;
  const x = d3
    .scalePoint<string>()
    .domain(steps.map((step) => step.label))
    .range([72, width - 72]);
  const y = 82;
  const isDark = variant === "dark";

  return (
    <svg
      aria-labelledby="ai-flow-title ai-flow-desc"
      className="h-auto w-full"
      role="img"
      viewBox={`0 0 ${width} ${height}`}
    >
      <title id="ai-flow-title">AI infrastructure flow</title>
      <desc id="ai-flow-desc">
        A prompt travels through data-center servers, electricity use, and cooling before
        returning an answer.
      </desc>
      <g>
        {steps.slice(0, -1).map((step) => {
          const start = x(step.label) ?? 0;
          const end = x(steps[steps.indexOf(step) + 1].label) ?? 0;

          return (
            <g key={`${step.label}-connector`}>
              <line
                stroke={isDark ? "rgba(255,255,255,0.74)" : "#94a3b8"}
                strokeLinecap="round"
                strokeWidth="3"
                x1={start + 48}
                x2={end - 48}
                y1={y}
                y2={y}
              />
              <path
                d={`M ${end - 54} ${y - 7} L ${end - 42} ${y} L ${end - 54} ${y + 7}`}
                fill="none"
                stroke={isDark ? "#ffffff" : "#0f766e"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </g>
          );
        })}
      </g>
      <g>
        {steps.map((step, index) => {
          const cx = x(step.label) ?? 0;
          const fill = isDark ? "rgba(2,6,23,0.9)" : "#f8fafc";
          const stroke = index === 0 || index === steps.length - 1 ? "#5eead4" : "#7dd3fc";

          return (
            <g key={step.label}>
              <circle cx={cx} cy={y} fill={fill} r="42" stroke={stroke} strokeWidth="3" />
              <circle cx={cx} cy={y} fill={stroke} r="8" />
              <text
                fill={isDark ? "#ffffff" : "#0f172a"}
                fontSize="16"
                fontWeight="700"
                textAnchor="middle"
                x={cx}
                y="150"
              >
                {step.label}
              </text>
              <text
                fill={isDark ? "rgba(255,255,255,0.92)" : "#475569"}
                fontSize="11"
                textAnchor="middle"
                x={cx}
                y="169"
              >
                {step.detail}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
