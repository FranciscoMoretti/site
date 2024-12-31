import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { Home } from './Home'
import { getAllViews } from './actions'
const MAX_DISPLAY = 5

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs.filter((blog) => blog.draft !== true))
  const views = await getAllViews()
  const viewsBySlug =
    views?.reduce((acc, view) => {
      acc[view.slug] = view.views
      return acc
    }, {}) || {}
  const posts = allCoreContent(sortedPosts.slice(0, MAX_DISPLAY)).map((post) => {
    const { slug, date, title, summary, tags } = post
    return {
      slug,
      date,
      title,
      summary,
      tags,
      viewCount: viewsBySlug[slug],
    }
  })

  return <Home posts={posts} hasMorePosts={sortedPosts.length > MAX_DISPLAY} />
}
