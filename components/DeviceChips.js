"use client";

import { createContext, useContext, useState } from "react";

const DeviceChipsContext = createContext(null);

export function DeviceChipsProvider({ copy, children }) {
  const [active, setActive] = useState(null);
  return (
    <DeviceChipsContext.Provider value={{ copy, active, setActive }}>
      {children}
    </DeviceChipsContext.Provider>
  );
}

export function DeviceChip({ device, className = "dchip", children }) {
  const ctx = useContext(DeviceChipsContext);
  if (!ctx) throw new Error("DeviceChip must be used inside a DeviceChipsProvider");
  const isActive = ctx.active === device;
  return (
    <button
      type="button"
      className={isActive ? `${className} active` : className}
      onClick={() => ctx.setActive(device)}
      data-device={device}
    >
      {children}
    </button>
  );
}

export function DeviceReadout({ id = "deviceReadout" }) {
  const ctx = useContext(DeviceChipsContext);
  if (!ctx) throw new Error("DeviceReadout must be used inside a DeviceChipsProvider");
  const html = ctx.active ? ctx.copy[ctx.active] : "";
  return (
    <div
      id={id}
      key={ctx.active}
      style={{ animation: "fadeIn .25s ease" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
