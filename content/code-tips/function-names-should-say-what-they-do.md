---
title: Function names should say what they do
sidebar_position: 7
date: 2022-07-04
description: Say what the function does with its name. The name should tell you what it expects as inputs as well.
category: Functions
slug: function-names-should-say-what-they-do
---

☑️ Topic: Functions

☑️ Idea: Say what the function does with its name. The name should tell you what it expects as inputs as well.

☑️ Benefits: Readability

☑️ Guideline: You should know what a function does by reading its name.

```javascript
// BAD
function addToDate(date, month) {
  // ...
}
const date = new Date()
// It's hard to tell from the function name what is added
addToDate(date, 1)

// GOOD
function addMonthToDate(month, date) {
  // ...
}
const date = new Date()
addMonthToDate(1, date)
```
