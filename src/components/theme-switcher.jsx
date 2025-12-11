"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-md border border-gray-300 dark:border-gray-600" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="group relative flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
      )}
      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}
