# Adding content

## A new level (e.g. A1.2)

1. Create `src/content/a1-2/` with `index.ts` that default-exports a `LevelContent`
   (copy the shape of `src/content/a1-1/index.ts`) and one file per unit (`u1-….ts`).
2. In `src/content/levels.ts` change the A1.2 entry to `status: 'available'` and add
   `load: () => import('./a1-2')`.
3. Duplicate `src/content/a1-1/content.test.ts` and `playability.test.tsx`, point them at the new pack.
   They check schema validity, unique ids, canonical tags and that **every activity is completable**.
4. Add new tags (topics/grammar points) to `src/content/tags.ts` first – filters pick them up automatically.
5. Add an e2e flow if the level introduces new navigation.

Nothing else changes: Home, level page, library, review and progress are driven by the catalogue.

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
