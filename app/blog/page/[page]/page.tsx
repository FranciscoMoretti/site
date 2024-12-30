import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { getAllViews } from '@/app/actions'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(sortPosts(allBlogs))

  const views = await getAllViews()
  const viewsBySlug =
    views?.reduce((acc, view) => {
      acc[view.slug] = view.views
      return acc
    }, {}) || {}

  const pageNumber = parseInt(params.page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts.map((post) => ({ ...post, viewCount: viewsBySlug[post.slug] }))}
      initialDisplayPosts={initialDisplayPosts.map((post) => ({
        ...post,
        viewCount: viewsBySlug[post.slug],
      }))}
      pagination={pagination}
      title="All Posts"
    />
  )
}
