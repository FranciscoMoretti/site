---
title: Use Explanatory Variables
sidebar_position: 2
date: 2022-05-16
description: Break the calculations up into intermediate values that are held in variables with meaningful names. The names give meaning and clarity to the code. 
category: Variables
slug: use-explanatory-variables
page_id: 4cca507e-6587-4984-a752-c623970656e2
---



☑️ Topic: Variables


☑️ Idea: Break the calculations up into intermediate values that are held in variables with meaningful names. The names give meaning and clarity to the code. 


☑️ Benefit: Readability, clarity, maintainability.


☑️ Guideline: The more explanatory variables are used, the better.


```javascript
// BAD
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);


// GOOD
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```

