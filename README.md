# commit-demo

What git commands are you using regularly?

TLDR: 
## Single commit with explanation in commit msg body
- Esp. for squash and merge PRs: `fixup` all commits and edit msg to describe full set of changes.
- If something doesn't fit into the description of the change set, it should be a separate commit/PR
    (also prevents different change sets holding each other up.
    e.g. you have built a feature but tacked on a small fix which doesn't work, or vice-versa.
    Does everyone use `git stash`?)
- No different for quick fixes/changes. Make the change, PR, if further commits are necessary simply
  `amend` and `push -f`or `fixup` before merging.