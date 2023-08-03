---
tag: Git, Ubuntu
alias:

publish: true
slug: how-to-install-and-configure-git-with-aliases-in-ubuntu-22-04

title: How to Install and Configure Git with Aliases in Ubuntu 22
description: Enhance your Git experience with useful aliases for basic configuration in Ubuntu 22.04. A handy guide for Git users. Happy coding!
date: 2023-05-17
image: /thumbnails/how-to-install-and-configure-git-with-aliases-in-ubuntu-22-04.png
thumbnail:
  - Install
  - Git
  - Ubuntu
---

This guide will guide you through the process of installing and configuring [Git](https://git-scm.com/) with aliases in Ubuntu 22.04. Git is an essential tool for version control, and aliases can greatly enhance your workflow by providing shorthand commands for common Git operations. Let's get started! 😄

## Step 1: Installing Git
Let's install Git on your Ubuntu 22.04 system. Open your terminal and follow these steps:

1. Update your package list by running the command:
```bash
sudo apt update
```

2. Install Git using the following command:
```bash
sudo apt install git
```

Awesome! Now that you have Git installed, let's move on to configuring some helpful aliases.

## Step 2: Configuring Git Aliases
Aliases allow us to create shortcuts for frequently used Git commands, making our workflow smoother and more efficient. To configure aliases, open your terminal and follow these steps:

1. Set up some basic aliases recommended by the [Git documentation](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases) by executing these commands:
```sh
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.last 'log -1 HEAD'
```

   These aliases will be useful when you need to perform common operations such as checking out branches, creating branches, committing changes, checking the status, and viewing the last commit.

2. Additionally, here's a personal favorite alias that I find incredibly useful. It deletes all local branches that have already been merged into the currently checked out branch.

Add this to your Git configuration by running `git config -e --global`

```bash
[alias]
    cleanup = "!git branch --merged | grep  -v '\\*\\|master\\|develop' | xargs -n 1 -r git branch -d"
```

   This alias helps keep your local branches clean and tidy, especially when you've been working on a project for a while and have accumulated multiple branches.

With these aliases set up, you're on your way to becoming a Git power user! 🎉

## Step 3: Setting Up Git with GitHub
If you're not already using GitHub, I highly recommend it. GitHub is the most used platform for collaboration and code hosting. To set up Git with GitHub, follow the official GitHub documentation: [Set Up Git with GitHub](https://docs.github.com/en/get-started/quickstart/set-up-git).

By integrating Git with GitHub, you'll get access to a ton of features for your modern web development projects.

## Conclusion
Congrats on installing and configuring Git with aliases in Ubuntu 22.04! 🎉 With aliases you can type less and improve your productivity as a web developer. Remember to refer to this guide for future installations and configurations. Happy coding! ✨