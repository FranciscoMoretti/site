import { Suspense } from 'react'
import { PostViewsClient } from './post-views-client'
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getAllViewsCache } from '@/app/actions'

export async function PostViews({ slug }: { slug: string }) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['postViews'],
    queryFn: getAllViewsCache, // Gets views from cache, indicating pages with this invalidate
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<span>Loading views...</span>}>
        <PostViewsClient slug={slug} />
      </Suspense>
    </HydrationBoundary>
  )
}
