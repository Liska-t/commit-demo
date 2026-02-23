## Agent branch ruleset
- Never commit directly to any `feature/` branch.
- Never create new `feature/` branches.
- Agent work must use branches prefixed with `agent/`.
- Each `agent/` branch must be created from the target `feature/` branch.
- PRs from `agent/` branches must target that originating `feature/` branch.
- Human reviewers decide when to merge `agent/` PRs into `feature/` branches.
