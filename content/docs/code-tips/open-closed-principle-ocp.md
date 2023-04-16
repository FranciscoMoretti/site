---
title: Open-Closed Principle (OCP)
sidebar_position: 13
date: 2022-09-13
description: Software entities should be closed for modification but open for extension. In other words, you shouldn’t need to change existing code to add more functionality to a class. This is one of the SOLID principles.
category: SOLID
slug: open-closed-principle-ocp
page_id: 5f58330f-6b78-4eeb-b9da-d467eaf5372f
---



## The SOLID Principles 


SOLID is an acronym for five other class-design principles:

- [Single Responsibility Principle (SRP)](/docs/code-tips/single-responsibility-principle-srp)
- [Open-Closed Principle (OCP)](/docs/code-tips/open-closed-principle-ocp)
- [Liskov Substitution Principle (LSP)](/docs/code-tips/liskov-substitution-principle-lsp)
- [Interface Segregation Principle (ISP)](/docs/code-tips/interface-segregation-principle-isp)
- [Dependency Inversion Principle (DIP)](/docs/code-tips/dependency-inversion-principle-dip)

## The Open-Closed Principle (OCP)


☑️ Topic: Objects and Data Structures


☑️ Idea: Classes should be closed for modification but open for extension. In other words, you shouldn’t need to change existing code to add more functionality to a class.


☑️ Benefits: Maintainability, Re-usability


☑️ Guideline: If you are thinking of adapting a class to add new functionality, consider extending it instead.


### Benefits Explained

- Minimizes changes: You only need to add things when you need to extend a class.
- Working code is not affected: It’s harder to break things because changes in existent classes are not needed.

## Example


### BAD


```javascript
// BAD
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === "ajaxAdapter") {
      return makeAjaxCall(url).then(response => {
        // transform response and return
      });
    } else if (this.adapter.name === "nodeAdapter") {
      return makeHttpCall(url).then(response => {
        // transform response and return
      });
    }
  }
}

function makeAjaxCall(url) {
  // request and return promise
}

function makeHttpCall(url) {
  // request and return promise
}

```


### GOOD


```javascript
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }

  request(url) {
    // request and return promise
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }

  request(url) {
    // request and return promise
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    return this.adapter.request(url).then(response => {
      // transform response and return
    });
  }
}
```

