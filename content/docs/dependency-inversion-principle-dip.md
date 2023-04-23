---
title: Dependency Inversion Principle (DIP)
sidebar_position: 16
date: 2022-10-05
description: High-level modules should not depend on low-level modules and both should depend on abstractions. Abstractions should not depend upon details, but details should depend on abstractions. Classes shouldn’t have to know implementation details from their dependencies.
category: SOLID
slug: dependency-inversion-principle-dip
page_id: d043b367-62b1-462a-9993-065679efdbb7
---

## The SOLID Principles

SOLID is an acronym for five other class-design principles:

- [Single Responsibility Principle (SRP)](single-responsibility-principle-srp.md)
- [Open-Closed Principle (OCP)](open-closed-principle-ocp.md)
- [Liskov Substitution Principle (LSP)](liskov-substitution-principle-lsp.md)
- [Interface Segregation Principle (ISP)](interface-segregation-principle-isp.md)
- [Dependency Inversion Principle (DIP)](dependency-inversion-principle-dip.md)

## The Dependency Inversion Principle (DIP)

☑️ Topic: Objects and Data Structures

☑️ Idea: High-level modules should not depend on low-level modules and both should depend on abstractions. Abstractions should not depend upon details, but details should depend on abstractions. Classes shouldn’t have to know implementation details from their dependencies.

☑️ Benefits: Low coupling, Maintainability.

☑️ Guideline: If your class depends on a lower-level module, you should change that module for an interface. If your class depends on implementation details from another class, you should encapsulate those behind an interface and use the interface instead.

## Benefits Explained

- Lowers coupling: It keeps high-level modules from knowing the details of their low-level modules and setting them up, reducing coupling between modules.
- Less maintenance: If some implementation details change, no changes are needed on the clients because it only depends on an interface.

## Interfaces in JavaScript and Typescript

JavaScript doesn't have explicit interfaces. Interfaces are implicit contracts in JavaScript because of duck typing.

Typescript has interfaces and the Dependency Inversion Principle can be applied directly to it. I’ll use Typescript to explain this principle.

## Example in Typescript

Let’s look at a design example that applies the Dependency Inversion Principle to databases.

### BAD

Here`RecordService` depends on a specific database class called `MySQLiteDatabase`. If we wanted to use another database we’d have to change the `RecordService` implementation.

```javascript
// BAD
class RecordService {
  database: MySQLiteDatabase
  // constructor

  save(record: Record): void {
    if (record.id === undefined) {
      this.database.insert(record)
    } else {
      this.database.update(record)
    }
  }
}

class SQLiteDatabase {
  insert(record: Record) {
    // insert
  }

  update(record: Record) {
    // update
  }
}
```

The dependency is direct

![](/assets/docs/924250135.png)

### GOOD

Here`RecordService` depends on a `Database` interface. We can use a `SqliteDatabase` or a different database without changes in `RecordService`.

```javascript
// GOOD
class RecordService {
  database: Database
  // constructor

  save(record: Record): void {
    this.database.save(record)
  }
}

interface Database {
  save(record: Record): void;
}

class SQLiteDatabase implements Database {
  save(record: Record) {
    if (record.id === undefined) {
      // insert
    } else {
      // update
    }
  }
}
```

The dependency was inverted

![](/assets/docs/893356382.png)

## Example in JavaScript

Let’s look at a design example that uses the Dependency Inversion Principle in JavaScript. This is a bit more complex because interfaces are implicit.

### BAD

```javascript
// BAD
class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ["HTTP"]
  }

  requestItem(item) {
    // ...
  }
}

class InventoryTracker {
  constructor(items) {
    this.items = items

    // BAD: We have created a dependency on a specific request implementation.
    // We should just have requestItems depend on a request method: `request`
    this.requester = new InventoryRequester()
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item)
    })
  }
}

const inventoryTracker = new InventoryTracker(["apples", "bananas"])
inventoryTracker.requestItems()
```

### GOOD

```javascript
//GOOD
class InventoryTracker {
  constructor(items, requester) {
    this.items = items
    this.requester = requester
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item)
    })
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ["HTTP"]
  }

  requestItem(item) {
    // ...
  }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ["WS"]
  }

  requestItem(item) {
    // ...
  }
}

// By constructing our dependencies externally and injecting them, we can easily
// substitute our request module for a fancy new one that uses WebSockets.
const inventoryTracker = new InventoryTracker(
  ["apples", "bananas"],
  new InventoryRequesterV2()
)
inventoryTracker.requestItems()
```
