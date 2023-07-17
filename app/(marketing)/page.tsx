import Link from "next/link"
import { FORMAT_H3 } from "@/styles/format"
import { allPosts, allTags, Tag } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import BlogPostList from "@/components/blog-post-list"
import { getTagsItems, TagGroup } from "@/components/tag-group"
import { UserAvatar } from "@/components/user-avatar"

const TECHNOLOGIES = [
  "next-js",
  "vs-code",
  "javascript",
  "typescript",
  "tailwind-css",
  "react",
]

async function getGitHubStars(): Promise<string | null> {
  if (process.env.DISABLE_APIS) {
    return "0"
  }

  try {
    const response = await fetch(
      "https://api.github.com/repos/franciscomoretti/site",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()
  const tagsItems = await getTagsItems(allTags)

  const technologiesTags = TECHNOLOGIES.map(function (value) {
    return allTags.find(function (obj) {
      return obj.slug === value
    })
  }) as Tag[]

  const posts = allPosts
    .filter((post) => post.publish)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, 4)

  return (
    <>
      <section className="container flex flex-col-reverse items-center justify-center gap-6 pb-8 pt-6 sm:flex-row md:pb-12 md:pt-10 lg:pb-24 lg:pt-16">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
            Francisco Moretti
          </h1>
          <h2 className="text-lg font-semibold tracking-tighter sm:text-2xl md:text-3xl">
            Modern Web, Happy Coding
          </h2>
          <p className=" text-center leading-normal text-muted-foreground sm:text-start sm:text-xl sm:leading-8">
            I learn in public to support your coding journey
          </p>
          <div className="flex gap-4">
            <Link href="/blog" className={cn(buttonVariants({ size: "lg" }))}>
              Visit the blog
            </Link>
          </div>
        </div>
        <UserAvatar
          user={{
            name: siteConfig.name || "",
            image: siteConfig.profilePicture,
          }}
          className="mx-16 h-36 w-36 bg-gradient-to-b from-primary to-blue-200 shadow-lg ring-4 ring-primary/80"
        />
      </section>
      <hr className="container" />
      <section
        id="features"
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-semibold sm:text-3xl md:text-6xl">
            Technologies
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {
              "I write about these technologies I work with. I've used all  of them to create this site."
            }
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {technologiesTags.map((tag) => (
            <TechCard
              key={tag.slug}
              name={tag.tag}
              description={tag.description || ""}
              link={tag.routepath}
            />
          ))}
        </div>
      </section>
      <hr className="container" />
      <section className="container space-y-8 py-8 md:max-w-4xl md:py-12 lg:py-16">
        <h2 className="mb-4 scroll-m-20 pb-1 text-center text-2xl font-semibold tracking-tight first:mt-0 md:text-5xl">
          {"Recent Posts"}
        </h2>
        <BlogPostList posts={posts} />
        {allPosts.length > posts.length && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </section>
      <hr className="container" />
      <section className="space-6 container py-8 md:max-w-4xl md:py-12 lg:py-24">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-2xl font-bold leading-[1.1] tracking-tighter sm:text-2xl md:text-5xl">
            Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground  sm:text-lg sm:leading-7">
            Site is open source and powered by open source software. The code is
            available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            . Start here and create your own site.
          </p>
          {stars && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
      <hr className="container" />
      <section className="container space-y-8 py-8 md:max-w-4xl md:py-12 lg:py-16">
        <h2 className="mb-4 scroll-m-20 pb-1 text-center text-2xl font-semibold tracking-tight first:mt-0 md:text-5xl">
          All topics
        </h2>
        <TagGroup tagsItems={tagsItems} />
      </section>
    </>
  )
}

function TechCard({
  name,
  description,
  link,
}: {
  name: string
  description: string
  link: string
}) {
  return (
    <Link href={link}>
      <div className="relative animate-border overflow-hidden rounded-lg bg-gradient-to-r from-border via-secondary to-border bg-[length:400%_400%] p-[1px] ">
        <span className="block rounded-md bg-background px-5 py-3 font-bold hover:bg-accent">
          <div className="flex h-44 flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className={cn(FORMAT_H3, "mt-0")}>{name}</h3>
              <p className="text-muted-foregroun line-clamp-4 text-sm">
                {description}
              </p>
            </div>
          </div>
        </span>
      </div>
    </Link>
  )
}
