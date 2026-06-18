export const contextConversions = {
  litersPerGallon: 3.78541,
  litersPerOneGallonJug: 3.78541,
  litersPerOlympicPoolApprox: 2_500_000,
  usHomeKwhPerYear: 10_791,
  usHomeKwhPerDay: 10_791 / 365,
  gallonsPerTownPersonPerDayLow: 100,
  gallonsPerTownPersonPerDayHigh: 500
};

export const contextConversionNotes = {
  litersPerGallon: "Approximate liters in one U.S. gallon.",
  litersPerOneGallonJug: "Approximate liters in one one-gallon jug.",
  litersPerOlympicPoolApprox: "Approximate liters in an Olympic-size swimming pool.",
  usHomeKwhPerYear: "Approximate average annual electricity use for a U.S. home.",
  usHomeKwhPerDay: "Approximate average daily electricity use for a U.S. home.",
  gallonsPerTownPersonPerDayLow: "Approximate low daily town water-use context per person.",
  gallonsPerTownPersonPerDayHigh: "Approximate high daily town water-use context per person."
};

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
