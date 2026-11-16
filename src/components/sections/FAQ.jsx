import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import FaqItem from "./components/FaqItem";
import { FAQS } from "../../data/content";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="pb-20 sm:pb-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, answered"
            body="Can't find what you're looking for? Reach out to the Quanthex team from the Settings tab in the app."
          />
        </Reveal>

        <Reveal className="divide-y divide-brand-100 rounded-3xl bg-white px-6 shadow-card ring-1 ring-brand-100 sm:px-8">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              id={`faq-${i}`}
              question={item.q}
              answer={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;
