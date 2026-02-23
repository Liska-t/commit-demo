## Agent branch ruleset
- Never commit directly to any `feature/` branch.
- Never create new `feature/` branches.
- Agent work must use branches prefixed with `agents/`.
- Each `agents/` branch must be created from the target `feature/` branch.
- PRs from `agents/` branches must target that originating `feature/` branch.
- Human reviewers decide when to merge `agents/` PRs into `feature/` branches.
