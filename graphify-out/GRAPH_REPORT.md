# Graph Report - lingoat.games  (2026-10-23)

## Corpus Check
- 255 files · ~204,682 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 4, .properties 1, .css 1)

## Summary
- 1339 nodes · 4477 edges · 62 communities (58 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 74 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `39faa8b5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- u4-zahlen.ts
- flashcards
- sent
- builders.ts
- heard
- @testing-library/react
- LibraryPage.tsx
- schema.ts
- UnitContent
- e2e/helpers.ts
- react
- with
- rng.ts
- steps
- progressStore.ts
- HomePage.tsx
- Dialogue.tsx
- content/hints.ts
- Gapfill.tsx
- compilerOptions
- conjugation.ts
- u7-tag.ts
- playability.tsx
- forms.ts
- Market.tsx
- compilerOptions
- t
- package.json
- GameFrame.tsx
- settingsStore.ts
- b1-1/content.test.ts
- PlayPage.tsx
- Sentence.tsx
- dependencies
- Button
- adjectives.ts
- u5-familie.ts
- scripts
- a2-2/index.ts
- typed
- a2-1/index.ts
- a2-2/helpers.ts
- router.tsx
- a1-2/index.ts
- README.md
- eslint.config.js
- app.tsx
- sfx.ts
- vite.config.ts
- u2-wer.ts
- articles.ts
- u3-woher.ts
- sounds.spec.ts
- u5-wuensche.ts
- a11y.spec.ts
- e2e/tsconfig.json
- @testing-library/jest-dom
- .prettierrc.json
- Deutsch Spielplatz – notes for Claude
- graph-changed.sh
- tsconfig.json

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 64 edges
2. `activity()` - 58 edges
3. `vocabList()` - 55 edges
4. `heard()` - 54 edges
5. `flashcards()` - 53 edges
6. `byDe()` - 51 edges
7. `spell()` - 50 edges
8. `gap()` - 49 edges
9. `q()` - 49 edges
10. `sent()` - 49 edges

## Surprising Connections (you probably didn't know these)
- `A new unit` --references--> `UnitContent`  [INFERRED]
  docs/adding-content.md → src/content/a1-1/types.ts
- `Authoring helpers (A1.2, reused by A2.1 and A2.2)` --references--> `typed()`  [INFERRED]
  docs/adding-content.md → src/content/a1-2/helpers.ts
- `Authoring helpers (A1.2, reused by A2.1 and A2.2)` --references--> `q()`  [INFERRED]
  docs/adding-content.md → src/content/a1-2/helpers.ts
- `Authoring helpers (A1.2, reused by A2.1 and A2.2)` --references--> `sent()`  [INFERRED]
  docs/adding-content.md → src/content/a1-2/helpers.ts
- `Authoring helpers (A1.2, reused by A2.1 and A2.2)` --references--> `tf()`  [INFERRED]
  docs/adding-content.md → src/content/a1-2/helpers.ts

## Import Cycles
- None detected.

## Communities (62 total, 4 thin omitted)

### Community 0 - "u4-zahlen.ts"
Cohesion: 0.07
Nodes (41): digitQuestion(), listenQuestion(), num(), NUMBERS, numberVocab, numCard(), phone(), sentenceFalse() (+33 more)

### Community 1 - "flashcards"
Cohesion: 0.06
Nodes (44): q(), sepTable(), you(), bank, insurance, money, vocab, memories (+36 more)

### Community 2 - "sent"
Cohesion: 0.07
Nodes (35): sent(), units, events, feiern, phrases, vocab, environment, materials (+27 more)

### Community 3 - "builders.ts"
Cohesion: 0.10
Nodes (32): byes, feelings, hallo, hellos, polite, vocab, learning, school (+24 more)

### Community 4 - "heard"
Cohesion: 0.07
Nodes (53): gap(), heard(), Pronoun, Question, say(), sortItems(), table(), tf() (+45 more)

### Community 5 - "@testing-library/react"
Cohesion: 0.07
Nodes (28): @testing-library/react, answerRight(), answerWrong(), config, prompt(), statements, truth(), config (+20 more)

### Community 6 - "LibraryPage.tsx"
Cohesion: 0.15
Nodes (25): GAME_TYPES, GameType, GROUP_LABELS, isTagId(), TagGroup, TagId, TagInfo, TAGS (+17 more)

### Community 7 - "schema.ts"
Cohesion: 0.05
Nodes (49): path, Props, ContentContext, ContentProvider(), Props, State, Probe(), Strict() (+41 more)

### Community 8 - "UnitContent"
Cohesion: 0.06
Nodes (38): UnitContent, meta(), cv, PERFEKT, verbs, vocab, actions, devices (+30 more)

### Community 9 - "e2e/helpers.ts"
Cohesion: 0.16
Nodes (20): PLAYED, PLAYED, PLAYED, PLAYED, REPRESENTATIVE, activity(), allActivities, captureSpeech() (+12 more)

### Community 10 - "react"
Cohesion: 0.21
Nodes (16): react, Props, SpeakButton(), ConfigOf, Listen(), Loader, loaders, useAutoSpeak() (+8 more)

### Community 11 - "with"
Cohesion: 0.07
Nodes (29): SONAR_TOKEN, jobs, sonarcloud, verify, name, contents, pull-requests, branches (+21 more)

### Community 12 - "rng.ts"
Cohesion: 0.27
Nodes (14): distractors(), pick(), Blitz(), shuffledOptions(), LetterTile, scrambleForItem(), scrambleLetters(), createRng() (+6 more)

### Community 13 - "steps"
Cohesion: 0.07
Nodes (29): concurrency, cancel-in-progress, group, GRAPHIFY_FORCE, HAS_PAT, HEAD_REF, jobs, update (+21 more)

### Community 14 - "progressStore.ts"
Cohesion: 0.15
Nodes (24): AppLayout(), Gate(), NAV, Shell(), accuracy(), GameResult, starsFor(), xpFor() (+16 more)

### Community 15 - "HomePage.tsx"
Cohesion: 0.22
Nodes (15): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, Card(), ProgressBar(), Props (+7 more)

### Community 16 - "Dialogue.tsx"
Cohesion: 0.15
Nodes (16): collectNpcLines(), Dialogue(), Line, Scene, SceneView(), buildDeck(), isMatch(), MemoryCard (+8 more)

### Community 17 - "content/hints.ts"
Cohesion: 0.23
Nodes (10): Writing good German content, hints, hints, ENDINGS, HintableItem, HintEntry, HintOverlay, verbForms() (+2 more)

### Community 18 - "Gapfill.tsx"
Cohesion: 0.12
Nodes (28): KEYS, Props, UmlautKeyboard(), Meta, ItemHint, LessonId, Conjugation(), config (+20 more)

### Community 19 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 20 - "conjugation.ts"
Cohesion: 0.15
Nodes (19): freizeit, hobbies, table(), vocab, conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f() (+11 more)

### Community 21 - "u7-tag.ts"
Cohesion: 0.12
Nodes (26): dayParts, days, listenTime(), routine, sepTable(), tag, timeWords, vocab (+18 more)

### Community 22 - "playability.tsx"
Cohesion: 0.24
Nodes (9): LevelContent, totalCents(), gameComponents, cont(), describePlayability(), prompt(), solve(), text() (+1 more)

### Community 23 - "forms.ts"
Cohesion: 0.19
Nodes (11): AFTER, CASE_NAME, CASES, contrastForms(), DEFINITE, describeForm(), EIN_ENDINGS, EIN_STEMS (+3 more)

### Community 24 - "Market.tsx"
Cohesion: 0.36
Nodes (6): adjust(), Basket, basketMatches(), OrderItem, Product, products

### Community 25 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 26 - "t"
Cohesion: 0.11
Nodes (23): ActivityCard(), Props, Size, SIZES, Variant, VARIANTS, Chip(), ChipProps (+15 more)

### Community 27 - "package.json"
Cohesion: 0.09
Nodes (30): description, devDependencies, eslint@^9.39.5, jsdom@^29.1.1, @playwright/test@^1.64.1, prettier@^3.9.10, tailwindcss@^4.3.3, @testing-library/react@^16.3.3 (+22 more)

### Community 28 - "GameFrame.tsx"
Cohesion: 0.31
Nodes (7): FeedbackBanner(), FeedbackKind, ICON, Props, STYLE, FooterProps, FrameProps

### Community 29 - "settingsStore.ts"
Cohesion: 0.25
Nodes (10): zustand, Probe(), useApplySettings(), localRepository, DEFAULT_SETTINGS, MotionSetting, resolveReducedMotion(), resolveTheme() (+2 more)

### Community 30 - "b1-1/content.test.ts"
Cohesion: 0.30
Nodes (6): content, content, REVIEW_WORDS, REVIEW_WORDS, LevelContentSchema, describeLevelContent()

### Community 31 - "PlayPage.tsx"
Cohesion: 0.15
Nodes (18): getItems(), itemCount(), ITEMS_KEY, ItemsKey, withItems(), BROAD, COVERS, isLessonId() (+10 more)

### Community 32 - "Sentence.tsx"
Cohesion: 0.51
Nodes (7): buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, AnswerTile(), Sentence()

### Community 33 - "dependencies"
Cohesion: 0.13
Nodes (15): dependencies, @dnd-kit/core@^6.3.1, @dnd-kit/sortable@^10.0.0, @dnd-kit/utilities@^3.2.2, motion@^14.6.0, react@^19.3.1, react-dom@^19.3.1, react-router@^8.5.0 (+7 more)

### Community 34 - "Button"
Cohesion: 0.19
Nodes (24): A new game engine, Game engine contract, @dnd-kit/core, Button(), ClockMaster(), Stepper(), Flashcards(), Gapfill() (+16 more)

### Community 35 - "adjectives.ts"
Cohesion: 0.25
Nodes (13): adjGap(), adjectiveHint(), adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS (+5 more)

### Community 36 - "u5-familie.ts"
Cohesion: 0.29
Nodes (5): familie, female, male, relatives, vocab

### Community 37 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, check, deploy, dev, format, format:check, lint (+6 more)

### Community 38 - "a2-2/index.ts"
Cohesion: 0.13
Nodes (14): hints, units, bankUnit, leben, arbeit, lernen, sportUnit, nachbarn (+6 more)

### Community 39 - "typed"
Cohesion: 0.18
Nodes (10): typed(), authorities, countries, forms, nat(), vocab, future, tech (+2 more)

### Community 40 - "a2-1/index.ts"
Cohesion: 0.13
Nodes (14): units, beruf, online, freizeit, wetter, bahn, wohnung, aemter (+6 more)

### Community 41 - "a2-2/helpers.ts"
Cohesion: 0.10
Nodes (40): A new level (e.g. B1.2), Authoring helpers (A1.2, reused by A2.1 and A2.2), customTable(), dictation(), pastTable(), readRound(), setRound(), Blanks (+32 more)

### Community 42 - "router.tsx"
Cohesion: 0.29
Nodes (5): react-router, ErrorPage(), createAppRouter(), routes, router

### Community 43 - "a1-2/index.ts"
Cohesion: 0.15
Nodes (12): hints, units, alltag, stadt, wohnen, arbeit, gesundheit, kleidung (+4 more)

### Community 44 - "README.md"
Cohesion: 0.04
Nodes (40): A2.2 – syllabus coverage and overlap with A1.2 / A2.1, Communication goals, Engines, Grammar, Pronunciation, Vocabulary topics, A new unit, Adding content (+32 more)

### Community 45 - "eslint.config.js"
Cohesion: 0.18
Nodes (10): @eslint/js@^9.39.5, eslint-plugin-jsx-a11y@^6.10.2, eslint-plugin-react-hooks@^7.1.1, globals@^17.13.0, typescript-eslint@^8.72.0, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks (+2 more)

### Community 46 - "app.tsx"
Cohesion: 0.33
Nodes (9): createTestRouter(), content, content, activityById(), allActivities, allUnits, playQuiz(), renderApp() (+1 more)

### Community 47 - "sfx.ts"
Cohesion: 0.31
Nodes (6): AudioContextCtor, Note, resetSfx(), SFX, SfxKind, sfxSupported()

### Community 48 - "vite.config.ts"
Cohesion: 0.20
Nodes (8): @tailwindcss/vite@^4.3.3, vite@^8.3.5, vite-plugin-pwa@^2.0.0, @vitejs/plugin-react@^6.1.2, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 49 - "u2-wer.ts"
Cohesion: 0.33
Nodes (5): people, phrases, row(), vocab, wer

### Community 50 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 51 - "u3-woher.ts"
Cohesion: 0.25
Nodes (7): countries, country(), languages, table(), vocab, woher, words

### Community 53 - "u5-wuensche.ts"
Cohesion: 0.40
Nodes (4): proverbs, time, vocab, wishes

### Community 59 - "a11y.spec.ts"
Cohesion: 0.33
Nodes (3): PAGES, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 65 - "@testing-library/jest-dom"
Cohesion: 0.40
Nodes (4): @testing-library/jest-dom@^7.0.1, vitest@^5.0.5, @testing-library/jest-dom, vitest

### Community 66 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "Deutsch Spielplatz – notes for Claude"
Cohesion: 0.50
Nodes (3): Commands, Deutsch Spielplatz – notes for Claude, Rules of this repo

## Knowledge Gaps
- **1 isolated node(s):** `../tsconfig.node.json`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 542 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Adding content` connect `README.md` to `a2-2/helpers.ts`, `Button`, `content/hints.ts`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **What connects `../tsconfig.node.json` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `u4-zahlen.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07312925170068027 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `@testing-library/react`, `LibraryPage.tsx`, `schema.ts`, `rng.ts`, `progressStore.ts`, `HomePage.tsx`, `Dialogue.tsx`, `Gapfill.tsx`, `playability.tsx`, `Market.tsx`, `t`, `package.json`, `GameFrame.tsx`, `settingsStore.ts`, `PlayPage.tsx`, `Sentence.tsx`, `dependencies`, `Button`, `router.tsx`, `app.tsx`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Should `flashcards` be split into smaller, more focused modules?**
  _Cohesion score 0.05870020964360587 - nodes in this community are weakly interconnected._
- **Why does `UnitContent` connect `UnitContent` to `u4-zahlen.ts`, `flashcards`, `sent`, `builders.ts`, `u5-familie.ts`, `heard`, `a2-2/index.ts`, `schema.ts`, `a2-1/index.ts`, `typed`, `a2-2/helpers.ts`, `README.md`, `u2-wer.ts`, `u3-woher.ts`, `conjugation.ts`, `u7-tag.ts`, `u5-wuensche.ts`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `sent` be split into smaller, more focused modules?**
  _Cohesion score 0.06767676767676768 - nodes in this community are weakly interconnected._