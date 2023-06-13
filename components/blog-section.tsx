import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import Link from "next/link"
import React from "react"
import { PostCard } from "./post-card"

export default function BlogSection({ MAX_DISPLAY }) {
  const posts = allPosts
    .filter((post) => post.publish)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, 4)

  return (
    <>
      <h2 className="mb-4 scroll-m-20 pb-1 text-2xl font-semibold tracking-tight first:mt-0 md:text-5xl">
        Recent Posts
      </h2>
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => PostCard({ post, index }))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
      {posts.length > MAX_DISPLAY && (
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
    </>
  )
}
