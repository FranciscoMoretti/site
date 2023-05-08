---
title: Don’t Over Optimize
sidebar_position: 18
date: 2022-08-08
description: Trying to optimize your code is a waste of time in some cases. Modern browsers do a lot of optimizations at runtime.
category: General
slug: dont-over-optimize
---

☑️ Topic: Functions

☑️ Idea: Trying to optimize your code is a waste of time in some cases. Modern browsers do a lot of optimizations at runtime.

☑️ Benefits: Maintainability, Development speed.

☑️ Guideline: If you need better performance, use tools to find pieces of code that need optimization. Don’t try to guess.

```javascript
// BAD
// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}

// GOOD
for (let i = 0; i < list.length; i++) {
  // ...
}
```

```

```
