---
title: Command Query Separation (CQS)
alias: Command Query Segregation, Command Query Responsibility Segregation (CQRS)

category: General
publish: true

slug: command-query-separation-cqs

summary: Methods should either be commands that perform actions or queries that return data to the caller, but not both.
draft: false
tags: ['Code Tips']
date: 2023-06-29
---

## Usage

### 📝 Guideline

**Command Query Separation**: Methods should either be commands that perform actions or queries that return data to the caller, but not both.

Methods should be designed to either change the state of an object or retrieve information from it, but not both at the same time. This separation ensures clarity and avoids unexpected side effects.

### 🛠️ How to Apply

- **Separate commands and queries**: Identify methods that change the state of the system and that retrieve data. Split them into separate functions or classes. 🔄
- **Avoid side effects in queries**: Ensure that query methods do not modify the state of the system. They should only retrieve and return data. 🔍
- **Use descriptive names**: Clearly indicate whether a method is a command or a query in its name. This helps other developers understand the purpose and behavior of the method. 📝
- **Consider immutability**: When designing query methods, favor immutability to avoid unintended side effects. Immutable data structures can be safely shared across multiple queries. 🚫

## Pros and Cons

### 👍 Pros

- **Improved Code Clarity**: Separating actions from queries leads to cleaner, more readable code, as it clarifies the intent and purpose of each method. ✨
- **Testability**: By separating commands and queries, it becomes easier to write unit tests that validate the behavior of each type of method independently. 🧪
- **Separation of concerns**: Promotes a clear separation between actions that change the system and operations that retrieve information, improving code organization and maintainability. ❇️

### 👎 Cons

- **Potential performance overhead**: Depending on the implementation, separating commands and queries may introduce additional overhead due to the need for separate method invocations. 🐌
- **Code Duplication**: Separating actions and queries may result in code duplication if similar logic is required for both. However, this can be handled with good abstractions and code reuse techniques. 🔁

## Examples

### ❌ Bad

```typescript
class Counter {
  private count: number

  public incrementAndReturn(): number {
    this.count++
    return this.count
  }
}
```

### ✅ Good

```typescript
class Counter {
  private count: number

  public increment(): void {
    this.count++
  }

  public getCount(): number {
    return this.count
  }
}
```

## References

### 🔀 Related principles

- [**Single Responsibility Principle**](/blog/single-responsibility-principle-srp): SRP emphasizes that a class or method should have only one reason to change, aligning with the idea of separating commands and queries. 🎯
- **Separation of Concerns**: By separating actions and queries, the Command Query Principle contributes to the broader concept of separating concerns in software development. 🔗
- **Immutability**: By favoring immutability in query methods, CQS aligns with the principle of designing objects and data structures that don't change their state after creation. 🧱
- **Law of Demeter**: The Command Query Principle aligns with the Law of Demeter by emphasizing the encapsulation of object behavior and avoiding unnecessary coupling between objects. 🧩
