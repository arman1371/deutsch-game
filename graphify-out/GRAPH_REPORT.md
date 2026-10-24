# Graph Report - lingoat.games  (2026-10-24)

## Corpus Check
- 339 files · ~350,543 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .properties 1, .css 1)

## Summary
- 1768 nodes · 5625 edges · 102 communities (95 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 66 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7bc66bd4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- u6-feste.ts
- UnitContent
- vocabList
- forms.ts
- a2-1/helpers.ts
- B1.1 coverage and research doc
- ui.test.tsx
- numbers.ts
- schema.ts
- @testing-library/react
- sent
- package.json
- progressStore.ts
- c1-1/index.ts
- devDependencies
- PlayPage.tsx
- sounds.test.tsx
- react
- content/hints.ts
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
- a1-1/types.ts
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u10-beruf.ts
- Market.tsx
- scripts
- a2-2/index.ts
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- b2-1/helpers.ts
- b2-2/index.ts
- Conjugation.tsx
- u10-wissenschaft.ts
- b2-1/u1-beziehungen.ts
- gap
- dependencies
- Architecture doc
- a11y.spec.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- u3-woher.ts
- path.ts
- srs.ts
- u7-post.ts
- i18n/index.ts
- graphify reference: query, path, explain
- items.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- e2e/tsconfig.json
- vite.config.ts
- u5-familie.ts
- graphify reference: add a URL and watch a folder
- Spell.test.tsx
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- README (Deutsch Spielplatz)
- Deployment doc
- Quiz.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- b1-1/index.ts
- Adding content guide
- Code graph (Graphify)
- b1-2/index.ts
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- registry.ts
- u1-hallo.ts
- u3-wetter.ts
- u11-leben.ts
- activity
- a2-2/helpers.ts
- q
- sortItems
- meta
- u11-unterwegs.ts
- u12-klima.ts
- u2-besitz.ts
- u3-wohlbefinden.ts
- u4-kommunikation.ts
- u5-teamgeist.ts
- u6-lebenswege.ts
- builders.ts
- u8-wohnen.ts
- u7-gesellschaft.ts
- setup.ts

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 118 edges
2. `activity()` - 109 edges
3. `heard()` - 103 edges
4. `vocabList()` - 102 edges
5. `meta()` - 100 edges
6. `gap()` - 100 edges
7. `flashcards()` - 100 edges
8. `q()` - 99 edges
9. `sent()` - 99 edges
10. `tf()` - 99 edges

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

## Communities (102 total, 7 thin omitted)

### Community 0 - "u6-feste.ts"
Cohesion: 0.29
Nodes (6): etiquette, festivals, people, restaurant, values, vocab

### Community 1 - "UnitContent"
Cohesion: 0.05
Nodes (55): ref_lib_german_ordinals, UnitContent, src_content_a1_2_helpers_activity, heard(), unit12(), chores, people, rules (+47 more)

### Community 2 - "vocabList"
Cohesion: 0.07
Nodes (40): say(), ads, furniture, money, verbs, vocab, wohnung, ads (+32 more)

### Community 3 - "forms.ts"
Cohesion: 0.06
Nodes (54): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+46 more)

