# Week 2 Source-Backed Statistics Spec

## Feature Summary

Build a quantified statistics section for AI Footprint Lab that helps students compare data-center energy and water trade-offs using sourced numbers, visible uncertainty, and plain-language context.

The feature is data-center scale only in v1. It must not estimate exact per-prompt AI energy or water use.

Users should be able to compare:

- No added AI workload
- AI growth with air-heavy cooling
- AI growth with water/evaporative or liquid-assisted cooling
- Higher-efficiency future scenario

The section should make one idea clear:

> AI infrastructure can create real energy and water demand, but the impact depends on scale, location, cooling method, electricity source, and efficiency improvements.

## Goals

- Add source-backed statistics cards with real numbers and caveats.
- Add an interactive comparison panel titled "What happens if AI is not used?"
- Use a random number generator to produce one realistic scenario estimate from a documented probability distribution.
- Put large numbers into human-scale context, such as household electricity use, gallon jugs, towns, and Olympic-size pools.
- Keep all data static in the repository.

## Non-Goals

- No backend.
- No database.
- No live API calls.
- No secret keys.
- No personalized footprint claims.
- No exact per-prompt estimates in v1.
- No claim that one cooling method is universally best.

## Target Audience

Primary audience:

- Middle school and high school students
- Teachers
- Parents
- Environmental science learners
- Beginners curious about AI and sustainability

Secondary audience:

- STEM mentors
- University admissions readers
- Community workshop participants

Writing should be clear enough for students while still being credible to technical readers.

## Recommended Files For Implementation

When this spec is implemented in code, use the existing frontend-only Next.js structure.

Suggested new files:

```text
data/impactStats.ts
data/dataCenterScenarios.ts
data/contextConversions.ts
components/StatCard.tsx
components/StatsSection.tsx
components/DataCenterComparison.tsx
components/AssumptionsDrawer.tsx
components/PerspectiveCallout.tsx
```

If the project later adopts a `src/` folder, place the same folders under `src/`.

## Source-Backed Stat Cards

Each stat card must include:

- A number, reported upper example, or modeled distribution
- Unit
- Category
- Year
- Source name
- Source URL
- Plain-language meaning
- Caveat

Recommended TypeScript shape:

```ts
export type ImpactCategory = "energy" | "water" | "efficiency" | "context";

export type ImpactStat = {
  id: string;
  title: string;
  value: string;
  unit: string;
  category: ImpactCategory;
  year: number;
  sourceName: string;
  sourceUrl: string;
  plainLanguageMeaning: string;
  caveat: string;
};
```

Required starter cards:

