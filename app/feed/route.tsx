import { allPosts } from "contentlayer/generated"
import Rss from "rss"

export async function GET() {
  const feed = new Rss({
    title: "Example blog",
    description: "Lorem ipsum dolor sit amet.",
    feed_url: `${process.env.NEXT_PUBLIC_APP_URL}/rss.xml`,
    site_url: process.env.NEXT_PUBLIC_APP_URL || "",
    language: "en",
  })

  allPosts.forEach((article) => {
    feed.item({
      title: article.title,
      description: article.description || "",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${article.slug}`,
      author: article.authors.join(", "),
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
