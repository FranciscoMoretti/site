'use server'

import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getAllViewsDb } from '@/app/actions'

// Component for dynamic SSR
export async function PostViewsProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['postViews'],
    queryFn: getAllViewsDb,
  })

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
