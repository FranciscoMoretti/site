"use client"

import React from "react"

import { Analytics } from "@/components/analytics"
import { PHProvider } from "@/components/posthog-provider"
import { ThemeProvider } from "@/components/theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return process.env.NEXT_PUBLIC_POSTHOG_KEY ? (
    <PHProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </PHProvider>
  ) : (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Analytics />
    </ThemeProvider>
  )
}
