// app/PostHogPageView.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the PostHog hook
export const PostHogPostHogPageView = dynamic(
  () =>
    import('posthog-js/react').then((mod) => {
      const PostHogPageViewInner = () => {
        const pathname = usePathname()
        const searchParams = useSearchParams()
        const posthog = mod.usePostHog()

        useEffect(() => {
          if (pathname && posthog) {
            let url = window.origin + pathname
            if (searchParams.toString()) {
              url = url + `?${searchParams.toString()}`
            }
            posthog.capture('$pageview', { $current_url: url })
          }
        }, [pathname, searchParams, posthog])

        return null
      }
      return PostHogPageViewInner
    }),
  { ssr: false }
)
