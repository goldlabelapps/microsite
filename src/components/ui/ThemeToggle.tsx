"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 cursor-pointer",
        "bg-black/[0.04] hover:bg-black/[0.08] text-neutral-700 border border-black/5",
        "dark:bg-white/[0.08] dark:hover:bg-white/[0.14] dark:text-neutral-200 dark:border-white/10",
        "active:scale-95 shadow-sm",
        showLabel && "gap-2 px-3 py-1.5",
        className
      )}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 text-neutral-700 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-medium">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
