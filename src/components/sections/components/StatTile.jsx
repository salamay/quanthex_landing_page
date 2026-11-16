import React from "react";

function StatTile({ label, value, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur-md ${className}`}
    >
      <p className="text-[11px] uppercase tracking-wider text-white/60">{label}</p>
      <p className="mt-1 font-display text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

export default StatTile;
