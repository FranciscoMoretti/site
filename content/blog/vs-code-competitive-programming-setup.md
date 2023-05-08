---
tag: VS Code
alias:

publish: true
slug: vs-code-competitive-programming-setup

title: VS Code Competitive programming setup
description: How to set up VS Code to solve coding challenges from CodeForces.
date: 2021-10-21
image:

page_id: ab2a6753655144fe8378a0aa314d33e3
---

## Use the power of VS Code to solve coding challenges

[Visual Studio](https://code.visualstudio.com/) code has grown exponentially over the past years, nowadays it’s able to do almost everything. Its [extensions ecosystem](https://marketplace.visualstudio.com/VSCode) allow developers to customize it with an immense amount of **flexibility**. In this post I’ll share the configuration I’ve used to create my **competitive programming environment**.

## Setting up a Git repository

If you want to solve many programming problems you might as well **create a repository to track them**. It’s not unusual that problems **shared common pieces of code** in their solutions. You can also use it to save snippets for the **most popular algorithms**.

Moreover, VS Code users will know that the program has a lot of features to search and work with data from the folder opened. Everything is designed around the most common use case, which is to **open a folder with VS Code which is also the root of a git repository**.

For reference, this is the code repository I’ve created for that purpose [](https://github.com/FranciscoMoretti/coding-challenges)[https://github.com/FranciscoMoretti/coding-challenges](https://github.com/FranciscoMoretti/coding-challenges).

![[Pasted image 20230425114940.png]]

VS Code repository with coding challenges

It has many sub-folders with different websites to get problems from. That’s useful if you plan to use more than one of them, but it’s not needed.

## Programming competitions and contests from CodeForces

A thorough google search on the subject indicated that at this point in time, **[CodeForces](https://codeforces.com/)** is the site that has the **widest range of problems and difficulty** and the **largest community**. They also have competitions frequently. You do need an account to submit answers so, if you don’t have one already, now is a good moment to create it.

![[Pasted image 20230425115000.png]]

Codeforces page navigation bar

## The Competitive Programming Helper Extension

After trying a few alternatives, I’ve chosen the [Competitive Programming Helper (cph)](https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper) as my main VS Code extension for Competitive programming. It’s not surprising that’s also the most popular, with over 70k downloads.

To set up all the features of the extensions you need to follow a couple of steps after installing it. I recommend the [extended user guide](https://github.com/agrawal-d/cph/blob/be2c16b67eeffa0059d42568287e87827f053e02/docs/user-guide.md) to do that process. The [Competitive Programming browser extension](https://github.com/jmerle/competitive-companion) is especially useful to connect with _CodeForces_ and it’s available for _Chrome_ and _Firefox_.

After this step, **with a single click** the [problem page](https://codeforces.com/problemset/problem/1594/E1) will used to create a **new file** and to set all the **test cases** stated in the problem.

![[Pasted image 20230425115017.png]]

Input from Competitive Companion

## The programming language and setting up a template

I’ve chosen `Python` as the programming language because it’s the one I’m most conformable with. I’ve been using it for work for the past 2 years.

I’ve found the impressive [PyRival](https://github.com/cheran-senthil/PyRival) python repository. It counts with a great template and also a ton of useful algorithms.

To add it to your repository as a [Git submdoule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) you only need to run this command:

```bash
git submodule add <https://github.com/cheran-senthil/PyRival>
```

To fully integrate it with the setup you can add this lines to the `VS Code Workspace settings`.

```
{  "cph.general.defaultLanguage": "python",  "cph.general.defaultLanguageTemplateFileLocation": "C:/your/absoulte/path/to/PyRival/templates/template_py3.py"}
```

After doing this and using the `Competitive Companion` extension with a new problem, the **new file** should be **created with a template**.

![[Pasted image 20230425115039.png]]

## Usage

That’s basically it. With this setup you can easily copy problems with testcases from CodeForces to work in VS Code with your favourite programming language and solve them with all the advantages of the IDE. You can easily try the test cases locally and see the output and create new test cases. This means a huge boost in speed and a much better experience than coding the problem solutions in a website.