```ts
export const impactStats: ImpactStat[] = [
  {
    id: "global-data-center-electricity-2024",
    title: "Estimated global data-center electricity use",
    value: "415",
    unit: "TWh in 2024",
    category: "energy",
    year: 2025,
    sourceName: "International Energy Agency, Energy and AI",
    sourceUrl: "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
    plainLanguageMeaning:
      "Data centers used about as much electricity as a medium-sized country in 2024.",
    caveat:
      "This covers data centers broadly, not only AI. Estimates vary by data-center type and accounting method."
  },
  {
    id: "global-data-center-electricity-2030",
    title: "Projected global data-center electricity use",
    value: "945",
    unit: "TWh by 2030",
    category: "energy",
    year: 2025,
    sourceName: "International Energy Agency, Energy and AI",
    sourceUrl: "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
    plainLanguageMeaning:
      "IEA projects global data-center electricity demand could more than double by 2030 in its base case.",
    caveat:
      "This is a projection, not a guarantee. Future demand depends on AI adoption, hardware efficiency, software efficiency, and energy-system bottlenecks."
  },
  {
    id: "us-data-center-growth-2028",
    title: "Projected U.S. data-center electricity growth",
    value: "Double or triple",
    unit: "by 2028",
    category: "energy",
    year: 2024,
    sourceName: "U.S. Department of Energy and Lawrence Berkeley National Laboratory",
    sourceUrl:
      "https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers",
    plainLanguageMeaning:
      "DOE says domestic data-center electricity demand could grow very quickly this decade.",
    caveat:
      "The public DOE release summarizes the LBNL report. Use the full LBNL report for detailed scenario tables if adding more precise U.S. values."
  },
  {
    id: "large-data-center-water",
    title: "Large data-center water consumption example",
    value: "Up to 5 million",
    unit: "gallons per day",
    category: "water",
    year: 2025,
    sourceName: "Environmental and Energy Study Institute",
    sourceUrl: "https://www.eesi.org/articles/view/data-centers-and-water-consumption",
    plainLanguageMeaning:
      "A very large facility can use water at a scale comparable to a town.",
    caveat:
      "This is an upper-end large-facility example. Water use depends heavily on climate, cooling system, facility size, chip density, and whether non-potable or recycled water is used."
  },
  {
    id: "us-data-center-water-uncertainty",
    title: "U.S. data-center water-use uncertainty",
    value: "1.7 billion",
    unit: "liters per day",
    category: "water",
    year: 2021,
    sourceName: "David Mytton, npj Clean Water",
    sourceUrl: "https://www.nature.com/articles/s41545-021-00101-w",
    plainLanguageMeaning:
      "Data-center water use is large enough to matter locally, but facility-level transparency is limited.",
    caveat:
      "The paper notes that less than one third of data-center operators measured water consumption at the time. This makes precise comparisons difficult."
  },
  {
    id: "high-efficiency-future",
    title: "Efficiency could lower future demand",
    value: "More than 15%",
    unit: "energy savings by 2035",
    category: "efficiency",
    year: 2025,
    sourceName: "International Energy Agency, Energy and AI",
    sourceUrl: "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
    plainLanguageMeaning:
      "Better hardware, software, and infrastructure could reduce projected data-center electricity demand.",
    caveat:
      "Efficiency savings are conditional. If AI demand grows faster than efficiency improves, total energy use can still rise."
  },
  {
    id: "us-home-electricity-context",
    title: "Average U.S. home electricity use",
    value: "10,791",
    unit: "kWh per year",
    category: "context",
    year: 2024,
    sourceName: "U.S. Energy Information Administration",
    sourceUrl: "https://www.eia.gov/tools/faqs/faq.php?id=97&t=3",
    plainLanguageMeaning:
      "This conversion helps users understand data-center electricity in household terms.",
    caveat:
      "Household electricity use varies by state, home size, climate, and whether a home has solar panels."
  }
];
```

## Comparison Scenarios

The comparison panel should answer:

> What changes if the same future does or does not add major AI-driven data-center demand?

Use five scenarios in v1.

```ts
export type RegionScale = "global" | "us";
export type ScenarioId =
  | "no-added-ai"
  | "ai-base-growth"
  | "ai-air-heavy"
  | "ai-water-assisted"
  | "high-efficiency-future";

export type TriangularDistribution = {
  min: number;
  likely: number;
  max: number;
  unit: string;
  sourceNote: string;
  distributionNote: string;
};

export type DataCenterScenario = {
  id: ScenarioId;
  label: string;
  shortDescription: string;
  electricityTwh: {
    global?: TriangularDistribution;
    us?: TriangularDistribution;
  };
  directWaterLitersPerDay?: {
    global?: TriangularDistribution;
    us?: TriangularDistribution;
    facility?: TriangularDistribution;
  };
  coolingNotes: string[];
  caveat: string;
};
```

Recommended scenario defaults:

