import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <HeroSection />
      <StatsSection />
    </main>
  );
}
