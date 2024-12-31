---
tags: ['React']

draft: false

title: Server Side Rendering Vs Client Side Rendering Waterfall
summary: Explore the impact of server-side rendering (SSR) and client-side rendering (CSR) on performance, focusing on the waterfall effect in React applications.
date: 2024-06-20
images: ['/thumbnails/server-side-rendering-vs-client-side-rendering-waterfall.png']
---

## What is Server Side Rendering (SSR)?

Server-side rendering (SSR) is a technique where the initial HTML of a web page is generated on the server and sent to the client's browser. This approach allows for faster initial page loads and better search engine optimization (SEO) since search engines can easily crawl and index the rendered content.

## What is Client Side Rendering (CSR)?

Client-side rendering (CSR) is a technique where the initial HTML of a web page is minimal, and the content is rendered dynamically on the client-side using JavaScript. This approach can provide a more seamless and interactive user experience, but it may result in slower initial page loads and potential SEO challenges.

## The Waterfall Effect

The waterfall effect refers to the sequence of network requests and responses required to load a web page fully. Each request must wait for the previous one to complete, creating a cascading effect similar to a waterfall.

![SSR vs CSR waterfall](/assets/react_waterfall_ssr_vs_csr.png)

## Client-Side Rendering Waterfall

In a client-side rendered React application, the waterfall effect can be more pronounced due to the multiple round trips required to fetch the necessary JavaScript files and data. Let's consider an example with a `Post` component and a child `Comment` component:

1. **Initial Markup (without content)**: The browser receives the initial HTML markup, which contains placeholders for the React components.
2. **Get the `Post` JS**: The browser fetches the JavaScript file(s) required to render the `Post` component.
3. **Get the `Post` content**: Once the `Post` component is loaded, the browser fetches the data required to render the post content.
4. **Get the `Comment` JS**: The browser fetches the JavaScript file(s) required to render the `Comment` component.
5. **Get the `Comment` content**: Finally, the browser fetches the data required to render the comment content.

This process results in a waterfall with five distinct steps, potentially leading to longer load times and a perceived delay in rendering the complete page.

## Server-Side Rendering Waterfall

In contrast, with server-side rendering, the waterfall effect can be significantly reduced. Here's how it might look for the same `Post` and `Comment` components:

1. **Markup (with content)**: The server generates and sends the initial HTML markup with the rendered content for both the `Post` and `Comment` components.
2. **Get in parallel**:
   - **The `Post` JS**: The browser fetches the JavaScript file(s) required for the `Post` component.
   - **The `Comment` JS**: The browser fetches the JavaScript file(s) required for the `Comment` component.

By rendering the initial content on the server, the waterfall is reduced to just two steps, potentially resulting in faster initial page loads and improved perceived performance.

## Conclusion

The choice between server-side rendering (SSR) and client-side rendering (CSR) in React applications can significantly impact performance, particularly when considering the waterfall effect. SSR generally results in a shorter waterfall and faster initial page loads, while CSR may be easier to achieve, it can have a longer waterfall.
