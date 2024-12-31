// app/providers.tsx
'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || `${process.env.NEXT_PUBLIC_APP_URL}/ingest`,
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
