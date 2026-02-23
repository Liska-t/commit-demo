# commit-demo

TLDR: 
## Single commit with explanation in commit msg body
- Esp. for squash and merge PRs: `fixup` all commits and edit msg to describe full set of changes.
- If something doesn't fit into the description of the change set, it should be a separate commit/PR
    (also prevents different change sets holding each other up.
    e.g. you have built a feature but tacked on a small fix which doesn't work, or vice-versa.
    Does everyone use `git stash`?)
- No different for quick fixes/changes. Make the change, PR, if further commits are necessary simply
  `amend` and `push -f`or `fixup` before merging.

## Integration Test
- Arbitrary change added on 2026-02-23 to validate GitHub MCP PR flow.
- Creating a /feature branch for the agent to spin off of

## Agent Workflow And Verified Commits To Main
1. The engineer creates or identifies the relevant `feature/` branch for the task.
2. The agent creates an `agent/` branch from that `feature/` branch.
3. The agent makes changes only on that `agent/` branch and opens a PR targeting the same `feature/` branch.
4. The engineer reviews and validates the PR changes before merging to the `feature/` branch.
5. When ready for `main`, changes are merged using squash-and-merge.

With this flow, `main` receives one squashed commit per reviewed PR, so only verified changes are merged into `main`.
