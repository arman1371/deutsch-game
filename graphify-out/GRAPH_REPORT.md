# Graph Report - lingoat.games  (2026-10-24)

## Corpus Check
- 359 files · ~380,792 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .properties 1, .css 1)

## Summary
- 1849 nodes · 6043 edges · 131 communities (125 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 69 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fb427527`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- u6-feste.ts
- u5-kleidung.ts
- listen
- conjugation.ts
- heard
- B1.1 coverage and research doc
- ui.test.tsx
- u10-beruf.ts
- schema.ts
- @testing-library/react
- UnitContent
- package.json
- progressStore.ts
- c1-1/index.ts
- devDependencies
- PlayPage.tsx
- useSequence
- react
- a2-2/index.ts
- b1-1/helpers.ts
- e2e/helpers.ts
- compilerOptions
- router.tsx
- lessons.ts
- Clock.tsx
- a2-1/index.ts
- b2-1/index.ts
- compilerOptions
- filters.ts
- rng.ts
- ContentProvider.tsx
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- Market.tsx
- scripts
- u8-schule.ts
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- c1-2/helpers.ts
- b2-2/index.ts
- ref_lib_german_conjugation
- u10-wissenschaft.ts
- b2-1/u1-beziehungen.ts
- builders.ts
- dependencies
- c1-2/index.ts
- forms.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- u3-woher.ts
- path.ts
- srs.ts
- a1-1/types.ts
- i18n/index.ts
- graphify reference: query, path, explain
- items.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- e2e/tsconfig.json
- vite.config.ts
- u5-familie.ts
- graphify reference: add a URL and watch a folder
- ref_test_render
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- README (Deutsch Spielplatz)
- Deployment doc
- adjectives.ts
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- builders.test.ts
- b1-1/index.ts
- Architecture doc
- Code graph (Graphify)
- b1-2/index.ts
- articles.ts
- u8-einkaufen.ts
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- playability.tsx
- u1-hallo.ts
- u3-wetter.ts
- say
- sortItems
- typed
- you
- quizEmoji
- a2-2/helpers.ts
- activity
- u4-kunst.ts
- gap
- u6-reisen.ts
- memory
- u11-unterwegs.ts
- u12-klima.ts
- u9-aemter.ts
- u3-wohlbefinden.ts
- u4-kommunikation.ts
- u5-teamgeist.ts
- u6-lebenswege.ts
- u9-medien.ts
- u2-wohnen.ts
- u8-wohnen.ts
- u7-feste.ts
- u5-wohnung.ts
- konjunktiv1.ts
- u10-alltag.ts
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- table
- tf
- u8-werbung.ts
- setup.ts
- registry.ts
- dictation
- u2-sport.ts
- flashcards
- u4-sprachen.ts
- u5-beruf.ts
- u6-service.ts
- u12-vortrag.ts
- u3-recht.ts
- u4-psychologie.ts
- u7-kino.ts
- u8-geschaeft.ts
- u9-forschung.ts

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 132 edges
2. `activity()` - 122 edges
3. `heard()` - 116 edges
4. `vocabList()` - 114 edges
5. `meta()` - 113 edges
6. `gap()` - 113 edges
7. `q()` - 112 edges
8. `sent()` - 112 edges
9. `tf()` - 112 edges
10. `say()` - 112 edges

## Surprising Connections (you probably didn't know these)
- `Grammar` --references--> `statePassiveTable()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `Grammar` --references--> `futur2Table()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `graphify trigger instructions (.claude/CLAUDE.md)` --conceptually_related_to--> `CLAUDE.md project notes`  [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md
- `13 game engines` --implements--> `Game engine contract (GameProps, useSequence, GameFrame)`  [INFERRED]
  README.md → docs/architecture.md
- `index.html app shell` --references--> `Favicon: white umlaut A on blue rounded square`  [EXTRACTED]
  index.html → public/favicon.svg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (131 total, 6 thin omitted)

### Community 0 - "u6-feste.ts"
Cohesion: 0.29
Nodes (6): etiquette, festivals, people, restaurant, values, vocab

### Community 1 - "u5-kleidung.ts"
Cohesion: 0.25
Nodes (7): ref_lib_german_ordinals, clothes, colours, kleidung, priceHeard(), shop, vocab

### Community 2 - "listen"
Cohesion: 0.16
Nodes (10): events, phrases, vocab, environment, materials, vocab, future, tech (+2 more)

### Community 3 - "conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "heard"
Cohesion: 0.11
Nodes (25): heard(), pastTable(), Pronoun, q(), Question, readRound(), setRound(), Turn (+17 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.16
Nodes (14): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, B1.1 coverage and research doc, CEFR B1 global scale (Council of Europe), Goethe-Zertifikat B1 and word list, Menschen B1 (Hueber) (+6 more)

### Community 6 - "ui.test.tsx"
Cohesion: 0.07
Nodes (27): ActivityCard(), Props, Button(), Props, Size, SIZES, Variant, VARIANTS (+19 more)

### Community 7 - "u10-beruf.ts"
Cohesion: 0.09
Nodes (35): beruf, cv, PERFEKT, verbs, vocab, year(), below100(), below1000() (+27 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.09
Nodes (22): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+14 more)

### Community 10 - "UnitContent"
Cohesion: 0.09
Nodes (42): ref_lib_german_konjunktiv1, UnitContent, meta(), sent(), vocabList(), Blanks, k1PerfectTable(), k1Table() (+34 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (26): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+18 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.12
Nodes (21): zustand, ref_zustand_middleware, ActivityProgress, initialProgress(), nextStreak(), ProgressActions, ProgressData, ProgressState (+13 more)

### Community 13 - "c1-1/index.ts"
Cohesion: 0.12
Nodes (14): ref_test_playability, content, units, wirtschaft, gesellschaft, zeit, digital, sprache (+6 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.08
Nodes (29): ref_app_path, ref_components_activitycard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_progressbar, ref_components_ui_stars (+21 more)

### Community 16 - "useSequence"
Cohesion: 0.14
Nodes (18): ref_lib_sfx, Blitz(), collectNpcLines(), Dialogue(), Line, Scene, SceneView(), buildDeck() (+10 more)

### Community 17 - "react"
Cohesion: 0.09
Nodes (37): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_content_lessons, @dnd-kit/core, ref_lib_answer_check, ref_lib_tts, react (+29 more)

### Community 18 - "a2-2/index.ts"
Cohesion: 0.08
Nodes (30): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_forms, hints, units, hints, hints, hints (+22 more)

### Community 19 - "b1-1/helpers.ts"
Cohesion: 0.09
Nodes (40): customTable(), adjGap(), k2Table(), passiveTable(), reflexiveAccTable(), Blanks, compound(), futurTable() (+32 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.11
Nodes (28): PAGES, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+20 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "router.tsx"
Cohesion: 0.12
Nodes (6): ref_react_dom_client, ref_react_router_dom, createAppRouter(), routes, src_index, router

### Community 23 - "lessons.ts"
Cohesion: 0.15
Nodes (15): Meta, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags(), LESSONS (+7 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.33
Nodes (9): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+1 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.09
Nodes (32): ref_test_contentsuite, content, units, stadt, arbeit, gesundheit, termine, content (+24 more)

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

### Community 30 - "ContentProvider.tsx"
Cohesion: 0.24
Nodes (12): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+4 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.24
Nodes (9): buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT, config (+1 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.14
Nodes (7): num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen

### Community 34 - "Market.tsx"
Cohesion: 0.24
Nodes (10): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market() (+2 more)

### Community 35 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, check, deploy, dev, format, format:check, lint (+6 more)

### Community 36 - "u8-schule.ts"
Cohesion: 0.10
Nodes (19): sepTable(), unit21(), actions, devices, vocab, web, authorities, countries (+11 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "c1-2/helpers.ts"
Cohesion: 0.12
Nodes (16): unitC12(), conflict, team, vocab, farming, sustain, vocab, debts (+8 more)

### Community 40 - "b2-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, stadt, druck, netz, beziehungen, ernaehrung, studium (+6 more)

### Community 41 - "ref_lib_german_conjugation"
Cohesion: 0.40
Nodes (8): ref_lib_german_conjugation, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), gradeTable(), pronounOrder

### Community 42 - "u10-wissenschaft.ts"
Cohesion: 0.18
Nodes (8): alternatives, progress, research, vocab, phrases, politics, social, vocab

### Community 43 - "b2-1/u1-beziehungen.ts"
Cohesion: 0.40
Nodes (4): bonds, phrases, traits, vocab

### Community 44 - "builders.ts"
Cohesion: 0.06
Nodes (45): jobs, vocab, work, hint(), europe, home, vocab, reviews (+37 more)

### Community 45 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, motion, react, react-dom, react-router (+2 more)

### Community 46 - "c1-2/index.ts"
Cohesion: 0.11
Nodes (18): earlierLevels, key(), REVIEW_WORDS, content, units, team10, nachhaltigkeit, vortrag (+10 more)

### Community 47 - "forms.ts"
Cohesion: 0.17
Nodes (14): adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms(), DEFINITE, describeForm() (+6 more)

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

### Community 55 - "a1-1/types.ts"
Cohesion: 0.21
Nodes (8): ref_test_factories, freizeit, hobbies, vocab, ContentIndex, EMPTY_INDEX, Activity, Vocab

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "items.ts"
Cohesion: 0.39
Nodes (6): getItems(), itemCount(), ITEMS_KEY, ItemsKey, mapItems(), withItems()

### Community 59 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (11): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources (+3 more)

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "vite.config.ts"
Cohesion: 0.33
Nodes (5): ref_node_url, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 62 - "u5-familie.ts"
Cohesion: 0.12
Nodes (12): people, phrases, vocab, wer, familie, female, male, relatives (+4 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "ref_test_render"
Cohesion: 0.07
Nodes (21): ref_test_render, answerRight(), answerWrong(), config, prompt(), statements, truth(), config (+13 more)

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

### Community 75 - "adjectives.ts"
Cohesion: 0.33
Nodes (9): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+1 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "builders.test.ts"
Cohesion: 0.20
Nodes (6): pick(), slug(), vocab, adjectiveHint(), ActivityOf, ActivitySchema

### Community 78 - "b1-1/index.ts"
Cohesion: 0.13
Nodes (14): content, units, feiern, umwelt, pannen, glueck, unterhaltung, gesundheit (+6 more)

### Community 79 - "Architecture doc"
Cohesion: 0.14
Nodes (20): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Integrity between levels (no repeated vocab) (+12 more)

### Community 80 - "Code graph (Graphify)"
Cohesion: 0.40
Nodes (4): Code graph (Graphify), Locally, Repo settings, The workflow

### Community 81 - "b1-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, heimat, kunst, diskussion, kollegen, digital, konsum (+6 more)

### Community 82 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 83 - "u8-einkaufen.ts"
Cohesion: 0.22
Nodes (6): ref_lib_german_numbers, einkaufen, food, genderItems, shopping, vocab

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "playability.tsx"
Cohesion: 0.16
Nodes (14): ref_content_schema, ref_games_market_logic, ref_games_memory_logic, ref_games_types, ref_lib_scoring, @testing-library/user-event, levelFixture(), quizActivity() (+6 more)

### Community 86 - "u1-hallo.ts"
Cohesion: 0.29
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 87 - "u3-wetter.ts"
Cohesion: 0.33
Nodes (5): colours, phrases, seasons, vocab, weather

### Community 88 - "say"
Cohesion: 0.22
Nodes (7): say(), friends, traits, vocab, green, mobility, vocab

### Community 89 - "sortItems"
Cohesion: 0.22
Nodes (7): sortItems(), eating, shopping, vocab, campus, money, vocab

### Community 90 - "typed"
Cohesion: 0.22
Nodes (7): typed(), body, health, vocab, eras, resistance, vocab

### Community 91 - "you"
Cohesion: 0.22
Nodes (7): you(), law, media, vocab, art, stage, vocab

### Community 92 - "quizEmoji"
Cohesion: 0.09
Nodes (22): unit22(), bank, insurance, money, vocab, memories, stages, story (+14 more)

### Community 93 - "a2-2/helpers.ts"
Cohesion: 0.14
Nodes (14): reflexiveTable(), Blanks, ENDING_ORDER, reflexiveDativeTable(), SixForms, career, emergency, hospital (+6 more)

### Community 94 - "activity"
Cohesion: 0.22
Nodes (7): dream, together, vocab, activity(), books, vocab, writing

### Community 95 - "u4-kunst.ts"
Cohesion: 0.33
Nodes (5): adjectives, art, music, tickets, vocab

### Community 96 - "gap"
Cohesion: 0.40
Nodes (4): gap(), fitness, health, vocab

### Community 97 - "u6-reisen.ts"
Cohesion: 0.25
Nodes (7): src_content_a1_2_helpers_activity, hotel, reisen, travel, vocab, weather, weatherTalk

### Community 98 - "memory"
Cohesion: 0.12
Nodes (17): bonds, diversity, vocab, claims, service, vocab, fitness, medicine (+9 more)

### Community 99 - "u11-unterwegs.ts"
Cohesion: 0.40
Nodes (4): concession, mobility, travel, vocab

### Community 100 - "u12-klima.ts"
Cohesion: 0.40
Nodes (4): climate, globalisation, nominal, vocab

### Community 101 - "u9-aemter.ts"
Cohesion: 0.25
Nodes (6): aemter, feeHeard(), forms, formWords, service, vocab

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

### Community 107 - "u2-wohnen.ts"
Cohesion: 0.29
Nodes (7): ads, euro(), furniture, rent(), rooms, vocab, wohnen

### Community 108 - "u8-wohnen.ts"
Cohesion: 0.40
Nodes (4): defects, market, rules, vocab

### Community 109 - "u7-feste.ts"
Cohesion: 0.25
Nodes (7): dateHeard(), DM, feiern, feste, months, phrases, vocab

### Community 110 - "u5-wohnung.ts"
Cohesion: 0.25
Nodes (6): ads, furniture, money, verbs, vocab, wohnung

### Community 111 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 112 - "u10-alltag.ts"
Cohesion: 0.29
Nodes (6): unit12(), alltag, chores, people, rules, vocab

### Community 113 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 114 - "table"
Cohesion: 0.33
Nodes (5): table(), family, givers, status, vocab

### Community 115 - "tf"
Cohesion: 0.33
Nodes (5): tf(), route, traffic, trip, vocab

### Community 116 - "u8-werbung.ts"
Cohesion: 0.33
Nodes (5): ads, describing, habits, proscons, vocab

### Community 118 - "registry.ts"
Cohesion: 0.47
Nodes (4): GAME_HELP, gameComponents, gameLoaders, Loader

### Community 119 - "dictation"
Cohesion: 0.40
Nodes (4): dictation(), luck, news, vocab

### Community 120 - "u2-sport.ts"
Cohesion: 0.40
Nodes (4): feelings, sport, verbs, vocab

### Community 121 - "flashcards"
Cohesion: 0.40
Nodes (4): opinions, screen, vocab, flashcards()

### Community 122 - "u4-sprachen.ts"
Cohesion: 0.50
Nodes (3): clarify, languages, vocab

### Community 123 - "u5-beruf.ts"
Cohesion: 0.50
Nodes (3): strengths, vocab, workplace

### Community 124 - "u6-service.ts"
Cohesion: 0.50
Nodes (3): phrases, service, vocab

### Community 125 - "u12-vortrag.ts"
Cohesion: 0.50
Nodes (3): discuss, present, vocab

### Community 126 - "u3-recht.ts"
Cohesion: 0.50
Nodes (3): court, rules, vocab

### Community 127 - "u4-psychologie.ts"
Cohesion: 0.50
Nodes (3): claims, mind, vocab

### Community 128 - "u7-kino.ts"
Cohesion: 0.50
Nodes (3): art, film, vocab

### Community 129 - "u8-geschaeft.ts"
Cohesion: 0.50
Nodes (3): business, culture, vocab

### Community 130 - "u9-forschung.ts"
Cohesion: 0.50
Nodes (3): research, tech, vocab

## Knowledge Gaps
- **804 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+799 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 911 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `README (Deutsch Spielplatz)` connect `README (Deutsch Spielplatz)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Deployment doc`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `Architecture doc`, `Code graph (Graphify)`, `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _804 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `heard` be split into smaller, more focused modules?**
  _Cohesion score 0.11182795698924732 - nodes in this community are weakly interconnected._
- **Should `ui.test.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07254623044096728 - nodes in this community are weakly interconnected._
- **Should `u10-beruf.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08748615725359911 - nodes in this community are weakly interconnected._
- **Should `schema.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06439393939393939 - nodes in this community are weakly interconnected._
- **Should `@testing-library/react` be split into smaller, more focused modules?**
  _Cohesion score 0.0944741532976827 - nodes in this community are weakly interconnected._