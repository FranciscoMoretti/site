import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getOgImageUrl } from '@/lib/getOgImageUrl'

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const naturalTagName = Object.keys(tagData).find((key) => slug(key) === tag)
  if (!naturalTagName) {
    return notFound()
  }
  return genPageMetadata({
    title: naturalTagName,
    description: `${siteMetadata.title} ${naturalTagName} tagged content - All articles related to ${naturalTagName}`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
    image: getOgImageUrl({
      heading: naturalTagName,
      type: 'Page',
      mode: 'dark',
    }),
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(slug(tag)),
  }))
  return paths
}

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(
      allBlogs
        .filter((post) => post.draft !== true)
        .filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag))
    )
  )

  if (filteredPosts.length === 0) {
    return notFound()
  }
  return <ListLayout posts={filteredPosts} title={title} />
}
