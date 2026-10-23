# Code quality: SonarQube Cloud

Every push to `main` and every pull request is analysed on [SonarQube Cloud](https://sonarcloud.io)
(project key `lingoat.games`) by the **SonarCloud** job in `.github/workflows/ci.yml`:

1. `npm run test:coverage` runs Vitest with v8 coverage and writes `coverage/lcov.info`
   (reporter set in `vite.config.ts`).
2. `SonarSource/sonarqube-scan-action` reads `sonar-project.properties` and uploads the analysis with
   the `SONAR_TOKEN` repository secret.
3. `sonar.qualitygate.wait=true` makes the scanner wait for the quality gate, so a red gate fails the
   job and therefore the PR checks. SonarQube Cloud also decorates the PR with its summary comment.

What is analysed: `src/` as sources, `*.test.ts(x)`, `src/test/` and `e2e/` as tests. Coverage is unit
coverage only (Playwright does not feed it). The level packs under `src/content/<level>/` are excluded
from duplication detection because their repeated shape is learning data, not copied code.

PRs from forks (and Dependabot) get no secrets, so the job is skipped there instead of failing.

## One-time setup (by hand)

- **Organization key**: `sonar-project.properties` assumes `sonar.organization=arman1371`. If the
  organization on sonarcloud.io has a different key, change that line.
- **Automatic Analysis off**: SonarQube Cloud → project → Administration → Analysis Method → turn off
  Automatic Analysis. CI-based analysis and Automatic Analysis cannot run together (the scan fails).
- **PR comments**: the organization must be imported from GitHub (GitHub app "SonarQube Cloud" installed
  on the repo). Then the project is bound and PRs get the decoration comment automatically.
- **Block merging**: GitHub → Settings → Rules → Rulesets (or Branches → branch protection) for `main`
  → Require status checks to pass → add **SonarCloud** (and **verify**). Without this a red gate shows
  as a failed check but does not prevent the merge.
- **New code definition**: for the gate on PRs, "Previous version" or "Reference branch: main" both work;
  the default quality gate ("Sonar way") checks new code only: coverage ≥ 80 %, duplications ≤ 3 %, no
  new bugs, vulnerabilities or unreviewed security hotspots.
