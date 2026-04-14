"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else if (typeof document !== "undefined" && document.documentElement.getAttribute("data-theme") === "light") {
      setTheme("light");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      window.localStorage.setItem("theme", next);
    } catch (e) {}
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
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
