---
title: Liskov Substitution Principle (LSP)
sidebar_position: 14
date: 2022-09-22
description: If S is a subtype of T, then objects of type T may be replaced with objects of type S. If you have a parent class and a child class, then the child class can be used where the base class is accepted without getting incorrect results.
category: SOLID
slug: liskov-substitution-principle-lsp
page_id: 569036de-36d1-4f97-bbbb-8bc49a9539ae
---

## The SOLID Principles

SOLID is an acronym for five other class-design principles:

- [Single Responsibility Principle (SRP)](single-responsibility-principle-srp)
- [Open-Closed Principle (OCP)](open-closed-principle-ocp)
- [Liskov Substitution Principle (LSP)](liskov-substitution-principle-lsp)
- [Interface Segregation Principle (ISP)](interface-segregation-principle-isp)
- [Dependency Inversion Principle (DIP)](dependency-inversion-principle-dip)

## The Liskov Substitution Principle (LSP)

☑️ Topic: Objects and Data Structures

☑️ Idea: If S is a subtype of T, then objects of type T may be replaced with objects of type S. If you have a parent class and a child class, then the child class can be used where the base class is accepted without getting incorrect results.

☑️ Benefits: Re-usability, Testability.

☑️ Guideline: If your interface works for a class it should also work for other classes than inherit from it.

### Benefits Explained

- Low dependence: Code can be used with a class or another and that lowers the dependence.
- Better abstractions: It’s a test that forces you to think of better abstractions for your code.
- Fewer changes: If a function can be used for multiple classes then there is only one thing to maintain.

## Simple example

A simple example can be demonstrated with birds.

Ducks can fly, but ostrich cannot, and they are both birds.

### BAD

```javascript
public class Bird{
    public void fly(){}
}
public class Duck extends Bird{} // Ducks can fly
public class Ostrich extends Bird{} // Ostriches also have a `fly` method, but ostriches can't fly.
```

### GOOD

```javascript
public class Bird{}
public class FlyingBirds extends Bird{
    public void fly(){}
}
public class Duck extends FlyingBirds{} // Ducks can fly
public class Ostrich extends Bird{} // Ostrich can't fly, but they are still birds
```

## Complex example

Let’s look at a design example with squares and rectangles.

If the designer makes `Square` inherit from `Rectangle` using the “is a” rule (`Square`is a `Rectangle`), then the design can violate the Liskov substitution principle.

### BAD

```javascript
// BAD
class Rectangle {
  constructor() {
    this.width = 0
    this.height = 0
  }
  render(area) {
    /* ... */
  }
  setWidth(width) {
    this.width = width
  }
  setHeight(height) {
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  // Square "is a" Rectangle
  setWidth(width) {
    this.width = width
    this.height = width
  }
  setHeight(height) {
    this.width = height
    this.height = height
  }
}

function renderLargeRectangles(rectangles) {
  // `rectangle` can be a Square
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4)
    rectangle.setHeight(5)
    const area = rectangle.getArea() // BAD: Returns 25 for Square. Should be 20.
    rectangle.render(area)
  })
}
```

### GOOD

```javascript
// GOOD
class Shape {
  render(area) {
    /* ... */
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}

class Square extends Shape {
  constructor(length) {
    super()
    this.length = length
  }
  getArea() {
    return this.length * this.length
  }
}

function renderLargeShapes(shapes) {
  // Works for Shape and its descendants
  shapes.forEach((shape) => {
    const area = shape.getArea()
    shape.render(area)
  })
}
```
