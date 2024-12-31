---
tags: ["Next.js", "React"]


draft: false


title: Next.js Suspense - How to Use Suspense with a Component
summary: Learn how to use Next.js Suspense and make your app more responsive. Explore the process of setting up and using Suspense with an async component in Next.js.
date: 2023-06-30
images: ["/thumbnails/next-js-suspense-how-to-use-suspense-with-a-component.png"]

---

## Introduction
Do you want to optimize the performance of your Next.js application? Want to make your app more responsive and user-friendly? We'll look at Next.js Suspense feature. This tutorial shows how to combine the `Suspense` mechanism for react combined with Next.js server component🚀

## Next.js Suspense - Improving Performance with Async Components

Next.js Suspense provides a powerful mechanism for improving the performance of your Next.js application. By using Suspense with an async component, you can delay the rendering of certain parts of your application until the necessary data is fetched. And you can show a fallback UI until the component is fully loaded. This ensures a faster initial page load and a better user experience overall.

To demonstrate the usage of Suspense with an async component, here is an example that uses a ViewCounter component that fetches the number of views for a specific blog post.

```typescript
import { Suspense } from "react"

import { getPostViews } from "@/app/(marketing)/actions"

export function PostViews({ slug }: { slug: string }) {
  return (
    <span title="views">
      <Suspense fallback={<>{"..."}</>}>
        <ViewCount slug={slug} />
      </Suspense>{" "}
      views
    </span>
  )
}

export async function ViewCount({ slug }: { slug: string }) {
  const count = await getPostViews({ slug })
  return <>{count != null ? count : "-"}</>
}
```

In the above code snippet, we define a `PostViews` component that renders the number of views for a given blog post `slug`. The `ViewCount` component is an async component that fetches the actual view count using the `getPostViews` function. The `Suspense` component wraps the `ViewCount` component and provides a fallback UI to display while the data is being fetched.

### TypeScript and React Compatibility

Using async components with TypeScript in Next.js is now fully supported. Make sure you are using TypeScript `5.1.3` or a higher version and `@types/react` `18.2.8` or above. If you need to upgrade these versions, ensure to clear the `node_modules` directory for the changes to take effect. Additionally, if you are using VS Code, a restart may be required.

If you are in a verison that doesn't support this, the code snippet in this post would show something like this:
```bash
'ViewCount' cannot be used as a JSX component.
  Its return type 'Promise<Element>' is not a valid JSX element.
    Type 'Promise<Element>' is missing the following properties from type 'ReactElement<any, any>': type, props, key `ts(2786)`
```

This [GitHub issue](https://github.com/vercel/next.js/issues/42292 ) has more details about it.


## Conclusion
By incorporating Next.js Suspense with async components, you can significantly improve the performance and responsiveness of your Next.js application. In this tutorial, we explored the concept of Suspense and how to utilize it with a component. We also discussed the TypeScript compatibility requirements for using async components in Next.js. Embrace the power of Suspense to deliver faster and more engaging web experiences to your users. Happy coding! 😄
