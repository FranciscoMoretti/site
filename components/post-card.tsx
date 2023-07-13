import Image from "next/image"
import Link from "next/link"
import { Post } from "@/.contentlayer/generated"

import { formatDate } from "@/lib/utils"
import { PostViews } from "@/components/post-views"

import { Badge } from "./ui/badge"

export function PostCard({
  post,
  index = 0,
}: {
  post: Post
  index?: number
}): JSX.Element {
  return (
    <article key={post._id} className="group relative flex flex-col space-y-2">
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={804}
          height={452}
          className="rounded-md border bg-muted transition-colors"
          priority={index <= 1}
        />
      )}
      <h2 className="text-2xl font-extrabold">{post.title}</h2>
      <div className="flex flex-wrap gap-1">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      {post.description && (
        <p className="line-clamp-3 text-muted-foreground">{post.description}</p>
      )}
      <div className="flex space-x-4 text-sm text-muted-foreground">
        {post.date && <p className="text-sm">{formatDate(post.date)}</p>}
        <PostViews slug={post.slug} />
      </div>
      <Link href={post.routepath} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  )
}
