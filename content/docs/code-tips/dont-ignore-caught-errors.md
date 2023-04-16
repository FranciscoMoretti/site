---
title: Don't ignore caught errors
sidebar_position: 26
date: 2022-11-10
description: Thrown errors are a good thing and you can do something about them. The rule is “ Don't ignore caught errors”
category: General
slug: dont-ignore-caught-errors
page_id: 245d1c9d-9965-431c-87b3-35599cd78941
---



## Errors are inevitable


Everyone tries to create apps that are free of bugs, but errors happen anyway.


Thrown errors are a good thing and you can do something about them.


The rule is “**Don't ignore caught errors”**


## Thrown errors are a good thing


Thrown errors are good? Yes. If you don’t ignore them.


Thrown errors mean the execution of the program has identified something going wrong. The program is letting you know about it. Then 3 things happen.

- It stops the execution on the current stack.
- It kills the process (in node)
- It notifies you in the console with a stack trace.

An error is an opportunity to fix a problem or to react to it.


## What to do when you catch an error?


Just logging the error is not much better than ignoring the error. If the error is logged with other messages then it can get lost.


When you put your error-throwing code in a `try/catch` block you should do something about it.


Here are some useful things that you can do in the catch block

- Log it in the console as an error. `console.error` writes an error message to the console using a special format that makes it stand out.
- Create a code path to handle the error gracefully. This can include letting the user know about it. Or it can be using a different more stable solution to continue with the program.
- Report it to a service. By doing this you’ll have the information about the error. You’ll also have information about how often each error happens. Knowing how often bugs happen is important to understand how critical they are. E.g. you can work on bugs that affect the most users.

## Summary


Rule: **Don't ignore caught errors**


How:

1. Log it in the console as an error
1. Creating a code path to handle the error gracefully
1. Reporting it to a service

What do you think of thrown errors and `try/catch` blocks?


## Example


### Bad


```javascript
// Bad

try {
  functionThatMightThrow();
} catch (error) {
  console.log(error);
}
```


### Good


```javascript
// Good

try {
  functionThatMightThrow();
} catch (error) {
  // One option (more noisy than console.log):
  console.error(error);
  // Another option:
  notifyUserOfError(error);
  // Another option:
  reportErrorToService(error);
  // OR do all three!
}
```

