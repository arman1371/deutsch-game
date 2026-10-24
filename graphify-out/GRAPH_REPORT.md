# Graph Report - lingoat.games  (2026-10-24)

## Corpus Check
- 300 files · ~282,707 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .properties 1, .css 1)

## Summary
- 1592 nodes · 4708 edges · 109 communities (102 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 61 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `870521c3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- q
- heard
- byDe
- forms.ts
- UnitContent
- B1.1 coverage and research doc
- ui.test.tsx
- numbers.ts
- schema.ts
- @testing-library/react
- a1-1/types.ts
- package.json
- progressStore.ts
- useSequence
- devDependencies
- LibraryPage.tsx
- react
- Spell.tsx
- content/hints.ts
- typed
- e2e/helpers.ts
- compilerOptions
- router.tsx
- lessons.ts
- Clock.tsx
- a1-2/index.ts
- b2-1/index.ts
- compilerOptions
- filters.ts
- rng.ts
- ContentProvider.tsx
- Sentence.tsx
- app.tsx
- u4-zahlen.ts
- Market.tsx
- scripts
- a2-2/index.ts
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- a2-1/index.ts
- Conjugation.tsx
- Conjugation.test.tsx
- u10-wissenschaft.ts
- builders.ts
- activity
- dependencies
- Architecture doc
- AppLayout.tsx
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- u3-woher.ts
- path.ts
- srs.ts
- ActivityCard.tsx
- i18n/index.ts
- graphify reference: query, path, explain
- items.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- e2e/tsconfig.json
- vite.config.ts
- u5-familie.ts
- graphify reference: add a URL and watch a folder
- a11y.spec.ts
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- README (Deutsch Spielplatz)
- Deployment doc
- u10-beruf.ts
- Button.tsx
- Adding content guide
- b1-1/index.ts
- Procedure: add a new level
- Code graph (Graphify)
- b1-2/index.ts
- u5-wohnung.ts
- a1-1/index.ts
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- playability.tsx
- u1-hallo.ts
- u3-wetter.ts
- u9-jobsuche.ts
- futur2Table
- FeedbackBanner.tsx
- u2-freizeit.ts
- u4-bahn.ts
- meta
- sortItems
- vocabList
- listen
- flashcards
- spell
- u11-unterwegs.ts
- u12-klima.ts
- u2-besitz.ts
- u3-wohlbefinden.ts
- u4-kommunikation.ts
- u5-teamgeist.ts
- u6-lebenswege.ts
- u9-medien.ts
- ref_content_tags
- UmlautKeyboard.tsx

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 91 edges
2. `activity()` - 84 edges
3. `vocabList()` - 79 edges
4. `heard()` - 78 edges
5. `flashcards()` - 77 edges
6. `meta()` - 75 edges
7. `gap()` - 75 edges
8. `byDe()` - 75 edges
9. `q()` - 74 edges
10. `sent()` - 74 edges

## Surprising Connections (you probably didn't know these)
- `Grammar` --references--> `statePassiveTable()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `Grammar` --references--> `futur2Table()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `Grammar` --references--> `k1Table()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `graphify trigger instructions (.claude/CLAUDE.md)` --conceptually_related_to--> `CLAUDE.md project notes`  [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md
- `13 game engines` --implements--> `Game engine contract (GameProps, useSequence, GameFrame)`  [INFERRED]
  README.md → docs/architecture.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (109 total, 7 thin omitted)

### Community 0 - "q"
Cohesion: 0.05
Nodes (42): q(), unit22(), bank, insurance, money, vocab, memories, stages (+34 more)

### Community 1 - "heard"
Cohesion: 0.06
Nodes (46): ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), chores, people, rules, vocab, ads (+38 more)

### Community 2 - "byDe"
Cohesion: 0.12
Nodes (22): dictation(), you(), unitB11(), events, phrases, vocab, environment, materials (+14 more)

### Community 3 - "forms.ts"
Cohesion: 0.06
Nodes (51): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+43 more)

