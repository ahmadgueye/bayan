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
      className="relative w-12 h-[26px] p-0.5 flex-none border border-rule bg-bg-inset rounded-none cursor-pointer inline-flex items-center focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2"
      role="switch"
      aria-checked={isDark}
      aria-label="Changer de thème"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="absolute inset-0 flex items-center justify-between px-[5px] pointer-events-none">
        <Sun
          className="w-3 h-3 text-muted transition-opacity duration-300 ease-brand dark:opacity-35"
          strokeWidth={2}
        />
        <Moon
          className="w-3 h-3 text-muted transition-opacity duration-300 ease-brand opacity-35 dark:opacity-100"
          strokeWidth={2}
        />
      </span>
      <span className="relative w-5 h-5 bg-bg shadow-[0_1px_2px_rgba(0,0,0,0.18)] flex items-center justify-center transition-transform duration-300 ease-brand dark:translate-x-[22px]">
        <Sun
          className="absolute w-3 h-3 text-text transition-[opacity,transform] duration-300 ease-brand dark:opacity-0 dark:scale-0 dark:-rotate-[80deg]"
          strokeWidth={2}
        />
        <Moon
          className="absolute w-3 h-3 text-text transition-[opacity,transform] duration-300 ease-brand opacity-0 scale-0 rotate-[80deg] dark:opacity-100 dark:scale-100 dark:rotate-0"
          strokeWidth={2}
        />
      </span>
    </button>
  );
}
