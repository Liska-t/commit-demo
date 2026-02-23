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
1. The engineer creates or identifies the relevant `feature/` branch for the task. If no obvious `feature/` branch exists, the agent must first prompt the engineer to create one or specify the correct existing branch.
2. The agent creates an `agent/` branch from that `feature/` branch.
3. The agent makes changes only on that `agent/` branch and opens a PR targeting the same `feature/` branch.
4. The engineer reviews and validates the PR changes before merging to the `feature/` branch.
5. When ready for `main`, changes are merged using squash-and-merge.

### What Counts As An Obvious `feature/` Branch
- The branch name starts with `feature/`.
- Its name clearly matches the current task scope (for example shared ticket ID or topic).
- There is no competing `feature/` branch that is equally plausible for the same task.
- If any ambiguity remains, the branch is not obvious and the agent must ask the engineer.

With this flow, `main` receives one squashed commit per reviewed PR, so only verified changes are merged into `main`.
