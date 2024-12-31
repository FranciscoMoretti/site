import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { slug } from 'github-slugger'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const tagRoutes = Object.keys(tagData).map((tag) => ({
    url: `${siteUrl}/tags/${slug(tag)}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const routes = ['', 'blog', 'projects'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes, ...tagRoutes]
}
