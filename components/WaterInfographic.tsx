import * as d3 from "d3";
import { contextConversions } from "../data/contextConversions";
import { impactStats } from "../data/impactStats";
import { siteImages } from "../data/siteImages";
import { ImageCredit } from "./ImageCredit";

const largeFacilityWater = impactStats.find((stat) => stat.id === "large-data-center-water");
const waterUncertainty = impactStats.find((stat) => stat.id === "us-data-center-water-uncertainty");

const gallonsPerDay = 5_000_000;
const townPeopleLow = gallonsPerDay / contextConversions.gallonsPerTownPersonPerDayHigh;
const townPeopleHigh = gallonsPerDay / contextConversions.gallonsPerTownPersonPerDayLow;
const litersPerDay = 1_700_000_000;
const poolsPerDay = litersPerDay / contextConversions.litersPerOlympicPoolApprox;

export function WaterInfographic() {
  const waterImage = siteImages.waterScarcityIcon;
  const width = 720;
  const height = 260;
  const iconScale = d3.scaleLinear().domain([0, 5]).range([0, 420]);
  const filledUnits = d3.range(5);

  return (
    <figure className="rounded-lg border border-sky-200 bg-sky-50 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <img
            alt={waterImage.alt}
            className="h-16 w-16 rounded-lg border border-sky-200 bg-white object-contain p-2"
            src={waterImage.localPath}
          />
          <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Water scale
          </p>
          <h3 className="mt-1 text-xl font-bold text-slate-950">
            Cooling can turn invisible computing into local water demand
          </h3>
          <div className="mt-2">
            <ImageCredit image={waterImage} />
          </div>
          </div>
        </div>
        <a
          className="text-sm font-semibold text-sky-700 underline"
          href={largeFacilityWater?.sourceUrl}
        >
          Source: EESI
        </a>
      </div>

      <svg
        aria-labelledby="water-chart-title water-chart-desc"
        className="mt-5 h-auto w-full"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <title id="water-chart-title">Water-use scale comparison</title>
        <desc id="water-chart-desc">
          A pictogram showing that five million gallons per day can be comparable to
          the daily water use of a small town, plus a national water-use estimate in
          Olympic pool equivalents.
        </desc>
        <text fill="#0f172a" fontSize="18" fontWeight="700" x="0" y="24">
          Large facility example
        </text>
        <text fill="#334155" fontSize="14" x="0" y="47">
          {largeFacilityWater?.value} {largeFacilityWater?.unit}
        </text>

        <g transform="translate(0 72)">
          {filledUnits.map((unit) => (
            <g key={unit} transform={`translate(${iconScale(unit)}, 0)`}>
              <rect fill="#0284c7" height="64" rx="10" width="58" x="0" y="18" />
              <rect fill="#7dd3fc" height="14" rx="6" width="42" x="8" y="28" />
              <path d="M 18 18 C 20 4, 38 4, 40 18" fill="none" stroke="#0284c7" strokeWidth="8" />
              <text fill="#075985" fontSize="12" fontWeight="700" textAnchor="middle" x="29" y="105">
                1M gal
              </text>
            </g>
          ))}
          <text fill="#0f172a" fontSize="20" fontWeight="800" x="455" y="48">
            about {Math.round(townPeopleLow).toLocaleString()} to{" "}
            {Math.round(townPeopleHigh).toLocaleString()}
          </text>
          <text fill="#475569" fontSize="14" x="455" y="72">
            people using 100 to 500 gallons per day
          </text>
        </g>

        <g transform="translate(0 210)">
          <rect fill="#bae6fd" height="18" rx="9" width="230" x="0" y="-13" />
          <rect fill="#0ea5e9" height="18" rx="9" width="156" x="0" y="-13" />
          <text fill="#075985" fontSize="14" fontWeight="700" x="250" y="2">
            {Math.round(poolsPerDay).toLocaleString()} Olympic-size pools per day
          </text>
          <text fill="#475569" fontSize="12" x="250" y="22">
            Based on {waterUncertainty?.value} {waterUncertainty?.unit}
          </text>
        </g>
      </svg>
      <figcaption className="mt-3 text-sm leading-6 text-slate-600">
        The blocks are explanatory scale markers, not a claim that every facility uses
        this much water.
      </figcaption>
    </figure>
  );
}
