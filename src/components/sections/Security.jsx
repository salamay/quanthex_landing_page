import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { SECURITY_POINTS } from "../../data/content";

function Security() {
  return (
    <section id="security" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-6 py-14 sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                tone="light"
                eyebrow="Security"
                title="Your keys. Your assets. Always."
                body="Quanthex is built so that only you are ever in control of your funds. Security isn't a feature we bolt on — it's how the wallet works."
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {SECURITY_POINTS.map((point, i) => (
                <Reveal
                  key={point.title}
                  delay={i * 80}
                  className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-brand-200">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{point.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;
