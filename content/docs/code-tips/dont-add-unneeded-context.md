---
title: Don't add unneeded context
sidebar_position: 17
date: 2022-05-30
description: If your class or object name tells you something, don't repeat that in your variable name.
category: General
slug: dont-add-unneeded-context
page_id: 372464db-2bce-474b-a396-69b1cb9e95f0
---



☑️ Topic: Variables


☑️ Idea: If your class or object name tells you something, don't repeat that in your variable name.


☑️ Benefit: Readability.  Code is easier to read if there is no unnecessary information bloating it.  


☑️ Guideline: Shorter names are generally better than longer ones, so long as they are clear. Only add things if they provide real value to a name.


```javascript
// BAD
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};


// GOOD
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};
```

