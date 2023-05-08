---
tag: Next.js, Youtube
alias:

publish: true
slug: use-a-lite-youtube-embedded-player-in-nextjs

title: Use a Lite YouTube Embedded Player in Next.js
description: How to integrate a lite YouTube Player in a Next.js application for performance improvements.
date: 2021-10-24
image:
---

## Using a Youtube Embedded Player in a Next.js application

I needed a way to play videos locally in a page where I post notes I take from conference talks.

The screenshot shows a video player at the top of a post page.

![Lite YouTube embedded player](/assets/docs/1900254244.png)

## Method 1: IFrame Player

The first approach I took was to use the `<iframe>` HTML tag as suggested by [YouTube’s developer guide](https://developers.google.com/youtube/iframe_api_reference).

The code to use that first method is something like this.

```javascript
<iframe
  src={"https://www.youtube.com/embed/" + video_id}
  title={video_title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

You should find the `video_id` of the video you want to embed. The `video_title` can be anything you want, but I used the title from the video. There are many other options like linking playlists. If you want to learn more about it, check the [Supported Parameters reference](https://developers.google.com/youtube/player_parameters).

If you want the component to behave responsively, you should fix its aspect ratio. Becaise my application was using [tailwindcss](https://tailwindcss.com/), an elegant solution I’ve found for it was to use the [tailwindcss-aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio) plugin. You can wrap the IFrame in a div like this one.

```javascript
<div className=" w-full aspect-w-16 aspect-h-9">
```

### Performance with `iframe`

The main disadvantage from this method is that it caused a decrease of performance. A [Lighthouse](https://developers.google.com/web/tools/lighthouse) report showed the following problem. &gt; some third-party resources can be lazy loaded with a facade

I also saw a small delay to load the player when I opened the webpage in my PC.

Here is an image from the report with more details from the issue.

![IFrame embedded player](/assets/docs/680068699.png)

This method is still useful if you don’t mind the small degradation in performance. Also, there are many ways to lazy load it which can solve this issue.

## Method 2: The `react-lite-youtube-embed` package

After trying a few alternatives I’ve found the [**react-lite-youtube-embed**](https://www.npmjs.com/package/react-lite-youtube-embed) package which was everything I needed.

This package is a React component created from [lite-youTube-embed](https://www.npmjs.com/package/lite-youtube-embed), a more popular package that has a general web solution to the problem.

This package is really easy to use.

Firstly, you need to install it

```text
yarn add react-lite-youtube-embed
```

or

```text
npm install react-lite-youtube-embed -S
```

Secondly, import the packages

```javascript
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
```

Finally, use the `LiteYouTubeEmbed` component. This component also has the option to set the aspect ratio in it, which is extremely useful.

```html
<LiteYouTubeEmbed
  aspectHeight="{9}"
  aspectWidth="{16}"
  id="{video_id}"
  title="{video_title}"
/>
```

It also has some privacy settings enabled by default, it will try to reach `youtube-nocookie.com`. Those might conflict with your Next.js config ContentSecurityPolicy. You might need to add it the permission to reach that page to the rules.

### Performance with `react-lite-youtube-embed`

The Lighthouse report with the `LiteYouTubeEmbed` component had a sweet 7% increase in performance.

![Lite YouTube Embed player](/assets/docs/1416473031.png)

## Conclusion

Both methods are great and simple to use. The performance is comparable for both methods. The loading speed is shorter for the second one, but you need to add a package to your project.
