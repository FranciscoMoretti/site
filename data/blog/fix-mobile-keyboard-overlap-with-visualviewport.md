---
tags: ['CSS', 'HTML', 'UI']

draft: false

title: Fix mobile keyboard overlap with dvh (no observers)
summary: Prevent the on‑screen keyboard from covering bottom inputs using dynamic viewport height. Just use h-dvh; no VisualViewport observers or CSS vars needed.
date: 2025-08-24
---

> **Edited 2025-08-26**: The previous version recommended syncing `visualViewport.height` to a CSS variable with an observer. That was wrong for this use case. The actual fix in Sparka is to rely on dynamic viewport units (`dvh`). Drop the observer and use Tailwind’s `h-dvh`. See the discussion: [https://github.com/FranciscoMoretti/sparka/issues/14](https://github.com/FranciscoMoretti/sparka/issues/14)

## Introduction

Bottom‑pinned chat inputs can get buried when the mobile keyboard opens. Modern browsers expose dynamic viewport units that account for the on‑screen keyboard. Use `dvh` and keep the layout simple.

This is used in [Sparka.ai](https://sparka.ai), you can check the code [here](https://github.com/FranciscoMoretti/sparka).

![Update height with mobile virtual keyboard](/assets/mobile-resize-virtual-keyboard.png)

## The fix

- **Use `h-dvh`** (Tailwind) for any full‑height containers.
- No observers, no CSS variables, no JS.

```tsx
// components/chat.tsx (snippet)
<div className="flex h-dvh min-w-0 flex-col">{/* content */}</div>
```

If you need a single element to fill the screen:

```tsx
<div className="h-dvh" />
```

## Notes

- `dvh` reflects the visible viewport height, adjusting when the keyboard shows.
- Works on iOS Safari and Android (recent versions). If you must support very old iOS, feature‑test and fall back to `100vh`.

## Viewport meta

If you also want Android/Chromium to resize content with the keyboard, set `interactiveWidget: 'resizes-content'`. This is additive to using `dvh`.

```tsx
// app/layout.tsx (snippet)
export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
  interactiveWidget: 'resizes-content' as const,
}
```

Details: [https://developer.chrome.com/docs/web-platform/viewport-meta/#interactive-widget](https://developer.chrome.com/docs/web-platform/viewport-meta/#interactive-widget)

## In the wild

This is what Sparka.ai ships. For context, see the issue: [https://github.com/FranciscoMoretti/sparka/issues/14](https://github.com/FranciscoMoretti/sparka/issues/14)
