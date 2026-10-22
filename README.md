# Deutsch Spielplatz 🎮🇩🇪

Interactive games for learning German – one level at a time. **A1.1** is complete (8 units, 114 games);
A1.2 and beyond plug in as content packs without touching the engines.

- **13 game engines**: flashcards, quiz, memory, listen & pick, spell it, sentence builder, gap fill,
  sort it (drag & drop), conjugation grid, blitz, dialogue, clock master, market stand.
- **Tagged and filterable**: filter the library by unit, skill, topic, grammar point, game type,
  difficulty and length – or play the guided **step-by-step path** of a unit. Any filtered list can be
  played as a queue.
- **Fehlerkiste**: wrong answers go into a Leitner box and come back for review.
- **No back end**: progress lives in the browser (`localStorage`), speech uses the browser's German voice.
- Installable PWA, works offline, dark mode, reduced-motion, keyboard and screen-reader friendly.

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
```

| Command                           | What it does                                                             |
| --------------------------------- | ------------------------------------------------------------------------ |
| `npm run dev`                     | Vite dev server                                                          |
| `npm run build`                   | type-check + production build into `dist/`                               |
| `npm run preview`                 | serve the build on :4173                                                 |
| `npm run lint` / `npm run format` | ESLint (incl. jsx-a11y) / Prettier                                       |
| `npm run typecheck`               | `tsc -b --noEmit`                                                        |
| `npm test`                        | unit + component + content tests (Vitest, jsdom)                         |
| `npm run test:coverage`           | same with coverage (thresholds enforced)                                 |
| `npm run test:e2e`                | Playwright on desktop **and** mobile viewports (builds + previews first) |
| `npm run check`                   | everything above, as in CI                                               |

First e2e run on a fresh machine: `npx playwright install chromium`. In sandboxes that ship their own
Chromium set `PW_CHROMIUM_PATH=/path/to/chrome` instead.

## Hosting: Cloudflare Pages (free)

See [docs/deployment.md](docs/deployment.md) for the full reasoning and steps. Short version:
connect the repo in the Cloudflare dashboard → Pages → build command `npm run build`, output directory
`dist`, environment variable `NODE_VERSION=22`. Every branch gets a preview URL automatically.

## Project layout

```
src/
  app/          router, layout (nav, skip link), theme hook, guided-path helpers
  pages/        Home, Level, Unit, Library, Play, Review, Settings, 404
  components/   UI kit (Button, Chip, Stars, SpeakButton, UmlautKeyboard …) + ActivityCard
  games/        one folder per engine, shared/ (GameFrame, useSequence, ChoiceList), registry.ts
  content/      schema (zod), tags, levels catalogue, builders, a1-1/ (units 1–8)
  lib/          rng, answer-check, filters, srs, scoring, tts, german/ (numbers, time, verbs, articles)
  store/        progress + settings (zustand, persisted), storage repository seam
  i18n/         UI strings (English) + t()
e2e/            Playwright specs (engines, flows, a11y/axe, keyboard, mobile)
docs/           adding-content.md, deployment.md, architecture.md
```

## Extending

- **New level (A1.2 …), unit, activity or game engine** → [docs/adding-content.md](docs/adding-content.md)
- **How it fits together** → [docs/architecture.md](docs/architecture.md)

Every new game or content pack needs unit tests; engines also need a component test and an e2e run.
The content tests (`src/content/a1-1/*.test.*`) automatically check schema validity, canonical tags,
unique ids and that **every activity can be completed perfectly** through its real engine.
