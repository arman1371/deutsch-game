# Graph Report - lingoat.games  (2026-10-23)

## Corpus Check
- 260 files · ~213,802 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 5, .css 1, .jsonc 1)

## Summary
- 1394 nodes · 3761 edges · 73 communities (67 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 52 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `163a9037`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- gap
- UnitContent
- q
- forms.ts
- say
- B1.1 coverage and research doc
- ui.test.tsx
- numbers.ts
- schema.ts
- @testing-library/react
- builders.ts
- package.json
- progressStore.ts
- GameFrame.tsx
- devDependencies
- LibraryPage.tsx
- registry.ts
- useSequence
- content/hints.ts
- a2-2/helpers.ts
- a2-1.spec.ts
- compilerOptions
- router.tsx
- lessons.ts
- Clock.tsx
- a2-2.spec.ts
- react
- compilerOptions
- filters.ts
- rng.ts
- a1-1/types.ts
- Sentence.tsx
- app.tsx
- u4-zahlen.ts
- Market.tsx
- scripts
- a2-2/index.ts
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- a2-1/index.ts
- PlayPage.tsx
- Conjugation.tsx
- ref_content_schema
- a1-2/index.ts
- u7-tag.ts
- dependencies
- playability.tsx
- AppLayout.tsx
- answer-check.ts
- sfx.ts
- tts.test.ts
- e2e/helpers.ts
- u3-woher.ts
- path.ts
- srs.ts
- u8-einkaufen.ts
- i18n/index.ts
- graphify reference: query, path, explain
- items.ts
- Blitz.test.tsx
- e2e/tsconfig.json
- vite.config.ts
- a1-1/index.ts
- graphify reference: add a URL and watch a folder
- a11y.spec.ts
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 63 edges
2. `activity()` - 58 edges
3. `vocabList()` - 55 edges
4. `heard()` - 53 edges
5. `flashcards()` - 53 edges
6. `byDe()` - 51 edges
7. `spell()` - 50 edges
8. `meta()` - 49 edges
9. `gap()` - 49 edges
10. `q()` - 48 edges

## Surprising Connections (you probably didn't know these)
- `index.html app shell` --references--> `Favicon: white umlaut A on blue rounded square`  [EXTRACTED]
  index.html → public/favicon.svg
- `13 game engines` --implements--> `Game engine contract (GameProps, useSequence, GameFrame)`  [INFERRED]
  README.md → docs/architecture.md
- `graphify trigger instructions (.claude/CLAUDE.md)` --conceptually_related_to--> `CLAUDE.md project notes`  [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md
- `npm run check` --conceptually_related_to--> `CI workflow`  [INFERRED]
  CLAUDE.md → .github/workflows/ci.yml
- `Testing pyramid` --conceptually_related_to--> `CI workflow`  [INFERRED]
  docs/architecture.md → .github/workflows/ci.yml

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (73 total, 6 thin omitted)

### Community 0 - "gap"
Cohesion: 0.06
Nodes (56): gap(), meta(), sent(), sepTable(), sortItems(), tf(), adjGap(), unit22() (+48 more)

### Community 1 - "UnitContent"
Cohesion: 0.07
Nodes (52): ref_lib_german_ordinals, UnitContent, src_content_a1_2_helpers_activity, heard(), Pronoun, Question, Turn, unit12() (+44 more)

### Community 2 - "q"
Cohesion: 0.06
Nodes (53): dictation(), q(), unitB11(), units, events, feiern, phrases, vocab (+45 more)

### Community 3 - "forms.ts"
Cohesion: 0.06
Nodes (51): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+43 more)

### Community 4 - "say"
Cohesion: 0.07
Nodes (38): ref_lib_german_numbers, say(), table(), typed(), Blanks, unit21(), cv, PERFEKT (+30 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.06
Nodes (48): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities (+40 more)

### Community 6 - "ui.test.tsx"
Cohesion: 0.07
Nodes (27): ActivityCard(), Props, Button(), Props, Size, SIZES, Variant, VARIANTS (+19 more)

### Community 7 - "numbers.ts"
Cohesion: 0.11
Nodes (30): year(), below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES (+22 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.08
Nodes (19): ref_test_render, ref_testing_library_jest_dom_vitest, @testing-library/react, vitest, Dialogue(), config, BACK, config (+11 more)

### Community 10 - "builders.ts"
Cohesion: 0.09
Nodes (38): byes, feelings, hallo, hellos, polite, vocab, hobbies, vocab (+30 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (26): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+18 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.12
Nodes (21): zustand, ref_zustand_middleware, ActivityProgress, initialProgress(), nextStreak(), ProgressActions, ProgressData, ProgressState (+13 more)

### Community 13 - "GameFrame.tsx"
Cohesion: 0.13
Nodes (17): ref_components_ui_feedbackbanner, @dnd-kit/core, collectNpcLines(), Line, Scene, SceneView(), ChoiceList(), Props (+9 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "LibraryPage.tsx"
Cohesion: 0.14
Nodes (15): ref_app_path, ref_components_activitycard, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_progressbar, ref_content_contentprovider, ref_content_gametypes, ref_content_levels (+7 more)

### Community 16 - "registry.ts"
Cohesion: 0.15
Nodes (14): ref_lib_scoring, ref_lib_sfx, Blitz(), buildDeck(), isMatch(), MemoryCard, Memory(), config (+6 more)

### Community 17 - "useSequence"
Cohesion: 0.24
Nodes (16): ref_content_lessons, ref_i18n, ref_lib_answer_check, Gapfill(), Listen(), config, Quiz(), shuffledOptions() (+8 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.14
Nodes (18): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, hints, hints, hints, hints, adjectiveHint() (+10 more)

### Community 19 - "a2-2/helpers.ts"
Cohesion: 0.15
Nodes (22): customTable(), pastTable(), reflexiveTable(), Blanks, ENDING_ORDER, k2Table(), passiveTable(), reflexiveAccTable() (+14 more)

### Community 20 - "a2-1.spec.ts"
Cohesion: 0.19
Nodes (13): PLAYED, PLAYED, PLAYED, REPRESENTATIVE, activity(), allActivities, captureSpeech(), playPerfectly() (+5 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "router.tsx"
Cohesion: 0.12
Nodes (8): ref_react_dom_client, react-router, ref_react_router_dom, ErrorPage(), createAppRouter(), routes, src_index, router

### Community 23 - "lessons.ts"
Cohesion: 0.14
Nodes (17): Meta, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags() (+9 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-2.spec.ts"
Cohesion: 0.15
Nodes (13): PLAYED, ref_test_contentsuite, ref_test_playability, content, content, content, key(), REVIEW_WORDS (+5 more)

### Community 26 - "react"
Cohesion: 0.20
Nodes (10): ref_components_ui_button, ref_components_ui_speakbutton, ref_lib_tts, react, ref_store_settingsstore, Props, Flashcards(), useAutoSpeak() (+2 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "a1-1/types.ts"
Cohesion: 0.16
Nodes (19): ref_test_factories, ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent() (+11 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.24
Nodes (9): buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT, config (+1 more)

### Community 32 - "app.tsx"
Cohesion: 0.17
Nodes (9): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_test_app, allActivities (+1 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.14
Nodes (7): num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen

### Community 34 - "Market.tsx"
Cohesion: 0.24
Nodes (10): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market() (+2 more)

### Community 35 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, check, deploy, dev, format, format:check, lint (+6 more)

### Community 36 - "a2-2/index.ts"
Cohesion: 0.14
Nodes (13): units, bankUnit, leben, arbeit, lernen, sportUnit, nachbarn, kunst (+5 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "a2-1/index.ts"
Cohesion: 0.17
Nodes (11): units, beruf, online, freizeit, wetter, bahn, wohnung, aemter (+3 more)

### Community 40 - "PlayPage.tsx"
Cohesion: 0.21
Nodes (9): ref_components_ui_confetti, ref_components_ui_stars, ref_games_shared_hints, ref_games_shared_usefocusonmount, ref_store_progressstore, dueMistakeIds(), PlayView(), Props (+1 more)

### Community 41 - "Conjugation.tsx"
Cohesion: 0.32
Nodes (9): ref_components_ui_umlautkeyboard, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), gradeTable() (+1 more)

### Community 42 - "ref_content_schema"
Cohesion: 0.18
Nodes (7): ref_content_items, ref_content_schema, ref_content_tags, ref_games_types, @testing-library/user-event, levelFixture(), quizActivity()

### Community 43 - "a1-2/index.ts"
Cohesion: 0.17
Nodes (11): units, alltag, stadt, wohnen, arbeit, gesundheit, kleidung, reisen (+3 more)

### Community 44 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 45 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, motion, react, react-dom, react-router (+2 more)

### Community 46 - "playability.tsx"
Cohesion: 0.31
Nodes (9): ref_games_market_logic, ref_games_memory_logic, ref_games_registry, cont(), describePlayability(), prompt(), solve(), text() (+1 more)

### Community 47 - "AppLayout.tsx"
Cohesion: 0.29
Nodes (5): AppLayout(), NAV, Shell(), Probe(), useApplySettings()

### Community 48 - "answer-check.ts"
Cohesion: 0.44
Nodes (8): AnswerVerdict, checkAnswer(), checkNumeric(), foldUmlauts(), normalize(), normalizeDigits(), parsePriceToCents(), stripUmlauts()

### Community 49 - "sfx.ts"
Cohesion: 0.29
Nodes (7): AudioContextCtor, Note, playSfx(), resetSfx(), SFX, SfxKind, sfxSupported()

### Community 50 - "tts.test.ts"
Cohesion: 0.36
Nodes (6): pickGermanVoice(), speak(), SpeakOptions, stopSpeaking(), Utterance, ttsSupported()

### Community 51 - "e2e/helpers.ts"
Cohesion: 0.28
Nodes (6): lastSpoken(), norm(), prompt(), Solver, solvers, waitForSpoken()

### Community 52 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 53 - "path.ts"
Cohesion: 0.33
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "u8-einkaufen.ts"
Cohesion: 0.25
Nodes (5): einkaufen, food, genderItems, shopping, vocab

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "items.ts"
Cohesion: 0.48
Nodes (5): getItems(), itemCount(), ITEMS_KEY, ItemsKey, withItems()

### Community 59 - "Blitz.test.tsx"
Cohesion: 0.48
Nodes (6): answerRight(), answerWrong(), config, prompt(), statements, truth()

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "vite.config.ts"
Cohesion: 0.33
Nodes (5): ref_node_url, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 62 - "a1-1/index.ts"
Cohesion: 0.12
Nodes (14): units, people, phrases, vocab, wer, familie, female, male (+6 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Knowledge Gaps
- **557 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+552 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 663 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `app.tsx`, `Market.tsx`, `ui.test.tsx`, `PlayPage.tsx`, `Conjugation.tsx`, `ref_content_schema`, `package.json`, `GameFrame.tsx`, `playability.tsx`, `AppLayout.tsx`, `registry.ts`, `useSequence`, `LibraryPage.tsx`, `router.tsx`, `Clock.tsx`, `a1-1/types.ts`, `Sentence.tsx`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `app.tsx`, `Market.tsx`, `ui.test.tsx`, `Conjugation.tsx`, `ref_content_schema`, `package.json`, `GameFrame.tsx`, `playability.tsx`, `AppLayout.tsx`, `registry.ts`, `useSequence`, `router.tsx`, `Clock.tsx`, `Blitz.test.tsx`, `a1-1/types.ts`, `Sentence.tsx`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `@playwright/test` connect `a2-1.spec.ts` to `a11y.spec.ts`, `a2-2.spec.ts`, `e2e/helpers.ts`, `package.json`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _557 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `gap` be split into smaller, more focused modules?**
  _Cohesion score 0.06057945566286216 - nodes in this community are weakly interconnected._
- **Should `UnitContent` be split into smaller, more focused modules?**
  _Cohesion score 0.06656426011264721 - nodes in this community are weakly interconnected._
- **Should `q` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._