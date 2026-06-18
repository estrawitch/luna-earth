"use client";

import { useEffect, useMemo, useState } from "react";
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
import { UncertaintyHistogram } from "./UncertaintyHistogram";

type OutputKind = "electricity" | "water" | "both";
type RunMode = "single" | "10" | "100" | "1000" | "custom";

type ResultSet = {
  samples: number[];
  average: number;
  lowest: number;
  highest: number;
};

const scenarioLabels: Record<ScenarioId, string> = {
  "no-added-ai": "No added AI",
  "ai-base-growth": "AI base growth",
  "ai-air-heavy": "Air-heavy cooling",
  "ai-water-assisted": "Water-assisted cooling",
  "high-efficiency-future": "Higher-efficiency future"
};

function sampleTriangular(distribution: TriangularDistribution) {
  const { min, likely, max } = distribution;

  if (min === max) return min;

  const u = Math.random();
  const c = (likely - min) / (max - min);

  if (u < c) {
    return min + Math.sqrt(u * (max - min) * (likely - min));
  }

  return max - Math.sqrt((1 - u) * (max - min) * (max - likely));
}

function runSamples(distribution: TriangularDistribution, count: number): ResultSet {
  const samples = Array.from({ length: count }, () => sampleTriangular(distribution));
  const average = samples.reduce((sum, value) => sum + value, 0) / samples.length;
  const lowest = Math.min(...samples);
  const highest = Math.max(...samples);

  return { samples, average, lowest, highest };
}

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

function getRunCount(mode: RunMode, customTrials: number) {
  if (mode === "single") return 1;
  if (mode === "custom") return customTrials;
  return Number(mode);
}

function getCustomError(value: string) {
  if (value.trim() === "") return "Enter a whole number from 1 to 10,000.";
  if (!/^\d+$/.test(value)) return "Use a whole number without decimals.";

  const parsed = Number(value);

  if (parsed < 1) return "Use at least 1 trial.";
  if (parsed > 10_000) return "Use 10,000 trials or fewer.";
  return "";
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

function ResultBlock({
  distribution,
  kind,
  mode,
  result
}: {
  distribution?: TriangularDistribution;
  kind: Exclude<OutputKind, "both">;
  mode: RunMode;
  result?: ResultSet;
}) {
  if (!distribution || !result) return null;

  const isSingle = mode === "single";
  const current = result.samples[0] ?? 0;

  return (
    <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            {isSingle ? "Random scenario" : "Many-run pattern"}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-950">
            {kind === "electricity" ? "Electricity" : "Direct water"}
          </h3>
        </div>
        <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          Simulated estimate
        </p>
      </div>

      {isSingle ? (
        <p className="text-3xl font-bold leading-tight text-slate-950">
          {formatEstimate(current, distribution.unit)}
        </p>
      ) : (
        <>
          <dl className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Average
              </dt>
              <dd className="mt-1 text-lg font-bold text-slate-950">
                {formatEstimate(result.average, distribution.unit)}
              </dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Lowest
              </dt>
              <dd className="mt-1 text-lg font-bold text-slate-950">
                {formatEstimate(result.lowest, distribution.unit)}
              </dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Highest
              </dt>
              <dd className="mt-1 text-lg font-bold text-slate-950">
                {formatEstimate(result.highest, distribution.unit)}
              </dd>
            </div>
          </dl>
          <UncertaintyHistogram distribution={distribution} samples={result.samples} />
          <p className="text-sm leading-6 text-slate-600">
            Running the simulation many times shows the pattern behind the random
            numbers. One run is a possible future; many runs show which outcomes are
            more common in the model.
          </p>
        </>
      )}

      <PerspectiveCallout>{perspectiveSentence(kind, isSingle ? current : result.average)}</PerspectiveCallout>

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
  const [runMode, setRunMode] = useState<RunMode>("single");
  const [customInput, setCustomInput] = useState("250");
  const [reroll, setReroll] = useState(0);
  const [electricityResult, setElectricityResult] = useState<ResultSet>();
  const [waterResult, setWaterResult] = useState<ResultSet>();

  const scenario = useMemo(
    () => dataCenterScenarios.find((item) => item.id === scenarioId) ?? dataCenterScenarios[0],
    [scenarioId]
  );
  const customError = runMode === "custom" ? getCustomError(customInput) : "";
  const customTrials = customError ? 1 : Number(customInput);
  const runCount = getRunCount(runMode, customTrials);
  const electricityDistribution = getDistribution(scenario, "electricity", region);
  const waterDistribution = getDistribution(scenario, "water", region);
  const showElectricity = output === "electricity" || output === "both";
  const showWater = output === "water" || output === "both";
  const globalWaterLimited = region === "global" && showWater && !waterDistribution;

  useEffect(() => {
    if (electricityDistribution && showElectricity) {
      setElectricityResult(runSamples(electricityDistribution, runCount));
    } else {
      setElectricityResult(undefined);
    }

    if (waterDistribution && showWater && !customError) {
      setWaterResult(runSamples(waterDistribution, runCount));
    } else {
      setWaterResult(undefined);
    }
  }, [
    electricityDistribution,
    waterDistribution,
    showElectricity,
    showWater,
    runCount,
    reroll,
    customError
  ]);

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
            What happens if AI is not used?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            This simulator generates one plausible outcome from a documented probability
            model. Values near the most likely estimate appear more often than values near
            the outer support bounds.
          </p>
        </div>
        <button
          className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          onClick={() => setReroll((value) => value + 1)}
          type="button"
        >
          {runMode === "single" ? "Generate another scenario" : "Run simulation"}
        </button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
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

        <label className="text-sm font-semibold text-slate-800">
          Run mode
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-950 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(event) => setRunMode(event.target.value as RunMode)}
            value={runMode}
          >
            <option value="single">Single run</option>
            <option value="10">10 runs</option>
            <option value="100">100 runs</option>
            <option value="1000">1,000 runs</option>
            <option value="custom">Custom n trials</option>
          </select>
        </label>
      </div>

      {runMode === "custom" ? (
        <div className="mt-4 max-w-sm">
          <label className="text-sm font-semibold text-slate-800">
            Custom n trials
            <input
              aria-describedby="custom-trials-help custom-trials-error"
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-950 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              inputMode="numeric"
              max={10_000}
              min={1}
              onChange={(event) => setCustomInput(event.target.value)}
              value={customInput}
            />
          </label>
          <p className="mt-2 text-xs leading-5 text-slate-500" id="custom-trials-help">
            Choose how many trials to run. This works like a coin-flip simulator:
            one trial can be surprising, but many trials usually reveal the model&apos;s
            pattern.
          </p>
          {customError ? (
            <p className="mt-2 text-sm font-semibold text-red-700" id="custom-trials-error">
              {customError}
            </p>
          ) : null}
        </div>
      ) : null}

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

      {customError && runMode === "custom" ? null : (
        <div aria-live="polite" className="mt-6 grid gap-5">
          {showElectricity ? (
            <ResultBlock
              distribution={electricityDistribution}
              kind="electricity"
              mode={runMode}
              result={electricityResult}
            />
          ) : null}

          {showWater && waterDistribution ? (
            <ResultBlock
              distribution={waterDistribution}
              kind="water"
              mode={runMode}
              result={waterResult}
            />
          ) : null}

          {globalWaterLimited ? (
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-5 text-sm leading-6 text-sky-950">
              This v1 model has a source-backed U.S. water range and a large-facility
              water example, but no source-backed global data-center water total.
            </div>
          ) : null}
        </div>
      )}

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
