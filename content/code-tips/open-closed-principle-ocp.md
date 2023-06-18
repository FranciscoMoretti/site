---
title: Open-Closed Principle (OCP)
sidebar_position: 13
date: 2023-06-01
description: Learn about the Open-Closed Principle (OCP) and its benefits. Extend functionality without modifying code, ensuring maintainability and reusability.
category: SOLID
slug: open-closed-principle-ocp
---
## Usage

### 📝 Guideline

**Open-Closed Principle**: Classes should be closed for modification but open for extension.

The Open-Closed Principle dictates that you shouldn't need to change existing code to add more functionality to a class. Instead, you should be able to extend its behavior without modifying its implementation.

### 🛠️ How to Apply

- **Abstraction**: Abstract classes and interfaces can define a common contract for different implementations, allowing new functionality to be added by implementing these abstractions. 🔑
- **Inheritance**: Use inheritance to create specialized classes that extend a base class, enabling additional functionality to be added without modifying the existing code. 🧬
- **Polymorphism**: Utilize polymorphism to enable different implementations of a common interface, promoting extensibility. 🔀
- **Composition**: Compose objects using composition rather than modifying existing classes directly, allowing new behavior to be added by combining different components. 🔧
- **Dependency Injection**: Inject dependencies into classes to allow for flexible component replacement and avoid hard dependencies. 💉

## Pros and Cons

### 👍 Pros

- **Enhanced Modularity**: The Open-Closed Principle promotes modularity by isolating changes within specific classes or modules, reducing the ripple effect of modifications. 🧩
- **Maintainability**: The principle promotes a design that minimizes modifications to existing code, making it easier to maintain and reducing the risk of introducing bugs. 🛠️
- **Reusability**: By following the Open-Closed Principle, code becomes more reusable as new functionality can be added by extending existing classes or implementing abstractions. ♻️

### 👎 Cons

- **Increased Complexity**: Adhering to the Open-Closed Principle may introduce additional layers of abstraction and complexity, which can be challenging to manage in certain scenarios. 🤔
- **Potential Overengineering**: Applying the principle too rigidly can lead to over-engineering, resulting in unnecessary abstractions and reduced development speed. 🚧

## Examples

### ❌ Bad

```typescript
class Order {
  // ...
  
  calculateTotal() {
    // calculate total order cost
  }
  
  applyDiscount() {
    // apply discount based on user type
  }
  
  generateInvoice() {
    // generate invoice for the order
  }
}
```

### ✅ Good

```typescript
interface Order {
  calculateTotal(): number;
}

class RegularOrder implements Order {
  calculateTotal() {
    // calculate total order cost
  }
}

class DiscountedOrder implements Order {
  calculateTotal() {
    // calculate total order cost with discount
  }
}

class OrderInvoice {
  generate(order: Order) {
    // generate invoice for the order
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

- **Single Responsibility Principle**: Encourages classes to have a single responsibility, aligning with the Open-Closed Principle for better code maintainability. 🎯
- **Liskov Substitution Principle**: Focuses on substitutability, supporting the Open-Closed Principle by allowing seamless extension with subclass objects. 🔄
- **Interface Segregation Principle**: Suggests smaller and more focused interfaces, complementing the Open-Closed Principle's emphasis on abstraction and extension. 📦
- **Dependency Inversion Principle**: Promotes depending on abstractions, aligning with the Open-Closed Principle's goal of extending functionality without modifying existing code. 🔧
- **Don't Repeat Yourself (DRY)**: DRY principle reduces code duplication, helping adhere to the Open-Closed Principle by minimizing unnecessary modifications. ♻️
