import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { PostCard } from "@/components/post-card"

export const revalidate = 86400 // 1 day

export const metadata = {
  title: "Blog",
  description:
    "Welcome to the Happy Coding Blog! Exploring modern web dev tools like VS Code, Next.js, React, Tailwind, and TypeScript.",
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.publish)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <div className="flex flex-1 flex-col space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Happy Coding Blog!
          </h1>
          <h2 className="inline-block text-2xl font-bold tracking-tight lg:text-3xl">
            Modern Web, Happy coding 🌐😄
          </h2>
          <p className="text-xl text-muted-foreground">
            {
              "Exploring modern web dev tools like VS Code, Next.js, React, Tailwind, and TypeScript. Making coding more enjoyable with user-friendly, performant tech that has great community support. Simplifying the process of building awesome sites and apps, so you can focus on the fun parts!"
            }
          </p>
          <p className="text-xl text-muted-foreground">Happy Coding! 😄🎉</p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => PostCard({ post, index }))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
