import React from "react";
import { STORE_LINKS } from "../../data/content";

function StoreButton({ href, overline, label, glyph, tone }) {
  const toneClass =
    tone === "light"
      ? "bg-white text-ink hover:bg-brand-100"
      : "bg-ink text-white hover:bg-brand-900";

  return (
    <a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-colors ${toneClass}`}
    >
      {glyph}
      <span className="flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-wider opacity-70">{overline}</span>
        <span className="mt-1 font-display text-base font-semibold">{label}</span>
      </span>
    </a>
  );
}

const AppleGlyph = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.9-1.1-2.9-4.2ZM13.9 5.3c.7-.9 1.2-2.1 1-3.3-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.3-.6 3.1-1.5Z" />
  </svg>
);

const PlayGlyph = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    <path d="M4.2 2.4c-.3.3-.4.7-.4 1.2v16.8c0 .5.1.9.4 1.2l9.3-9.6-9.3-9.6Zm10.6 8.3 2.6-2.7L6.3 1.7c-.4-.2-.8-.3-1.1-.2l9.6 9.2Zm0 2.6-9.6 9.2c.3.1.7 0 1.1-.2l11.1-6.3-2.6-2.7Zm6.3-3.1-2.5-1.4-2.9 3 2.9 3 2.5-1.4c.9-.5.9-2.7 0-3.2Z" />
  </svg>
);

function StoreButtons({ tone = "dark", className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <StoreButton
        href={STORE_LINKS.appStore}
        overline="Download on the"
        label="App Store"
        glyph={AppleGlyph}
        tone={tone}
      />
      <StoreButton
        href={STORE_LINKS.googlePlay}
        overline="Get it on"
        label="Google Play"
        glyph={PlayGlyph}
        tone={tone}
      />
    </div>
  );
}

export default StoreButtons;
