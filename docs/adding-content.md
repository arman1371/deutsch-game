# Adding content

## A new level (e.g. A2.1)

A1.2 (`src/content/a1-2/`) is the worked example: ten units, one file per unit, plus `index.ts`.

1. Create `src/content/a2-1/` with `index.ts` that default-exports a `LevelContent`
   (copy the shape of `src/content/a1-2/index.ts`) and one file per unit (`u1-….ts`).
   Unit and activity ids are prefixed with the level id (`a2-1-…`); units pass `levelId: 'a2-1'`
   (`unit12()` in `a1-2/helpers.ts` shows how – copy or generalise it).
2. In `src/content/levels.ts` change the entry to `status: 'available'` and add
   `load: () => import('./a2-1')`.
3. Add two three-line test files that reuse the shared harnesses:
   - `content.test.ts` → `describeLevelContent('A2.1', content, 'a2-1')` (`src/test/contentSuite.ts`: schema,
     unique ids, canonical tags, unit shape, distinguishable items, level prefix),
   - `playability.test.tsx` → `describePlayability(content)` (`src/test/playability.tsx`: every activity is
     completed perfectly through the real engine).
4. Add new tags (topics/grammar points) to `src/content/tags.ts` first – filters pick them up automatically.
   The Library has a **Level** facet (`?lvl=a1-2`) that appears as soon as more than one level has units.
5. Add an e2e flow for the new level (`e2e/a1-2.spec.ts` plays one activity per engine and touches every
   unit) and add its pages to `e2e/a11y.spec.ts`. `e2e/helpers.ts` (`allActivities`) and `src/test/app.tsx`
   need the new pack added to their lists.

Everything else – Home, level page, library, review and progress – is driven by the catalogue.

### Authoring helpers (A1.2)

`src/content/a1-2/helpers.ts` keeps hand-written items short: `gap`/`typed` (gap fill), `q` (quiz question,
answer first), `sent`, `tf` (blitz), `say`/`you` (dialogue turns), `heard`/`dictation`, `sortItems`,
`table`/`sepTable`/`pastTable`/`customTable` (conjugation grids) and `readRound`/`setRound` (clock).
German grammar helpers live in `src/lib/german` (`conjugate`, `conjugatePreterite`, ordinals and dates in
`ordinals.ts`, prices and numbers in `numbers.ts`, clock time in `time.ts`) – generate forms from them
instead of typing them twice.

## A new unit

A unit file exports `{ unit, vocab, activities }` (`UnitContent`). Use the helpers in
`src/content/builders.ts`:

```ts
const vocab = vocabList(U, 'Food', [['Brot', 'bread', '🍞', 'das', 'Brote'], …]);

activity(U, 'flash', 'flashcards', { title, description, tags, difficulty: 1, estMinutes: 3 }, flashcards(vocab));
activity(U, 'quiz',  'quiz',       meta, quizEmoji(vocab));      // generated with seeded distractors
activity(U, 'gap',   'gapfill',    meta, { items: [ … ] });      // hand-written grammar
```

Rules enforced by tests: 10–16 activities per unit, at least 6 game types, first activity easy (difficulty 1),
last one titled "… challenge", ids prefixed with the unit id, item ids unique inside an activity.
Order = guided path order (easy → hard). Aim for vocabulary → listening/spelling → grammar → conversation → challenge.

## A new game engine

1. `src/content/gameTypes.ts`: add the type to `GAME_TYPES`.
2. `src/content/schema.ts`: add a config schema and its `z.object({ …base, gameType: z.literal('x'), config })`
   to `ActivitySchema`; add the items key in `src/content/items.ts` (needed for the Fehlerkiste).
3. `src/games/<engine>/<Engine>.tsx` implementing `GameProps<'x'>` (use `useSequence` + `GameFrame`), with
   `logic.ts` for anything non-trivial.
4. Register it in `src/games/registry.ts` (lazy import + help text) and `GAME_TYPE_LABELS` in `src/lib/filters.ts`.
5. Tests: `logic.test.ts`, `<Engine>.test.tsx`, a solver in `src/content/a1-1/playability.test.tsx`
   and `e2e/helpers.ts`, and an entry in `e2e/games.spec.ts`.

## Writing good German content

- Always show nouns with their article (`der Apfel`) and plural where useful.
- Wrong options should be _plausible_ mistakes (verb endings, der/die/das, word order).
- Give a one-line `explanation` for grammar items – it is shown after a mistake.
- Sentence builder: attach punctuation to the last word, keep capitalisation as in the sentence (grading
  ignores case/punctuation) and list other valid word orders in `alsoAccept`.
