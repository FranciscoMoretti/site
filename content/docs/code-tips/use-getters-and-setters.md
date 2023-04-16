---
title: Use Getters and Setters
sidebar_position: 10
date: 2022-08-22
description: Using getters and setters is better than accessing the object property directly. Accessing properties directly breaks encapsulation.
category: Classes
slug: use-getters-and-setters
page_id: 67678dfe-bf1f-4f95-98c9-bd5c587a394b
---



☑️ Topic: Objects and Data Structures


☑️ Idea: Using getters and setters is better than accessing the object property directly. Accessing properties directly breaks encapsulation.


☑️ Benefits: Maintainability, Encapsulation, Reusability


☑️ Guideline: If you need to get or set information from an object consider getters and setters. 


Other benefits:

- When you want to do more beyond getting an object property, you don't have to look up and change every accessor in your codebase.
- Makes adding validation simple when doing a `set`.
- Encapsulates the internal representation.
- It’s easy to add logging and error handling when getting and setting.
- You can lazy load your object's properties, let's say getting it from a server.

```javascript
// GOOD
class Person {
    constructor(name) {
        this.setName(name); // name is private
    }
    getName() { // a "getter"
        return this._name;
    }
    setName(newName) { // a "setter"
				// ... validate before updating
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name= newName;
    }
}
```

