"use client";

import { createContext, useContext, useState } from "react";

const CompareContext = createContext(null);

export default function BeforeAfterCompare({ frames, defaultActive, children }) {
  const [active, setActive] = useState(defaultActive ?? frames[0]?.id);
  return (
    <CompareContext.Provider value={{ active }}>
      <div className="cmp">
        <div className="cmp-toggle" role="tablist">
          {frames.map((f) => (
            <button
              key={f.id}
              type="button"
              className={f.id === active ? "cmp-btn active" : "cmp-btn"}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="cmp-stage">{children}</div>
      </div>
    </CompareContext.Provider>
  );
}

function Frame({ id, children }) {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("BeforeAfterCompare.Frame must be a descendant of BeforeAfterCompare");
  return (
    <div className={ctx.active === id ? "cmp-frame active" : "cmp-frame"} data-frame={id}>
      {children}
    </div>
  );
}
BeforeAfterCompare.Frame = Frame;
