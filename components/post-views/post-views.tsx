import { PostViewsClient } from './post-views-client'

export function PostViews({ slug }: { slug: string }) {
  return <PostViewsClient slug={slug} />
}
