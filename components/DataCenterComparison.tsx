"use client";

import { useMemo, useState } from "react";
import {
  dataCenterScenarios,
  type DataCenterScenario,
  type RegionScale,
  type ScenarioId,
  type TriangularDistribution
} from "../data/dataCenterScenarios";
import {
  homesPoweredForOneYear,
  litersToGallons,
  litersToOlympicPools,
  litersToOneGallonJugs
} from "../data/contextConversions";
import { AssumptionsDrawer } from "./AssumptionsDrawer";
import { CoolingTradeoffInfographic } from "./CoolingTradeoffInfographic";
import { PerspectiveCallout } from "./PerspectiveCallout";

type OutputKind = "electricity" | "water" | "both";

const scenarioLabels: Record<ScenarioId, string> = {
  "no-added-ai": "No added AI",
  "ai-base-growth": "AI base growth",
  "ai-air-heavy": "Air-heavy cooling",
  "ai-water-assisted": "Water-assisted cooling",
  "high-efficiency-future": "Higher-efficiency future"
};

function formatNumber(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits
  }).format(value);
}

function formatEstimate(value: number, unit: string) {
  const digits = value < 10 && value !== 0 ? 1 : 0;
  return `${formatNumber(value, digits)} ${unit}`;
}

function getDistribution(
  scenario: DataCenterScenario,
  kind: Exclude<OutputKind, "both">,
  region: RegionScale
) {
  if (kind === "electricity") return scenario.electricityTwh[region];
  return scenario.directWaterLitersPerDay?.[region];
}

function perspectiveSentence(kind: Exclude<OutputKind, "both">, value: number) {
  if (kind === "electricity") {
    const homes = homesPoweredForOneYear(value);
    return `That is roughly enough electricity for ${formatNumber(homes)} average U.S. homes for one year.`;
  }

  if (value === 0) {
    return "This baseline adds no modeled AI-specific direct water use.";
  }

  const gallons = litersToGallons(value);
  const pools = litersToOlympicPools(value);

  if (pools >= 1) {
    return `That is about ${formatNumber(pools, 1)} Olympic-size pools, or ${formatNumber(gallons)} one-gallon amounts of water.`;
  }

  return `That is about ${formatNumber(litersToOneGallonJugs(value))} one-gallon jugs.`;
}

function getLikelyPosition(distribution: TriangularDistribution) {
  if (distribution.min === distribution.max) return 50;
  return ((distribution.likely - distribution.min) / (distribution.max - distribution.min)) * 100;
}

function RangeVisualization({ distribution }: { distribution: TriangularDistribution }) {
  if (distribution.min === distribution.max) {
    return (
      <div
        aria-label="Fixed estimate with no modeled spread"
        className="rounded-lg border border-slate-200 bg-slate-50 p-4"
      >
        <div className="rounded-md bg-teal-700 px-4 py-8 text-center text-base font-bold text-white">
          Fixed baseline: no modeled spread
        </div>
      </div>
    );
  }

  const likelyPosition = getLikelyPosition(distribution);

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div
        aria-label={`Range from ${formatEstimate(distribution.min, distribution.unit)} to ${formatEstimate(
          distribution.max,
          distribution.unit
        )}, with likely value ${formatEstimate(distribution.likely, distribution.unit)}`}
        className="relative pt-7"
        role="img"
      >
        <div className="h-3 rounded-full bg-gradient-to-r from-sky-300 via-teal-500 to-amber-400" />
        <div
          className="absolute top-0 flex -translate-x-1/2 flex-col items-center"
          style={{ left: `${likelyPosition}%` }}
        >
          <span className="mb-1 rounded-full bg-slate-950 px-2 py-1 text-xs font-bold text-white">
            Likely
          </span>
          <span className="h-6 w-1 rounded-full bg-slate-950" />
        </div>
        <div className="mt-4 flex justify-between gap-3 text-xs font-semibold text-slate-600">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>
    </div>
  );
}

