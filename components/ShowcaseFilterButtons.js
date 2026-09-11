"use client";

import { useState } from "react";

export default function ShowcaseFilterButtons({ labels }) {
  const [active, setActive] = useState(0);
  return (
    <div className="showcase-filter">
      {labels.map((label, i) => (
        <button
          key={label}
          type="button"
          className={i === active ? "active" : undefined}
          onClick={() => setActive(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
