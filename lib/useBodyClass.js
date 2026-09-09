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
