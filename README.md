# Site

An personal site built with modern web technologies that uses @shadcn [Taxonomy](https://github.com/shadcn/taxonomy) as a starter.

> **Warning**
> This app is a work in progress. I'm building this in public. You can use it for your own site but breaking changes.
> You can follow the progress on LinkedIn [@franciscomoretti](https://www.linkedin.com/in/franciscomoretti).

## Demo

![screenshot-2](https://user-images.githubusercontent.com/124599/198038921-2b16b18b-cb4d-44b1-bd1d-6419d4a8d92c.png)

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

## Roadmap

- [ ] Copy code button
- [ ] Custom tailwind styles
- [ ] Show views for each page using ORM using **Prisma** and **PlanetScale**
- [ ] Add tests
- [ ] Dark mode

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
```

## License

Licensed under the [MIT license](https://github.com/franciscomoretti/site/blob/main/LICENSE.md).
