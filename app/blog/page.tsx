import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import { getOgImageUrl } from '@/lib/getOgImageUrl'

const POSTS_PER_PAGE = 5

export const dynamic = 'force-static'

export const metadata = genPageMetadata({
  title: 'Blog',
  image: getOgImageUrl({
    heading: 'Blog',
    type: 'Page',
    mode: 'dark',
  }),
})

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs.filter((blog) => blog.draft !== true)))

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
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
