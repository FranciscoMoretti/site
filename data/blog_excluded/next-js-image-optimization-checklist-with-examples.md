---
tags: ['Next.js', 'TailwindCSS', 'Performance']

draft: false

title: Next.js Image Optimization Checklist With Examples
summary: Learn how to optimize images in Next.js for better performance and user experience. Follow this checklist to handle images efficiently in your Next.js projects.
date: 2023-06-20
images: ['/thumbnails/next-js-image-optimization-checklist-with-examples.png']
---

## Introduction

Images play a crucial role in web development, but they can also significantly impact a website's performance. To address this issue, Next.js provides the Image component, which offers automatic image optimization and various features for optimizing image loading and rendering. In this tutorial, we will explore a checklist for optimizing images in Next.js and provide code examples for each optimization step.

## 1. Local Images are imported

To use a local image, import your `.jpg`, `.png`, or `.webp` image files. Next.js will automatically determine the width and height of your image based on the imported file. These values are used to prevent Cumulative Layout Shift while your image is loading.

```tsx
import Image from 'next/image'
import profilePic from '../public/me.png'

export default function Page() {
  return <Image src={profilePic} alt="Picture of the author" />
}
```

## 2. Remote Images have width and height

When using a remote image, you need to provide the width and height attributes manually. These attributes are used to infer the correct aspect ratio of the image and avoid layout shifts during image loading.

```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
```

## 3. Remote image URLs are in next.config

To safely allow image optimization for remote images, define a list of supported URL patterns in the `next.config.js` file. Be as specific as possible to prevent malicious usage.

```javascript
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
}
```

## 4. Largest Contentful Paint Images have priority

To improve the Largest Contentful Paint (LCP) performance, add the `priority` property to the image that will be the LCP element for each page. This allows Next.js to prioritize the loading of the image, resulting in a meaningful boost in LCP.

```tsx
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image src="/me.png" alt="Picture of the author" width={500} height={500} priority />
      <p>Welcome to my homepage!</p>
    </>
  )
}
```

## 5. Images are sized correctly

To prevent image-based layout shifts and ensure good performance, it's crucial to size your images correctly. The Next.js Image component provides three ways to size images using the `next/image` component:

1. Automatic sizing with a static import:
   When importing local images using a static import, Next.js automatically determines the width and height based on the imported file. This ensures that the browser reserves enough space for the image before it loads, preventing layout shifts.

```tsx
import Image from 'next/image'
import profilePic from '../public/me.png'

export default function Page() {
  return <Image src={profilePic} alt="Picture of the author" />
}
```

2. Explicit sizing with `width` and `height` properties:
   For remote images or when you know the dimensions in advance, you can explicitly provide the `width` and `height` attributes to the `next/image` component. This allows the browser to allocate the appropriate space for the image.

```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="https://example.com/image.jpg"
      alt="Description of the image"
      width={600}
      height={400}
    />
  )
}
```

3. Implicit sizing with the `fill` property:
   If you don't know the size of your images or want them to fill their parent container, you can use the `fill` property. The `fill` property allows the image to expand and fill its parent element. Ensure that the parent element has a determined space on the page.

```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <div className="image-container">
      <Image src="/image.jpg" alt="Description of the image" layout="fill" />
    </div>
  )
}
```

## 6. Styling uses className or style

When it comes to styling the Next.js Image component, it's important to follow the recommended guidelines. Here's how you should approach styling:

### Using className (recommended)

Use the `className` prop for styling. It allows you to apply styles using CSS Modules, global stylesheets, or any other preferred styling method. This ensures better maintainability and separation of concerns. It also works perfectly with TailwindCSS.

```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <div className="image-container">
      <Image
        src="/image.jpg"
        alt="Description of the image"
        width={600}
        height={400}
        className="custom-image"
      />
    </div>
  )
}
```

### Using style

Alternatively, you can use the `style` prop to assign inline styles to the image. This is useful for applying specific styles that are not defined in external stylesheets.

```tsx
import Image from 'next/image'

export default function Page() {
  const imageStyles = {
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  }

  return (
    <div>
      <Image
        src="/image.jpg"
        alt="Description of the image"
        width={200}
        height={200}
        style={imageStyles}
      />
    </div>
  )
}
```

Please note that using the `styled-jsx` library is not recommended for styling the Next.js Image component. The `styled-jsx` styles are scoped to the current component by default unless marked as global. Therefore, it's preferable to use the `className` or `style` prop for styling purposes.

## 7. Parent of images with fill have position relative and display block

If you're using the `fill` property with the Next.js Image component, it's crucial to ensure that the parent element of the image has the correct CSS properties. This ensures that the image fills its parent container appropriately. Here's what you need to do:

### Defining a class

1. Set the parent element's `position` property to `relative`. This establishes a positioning context for the image and allows it to fill the parent container correctly.
2. Set the parent element's `display` property to `block`. This ensures that the parent container takes up the entire width of its parent and allows the image to fill the available space.

```css
.image-container {
  position: relative;
  display: block;
}
```

```typescript
<div className="image-container">
  <Image
    src="/image.jpg"
    alt="Description of the image"
    width={600}
    height={400}
	fill
  />
</div>

```

### Using TailwindCSS

1. Apply the `relative` and `block` utility classes to the parent container. The `relative` class establishes a positioning context, while the `block` class ensures the parent container takes up the full width of its parent.

```tsx
<div className="relative block">
  <Image src="/image.jpg" alt="Description of the image" width={600} height={400} fill />
</div>
```

## Conclusion

Optimizing images is crucial for improving website performance and providing a smooth user experience. In this tutorial, we explored a checklist for optimizing images in Next.js By following these steps and utilizing the powerful features of the Next.js Image component, you can ensure that your website's images are optimized for performance. Happy coding! 🚀

## Resources

- [Image Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Image API reference](https://nextjs.org/docs/app/api-reference/components/image)
- [Live demo with examples](https://image-component.nextjs.gallery/)
