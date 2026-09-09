"use client";

import { useState } from "react";

export default function ThemeToggle({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className="theme-toggle">
        <button
          type="button"
          className={!isDark ? "tt-btn active" : "tt-btn"}
          data-theme="light"
          onClick={() => setIsDark(false)}
        >
          ☀ Light Mode
        </button>
        <button
          type="button"
          className={isDark ? "tt-btn active" : "tt-btn"}
          data-theme="dark"
          onClick={() => setIsDark(true)}
        >
          ☾ Dark Mode
        </button>
      </div>
      {children(isDark)}
    </>
  );
}
