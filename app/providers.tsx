'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import SuspendedPostHogPageView, { PHProvider } from '@/components/posthog-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
        {process.env.NEXT_PUBLIC_POSTHOG_KEY && <SuspendedPostHogPageView />}
        {children}
        <TailwindIndicator />
      </ThemeProvider>
    </PHProvider>
  )
}
