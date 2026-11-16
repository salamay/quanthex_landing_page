import React from "react";
import mark from "../../assets/img/quanthex-mark.png";
import StoreButtons from "../ui/StoreButtons";
import Reveal from "../ui/Reveal";

function DownloadCTA() {
  return (
    <section id="download" className="pb-20 sm:pb-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[36px] bg-brand-600 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_90%_100%,rgba(28,8,36,0.5),transparent_50%)]"
          />
          <img
            src={mark}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 w-64 opacity-[0.12] mix-blend-luminosity sm:w-80"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Your wallet, ready when you are
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Download Quanthex Wallet and manage, trade and grow your digital assets from one
              secure app.
            </p>
            <StoreButtons tone="light" className="mt-9 justify-center" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default DownloadCTA;
