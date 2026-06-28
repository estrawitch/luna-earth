import * as d3 from "d3";
import {
  hiddenCostItems,
  hiddenCostSourceLinks,
  memphisCaseStudy,
  physicalFootprintSteps,
  type HiddenCostCategory
} from "../data/hiddenCosts";

const categoryStyles: Record<HiddenCostCategory, string> = {
  land: "border-emerald-200 bg-emerald-50 text-emerald-900",
  air: "border-cyan-200 bg-cyan-50 text-cyan-900",
  water: "border-sky-200 bg-sky-50 text-sky-900",
  grid: "border-amber-200 bg-amber-50 text-amber-950",
  community: "border-rose-200 bg-rose-50 text-rose-900",
  hardware: "border-violet-200 bg-violet-50 text-violet-900"
};

const svgFontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

function wrapSvgText(text: string, maxLineLength = 24) {
  const words = text.split(" ");
  const lines: string[] = [];

  words.forEach((word) => {
    const currentLine = lines[lines.length - 1];
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (!currentLine) {
      lines.push(word);
      return;
    }

    if (nextLine.length <= maxLineLength) {
      lines[lines.length - 1] = nextLine;
      return;
    }

    lines.push(word);
  });

  return lines;
}

function PhysicalFootprintFlow() {
  const width = 900;
  const height = 225;
  const x = d3
    .scalePoint<string>()
    .domain(physicalFootprintSteps.map((step) => step.label))
    .range([70, width - 70]);
  const y = 84;

  return (
    <figure className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
        AI prompt -&gt; physical footprint
      </p>
      <h3 className="mt-1 text-lg font-bold text-slate-950">
        A quick answer still depends on a real place
      </h3>
      <svg
        aria-labelledby="physical-footprint-title physical-footprint-desc"
        className="mt-5 h-auto w-full"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <title id="physical-footprint-title">AI prompt to physical footprint</title>
        <desc id="physical-footprint-desc">
          A prompt flows through GPUs, electricity, cooling, land infrastructure, and
          local community impacts.
        </desc>
        <g>
          {physicalFootprintSteps.slice(0, -1).map((step, index) => {
            const start = x(step.label) ?? 0;
            const end = x(physicalFootprintSteps[index + 1].label) ?? 0;

            return (
              <g key={`${step.label}-connector`}>
                <line
                  stroke="#94a3b8"
                  strokeLinecap="round"
                  strokeWidth="3"
                  x1={start + 34}
                  x2={end - 34}
                  y1={y}
                  y2={y}
                />
                <path
                  d={`M ${end - 42} ${y - 7} L ${end - 30} ${y} L ${end - 42} ${y + 7}`}
                  fill="none"
                  stroke="#0f766e"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </g>
            );
          })}
        </g>
        <g>
          {physicalFootprintSteps.map((step, index) => {
            const cx = x(step.label) ?? 0;
            const isEdge = index === 0 || index === physicalFootprintSteps.length - 1;
            const detailLines = wrapSvgText(step.detail);

            return (
              <g key={step.label}>
                <circle
                  cx={cx}
                  cy={y}
                  fill={isEdge ? "#ecfeff" : "#f8fafc"}
                  r="34"
                  stroke={isEdge ? "#0f766e" : "#38bdf8"}
                  strokeWidth="3"
                />
                <circle cx={cx} cy={y} fill={isEdge ? "#0f766e" : "#0284c7"} r="7" />
                <text
                  fill="#0f172a"
                  fontSize="15"
                  fontWeight="800"
                  style={{ fontFamily: svgFontFamily }}
                  textAnchor="middle"
                  x={cx}
                  y="148"
                >
                  {step.label}
                </text>
                <text
                  fill="#475569"
                  fontSize="11"
                  style={{ fontFamily: svgFontFamily }}
                  textAnchor="middle"
                  x={cx}
                  y="168"
                >
                  {detailLines.map((line, lineIndex) => (
                    <tspan dy={lineIndex === 0 ? 0 : 14} key={line} x={cx}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      <figcaption className="mt-3 text-sm leading-6 text-slate-600">
        The point is not that every project causes every impact. It is that AI systems
        depend on choices that happen in real communities.
      </figcaption>
    </figure>
  );
}

export function HiddenCostSection() {
  return (
    <section
      className="w-full scroll-mt-28 bg-white px-6 py-16 text-slate-950 sm:px-8"
      id="hidden-costs"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Hidden Cost Of AI
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            AI does not live in the cloud. It lives somewhere.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Every AI answer depends on physical infrastructure: land, buildings, chips,
            electricity, cooling, water systems, roads, substations, and people who live
            nearby. The impact depends on where a data center is built and how it is
            powered, cooled, permitted, and governed.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {hiddenCostItems.map((item) => (
            <article
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              key={item.id}
            >
              <p
                className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${categoryStyles[item.category]}`}
              >
                {item.category}
              </p>
              <h3 className="mt-4 text-lg font-bold leading-6 text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.summary}</p>
              <p className="mt-4 rounded-lg border border-teal-100 bg-teal-50 p-3 text-sm leading-6 text-teal-950">
                <span className="font-semibold">Local question:</span>{" "}
                {item.localQuestion}
              </p>
              <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                <span className="font-semibold text-slate-900">Better planning:</span>{" "}
                {item.mitigation}
              </p>
              {item.sourceName && item.sourceUrl ? (
                <a
                  className="mt-auto pt-5 text-sm font-semibold text-teal-700 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  href={item.sourceUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.sourceName}
                </a>
              ) : null}
            </article>
          ))}
        </div>

        <PhysicalFootprintFlow />

        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Case study
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-950">
              Case Study: xAI in Memphis
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The xAI Memphis controversy shows why AI infrastructure is also a
              community-governance issue: fast buildouts can raise questions about air
              permits, onsite power generation, local health, transparency, and who
              benefits from the project.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {memphisCaseStudy.map((item) => (
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-4" key={item.heading}>
                <h4 className="text-base font-bold text-slate-950">{item.heading}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              <span className="font-semibold">Community concerns:</span> Residents and
              environmental groups raised air-quality, permitting, grid-stress, public
              comment, and nearby-neighborhood concerns.
            </p>
            <p className="rounded-lg border border-teal-200 bg-teal-50 p-4 text-sm leading-6 text-teal-950">
              <span className="font-semibold">Claimed benefits:</span> xAI and local
              officials pointed to tax revenue, jobs, substation investment, and
              water-recycling investment.
            </p>
          </div>

          <a
            className="mt-5 inline-flex text-sm font-semibold text-teal-700 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            href="https://apnews.com/article/memphis-xai-elon-musk-pollution-naacp-571c16950259b382f9eae61bd59260ef"
            rel="noreferrer"
            target="_blank"
          >
            Read the AP News case study source
          </a>
        </div>

        <p className="mt-8 rounded-lg border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700 shadow-sm">
          <span className="font-semibold text-slate-950">Important caveat:</span> Not
          every data center has the same footprint. A facility built on reused industrial
          land with clean power, strong cooling design, and public reporting is different
          from one built quickly with fossil-fuel backup power near already burdened
          communities. Data centers can create land-use pressure; in some locations, that
          may mean tree clearing, farmland conversion, habitat fragmentation, or new
          power infrastructure.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {hiddenCostSourceLinks.map((source) => (
            <a
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-teal-700 underline-offset-4 shadow-sm hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              href={source.url}
              key={source.label}
              rel="noreferrer"
              target="_blank"
            >
              {source.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
