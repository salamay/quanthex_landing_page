import React from "react";
import { SUPPORTED_ASSETS } from "../../data/content";

function AssetsStrip() {
  return (
    <section aria-label="Supported assets" className="border-y border-brand-100 bg-white">
      <div className="container-page flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between">
        <p className="text-center font-display text-sm font-semibold text-ink-muted md:text-left">
          Supported on <span className="text-ink">BNB Smart Chain</span> and{" "}
          <span className="text-ink">Ethereum</span>
        </p>

        <ul className="flex flex-wrap justify-center gap-3">
          {SUPPORTED_ASSETS.map((asset) => (
            <li
              key={asset.symbol}
              className="flex items-center gap-2.5 rounded-full border border-brand-100 bg-brand-50 py-1.5 pl-1.5 pr-4"
            >
              <span
                className="grid h-8 w-8 place-items-center rounded-full font-display text-[10px] font-bold"
                style={{ backgroundColor: asset.color, color: asset.text }}
              >
                {asset.symbol.slice(0, 1)}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-ink">{asset.symbol}</span>
                <span className="text-[11px] text-ink-muted">{asset.network}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AssetsStrip;