```ts
export const dataCenterScenarios: DataCenterScenario[] = [
  {
    id: "no-added-ai",
    label: "No added AI workload",
    shortDescription:
      "Shows the incremental AI-growth layer as zero so users can compare against AI-growth scenarios.",
    electricityTwh: {
      global: {
        min: 0,
        likely: 0,
        max: 0,
        unit: "TWh",
        sourceNote: "Design baseline, not a claim that all digital activity has zero footprint.",
        distributionNote: "Point mass at zero for the incremental AI-workload baseline."
      },
      us: {
        min: 0,
        likely: 0,
        max: 0,
        unit: "TWh",
        sourceNote: "Design baseline, not a claim that all digital activity has zero footprint.",
        distributionNote: "Point mass at zero for the incremental AI-workload baseline."
      }
    },
    directWaterLitersPerDay: {
      global: {
        min: 0,
        likely: 0,
        max: 0,
        unit: "liters/day",
        sourceNote: "Design baseline for incremental AI-growth comparison.",
        distributionNote: "Point mass at zero for the incremental AI-workload baseline."
      },
      us: {
        min: 0,
        likely: 0,
        max: 0,
        unit: "liters/day",
        sourceNote: "Design baseline for incremental AI-growth comparison.",
        distributionNote: "Point mass at zero for the incremental AI-workload baseline."
      }
    },
    coolingNotes: [
      "No added AI workload means no additional AI-specific data-center load in this scenario.",
      "It does not mean the user's device, internet use, or non-AI data centers have no footprint."
    ],
    caveat:
      "This is a comparison baseline, not a real-world total environmental footprint."
  },
  {
    id: "ai-base-growth",
    label: "AI base growth",
    shortDescription:
      "Uses published data-center growth projections without assuming a special cooling improvement.",
    electricityTwh: {
      global: {
        min: 700,
        likely: 945,
        max: 1200,
        unit: "TWh/year by 2030",
        sourceNote:
          "IEA base case is about 945 TWh by 2030; lower and upper values are scenario support bounds for classroom simulation.",
        distributionNote:
          "Triangular distribution centered on the IEA base case because a full observed probability distribution is not published."
      },
      us: {
        min: 325,
        likely: 450,
        max: 580,
        unit: "TWh/year by 2028",
        sourceNote:
          "LBNL scenario support bounds cited through DOE reporting; likely value is the midpoint for simulation.",
        distributionNote:
          "Triangular distribution using the published low/high scenario support bounds because a source-provided standard deviation is not published."
      }
    },
    directWaterLitersPerDay: {
      us: {
        min: 500_000_000,
        likely: 1_700_000_000,
        max: 3_000_000_000,
        unit: "liters/day",
        sourceNote:
          "Mytton reports about 1.7 billion liters/day for U.S. data centers; min/max are classroom support bounds.",
        distributionNote:
          "Triangular distribution centered on the published estimate because facility-level water reporting is incomplete."
      }
    },
    coolingNotes: [
      "Represents data-center growth without making a strong claim about one cooling method.",
      "Use this as the default comparison against no added AI workload."
    ],
    caveat:
      "This combines sourced values with transparent simulation bounds. The bounds are educational assumptions, not observed standard deviations."
  },
  {
    id: "ai-air-heavy",
    label: "AI growth with air-heavy cooling",
    shortDescription:
      "Prioritizes lower direct water use, but may require more cooling electricity in hot or dense facilities.",
    electricityTwh: {
      global: {
        min: 735,
        likely: 992,
        max: 1260,
        unit: "TWh/year by 2030",
        sourceNote:
          "Starts from the AI base growth scenario and applies a 5% cooling-energy premium as an explicit modeling assumption.",
        distributionNote:
          "Triangular distribution preserves the base-case shape while shifting the support upward for air-heavy cooling energy."
      },
      us: {
        min: 341,
        likely: 473,
        max: 609,
        unit: "TWh/year by 2028",
        sourceNote:
          "Starts from the U.S. base support and applies a 5% cooling-energy premium as an explicit modeling assumption.",
        distributionNote:
          "Triangular distribution preserves the U.S. base-case shape while shifting the support upward for air-heavy cooling energy."
      }
    },
    directWaterLitersPerDay: {
      us: {
        min: 100_000_000,
        likely: 500_000_000,
        max: 1_200_000_000,
        unit: "liters/day",
        sourceNote:
          "Lower direct water distribution support is an educational assumption based on air-heavy cooling using less onsite water than evaporative cooling.",
        distributionNote:
          "Triangular distribution centered below the base U.S. water estimate to model lower direct water use."
      }
    },
    coolingNotes: [
      "Air-heavy cooling is most useful where water is scarce or expensive.",
      "It can become harder for high-density AI racks or hot climates."
    ],
    caveat:
      "The water and energy adjustments are modeling assumptions. Real results depend on local climate, rack density, and facility design."
  },
  {
    id: "ai-water-assisted",
    label: "AI growth with water-assisted cooling",
    shortDescription:
      "Improves heat handling for dense AI hardware, but can raise direct water concerns if water is evaporated or sourced from stressed supplies.",
    electricityTwh: {
      global: {
        min: 665,
        likely: 898,
        max: 1140,
        unit: "TWh/year by 2030",
        sourceNote:
          "Starts from the AI base growth scenario and applies a 5% cooling-energy reduction as an explicit modeling assumption.",
        distributionNote:
          "Triangular distribution preserves the base-case shape while shifting the support downward for better heat handling."
      },
      us: {
        min: 309,
        likely: 428,
        max: 551,
        unit: "TWh/year by 2028",
        sourceNote:
          "Starts from the U.S. base support and applies a 5% cooling-energy reduction as an explicit modeling assumption.",
        distributionNote:
          "Triangular distribution preserves the U.S. base-case shape while shifting the support downward for better heat handling."
      }
    },
    directWaterLitersPerDay: {
      us: {
        min: 1_000_000_000,
        likely: 2_500_000_000,
        max: 5_000_000_000,
        unit: "liters/day",
        sourceNote:
          "Classroom scenario based on Mytton's U.S. water-use estimate, scaled upward to test higher water-cooling reliance. This is not a published forecast.",
        distributionNote:
          "Triangular distribution centered above the base U.S. water estimate to model higher direct water use."
      },
      facility: {
        min: 0,
        likely: 18_927_050,
        max: 18_927_050,
        unit: "liters/day",
        sourceNote:
          "EESI reports that large data centers can consume up to 5 million gallons/day; this converts that upper-end facility example to liters.",
        distributionNote:
          "Point estimate for an upper-end facility example, not a national distribution."
      }
    },
    coolingNotes: [
      "Water-assisted cooling can handle dense heat loads better than air alone.",
      "Closed-loop, non-potable, recycled, or immersion systems can reduce freshwater pressure.",
      "Open evaporative cooling can be a serious concern in water-stressed regions."
    ],
    caveat:
      "Water-assisted does not always mean wasteful, and air cooling does not always mean sustainable. Location and system design matter."
  },
  {
    id: "high-efficiency-future",
    label: "Higher-efficiency future",
    shortDescription:
      "Models the same demand pressure with stronger hardware, software, and infrastructure efficiency.",
    electricityTwh: {
      global: {
        min: 595,
        likely: 803,
        max: 1020,
        unit: "TWh/year by 2030",
        sourceNote:
          "Applies a 15% reduction to the AI base growth scenario, based on IEA's High Efficiency framing.",
        distributionNote:
          "Triangular distribution preserves the base-case shape while shifting the support downward for high-efficiency progress."
      },
      us: {
        min: 276,
        likely: 383,
        max: 493,
        unit: "TWh/year by 2028",
        sourceNote:
          "Applies a 15% reduction to the U.S. base support as a classroom efficiency scenario.",
        distributionNote:
          "Triangular distribution preserves the U.S. base-case shape while shifting the support downward for high-efficiency progress."
      }
    },
    directWaterLitersPerDay: {
      us: {
        min: 400_000_000,
        likely: 1_300_000_000,
        max: 2_400_000_000,
        unit: "liters/day",
        sourceNote:
          "Applies efficiency and improved cooling assumptions to the base U.S. water distribution.",
        distributionNote:
          "Triangular distribution centered below the base U.S. water estimate to model efficiency and improved cooling."
      }
    },
    coolingNotes: [
      "Efficiency can come from better chips, better software, better cooling, smaller models, and better scheduling.",
      "Total impact can still rise if AI demand grows faster than efficiency improves."
    ],
    caveat:
      "This is a future scenario, not a promise. It should be shown as conditional and uncertain."
  }
];
```

