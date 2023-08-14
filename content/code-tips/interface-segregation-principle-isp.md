---
title: Interface Segregation Principle (ISP)
sidebar_position: 15
date: 2023-06-28
description: Clients should not be forced to depend upon interfaces that they do not use. Large interfaces should be broken up into smaller interfaces.
category: SOLID
slug: interface-segregation-principle-isp
---

## Usage

### 📝 Guideline
**Interface Segregation Principle**: Clients should not be forced to depend upon interfaces that they do not use. Large interfaces should be broken up into smaller interfaces.

This principle emphasizes that interfaces should be tailored to the specific needs of the clients using them. It suggests breaking down large interfaces into smaller, more focused ones to avoid imposing unnecessary dependencies on clients.

### 🛠️ How to Apply
- **Identify client-specific requirements**: Understand the distinct needs of each client or consumer of an interface. 🔍
- **Design cohesive interfaces**: Create interfaces that contain only the methods and properties required by the clients using them. 🧩
- **Create fine-grained interfaces**: Design interfaces that are small and focused, catering to specific client needs. 📦
- **Avoid "fat" interfaces**: Refrain from creating interfaces with excessive methods that might not be relevant to all clients. 🦣
- **Use composition**: Instead of relying on a single monolithic interface, consider composing interfaces to fulfill specific requirements. 🎯

## Pros and Cons

### 👍 Pros
- **Flexible and adaptable**: Smaller interfaces provide flexibility by allowing clients to depend only on the functionality they require. 🧘‍♂️
- **Enhances maintainability**: Breaking down large interfaces into smaller ones simplifies maintenance and reduces the impact of changes. 🧹
- **Promotes reusability**: Fine-grained interfaces enable reusing code across different client contexts, improving productivity. 🔄

### 👎 Cons
- **Increased complexity**: Managing multiple smaller interfaces may introduce some complexity compared to a single interface. 🤔
- **Dependency management**: Fine-grained interfaces may require more effort to handle dependencies and ensure proper composition. ⚙️
- **Higher development overhead**: Creating and managing multiple interfaces requires careful planning and design effort. 💼

## Examples

### ❌ Bad
```typescript
// A single interface with multiple methods
interface IShape {
  draw(): void;
  resize(): void;
  rotate(): void;
  calculateArea(): void;
  calculatePerimeter(): void;
}
```

### ✅ Good
```typescript
// Separated interfaces for different aspects of a shape
interface IDrawable {
  draw(): void;
}

interface IResizable {
  resize(): void;
}

interface IRotatable {
  rotate(): void;
}

interface ICalculatable {
  calculateArea(): void;
  calculatePerimeter(): void;
}
```

## References

### 🧱 SOLID Principles

SOLID is an acronym for five other class-design principles:

- [Single Responsibility Principle (SRP)](blog/single-responsibility-principle-srp)
- [Open-Closed Principle (OCP)](blog/open-closed-principle-ocp)
- [Liskov Substitution Principle (LSP)](blog/liskov-substitution-principle-lsp)
- [Interface Segregation Principle (ISP)](blog/interface-segregation-principle-isp)
- [Dependency Inversion Principle (DIP)](blog/dependency-inversion-principle-dip)

### 🔀 Related principles
- **Single Responsibility Principle**: The Interface Segregation Principle complements the Single Responsibility Principle by promoting the separation of concerns at the interface level. 🎯
- **Dependency Inversion Principle**: Breaking up interfaces can facilitate the application of the Dependency Inversion Principle by allowing clients to depend on abstractions rather than concrete implementations. 🔄
- **Open/Closed Principle**: The Interface Segregation Principle aligns with the Open-Closed Principle by encouraging the creation of smaller, cohesive interfaces that are more likely to remain stable and closed for modification.🔒
- **Liskov Substitution Principle**: The Interface Segregation Principle works with the Liskov Substitution Principle by ensuring that client code can be substituted with any implementation of the smaller interfaces without affecting the correctness of the program. ↔️
- **Don't Repeat Yourself (DRY)**: Applying the Interface Segregation Principle helps to avoid duplication of code and promotes reusability by creating focused interfaces that encapsulate specific functionality. 🌟
- **Composition over Inheritance**: Breaking up interfaces into smaller, specialized ones promotes the use of composition over inheritance, allowing for greater flexibility and extensibility in the system's design. 💎