# Graph Report - lingoat.games  (2026-10-23)

## Corpus Check
- 255 files · ~204,631 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 4, .properties 1, .css 1)

## Summary
- 1338 nodes · 4476 edges · 72 communities (69 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 74 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `92d6e7d2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- u7-tag.ts
- a2-2/helpers.ts
- vocabList
- builders.ts
- heard
- @testing-library/react
- LibraryPage.tsx
- schema.ts
- activity
- e2e/helpers.ts
- react
- with
- Clock.tsx
- steps
- progressStore.ts
- useProgressStore
- useSequence
- content/hints.ts
- t
- compilerOptions
- conjugation.ts
- UnitContent
- playability.tsx
- forms.ts
- ContentProvider.tsx
- compilerOptions
- ui.test.tsx
- devDependencies
- GameFrame.tsx
- settingsStore.ts
- a1-1/index.ts
- PlayPage.tsx
- Sentence.tsx
- dependencies
- shared.test.tsx
- adjectives.ts
- package.json
- scripts
- a2-2/index.ts
- b1-1/index.ts
- a2-1/index.ts
- customTable
- router.tsx
- a1-2/index.ts
- README.md
- eslint.config.js
- app.tsx
- sfx.ts
- vite.config.ts
- answer-check.ts
- articles.ts
- u3-woher.ts
- Architecture
- B1.1 – syllabus research, coverage and overlap with A1.1–A2.2
- Deployment
- Deutsch Spielplatz 🎮🇩🇪
- u5-wohnung.ts
- i18n/index.ts
- A2.2 – syllabus coverage and overlap with A1.2 / A2.1
- a11y.spec.ts
- e2e/tsconfig.json
- u10-beruf.ts
- u3-wetter.ts
- u12-arbeit.ts
- u4-kunst.ts
- @testing-library/jest-dom
- .prettierrc.json
- hints.test.ts
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

## Communities (72 total, 3 thin omitted)

### Community 0 - "u7-tag.ts"
Cohesion: 0.05
Nodes (60): digitQuestion(), listenQuestion(), num(), NUMBERS, numberVocab, numCard(), phone(), sentenceFalse() (+52 more)

### Community 1 - "a2-2/helpers.ts"
Cohesion: 0.06
Nodes (47): q(), sepTable(), typed(), authorities, countries, forms, nat(), vocab (+39 more)

### Community 2 - "vocabList"
Cohesion: 0.09
Nodes (44): dictation(), gap(), say(), sent(), tf(), you(), moving, neighbours (+36 more)

### Community 3 - "builders.ts"
Cohesion: 0.08
Nodes (44): byes, feelings, hallo, hellos, polite, vocab, people, phrases (+36 more)

### Community 4 - "heard"
Cohesion: 0.07
Nodes (44): heard(), meta(), Pronoun, Question, readRound(), sortItems(), table(), Turn (+36 more)

### Community 5 - "@testing-library/react"
Cohesion: 0.06
Nodes (29): @testing-library/react, answerRight(), answerWrong(), config, prompt(), statements, truth(), config (+21 more)

### Community 6 - "LibraryPage.tsx"
Cohesion: 0.11
Nodes (33): GAME_TYPES, GameType, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags() (+25 more)

### Community 7 - "schema.ts"
Cohesion: 0.06
Nodes (35): path, Props, buildIndex(), ContentIndex, EMPTY_INDEX, Activity, base, BlitzConfig (+27 more)

### Community 8 - "activity"
Cohesion: 0.08
Nodes (30): freizeit, hobbies, table(), vocab, setRound(), Blanks, reflexiveTable(), unit21() (+22 more)

### Community 9 - "e2e/helpers.ts"
Cohesion: 0.13
Nodes (19): PLAYED, PLAYED, PLAYED, PLAYED, REPRESENTATIVE, activity(), allActivities, captureSpeech() (+11 more)

### Community 10 - "react"
Cohesion: 0.19
Nodes (18): react, Props, SpeakButton(), ConfigOf, Flashcards(), Loader, loaders, useAutoSpeak() (+10 more)

### Community 11 - "with"
Cohesion: 0.07
Nodes (29): SONAR_TOKEN, jobs, sonarcloud, verify, name, contents, pull-requests, branches (+21 more)

### Community 12 - "Clock.tsx"
Cohesion: 0.20
Nodes (21): distractors(), pick(), Blitz(), ClockMaster(), Stepper(), buildClockOptions(), sameTime(), TimeStyle (+13 more)

### Community 13 - "steps"
Cohesion: 0.07
Nodes (28): concurrency, cancel-in-progress, group, GRAPHIFY_FORCE, HAS_PAT, HEAD_REF, jobs, update (+20 more)

### Community 14 - "progressStore.ts"
Cohesion: 0.15
Nodes (17): accuracy(), GameResult, starsFor(), xpFor(), addMistake(), INTERVAL_DAYS, isDue(), Mistake (+9 more)

### Community 15 - "useProgressStore"
Cohesion: 0.25
Nodes (16): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, Card(), ProgressBar(), Props (+8 more)

### Community 16 - "useSequence"
Cohesion: 0.20
Nodes (17): A new game engine, Game engine contract, collectNpcLines(), Dialogue(), Line, Scene, SceneView(), buildDeck() (+9 more)

### Community 17 - "content/hints.ts"
Cohesion: 0.13
Nodes (17): A new unit, Adding content, Writing good German content, hints, hints, hints, Meta, ENDINGS (+9 more)

### Community 18 - "t"
Cohesion: 0.29
Nodes (16): Button(), KEYS, Props, UmlautKeyboard(), Conjugation(), gradeTable(), Gapfill(), Listen() (+8 more)

### Community 19 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 20 - "conjugation.ts"
Cohesion: 0.20
Nodes (18): Authoring helpers (A1.2, reused by A2.1 and A2.2), hints, conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, MIXED_PRETERITE (+10 more)

### Community 21 - "UnitContent"
Cohesion: 0.14
Nodes (13): UnitContent, pastTable(), jobs, vocab, work, memories, stages, story (+5 more)

### Community 22 - "playability.tsx"
Cohesion: 0.16
Nodes (14): LevelContent, adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents() (+6 more)

### Community 23 - "forms.ts"
Cohesion: 0.14
Nodes (17): CellVerdicts, conjugationWhy(), pronounOrder, Pronoun, PRONOUNS, AFTER, CASE_NAME, CASES (+9 more)

### Community 24 - "ContentProvider.tsx"
Cohesion: 0.20
Nodes (15): AppLayout(), Gate(), NAV, Shell(), ContentContext, ContentProvider(), Props, State (+7 more)

### Community 25 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 26 - "ui.test.tsx"
Cohesion: 0.22
Nodes (11): ActivityCard(), Chip(), ChipProps, Tag(), COLORS, Confetti(), Stars(), U (+3 more)

### Community 27 - "devDependencies"
Cohesion: 0.12
Nodes (17): devDependencies, jsdom@^29.1.1, @playwright/test@^1.64.1, prettier@^3.9.10, tailwindcss@^4.3.3, @testing-library/react@^16.3.3, @types/node@^26.6.5, typescript@~6.0 (+9 more)

### Community 28 - "GameFrame.tsx"
Cohesion: 0.15
Nodes (13): Props, Size, SIZES, Variant, VARIANTS, FeedbackBanner(), FeedbackKind, ICON (+5 more)

### Community 29 - "settingsStore.ts"
Cohesion: 0.25
Nodes (10): zustand, Probe(), useApplySettings(), localRepository, DEFAULT_SETTINGS, MotionSetting, resolveReducedMotion(), resolveTheme() (+2 more)

### Community 30 - "a1-1/index.ts"
Cohesion: 0.25
Nodes (8): content, units, content, content, REVIEW_WORDS, REVIEW_WORDS, LevelContentSchema, describeLevelContent()

### Community 31 - "PlayPage.tsx"
Cohesion: 0.23
Nodes (13): getItems(), itemCount(), ITEMS_KEY, ItemsKey, mapItems(), withItems(), GAME_HELP, gameComponents (+5 more)

### Community 32 - "Sentence.tsx"
Cohesion: 0.25
Nodes (10): buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, AnswerTile(), Sentence(), ALT (+2 more)

### Community 33 - "dependencies"
Cohesion: 0.13
Nodes (15): dependencies, @dnd-kit/core@^6.3.1, @dnd-kit/sortable@^10.0.0, @dnd-kit/utilities@^3.2.2, motion@^14.6.0, react@^19.3.1, react-dom@^19.3.1, react-router@^8.5.0 (+7 more)

### Community 34 - "shared.test.tsx"
Cohesion: 0.22
Nodes (10): @dnd-kit/core, ChoiceList(), Props, items, U, useNumberKeys(), Bucket, BucketTarget() (+2 more)

### Community 35 - "adjectives.ts"
Cohesion: 0.25
Nodes (13): adjGap(), adjectiveHint(), adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS (+5 more)

### Community 36 - "package.json"
Cohesion: 0.14
Nodes (13): description, eslint@^9.39.5, @testing-library/user-event@^14.6.8, @types/react@^19.3.0, @types/react-dom@^19.3.0, name, private, type (+5 more)

### Community 37 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, check, deploy, dev, format, format:check, lint (+6 more)

### Community 38 - "a2-2/index.ts"
Cohesion: 0.14
Nodes (13): units, bankUnit, leben, arbeit, lernen, sportUnit, nachbarn, kunst (+5 more)

### Community 39 - "b1-1/index.ts"
Cohesion: 0.14
Nodes (13): units, feiern, umwelt, pannen, glueck, unterhaltung, gesundheit, sprachen (+5 more)

### Community 40 - "a2-1/index.ts"
Cohesion: 0.15
Nodes (12): units, beruf, online, freizeit, wetter, bahn, wohnung, aemter (+4 more)

### Community 41 - "customTable"
Cohesion: 0.32
Nodes (12): A new level (e.g. B1.2), customTable(), k2Table(), passiveTable(), reflexiveAccTable(), reflexiveDativeTable(), compound(), futurTable() (+4 more)

### Community 42 - "router.tsx"
Cohesion: 0.27
Nodes (5): react-router, ErrorPage(), createAppRouter(), routes, router

### Community 43 - "a1-2/index.ts"
Cohesion: 0.17
Nodes (11): units, alltag, stadt, wohnen, arbeit, gesundheit, kleidung, reisen (+3 more)

### Community 44 - "README.md"
Cohesion: 0.18
Nodes (6): Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify), Locally, Repo settings, The PR workflow

### Community 45 - "eslint.config.js"
Cohesion: 0.18
Nodes (10): @eslint/js@^9.39.5, eslint-plugin-jsx-a11y@^6.10.2, eslint-plugin-react-hooks@^7.1.1, globals@^17.13.0, typescript-eslint@^8.72.0, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks (+2 more)

### Community 46 - "app.tsx"
Cohesion: 0.33
Nodes (9): createTestRouter(), content, content, activityById(), allActivities, allUnits, playQuiz(), renderApp() (+1 more)

### Community 47 - "sfx.ts"
Cohesion: 0.25
Nodes (8): played(), AudioContextCtor, Note, playSfx(), resetSfx(), SFX, SfxKind, sfxSupported()

### Community 48 - "vite.config.ts"
Cohesion: 0.20
Nodes (8): @tailwindcss/vite@^4.3.3, vite@^8.3.5, vite-plugin-pwa@^2.0.0, @vitejs/plugin-react@^6.1.2, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 49 - "answer-check.ts"
Cohesion: 0.44
Nodes (8): AnswerVerdict, checkAnswer(), checkNumeric(), foldUmlauts(), normalize(), normalizeDigits(), parsePriceToCents(), stripUmlauts()

### Community 50 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 51 - "u3-woher.ts"
Cohesion: 0.25
Nodes (7): countries, country(), languages, table(), vocab, woher, words

### Community 52 - "Architecture"
Cohesion: 0.29
Nodes (6): Architecture, Data flow, Principles, Tags and filters, Testing pyramid, ProgressRepository

### Community 53 - "B1.1 – syllabus research, coverage and overlap with A1.1–A2.2"
Cohesion: 0.29
Nodes (7): B1.1 – syllabus research, coverage and overlap with A1.1–A2.2, Communication goals, Engines, Grammar, How the units were chosen, Pronunciation, Sources

### Community 54 - "Deployment"
Cohesion: 0.29
Nodes (6): Alternative: classic Cloudflare Pages, CI, Deployment, Other hosts, Recommendation: Cloudflare Pages, Steps (Workers Builds – the current "Create" flow)

### Community 55 - "Deutsch Spielplatz 🎮🇩🇪"
Cohesion: 0.29
Nodes (7): Code graph (Graphify), Code quality, Deutsch Spielplatz 🎮🇩🇪, Extending, Hosting: Cloudflare Pages (free), Project layout, Quick start

### Community 56 - "u5-wohnung.ts"
Cohesion: 0.29
Nodes (5): ads, furniture, money, verbs, vocab

### Community 57 - "i18n/index.ts"
Cohesion: 0.33
Nodes (4): en, Strings, Leaves, StringKey

### Community 58 - "A2.2 – syllabus coverage and overlap with A1.2 / A2.1"
Cohesion: 0.33
Nodes (6): A2.2 – syllabus coverage and overlap with A1.2 / A2.1, Communication goals, Engines, Grammar, Pronunciation, Vocabulary topics

### Community 59 - "a11y.spec.ts"
Cohesion: 0.33
Nodes (3): PAGES, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "u10-beruf.ts"
Cohesion: 0.33
Nodes (4): cv, PERFEKT, verbs, vocab

### Community 62 - "u3-wetter.ts"
Cohesion: 0.33
Nodes (5): colours, phrases, seasons, vocab, weather

### Community 63 - "u12-arbeit.ts"
Cohesion: 0.33
Nodes (5): career, emergency, hospital, office, vocab

### Community 64 - "u4-kunst.ts"
Cohesion: 0.33
Nodes (5): adjectives, art, music, tickets, vocab

### Community 65 - "@testing-library/jest-dom"
Cohesion: 0.40
Nodes (4): @testing-library/jest-dom@^7.0.1, vitest@^5.0.5, @testing-library/jest-dom, vitest

### Community 66 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 67 - "hints.test.ts"
Cohesion: 0.40
Nodes (3): grammarQuiz(), ActivityOf, ActivitySchema

### Community 68 - "Deutsch Spielplatz – notes for Claude"
Cohesion: 0.50
Nodes (3): Commands, Deutsch Spielplatz – notes for Claude, Rules of this repo

## Knowledge Gaps
- **1 isolated node(s):** `../tsconfig.node.json`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 541 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@testing-library/react` connect `@testing-library/react` to `Sentence.tsx`, `@testing-library/jest-dom`, `shared.test.tsx`, `package.json`, `router.tsx`, `app.tsx`, `useSequence`, `t`, `playability.tsx`, `ContentProvider.tsx`, `ui.test.tsx`, `devDependencies`, `settingsStore.ts`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `../tsconfig.node.json` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `u7-tag.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05146242132543503 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Sentence.tsx`, `dependencies`, `shared.test.tsx`, `package.json`, `@testing-library/react`, `LibraryPage.tsx`, `router.tsx`, `Clock.tsx`, `app.tsx`, `useProgressStore`, `useSequence`, `t`, `playability.tsx`, `ContentProvider.tsx`, `ui.test.tsx`, `GameFrame.tsx`, `settingsStore.ts`, `PlayPage.tsx`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `a2-2/helpers.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05701754385964912 - nodes in this community are weakly interconnected._
- **Why does `Adding content` connect `content/hints.ts` to `useSequence`, `customTable`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `vocabList` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._