### Community 4 - "UnitContent"
Cohesion: 0.33
Nodes (5): UnitContent, actions, devices, vocab, web

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.16
Nodes (14): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, B1.1 coverage and research doc, CEFR B1 global scale (Council of Europe), Goethe-Zertifikat B1 and word list, Menschen B1 (Hueber) (+6 more)

### Community 6 - "ui.test.tsx"
Cohesion: 0.21
Nodes (7): Card(), COLORS, Confetti(), ProgressBar(), Props, SpeakButton(), U

### Community 7 - "numbers.ts"
Cohesion: 0.12
Nodes (29): below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES, priceToGerman() (+21 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.07
Nodes (25): ref_test_render, ref_testing_library_jest_dom_vitest, @testing-library/react, vitest, answerRight(), answerWrong(), config, prompt() (+17 more)

### Community 10 - "a1-1/types.ts"
Cohesion: 0.21
Nodes (9): ref_test_factories, freizeit, hobbies, vocab, ContentIndex, EMPTY_INDEX, Activity, Unit (+1 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (26): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+18 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.12
Nodes (21): zustand, ref_zustand_middleware, ActivityProgress, initialProgress(), nextStreak(), ProgressActions, ProgressData, ProgressState (+13 more)

### Community 13 - "useSequence"
Cohesion: 0.13
Nodes (28): ref_components_ui_feedbackbanner, collectNpcLines(), Line, Scene, SceneView(), Gapfill(), Listen(), config (+20 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "LibraryPage.tsx"
Cohesion: 0.15
Nodes (15): ref_app_path, ref_components_activitycard, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_progressbar, ref_content_contentprovider, ref_content_gametypes, ref_content_levels (+7 more)

### Community 16 - "react"
Cohesion: 0.18
Nodes (12): ref_lib_sfx, react, Blitz(), buildDeck(), isMatch(), MemoryCard, Memory(), config (+4 more)

### Community 17 - "Spell.tsx"
Cohesion: 0.18
Nodes (11): ref_components_ui_button, ref_components_ui_speakbutton, ref_lib_tts, ref_store_settingsstore, Props, Flashcards(), useAutoSpeak(), LetterTile (+3 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.14
Nodes (17): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, hints, hints, hints, hints, adjectiveHint() (+9 more)

### Community 19 - "typed"
Cohesion: 0.07
Nodes (53): customTable(), pastTable(), Pronoun, Question, readRound(), sepTable(), setRound(), table() (+45 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.14
Nodes (21): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, REPRESENTATIVE, activity(), allActivities (+13 more)

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
Cohesion: 0.33
Nodes (9): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+1 more)

### Community 25 - "a1-2/index.ts"
Cohesion: 0.10
Nodes (23): ref_test_contentsuite, content, units, alltag, stadt, wohnen, arbeit, gesundheit (+15 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.12
Nodes (15): ref_test_playability, content, units, wissenschaft, unterwegs, klima, beziehungen, besitz (+7 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "ContentProvider.tsx"
Cohesion: 0.26
Nodes (12): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+4 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.22
Nodes (10): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT (+2 more)

### Community 32 - "app.tsx"
Cohesion: 0.16
Nodes (11): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+3 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.09
Nodes (13): ref_lib_german_numbers, num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen (+5 more)

### Community 34 - "Market.tsx"
Cohesion: 0.24
Nodes (10): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market() (+2 more)

### Community 35 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, check, deploy, dev, format, format:check, lint (+6 more)

### Community 36 - "a2-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, bankUnit, leben, arbeit, lernen, sportUnit, nachbarn (+6 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "a2-1/index.ts"
Cohesion: 0.25
Nodes (7): units, online, familie, family, givers, status, vocab

### Community 40 - "Conjugation.tsx"
Cohesion: 0.13
Nodes (17): ref_components_ui_confetti, ref_components_ui_stars, ref_components_ui_umlautkeyboard, ref_content_lessons, ref_games_shared_hints, ref_games_shared_usefocusonmount, ref_i18n, ref_lib_answer_check (+9 more)

### Community 41 - "Conjugation.test.tsx"
Cohesion: 0.29
Nodes (8): ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), gradeTable(), pronounOrder

### Community 42 - "u10-wissenschaft.ts"
Cohesion: 0.13
Nodes (13): unitB21(), alternatives, progress, research, vocab, phrases, politics, social (+5 more)

### Community 43 - "builders.ts"
Cohesion: 0.16
Nodes (11): mishaps, reactions, vocab, bonds, phrases, traits, vocab, quizEmoji() (+3 more)

### Community 44 - "activity"
Cohesion: 0.08
Nodes (51): gap(), say(), sent(), tf(), adjGap(), ads, describing, habits (+43 more)

### Community 45 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, motion, react, react-dom, react-router (+2 more)

### Community 46 - "Architecture doc"
Cohesion: 0.33
Nodes (9): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Architecture doc, Accessible by default, Seeded determinism (rng.ts), Testing pyramid (+1 more)

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

### Community 51 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 52 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 53 - "path.ts"
Cohesion: 0.33
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "ActivityCard.tsx"
Cohesion: 0.28
Nodes (6): ActivityCard(), Props, Chip(), ChipProps, Tag(), Stars()

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "items.ts"
Cohesion: 0.48
Nodes (5): getItems(), itemCount(), ITEMS_KEY, ItemsKey, withItems()

### Community 59 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.25
Nodes (7): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "vite.config.ts"
Cohesion: 0.33
Nodes (5): ref_node_url, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 62 - "u5-familie.ts"
Cohesion: 0.10
Nodes (17): people, phrases, vocab, wer, familie, female, male, relatives (+9 more)

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

### Community 73 - "README (Deutsch Spielplatz)"
Cohesion: 0.25
Nodes (8): Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts), Leitner SRS review (srs.ts), Code quality: SonarQube Cloud, One-time setup (by hand), README (Deutsch Spielplatz), Fehlerkiste (Leitner review box), 13 game engines

### Community 74 - "Deployment doc"
Cohesion: 0.29
Nodes (8): ProgressRepository (local-first storage seam), Deployment doc, Cloudflare Pages / Workers hosting, Alternative hosts (Vercel, Netlify, Render), PWA service worker and caching headers, wrangler.jsonc SPA config, index.html app shell, Favicon: white umlaut A on blue rounded square

### Community 75 - "u10-beruf.ts"
Cohesion: 0.25
Nodes (6): beruf, cv, PERFEKT, verbs, vocab, year()

### Community 76 - "Button.tsx"
Cohesion: 0.29
Nodes (6): Button(), Props, Size, SIZES, Variant, VARIANTS

### Community 77 - "Adding content guide"
Cohesion: 0.33
Nodes (6): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine, Procedure: add a new unit (builders.ts), Content is data, engines are generic

### Community 78 - "b1-1/index.ts"
Cohesion: 0.13
Nodes (14): content, units, feiern, umwelt, pannen, glueck, unterhaltung, gesundheit (+6 more)

### Community 79 - "Procedure: add a new level"
Cohesion: 0.40
Nodes (5): Integrity between levels (no repeated vocab), Procedure: add a new level, Lazy level content packs (levels.ts), Tags and filters, Levels A1.1 to B1.1

### Community 80 - "Code graph (Graphify)"
Cohesion: 0.40
Nodes (4): Code graph (Graphify), Locally, Repo settings, The workflow

### Community 81 - "b1-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, heimat, kunst, diskussion, kollegen, digital, konsum (+6 more)

### Community 82 - "u5-wohnung.ts"
Cohesion: 0.25
Nodes (6): ads, furniture, money, verbs, vocab, wohnung

### Community 83 - "a1-1/index.ts"
Cohesion: 0.38
Nodes (4): PLAYED, content, units, LevelContent

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "playability.tsx"
Cohesion: 0.15
Nodes (15): ref_content_schema, ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_games_types, ref_lib_scoring, @testing-library/user-event, levelFixture() (+7 more)

### Community 86 - "u1-hallo.ts"
Cohesion: 0.29
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 87 - "u3-wetter.ts"
Cohesion: 0.29
Nodes (6): colours, phrases, seasons, vocab, weather, wetter

### Community 88 - "u9-jobsuche.ts"
Cohesion: 0.29
Nodes (5): ads, jobs, jobsuche, reflexive, vocab

### Community 89 - "futur2Table"
Cohesion: 0.40
Nodes (6): Grammar, compound(), futur2Table(), k1Table(), konjunktiv1(), statePassiveTable()

### Community 90 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FeedbackBanner(), FeedbackKind, ICON, Props, STYLE

### Community 91 - "u2-freizeit.ts"
Cohesion: 0.33
Nodes (5): events, freizeit, plans, times, vocab

### Community 92 - "u4-bahn.ts"
Cohesion: 0.33
Nodes (5): adjectives, announce, bahn, station, vocab

### Community 93 - "meta"
Cohesion: 0.40
Nodes (4): meta(), dream, together, vocab

### Community 94 - "sortItems"
Cohesion: 0.40
Nodes (4): sortItems(), phrases, service, vocab

### Community 95 - "vocabList"
Cohesion: 0.40
Nodes (4): luck, news, vocab, vocabList()

### Community 96 - "listen"
Cohesion: 0.40
Nodes (4): opinions, screen, vocab, listen()

### Community 97 - "flashcards"
Cohesion: 0.40
Nodes (4): fitness, health, vocab, flashcards()

### Community 98 - "spell"
Cohesion: 0.40
Nodes (4): computer, help, vocab, spell()

### Community 99 - "u11-unterwegs.ts"
Cohesion: 0.40
Nodes (4): concession, mobility, travel, vocab

### Community 100 - "u12-klima.ts"
Cohesion: 0.40
Nodes (4): climate, globalisation, nominal, vocab

### Community 101 - "u2-besitz.ts"
Cohesion: 0.40
Nodes (4): diet, owning, reporting, vocab

### Community 102 - "u3-wohlbefinden.ts"
Cohesion: 0.40
Nodes (4): fitness, reasons, stress, vocab

### Community 103 - "u4-kommunikation.ts"
Cohesion: 0.40
Nodes (4): body, guesses, talk, vocab

### Community 104 - "u5-teamgeist.ts"
Cohesion: 0.40
Nodes (4): office, states, team, vocab

### Community 105 - "u6-lebenswege.ts"
Cohesion: 0.40
Nodes (4): education, timing, turns, vocab

### Community 106 - "u9-medien.ts"
Cohesion: 0.40
Nodes (4): digital, links, news, vocab

### Community 108 - "UmlautKeyboard.tsx"
Cohesion: 0.50
Nodes (3): KEYS, Props, UmlautKeyboard()

## Knowledge Gaps
- **667 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+662 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 773 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `app.tsx`, `Market.tsx`, `ui.test.tsx`, `Conjugation.tsx`, `package.json`, `Button.tsx`, `useSequence`, `AppLayout.tsx`, `LibraryPage.tsx`, `Spell.tsx`, `playability.tsx`, `router.tsx`, `ActivityCard.tsx`, `Clock.tsx`, `FeedbackBanner.tsx`, `ContentProvider.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `Grammar` connect `futur2Table` to `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Why does `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2` connect `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2` to `futur2Table`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _667 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `q` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Should `heard` be split into smaller, more focused modules?**
  _Cohesion score 0.05649350649350649 - nodes in this community are weakly interconnected._
- **Should `byDe` be split into smaller, more focused modules?**
  _Cohesion score 0.11822660098522167 - nodes in this community are weakly interconnected._