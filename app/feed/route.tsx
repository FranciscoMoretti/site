import { allPosts } from "contentlayer/generated"
import Rss from "rss"

import { siteConfig } from "@/config/site"

export async function GET() {
  const feed = new Rss({
    title: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    feed_url: `${process.env.NEXT_PUBLIC_APP_URL}/feed`,
    site_url: process.env.NEXT_PUBLIC_APP_URL || "",
    language: "en",
  })

  allPosts.forEach((article) => {
    feed.item({
      title: article.title,
      description: article.description || "",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${article.slug}`,
      author: `${siteConfig.name}`,
      date: article.date,
      categories: article.tags || [],
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  })
}
