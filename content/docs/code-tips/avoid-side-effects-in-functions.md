---
title: Avoid side effects in functions
sidebar_position: 5
date: 2023-01-09
description: A side effect is when a function does something besides just taking some values and returning other values. Side effects can be hard to test and debug, and they can cause unexpected behavior. But there's an easy way to avoid them write "pure" functions.

category: Functions
slug: avoid-side-effects-in-functions
page_id: c00f27b0-f905-4c24-96ff-7fd745ab3384
---



## Introduction to side effects


Ever had your code done something super weird and unexpected? It could be because of side effects! 


Let's learn how to avoid them and keep our code clean.

Sometimes the code does something really strange that we didn't expect. It could be because our functions have side effects.



### What's a side effect?


It's when a function does something besides just taking some values and returning other values.


A side effect could be writing to a file, changing a global variable, or sending all your money to a stranger (yikes!).



## Write pure functions to avoid side effects


Side effects can be hard to test and debug, and they can cause unexpected behavior. But there's an easy way to avoid them: write "pure" functions.



Pure functions are functions that don't have side effects. They just take some values and return other values. These types of functions are much easier to test and debug, and they make our code more predictable and reliable.


### How to write pure functions


So, how do we write pure functions? Here are some tips:

- Use local variables instead of global variables
- Don't change objects that are passed as arguments
- Don't call external functions or APIs that have side effects

## When side effects are needed, keep them in one place


But sometimes, we do need to use side effects in our code. Like when we need to write a file. So what do we do?

We centralize our side effects! Instead of having lots of different functions and classes that write to the same file, we have one class that does all the file writing. This way, we have just one place to control everything, and it's easier to keep track of what's happening in our code.

By keeping our side effects in one place, we can keep our code clean and organized.


## Example


### Bad 


```javascript
// BAD
let name = "Francisco Moretti";

function splitIntoFirstAndLastName() {
  name = name.split(" "); // Uses a global variable
}

splitIntoFirstAndLastName();

console.log(name); // ['Francisco', 'Moretti'];
```


### Good


```javascript
// GOOD
function splitIntoFirstAndLastName(name) {
  return name.split(" ");
}

const name = "Francisco Moretti";
const newName = splitIntoFirstAndLastName(name);

console.log(newName); // ['Francisco', 'Moretti'];
```


## Summary


In short, pure functions are easier to test and debug, and centralizing side effects makes our code more organized.


Do you have any other tips for managing side effects in your code? Let's talk about it in the comments!

