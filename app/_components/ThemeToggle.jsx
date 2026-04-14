"use client";

import { useEffect, useState } from "react";

function readInitialTheme() {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {}
  if (document.documentElement.classList.contains("theme-light")) return "light";
  return "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("theme-light");
    } else {
      root.classList.remove("theme-light");
    }
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      window.localStorage.setItem("theme", next);
    } catch (e) {}
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
