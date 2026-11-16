import React from "react";
import Icon from "../../ui/Icon";

function FaqItem({ id, question, answer, open, onToggle }) {
  return (
    <div className="py-5">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="flex w-full items-center justify-between gap-6 text-left"
        >
          <span className="font-display text-base font-semibold text-ink sm:text-lg">
            {question}
          </span>
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
              open ? "rotate-45 bg-brand-600 text-white" : "bg-brand-100 text-brand-700"
            }`}
          >
            <Icon name="plus" className="h-4 w-4" strokeWidth={2.2} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pr-12 pt-3 text-[15px] leading-relaxed text-ink-soft">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
