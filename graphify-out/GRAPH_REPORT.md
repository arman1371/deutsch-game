# Graph Report - lingoat.games  (2026-10-24)

## Corpus Check
- 396 files · ~437,680 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .properties 1, .css 1)

## Summary
- 2048 nodes · 6872 edges · 146 communities (139 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 75 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d6b1d70d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- u6-feste.ts
- UnitContent
- meta
- forms.ts
- u1-stadt.ts
- B1.1 coverage and research doc
- ui.test.tsx
- u10-beruf.ts
- schema.ts
- @testing-library/react
- c1-1/index.ts
- package.json
- progressStore.ts
- tf
- devDependencies
- PlayPage.tsx
- sounds.test.tsx
- react
- content/hints.ts
- a1-2/helpers.ts
- e2e/helpers.ts
- compilerOptions
- c2-2/helpers.ts
- lessons.ts
- Clock.tsx
- a2-1/index.ts
- b2-1/index.ts
- compilerOptions
- filters.ts
- rng.ts
- levels.ts
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- market/logic.ts
- scripts
- u1-online.ts
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- playability.tsx
- b2-2/index.ts
- Conjugation.tsx
- dictation
- c2-1/index.ts
- b1-2/helpers.ts
- dependencies
- c1-2/index.ts
- router.tsx
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- table
- path.ts
- srs.ts
- c2-2/index.ts
- i18n/index.ts
- graphify reference: query, path, explain
- gap
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- e2e/tsconfig.json
- vite.config.ts
- u5-familie.ts
- graphify reference: add a URL and watch a folder
- quizEmoji
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- README (Deutsch Spielplatz)
- Deployment doc
- a2-2/index.ts
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- b1-1/index.ts
- Architecture doc
- Code graph (Graphify)
- b1-2/index.ts
- sent
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- u8-einkaufen.ts
- u1-hallo.ts
- u5-wohnung.ts
- a11y.spec.ts
- registry.ts
- spell
- listen
- c1-2/helpers.ts
- say
- u1-glueck.ts
- a2-2/helpers.ts
- u2-wohnen.ts
- you
- memory
- flashcards
- u12-klima.ts
- activity
- u3-wohlbefinden.ts
- unit
- u5-teamgeist.ts
- hint
- u9-medien.ts
- content/index.ts
- u3-woher.ts
- u5-kleidung.ts
- heard
- a2-1/helpers.ts
- u6-reisen.ts
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- u7-feste.ts
- b2-1/helpers.ts
- builders.ts
- setup.ts
- u1-kunst.ts
- items.ts
- a1-1/types.ts
- typed
- u2-literatur.ts
- u4-recht.ts
- c2-2/u6-engagement.ts
- u5-staat.ts
- u7-klima.ts
- u8-nuancen.ts
- u3-wetter.ts
- u9-jobsuche.ts
- u4-kunst.ts
- u8-werbung.ts
- u2-freizeit.ts
- u4-bahn.ts
- u7-post.ts
- u2-besitz.ts
- Quiz.test.tsx
- u5-regeln.ts
- u9-stadt-land.ts
- u10-team.ts
- u11-nachhaltigkeit.ts
- u12-vortrag.ts
- u3-recht.ts
- u4-psychologie.ts
- u7-kino.ts
- u8-geschaeft.ts

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 154 edges
2. `activity()` - 143 edges
3. `heard()` - 136 edges
4. `meta()` - 134 edges
5. `gap()` - 133 edges
6. `q()` - 132 edges
7. `tf()` - 132 edges
8. `say()` - 132 edges
9. `you()` - 132 edges
10. `vocabList()` - 132 edges

## Surprising Connections (you probably didn't know these)
- `Grammar` --references--> `statePassiveTable()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `13 game engines` --implements--> `Game engine contract (GameProps, useSequence, GameFrame)`  [INFERRED]
  README.md → docs/architecture.md
- `index.html app shell` --references--> `Favicon: white umlaut A on blue rounded square`  [EXTRACTED]
  index.html → public/favicon.svg
- `graphify trigger instructions (.claude/CLAUDE.md)` --conceptually_related_to--> `CLAUDE.md project notes`  [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (146 total, 7 thin omitted)

### Community 0 - "u6-feste.ts"
Cohesion: 0.25
Nodes (7): etiquette, feste, festivals, people, restaurant, values, vocab

### Community 1 - "UnitContent"
Cohesion: 0.08
Nodes (42): UnitContent, byDe(), Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table(), k2ModalPastTable() (+34 more)

### Community 2 - "meta"
Cohesion: 0.07
Nodes (36): meta(), q(), sortItems(), events, phrases, vocab, environment, materials (+28 more)

### Community 3 - "forms.ts"
Cohesion: 0.06
Nodes (54): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+46 more)

### Community 4 - "u1-stadt.ts"
Cohesion: 0.18
Nodes (10): readRound(), setRound(), places, vocab, ways, calls, contact, letters (+2 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "ui.test.tsx"
Cohesion: 0.06
Nodes (42): ActivityCard(), Props, Button(), Props, Size, SIZES, Variant, VARIANTS (+34 more)

### Community 7 - "u10-beruf.ts"
Cohesion: 0.09
Nodes (35): beruf, cv, PERFEKT, verbs, vocab, year(), below100(), below1000() (+27 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.06
Nodes (28): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+20 more)

### Community 10 - "c1-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, wirtschaft, gesellschaft, zeit, digital, sprache, manieren (+5 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.12
Nodes (21): zustand, ref_zustand_middleware, ActivityProgress, initialProgress(), nextStreak(), ProgressActions, ProgressData, ProgressState (+13 more)

### Community 13 - "tf"
Cohesion: 0.07
Nodes (43): ref_lib_german_konjunktiv1, tf(), vocabList(), Blanks, k1PerfectTable(), k1Table(), lx(), sixForms() (+35 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.10
Nodes (27): ref_app_path, ref_components_activitycard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_progressbar, ref_components_ui_stars (+19 more)

### Community 16 - "sounds.test.tsx"
Cohesion: 0.11
Nodes (19): ref_lib_sfx, ref_test_render, Blitz(), answerRight(), answerWrong(), config, prompt(), statements (+11 more)

### Community 17 - "react"
Cohesion: 0.12
Nodes (36): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_lib_answer_check, ref_lib_tts, react, collectNpcLines(), Line (+28 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.14
Nodes (16): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, ref_test_factories, hints, hints, hints, adjectiveHint() (+8 more)

### Community 19 - "a1-2/helpers.ts"
Cohesion: 0.24
Nodes (15): customTable(), Pronoun, Question, Turn, k2Table(), passiveTable(), reflexiveAccTable(), Blanks (+7 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.12
Nodes (30): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+22 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "c2-2/helpers.ts"
Cohesion: 0.20
Nodes (14): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+6 more)

### Community 23 - "lessons.ts"
Cohesion: 0.14
Nodes (17): Meta, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags() (+9 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.08
Nodes (37): ref_test_contentsuite, content, units, alltag, stadt, arbeit, gesundheit, termine (+29 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.13
Nodes (14): content, units, wissenschaft, unterwegs, klima, beziehungen, besitz, wohlbefinden (+6 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "levels.ts"
Cohesion: 0.27
Nodes (11): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+3 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.22
Nodes (10): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT (+2 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.14
Nodes (7): num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen

### Community 34 - "market/logic.ts"
Cohesion: 0.20
Nodes (10): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market() (+2 more)

### Community 35 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, check, deploy, dev, format, format:check, lint (+6 more)

### Community 36 - "u1-online.ts"
Cohesion: 0.18
Nodes (9): unit21(), actions, devices, vocab, web, family, givers, status (+1 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "playability.tsx"
Cohesion: 0.27
Nodes (10): ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_lib_german_numbers, cont(), describePlayability(), prompt(), solve() (+2 more)

### Community 40 - "b2-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, stadt, druck, netz, beziehungen, ernaehrung, studium (+6 more)

### Community 41 - "Conjugation.tsx"
Cohesion: 0.21
Nodes (13): ref_content_lessons, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), gradeTable() (+5 more)

### Community 42 - "dictation"
Cohesion: 0.13
Nodes (13): dictation(), concession, mobility, travel, vocab, body, guesses, talk (+5 more)

### Community 43 - "c2-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, sprache, arbeit, wirtschaft, digitalUnit, ki, medizin (+5 more)

### Community 44 - "b1-2/helpers.ts"
Cohesion: 0.11
Nodes (18): Blanks, compound(), passivePastTable(), passivePerfektTable(), SixForms, unitB12(), europe, home (+10 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "c1-2/index.ts"
Cohesion: 0.11
Nodes (18): earlierLevels, key(), REVIEW_WORDS, content, units, team10, nachhaltigkeit, vortrag (+10 more)

### Community 47 - "router.tsx"
Cohesion: 0.09
Nodes (13): ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout(), NAV, Shell(), ErrorPage(), createAppRouter() (+5 more)

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

### Community 52 - "table"
Cohesion: 0.13
Nodes (13): table(), bank, insurance, money, vocab, proverbs, time, vocab (+5 more)

### Community 53 - "path.ts"
Cohesion: 0.33
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "c2-2/index.ts"
Cohesion: 0.20
Nodes (9): units, literatur, recht, engagement, argument, communicationTags, redemittel, stellung (+1 more)

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "gap"
Cohesion: 0.18
Nodes (11): gap(), adjGap(), consumer, opinions, vocab, courses, recommend, vocab (+3 more)

### Community 59 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.22
Nodes (8): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "vite.config.ts"
Cohesion: 0.33
Nodes (5): ref_node_url, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 62 - "u5-familie.ts"
Cohesion: 0.10
Nodes (15): people, phrases, vocab, wer, familie, female, male, relatives (+7 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "quizEmoji"
Cohesion: 0.22
Nodes (7): debate, phrases, vocab, computer, help, vocab, quizEmoji()

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
Cohesion: 0.18
Nodes (12): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts), Leitner SRS review (srs.ts), Code quality: SonarQube Cloud (+4 more)

### Community 74 - "Deployment doc"
Cohesion: 0.29
Nodes (8): ProgressRepository (local-first storage seam), Deployment doc, Cloudflare Pages / Workers hosting, Alternative hosts (Vercel, Netlify, Render), PWA service worker and caching headers, wrangler.jsonc SPA config, index.html app shell, Favicon: white umlaut A on blue rounded square

### Community 75 - "a2-2/index.ts"
Cohesion: 0.14
Nodes (13): hints, units, bankUnit, leben, arbeit, lernen, sportUnit, nachbarn (+5 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.18
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "b1-1/index.ts"
Cohesion: 0.14
Nodes (13): units, feiern, umwelt, pannen, glueck, unterhaltung, gesundheit, sprachen (+5 more)

### Community 79 - "Architecture doc"
Cohesion: 0.21
Nodes (13): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Procedure: add a new unit (builders.ts), Architecture doc, Accessible by default, Content is data, engines are generic (+5 more)

### Community 80 - "Code graph (Graphify)"
Cohesion: 0.40
Nodes (4): Code graph (Graphify), Locally, Repo settings, The workflow

### Community 81 - "b1-2/index.ts"
Cohesion: 0.10
Nodes (15): ref_test_playability, units, heimat, kunst, diskussion, kollegen, digital, konsum (+7 more)

### Community 82 - "sent"
Cohesion: 0.18
Nodes (10): sent(), reflexiveTable(), feelings, sport, verbs, vocab, moving, neighbours (+2 more)

### Community 83 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "u8-einkaufen.ts"
Cohesion: 0.25
Nodes (5): einkaufen, food, genderItems, shopping, vocab

### Community 86 - "u1-hallo.ts"
Cohesion: 0.29
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 87 - "u5-wohnung.ts"
Cohesion: 0.25
Nodes (6): ads, furniture, money, verbs, vocab, wohnung

### Community 89 - "registry.ts"
Cohesion: 0.24
Nodes (8): ref_content_gametypes, ref_content_schema, GAME_HELP, gameComponents, gameLoaders, Loader, levelFixture(), quizActivity()

### Community 90 - "spell"
Cohesion: 0.22
Nodes (7): eating, shopping, vocab, eras, resistance, vocab, spell()

### Community 91 - "listen"
Cohesion: 0.20
Nodes (8): reviews, theatre, vocab, alternatives, progress, research, vocab, listen()

### Community 92 - "c1-2/helpers.ts"
Cohesion: 0.12
Nodes (16): unitC12(), debts, payments, vocab, food, medicine, vocab, city (+8 more)

### Community 93 - "say"
Cohesion: 0.18
Nodes (9): say(), chores, people, rules, vocab, bonds, phrases, traits (+1 more)

### Community 94 - "u1-glueck.ts"
Cohesion: 0.18
Nodes (9): pastTable(), memories, stages, story, vocab, unitB11(), luck, news (+1 more)

### Community 95 - "a2-2/helpers.ts"
Cohesion: 0.20
Nodes (9): Blanks, ENDING_ORDER, reflexiveDativeTable(), SixForms, career, emergency, hospital, office (+1 more)

### Community 96 - "u2-wohnen.ts"
Cohesion: 0.25
Nodes (8): ref_lib_german_ordinals, ads, euro(), furniture, rent(), rooms, vocab, wohnen

### Community 97 - "you"
Cohesion: 0.22
Nodes (7): you(), bonds, diversity, vocab, claims, service, vocab

### Community 98 - "memory"
Cohesion: 0.12
Nodes (17): green, mobility, vocab, decide, stress, vocab, law, media (+9 more)

### Community 99 - "flashcards"
Cohesion: 0.22
Nodes (7): jobs, vocab, work, skills, varieties, vocab, flashcards()

### Community 100 - "u12-klima.ts"
Cohesion: 0.40
Nodes (4): climate, globalisation, nominal, vocab

### Community 101 - "activity"
Cohesion: 0.22
Nodes (7): body, health, vocab, art, stage, vocab, activity()

### Community 102 - "u3-wohlbefinden.ts"
Cohesion: 0.40
Nodes (4): fitness, reasons, stress, vocab

### Community 103 - "unit"
Cohesion: 0.22
Nodes (8): unit22(), exams, problems, tips, vocab, unitB21(), unitB22(), unit()

### Community 104 - "u5-teamgeist.ts"
Cohesion: 0.40
Nodes (4): office, states, team, vocab

### Community 105 - "hint"
Cohesion: 0.18
Nodes (9): hint(), education, timing, turns, vocab, defects, market, rules (+1 more)

### Community 106 - "u9-medien.ts"
Cohesion: 0.40
Nodes (4): digital, links, news, vocab

### Community 107 - "content/index.ts"
Cohesion: 0.33
Nodes (7): VocabList, VocabPathOptions, buildIndex(), ContentIndex, EMPTY_INDEX, Activity, Vocab

### Community 108 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 109 - "u5-kleidung.ts"
Cohesion: 0.25
Nodes (7): src_content_a1_2_helpers_activity, clothes, colours, kleidung, priceHeard(), shop, vocab

### Community 110 - "heard"
Cohesion: 0.29
Nodes (7): heard(), aemter, feeHeard(), forms, formWords, service, vocab

### Community 111 - "a2-1/helpers.ts"
Cohesion: 0.29
Nodes (6): sepTable(), Blanks, learning, school, subjects, vocab

### Community 112 - "u6-reisen.ts"
Cohesion: 0.25
Nodes (7): unit12(), hotel, reisen, travel, vocab, weather, weatherTalk

### Community 113 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 114 - "u7-feste.ts"
Cohesion: 0.25
Nodes (7): dateHeard(), DM, feiern, feste, months, phrases, vocab

### Community 115 - "b2-1/helpers.ts"
Cohesion: 0.36
Nodes (7): Blanks, compound(), futur2Table(), k1Table(), konjunktiv1(), SixForms, statePassiveTable()

### Community 116 - "builders.ts"
Cohesion: 0.25
Nodes (6): fitness, medicine, vocab, QuizQuestion, VocabRow, src_content_schema_gametype

### Community 118 - "u1-kunst.ts"
Cohesion: 0.25
Nodes (7): withLesson(), betrieb, grammarTags, kunst, LESSON, urteil, vocab

### Community 119 - "items.ts"
Cohesion: 0.39
Nodes (6): getItems(), itemCount(), ITEMS_KEY, ItemsKey, mapItems(), withItems()

### Community 120 - "a1-1/types.ts"
Cohesion: 0.29
Nodes (3): freizeit, hobbies, vocab

### Community 121 - "typed"
Cohesion: 0.33
Nodes (6): typed(), authorities, countries, forms, nat(), vocab

### Community 122 - "u2-literatur.ts"
Cohesion: 0.29
Nodes (6): unitC22(), buch, grammarTags, kritik, LESSON, vocab

### Community 123 - "u4-recht.ts"
Cohesion: 0.29
Nodes (6): vocabPath(), gericht, grammarTags, LESSON, verfahren, vocab

### Community 124 - "c2-2/u6-engagement.ts"
Cohesion: 0.29
Nodes (6): withWhy(), gesellschaft, grammarTags, LESSON, verben, vocab

### Community 125 - "u5-staat.ts"
Cohesion: 0.29
Nodes (6): debatte, grammarTags, LESSON, staat, staatPolitik, vocab

### Community 126 - "u7-klima.ts"
Cohesion: 0.29
Nodes (6): grammarTags, handeln, klima, LESSON, vocab, welt

### Community 127 - "u8-nuancen.ts"
Cohesion: 0.29
Nodes (6): grammarTags, LESSON, nuancen, redewendungen, stil, vocab

### Community 128 - "u3-wetter.ts"
Cohesion: 0.33
Nodes (5): colours, phrases, seasons, vocab, weather

### Community 129 - "u9-jobsuche.ts"
Cohesion: 0.33
Nodes (4): ads, jobs, reflexive, vocab

### Community 130 - "u4-kunst.ts"
Cohesion: 0.33
Nodes (5): adjectives, art, music, tickets, vocab

### Community 131 - "u8-werbung.ts"
Cohesion: 0.33
Nodes (5): ads, describing, habits, proscons, vocab

### Community 132 - "u2-freizeit.ts"
Cohesion: 0.40
Nodes (4): events, plans, times, vocab

### Community 133 - "u4-bahn.ts"
Cohesion: 0.40
Nodes (4): adjectives, announce, station, vocab

### Community 134 - "u7-post.ts"
Cohesion: 0.40
Nodes (4): mobile, phone, post, vocab

### Community 135 - "u2-besitz.ts"
Cohesion: 0.40
Nodes (4): diet, owning, reporting, vocab

### Community 136 - "Quiz.test.tsx"
Cohesion: 0.40
Nodes (3): ANSWER, config, WRONG

### Community 137 - "u5-regeln.ts"
Cohesion: 0.50
Nodes (3): phrases, rules, vocab

### Community 138 - "u9-stadt-land.ts"
Cohesion: 0.50
Nodes (3): opinions, places, vocab

### Community 139 - "u10-team.ts"
Cohesion: 0.50
Nodes (3): conflict, team, vocab

### Community 140 - "u11-nachhaltigkeit.ts"
Cohesion: 0.50
Nodes (3): farming, sustain, vocab

### Community 141 - "u12-vortrag.ts"
Cohesion: 0.50
Nodes (3): discuss, present, vocab

### Community 142 - "u3-recht.ts"
Cohesion: 0.50
Nodes (3): court, rules, vocab

### Community 143 - "u4-psychologie.ts"
Cohesion: 0.50
Nodes (3): claims, mind, vocab

### Community 144 - "u7-kino.ts"
Cohesion: 0.50
Nodes (3): art, film, vocab

### Community 145 - "u8-geschaeft.ts"
Cohesion: 0.50
Nodes (3): business, culture, vocab

## Knowledge Gaps
- **912 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+907 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1021 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `README (Deutsch Spielplatz)` connect `README (Deutsch Spielplatz)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Deployment doc`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `C2.1 – syllabus research, coverage and overlap with A1.1–C1.2`, `Architecture doc`, `Code graph (Graphify)`, `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `C2.2 – syllabus research, coverage and overlap with A1.1–C2.1`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `ui.test.tsx`, `playability.tsx`, `Conjugation.tsx`, `@testing-library/react`, `package.json`, `router.tsx`, `sounds.test.tsx`, `PlayPage.tsx`, `Clock.tsx`, `registry.ts`, `levels.ts`, `Sentence.tsx`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `market/logic.ts`, `ui.test.tsx`, `playability.tsx`, `Quiz.test.tsx`, `Conjugation.tsx`, `package.json`, `router.tsx`, `sounds.test.tsx`, `react`, `setup.ts`, `Clock.tsx`, `levels.ts`, `Sentence.tsx`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _912 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UnitContent` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `meta` be split into smaller, more focused modules?**
  _Cohesion score 0.06826241134751773 - nodes in this community are weakly interconnected._
- **Should `forms.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.058653846153846154 - nodes in this community are weakly interconnected._