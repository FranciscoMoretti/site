'use client'

import dynamic from 'next/dynamic'
import siteMetadata from '@/data/siteMetadata'
import SuspendedPostHogPageView, { PHProvider } from '@/components/posthog-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'

//  Needed for https://github.com/pacocoursey/next-themes
const ThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider), {
  ssr: false,
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      <PHProvider>
        {process.env.NEXT_PUBLIC_POSTHOG_KEY && <SuspendedPostHogPageView />}
        {children}
        <TailwindIndicator />
      </PHProvider>
    </ThemeProvider>
  )
}
