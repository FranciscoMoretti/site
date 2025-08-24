---
title: Autocommit with Cursor
draft: true
tags: ['cursor', 'git', 'productivity', 'automation']
date: 2025-05-23
layout: PostBanner
summary: Stop writing commit messages manually. Set up one keyboard shortcut that stages, commits, and generates AI commit messages in Cursor.
slug: autocommit-with-cursor
images: []
---

You know those commit messages that say "fix stuff" or "updates"? Yeah. We've all written them.

Here's the thing. You can automate your entire commit process in Cursor. One keyboard shortcut. No context switching. No writer's block on commit messages.

Hit `Ctrl+Shift+C`. Files staged, AI writes the message, everything committed. Done.

## Why manual commits suck

Context switching kills flow. You're deep in code, solving problems, building features. Then you have to switch gears and write prose. Your brain doesn't like this.

Most commit messages are garbage anyway:

- "fix bug" (which bug?)
- "wip" (work in progress forever)
- "updates" (what kind of updates?)
- "asdf" (seriously?)

After your 50th rushed commit message, you stop caring. The quality drops. Your git history becomes useless.

AI can do better. It sees your actual changes. It writes consistent messages. No fatigue, no shortcuts.

## The one-shortcut solution

One keybinding handles everything. Copy this into your `keybindings.json`:

```json
[
  {
    "key": "ctrl+shift+c",
    "command": "runCommands",
    "args": {
      "commands": [
        {
          "command": "git.stageAll"
        },
        {
          "command": "cursor.generateGitCommitMessage"
        },
        {
          "command": "git.commitAll"
        }
      ]
    }
  }
]
```

Three commands run in sequence:

1. Stage all changes (`git add .`)
2. Generate AI commit message
3. Commit with that message

No clicking. No typing. No thinking about commit messages.

## Demo

TODO: Insert demo video here

## Setup in 2 minutes

Open Command Palette with `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac).

Type: `Preferences: Open User Keyboard Shortcuts (JSON)`

Paste the code above into your `keybindings.json` file. If you have other shortcuts, add it to the array.

Save. Test it.

Make a small change to any file. Hit `Ctrl+Shift+C`. Watch it work.

## When to avoid autocommit

Skip autocommit for:

- Production fixes (manual messages matter)
- Open source contributions (maintainers expect thoughtful history)
- Complex refactors (need explanatory messages)
- Debugging sessions (document what you tried)

Use your judgment. If the commit needs context that AI can't provide, write it manually.

## What changes

You'll commit more often. Way more often.

No friction means no excuses. Your code gets safer. Debugging gets easier.

You stay in flow. No mental gear shifting between coding and writing. Your brain stays focused on solving problems.

Consistent commit history. Every commit gets a proper message. No more "wip" scattered through your git log.

After a week, you'll wonder how you coded without it.

## Final thoughts

Autocommit removes friction from development. When committing is effortless, you do it more. When you commit more, your code is safer.

Set up the shortcut. Use it for a week. You won't go back.

## References

- [Cursor AI Commit Message](https://docs.cursor.com/more/ai-commit-message)
- [Keybindings in VS Code](https://code.visualstudio.com/docs/configure/keybindings)
