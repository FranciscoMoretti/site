---
title: Dependency Inversion Principle (DIP)
sidebar_position: 16
date: 2023-05-30
description: Discover how the Dependency Inversion Principle improves code maintainability and modularity by relying on abstractions and inverting control of dependencies.
category: SOLID
slug: dependency-inversion-principle-dip
---

## Usage

### 📝 Guideline
**Dependency Inversion Principle**: High-level modules should not depend on low-level modules and both should depend on abstractions.

The Dependency Inversion Principle states that classes should not rely on the implementation details of their dependencies. Instead, they should depend on abstractions or interfaces. This principle promotes decoupling and flexibility in the codebase.

### 🛠️ How to Apply

- **Interfaces over implementation**: Depend on Interfaces rather than concrete implementations. This allows for interchangeable dependencies⚙️
- **Dependency Injection**: Instead of directly creating and managing dependencies within a class, inject them from external sources. 🧩
- **Use Interfaces or Abstract Classes**: Define abstractions for dependencies, and have classes depend on these interfaces or abstract classes rather than concrete implementations. 🎛️

## Pros and Cons

### 👍 Pros
- **Reduced Coupling**: High-level modules and low-level modules become loosely coupled, leading to a more modular and maintainable codebase. 🧩
- **Ease of testing**: By depending on abstractions rather than concrete implementations, unit testing becomes simpler as mock objects can be easily substituted. 🧪
- **Flexibility**: By depending on abstractions, code becomes more flexible and easier to modify, as dependencies can be swapped without modifying the high-level module. 🔄
- **Scalability**: The use of abstractions allows for scalable and extensible systems, as new implementations can be easily added without affecting existing code. 🚀

### 👎 Cons
- **Additional complexity**: Implementing the Dependency Inversion Principle can introduce additional layers of abstraction, which may increase complexity and require a deeper understanding of the codebase. 🤔
- **Overuse of interfaces**: Overusing interfaces may result in unnecessary abstractions and bloated code, leading to reduced readability and maintainability. 📚


## Examples

### ❌ Bad

```typescript
class UserService {
  private database: DatabaseService;

  constructor() {
    this.database = new DatabaseService(); // Depends on concrete implementation
  }

  getUser(id: string): User {
    // Retrieves user from the database
  }
}

const userService = new UserService();
userService.getUser("123");
```

### ✅ Good

```typescript
interface Database {
  getUser(id: string): User;
}

class DatabaseService implements Database {
  getUser(id: string): User {
    // Retrieves user from the database
  }
}

class UserService {
  private database: Database;

  constructor(database: Database) {
    this.database = database; // Depends on abstraction
  }

  getUser(id: string): User {
    return this.database.getUser(id);
  }
}

const databaseService = new DatabaseService();
const userService = new UserService(databaseService);
userService.getUser("123");
```

## References

### 🧱 SOLID Principles

SOLID is an acronym for five other class-design principles:

- [Single Responsibility Principle (SRP)](code-tips/single-responsibility-principle-srp)
- [Open-Closed Principle (OCP)](code-tips/open-closed-principle-ocp)
- [Liskov Substitution Principle (LSP)](code-tips/liskov-substitution-principle-lsp)
- [Interface Segregation Principle (ISP)](code-tips/interface-segregation-principle-isp)
- [Dependency Inversion Principle (DIP)](code-tips/dependency-inversion-principle-dip)

### 🔀 Related principles

- **Open-Closed Principle**: The Dependency Inversion Principle complements the Open-Closed Principle by promoting the extension of behavior through abstractions rather than modifying existing code. 🚪
- **Liskov Substitution Principle**: The Dependency Inversion Principle aligns with the Liskov Substitution Principle, as both emphasize the use of abstractions to enable interchangeability of implementations. ↔️
- **Interface Segregation Principle**: The Dependency Inversion Principle supports the Interface Segregation Principle by advocating for smaller, focused interfaces that clients can depend on. ✂️
- **Single Responsibility Principle**: The Dependency Inversion Principle contributes to the Single Responsibility Principle by reducing the coupling between modules, ensuring each class has a single responsibility. 🎯
- **Law of Demeter**: The Dependency Inversion Principle helps adhere to the Law of Demeter by relying on abstractions and avoiding direct knowledge of implementation details in classes. 📏