## RNG Probability Model

Use RNG sampling for simulator outputs. Do not show the user a range as the primary result.

For each selected scenario, generate one sampled value from the distribution and display that sampled estimate. The user can click `Generate another scenario` to resample and see a different plausible outcome, or use multi-run mode to run the same scenario many times and observe the pattern.

Use triangular distributions when sources provide a plausible support interval and most likely value but not a measured standard deviation. This approximates the real-world uncertainty shape more honestly than uniform random sampling because values near the likely estimate should occur more often than values near the support bounds.

Inputs:

- `min`: low support value
- `likely`: best estimate or midpoint
- `max`: high support value

Derived mean:

```text
(min + likely + max) / 3
```

Derived variance:

```text
(min^2 + likely^2 + max^2 - min * likely - min * max - likely * max) / 18
```

Derived standard deviation:

```text
sqrt(variance)
```

Sampling pseudocode:

```ts
export function sampleTriangular(min: number, likely: number, max: number) {
  if (min === max) return min;

  const u = Math.random();
  const c = (likely - min) / (max - min);

  if (u < c) {
    return min + Math.sqrt(u * (max - min) * (likely - min));
  }

  return max - Math.sqrt((1 - u) * (max - min) * (max - likely));
}
```

Simulation behavior:

- Generate one sampled value when the selected scenario or region changes.
- Add a `Generate another scenario` button that resamples the selected distribution.
- Display one sampled estimate, not a 10th-to-90th-percentile range.
- Add multi-run mode with preset run counts: `10`, `100`, and `1,000`.
- Add a custom `n trials` input, similar to a TI-84 coin-flip simulation program, so users can choose how many times to run the same scenario.
- Restrict custom `n` to whole numbers from `1` to `10,000` for browser performance and beginner-friendly results.
- In multi-run mode, show:
  - Number of runs
  - Average sampled result
  - Lowest sampled result
  - Highest sampled result
  - A small histogram or dot plot
  - A short explanation that many runs reveal the distribution shape
