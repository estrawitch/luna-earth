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
    caveat: "This is a comparison baseline, not a real-world total environmental footprint."
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
        distributionNote: "Point estimate for an upper-end facility example, not a national distribution."
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
