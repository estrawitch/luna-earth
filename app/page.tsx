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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-12 sm:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-700">
          Student-built environmental technology project
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-6xl">
          AI Footprint Lab
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
          AI feels invisible, but every answer depends on real-world infrastructure:
          servers, electricity, cooling, chips, and data centers.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          The mission is to help students understand AI in a balanced way: what it
          makes possible, what resources it uses, and how better design can reduce
          long-term environmental and economic costs.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {previewCards.map((card) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              key={card.title}
            >
              <h2 className="text-lg font-semibold text-slate-950">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