### Community 4 - "a2-1/helpers.ts"
Cohesion: 0.09
Nodes (26): readRound(), sepTable(), setRound(), Blanks, unit21(), actions, devices, vocab (+18 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.16
Nodes (14): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, B1.1 coverage and research doc, CEFR B1 global scale (Council of Europe), Goethe-Zertifikat B1 and word list, Menschen B1 (Hueber) (+6 more)

### Community 6 - "ui.test.tsx"
Cohesion: 0.07
Nodes (28): ActivityCard(), Props, Button(), Props, Size, SIZES, Variant, VARIANTS (+20 more)

### Community 7 - "numbers.ts"
Cohesion: 0.12
Nodes (29): below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES, priceToGerman() (+21 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.07
Nodes (26): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+18 more)

### Community 10 - "sent"
Cohesion: 0.08
Nodes (45): ref_lib_german_konjunktiv1, sent(), you(), quizDeEn(), spell(), Blanks, k1PerfectTable(), k1Table() (+37 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (26): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+18 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.12
Nodes (21): zustand, ref_zustand_middleware, ActivityProgress, initialProgress(), nextStreak(), ProgressActions, ProgressData, ProgressState (+13 more)

### Community 13 - "c1-1/index.ts"
Cohesion: 0.13
Nodes (13): content, units, wirtschaft, gesellschaft, zeit, digital, sprache, manieren (+5 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.09
Nodes (27): ref_app_path, ref_components_activitycard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_progressbar, ref_components_ui_stars (+19 more)

### Community 16 - "sounds.test.tsx"
Cohesion: 0.11
Nodes (19): ref_lib_sfx, ref_test_render, Blitz(), answerRight(), answerWrong(), config, prompt(), statements (+11 more)

### Community 17 - "react"
Cohesion: 0.12
Nodes (36): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_lib_tts, react, collectNpcLines(), Line, Scene (+28 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.11
Nodes (20): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, hints, freizeit, hobbies, vocab, hints (+12 more)

### Community 19 - "b1-1/helpers.ts"
Cohesion: 0.24
Nodes (15): customTable(), Pronoun, Question, Turn, k2Table(), passiveTable(), reflexiveAccTable(), Blanks (+7 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.13
Nodes (27): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+19 more)

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
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.08
Nodes (35): ref_test_contentsuite, content, units, alltag, stadt, arbeit, gesundheit, termine (+27 more)

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

### Community 30 - "a1-1/types.ts"
Cohesion: 0.17
Nodes (16): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+8 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.22
Nodes (10): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT (+2 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u10-beruf.ts"
Cohesion: 0.05
Nodes (28): ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_lib_german_numbers, num(), NUMBERS, numberVocab, numCard() (+20 more)

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

### Community 39 - "b2-1/helpers.ts"
Cohesion: 0.36
Nodes (7): Blanks, compound(), futur2Table(), k1Table(), konjunktiv1(), SixForms, statePassiveTable()

### Community 40 - "b2-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, stadt, druck, netz, beziehungen, ernaehrung, studium (+6 more)

### Community 41 - "Conjugation.tsx"
Cohesion: 0.20
Nodes (14): ref_content_lessons, ref_lib_answer_check, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy() (+6 more)

### Community 42 - "u10-wissenschaft.ts"
Cohesion: 0.33
Nodes (5): unitB21(), alternatives, progress, research, vocab

### Community 43 - "b2-1/u1-beziehungen.ts"
Cohesion: 0.40
Nodes (4): bonds, phrases, traits, vocab

### Community 44 - "gap"
Cohesion: 0.08
Nodes (48): dictation(), gap(), adjGap(), Blanks, compound(), hint(), passivePastTable(), passivePerfektTable() (+40 more)

### Community 45 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, motion, react, react-dom, react-router (+2 more)

### Community 46 - "Architecture doc"
Cohesion: 0.33
Nodes (9): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Architecture doc, Accessible by default, Seeded determinism (rng.ts), Testing pyramid (+1 more)

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

### Community 55 - "u7-post.ts"
Cohesion: 0.40
Nodes (4): mobile, phone, post, vocab

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "items.ts"
Cohesion: 0.33
Nodes (7): ref_test_factories, getItems(), itemCount(), ITEMS_KEY, ItemsKey, mapItems(), withItems()

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
Nodes (16): people, phrases, vocab, wer, familie, female, male, relatives (+8 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "Spell.test.tsx"
Cohesion: 0.40
Nodes (3): dictation, typed, unscramble

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

### Community 75 - "Quiz.test.tsx"
Cohesion: 0.40
Nodes (3): ANSWER, config, WRONG

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 78 - "b1-1/index.ts"
Cohesion: 0.13
Nodes (14): content, units, feiern, umwelt, pannen, glueck, unterhaltung, gesundheit (+6 more)

### Community 79 - "Adding content guide"
Cohesion: 0.18
Nodes (11): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Integrity between levels (no repeated vocab), Procedure: add a new game engine, Procedure: add a new level, Procedure: add a new unit (builders.ts), Content is data, engines are generic (+3 more)

### Community 80 - "Code graph (Graphify)"
Cohesion: 0.40
Nodes (4): Code graph (Graphify), Locally, Repo settings, The workflow

### Community 81 - "b1-2/index.ts"
Cohesion: 0.11
Nodes (14): ref_test_playability, units, heimat, kunst, diskussion, kollegen, digital, konsum (+6 more)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "registry.ts"
Cohesion: 0.16
Nodes (10): ref_content_schema, ref_games_types, ref_lib_scoring, @testing-library/user-event, GAME_HELP, gameComponents, gameLoaders, Loader (+2 more)

### Community 86 - "u1-hallo.ts"
Cohesion: 0.29
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 87 - "u3-wetter.ts"
Cohesion: 0.33
Nodes (5): colours, phrases, seasons, vocab, weather

### Community 91 - "u11-leben.ts"
Cohesion: 0.33
Nodes (5): pastTable(), memories, stages, story, vocab

### Community 92 - "activity"
Cohesion: 0.10
Nodes (23): table(), unit22(), exams, problems, tips, vocab, feelings, sport (+15 more)

### Community 93 - "a2-2/helpers.ts"
Cohesion: 0.20
Nodes (10): reflexiveTable(), Blanks, ENDING_ORDER, reflexiveDativeTable(), SixForms, career, emergency, hospital (+2 more)

### Community 95 - "q"
Cohesion: 0.12
Nodes (14): q(), adjectives, art, music, tickets, vocab, ads, describing (+6 more)

### Community 96 - "sortItems"
Cohesion: 0.40
Nodes (4): sortItems(), fitness, health, vocab

### Community 98 - "meta"
Cohesion: 0.05
Nodes (55): meta(), tf(), typed(), authorities, countries, forms, nat(), vocab (+47 more)

### Community 99 - "u11-unterwegs.ts"
Cohesion: 0.33
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

### Community 106 - "builders.ts"
Cohesion: 0.22
Nodes (7): digital, links, news, vocab, QuizQuestion, VocabRow, src_content_schema_gametype

### Community 108 - "u8-wohnen.ts"
Cohesion: 0.40
Nodes (4): defects, market, rules, vocab

### Community 116 - "u7-gesellschaft.ts"
Cohesion: 0.40
Nodes (4): phrases, politics, social, vocab

## Knowledge Gaps
- **760 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+755 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 868 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Grammar` connect `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2` to `b2-1/helpers.ts`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Why does `README (Deutsch Spielplatz)` connect `README (Deutsch Spielplatz)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Deployment doc`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `Architecture doc`, `Adding content guide`, `Code graph (Graphify)`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _760 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UnitContent` be split into smaller, more focused modules?**
  _Cohesion score 0.05174825174825175 - nodes in this community are weakly interconnected._
- **Should `vocabList` be split into smaller, more focused modules?**
  _Cohesion score 0.0660377358490566 - nodes in this community are weakly interconnected._
- **Should `forms.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.058653846153846154 - nodes in this community are weakly interconnected._
- **Should `a2-1/helpers.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0946969696969697 - nodes in this community are weakly interconnected._