# Site

An personal site built with modern web technologies that uses @shadcn [Taxonomy](https://github.com/shadcn/taxonomy) as a starter.

> **Warning**
> This app is a work in progress. I'm building this in public. You can use it for your own site but breaking changes.
> You can follow the progress on LinkedIn [@franciscomoretti](https://www.linkedin.com/in/franciscomoretti).

## Demo

![Site Preview of docs page](/site_preview.png)

## About this project

This project uses Next.js app router and other new technologies. It's build with modern web development in mind.

The plan is to implement all the features and niceness for a personal blog.

## Note on Performance

> **Warning**
> This app is using the canary releases for Next.js 13 and React 18. The new router and app dir is still in beta and not production-ready.
> **Expect some performance hits when testing the dashboard**.
> If you see something broken, you can ping me [@franmoretti\_](https://twitter.com/franmoretti_).

## Features

- ✅ New `/app` dir
- ✅ Obsidian compatibility
- ✅ TOC (Table of contents)
- ✅ Documentation-like layout
- ✅ Blog-like layout
- ✅ Automatic Sitemap and RSS Feed
- ✅ Loading UI
- ✅ Server and Client Components
- ✅ OG Image per post generated at the edge
- ✅ UI Components built using **Radix UI** through **Shadcn/ui**
- ✅ **code-tips** (documentation) and **blog** using **MDX** and **Contentlayer**
- ✅ Styled using **Tailwind CSS**
- ✅ Validations using **Zod**
- ✅ Written in **TypeScript**
- ✅ Copy code button
- ✅ Search with **cmdk**
- ✅ Custom tailwind styles
- ✅ Show views for each post using **Prisma** and **Turso**
- ✅ Personalized OG Images
- ✅ Dark mode

## Roadmap

- [ ] Framer motion animations on home screen
- [ ] Unit tests

## Inspiration

- https://tx.shadcn.com/
- https://ui.shadcn.com/
- https://flowershow.app/

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

Note: If you don't have pnpm, here is the [installation guide](https://pnpm.io/installation).

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

5. Start the application:

```sh
pnpm dev
```

## Customization

1. Customize the site by using your own info in `config/config.ts`

2. Put your content into the content directory and your assets in content/assets directory.
3. Replace the `opengraph-image.jpg` for your own image and `opengraph-image.alt.txt` for its alt text.

## Setting up Turso DB

Check out the [setup guide](https://docs.turso.tech/sdk/ts/orm/prisma)

4. Push the prisma DB

```sh
pnpm exec prisma db push
```

or

```sh
npx prisma db push
```

## Analytics

Analytics are provided automatically by Vercel and their free tier is a great way to start. As an alternative, Posthog is integrated as well.

### Posthog

To use Posthog you need to create an account and set the keys in the `.env` file

```
NEXT_PUBLIC_POSTHOG_KEY=<ph_project_api_key>
NEXT_PUBLIC_POSTHOG_HOST=<ph_instance_address>
```

## License

Licensed under the [MIT license](https://github.com/franciscomoretti/site/blob/main/LICENSE.md).
