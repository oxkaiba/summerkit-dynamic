"use client"

import * as React from "react"
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="border dark:border-zinc-800/50 border-zinc-800/20 rounded-full hover:bg-accent bg-transparent relative"
          size="icon"
          style={{ outline: 'none' }}
        >
          <FaSun className={`h-[1rem] w-[1rem] transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'} text-zinc-900/95 dark:text-zinc-100 dark:hover:text-zinc-300`} />
          <FaMoon className={`absolute h-[1rem] w-[1rem] transition-all ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'} text-zinc-900/95 dark:text-zinc-100 dark:hover:text-zinc-300`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border dark:border-zinc-800/50 border-zinc-800/20 rounded-2xl mb-4 bg-card" align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
