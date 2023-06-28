import { Suspense } from "react"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allPosts, allTags } from "contentlayer/generated"

import { routepathToSlug } from "@/lib/path"
import { absoluteUrl, formatDate } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Mdx } from "@/components/mdx"
import { PostPageViews } from "@/components/post-page-views"

import "@/styles/mdx.css"

import { getAllTags } from "@/lib/tags"

export const revalidate = 0

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getTagFromParams(params) {
  const slug = params?.slug?.join("/")
  const tag = allTags.find((post) => routepathToSlug(post.routepath) === slug)

  if (!tag) {
    null
  }

  return tag
}

async function getPostsOfTag(tag: string) {
  const posts = allPosts.filter((post) =>
    post.tags ? post.tags.includes(tag) : false
  )

  if (!posts) {
    null
  }

  return posts
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const tag = await getTagFromParams(params)

  if (!tag) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", tag.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: {
      absolute: tag.title,
    },
    description: tag.description,
    // authors: tag.authors.map((author) => ({
    //   name: author,
    // })),
    openGraph: {
      title: tag.title,
      description: tag.description,
      type: "article",
      url: absoluteUrl(tag.routepath),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: tag.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tag.title,
      description: tag.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  const tags: string[] = getAllTags()
  return tags.map((tag) => ({
    slug: [tag],
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const tag = await getTagFromParams(params)

  if (!tag) {
    notFound()
  }

  const posts = await getPostsOfTag(tag.tag)

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        <h2 className="mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
          {tag.title}
        </h2>
      </div>
      <hr className="my-4 border-secondary" />
      <Mdx code={tag.body.code} />
      <div>
        <h2 className="mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
          All posts on {tag.title}
        </h2>
      </div>
      {posts && posts.map((post) => <div key={post.title}>{post.title}</div>)}

      <hr className="my-4 border-secondary" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  )
}
