import { allDocs, allPosts, allTags } from "contentlayer/generated"

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `https://www.franciscomoretti.com${post.routepath}`,
    lastModified: post.date,
  }))

  const docs = allDocs.map((doc) => ({
    url: `https://www.franciscomoretti.com${doc.routepath}`,
    lastModified: doc.date,
  }))

  const tags = allTags.map((doc) => ({
    url: `https://www.franciscomoretti.com${doc.routepath}`,
    lastModified: doc.date,
  }))

  // const routes = ["", "/about", "/blog", "/guestbook", "/uses"].map(
  const routes = ["", "/blog"].map((routepath) => ({
    url: `https://www.franciscomoretti.com${routepath}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...posts, ...docs, ...tags]
}
