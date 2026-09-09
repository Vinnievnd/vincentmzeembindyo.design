"use client";

import { useEffect, useRef, useState } from "react";

export default function PrototypeDock({ label = "Open Prototype", children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dockRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    function onDocClick(e) {
      if (dockRef.current && !dockRef.current.contains(e.target)) setIsOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={dockRef} className={isOpen ? "proto-dock is-open" : "proto-dock"}>
      <div className="proto-pop" role="menu" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <button
        type="button"
        className="proto-trigger"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="true"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((v) => !v);
        }}
      >
        {label}
        <span className="pt-ico"></span>
      </button>
    </div>
  );
}
