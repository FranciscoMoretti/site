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

- New `/app` dir
- Obsidian compatibility
- TOC (Table of contents)
- Documentation-like layout
- Blog-like layout
- Loading UI
- Server and Client Components
- OG Image per post generated at the edge
- UI Components built using **Radix UI**
- **code-tips** (documentation) and **blog** using **MDX** and **Contentlayer**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**
- Copy code button

## Roadmap

- [ ] Custom tailwind styles
- [ ] Personalized OG Images
- [ ] Framer motion animations on home screen
- [ ] Show views for each page using **Prisma** and **PlanetScale**
- [ ] Dark mode
- [ ] Add tests

## Inspiration

- https://tx.shadcn.com/
- https://flowershow.app/

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Customize the site by using your own info in `config/config.ts`

4. Put your content into the content directory and your assets in content/assets directory.

## License

Licensed under the [MIT license](https://github.com/franciscomoretti/site/blob/main/LICENSE.md).