- Show the derived mean and derived standard deviation only in the assumptions drawer.
- Label every sampled output as a simulated estimate.
- If a value is a point mass, always return that exact value.

Important copy:

> This simulator generates one plausible outcome from a documented probability model. Values near the most likely estimate appear more often than values near the outer support bounds.

Multi-run copy:

> Running the simulation many times shows the pattern behind the random numbers. One run is a possible future; many runs show which outcomes are more common in the model.

Custom trials copy:

> Choose how many trials to run. This works like a coin-flip simulator: one trial can be surprising, but many trials usually reveal the model's pattern.

## Perspective Conversions

Create a small static conversion file. Every conversion must be labeled as an approximation.

```ts
export const contextConversions = {
  litersPerGallon: 3.78541,
  litersPerOneGallonJug: 3.78541,
  litersPerOlympicPoolApprox: 2_500_000,
  usHomeKwhPerYear: 10_791,
  usHomeKwhPerDay: 10_791 / 365,
  gallonsPerTownPersonPerDayLow: 100,
  gallonsPerTownPersonPerDayHigh: 500
};
```

Recommended perspective helpers:

```ts
export function twhToKwh(twh: number) {
  return twh * 1_000_000_000;
}

export function homesPoweredForOneYear(twh: number) {
  return twhToKwh(twh) / contextConversions.usHomeKwhPerYear;
}

export function homesPoweredForOneDay(twh: number) {
  return twhToKwh(twh) / contextConversions.usHomeKwhPerDay;
}

export function litersToGallons(liters: number) {
  return liters / contextConversions.litersPerGallon;
}

export function litersToOneGallonJugs(liters: number) {
  return liters / contextConversions.litersPerOneGallonJug;
}

export function litersToOlympicPools(liters: number) {
  return liters / contextConversions.litersPerOlympicPoolApprox;
}
```

Use small-scale context for smaller results:

- Gallons
- 1-gallon jugs
- Household electricity days

Use large-scale context for large results:

- Olympic-size pool equivalents
- Annual electricity for U.S. homes
- Million-home equivalents
- Town daily water-use equivalents

Do not use a lake comparison unless a specific lake volume is added as a sourced conversion constant.

## UI Requirements

### Section Layout

Use one full-width section with a constrained inner content area.

Suggested structure:

1. Section header
   - Eyebrow: `Week 2 Research Lab`
   - Heading: `Source-backed AI footprint statistics`
   - Short note: `These numbers are real, but the simulator uses random sampling because future data-center impact is uncertain.`

2. Stat cards
   - 3 to 4 cards visible in the first row on desktop
   - 1 card per row on mobile
   - Each card must show source and caveat

3. Comparison panel
   - Title: `What happens if AI is not used?`
   - Controls:
     - Region: `Global`, `United States`
     - Scenario: `No added AI`, `AI base growth`, `Air-heavy cooling`, `Water-assisted cooling`, `Higher-efficiency future`
     - Output: `Electricity`, `Water`, `Both`
     - Run mode: `Single run`, `10 runs`, `100 runs`, `1,000 runs`, `Custom n trials`
     - Custom trials input: whole number from `1` to `10,000`
   - Results:
     - Current sampled estimate for single-run mode
     - Average, lowest, and highest sampled estimates for multi-run mode
     - Small histogram or dot plot for multi-run mode
     - Perspective sentence
     - Source note
     - Caveat
   - If `Global` and `Water` are selected, show a limitation note instead of fabricating a global water total:
     `This v1 model has a source-backed U.S. water range and a large-facility water example, but no source-backed global data-center water total.`

