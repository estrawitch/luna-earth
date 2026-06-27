import { HeroSection } from "../components/HeroSection";
import { HiddenCostSection } from "../components/HiddenCostSection";
import { StatsSection } from "../components/StatsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <HeroSection />
      <HiddenCostSection />
      <StatsSection />
    </main>
  );
}
