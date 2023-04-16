---
title: Composition vs Inheritance- Which is Better for Your Code?
sidebar_position: 11
date: 2023-01-16
description: Do you want to make your code super flexible and easy to change? Composition might be the way to go! In this post, we'll learn about the difference between composition and inheritance and figure out which one is best for different situations.
category: Classes
slug: composition-vs-inheritance-which-is-better-for-your-code
page_id: 3b0cb376-9615-49e7-bc1e-f2eb9839dc4e
---



## Composition vs inheritance, what’s the difference?


Hey coders! As you know, it's important to make your code as flexible and scalable as possible. One way to do this is by choosing the right way to organize your code.


There are two main ways to organize your code: composition and inheritance. Let's break it down:

- **Inheritance**: This is when one class is based on another class and can use all its cool stuff, like methods and properties.
- **Composition**: This is when a class is made up of lots of smaller classes that work together to get things done.

So, how do you choose between the two? Here are some tips to help you decide:


## **Tips for Choosing Between Composition and Inheritance**


Here are some things to consider when picking between composition and inheritance:


### When to use inheritance over composition

- Use inheritance when your relationship "is-a" and not "has-a". For example, "a dog is a mammal" would be a good use of inheritance.
- Use inheritance when you can reuse code from the base class.
- Use inheritance when you want to make global changes to derived classes by changing the base class.

### When to use composition over inheritance

- Your class has a "has-a" relationship. For example, "a car has an engine" would be a good use of composition.
- You want to be able to change the behavior of a class by changing the smaller classes it's composed of.
- You want to avoid the overhead of a deep inheritance hierarchy.

## **Composition: The Flexible and Scalable Choice**


In the end, composition is often the better choice because it's super flexible and easy to change. You can just modify the smaller classes that a class is made of to change its behavior. Plus, you don't have to deal with a bunch of extra classes in your inheritance hierarchy.


When you're deciding between inheritance and composition, think about what you need for your code and choose the approach that will give you the most flexibility and scalability. Happy coding!


## Example


### Bad


This is bad because `EmployeeTaxData` is not an `Employee`.


```javascript
// BAD
class Employee {
  constructor(name) { this.name = name; }
}

class EmployeeTaxData extends Employee {
  constructor(salary) {
    super();
    this.salary = salary;
  }
}
```


### Good


This is good because an `Employee` has `EmployeeTaxData`.


```javascript
// GOOD
class EmployeeTaxData {
  constructor(salary) { this.salary = salary;}
}

class Employee {
  constructor(name) {this.name = name;}
  
  setTaxData(salary) {
    this.taxData = new EmployeeTaxData(salary);
  }
}
```


## Summary


In short, composition often is a more flexible and scalable approach to code organization than inheritance. However, inheritance can be the better choice for some situations.

