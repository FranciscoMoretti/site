---
title: Liskov Substitution Principle (LSP)
sidebar_position: 14
date: 2023-06-01
description: Discover the Liskov Substitution Principle (LSP) and its role in building reliable software. Guarantee seamless substitution of parent and child classes.
category: SOLID
slug: liskov-substitution-principle-lsp
---

## Usage

### 📝 Guideline
**Liskov Substitution Principle**: Child classes should be able to replace parent classes without causing errors or unexpected behavior.

The Liskov Substitution Principle states that if S is a subtype of T, then objects of type T may be replaced with objects of type S. In simpler terms, if you have a parent class and a child class, you should be able to use the child class wherever the base class is expected without encountering incorrect results.

### 🛠️ How to Apply
- **Use inheritance correctly**: Make sure that subclasses can be used interchangeably with their base classes without causing unexpected behavior or violating the base class's contract. 🔄
- **Adhere to method signatures**: Child classes should maintain the same method signatures as their base classes to ensure that they can be used as substitutes without introducing errors. 🖋️
- **Avoid violating preconditions**: Subclasses should not impose more restrictions on input parameters than their base classes. Strive to relax or maintain the same preconditions as the base class methods. 🔓
- **Preserve postconditions**: Ensure that the postconditions defined by the base class methods are still valid in the subclass implementations. The output and behavior should remain consistent. ✅

## Pros and Cons

### 👍 Pros
- **Enhances code reusability**: The Liskov Substitution Principle allows for easy interchangeability of objects, promoting code reuse and modularity. 🔄
- **Facilitates abstraction**: LSP encourages the creation of well-defined base classes and contracts, which promote clear and concise abstractions throughout the codebase. 💡

### 👎 Cons
- **Increased complexity**: Designing and maintaining a hierarchy of classes that adhere to the Liskov Substitution Principle may introduce additional complexity, especially in larger codebases. 🤯
- **Requires careful design**: Applying LSP effectively requires thoughtful design and planning to create a hierarchy that allows for substitutability without breaking the system's behavior. 🎨


## Examples

### ❌ Bad

```typescript
class Bird {
  fly() {}
}

class Duck extends Bird {} // Ducks can fly

class Ostrich extends Bird {} // Ostriches also have a `fly` method, but ostriches can't fly.
```

### ✅ Good

```typescript
class Bird {}

class FlyingBirds extends Bird {
  fly() {}
}

class Duck extends FlyingBirds {} // Ducks can fly

class Ostrich extends Bird {} // Ostrich can't fly, but they are still birds
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

- **Single Responsibility Principle**: Each class or module should have only one reason to change, promoting cohesion and reducing the likelihood of violating the Liskov Substitution Principle. 🎯
- **Open/Closed Principle**: The Liskov Substitution Principle is closely related to the Open/Closed Principle, as both aim to promote extensibility and modifiability of code. 🚪
- **Interface Segregation Principle**: By adhering to the Interface Segregation Principle, clients are only dependent on the specific interfaces they require, which can help ensure conformance to the Liskov Substitution Principle. 🧩
- **Dependency Inversion Principle**: The Dependency Inversion Principle encourages the use of abstractions and dependency injection, which can facilitate adherence to the Liskov Substitution Principle. 🔄
- **Composition Over Inheritance**: Instead of relying heavily on inheritance, the Composition Over Inheritance principle suggests using composition and interfaces to achieve flexibility and prevent Liskov Substitution Principle violations. 🧱
- **Law of Demeter (Principle of Least Knowledge)**: By following the Law of Demeter, objects should only interact with their immediate dependencies, reducing the chances of Liskov Substitution Principle violations. 📞
- **KISS (Keep It Simple, Stupid)**: Keeping code simple and straightforward can aid in adhering to the Liskov Substitution Principle and avoiding unnecessary complexities. 🤐
- **YAGNI (You Ain't Gonna Need It)**: The YAGNI principle discourages adding functionality prematurely, which can help maintain the integrity of the Liskov Substitution Principle by not introducing unnecessary complexity. ❌
- **Principle of Least Astonishment**: This principle suggests designing code in a way that minimizes surprises and aligns with users' expectations, indirectly supporting adherence to the Liskov Substitution Principle. 😮
- **Inversion of Control (IoC)**: By applying IoC, the control flow of a program is inverted, allowing for easier substitution of components and facilitating adherence to the Liskov Substitution Principle. ⬆️
- **Law of Superposition**: The Law of Superposition in software design suggests that more specific behaviors should not override or conflict with more general behaviors, aligning with the Liskov Substitution Principle. 🌟
- **Design by Contract**: Design by Contract emphasizes the use of preconditions, postconditions, and invariants to ensure the correct behavior and adherence to contracts, which can support the Liskov Substitution Principle. 📝
