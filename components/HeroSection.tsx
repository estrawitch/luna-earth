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

export function HeroSection() {
  const heroImage = siteImages.heroServerRoom;

  return (
    <section
      aria-label="AI Footprint Lab introduction"
      className="relative flex min-h-[86vh] w-full items-center overflow-hidden bg-slate-950 px-6 py-14 text-white sm:px-8"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2, 6, 23, 0.98), rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.64)), url(${heroImage.localPath})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-lg bg-slate-950/70 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm sm:p-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-cyan-200">
            Student-built environmental technology project
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            AI Footprint Lab
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-white sm:text-xl">
            AI feels invisible, but every answer depends on real-world infrastructure:
            servers, electricity, cooling, chips, and data centers.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-100">
            The mission is to help students understand AI in a balanced way: what it
            makes possible, what resources it uses, and how better design can reduce
            long-term environmental and economic costs.
          </p>

          <div className="mt-6">
            <ImageCredit image={heroImage} tone="dark" />
          </div>
        </div>

        <div className="rounded-lg border border-white/28 bg-slate-950/78 p-4 shadow-2xl ring-1 ring-black/30 backdrop-blur-sm">
          <InfographicFlow variant="dark" />
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:col-span-2">
          {previewCards.map((card) => (
            <article
              className="rounded-lg border border-white/28 bg-slate-950/76 p-5 text-white shadow-2xl ring-1 ring-black/30 backdrop-blur-sm"
              key={card.title}
            >
              <h2 className="text-lg font-bold text-white">{card.title}</h2>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-100">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
