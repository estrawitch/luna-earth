import type { CSSProperties } from "react";
import { siteImages } from "../data/siteImages";
import { ImageCredit } from "./ImageCredit";
import { InfographicFlow } from "./InfographicFlow";

type PreviewCard = {
  title: string;
  description: string;
};

const previewCards: PreviewCard[] = [
  {
    title: "Hidden infrastructure of AI",
    description:
      "AI tools feel instant, but they depend on data centers, servers, chips, electricity, cooling, and networks."
  },
  {
    title: "Benefits and trade-offs",
    description:
      "AI can support learning, science, accessibility, and productivity while also raising questions about energy, water, cost, and reliability."
  },
  {
    title: "Future solutions",
    description:
      "Smaller models, efficient chips, renewable power, better cooling, and responsible use can help reduce AI's footprint over time."
  }
];

const heroSectionStyle: CSSProperties = {
  alignItems: "center",
  backgroundPosition: "center",
  backgroundSize: "cover",
  color: "#ffffff",
  display: "flex",
  minHeight: "86vh",
  overflow: "hidden",
  padding: "3.5rem 1.5rem",
  width: "100%"
};

const heroGridStyle: CSSProperties = {
  alignItems: "center",
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))",
  margin: "0 auto",
  maxWidth: "72rem",
  width: "100%"
};

const glassPanelStyle: CSSProperties = {
  background: "rgba(2, 6, 23, 0.74)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "0.5rem",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.55)",
  padding: "1.5rem"
};

const flowPanelStyle: CSSProperties = {
  background: "rgba(2, 6, 23, 0.82)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "0.5rem",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.55)",
  padding: "1rem"
};

const previewGridStyle: CSSProperties = {
  display: "grid",
  gap: "1rem",
  gridColumn: "1 / -1",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))"
};

const previewCardStyle: CSSProperties = {
  background: "rgba(2, 6, 23, 0.78)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "0.5rem",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.45)",
  color: "#ffffff",
  padding: "1.25rem"
};

export function HeroSection() {
  const heroImage = siteImages.heroServerRoom;

  return (
    <section
      aria-label="AI Footprint Lab introduction"
      className="relative flex min-h-[86vh] w-full items-center overflow-hidden bg-slate-950 px-6 py-14 text-white sm:px-8"
      style={{
        ...heroSectionStyle,
        backgroundImage: `linear-gradient(90deg, rgba(2, 6, 23, 0.98), rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.64)), url(${heroImage.localPath})`,
      }}
    >
      <div
        className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]"
        style={heroGridStyle}
      >
        <div
          className="rounded-lg bg-slate-950/70 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm sm:p-6"
          style={glassPanelStyle}
        >
          <p
            className="mb-4 text-sm font-bold uppercase tracking-wide text-cyan-200"
            style={{
              color: "#a5f3fc",
              fontSize: "0.875rem",
              fontWeight: 800,
              letterSpacing: "0.04em",
              margin: "0 0 1rem",
              textTransform: "uppercase"
            }}
          >
            Student-built environmental technology project
          </p>

          <h1
            className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl"
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: 0,
              maxWidth: "48rem"
            }}
          >
            AI Footprint Lab
          </h1>

          <p
            className="mt-6 max-w-3xl text-lg font-medium leading-8 text-white sm:text-xl"
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
              fontWeight: 600,
              lineHeight: 1.6,
              margin: "1.5rem 0 0",
              maxWidth: "48rem"
            }}
          >
            AI feels invisible, but every answer depends on real-world infrastructure:
            servers, electricity, cooling, chips, and data centers.
          </p>

          <p
            className="mt-4 max-w-3xl text-base leading-7 text-slate-100"
            style={{
              color: "#f1f5f9",
              fontSize: "1rem",
              lineHeight: 1.75,
              margin: "1rem 0 0",
              maxWidth: "48rem"
            }}
          >
            The mission is to help students understand AI in a balanced way: what it
            makes possible, what resources it uses, and how better design can reduce
            long-term environmental and economic costs.
          </p>

          <div className="mt-6">
            <ImageCredit image={heroImage} tone="dark" />
          </div>
        </div>

        <div
          className="rounded-lg border border-white/30 bg-slate-950/80 p-4 shadow-2xl ring-1 ring-black/30 backdrop-blur-sm"
          style={flowPanelStyle}
        >
          <InfographicFlow variant="dark" />
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:col-span-2" style={previewGridStyle}>
          {previewCards.map((card) => (
            <article
              className="rounded-lg border border-white/30 bg-slate-950/75 p-5 text-white shadow-2xl ring-1 ring-black/30 backdrop-blur-sm"
              key={card.title}
              style={previewCardStyle}
            >
              <h2
                className="text-lg font-bold text-white"
                style={{
                  color: "#ffffff",
                  fontSize: "1.125rem",
                  fontWeight: 800,
                  lineHeight: 1.35,
                  margin: 0
                }}
              >
                {card.title}
              </h2>
              <p
                className="mt-3 text-sm font-medium leading-6 text-slate-100"
                style={{
                  color: "#f1f5f9",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  lineHeight: 1.55,
                  margin: "0.75rem 0 0"
                }}
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
