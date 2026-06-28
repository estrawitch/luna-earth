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
  scaleMeaning: string;
  whyAlarming: string;
  plainLanguageMeaning: string;
  caveat: string;
};

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
    scaleMeaning:
      "415 TWh is about 415 billion kWh, roughly enough electricity for 38 million average U.S. homes for one year.",
    whyAlarming:
      "Demand this large can strain power grids, require new power plants or transmission lines, and make it harder to cut emissions if the electricity comes from fossil fuels.",
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
    scaleMeaning:
      "945 TWh is about 945 billion kWh, roughly enough electricity for 88 million average U.S. homes for one year.",
    whyAlarming:
      "A more-than-doubling projection means utilities, communities, and governments may have only a few years to plan for much higher electricity demand.",
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
    scaleMeaning:
      "Double or triple means a fast-growing load on the grid, similar to adding many large cities worth of electricity demand.",
    whyAlarming:
      "Fast local growth can raise electricity prices, delay clean-energy goals, and force communities to decide quickly who pays for new grid infrastructure.",
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
    scaleMeaning:
      "5 million gallons per day is about 19 million one-gallon jugs each day, or enough daily water for roughly 10,000 to 50,000 people using 100 to 500 gallons per person.",
    whyAlarming:
      "Water use at this scale can matter a lot in drought-prone areas, because data centers may compete with homes, farms, rivers, and emergency reserves.",
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
    scaleMeaning:
      "1.7 billion liters per day is about 449 million gallons, or around 680 Olympic-size swimming pools each day.",
    whyAlarming:
      "The uncertainty itself is a warning sign: if many operators do not measure or report water use, communities cannot easily judge local risk before approving new facilities.",
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
    scaleMeaning:
      "A 15% efficiency improvement on a 945 TWh projection would save about 142 TWh, roughly a year of electricity for 13 million average U.S. homes.",
    whyAlarming:
      "Efficiency helps, but it may not solve the problem if AI demand grows faster than efficiency improves. Total impact can still rise even when each machine gets better.",
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
    scaleMeaning:
      "10,791 kWh per year is about 30 kWh per day for one average U.S. home.",
    whyAlarming:
      "This home comparison shows why TWh numbers are not small: one data-center statistic can equal the yearly electricity use of millions of households.",
    plainLanguageMeaning:
      "One average U.S. home uses about 10.8 megawatt-hours of electricity each year.",
    caveat:
      "Household electricity use varies by state, home size, climate, and whether a home has solar panels."
  }
];
