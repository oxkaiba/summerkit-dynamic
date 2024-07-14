"use client"

import * as React from "react"
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Button
      className="hover:bg-transparent bg-transparent relative"
      size="icon"
      style={{ outline: 'none' }}
      onClick={toggleTheme}
    >
      <FaSun className={`h-[1.15rem] w-[1.15rem] transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'} text-zinc-900/95 dark:text-zinc-100 dark:hover:text-zinc-300`} />
      <FaMoon className={`absolute h-[1.15rem] w-[1.15rem] transition-all ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'} text-zinc-900/95 dark:text-zinc-100 dark:hover:text-zinc-300`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
