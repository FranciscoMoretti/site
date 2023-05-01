import { allPosts, allDocs } from "contentlayer/generated"

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `https://www.franciscomoretti.com${post.slug}`,
    lastModified: post.date,
  }))

  const docs = allDocs.map((doc) => ({
    url: `https://www.franciscomoretti.com${doc.slug}`,
    lastModified: doc.date,
  }))

  // const routes = ["", "/about", "/blog", "/guestbook", "/uses"].map(
  const routes = ["", "/blog"].map((route) => ({
    url: `https://www.franciscomoretti.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...posts, ...docs]
}
