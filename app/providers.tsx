'use client'

import dynamic from 'next/dynamic'
import siteMetadata from '@/data/siteMetadata'
import { PostHogPostHogPageView } from '@/components/PostHogPageView'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Suspense } from 'react'
import { NavigationEvents } from '@/components/navigation-events'
import { QueryClient, QueryClientProvider, isServer } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

const PHProvider = dynamic(
  () => import('@/components/posthog-provider').then((mod) => mod.PHProvider),
  {
    ssr: false,
  }
)

// React Query SSR setup: https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        refetchOnWindowFocus: false,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  }
  if (!browserQueryClient) browserQueryClient = makeQueryClient()
  return browserQueryClient
}

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <NextThemesProvider
          attribute="class"
          defaultTheme={siteMetadata.theme}
          enableSystem
          disableTransitionOnChange
        >
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
            <ReactQueryDevtools />
          </Suspense>
          <TailwindIndicator />
        </NextThemesProvider>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  )
}
