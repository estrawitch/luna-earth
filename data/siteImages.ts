export type SiteImage = {
  id: string;
  title: string;
  localPath: string;
  sourceUrl: string;
  license: string;
  credit: string;
  alt: string;
  teachingUse: string;
};

export const siteImages = {
  heroServerRoom: {
    id: "hero-server-room",
    title: "Server room with rows of illuminated racks",
    localPath: "/images/ai-footprint-lab/hero-server-room.jpg",
    sourceUrl: "https://pxhere.com/en/photo/71859",
    license: "CC0 Public Domain",
    credit: "PxHere",
    alt: "Rows of server racks in a blue-lit data center room.",
    teachingUse:
      "Grounds the homepage in the physical infrastructure behind AI systems."
  },
  serverRacks: {
    id: "server-racks",
    title: "Wikimedia server racks",
    localPath: "/images/ai-footprint-lab/server-racks.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wikimedia_Servers-0051_17.jpg",
    license: "CC BY-SA 3.0",
    credit: "Helpameout / Wikimedia Commons",
    alt: "A long aisle of black server racks inside a data center.",
    teachingUse:
      "Shows the physical rack-scale hardware that supports online services and AI workloads."
  },
  electricityGrid: {
    id: "electricity-grid",
    title: "Electricity grid schematic",
    localPath: "/images/ai-footprint-lab/electricity.svg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Electricity_Grid_Schematic_English.svg",
    license: "CC BY 3.0",
    credit: "MBizon / Wikimedia Commons",
    alt: "A schematic of electricity generation, transmission, and distribution.",
    teachingUse:
      "Connects data-center electricity demand to the wider power system."
  },
  waterScarcityIcon: {
    id: "water-scarcity-icon",
    title: "Water scarcity icon",
    localPath: "/images/ai-footprint-lab/water-scarcity-icon.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Water_shortage_-_water_scarcity_icon.png",
    license: "CC0 Public Domain",
    credit: "Tommaso.sansone91 / Wikimedia Commons",
    alt: "A black faucet silhouette with a single blue water drop.",
    teachingUse:
      "Signals that cooling water can become a local resource question."
  }
} satisfies Record<string, SiteImage>;
