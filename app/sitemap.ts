import { allPosts, allDocs } from "contentlayer/generated"

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `https://franciscomoretti.com${post.slug}`,
    lastModified: post.date,
  }))

  const docs = allDocs.map((doc) => ({
    url: `https://franciscomoretti.com${doc.slug}`,
    lastModified: doc.date,
  }))

  // const routes = ["", "/about", "/blog", "/guestbook", "/uses"].map(
  const routes = ["", "/blog"].map((route) => ({
    url: `https://franciscomoretti.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...posts, ...docs]
}
