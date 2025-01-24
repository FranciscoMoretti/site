'use server'

import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getAllViewsCache } from '@/app/actions'

// Component for dynamic SSR
export async function PostViewsProvider({ children }: { children: React.ReactNode }) {
  if (!process.env.TURSO_DATABASE_URL) {
    return <>{children}</>
  }

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['postViews'],
    queryFn: getAllViewsCache,
  })

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
