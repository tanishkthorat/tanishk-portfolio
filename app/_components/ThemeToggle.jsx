"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    let current = "dark";
    try {
      const saved = window.localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        current = saved;
      }
    } catch (e) {}
    if (root.classList.contains("theme-light")) {
      current = "light";
    }
    if (current === "light") {
      root.classList.add("theme-light");
    } else {
      root.classList.remove("theme-light");
    }
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      window.localStorage.setItem("theme", next);
    } catch (e) {}
    const root = document.documentElement;
    if (next === "light") {
      root.classList.add("theme-light");
    } else {
      root.classList.remove("theme-light");
    }
  };

  const label = theme === "dark" ? "LIGHT" : "DARK";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${label.toLowerCase()} mode`}
      className="fixed top-6 right-6 z-50 font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-[6px] border border-[var(--rule)] bg-[var(--bg)] text-[var(--fg-dim)] hover:text-[var(--fg)] hover:border-[var(--accent-dim)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
    >
      {label}
    </button>
  );
}
