import type { SiteImage } from "../data/siteImages";

export function ImageCredit({
  image,
  tone = "light"
}: {
  image: SiteImage;
  tone?: "light" | "dark";
}) {
  const className =
    tone === "dark"
      ? "text-xs leading-5 text-slate-300"
      : "text-xs leading-5 text-slate-500";
  const linkClassName =
    tone === "dark"
      ? "font-semibold text-teal-200 underline"
      : "font-semibold text-teal-700 underline";

  return (
    <p className={className}>
      Image:{" "}
      <a className={linkClassName} href={image.sourceUrl}>
        {image.credit}
      </a>
      , {image.license}.
    </p>
  );
}
