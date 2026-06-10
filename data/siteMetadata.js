const siteMetadata = {
  title: 'Francisco Moretti',
  author: 'Francisco Moretti',
  description:
    'Francisco Moretti is a Frontend Product Engineer based in London, specializing in building AI applications.',
  language: 'en-us',
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://www.franciscomoretti.com',
  keywords: ['Frontend Product Engineer', 'AI applications', 'React', 'Next.js', 'TypeScript'],
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/opengraph-image.png`,
  github: 'https://github.com/franciscomoretti',
  linkedin: 'https://www.linkedin.com/in/franciscomoretti/',
  x: 'https://x.com/franmoretti_',
  locale: 'en-US',
}

module.exports = siteMetadata
