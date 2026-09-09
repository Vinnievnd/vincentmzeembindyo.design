"use client";

import { useState } from "react";

export default function ProcessRail({ steps, scrollTargets }) {
  const [active, setActive] = useState(0);

  function handleClick(idx) {
    setActive(idx);
    if (scrollTargets && scrollTargets[idx]) {
      const target = scrollTargets[idx];
      const titles = Array.from(document.querySelectorAll(".ps-title"));
      const match = titles.find((t) => t.textContent.startsWith(target.split(" ")[0]));
      if (match) {
        const y = match.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }

  const pct = (active / Math.max(steps.length - 1, 1)) * 100;

  return (
    <div className="process-rail">
      <div className="rail-line">
        <div className="rail-fill" id="railFill" style={{ width: `${pct}%` }} />
      </div>
      <div className="rail-steps">
        {steps.map((step, idx) => (
          <button
            key={`${step.line1}-${step.line2}`}
            type="button"
            data-phase={idx}
            className={idx === active ? "rail-step active" : "rail-step"}
            onClick={() => handleClick(idx)}
          >
            {step.line1}<br /><span>{step.line2}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
