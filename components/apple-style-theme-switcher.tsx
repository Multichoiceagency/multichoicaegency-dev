"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'

export function AppleStyleThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-7 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 dark:focus:ring-offset-gray-900"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          theme === "dark" ? "translate-x-7" : "translate-x-1"
        } inline-flex items-center justify-center h-6 w-6 transform rounded-full bg-white dark:bg-gray-900 transition-all duration-500 ease-in-out`}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-gray-900 transition-opacity duration-500 ease-in-out" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500 transition-opacity duration-500 ease-in-out" />
        )}
      </span>
    </button>
  )
}

