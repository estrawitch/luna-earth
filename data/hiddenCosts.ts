export type HiddenCostCategory =
  | "land"
  | "air"
  | "water"
  | "grid"
  | "community"
  | "hardware";

export type HiddenCostItem = {
  id: string;
  category: HiddenCostCategory;
  title: string;
  summary: string;
  localQuestion: string;
  mitigation: string;
  sourceName?: string;
  sourceUrl?: string;
};

export type MemphisCaseStudyItem = {
  heading: string;
  body: string;
};

export type HiddenCostSourceLink = {
  label: string;
  url: string;
};

export const hiddenCostItems: HiddenCostItem[] = [
  {
    id: "land-space-pressure",
    category: "land",
    title: "Land and habitat pressure",
    summary:
      "Data centers need more than a building. Large campuses can also require substations, transmission upgrades, roads, stormwater systems, fencing, and backup power. If a site replaces forest, farmland, or habitat, the local impact is bigger than the server room itself.",
    localQuestion:
      "Is the project reusing industrial land, or is it converting forest, farmland, or habitat?",
    mitigation:
      "Prefer reused or lower-impact sites, protect tree canopy and habitat, and require clear land-use review.",
    sourceName: "Hyperscale data-center siting analysis",
    sourceUrl: "https://arxiv.org/abs/2602.02529"
  },
  {
    id: "air-onsite-power",
    category: "air",
    title: "Air pollution from onsite power",
    summary:
      "Some fast buildouts use onsite gas turbines or backup generators while grid connections catch up. That can raise concerns about nitrogen oxides, smog-forming pollution, and local health.",
    localQuestion:
      "Will the facility use temporary or permanent fossil-fuel power near neighborhoods already carrying pollution burdens?",
    mitigation:
      "Require transparent air permits, cleaner power plans, monitoring, and enforceable limits before operation.",
    sourceName: "AP News on xAI Memphis",
    sourceUrl:
      "https://apnews.com/article/memphis-xai-elon-musk-pollution-naacp-571c16950259b382f9eae61bd59260ef"
  },
  {
    id: "water-cooling-pressure",
    category: "water",
    title: "Cooling and water pressure",
    summary:
      "Dense computing hardware creates heat. Cooling can use air, water, liquid systems, recycled water, or a mix, and the local impact depends on climate, facility design, and water stress.",
    localQuestion:
      "Does the cooling plan use public drinking water, recycled water, closed loops, or another lower-pressure source?",
    mitigation:
      "Use recycled or non-potable water where appropriate, publish water-use data, and avoid worsening local scarcity.",
    sourceName: "EESI data-center water overview",
    sourceUrl: "https://www.eesi.org/articles/view/data-centers-and-water-consumption"
  },
  {
    id: "grid-buildout",
    category: "grid",
    title: "Grid buildout and utility costs",
    summary:
      "AI data centers can require new substations, transmission upgrades, transformers, and power contracts. Communities may ask who pays and whether clean-energy goals are affected.",
    localQuestion:
      "Will grid upgrades benefit the public, or mostly serve one private load while shifting costs to others?",
    mitigation:
      "Make utility planning public, pair growth with clean-power procurement, and explain ratepayer protections.",
    sourceName: "Guidi et al. 2024",
    sourceUrl: "https://arxiv.org/abs/2411.09786"
  },
  {
    id: "community-consent",
    category: "community",
    title: "Community consent and transparency",
    summary:
      "A data center can bring jobs, tax revenue, and infrastructure investment, but nearby residents may also face noise, construction traffic, pollution worries, or limited public notice.",
    localQuestion:
      "Did residents have enough time, data, and public meetings to understand the trade-offs before approval?",
    mitigation:
      "Hold early public meetings, publish permits and resource estimates, and track benefits and burdens by neighborhood.",
    sourceName: "AP News on xAI Memphis",
    sourceUrl:
      "https://apnews.com/article/memphis-xai-elon-musk-pollution-naacp-571c16950259b382f9eae61bd59260ef"
  },
  {
    id: "hardware-supply-chain",
    category: "hardware",
    title: "Hardware and e-waste",
    summary:
      "AI depends on chips, servers, networking equipment, and cooling hardware. Manufacturing and replacing that equipment creates material, energy, mining, and e-waste questions.",
    localQuestion:
      "Does the project explain hardware lifetimes, repair, reuse, recycling, and supply-chain impacts?",
    mitigation:
      "Design for longer hardware life, reuse equipment where possible, and report responsible recycling practices.",
    sourceName: "MIT Technology Review on AI footprint",
    sourceUrl: "https://www.technologyreview.com/2025/01/17/1109448/ais-energy-water-climate-footprint/"
  }
];

export const physicalFootprintSteps = [
  {
    label: "Prompt",
    detail: "A user asks for help"
  },
  {
    label: "GPUs",
    detail: "Specialized chips do the work"
  },
  {
    label: "Electricity",
    detail: "Power flows through the grid"
  },
  {
    label: "Cooling",
    detail: "Heat has to leave"
  },
  {
    label: "Land",
    detail: "Buildings and substations take space"
  },
  {
    label: "Community",
    detail: "Local people live with the trade-offs"
  }
];

export const memphisCaseStudy: MemphisCaseStudyItem[] = [
  {
    heading: "What happened",
    body:
      "xAI's Memphis supercomputer project drew attention because reports described gas turbines, air-permit questions, public comments, and concerns from nearby residents and environmental groups."
  },
  {
    heading: "Why it matters",
    body:
      "The controversy shows that AI infrastructure is also a community-governance issue: fast buildouts can raise questions about air pollution, grid stress, transparency, and who benefits."
  },
  {
    heading: "What better planning asks",
    body:
      "A stronger process explains permits, power sources, cooling choices, public-health safeguards, local benefits, and whether the facility adds burdens to communities already facing environmental stress."
  }
];

export const hiddenCostSourceLinks: HiddenCostSourceLink[] = [
  {
    label: "AP News: xAI Memphis",
    url: "https://apnews.com/article/memphis-xai-elon-musk-pollution-naacp-571c16950259b382f9eae61bd59260ef"
  },
  {
    label: "Janosov 2026: hyperscale siting",
    url: "https://arxiv.org/abs/2602.02529"
  },
  {
    label: "Washington Post: land-use opposition",
    url: "https://www.washingtonpost.com/nation/2025/10/13/data-center-bans-lawsuit/"
  },
  {
    label: "Guidi et al. 2024: U.S. data-center burdens",
    url: "https://arxiv.org/abs/2411.09786"
  }
];
