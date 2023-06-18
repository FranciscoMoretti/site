---
tag: Python
alias:

publish: false
slug: a-short-introduction-to-python-collections

title: A short introduction to python collections
description: Discover the power of Python's collections module for using the right data structure. Learn about lists, tuples, sets, dictionaries, and other data structures.
date: 2021-12-15
image:
---

**Use the right data structure for the job with the containers from Python’s** [**`collections`**](https://docs.python.org/3/library/collections.html#module-collections) **module.**

A collection can be defined as a container data type. They have different characteristics primarily regarding their `declaration` and their `usage`.

Python has 4 collection data types: `list`, `tuple`, `set` and `dict` (dictionary). These types are general and have some limitations, that’s why other options are available in a built-in module named [`collections`](https://docs.python.org/3/library/collections.html#module-collections). Let’s go through some of these well known structures and some of the specialized data structures in detail.

## Common Container Data Structures

These are built-in types that you can use without importing anything. These containers can solve most problems but sometimes they are not the best tool for the job.

### List

- Declared in square brackets `[]`
- Ordered
- Mutable
- Stores duplicated values
- Elements can be accessed with indexes

### Tuple

- Declared in parenthesis `()`
- Ordered
- Inmutable
- Stores duplicated values
- Elements can be accessed with indexes

### Set

- Declared in braces`{}`. Empty declared with `set()`
- Unordered
- Mutable
- Doesn’t store duplicated values
- Not indexed

### Dictionary

- Declared in braces with key and value separated by colon`{key:value, ...}`. Empty declared with `{}`
- Unordered
- Mutable
- Doesn’t store duplicated keys
- Not indexed

## Specialized Collections Data Structures

The `collections` module implements many specialized data structures that with properties that differ from the built-in container data types. These are useful to solve more specific programming problems in a Pythonic and efficient manner.

Here are some of them.

### namedtuple()

- A factory function to create subclasses of `tuple` with named fields
  - A name is assigned to every value
- Elements can be assigned with index or names
- [`namedtuple()`](https://docs.python.org/3/library/collections.html#collections.namedtuple)[ docs](https://docs.python.org/3/library/collections.html#collections.namedtuple)

### deque

- An optimized `list` that allows easy and efficient insertion and deletion
- Not only can it perform `append` and `pop` but also it can do `appendleft` and `popleft`
- [`deque`](https://docs.python.org/3/library/collections.html#collections.deque)[ docs](https://docs.python.org/3/library/collections.html#collections.deque)

### ChainMap

- It’s essentially a `list` of `dictionaries`
- Shows a single view of multiple mappings
- Indexed
- [`ChainMap`](https://docs.python.org/3/library/collections.html#collections.ChainMap)[ docs](https://docs.python.org/3/library/collections.html#collections.ChainMap)

### Counter

- A subclass of `dictionary` that counts hashable objects
- Has several methods to related to counting
- [`Counter`](https://docs.python.org/3/library/collections.html#collections.Counter)[ docs](https://docs.python.org/3/library/collections.html#collections.Counter)

### OrderedDict

- A subclass of `dictionary` that remembers the order in which keys were inserted
- Ordered
- [`OrderedDict`](https://docs.python.org/3/library/collections.html#collections.OrderedDict)[ docs](https://docs.python.org/3/library/collections.html#collections.OrderedDict)

### defaultdict

- A subclass of `dictionary` that has a factory function to provide values when a missing key is called
- If a value is provided for a missing key, the key-value is added to the dictionary
- [`defaultdict`](https://docs.python.org/3/library/collections.html#collections.defaultdict)[ docs](https://docs.python.org/3/library/collections.html#collections.defaultdict)

## Base Classes

On top of the specialized classes, `collections`also has some base classes. These are the starting points if you want to subclass `dictionary`, `list` or `string`.

### UserDict

- A wrapper class around `dictionary` that can be used as a base for inheritance.
- The `dictionary` is stored in an attribute that’s named `data`
- [`UserDict`](https://docs.python.org/3/library/collections.html#collections.UserDict)[ docs](https://docs.python.org/3/library/collections.html#collections.UserDict)

### UserList

- A wrapper class around `list` that can be used as a base for inheritance.
- The `list` is stored in an attribute that’s named `data`
- [`UserList`](https://docs.python.org/3/library/collections.html#collections.UserList)[ docs](https://docs.python.org/3/library/collections.html#collections.UserList)

### UserString

- A wrapper class around `string` that can be used as a base for inheritance.
- The `string` is stored in an attribute that’s named `data`
- [`UserString`](https://docs.python.org/3/library/collections.html#userstring-objects)[ docs](https://docs.python.org/3/library/collections.html#userstring-objects)
