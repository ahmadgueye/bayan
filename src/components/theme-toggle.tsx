"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={isDark}
      aria-label="Changer de thème"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="tt-icons">
        <Sun className="tt-sun" strokeWidth={2} />
        <Moon className="tt-moon" strokeWidth={2} />
      </span>
      <span className="tt-thumb">
        <Sun className="tt-thumb-sun" strokeWidth={2} />
        <Moon className="tt-thumb-moon" strokeWidth={2} />
      </span>
    </button>
  );
}
