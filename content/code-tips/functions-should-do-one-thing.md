---
title: Functions should do one thing
sidebar_position: 8
date: 2022-06-13
description: Create a function for each action or concept. Functions should do one and only one thing.
category: Functions
slug: functions-should-do-one-thing
---

☑️ Topic: Functions

☑️ Idea: Create a function for each action or concept. Functions should do one and only one thing.

☑️ Benefits: Readability, reusability, testability, refactorability.

☑️ Guideline: In the function description you shouldn’t need to use “and”, “or” or “if”.

```javascript
// BAD
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client)
    if (clientRecord.isActive()) {
      email(client)
    }
  })
}

// GOOD
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email)
}
function isActiveClient(client) {
  const clientRecord = database.lookup(client)
  return clientRecord.isActive()
}
```
