import React from "react";
import Icon from "../../ui/Icon";

function CheckList({ items, tone = "dark" }) {
  const textColor = tone === "light" ? "text-white/80" : "text-ink-soft";
  const badge = tone === "light" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-700";

  return (
    <ul className="mt-8 space-y-4">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 text-[15px] leading-relaxed ${textColor}`}>
          <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${badge}`}>
            <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CheckList;
