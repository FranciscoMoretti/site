import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allAuthors, allPosts } from "contentlayer/generated"

import { routepathToSlug } from "@/lib/path"
import { absoluteUrl, cn, formatDate } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Mdx } from "@/components/mdx"
import { PostViews } from "@/components/post-views"
import { upsertPost } from "@/app/(marketing)/actions"

import "@/styles/mdx.css"

import { downloadImage } from "@/lib/image-downloader"
import { buttonVariants } from "@/components/ui/button"

export const revalidate = 60

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => routepathToSlug(post.routepath) === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("tags", post.tags.join("|"))
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "light")

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
  const promises = allPosts.map(async (post) => {
    const { slug } = post
    try {
      return await upsertPost(slug)
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
        return Boolean(post.thumbnail)
      })
      .map(async (post) => {
        const { slug, thumbnail } = post
        const imageUrl = new URL(`${url}/api/thumbnail`)
        if (!thumbnail) {
          throw Error(`Unexpected empty thumbnail in [${slug}]`)
        } else if (thumbnail.length < 3) {
          throw Error(`Thumbnail has few arguments in [${slug}]`)
        }
        imageUrl.searchParams.set("line1", thumbnail[0])
        imageUrl.searchParams.set("line2", thumbnail[1])
        imageUrl.searchParams.set("line3", thumbnail[2])
        try {
          thumbnail
          const imagePath = path.join(projectFolderPath, `${slug}.png`)
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
    slug: [post.slug],
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

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
