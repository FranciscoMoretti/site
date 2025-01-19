import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from '@/app/seo'
import { getOgImageUrl } from '@/lib/getOgImageUrl'

const POSTS_PER_PAGE = 5

export const experimental_ppr = true

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(
    allBlogs.filter((blog) => blog.draft !== true).length / POSTS_PER_PAGE
  )
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export const metadata = genPageMetadata({
  title: 'Blog',
  image: getOgImageUrl({
    heading: 'Blog',
    type: 'Page',
    mode: 'dark',
  }),
})

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(sortPosts(allBlogs.filter((blog) => blog.draft !== true)))

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
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
