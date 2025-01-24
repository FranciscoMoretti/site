import siteMetadata from '@/data/siteMetadata'
import { PostViewsClient } from './post-views-client'

export function PostViews({ slug }: { slug: string }) {
  if (siteMetadata.viewCounter) {
    return <PostViewsClient slug={slug} />
  }

  return null
}
