# Code graph (Graphify)

`graphify-out/` is a [Graphify](https://github.com/Graphify-Labs/graphify) knowledge graph of the codebase
(`graph.json`, `GRAPH_REPORT.md`, `graph.html`). AI assistants and `graphify query` / `path` / `explain`
read it, so it should always match the code.

## The workflow

`.github/workflows/graphify.yml` runs after every push to `main` (and on demand via _Run workflow_):

1. checks out `main` and installs the pinned `graphifyy` version from PyPI;
2. runs `graphify update .` (code-only AST extraction, no LLM, no API key; `GRAPHIFY_FORCE=1` so a commit
   that deletes code can shrink the graph);
3. if Graphify changed `graphify-out/` (it leaves the files alone when the code graph is the same, e.g. after
   docs-only commits), pushes one commit `chore(graph): graphify update` to `main`.

PRs do not touch the graph, so it can lag one merge behind and PRs never conflict on `graph.json`. It never
loops: the bot commit only changes `graphify-out/`, which both this workflow and CI ignore (`paths-ignore`),
and the run also stops if the head commit is the bot commit. A newer push cancels a still-running older run (each run builds from the latest `main`, so nothing is lost).

Committed: `graph.json` and `GRAPH_REPORT.md`; everything else in `graphify-out/` is ignored (see `.gitignore`).

## Repo settings

- **Pushing to `main`**: if `main` is protected by a ruleset or branch protection (PR required, required
  checks), the bot's direct push is rejected unless it can bypass. Use a deploy key and add **Deploy keys**
  to the ruleset's bypass list (or exempt the PAT's owner).
- **`GRAPHIFY_DEPLOY_KEY` secret (recommended)**: create a key pair with
  `ssh-keygen -t ed25519 -N "" -C graphify-bot -f graphify_key`, add `graphify_key.pub` under
  **Settings → Deploy keys** with **Allow write access** ticked, and save the private `graphify_key` as an
  Actions secret named `GRAPHIFY_DEPLOY_KEY`. Delete the local key files afterwards. A fine-grained PAT
  (Contents: read and write) saved as `GRAPHIFY_TOKEN` works the same way.
- Without either secret the workflow falls back to `GITHUB_TOKEN`, which only works if `main` is
  unprotected and Workflow permissions allow writes.

## Locally

```sh
pipx install graphifyy==0.9.63   # same version as the workflow
graphify update .
```

Keep the local version and the one pinned in the workflow in step, otherwise the two will keep rewriting
each other's output. `graphify hook install` rebuilds after each commit/checkout if you want that too.
