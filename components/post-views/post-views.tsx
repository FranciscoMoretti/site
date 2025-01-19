import { Suspense } from 'react'
import { PostViewsClient } from './post-views-client'

export function PostViews({ slug }: { slug: string }) {
  return (
    <Suspense fallback={null}>
      <PostViewsClient slug={slug} />
    </Suspense>
  )
}
