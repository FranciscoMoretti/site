'use client'

import dynamic from 'next/dynamic'
import { PostHogPostHogPageView } from '@/components/PostHogPageView'
import { Suspense } from 'react'

const PHProvider = dynamic(
  () => import('@/components/posthog-provider').then((mod) => mod.PHProvider),
  {
    ssr: false,
  }
)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        {process.env.NEXT_PUBLIC_POSTHOG_KEY && (
          <PHProvider>
            <PostHogPostHogPageView />
          </PHProvider>
        )}
      </Suspense>
    </>
  )
}
