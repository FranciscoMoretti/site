---
title: Avoid Mental Mapping
sidebar_position: 1
date: 2022-05-23
description: Use explicit names for variables instead of using an alias. A single-letter name is just a placeholder for the reader to map into the actual concept and this is a problem.
category: Variables
slug: avoid-mental-mapping
---

☑️ Topic: Variables

☑️ Idea: Use explicit names for variables instead of using an alias. A single-letter name is just a placeholder for the reader to map into the actual concept and this is a problem.

☑️ Benefit: Readability. Readers don’t need to translate your name into other names they already know.

☑️ Guideline: Explicit is better than implicit. If you can’t read the code like a sentence, you should rename the variables that are off.

```javascript
// BAD
const locations = ["Austin", "New York", "San Francisco"]
locations.forEach((l) => {
  doStuff()
  // Wait, what is `l` for again?
  dispatch(l)
})

// GOOD
const locations = ["Austin", "New York", "San Francisco"]
locations.forEach((location) => {
  doStuff()
  dispatch(location)
})
```
