---
title: Single Responsibility Principle (SRP)
sidebar_position: 12
date: 2023-05-31
description: Each class should have a single responsibility. That means that there should be only one reason to change it. This is one of the SOLID principles.
category: SOLID
slug: single-responsibility-principle-srp
---

## Usage

### 📝 Guideline

**Single Responsibility Principle**: Each class should have a single responsibility.

A class should be designed in such a way that it has only one reason to change. It should have a well-defined and focused responsibility, making it easier to understand, maintain, and modify.

### 🛠️ How to Apply

- **Identify clear responsibilities**: Define specific tasks and responsibilities for each class. Use meaningful names that reflect their purpose. 🎯
- **Separate concerns**: Avoid mixing unrelated functionalities within a single class. Delegate tasks to other classes to maintain a focused and modular codebase. 🧩
- **Refactor when necessary**: If a class grows too large or takes on multiple responsibilities, consider splitting it into smaller, more specialized classes. ♻️

## Pros and Cons

### 👍 Pros
- **Improved readability**: Classes with single responsibilities are easier to understand, as they focus on a specific task or behavior. 👀
- **Enhanced maintainability**: When a class has a single responsibility, modifications and updates become simpler and less error-prone. 🛠️
- **Enhanced reusability**: Well-defined responsibilities allow for greater code reuse by promoting modular design and efficient development. 🔁

### 👎 Cons

- **Increased complexity**: Dividing code into multiple classes can introduce additional complexity, requiring careful coordination and communication between them. 🧩
- **Potential performance impact**: Separating responsibilities may result in additional function calls or inter-class communication, potentially affecting runtime performance. ⏱️
- **Higher development effort**: Applying the Single Responsibility Principle may require additional upfront effort to analyze and refactor the codebase. ⏰

## Examples

### ❌ Bad

```typescript
// Bad: A class with multiple responsibilities

class UserManager {
  constructor() {
    // ...
  }

  getUser(id) {
    // Retrieves user data from the database
  }

  updateUser(id, data) {
    // Updates user data in the database
  }

  sendEmail(user, message) {
    // Sends an email to the user
  }
}
```

### ✅ Good

```typescript
// Good: Separating responsibilities into distinct classes

class UserDatabase {
  constructor() {
    // ...
  }

  getUser(id) {
    // Retrieves user data from the database
  }

  updateUser(id, data) {
    // Updates user data in the database
  }
}

class EmailService {
  constructor() {
    // ...
  }

  sendEmail(user, message) {
    // Sends an email to the user
  }
}
```

## References

### 🧱 SOLID Principles

SOLID is an acronym for five other class-design principles:

- [Single Responsibility Principle (SRP)](single-responsibility-principle-srp)
- [Open-Closed Principle (OCP)](open-closed-principle-ocp)
- [Liskov Substitution Principle (LSP)](liskov-substitution-principle-lsp)
- [Interface Segregation Principle (ISP)](interface-segregation-principle-isp)
- [Dependency Inversion Principle (DIP)](dependency-inversion-principle-dip)

### 🔀 Related principles

- **Open/Closed Principle**: Complements the Single Responsibility Principle by promoting the separation of concerns and facilitating future modifications. 🔒
- **Liskov Substitution Principle**: Aligns with the Single Responsibility Principle by emphasizing the need for well-defined and consistent behavior. ↔️
- **Interface Segregation Principle**: Supports the Single Responsibility Principle by advocating for focused and cohesive interfaces. 📚
- **Dependency Inversion Principle**: Works hand in hand with the Single Responsibility Principle to decouple classes and facilitate maintainability.⚖️
- **Don't Repeat Yourself (DRY)**: Aligns with the Single Responsibility Principle by reducing code duplication within classes and enforcing a focused and concise codebase. 🔄