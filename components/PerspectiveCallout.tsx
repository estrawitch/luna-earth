import type React from "react";

export function PerspectiveCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
      <p>
        <span className="font-semibold text-slate-950">Approximate perspective:</span> {children}
      </p>
    </div>
  );
}
