# Architecture

## Principles

1. **Content is data, engines are generic.** A game is `{ gameType, config, tags, difficulty, … }`.
   The engine for `gameType` renders any config of that type.
2. **Levels are lazy content packs.** `src/content/levels.ts` lists levels; each `available` level has a
   `load()` that dynamically imports its pack (own chunk). A1.1, A1.2 and A2.1 are available; A2.2 is already in
   the catalogue as "coming soon".
3. **Everything is deterministic with a seed.** `?seed=` drives all shuffles and distractors
   (`src/lib/rng.ts`), which makes bugs reproducible and e2e tests stable.
4. **Local-first.** Progress/settings are zustand stores persisted through `ProgressRepository`
   (`src/store/repository.ts`). Swap it for a remote implementation to add sync.
5. **Accessible by default.** Real buttons/inputs, labelled groups, live regions for feedback,
   number-key shortcuts, 44 px targets, visible focus, no nested interactive controls, axe in CI.

## Data flow

```
levels.ts ──load()──▶ LevelContent {units, vocab, activities}
                          │ buildIndex()
                          ▼
              ContentProvider (useContent)
        ┌─────────────┼───────────────┐
     Unit page     Library          Home/Review
   (guided path)   (filters)       (continue, mistakes)
        └─────────────┼───────────────┘
                      ▼
              /play/:activityId?seed=&q=queue&review=1
                      │ gameComponents[gameType] (lazy)
                      ▼
        Engine({config, seed, onFinish}) ──GameResult──▶ progressStore.recordResult
                                                         (stars, XP, streak, Fehlerkiste)
```

- **Guided path** = activities of a unit in authoring order; the first unfinished one is "up next".
- **Queues** are plain URL state (`?q=id1,id2`), so a filtered library list, a unit path and a review
  session all use the same play flow.
- **Review**: `withItems(activity, mistakeIds)` replays only the failed items; Leitner boxes (1 → 3 → graduate)
  schedule them (`src/lib/srs.ts`).

## Game engine contract

```ts
interface GameProps<T extends GameType> {
  config: ConfigOf<T>; // validated by zod in tests
  seed: number;
  onFinish(result: { correct; total; played: string[]; mistakes: string[]; bonusXp? }): void;
}
```

Sequential engines use `useSequence` (shuffle, first-try verdicts, finish) and `GameFrame` / `FeedbackFooter`.
Every item has a stable `id`; that id is what the Fehlerkiste stores.

## Tags and filters

`src/content/tags.ts` is the single vocabulary (skill / topic / grammar). Filter facets: level, unit, skill,
topic, grammar, game type, difficulty, duration + free text. Within a facet options are OR-ed, across facets AND-ed
(`src/lib/filters.ts`). Filter state lives in the URL.

## Testing pyramid

- `src/lib/**`, `src/store/**`: pure unit tests.
- `src/games/**`: logic tests + component tests per engine (correct path, wrong path, keyboard).
- `src/content/**`: schema, ids, tags and **playability** – every activity is solved through the real engine.
  Both checks are shared harnesses (`src/test/contentSuite.ts`, `src/test/playability.tsx`) that each level
  pack calls with its content.
- `src/pages/pages.test.tsx`: whole app in jsdom with the real A1.1, A1.2 and A2.1 content.
- `e2e/`: Playwright on desktop + mobile: all engines, navigation, filters, persistence, review, keyboard, axe;
  `e2e/a1-2.spec.ts` and `e2e/a2-1.spec.ts` cover the level navigation, the level facet and one activity per engine and unit.
