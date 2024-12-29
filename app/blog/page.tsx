import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import { getAllViews } from '../actions'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const views = await getAllViews()
  const viewsBySlug =
    views?.reduce((acc, view) => {
      acc[view.slug] = view.views
      return acc
    }, {}) || {}

  const pageNumber = 1
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
