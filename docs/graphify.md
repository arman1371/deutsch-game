# Code graph (Graphify)

`graphify-out/` is a [Graphify](https://github.com/Graphify-Labs/graphify) knowledge graph of the codebase
(`graph.json`, `GRAPH_REPORT.md`, `graph.html`). AI assistants and `graphify query` / `path` / `explain`
read it, so it should always match the code.

## The PR workflow

`.github/workflows/graphify.yml` runs on every PR opened from a branch of this repo:

1. checks out the PR branch and installs the pinned `graphifyy` version from PyPI;
2. runs `graphify update .` (code-only AST extraction, no LLM, no API key; `GRAPHIFY_FORCE=1` so a PR
   that deletes code can shrink the graph);
3. runs `.github/scripts/graph-changed.sh`, which compares `graphify-out/` with the branch while ignoring
   what changes on every run (the commit hash in `graph.json`, the directory/date heading of the report);
4. if the graph really changed, pushes one commit `chore(graph): graphify update` to the PR branch.

It never loops: a run whose head commit is that bot commit stops straight away, and a run that finds no
change commits nothing. A newer push to the PR cancels the older run. PRs from forks and Dependabot are
skipped because their token cannot push.

Committed: `graph.json`, `GRAPH_REPORT.md`, `graph.html` and the small label files. Ignored (local
state only, see `.gitignore`): `cache/`, `manifest.json` (stores file mtimes, so it would change on
every checkout), `cost.json`, `*.pending.json`.

## Repo settings

- **Settings → Actions → General → Workflow permissions**: the workflow asks for `contents: write`
  itself, which works with the default settings. If the repo or org forces read-only tokens, allow
  "Read and write permissions".
- **`GRAPHIFY_TOKEN` secret (recommended)**: GitHub does not start workflows for pushes made with the
  default `GITHUB_TOKEN`, so without it CI and SonarCloud do not re-run on the bot commit and a branch
  ruleset that requires those checks would block the merge. Create a fine-grained personal access token
  limited to this repository with **Contents: read and write**, and save it as an Actions secret named
  `GRAPHIFY_TOKEN`. The bot commit then triggers CI, SonarCloud and the Cloudflare preview like any push.
  The Cloudflare preview builds on every push either way.
- Branch protection must allow pushes to PR branches from Actions (the default).

## Locally

```sh
pipx install graphifyy==0.9.95   # same version as the workflow
graphify update .
```

Keep the local version and the one pinned in the workflow in step, otherwise the two will keep rewriting
each other's output. `graphify hook install` rebuilds after each commit/checkout if you want that too.
