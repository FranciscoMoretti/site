import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMetadata.siteUrl,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ]
}
