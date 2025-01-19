import { PostViewsClient } from './post-views-client'

export function PostViews({ slug }: { slug: string }) {
  if (process.env.TURSO_DATABASE_URL) {
    return <PostViewsClient slug={slug} />
  }

  return null
}
