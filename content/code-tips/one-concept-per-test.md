---
title: One concept per test
sidebar_position: 25
date: 2022-10-27
description: The rule is really simple. The only thing you have to do is to choose a single concept to test in every unit test you write.
category: General
slug: one-concept-per-test
---

### Introduction

How do you define the scope of a unit test?

Here is the rule I follow and 3 of their benefits.

### The **“Test one concept per test” rule**

The rule is really simple. The only thing you have to do is to choose a single concept to test in every unit test you write.

Defining the scope of a unit test is not easy, that’s why I follow a rule. The rule solves the problem of not having to think about how to organize my tests. I only need to think about what to test.

The idea is similar to [Functions should do one thing](functions-should-do-one-thing) and it shares many of its benefits.

But there are also some benefits of this rule in particular…

### 3 Key benefits

Here are 3 key benefits:

1. They serve as a specification

   You can read the concept and understand what the code does.

1. They remain small and therefore maintainable

   One concept per test will help the test remain small. Small sections of code are easier to maintain.

1. They are readable and easy to understand

   By reading the concept in the test name you’ll easily understand what the code does.

### What about the “One assert per test” rule?

A lot of people follow the “One assert per test” rule instead.

However, this can feel too restrictive. It can also lead to a proliferation of unit tests that share many things in common.

> “A single assert per unit test is a great way to test the reader's ability to scroll up and down.” – Stack Overflow user

## Examples

### Bad: Many concepts per test

```javascript
// BAD
import assert from "assert"

describe("MomentJS", () => {
  it("handles date boundaries", () => {
    let date

    date = new MomentJS("1/1/2015")
    date.addDays(30)
    assert.equal("1/31/2015", date)

    date = new MomentJS("2/1/2016")
    date.addDays(28)
    assert.equal("02/29/2016", date)

    date = new MomentJS("2/1/2015")
    date.addDays(28)
    assert.equal("03/01/2015", date)
  })
})
```

### Good: One concept per test

```javascript
// GOOD
import assert from "assert"

describe("MomentJS", () => {
  it("handles 30-day months", () => {
    const date = new MomentJS("1/1/2015")
    date.addDays(30)
    assert.equal("1/31/2015", date)
  })

  it("handles leap year", () => {
    const date = new MomentJS("2/1/2016")
    date.addDays(28)
    assert.equal("02/29/2016", date)
  })

  it("handles non-leap year", () => {
    const date = new MomentJS("2/1/2015")
    date.addDays(28)
    assert.equal("03/01/2015", date)
  })
})
```

## Summary

Rule: Test one concept per test in unit tests

Benefits:

- Unit tests serve as a specification
- Unit tests are small and maintainable
- Unit tests are easier to understand
