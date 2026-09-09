"use client";

import { createContext, useContext, useState } from "react";

const TabGroupContext = createContext(null);

export default function TabGroup({ id, tabClassName, paneClassName, tabs, defaultActive, children }) {
  const [active, setActive] = useState(defaultActive ?? tabs[0]?.id);

  return (
    <TabGroupContext.Provider value={{ active, paneClassName }}>
      <div id={id} className={`${tabClassName}s`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={tab.id === active ? `${tabClassName} active` : tabClassName}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children}
    </TabGroupContext.Provider>
  );
}

function Pane({ id, children }) {
  const ctx = useContext(TabGroupContext);
  if (!ctx) throw new Error("TabGroup.Pane must be a descendant of TabGroup");
  const isActive = ctx.active === id;
  return (
    <div className={isActive ? `${ctx.paneClassName} active` : ctx.paneClassName} data-pane={id}>
      {children}
    </div>
  );
}
TabGroup.Pane = Pane;
