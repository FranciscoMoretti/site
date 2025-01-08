/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Francisco Moretti',
  author: 'Francisco Moretti',
  headerTitle: 'Francisco Moretti',
  hideHeaderTitle: true,
  description:
    "Hi, I'm Francisco! I'm learning in public and sharing my journey. I'm working with modern web technologies like Next.js, React, TailwindCSS, and TypeScript.",
  heroTitle: "Hi, I'm Francisco!",
  heroSubtitle:
    "Welcome to my blog - I'm learning in public and sharing my journey. I'm working with modern web technologies like Next.js, React, TailwindCSS, and TypeScript.",

  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: process.env.NEXT_PUBLIC_APP_URL,
  siteRepo: 'https://github.com/franciscomoretti/site',
  siteLogo: `${process.env.BASE_PATH || ''}/static/logo.svg`,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'AI'],
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/opengraph-image.png`,
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'franciscoemoretti@gmail.com',
  github: 'https://github.com/franciscomoretti',
  x: 'https://x.com/franmoretti_',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/franciscomoretti/',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com',
  // medium: 'https://medium.com',
  // bluesky: 'https://bsky.app/',
  locale: 'en-US',
  discussTwitter: false,
  stickyNav: false, // set to true if you want a navbar fixed to the top
  // newsletter: {
  //   // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
  //   // Please add your .env file and modify it according to your selection
  //   provider: 'buttondown',
  // },
  comments: {
    //   // If you want to use an analytics provider you have to add it to the
    //   // content security policy in the `next.config.js` file.
    //   // Select a provider and use the environment variables associated to it
    //   // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
