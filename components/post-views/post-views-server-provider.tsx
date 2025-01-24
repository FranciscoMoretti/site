'use server'

import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getAllViewsCache } from '@/app/actions'
import siteMetadata from '@/data/siteMetadata'

// Component for dynamic SSR
export async function PostViewsProvider({ children }: { children: React.ReactNode }) {
  if (!siteMetadata.viewCounter) {
    return <>{children}</>
  }

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['postViews'],
    queryFn: getAllViewsCache,
  })

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
