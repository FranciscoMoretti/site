import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { Home } from './Home'
const MAX_DISPLAY = 5

export const experimental_ppr = true

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs.filter((blog) => blog.draft !== true))
  const posts = allCoreContent(sortedPosts.slice(0, MAX_DISPLAY))

  return <Home posts={posts} hasMorePosts={sortedPosts.length > MAX_DISPLAY} />
}
