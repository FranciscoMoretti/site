import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { routepathToSlug } from "@/lib/path"
import { absoluteUrl, cn, formatDate } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Mdx } from "@/components/mdx"
import { PostViews } from "@/components/post-views"
import { upsertPost } from "@/app/(marketing)/actions"

import { allAuthors, allPosts, Post } from ".contentlayer/generated"

import "@/styles/mdx.css"

import fs from "fs/promises"
import { unstable_cache } from "next/cache"

import { ContentParams } from "@/types/contentParams"
import { downloadImage } from "@/lib/image-downloader"
import { contentParamsToKey } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export const revalidate = 86400
// TODO: This can be obtained dynamically from the allPosts import, any element.type
const contentType = "Post"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getAllPosts() {
  // TODO: GEt the address to read automatically from schema definition
  const indexPath = path.join(
    process.cwd(),
    ".contentlayer/generated/Post/_index.json"
  )
  const content = await fs.readFile(indexPath, "utf-8")
  // TODO: Parse with ZOD
  const allPosts = JSON.parse(content)
  return allPosts
}

// TODO: Create a return type automatically
async function getAllPostsMetadata() {
  const allPosts = await getAllPosts()
  // Returns everything but the body
  return allPosts.map((post) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { body, ...rest } = post
    return rest
  })
}

async function getPostMetadataFromParams(
  params: ContentParams
): Promise<Omit<Post, "body"> | null> {
  // TODO: Here rename to `Get all of Type` to make more generic
  const getAllPostsMetadataCached = await buildAllPostMetadataCache()

  const allPosts = await getAllPostsMetadataCached()
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    null
  }

  return post
}

async function buildAllPostMetadataCache() {
  return await unstable_cache(
    async () => {
      console.log("Getting all posts metadata")
      return await getAllPostsMetadata()
    },
    ["allPosts"],
    { tags: ["allPosts"] }
  )
}

async function getPostFromParams(params: ContentParams): Promise<Post | null> {
  const slug = params.slug
  const allPosts = await getAllPosts()
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  console.log("Generating metadata for:", params.slug)
  const post = await getPostMetadataFromParams({
    type: contentType,
    slug: params.slug[0],
  })

  if (!post) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  let ogUrl
  if (post.cover) {
    ogUrl = post.cover
  } else {
    ogUrl = new URL(`${url}/api/og`)
    ogUrl.searchParams.set("heading", post.title)
    ogUrl.searchParams.set("tags", post.tags.join("|"))
    ogUrl.searchParams.set("type", "Blog Post")
    ogUrl.searchParams.set("mode", "light")
  }

  return {
    title: {
      absolute: post.title,
    },
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.routepath),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  console.log("Generating static params")
  const getAllPostsMetadataCached = await buildAllPostMetadataCache()
  const allPosts = await getAllPostsMetadataCached()
  const promises = allPosts.map(async (post) => {
    const { routepath } = post
    try {
      return await upsertPost(routepath)
    } catch (error) {
      console.log(error)
    }
  })

  if (process.env.NODE_ENV !== "production") {
    await Promise.all(promises).catch((error) => {
      console.log("Error:", error)
    })

    const projectFolderPath = path.join(process.cwd(), "public", "thumbnails")
    const url = process.env.NEXT_PUBLIC_APP_URL

    const thumbnailPromises = allPosts
      .filter((post) => {
        return Boolean(post.thumbnail && !post.cover)
      })
      .map(async (post) => {
        const { routepath, thumbnail } = post
        const imageUrl = new URL(`${url}/api/thumbnail`)
        if (!thumbnail) {
          throw Error(`Unexpected empty thumbnail in [${routepath}]`)
        } else if (thumbnail.length < 3) {
          throw Error(`Thumbnail has few arguments in [${routepath}]`)
        }
        imageUrl.searchParams.set("line1", thumbnail[0])
        imageUrl.searchParams.set("line2", thumbnail[1])
        imageUrl.searchParams.set("line3", thumbnail[2])
        try {
          const imagePath = path.join(projectFolderPath, `${routepath}.png`)
          return downloadImage({
            outputPath: imagePath,
            imageUrl: imageUrl.toString(),
          })
        } catch (error) {
          console.log(error)
        }
      })

    await Promise.all(thumbnailPromises).catch((error) => {
      console.log("Error:", error)
    })
  }

  return allPosts.map((post) => ({
    slug: [routepathToSlug(post.routepath)],
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const contentParams = {
    slug: params.slug[0],
    type: contentType,
  }
  // TODO: Create a contentParamsToKey function that saves the keys alphabetically
  const pageKey = contentParamsToKey(contentParams)
  console.log("Page key:", pageKey)
  const getCachedPost = await unstable_cache(
    async () => {
      console.log("Generating page:", pageKey)
      return await getPostFromParams(contentParams)
    },
    [pageKey],
    { tags: [pageKey] }
  )

  const post = await getCachedPost()

  if (!post) {
    notFound()
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ routepath }) => routepath === `/authors/${author}`)
  )

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          {post.date && (
            <time dateTime={post.date} className="block">
              Published on {formatDate(post.date)}
            </time>
          )}
          <PostViews slug={post.slug} />
        </div>
        <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="mb-2 mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {post.cover && (
        <Image
          src={post.cover}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
      <hr className="my-4" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  )
}
