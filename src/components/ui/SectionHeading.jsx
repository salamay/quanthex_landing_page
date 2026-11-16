import React from "react";

function SectionHeading({ eyebrow, title, body, align = "center", tone = "dark" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const bodyColor = tone === "light" ? "text-brand-100/80" : "text-ink-soft";
  const eyebrowColor = tone === "light" ? "text-brand-300" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>}
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px] ${titleColor}`}
      >
        {title}
      </h2>
      {body && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${bodyColor}`}>{body}</p>}
    </div>
  );
}

export default SectionHeading;
