## Agent branch ruleset
- Never commit directly to any `feature/` branch.
- Never create new `feature/` branches.
- Agent work must use branches prefixed with `agent/`.
- Each `agent/` branch must be created from the target `feature/` branch.
- PRs from `agent/` branches must target that originating `feature/` branch.
- Under no circumstances may an agent edit or otherwise change any branch that is not prefixed with `agent/`.
- On `agent/` branches, the agent may work freely.
- If no relevant `feature/` branch is available, or if it is unclear which one should be used, the agent must ask the engineer to open one or clarify the correct target before proceeding.
- Human reviewers decide when to merge `agent/` PRs into `feature/` branches.
