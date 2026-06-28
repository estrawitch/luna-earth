import { HeroSection } from "../components/HeroSection";
import { HiddenCostSection } from "../components/HiddenCostSection";
import { DataCenterComparison } from "../components/DataCenterComparison";
import { OverviewSection } from "../components/OverviewSection";
import { SiteHeader } from "../components/SiteHeader";
import { StatsSection } from "../components/StatsSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <HeroSection />
        <OverviewSection />
        <StatsSection />
        <HiddenCostSection />
        <section
          className="scroll-mt-28 bg-slate-50 px-6 py-16 text-slate-950 sm:px-8"
          id="interactive-comparison"
        >
          <div className="mx-auto max-w-6xl">
            <DataCenterComparison />
          </div>
        </section>
      </main>
    </>
  );
}
