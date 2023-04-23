---
title: Remove dead code
sidebar_position: 20
date: 2022-07-25
description: Delete code that isn’t executed. It will still be in your git history if you need it.
category: General
slug: remove-dead-code
page_id: 2db7d892-c1cd-49b1-ba9f-af869483a510
---

☑️ Topic: General

☑️ Idea: Delete code that isn’t executed. It will still be in your git history if you need it.

☑️ Benefits: Maintainability

☑️ Guideline: If you find conditions that are never true, the code after those conditions is dead code.

```javascript
// BAD
function oldRequestModule(url) {
  // ...
}
function newRequestModule(url) {
  // ...
}

// GOOD
function newRequestModule(url) {
  // ...
}
```
