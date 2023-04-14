---
title: Don’t use flags as function parameters
sidebar_position: 12
date: 2022-07-11
description: Flags tell you that a function does more than one thing. Functions should do only one thing.
category: Functions
slug: dont-use-flags-as-function-parameters
page_id: c8e95c7c-8008-4472-a2f5-812dc53eeb34
---



☑️ Topic: Functions


☑️ Idea: Flags tell you that a function does more than one thing. Functions should do only one thing.


☑️ Benefits: Readability, reusability, testability


☑️ Guideline: If you find different code paths in a function based on a Boolean parameter, create 2 functions instead.


```javascript
// BAD
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}


// GOOD
function createFile(name) {
  fs.create(name);
}
function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

