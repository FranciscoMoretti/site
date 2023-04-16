---
title: Use pronounceable and meaningful variable names
sidebar_position: 4
date: 2022-03-21
description: Choosing good names takes time but it saves even more time. Names should be easy to pronounce and they should give you useful information.
category: Variables
slug: use-pronounceable-and-meaningful-variable-names
page_id: 13dc61ec-b0d0-4254-bfc5-f7f3a4b67d93
---



☑️ Topic: Variables


☑️ Idea: Choosing good names takes time but it saves even more time. Names should be easy to pronounce and they should give you useful information.


☑️ Benefits: Readability, maintainability


☑️ Guideline: The name shouldn’t contain the variable type and it shouldn’t have contractions. 


```javascript
// BAD
const yyyymmdstr = moment().format("YYYY/MM/DD");


// GOOD
const currentDate = moment().format("YYYY/MM/DD");
```

