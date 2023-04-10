import { allBlogs } from 'contentlayer/generated';
import { siteURL } from '~/config/info';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `${siteURL}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/about', '/blog'].map(
    (route) => ({
      url: `${siteURL}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
