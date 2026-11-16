import React from "react";
import mark from "../../assets/img/quanthex-mark.png";

function Logo({ tone = "dark", className = "" }) {
  const textColor = tone === "light" ? "text-white" : "text-brand-700";

  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`} aria-label="Quanthex home">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-card">
        <img src={mark} alt="" className="h-7 w-7 object-contain" />
      </span>
      <span className={`font-display text-lg font-bold tracking-[0.18em] ${textColor}`}>
        QUANTHEX
      </span>
    </a>
  );
}

export default Logo;
