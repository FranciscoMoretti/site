interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Sparka AI',
    description: `AI for everyone, from everyone - Access Claude, ChatGPT, Gemini, Grok, and every major AI assistant`,
    imgSrc:
      'https://raw.githubusercontent.com/FranciscoMoretti/sparka/refs/heads/main/app/opengraph-image.png',
    href: 'https://sparka.ai',
  },

  {
    title: 'Carousel Generator',
    description: `An open source AI carousel maker for LinkedIn.`,
    imgSrc:
      'https://raw.githubusercontent.com/FranciscoMoretti/carousel-generator/refs/heads/main/src/app/opengraph-image.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Notion Downloader',
    description: `Easily download your Notion pages and databases to Markdown, images, and more. Keep your content in sync with automatic updates.`,
    imgSrc:
      'https://raw.githubusercontent.com/FranciscoMoretti/notion-downloader/refs/heads/main/apps/www/app/opengraph-image.png',
    href: 'https://github.com/FranciscoMoretti/notion-downloader',
  },
]

export default projectsData
