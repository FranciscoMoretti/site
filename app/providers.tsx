'use client'

import dynamic from 'next/dynamic'
import siteMetadata from '@/data/siteMetadata'
import { PostHogPostHogPageView } from '@/components/PostHogPageView'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Suspense } from 'react'
import { NavigationEvents } from '@/components/navigation-events'
import { ReactQueryProvider } from './react-query-provider'

const PHProvider = dynamic(
  () => import('@/components/posthog-provider').then((mod) => mod.PHProvider),
  {
    ssr: false,
  }
)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={siteMetadata.theme}
      enableSystem
      disableTransitionOnChange
    >
      <ReactQueryProvider>
        {/* Render children immediately */}
        {children}

        {/* Defer analytics initialization */}
        <Suspense fallback={null}>
          {process.env.NEXT_PUBLIC_POSTHOG_KEY && (
            <PHProvider>
              <PostHogPostHogPageView />
            </PHProvider>
          )}
          <NavigationEvents />
        </Suspense>
      </ReactQueryProvider>
      <TailwindIndicator />
    </NextThemesProvider>
  )
}
