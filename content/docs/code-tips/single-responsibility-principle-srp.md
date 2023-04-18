---
title: Single Responsibility Principle (SRP)
sidebar_position: 12
date: 2022-09-06
description: Each class should have a single responsibility. That means that there should be only one reason to change it. This is one of the SOLID principles.
category: SOLID
slug: single-responsibility-principle-srp
page_id: 36fcf141-1cd9-48ab-8a71-907a5be39c23
---

## The SOLID Principles

SOLID is an acronym for five other class-design principles:

- [Single Responsibility Principle (SRP)](/docs/code-tips/single-responsibility-principle-srp)
- [Open-Closed Principle (OCP)](/docs/code-tips/open-closed-principle-ocp)
- [Liskov Substitution Principle (LSP)](/docs/code-tips/liskov-substitution-principle-lsp)
- [Interface Segregation Principle (ISP)](/docs/code-tips/interface-segregation-principle-isp)
- [Dependency Inversion Principle (DIP)](/docs/code-tips/dependency-inversion-principle-dip)

## The Single Responsibility Principle (SRP)

☑️ Topic: Objects and Data Structures

☑️ Idea: Each class should have a single responsibility. That means that there should be only one reason to change it. This is one of the SOLID principles.

☑️ Benefits: Maintainability, Reusability

☑️ Guideline: If you can’t say what the class does without using “and”, “or” , or “if” it’s likely doing more than one thing.

### Benefits Explained

- Maintainability: A small class is easy to maintain. Having a single responsibility per class results in small classes.
- Classes are easier to understand: The smaller the class the fastest one can go through it and understand it.
- Naming classes: Naming is hard, right? Well if you only have one responsibility you can represent it in the class name. Having more than one responsibility makes it much harder to find a name that represents everything.

## Example

### BAD

```javascript
// BAD
class UserSettings {
  constructor(user) {
    this.user = user
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}
```

### GOOD

```javascript
// GOOD
class UserAuth {
  constructor(user) {
    this.user = user
  }

  verifyCredentials() {
    // ...
  }
}

class UserSettings {
  constructor(user) {
    this.user = user
    this.auth = new UserAuth(user)
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}
```
