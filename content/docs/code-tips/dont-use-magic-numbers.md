---
title: Don’t Use Magic Numbers
sidebar_position: 19
date: 2022-05-09
description: Code should be readable and searchable. Constants should have a name. Use searchable names.
category: Variables
slug: dont-use-magic-numbers
page_id: a3130207-b86e-4623-8548-471978823c2f
---



☑️ Topic: **Variables**


☑️ Idea: Code should be readable and searchable. Constants should have a name. Use searchable names.


☑️ Benefit: Readability. Naming variables adds meaning to the program. This will help the readers understand it faster.  


☑️ Guideline: Don’t use numbers or other hardcoded values directly, assign them to constants. 


```javascript
// BAD
setTimeout(blastOff, 86400000); // What is 86400000?


// GOOD
// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;
setTimeout(blastOff, MILLISECONDS_PER_DAY);
```

