import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { PostCard } from "@/components/post-card"

export const revalidate = 60

export const metadata = {
  title: "Blog",
  description:
    "Welcome to the Happy Coding Blog! Enter the world of modern web development and discover tools, tips, and tutorials. Happy Coding!",
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.publish)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Happy Coding Blog!
          </h1>
          <h2 className="inline-block text-2xl font-bold tracking-tight lg:text-3xl">
            Modern Web, Happy coding 🌐😄
          </h2>
          <p className="text-xl text-muted-foreground">
            {
              "In this blog, we use modern tools like VS Code, Next.js, React, TailwindCSS, and Typescript to make development easier and coding more enjoyable. These tools are user-friendly, perform well, and have strong community support. They help you effortlessly create awesome websites and web apps. Say goodbye to tedious workflows and hello to efficient coding that sparks joy!"
            }
          </p>
          <p className="text-xl text-muted-foreground">Happy Coding! 😄🎉</p>
        </div>
      </div>
      <hr className="my-8 border-secondary" />
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
