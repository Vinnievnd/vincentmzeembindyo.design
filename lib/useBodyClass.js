"use client";

import { useEffect } from "react";

// Adds `className` to document.body on mount and removes it on unmount.
// Used by pages whose source CSS scopes brand tokens under a body-level
// class (e.g. `body.pika-theme{...}`, `body.bi-theme{...}`), since the
// shared root layout's <body> has no per-page class hook of its own.
export default function useBodyClass(className) {
  useEffect(() => {
    if (!className) return;
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
}

// Sets a `name="value"` attribute on document.body on mount and removes it
// on unmount. Used by pages whose source CSS scopes brand tokens under a
// body-level attribute selector (e.g. `body[data-screen-label="..."]{...}`),
// since the shared root layout's <body> has no per-page attribute hook of
// its own.
export function useBodyAttribute(name, value) {
  useEffect(() => {
    if (!name) return;
    document.body.setAttribute(name, value);
    return () => {
      document.body.removeAttribute(name);
    };
  }, [name, value]);
}
