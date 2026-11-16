import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import FeatureCard from "./components/FeatureCard";
import { FEATURES } from "../../data/content";

function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Everything in one app"
            title="One wallet for holding, moving and growing your assets"
            body="Quanthex brings wallet management and blockchain participation together, so you don't have to juggle separate apps."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
