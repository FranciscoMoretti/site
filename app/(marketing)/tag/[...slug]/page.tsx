import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  FORMAT_A,
  FORMAT_H2,
  FORMAT_LI,
  FORMAT_LINKED_HEADER,
  FORMAT_UL,
} from "@/styles/format"
import { allPosts, allTags } from "contentlayer/generated"

import { routepathToSlug } from "@/lib/path"
import { getAllTags } from "@/lib/tags"
import { absoluteUrl } from "@/lib/utils"
import { AutoLinkHeading } from "@/components/autolink-heading"
import { Mdx } from "@/components/mdx"
import { getTagsItems, TagGroup } from "@/components/tag-group"

import "@/styles/mdx.css"

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

  const tagsItems = await getTagsItems(allTags)
  const posts = await getPostsOfTag(tag.tag)

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
          {tag.title}
        </h1>
      </div>
      <hr className="my-4 border-secondary" />
      <Mdx code={tag.body.code} />
      <AutoLinkHeading
        className={FORMAT_LINKED_HEADER}
        linkClassName={FORMAT_A}
      >
        <h2 className={FORMAT_H2}>{`All posts on ${tag.tag}`}</h2>
      </AutoLinkHeading>
      {posts?.length ? (
        <ul className={FORMAT_UL}>
          {posts.map((post) => (
            <li className={FORMAT_LI} key={post.routepath}>
              <Link href={post.routepath} className={FORMAT_A}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts published.</p>
      )}
      <hr className="my-4 border-secondary" />
      <h2 className="my-4 scroll-m-20 pb-1 text-center text-3xl font-semibold tracking-tight md:text-4xl">
        All topics
      </h2>
      <TagGroup tagsItems={tagsItems} />
    </article>
  )
}
