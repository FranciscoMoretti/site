---
tag: Next.js, Services
alias:

publish: true
slug: next-conf-2021-notes-and-resources

title: Next Conf 2021 Notes and Resources
description: Explore the key insights and resources from Next Conf 2021 and Next.js 12. Discover Next.js SDK, web performance strategies, ES Modules support, and more.
date: 2021-11-13
image:
---

Check [“The Future of React & Next.js”](https://www.youtube.com/watch?v=dMBYI7pTR4Q&list=PLBnKlKpPeagnJYpc5geAHU40ld5hk8i82) for an engaging keynote of the conference that features several demos. Also, visit the [official Next.js 12 page](https://nextjs.org/blog/next-12).


## The Next.js SDK

Next.js is building the open source web SDK that pulls together the lessons of the giants of the Web and is completely free to use. As websites and web applications get larger and more ambitious, making the Web faster calls for an SDK that has all the necessary tools built in.

## Web performance is like an iceberg of complexity

Next.js deals with this with 2 strategies: - Great defaults for production that are applied automatically such as optimizing JS bundles and inlining the critical CSS of the fonts you’re using. - Building on the powerful React abstractions, give you drop-in replacements for common needs that you can implement to get better performance.

## Conformance

Next.js also has a great set of best practices. The good news is that you don’t have to memorize them, it has built-in conformance. - If you forget to use any of these tools, Next.js will remind you and help you and your team ship better applications.

Great production defaults and great built-in components, plus the conformance to reinforce them, have delivered in a great way.

Check the [Next.js 11 conformance section](https://nextjs.org/blog/next-11#conformance) and the [web.dev conformance section](https://web.dev/conformance/#conformance-in-next.js).

## ES Modules

Next.js now supports [ES Modules](https://nodejs.org/api/esm.html) natively. - ES Modules bring an official standardized module system to javascript. - Supported by all major browsers as well as Node.js. - Smaller package sizes and ultimately a better end-user experience.

Check [“The Developer Experience of the Future”](https://www.youtube.com/watch?v=_WNeAubn92U) and the [Next.js 12 ES Modules section](https://nextjs.org/blog/next-12#es-modules-support-and-url-imports).

## URL imports

Use any package directly through a URL no installation or build step is required. - Any CDN that serves ES Modules will work. - Seamless integrations into no-code and design tools like Framer.

Check the [Next.js 12 URL imports section](https://nextjs.org/blog/next-12#url-imports).

## Rust Compiler

A brand new [Rust](https://www.rust-lang.org/) compiler. - Built with SWC, an open platform for the next generation of fast tooling. - 3x faster Fast Refresh. - ~5x faster builds.

Check the [Next.js 12 Rust Compiler section](https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler)

## Next.js Live

An instant development and real-time collaboration experience. It makes development, ideation, and design happen in the browser in real time. - Runs natively inside the web browser. - Boots up instantly - Anyone with a link can collaborate.

Check [“Workflow and Collaboration with Next.js and Vercel”](https://www.youtube.com/watch?v=15k489yFDd8) or visit [vercel.com/live](https://vercel.com/live).

## Vercel Checks

Instead of making changes based on intuition, verify that your core web vitals are healthy before merging going to production. - Run automated tests for performance and reliability on every pull request.

With [Vercel Checks](https://vercel.com/features/previews#checks) you ensure correctness and web vitals performance right after you build, preventing mistakes and bad performance from making their way into production. Check [“Workflow and Collaboration with Next.js and Vercel”](https://www.youtube.com/watch?v=15k489yFDd8) or visit [vercel.com/live](https://vercel.com/features/previews#checks).

## Middleware

A common abstraction when self-hosting Next.js is middleware. Now middleware is supported natively in Next.js and Edge Functions on Vercel. - Middleware enables you to use code over configuration. This gives you full flexibility in Next.js because you can run code before a request is completed. - Based on the user’s incoming request you can modify the response by rewriting, redirecting, adding headers, or even streaming HTML.

Check the [Next.js 12 Middleware section](https://nextjs.org/blog/next-12#introducing-middleware).

## Edge Functions

[Edge Functions](https://vercel.com/features/edge-functions) are a new primitive way of getting rid of the remaining trade-offs with serverless. - They boot up instantly, no more code boots, deploy globally, and support streaming. - The dynamic power of code and the speed guarantees of static. - The power of the edge doesn’t stop at middleware, and it’s not just for routing. The future of React is coming directly to the edge.

## React Server Components

With [React Server Components](https://vercel.com/blog/everything-about-react-server-components) you can render everything, including the components themselves, on the server. This is fundamentally different from server-side rendering where you’re pre-generating HTML on the server. - Zero client-side JavaScript needed, making page rendering much faster. - React Server Components and granular component caching are made possible by innovations like edge functions that support streaming eliminates cold boots and deploy globally by default.