4. Assumptions drawer
   - Triangular distribution parameters
   - Derived mean and standard deviation
   - Source notes
   - Explanation of why exact prediction is impossible

### Visual Design

The section should feel educational, credible, and calm.

Use:

- Semantic headings
- Plain cards with clear hierarchy
- Source links near numbers
- Color only as an accent, not as decoration
- Accessible controls
- No exaggerated warning language
- No dramatic claims like "AI is destroying the planet"

Suggested labels:

- `Estimated`
- `Projected`
- `Random scenario`
- `Run again`
- `Many-run pattern`
- `Source caveat`
- `Why this number varies`

### Required Caveat Text

Use this text near the simulator:

> This model is educational, not a precise forecast. Real impacts depend on model size, hardware, data-center efficiency, cooling method, electricity source, location, and usage volume.

Use this text for the no-AI scenario:

> "No added AI" means no additional AI-specific data-center workload in this scenario. It does not mean all computer or internet activity has zero environmental impact.

## Accessibility Requirements

- Use native buttons, selects, or radios for controls.
- Each control must have a visible label.
- Result updates should be readable by screen readers with `aria-live="polite"`.
- Do not rely on color alone to distinguish scenarios.
- Use clear focus states.
- Keep source links keyboard accessible.
- Avoid tiny text inside cards.

## Acceptance Criteria

The feature is complete when:

- Every displayed statistic has a source name, source URL, year, and caveat.
- No per-prompt AI energy or water claims appear in v1.
- The comparison panel includes a visible `No added AI` scenario.
- The simulator shows one sampled estimate in single-run mode.
- The simulator supports 10-run, 100-run, and 1,000-run multi-run mode.
- The simulator supports custom `n trials` from 1 to 10,000.
- Multi-run mode shows average, lowest, highest, and a compact visual distribution.
- The assumptions drawer shows min, likely, max, derived mean, and derived standard deviation.
- The UI includes at least one electricity perspective and one water perspective.
- Every conversion constant is clearly labeled as approximate.
- The section works on mobile and desktop.
- The code remains frontend-only and static-data-only.

## Test Plan

Manual content checks:

- Confirm each number maps to a source or conversion constant.
- Confirm projected values use words like `projected`, `estimated`, or `scenario`.
- Confirm uncertainty is visible near simulator results.
- Confirm the no-AI baseline does not imply zero total digital footprint.
- Confirm there are no universal claims such as `every AI prompt uses exactly X`.
- Confirm single-run results change when the user clicks `Generate another scenario`.
- Confirm multi-run results are repeatable in structure but not identical in sampled values.
- Confirm custom `n trials` rejects empty, decimal, negative, zero, and above-10,000 inputs with a clear inline message.

Manual UI checks:

- Change each region and verify results update.
- Change each scenario and verify sampled estimates update.
- Run 10, 100, and 1,000 simulations and verify the average, lowest, highest, and visual distribution update.
- Enter a custom trial count and verify the simulator runs exactly that many trials.
- Switch output view between electricity, water, and both.
- Open the assumptions drawer and verify the parameters match the selected scenario.
- Test mobile layout at narrow widths.
- Test keyboard navigation through all controls and links.

Build checks:

```bash
npm run build
```

Suggested student check-for-understanding question:

> How is this simulator similar to flipping a coin many times on a calculator, and why does a larger `n` make the pattern easier to see?

## Source List

- International Energy Agency. [Energy demand from AI](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai). 2025.
- U.S. Department of Energy. [DOE Releases New Report Evaluating Increase in Electricity Demand from Data Centers](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers). 2024.
- Environmental and Energy Study Institute. [Data Centers and Water Consumption](https://www.eesi.org/articles/view/data-centers-and-water-consumption). 2025.
- David Mytton. [Data centre water consumption](https://www.nature.com/articles/s41545-021-00101-w). npj Clean Water. 2021.
- MIT News. [Explained: Generative AI's environmental impact](https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117). 2025.
- MIT News. [The brain power behind sustainable AI](https://news.mit.edu/2025/brain-power-behind-sustainable-ai-miranda-schwacke-1024). 2025.
- U.S. Energy Information Administration. [How much electricity does an American home use?](https://www.eia.gov/tools/faqs/faq.php?id=97&t=3). 2024.
