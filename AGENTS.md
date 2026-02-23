## Agent branch ruleset
- Never commit directly to any `feature/` branch.
- Never create new `feature/` branches.
- Agent work must use branches prefixed with `agent/`.
- Each `agent/` branch must be created from the target `feature/` branch.
- PRs from `agent/` branches must target that originating `feature/` branch.
- If no obvious `feature/` branch exists, or if more than one plausible `feature/` branch exists, the agent must ask the engineer to create or specify the correct branch before proceeding.
- An obvious `feature/` branch is one whose name clearly matches the task scope, with no competing branch that is equally plausible.
- Human reviewers decide when to merge `agent/` PRs into `feature/` branches.
