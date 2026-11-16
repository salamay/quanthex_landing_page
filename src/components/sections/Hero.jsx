import React from "react";
import phones from "../../assets/img/app-phones.webp";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { HERO_PILLS } from "../../data/content";

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* Purple diagonal panel echoing the brand artwork */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[52%] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 xl:block"
        style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div
          className="absolute inset-y-0 left-[38%] w-px opacity-40"
          style={{
            backgroundImage: "linear-gradient(to bottom, #fff 50%, transparent 50%)",
            backgroundSize: "1px 14px",
            transform: "skewX(-14deg)",
          }}
        />
      </div>

      <div className="container-page relative grid items-center gap-12 pb-16 pt-12 xl:min-h-[calc(100vh-72px)] xl:grid-cols-[1.05fr_1fr] xl:gap-6 xl:pb-20 xl:pt-8">
        <div className="max-w-xl xl:max-w-[540px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Non-custodial · BSC & Ethereum
          </span>

          <h1 className="mt-6 font-display text-[44px] font-bold leading-[1.02] tracking-tight text-brand-700 sm:text-6xl lg:text-[72px]">
            Quanthex
            <br />
            Wallet
          </h1>

          <div className="dashed-rule mt-7 w-full max-w-md text-brand-300" />

          <p className="mt-7 text-lg leading-relaxed text-ink sm:text-xl">
            A digital asset wallet and blockchain participation platform — secure wallet
            management in one unified mobile experience.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Manage your supported digital assets, deposit, send and trade across chains, and take
            part in blockchain-based participation mechanisms in a structured and transparent
            environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#download">
              <Icon name="download" className="h-4 w-4" />
              Download the app
            </Button>
            <Button href="#features" variant="secondary">
              Explore features
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {HERO_PILLS.map((pill) => (
              <li
                key={pill}
                className="rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>

        {/* Spacer keeps the grid balanced on desktop; image is positioned against the viewport edge */}
        <div className="relative mx-auto w-full max-w-[720px] xl:hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-[-20px] bottom-0 top-[18%] rounded-[32px] bg-gradient-to-br from-brand-600 to-brand-800 sm:inset-x-[-32px]"
          />
          <img
            src={phones}
            alt="Quanthex Wallet app screens: portfolio home, Boost mining dashboard and token swap"
            className="relative -mr-5 ml-auto w-[104%] max-w-[680px] drop-shadow-[0_30px_40px_rgba(28,8,36,0.35)] sm:-mr-8"
            width="1400"
            height="1325"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] items-center justify-end pt-[72px] xl:flex">
        <img
          src={phones}
          alt="Quanthex Wallet app screens: portfolio home, Boost mining dashboard and token swap"
          className="max-h-[84%] w-full object-contain object-right animate-float drop-shadow-[0_40px_60px_rgba(28,8,36,0.4)]"
          width="1400"
          height="1325"
        />
      </div>
    </section>
  );
}

export default Hero;
