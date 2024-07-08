"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="border border-zinc-800/50 rounded-full hover:bg-accent bg-transparent"
          size="icon"
          style={{ outline: 'none' }}
        >
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-zinc-300 dark:hover:text-zinc-100 text-zinc-900/90" />
          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-zinc-300 dark:hover:text-zinc-100 text-zinc-900/90" />
          <span className="sr-only">Toggle theme</span>
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent className="border border-zinc-800/50 rounded-2xl mb-4 bg-card" align="end">
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
