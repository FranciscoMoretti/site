---
tag: Next.js, TailwindCSS, UI
alias:

publish: true
slug: how-to-animate-on-scroll-with-react-intersection-observer-and-tailwind-in-a-nextjs-app

title: React Intersection Observer With Tailwind and Next.js
description: Learn how to create scroll animations in your Next.js app using React Intersection Observer and Tailwind CSS. Follow our step-by-step guide with code examples.
date: 2023-01-25
image:
---

## React Intersection observer for animate on scroll behavior

To add a cool animation that is triggered when you scroll up to a component, you can use the [**Intersection Observer API**](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

For React, there is a package called [**react-intersection-observer**](https://github.com/thebuilder/react-intersection-observer) that implements the Intersection Observer API. This package can be used to indicate when a component enters or leaves the viewport, and offers several options for configuring the component, which are [**listed on the documentation**](https://www.npmjs.com/package/react-intersection-observer).

There are a lot of options, [listed on the documentation](https://www.npmjs.com/package/react-intersection-observer), to configure the React Intersection Observer component.

These are the ones I’ve found the most useful:

- **`threshold = {1}`** **animate when the component comes into view completely**
- **`triggerOnce`** **only trigger the animation once**

## React Intersection observer with tailwindCSS

To style the website, I used the popular CSS framework, TailwindCSS. For animations, I chose a package that complements the rest of my style system, [**tailwindcss-animate**](https://github.com/jamiebuilds/tailwindcss-animate), which is a Tailwind plugin that provides basic animations as Tailwind classes. This allows animations to be added to components using the **`className`** property.

To apply the animation classes when the component comes into view, I’ve used the `inView` argument.

This is what the code looks like so far

```typescript
<InView triggerOnce threshold={1}>
  {({ inView, ref, entry }) => (
    <div ref={ref} className={inView ? classNameInView : classNameNotInView}>
      {children}
    </div>
  )}
</InView>
```

## Intersection observer for Next.js app directory

To ensure compliance with Next.js app directory guidelines, I had to work a bit. The Intersection Observer code needs to be in a **`client component`** because it uses the client's viewport state. The Next.js app directory philosophy is that everything that can be in a server component, should be in a `server component`. However, we can pass a server component to a child component as a children.

## Result

Here's the final code for animation on scroll in Next.js app directory:

```typescript
"use client"

import { InView } from "react-intersection-observer"

export default function AnimationOnScroll({
  children,
  classNameInView,
  classNameNotInView,
}: {
  children: React.ReactNode
  classNameInView: string
  classNameNotInView: string
}) {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={inView ? classNameInView : classNameNotInView}
        >
          {children}
        </div>
      )}
    </InView>
  )
}
```

This will give you a great animation effect that is triggered when the component comes into view, using React Intersection Observer and Tailwind in a Next.js app directory.
