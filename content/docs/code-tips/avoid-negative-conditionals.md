---
title: Avoid Negative Conditionals
sidebar_position: 19
date: 2022-08-01
description: Negatives are harder to understand. Conditional functions should be expressed as positives every time.
category: General
slug: avoid-negative-conditionals
page_id: 9e94fd4a-3fba-4c8e-a92f-9e049f46c070
---



☑️ Topic: Functions


☑️ Idea: Negatives are harder to understand. Conditional functions should be expressed as positives every time.


☑️ Benefits: Readability


☑️ Guideline: Function names should not have “not” in their name. Use the “not” Boolean operator with the function call instead.


```javascript
// BAD
function isDOMNodeNotPresent(node) {
  // ...
}
if (!isDOMNodeNotPresent(node)) {
  // ...
}

// GOOD
function isDOMNodePresent(node) {
  // ...
}
if (isDOMNodePresent(node)) {
  // ...
}
```

