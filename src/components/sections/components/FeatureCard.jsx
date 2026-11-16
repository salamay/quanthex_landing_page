import React from "react";
import Icon from "../../ui/Icon";
import FeatureVisual from "./FeatureVisual";

function FeatureCard({ icon, title, body, highlight = false }) {
  const surface = highlight
    ? "bg-space text-white ring-1 ring-white/5"
    : "bg-white text-ink shadow-card ring-1 ring-brand-100";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${surface}`}
    >
      {highlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/40 blur-3xl"
        />
      )}

      <span
        className={`relative grid h-12 w-12 place-items-center rounded-2xl ${
          highlight ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-700"
        }`}
      >
        <Icon name={icon} className="h-6 w-6" />
      </span>

      <h3 className="relative mt-6 font-display text-xl font-semibold">{title}</h3>
      <p
        className={`relative mt-3 text-[15px] leading-relaxed ${
          highlight ? "text-white/70" : "text-ink-soft"
        }`}
      >
        {body}
      </p>

      <FeatureVisual icon={icon} />
    </article>
  );
}

export default FeatureCard;
