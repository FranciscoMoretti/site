---
title: Use Getters and Setters
sidebar_position: 10
date: 2023-05-28
description: Using getters and setters is better than accessing the object property directly. Accessing properties directly breaks encapsulation.
category: Classes
slug: use-getters-and-setters
---

## Usage

### 📝 Guideline
**Use Getters and Setters**: Accessing properties directly breaks encapsulation.

Getters and setters are methods that allow controlled access to an object's properties. Instead of directly accessing the properties, you should use getters and setters to encapsulate the access and provide an interface for interacting with the object's state.

### 🛠️ How to apply
-   **Encapsulate Properties**: Declare private properties and provide getters and setters to access and modify them. 🏷️
-   **Perform Validation**: Add validation logic inside setters to ensure the data integrity of the object. ✅
-   **Enable Computed Properties**: Implement getters that compute and return derived values based on the object's properties. 🔄
- **Avoid intensive computation**: Getters and setters should not perform computationally expensive operations or slow operations, as this can lead to unexpected delays and hinder performance.

## Pros and Cons

### 👍 Pros
-   **Encapsulation**: Getters and setters promote encapsulation by hiding the internal representation of an object and providing controlled access to its properties. 🔒
-   **Validation**: Setters enable validation logic, allowing you to validate input values and prevent incorrect data from being set. ✅
-   **Computed Properties**: Getters allow the calculation of values based on other properties, providing convenience and reducing redundant code. 🔄
-   **Future Compatibility**: Using getters and setters gives you the flexibility to change the internal representation of a property without affecting the external usage. 🔁

### 👎 Cons
- **Additional Complexity**: Introducing getters and setters adds an extra layer of complexity to the codebase, which may not be necessary for simple properties. 📦
- **Performance impact**: Compared to direct property access, using getters and setters might introduce a slight performance overhead due to the method invocation and additional function calls. ⏱️
- **Breaking Existing Code**: If the codebase already accesses properties directly, introducing getters and setters may require modifying the existing code, resulting in additional effort. ⚠️

## Examples

### ❌ Bad
```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const person = new Person('Alice');
console.log(person.name); // Directly accessing property
person.name = 'Bob'
person.greet(); // Calling method

```

### ✅ Good
```typescript
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) 
    // ... validate before updating
    if (newName.length == 0) {
      throw "The name cannot be empty"
    }
    this._name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const person = new Person('Alice');
console.log(person.name); // Using getter
person.name = 'Bob'; // Using setter
person.greet(); // Calling method
```

## References

### 🔀 Related principles
- **Encapsulation**: Encapsulation and the use of getters and setters go hand in hand to maintain a well-structured and controlled object interface. 🔒
- **Data integrity**: By using getters and setters, you can enforce data validation and maintain data integrity within the class. ✅
- **Modularity**: Using getters and setters promotes modularity by isolating internal changes to a class and minimizing their impact on other parts of the codebase. 🧩