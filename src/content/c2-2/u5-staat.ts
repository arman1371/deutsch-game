import { byDe, vocabList } from '../builders';
import {
  activity,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  unitC22,
  vocabPath,
  withLesson,
  withWhy,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'c2-2-staat';
const LESSON = 'c22-formal-genitive' as const;

const staat = vocabList(U, 'State & institutions', [
  ['Gewaltenteilung', 'separation of powers', '⚖️', 'die'],
  ['Grundgesetz', 'Basic Law (German constitution)', '📘', 'das'],
  ['Plenum', 'plenary assembly', '🏛️', 'das', 'Plenen'],
  ['Bundesrat', 'Bundesrat (federal council)', '🏢', 'der'],
  ['Vorlage', 'bill, proposal', '📃', 'die', 'Vorlagen'],
  ['Volksvertreter', 'representative of the people', '🧑‍💼', 'der', 'Volksvertreter'],
  ['Wahlkampf', 'election campaign', '📢', 'der', 'Wahlkämpfe'],
  ['Koalition', 'coalition', '🤝', 'die', 'Koalitionen'],
  ['Opposition', 'opposition', '🛑', 'die'],
  ['Haushalt', 'budget', '💼', 'der', 'Haushalte'],
  ['Plebiszit', 'plebiscite', '🗳️', 'das', 'Plebiszite'],
  ['Verfassung', 'constitution', '📜', 'die', 'Verfassungen'],
  ['Amtszeit', 'term of office', '📆', 'die', 'Amtszeiten'],
  ['Fraktion', 'parliamentary group', '➖', 'die', 'Fraktionen'],
]);

const debatte = vocabList(U, 'Politics in action', [
  ['verabschieden', 'to pass (a law)', '✍️'],
  ['einbringen', 'to introduce (a bill)', '📥'],
  ['regieren', 'to govern', '👑'],
  ['kandidieren', 'to run for office', '🙋'],
  ['billigen', 'to approve', '☑️'],
  ['verwerfen', 'to reject, to throw out', '👎'],
  ['erwirken', 'to bring about, to obtain', '💪'],
  ['kontrovers', 'controversial', '🔥'],
  ['parteiübergreifend', 'cross-party', '🌈'],
  ['zurücktreten', 'to resign', '🚪'],
  ['Stellung beziehen', 'to take a stand', '🧭'],
  ['Einvernehmen', 'agreement, consent', '🤲', 'das'],
  ['Verantwortung tragen', 'to bear responsibility', '🏋️'],
]);

const vocab = [...staat, ...debatte];
const grammarTags = ['grammar', LESSON, 'c22-politics'] as const;

export const staatPolitik: UnitContent = {
  unit: unitC22({
    id: U,
    order: 5,
    title: 'Staat & Politik',
    subtitle: 'Institutions, debate and the formal genitive prepositions of written German',
    emoji: '🗳️',
    goals: [
      'Describe how the state and parliament work',
      'Follow and write formal texts with angesichts, infolge, aufgrund, hinsichtlich, seitens …',
      'Use the genitive correctly after formal prepositions',
    ],
    grammar: [
      'Reason: angesichts, infolge, aufgrund + genitive',
      'Means and purpose: mittels, mithilfe, zwecks, anhand + genitive',
      'Relation: hinsichtlich, bezüglich, seitens, zugunsten, zulasten, anstelle + genitive',
      'Genitive endings: des Haushalts, der Krise, der Bürger',
    ],
    vocabFields: ['State & institutions', 'Politics in action'],
  }),
  vocab,
  activities: [
    ...vocabPath({
      unitId: U,
      topic: 'c22-politics',
      lists: [
        {
          key: 'state',
          title: 'State & institutions',
          description: 'Plenum, Grundgesetz, Koalition – how the state is organised.',
          vocab: staat,
        },
        {
          key: 'debate',
          title: 'Politics in action',
          description: 'verabschieden, kandidieren, Einvernehmen – what politicians do.',
          vocab: debatte,
        },
      ],
      pictures: byDe(
        staat,
        'Gewaltenteilung',
        'Grundgesetz',
        'Plenum',
        'Vorlage',
        'Wahlkampf',
        'Koalition',
        'Opposition',
        'Plebiszit',
      ),
      picturesTitle: 'In the political world',
      picturesDescription: 'Name the institution or term.',
      listening: debatte,
      listenTitle: 'Hear the debate',
      pairs: byDe(
        debatte,
        'verabschieden',
        'einbringen',
        'regieren',
        'kandidieren',
        'verwerfen',
        'erwirken',
        'kontrovers',
        'zurücktreten',
      ),
      memoryTitle: 'Parliament memory',
      memoryDescription: 'Match each political term with its meaning.',
      unscramble: byDe(staat, 'Verfassung', 'Fraktion', 'Amtszeit'),
      typeIn: byDe(staat, 'Gewaltenteilung', 'Plebiszit'),
      dictations: [
        [
          'd1',
          'Das Grundgesetz garantiert die Würde des Menschen.',
          'The Basic Law guarantees human dignity.',
        ],
        [
          'd2',
          'Der Gesetzentwurf wurde im Bundestag verabschiedet.',
          'The bill was passed in the Bundestag.',
        ],
      ],
    }),
    activity(
      U,
      'gap-prepositions',
      'gapfill',
      meta(
        'angesichts, infolge, seitens …',
        'Choose the formal preposition that fits the meaning.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              '___ der steigenden Kosten muss der Haushalt gekürzt werden.',
              'Angesichts',
              ['Angesichts', 'Infolge', 'Zwecks', 'Anstelle'],
              'In view of the rising costs the budget must be cut.',
              'angesichts = in view of a situation.',
            ),
            {
              Infolge: 'infolge names the result of an event, not a situation you react to.',
              Zwecks: 'zwecks introduces a purpose.',
              Anstelle: 'anstelle means “instead of”.',
            },
          ),
          withWhy(
            gap(
              'g2',
              '___ eines Formfehlers wurde das Gesetz aufgehoben.',
              'Infolge',
              ['Infolge', 'Seitens', 'Zugunsten', 'Mittels'],
              'As a result of a procedural error the law was repealed.',
              'infolge = as a result of.',
            ),
            {
              Seitens: 'seitens means “on the part of”.',
              Zugunsten: 'zugunsten means “in favour of”.',
              Mittels: 'mittels means “by means of”.',
            },
          ),
          withWhy(
            gap(
              'g3',
              '___ der Regierung wurde keine Stellungnahme abgegeben.',
              'Seitens',
              ['Seitens', 'Zwecks', 'Infolge', 'Hinsichtlich'],
              'There was no statement on the part of the government.',
              'seitens = on the part of (who acts or fails to act).',
            ),
            {
              Zwecks: 'zwecks names a purpose.',
              Infolge: 'infolge names a consequence.',
              Hinsichtlich: 'hinsichtlich means “with regard to”.',
            },
          ),
          withWhy(
            gap(
              'g4',
              '___ einer höheren Wahlbeteiligung wurde die Briefwahl erleichtert.',
              'Zwecks',
              ['Zwecks', 'Angesichts', 'Zugunsten', 'Seitens'],
              'To increase turnout, postal voting was made easier.',
              'zwecks = for the purpose of.',
            ),
            {
              Angesichts: 'angesichts reacts to a situation; here a goal is meant.',
              Zugunsten: 'zugunsten means “in favour of”.',
              Seitens: 'seitens means “on the part of”.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Der Antrag wurde ___ der kleineren Parteien geändert.',
              'zugunsten',
              ['zugunsten', 'infolge', 'seitens', 'mittels'],
              'The motion was changed in favour of the smaller parties.',
              'zugunsten = in favour of (opposite: zulasten).',
            ),
            {
              infolge: 'infolge names a consequence of an event.',
              seitens: 'seitens means “on the part of”.',
              mittels: 'mittels means “by means of”.',
            },
          ),
          withWhy(
            gap(
              'g6',
              '___ der Rechtslage gibt es keine Einigkeit.',
              'Hinsichtlich',
              ['Hinsichtlich', 'Zwecks', 'Infolge', 'Anstelle'],
              'With regard to the legal situation there is no agreement.',
              'hinsichtlich / bezüglich = with regard to.',
            ),
            {
              Zwecks: 'zwecks names a purpose.',
              Infolge: 'infolge names a consequence.',
              Anstelle: 'anstelle means “instead of”.',
            },
          ),
          withWhy(
            gap(
              'g7',
              'Die Abstimmung erfolgte ___ elektronischer Geräte.',
              'mittels',
              ['mittels', 'anstelle', 'aufgrund', 'seitens'],
              'The vote was carried out by means of electronic devices.',
              'mittels = by means of.',
            ),
            {
              anstelle: 'anstelle means “instead of”.',
              aufgrund: 'aufgrund names a reason, not an instrument.',
              seitens: 'seitens means “on the part of”.',
            },
          ),
          typed(
            'g8',
            'Der Stellvertreter spricht ___ des erkrankten Ministers.',
            'anstelle',
            'The deputy speaks in place of the sick minister.',
            'anstelle (or an Stelle) + genitive = instead of.',
            ['an Stelle', 'anstatt'],
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'gap-endings',
      'gapfill',
      meta(
        'Genitive endings',
        'The article and noun after a formal preposition.',
        [...grammarTags],
        3,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'a1',
              'Aufgrund ___ Krise verschob die Regierung die Wahl.',
              'der',
              ['der', 'die', 'des', 'dem'],
              'Because of the crisis the government postponed the election.',
              'Genitive feminine singular: der Krise.',
            ),
            {
              die: 'die is nominative / accusative; aufgrund needs the genitive.',
              des: 'des is masculine / neuter; Krise is feminine.',
              dem: 'dem is dative; formal prepositions like aufgrund take the genitive.',
            },
          ),
          withWhy(
            gap(
              'a2',
              'Seitens ___ Opposition gab es heftige Kritik.',
              'der',
              ['der', 'die', 'des', 'dem'],
              'There was fierce criticism from the opposition.',
              'Genitive feminine singular: der Opposition.',
            ),
            {
              die: 'seitens takes the genitive, not the nominative.',
              des: 'Opposition is feminine, so des does not fit.',
              dem: 'seitens is followed by the genitive, not the dative.',
            },
          ),
          withWhy(
            gap(
              'a3',
              'Hinsichtlich ___ Haushalts gibt es Streit.',
              'des',
              ['des', 'dem', 'den', 'der'],
              'There is a dispute regarding the budget.',
              'Genitive masculine singular: des Haushalts (noun + -s).',
            ),
            {
              dem: 'dem is dative; hinsichtlich takes the genitive.',
              den: 'den is accusative or dative plural.',
              der: 'der is genitive feminine or plural; Haushalt is masculine.',
            },
          ),
          withWhy(
            gap(
              'a4',
              'Zugunsten ___ Bürger wurde das Verfahren vereinfacht.',
              'der',
              ['der', 'des', 'den', 'dem'],
              'The procedure was simplified in favour of the citizens.',
              'Genitive plural: der Bürger.',
            ),
            {
              des: 'des is masculine singular; the plural genitive is der.',
              den: 'den is dative plural; zugunsten takes the genitive.',
              dem: 'dem is dative singular.',
            },
          ),
          withWhy(
            gap(
              'a5',
              'Infolge ___ Skandals trat der Minister zurück.',
              'des',
              ['des', 'dem', 'den', 'der'],
              'As a result of the scandal the minister resigned.',
              'Genitive masculine singular: des Skandals.',
            ),
            {
              dem: 'infolge takes the genitive, not the dative.',
              den: 'den is not a genitive form.',
              der: 'der is feminine or plural; Skandal is masculine.',
            },
          ),
          typed(
            'a6',
            'Infolge des ___ (Skandal) trat der Minister zurück.',
            'Skandals',
            'As a result of the scandal the minister resigned.',
            'Masculine nouns take -s or -es in the genitive: des Skandals.',
          ),
          typed(
            'a7',
            'Mittels eines ___ (Gesetz) soll die Lücke geschlossen werden.',
            'Gesetzes',
            'The gap is to be closed by means of a law.',
            'After eines the one-syllable noun usually takes -es: eines Gesetzes.',
          ),
          typed(
            'a8',
            'Angesichts der ___ (Krise) bleibt die Regierung ruhig.',
            'Krise',
            'In view of the crisis the government stays calm.',
            'Feminine nouns do not change in the genitive: der Krise.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sort-prepositions',
      'sortit',
      meta('What does it express?', 'Reason, means or relation?', [...grammarTags], 2, 5),
      {
        instruction: 'What does the formal preposition express?',
        buckets: [
          { id: 'reason', label: 'Reason', emoji: '❓' },
          { id: 'means', label: 'Means or purpose', emoji: '🛠️' },
          { id: 'relation', label: 'Relation or side', emoji: '↔️' },
        ],
        items: sortItems('p', [
          ['angesichts der Lage', 'reason'],
          ['infolge eines Streiks', 'reason'],
          ['aufgrund der Umfrage', 'reason'],
          ['infolge der Wahlen', 'reason'],
          ['zwecks Einigung', 'means'],
          ['mittels einer Abstimmung', 'means'],
          ['mithilfe der Medien', 'means'],
          ['anhand der Zahlen', 'means'],
          ['hinsichtlich der Steuern', 'relation'],
          ['bezüglich des Antrags', 'relation'],
          ['seitens der Regierung', 'relation'],
          ['zugunsten der Schwächeren', 'relation'],
        ]),
      },
    ),
    activity(
      U,
      'quiz-rewrite',
      'quiz',
      meta(
        'From everyday to formal',
        'Rewrite the sentence in formal style.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            't1',
            'Er trat wegen des Skandals zurück. (formal: as a consequence)',
            'Er trat infolge des Skandals zurück.',
            [
              'Er trat zwecks des Skandals zurück.',
              'Er trat seitens des Skandals zurück.',
              'Er trat mittels des Skandals zurück.',
            ],
            'infolge + genitive = as a result of.',
          ),
          q(
            't2',
            'Das Gesetz wurde für die Mieter geändert. (formal)',
            'Das Gesetz wurde zugunsten der Mieter geändert.',
            [
              'Das Gesetz wurde zwecks der Mieter geändert.',
              'Das Gesetz wurde infolge der Mieter geändert.',
              'Das Gesetz wurde zugunsten den Mieter geändert.',
            ],
            'zugunsten + genitive plural: der Mieter.',
          ),
          q(
            't3',
            'Der Stellvertreter spricht an Stelle des Ministers. (one word)',
            'Der Stellvertreter spricht anstelle des Ministers.',
            [
              'Der Stellvertreter spricht anstelle dem Minister.',
              'Der Stellvertreter spricht infolge des Ministers.',
              'Der Stellvertreter spricht mittels des Ministers.',
            ],
            'anstelle + genitive: des Ministers.',
          ),
          q(
            't4',
            'Man stimmte mit Hilfe eines Computers ab. (formal)',
            'Man stimmte mittels eines Computers ab.',
            [
              'Man stimmte mittels einem Computer ab.',
              'Man stimmte zugunsten eines Computers ab.',
              'Man stimmte infolge eines Computers ab.',
            ],
            'mittels + genitive = by means of.',
          ),
          q(
            't5',
            'Was die Steuern angeht, gibt es keine Einigung. (formal)',
            'Hinsichtlich der Steuern gibt es keine Einigung.',
            [
              'Mittels der Steuern gibt es keine Einigung.',
              'Zwecks der Steuern gibt es keine Einigung.',
              'Infolge die Steuern gibt es keine Einigung.',
            ],
            'hinsichtlich + genitive = with regard to.',
          ),
          q(
            't6',
            'Von der Regierung kam keine Antwort. (formal)',
            'Seitens der Regierung kam keine Antwort.',
            [
              'Zugunsten der Regierung kam keine Antwort.',
              'Anstelle der Regierung kam keine Antwort.',
              'Zwecks der Regierung kam keine Antwort.',
            ],
            'seitens + genitive = on the part of.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta('Formal sentences', 'Build sentences with formal prepositions.', [...grammarTags], 3, 7),
      {
        items: [
          sent(
            's1',
            'In view of the crisis the election was postponed.',
            ['Angesichts', 'der', 'Krise', 'wurde', 'die', 'Wahl', 'verschoben.'],
            { alsoAccept: ['Die Wahl wurde angesichts der Krise verschoben.'] },
          ),
          sent('s2', 'As a result of the scandal the minister resigned.', [
            'Infolge',
            'des',
            'Skandals',
            'trat',
            'der',
            'Minister',
            'zurück.',
          ]),
          sent('s3', 'There was no statement on the part of the government.', [
            'Seitens',
            'der',
            'Regierung',
            'gab',
            'es',
            'keine',
            'Stellungnahme.',
          ]),
          sent('s4', 'The law was changed in favour of the tenants.', [
            'Das',
            'Gesetz',
            'wurde',
            'zugunsten',
            'der',
            'Mieter',
            'geändert.',
          ]),
          sent('s5', 'With regard to taxes there is no agreement.', [
            'Hinsichtlich',
            'der',
            'Steuern',
            'gibt',
            'es',
            'keine',
            'Einigung.',
          ]),
          sent('s6', 'The vote took place by means of a secret ballot.', [
            'Die',
            'Abstimmung',
            'erfolgte',
            'mittels',
            'einer',
            'geheimen',
            'Wahl.',
          ]),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'listen-news',
      'listen',
      meta('Political news', 'Listen to a news report.', ['listening', 'c22-politics'], 3, 5),
      {
        items: [
          heard(
            'l1',
            'Angesichts der Haushaltslage wird die Regierung sparen müssen.',
            'In view of the budget situation the government will have to save.',
            [
              'Thanks to the budget the government can spend more.',
              'The government has already saved enough.',
              'The budget was rejected by the government.',
            ],
          ),
          heard(
            'l2',
            'Infolge eines Formfehlers musste die Abstimmung wiederholt werden.',
            'Because of a procedural error the vote had to be repeated.',
            [
              'The vote was cancelled because nobody came.',
              'The vote was repeated because of the weather.',
              'The vote was won by a large majority.',
            ],
          ),
          heard(
            'l3',
            'Seitens der Opposition wurde der Gesetzentwurf scharf kritisiert.',
            'The bill was sharply criticised by the opposition.',
            [
              'The opposition proposed the bill.',
              'The bill was praised by everyone.',
              'The opposition has left parliament.',
            ],
          ),
          heard(
            'l4',
            'Zugunsten der Kommunen soll das Steuersystem geändert werden.',
            'The tax system is to be changed in favour of the municipalities.',
            [
              'The municipalities want to abolish all taxes.',
              'The tax system will be changed at the expense of the municipalities.',
              'The municipalities have changed the tax system.',
            ],
          ),
          heard(
            'l5',
            'Die Koalition einigte sich nach langen Verhandlungen auf einen Kompromiss.',
            'After long negotiations the coalition agreed on a compromise.',
            [
              'The coalition broke up after long negotiations.',
              'The coalition rejected every compromise.',
              'The negotiations have only just begun.',
            ],
          ),
        ],
      },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Town hall and election night',
        'Argue formally with genitive prepositions.',
        ['communication', LESSON, 'c22-politics'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'gemeinderat',
            title: 'Im Gemeinderat',
            emoji: '🏘️',
            setting: 'A public council meeting; you speak from the audience.',
            turns: [
              say(
                'Bürgermeister',
                'Angesichts der Haushaltslage müssen wir sparen.',
                'In view of the budget situation we have to save.',
              ),
              you(
                'Aber nicht zulasten der Schulen!',
                ['Aber nicht zulasten den Schulen!', 'zulasten takes the genitive: der Schulen.'],
                [
                  'Aber nicht infolge der Schulen!',
                  'infolge = as a result of; “at the expense of” is zulasten.',
                ],
              ),
              say(
                'Bürgermeister',
                'Seitens der Verwaltung wurden bereits Alternativen geprüft.',
                'The administration has already examined alternatives.',
              ),
              you(
                'Hinsichtlich der Kosten möchte ich genaue Zahlen sehen.',
                [
                  'Hinsichtlich den Kosten möchte ich genaue Zahlen sehen.',
                  'hinsichtlich takes the genitive: der Kosten.',
                ],
                [
                  'Zwecks der Kosten möchte ich genaue Zahlen sehen.',
                  'zwecks = for the purpose of; “regarding” is hinsichtlich.',
                ],
              ),
            ],
          },
          {
            id: 'wahlabend',
            title: 'Am Wahlabend',
            emoji: '📺',
            setting: 'A TV commentator asks for your view on the result.',
            turns: [
              say(
                'Moderatorin',
                'Infolge der niedrigen Wahlbeteiligung ist das Ergebnis umstritten.',
                'Because of the low turnout the result is controversial.',
              ),
              you(
                'Mittels einer Briefwahl hätte man mehr Menschen erreicht.',
                [
                  'Mittels einem Briefwahl hätte man mehr Menschen erreicht.',
                  'mittels takes the genitive; Briefwahl is feminine: einer Briefwahl.',
                ],
                [
                  'Seitens einer Briefwahl hätte man mehr Menschen erreicht.',
                  'seitens = on the part of; “by means of” is mittels.',
                ],
              ),
              say('Moderatorin', 'Und die Opposition?', 'And the opposition?'),
              you(
                'Sie stimmte aufgrund des Kompromisses zu.',
                [
                  'Sie stimmte aufgrund dem Kompromiss zu.',
                  'aufgrund takes the genitive: des Kompromisses.',
                ],
                [
                  'Sie stimmte aufgrund den Kompromisses zu.',
                  'Masculine genitive singular: des Kompromisses.',
                ],
              ),
            ],
          },
        ],
      },
    ),
    activity(
      U,
      'blitz',
      'blitz',
      meta('Genitive blitz', 'True or false: formal prepositions.', [...grammarTags], 3, 2),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Angesichts, infolge und aufgrund stehen mit dem Genitiv.', true),
          tf('b2', '„infolge der Krise“ ist richtig.', true),
          tf(
            'b3',
            '„zugunsten dem Bürger“ ist richtig.',
            false,
            'Genitive: zugunsten des Bürgers.',
          ),
          tf('b4', '„seitens der Regierung“ bedeutet „von der Regierung aus“.', true),
          tf('b5', '„zwecks“ drückt einen Zweck aus.', true),
          tf('b6', '„mittels“ bedeutet „mithilfe von“.', true),
          tf('b7', 'Maskuline Nomen bekommen im Genitiv Singular oft -s oder -es.', true),
          tf('b8', '„hinsichtlich“ bedeutet „wegen“.', false, 'It means “with regard to”.'),
          tf('b9', 'Die Gewaltenteilung trennt Legislative, Exekutive und Judikative.', true),
          tf('b10', 'Der Bundesrat vertritt die Bundesländer.', true),
          tf('b11', 'Eine Koalition ist ein Bündnis von Parteien, die gemeinsam regieren.', true),
          tf(
            'b12',
            'Die Opposition bildet die Regierung.',
            false,
            'The opposition is in parliament but not in government.',
          ),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Politics vocabulary and formal prepositions in one round.',
        ['vocabulary', 'grammar', 'c22-politics'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            q('c1', '___ der Krise wurde die Wahl verschoben. (in view of)', 'Angesichts', [
              'Zwecks',
              'Mittels',
              'Anstelle',
            ]),
            LESSON,
          ),
          withLesson(
            q('c2', 'Infolge ___ Streiks fielen alle Züge aus.', 'des', ['dem', 'den', 'der']),
            LESSON,
          ),
          withLesson(
            q('c3', 'Seitens ___ Verwaltung gab es keine Antwort.', 'der', ['des', 'dem', 'die']),
            LESSON,
          ),
          withLesson(
            q('c4', '___ (on the part of) = von … aus', 'seitens', [
              'mittels',
              'zwecks',
              'infolge',
            ]),
            LESSON,
          ),
          q('c5', 'Ein Bündnis von Parteien, die zusammen regieren, heißt …', 'Koalition', [
            'Opposition',
            'Verfassung',
            'Mehrheit',
          ]),
          q('c6', 'verabschieden (ein Gesetz)', 'to pass', [
            'to reject',
            'to introduce',
            'to resign',
          ]),
          q('c7', 'zurücktreten', 'to resign', ['to run for office', 'to govern', 'to vote']),
          q('c8', 'Die Zeit, für die jemand ein politisches Amt hat, ist die …', 'Amtszeit', [
            'Wahlkampf',
            'Mehrheit',
            'Gewaltenteilung',
          ]),
          q('c9', 'umstritten', 'controversial', ['cross-party', 'binding', 'unanimous']),
          q('c10', 'der Volksentscheid', 'referendum', ['election campaign', 'budget', 'bill']),
        ],
      },
    ),
  ],
};
