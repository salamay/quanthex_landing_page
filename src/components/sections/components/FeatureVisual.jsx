import React from "react";
import Icon from "../../ui/Icon";

// Small UI vignettes that mirror real app screens inside feature cards.

function WalletSwitcher() {
  const wallets = [
    { name: "Wallet 1", value: "$248.20" },
    { name: "Wallet 2", value: "$1.11", active: true },
    { name: "Savings", value: "$932.07" },
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-2.5">
      {wallets.map((w) => (
        <div
          key={w.name}
          className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${
            w.active
              ? "bg-brand-600 text-white shadow-glow"
              : "bg-brand-50 text-ink ring-1 ring-brand-100"
          }`}
        >
          <Icon name="wallet" className="h-4 w-4 opacity-80" />
          <span className="font-semibold">{w.name}</span>
          <span className={w.active ? "text-white/70" : "text-ink-muted"}>{w.value}</span>
        </div>
      ))}
    </div>
  );
}

function ActionRow() {
  const actions = [
    { label: "Deposit", rotate: "rotate-180" },
    { label: "Send", rotate: "" },
  ];

  return (
    <div className="mt-8 flex gap-6">
      {actions.map((a) => (
        <div key={a.label} className="flex flex-col items-center gap-2">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-ink ring-1 ring-brand-100">
            <svg
              viewBox="0 0 24 24"
              className={`h-5 w-5 ${a.rotate}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </span>
          <span className="text-xs font-semibold text-ink-soft">{a.label}</span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-2">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-ink ring-1 ring-brand-100">
          <Icon name="swap" className="h-5 w-5" strokeWidth={2} />
        </span>
        <span className="text-xs font-semibold text-ink-soft">Trade</span>
      </div>
    </div>
  );
}

function FeatureVisual({ icon }) {
  if (icon === "wallet") return <WalletSwitcher />;
  if (icon === "arrows") return <ActionRow />;
  return null;
}

export default FeatureVisual;
