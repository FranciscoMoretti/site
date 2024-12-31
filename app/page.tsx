import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { Home } from './Home'
import { getAllViews } from './actions'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs.filter((blog) => blog.draft !== true))
  const posts = allCoreContent(sortedPosts)

  const views = await getAllViews()
  const viewsBySlug =
    views?.reduce((acc, view) => {
      acc[view.slug] = view.views
      return acc
    }, {}) || {}

  return <Home posts={posts.map((post) => ({ ...post, viewCount: viewsBySlug[post.slug] }))} />
}
