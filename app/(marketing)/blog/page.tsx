import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog",
  description:
    "Welcome to the Happy Coding Blog! Join us in the world of modern web development and discover tools, tips, and tutorials. Happy Coding!",
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
          <h1 className="inline-block text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
            The Happy Coding Blog!
          </h1>
          <h2 className="inline-block text-2xl font-bold tracking-tight text-slate-800 lg:text-3xl">
            Modern Web, Happy coding 🌐😄
          </h2>
          <p className="text-xl text-slate-600">
            {
              "In this blog, we use modern tools like VS Code, Next.js, React, TailwindCSS, and Typescript to make development easier and coding more enjoyable. These tools are user-friendly, perform well, and have strong community support. They help you effortlessly create awesome websites and web apps. Say goodbye to tedious workflows and hello to efficient coding that sparks joy!"
            }
          </p>
          <p className="text-xl text-slate-600">Happy Coding! 😄🎉</p>
        </div>
      </div>
      <hr className="my-8 border-slate-200" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="line-clamp-2 text-slate-600">
                  {post.description}
                </p>
              )}
              {post.date && (
                <p className="text-sm text-slate-600">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
