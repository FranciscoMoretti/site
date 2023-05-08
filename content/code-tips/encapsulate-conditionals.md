---
title: Encapsulate conditionals
sidebar_position: 21
date: 2022-07-18
description: Encapsulate the expressions used in conditionals and use the new function name to indicate their intent. Boolean logic is easier to understand if it’s read in isolation.
category: General
slug: encapsulate-conditionals
---

☑️ Topic: Functions

☑️ Idea: Encapsulate the expressions used in conditionals and use the new function name to indicate their intent. Boolean logic is easier to understand if it’s read in isolation.

☑️ Benefits: Readability, refactorability.

☑️ Guideline: If the expression of a conditional has multiple terms consider creating a function with them.

```javascript
// BAD
if (fsm.state === "fetching" && isEmpty(listNode)) {
  // ...
}

// GOOD
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === "fetching" && isEmpty(listNode)
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```

The responsibility of the encapsulated condicional Is to determine the condit [Functions should do one thing](functions-should-do-one-thing)
