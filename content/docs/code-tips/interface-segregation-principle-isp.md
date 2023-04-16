---
title: Interface Segregation Principle (ISP)
sidebar_position: 15
date: 2022-09-28
description: Clients should not be forced to depend upon interfaces that they do not use. Large interfaces should be broken up into smaller interfaces.
category: SOLID
slug: interface-segregation-principle-isp
page_id: 46ae8052-85f0-4bc9-9a8b-2c2871752235
---



## The SOLID Principles 


SOLID is an acronym for five other class-design principles:

- [Single Responsibility Principle (SRP)](/docs/code-tips/single-responsibility-principle-srp)
- [Open-Closed Principle (OCP)](/docs/code-tips/open-closed-principle-ocp)
- [Liskov Substitution Principle (LSP)](/docs/code-tips/liskov-substitution-principle-lsp)
- [Interface Segregation Principle (ISP)](/docs/code-tips/interface-segregation-principle-isp)
- [Dependency Inversion Principle (DIP)](/docs/code-tips/dependency-inversion-principle-dip)

## The Interface Segregation Principle (ISP)


☑️ Topic: Objects and Data Structures


☑️ Idea: Clients should not be forced to depend upon interfaces that they do not use. Large interfaces should be broken up into smaller interfaces.


☑️ Benefits: Low coupling, Maintainability


☑️ Guideline: Make fine-grained interfaces that are client specific. Objects can implement one of those interfaces or more, but their clients should only know about the interface they use.


### Benefits Explained

- Reduces coupling: if you have to include things you don't need then you are coupling 2 entities (objects, classes, or modules) together that don't have a relationship.
- Less Maintainability: classes that implement smaller interfaces will have fewer methods to maintain.

## Interfaces in JavaScript and Typescript


JavaScript doesn't have explicit interfaces. Interfaces are implicit contracts in JavaScript because of duck typing.


This means that it doesn’t force enforce the implementation of anything via interfaces.


Typescript has interfaces and the Interface Segregation Principle can be applied directly to it. I’ll use Typescript to explain this principle.


## Example in Typescript


Let’s check an example with animals. Have in mind that cats can’t fly, but they can walk. And that ducks can fly and walk. 


### BAD


The `Animal` interface forces implementation of methods that some classes don’t need.


```javascript
// BAD
interface Animal {
  walk(): void;
  fly(): void;
}

class Cat implements Animal {
  walk() {
    console.log("Pat pat pat");
  }

  fly() {
    throw new Error("Cats can't fly");
  }
}

class Duck implements Animal {
  walk() {
    console.log("Pat pat pat");
  }

  fly() {
    console.log("Flap flap");
  }
}
```


The dependency looks like this


![](/images/docs/1150321057.png)


### GOOD


The `Animal` interface was segregated into the `AnimalCanWalk` and `AnimalCanFly` interfaces. Every client implements only what they use.


```javascript
// GOOD
interface AnimalCanWalk {
  walk(): void;
}

interface AnimalCanFly {
  fly(): void;
}

class Cat implements AnimalCanWalk {
  walk() {
    console.log("Pat pat pat");
  }
}

class Duck implements AnimalCanWalk, AnimalCanFly {
  walk() {
    console.log("Pat pat pat");
  }

  fly() {
    console.log("Flap flap");
  }
}
```


And now that the interface was segregated this is what the dependency diagram looks like.


![](/images/docs/335237699.png)


## Example in Javascript


Let’s look at a design example that uses the Interface Segregation Principle in Javascript. This is a bit more complex because interfaces are implicit.


### BAD


In this case, the `DOMTraverser` class requires a `animationModule`. For most cases, the animation module is not needed because animations are not required while traversing. Setting this useless config is extra work for the client and it increases the coupling between the 2 classes.


```javascript
// BAD
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.settings.animationModule.setup();
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName("body"),
  animationModule() {} // Most of the time, we won't need to animate when traversing.
  // ...
});
```


### GOOD


In this case, the `DOMTraverser` class doesn’t require an `animationModule` because it’s optional. The interface was segregated by putting the `animationModule` in `options`. This makes it much easier to use `DOMTraverser`.


```javascript
// GOOD
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }

  setupOptions() {
    if (this.options.animationModule) {
      // ...
    }
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName("body"),
  options: {
    animationModule() {}
  }
});
```

