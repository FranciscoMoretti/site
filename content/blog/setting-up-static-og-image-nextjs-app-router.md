---
tag: Next.js, SEO
alias:

publish: true
slug: setting-up-static-og-image-nextjs-app-router

title: Setting up a static OG Image in Next.js with App Router
description: Learn how to set up a static Open Graph (OG) image for Next.js using the App Router. Improve your site's appearance when shared on social networks.
date: 2023-07-09
image: /thumbnails/setting-up-static-og-image-nextjs-app-router.png
thumbnail:
  - Static
  - OG Image
  - Next.js
---

## Why do you need a static OG image?

When users share a link to your site on social networks or messaging apps, they expect to see a visually appealing preview. This preview usually includes a title, description, and an image. The OG image is the image specifically used for Open Graph protocol, which controls how the link appears on platforms like Facebook, Twitter, and LinkedIn.

Including a static OG image ensures that your site looks professional when shared, increasing the probability of user engagement and click-throughs.

## Generating static OG images with Next.js

Next.js provides two methods for setting Open Graph and Twitter images: using image files or generating images with code. Let's explore the image file approach.

To set a route segment's shared image, follow these steps:

1. Create an image file: 
   - For Open Graph, use the `opengraph-image.(jpg|jpeg|png|gif)` convention.
   - For Twitter, use the `twitter-image.(jpg|jpeg|png|gif)` convention. IIf this file is not provided, `opengraph-image`  will be re-used for twitter.
   
   You can choose the file type that suits your needs. For example, let's create an `opengraph-image.png` and a `twitter-image.png`.

2. Place the image file in the respective route segment.

Next.js will automatically detect the image files and add the necessary tags to your app's `<head>` element.

Here's an example of the `<head>` output for the Open Graph image:

```html
<meta property="og:image" content="<generated>" />
<meta property="og:image:type" content="<generated>" />
<meta property="og:image:width" content="<generated>" />
<meta property="og:image:height" content="<generated>" />
```

And here's an example for the Twitter image:

```html
<meta name="twitter:image" content="<generated>" />
<meta name="twitter:image:type" content="<generated>" />
<meta name="twitter:image:width" content="<generated>" />
<meta name="twitter:image:height" content="<generated>" />
```

Here is an example of a `png` image of `1200x630` pixels, which is the recommended size.

![Static OG Image Example](assets/Static%20OG%20Image%20Example.png)

## Alternative text for OG and Twitter images

Adding alternative text (alt text) to your images is crucial for accessibility. Next.js provides a way to include alt text for your OG and Twitter images.

To add alt text, create a text file with the following convention:

- For the Open Graph image, use `opengraph-image.alt.txt`.
- For the Twitter image, use `twitter-image.alt.txt`.

Place the text file in the same route segment as the respective image.

Here's an example of the `opengraph-image.alt.txt` file content:

```txt
Happy Coding
```
And here's an example of the `twitter-image.alt.txt` file content:

```txt
Happy Coding
```

The alt text will be included in the `<head>` output for both the Open Graph and Twitter images:

```html
<meta property="og:image:alt" content="Happy Coding" />
```


## File Tree View

Here's an example of how the file structure for the OG and Twitter images might look:

```txt
├── app
│   ├── page.tsx
│   ├── ...
│   ├── opengraph-image.png
│   ├── twitter-image.png
│   ├── opengraph-image.alt.txt
│   ├── twitter-image.alt.txt
│   └── ...
└── ...
```

Make sure to place the image files (`opengraph-image.png` and `twitter-image.png`) inside the `app` directory. The alt text files (`opengraph-image.alt.txt` and `twitter-image.alt.txt`) should be in the `app` directory as well.

To control what image to deliver with more granularity for each page, you can create files like these in other route segments.

## Conclusion

Setting up a static OG image for your Next.js app using the app router is an effective way to enhance the visual appeal of your shared links. By following the steps outlined in this tutorial, you can easily ensure that your site looks professional and engaging when shared. Remember to also include alt text for accessibility purposes.

For additional information, consult the [official documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image).

Start incorporating static OG images into your Next.js projects today and make a lasting impression on your audience! 🚀📸