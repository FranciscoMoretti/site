---
title: Prefer ES6 classes over ES5 functions
sidebar_position: 17
date: 2022-08-15
description: ES6 is better than ES5 for readable class inheritance, construction and methods.
category: JavaScript
slug: prefer-es6-classes-over-es5-functions
page_id: 3aa15971-1d0f-49ee-a0e7-047c7b5b4796
---

☑️ Topic: Classes

☑️ Idea: ES6 is better than ES5 for readable class inheritance, construction and methods.

☑️ Benefits: Readability, Maintainability.

☑️ Guideline: Use small functions when you need something simple and use ES6 classes when you need larger and more complex objects.

```javascript
// BAD
const Animal = function (age) {
  if (!(this instanceof Animal)) {
    throw new Error("Instantiate Animal with `new`")
  }
  this.age = age
}
Animal.prototype.move = function move() {}

// GOOD
class Animal {
  constructor(age) {
    this.age = age
  }
  move() {
    /* ... */
  }
}
```
