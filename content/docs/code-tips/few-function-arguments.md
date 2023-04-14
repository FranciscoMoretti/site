---
title: Few Function Arguments
sidebar_position: 16
date: 2022-06-06
description: Fewer arguments make your function easier to test. They are also easier to handle.
category: Functions
slug: few-function-arguments
page_id: 01758e2f-1f8c-4c6a-8cd7-c17a2a6d959e
---



☑️ Topic: Functions


☑️ Idea: Fewer arguments make your function easier to test. They are also easier to handle.


☑️ Benefit: Testability.  Code is easier to read if there is no unnecessary information bloating it.  


☑️ Guideline: Zero arguments are the ideal case. One or two arguments are ok, and three should be avoided. Usually, if you have more than two arguments then your function is trying to do too much. In cases where it's not, most of the time a higher-level object will suffice as an argument.


☑️ JavaScript: To make it obvious what properties the function expects, you can use the ES2015/ES6 destructuring syntax.


```javascript
// BAD
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
createMenu("Foo", "Bar", "Baz", true);


// GOOD
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}
createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});
```





