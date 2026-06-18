import { siteImages } from "../data/siteImages";
import { ImageCredit } from "./ImageCredit";

export function InfrastructureImagePanel() {
  const image = siteImages.serverRacks;

  return (
    <figure className="mt-10 grid overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
      <img
        alt={image.alt}
        className="h-full min-h-72 w-full object-cover"
        src={image.localPath}
      />
      <figcaption className="flex flex-col justify-center p-6 text-white sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">
          Real infrastructure
        </p>
        <h3 className="mt-2 text-2xl font-bold leading-tight">
          AI feels like software, but it runs on rooms full of hardware.
        </h3>
        <p className="mt-4 text-sm leading-6 text-slate-200">
          Photos help make the invisible visible: each answer depends on racks of
          servers, network equipment, cooling systems, backup power, and the grid
          outside the building.
        </p>
        <div className="mt-5">
          <ImageCredit image={image} tone="dark" />
        </div>
      </figcaption>
    </figure>
  );
}
