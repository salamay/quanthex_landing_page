import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { STEPS } from "../../data/content";

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Up and running in three steps"
            body="No accounts to open and no paperwork. Your wallet lives on your phone from the first tap."
          />
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="dashed-rule absolute left-[16%] right-[16%] top-7 hidden text-brand-200 md:block"
          />
          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative text-center">
              <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 font-display text-xl font-bold text-white shadow-glow">
                {i + 1}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </Reveal>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
