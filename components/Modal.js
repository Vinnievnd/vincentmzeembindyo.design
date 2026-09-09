"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ modals, children }) {
  const [openKey, setOpenKey] = useState(null);

  useEffect(() => {
    document.body.style.overflow = openKey ? "hidden" : "";
  }, [openKey]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpenKey(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <ModalContext.Provider value={{ modals, openKey, open: setOpenKey, close: () => setOpenKey(null) }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalTrigger({ modalKey, className, children, as: Tag = "div" }) {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("ModalTrigger must be used inside a ModalProvider");

  return (
    <Tag
      className={className}
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault();
        ctx.open(modalKey);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          ctx.open(modalKey);
        }
      }}
    >
      {children}
    </Tag>
  );
}

export function ModalRoot() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("ModalRoot must be used inside a ModalProvider");
  const data = ctx.openKey ? ctx.modals[ctx.openKey] : null;
  const isOpen = Boolean(ctx.openKey);

  return (
    <div id="modalRoot" className={isOpen ? "modal-root is-open" : "modal-root"} aria-hidden={isOpen ? "false" : "true"}>
      <div className="modal-overlay" data-close="" onClick={ctx.close}></div>
      <div className="modal-card" role="dialog" aria-modal="true">
        <button className="modal-close" data-close="" aria-label="Close" onClick={ctx.close}>×</button>
        <div
          className="modal-body"
          id="modalBody"
          dangerouslySetInnerHTML={{
            __html: data
              ? `<div class="modal-eyebrow">${data.eyebrow}</div><h3>${data.title}</h3><div>${data.body}</div>`
              : "",
          }}
        />
      </div>
    </div>
  );
}
