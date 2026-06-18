import { ElectricityInfographic } from "./ElectricityInfographic";
import { impactStats } from "../data/impactStats";
import { DataCenterComparison } from "./DataCenterComparison";
import { InfrastructureImagePanel } from "./InfrastructureImagePanel";
import { StatCard } from "./StatCard";
import { WaterInfographic } from "./WaterInfographic";

export function StatsSection() {
  return (
    <section className="w-full bg-white px-6 py-16 text-slate-950 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Week 2 Research Lab
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            Source-backed AI footprint statistics
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            These numbers are real, but the simulator uses random sampling because future
            data-center impact is uncertain.
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
          <h3 className="text-base font-semibold text-amber-950">
            Why these numbers should get our attention
          </h3>
          <p className="mt-2">
            Energy and water use at data-center scale can affect real communities. Large
            electricity demand can pressure local grids and climate goals, while large
            water demand can become serious in dry regions or places with limited public
            reporting. The concern is not that AI is automatically bad; it is that growth
            this fast needs careful planning, cleaner power, efficient hardware, and honest
            local data.
          </p>
        </div>

        <InfrastructureImagePanel />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <ElectricityInfographic />
          <WaterInfographic />
        </div>

        <div className="mt-10">
          <DataCenterComparison />
        </div>
      </div>
    </section>
  );
}