function ResultBlock({
  distribution,
  kind
}: {
  distribution?: TriangularDistribution;
  kind: Exclude<OutputKind, "both">;
}) {
  if (!distribution) return null;

  return (
    <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Source-backed range
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-950">
            {kind === "electricity" ? "Electricity" : "Direct water"}
          </h3>
        </div>
        <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          Low / likely / high
        </p>
      </div>

      <dl className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-slate-50 p-3">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Low
          </dt>
          <dd className="mt-1 text-lg font-bold text-slate-950">
            {formatEstimate(distribution.min, distribution.unit)}
          </dd>
        </div>
        <div className="rounded-lg bg-teal-50 p-3">
          <dt className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Likely
          </dt>
          <dd className="mt-1 text-lg font-bold text-slate-950">
            {formatEstimate(distribution.likely, distribution.unit)}
          </dd>
        </div>
        <div className="rounded-lg bg-slate-50 p-3">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            High
          </dt>
          <dd className="mt-1 text-lg font-bold text-slate-950">
            {formatEstimate(distribution.max, distribution.unit)}
          </dd>
        </div>
      </dl>

      <RangeVisualization distribution={distribution} />

      <PerspectiveCallout>{perspectiveSentence(kind, distribution.likely)}</PerspectiveCallout>

      <div className="space-y-2 text-sm leading-6 text-slate-600">
        <p>
          <span className="font-semibold text-slate-800">Source note:</span>{" "}
          {distribution.sourceNote}
        </p>
        <p>
          <span className="font-semibold text-slate-800">Model note:</span>{" "}
          {distribution.distributionNote}
        </p>
      </div>
    </div>
  );
}

export function DataCenterComparison() {
  const [region, setRegion] = useState<RegionScale>("global");
  const [scenarioId, setScenarioId] = useState<ScenarioId>("ai-base-growth");
  const [output, setOutput] = useState<OutputKind>("both");

  const scenario = useMemo(
    () => dataCenterScenarios.find((item) => item.id === scenarioId) ?? dataCenterScenarios[0],
    [scenarioId]
  );
  const electricityDistribution = getDistribution(scenario, "electricity", region);
  const waterDistribution = getDistribution(scenario, "water", region);
  const showElectricity = output === "electricity" || output === "both";
  const showWater = output === "water" || output === "both";
  const globalWaterLimited = region === "global" && showWater && !waterDistribution;

  return (
    <section
      aria-labelledby="comparison-heading"
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Interactive comparison
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950" id="comparison-heading">
            Compare low, likely, and high AI infrastructure estimates
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Choose a region, scenario, and output to see the range behind each estimate.
            The likely value is the center of the classroom model.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        <label className="text-sm font-semibold text-slate-800">
          Region
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-950 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(event) => setRegion(event.target.value as RegionScale)}
            value={region}
          >
            <option value="global">Global</option>
            <option value="us">United States</option>
          </select>
        </label>

        <label className="text-sm font-semibold text-slate-800 lg:col-span-2">
          Scenario
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-950 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(event) => setScenarioId(event.target.value as ScenarioId)}
            value={scenarioId}
          >
            {dataCenterScenarios.map((item) => (
              <option key={item.id} value={item.id}>
                {scenarioLabels[item.id]}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-slate-800">
          Output
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-950 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(event) => setOutput(event.target.value as OutputKind)}
            value={output}
          >
            <option value="electricity">Electricity</option>
            <option value="water">Water</option>
            <option value="both">Both</option>
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-base font-semibold text-slate-950">{scenario.label}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{scenario.shortDescription}</p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
          {scenario.coolingNotes.map((note) => (
            <li className="flex gap-2" key={note}>
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <CoolingTradeoffInfographic />
      </div>

      <div aria-live="polite" className="mt-6 grid gap-5">
        {showElectricity ? (
          <ResultBlock distribution={electricityDistribution} kind="electricity" />
        ) : null}

        {showWater && waterDistribution ? (
          <ResultBlock distribution={waterDistribution} kind="water" />
        ) : null}

        {globalWaterLimited ? (
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-5 text-sm leading-6 text-sky-950">
            Global direct-water reporting is not strong enough here to show a sourced
            range, but the United States view includes water estimates.
          </div>
        ) : null}
      </div>

      <div className="mt-6 space-y-4">
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          This model is educational, not a precise forecast. Real impacts depend on
          model size, hardware, data-center efficiency, cooling method, electricity
          source, location, and usage volume. The reason high estimates are concerning is
          that they can mean more pressure on electricity grids, local water supplies,
          utility planning, and emissions targets.
        </p>

        {scenario.id === "no-added-ai" ? (
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            &quot;No added AI&quot; means no additional AI-specific data-center workload in
            this scenario. It does not mean all computer or internet activity has zero
            environmental impact.
          </p>
        ) : null}

        <p className="text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-800">Scenario caveat:</span>{" "}
          {scenario.caveat}
        </p>

        <AssumptionsDrawer
          entries={[
            {
              label: `${region === "global" ? "Global" : "United States"} electricity`,
              distribution: electricityDistribution
            },
            {
              label: `${region === "global" ? "Global" : "United States"} direct water`,
              distribution: waterDistribution
            }
          ]}
        />
      </div>
    </section>
  );
}
