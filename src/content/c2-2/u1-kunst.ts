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

const U = 'c2-2-kunst';
const LESSON = 'c22-participial-attributes' as const;

const betrieb = vocabList(U, 'The art world', [
  ['Ästhetik', 'aesthetics', '✨', 'die'],
  ['Exponat', 'exhibit', '🖼️', 'das', 'Exponate'],
  ['Hauptwerk', 'major work', '🏆', 'das', 'Hauptwerke'],
  ['Finissage', 'closing event of an exhibition', '🥂', 'die', 'Finissagen'],
  ['Retrospektive', 'retrospective', '🕰️', 'die', 'Retrospektiven'],
  ['Leihgabe', 'loan (exhibit)', '🤝', 'die', 'Leihgaben'],
  ['Kurator', 'curator', '🧑‍💼', 'der', 'Kuratoren'],
  ['Kunstkritiker', 'art critic', '📝', 'der', 'Kunstkritiker'],
  ['Stifter', 'donor, benefactor', '💰', 'der', 'Stifter'],
  ['Auktion', 'auction', '🔨', 'die', 'Auktionen'],
  ['Imitat', 'imitation', '🕵️', 'das', 'Imitate'],
  ['Vitrine', 'display case', '🧱', 'die', 'Vitrinen'],
  ['Zeitgeist', 'spirit of the age', '🌀', 'der'],
]);

const urteil = vocabList(U, 'Judging a work', [
  ['eindrucksvoll', 'impressive', '🌟'],
  ['aussagekräftig', 'expressive, telling', '💬'],
  ['vielschichtig', 'multi-layered', '🧅'],
  ['provokant', 'provocative', '🔥'],
  ['effekthascherisch', 'showy, sensationalist', '🍬'],
  ['zeitlos', 'timeless', '♾️'],
  ['schlicht', 'plain, simple', '⚪'],
  ['überladen', 'overloaded, cluttered', '🎪'],
  ['verstören', 'to unsettle', '😧'],
  ['verkörpern', 'to embody, to represent', '📡'],
  ['widerspiegeln', 'to reflect', '🪞'],
  ['beleuchten', 'to shed light on', '❓'],
  ['Betrachter', 'viewer, beholder', '👀', 'der', 'Betrachter'],
  ['Wirkung', 'effect, impact', '⚡', 'die', 'Wirkungen'],
]);

const vocab = [...betrieb, ...urteil];
const grammarTags = ['grammar', LESSON, 'c22-art'] as const;

export const kunst: UnitContent = {
  unit: unitC22({
    id: U,
    order: 1,
    title: 'Kunst & Ästhetik',
    subtitle: 'Exhibitions, art criticism and describing works with participles',
    emoji: '🖼️',
    goals: [
      'Talk and write about exhibitions, works and aesthetic judgement',
      'Describe a work with Partizip I and II used as attributes',
      'Turn relative clauses into compact, extended participial attributes',
    ],
    grammar: [
      'Partizip I (active, simultaneous): die steigenden Preise = die Preise, die steigen.',
      'Partizip II (passive, completed): das restaurierte Gemälde = das Gemälde, das restauriert wurde.',
      'Partizip II of sein-verbs with active meaning: die verblassten Farben.',
      'Extended attributes: das vom Künstler 1912 gemalte Bild.',
    ],
    vocabFields: ['The art world', 'Judging a work'],
  }),
  vocab,
  activities: [
    ...vocabPath({
      unitId: U,
      topic: 'c22-art',
      lists: [
        {
          key: 'art-world',
          title: 'The art world',
          description: 'Finissage, Stifter, Imitat – who and what is behind an exhibition.',
          vocab: betrieb,
        },
        {
          key: 'judging',
          title: 'Judging a work',
          description: 'vielschichtig, schlicht, widerspiegeln – words for criticism.',
          vocab: urteil,
        },
      ],
      pictures: byDe(
        betrieb,
        'Exponat',
        'Hauptwerk',
        'Finissage',
        'Auktion',
        'Imitat',
        'Vitrine',
        'Kurator',
        'Stifter',
      ),
      picturesTitle: 'Behind the exhibition',
      picturesDescription: 'Name the art-world word.',
      listening: urteil,
      listenTitle: 'Hear the critics',
      pairs: byDe(
        urteil,
        'eindrucksvoll',
        'aussagekräftig',
        'vielschichtig',
        'provokant',
        'effekthascherisch',
        'zeitlos',
        'schlicht',
        'überladen',
      ),
      memoryTitle: 'Critic’s memory',
      memoryDescription: 'Match each judgement with its meaning.',
      unscramble: byDe(betrieb, 'Hauptwerk', 'Auktion', 'Leihgabe'),
      typeIn: byDe(betrieb, 'Imitat', 'Finissage'),
      dictations: [
        [
          'd1',
          'Die Retrospektive zeigt das gesamte Werk der Künstlerin.',
          'The retrospective shows the artist’s entire work.',
        ],
        [
          'd2',
          'Das vielschichtige Werk verstört manche Betrachter.',
          'The multi-layered work unsettles some viewers.',
        ],
      ],
    }),
    activity(
      U,
      'gap-participles',
      'gapfill',
      meta(
        'Partizip I or II?',
        'Choose the participle that fits the meaning.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'Die Besucher bewundern die vom Künstler selbst ___ Skulptur.',
              'geschaffene',
              ['geschaffene', 'schaffende', 'geschaffenen', 'zu schaffende'],
              'The visitors admire the sculpture created by the artist himself.',
              'The sculpture was created (passive, completed) → Partizip II; feminine singular after die → -e.',
            ),
            {
              schaffende:
                'Partizip I is active – a “creating” sculpture would be creating something itself.',
              geschaffenen: 'After die + feminine singular the ending is -e, not -en.',
              'zu schaffende':
                'zu + Partizip I means “still to be created”; the sculpture already exists.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Das ___ Publikum applaudierte minutenlang.',
              'begeisterte',
              ['begeisterte', 'begeisternde', 'begeisterten', 'begeistertes'],
              'The enthusiastic audience applauded for minutes.',
              'The audience is inspired (passive meaning) → Partizip II; after das the ending is -e.',
            ),
            {
              begeisternde:
                'Partizip I would mean that the audience inspires others; here it is inspired.',
              begeisterten: 'After das + neuter singular the ending is -e.',
              begeistertes: 'After the definite article das the adjective ending is -e, not -es.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'Die ___ Farben des Bildes wirken kühl.',
              'leuchtenden',
              ['leuchtenden', 'leuchtende', 'geleuchteten', 'leuchtet'],
              'The glowing colours of the picture look cool.',
              'The colours are glowing right now (active, simultaneous) → Partizip I; plural after die → -en.',
            ),
            {
              leuchtende: 'After die in the plural the weak ending is -en.',
              geleuchteten:
                'leuchten is intransitive: there is no Partizip II attribute for an ongoing glow.',
              leuchtet:
                'A finite verb cannot stand before the noun; use the participle with an ending.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Das seit Jahren ___ Museum soll im Herbst wieder öffnen.',
              'geschlossene',
              ['geschlossene', 'schließende', 'geschlossenes', 'geschlossenen'],
              'The museum, closed for years, is to reopen in autumn.',
              'A completed result → Partizip II; neuter singular after das → -e.',
            ),
            {
              schließende:
                'Partizip I would say the museum is in the act of closing; it has been closed for years.',
              geschlossenes: 'After das the adjective ending is -e.',
              geschlossenen: 'Nominative singular after das ends in -e.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Die in der Ausstellung ___ Werke stammen aus dem 19. Jahrhundert.',
              'gezeigten',
              ['gezeigten', 'zeigenden', 'gezeigte', 'zu zeigenden'],
              'The works shown in the exhibition date from the 19th century.',
              'The works are shown (passive) → Partizip II; plural after die → -en.',
            ),
            {
              zeigenden: 'Partizip I is active – the works would be doing the showing.',
              gezeigte: 'Plural after die takes -en.',
              'zu zeigenden':
                'zu + Partizip I means “which are to be shown”, not “which are shown”.',
            },
          ),
          withWhy(
            gap(
              'g6',
              'Der ___ Betrachter wagt sich nicht näher an das Werk heran.',
              'zögernde',
              ['zögernde', 'gezögerte', 'zögernden', 'zögerte'],
              'The hesitating viewer does not dare to come closer to the work.',
              'An action in progress → Partizip I; masculine singular after der → -e.',
            ),
            {
              gezögerte: 'zögern is intransitive (haben): it has no attributive Partizip II.',
              zögernden: 'Nominative masculine singular after der ends in -e.',
              zögerte: 'That is the simple past, which cannot stand before a noun.',
            },
          ),
          withWhy(
            gap(
              'g7',
              'Die im Lauf der Jahre ___ Farben wurden aufwendig restauriert.',
              'verblassten',
              ['verblassten', 'verblassenden', 'verblasste', 'verblassende'],
              'The colours that had faded over the years were painstakingly restored.',
              'verblassen forms its perfect with sein: the Partizip II has an active, completed meaning.',
            ),
            {
              verblassenden:
                'Partizip I would mean the colours are fading right now; here the fading is finished.',
              verblasste: 'Plural after die takes -en.',
              verblassende: 'Partizip I is wrong here and the plural ending would be -en.',
            },
          ),
          typed(
            'g8',
            'Das ___ (stehlen) Gemälde tauchte nach Jahren wieder auf.',
            'gestohlene',
            'The stolen painting resurfaced after years.',
            'stehlen → gestohlen (passive, completed); neuter singular after das → -e.',
          ),
          typed(
            'g9',
            'Der Kunstmarkt reagiert nervös auf die ___ (steigen) Preise.',
            'steigenden',
            'The art market reacts nervously to the rising prices.',
            'Active and ongoing → Partizip I (steigend); accusative plural after die → -en.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-participles',
      'sortit',
      meta(
        'Which participle?',
        'Partizip I, Partizip II (passive) or Partizip II of a sein-verb?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'What kind of participle stands before the noun?',
        buckets: [
          { id: 'p1', label: 'Partizip I (active)', emoji: '▶️' },
          { id: 'p2', label: 'Partizip II (passive)', emoji: '✔️' },
          { id: 'p2a', label: 'Partizip II of a sein-verb (active)', emoji: '🥀' },
        ],
        items: sortItems('p', [
          ['die steigenden Preise', 'p1'],
          ['der lachende Betrachter', 'p1'],
          ['ein überzeugendes Argument', 'p1'],
          ['die schlafende Katze', 'p1'],
          ['das restaurierte Gemälde', 'p2'],
          ['die gefälschte Signatur', 'p2'],
          ['der geplante Umbau', 'p2'],
          ['das gestohlene Meisterwerk', 'p2'],
          ['die verblühte Rose', 'p2a'],
          ['der eingeschlafene Fuß', 'p2a'],
          ['die vergangene Epoche', 'p2a'],
          ['der gestiegene Eintrittspreis', 'p2a'],
        ]),
      },
    ),
    activity(
      U,
      'quiz-transform',
      'quiz',
      meta(
        'Relative clause → participle',
        'Compress the relative clause into an attribute.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            't1',
            'das Bild, das von einem Schüler gemalt wurde',
            'das von einem Schüler gemalte Bild',
            [
              'das von einem Schüler malende Bild',
              'das von einem Schüler zu malende Bild',
              'das von einem Schüler gemalt Bild',
            ],
            'Passive meaning → Partizip II; the details stand between article and participle.',
          ),
          q(
            't2',
            'die Farben, die leuchten',
            'die leuchtenden Farben',
            ['die geleuchteten Farben', 'die leuchtende Farben', 'die zu leuchtenden Farben'],
            'Active and simultaneous → Partizip I (infinitive + d) with the plural ending -en.',
          ),
          q(
            't3',
            'der Künstler, der seit Jahren in Wien lebt',
            'der seit Jahren in Wien lebende Künstler',
            [
              'der seit Jahren in Wien gelebte Künstler',
              'der in Wien seit Jahren zu lebende Künstler',
              'der seit Jahren lebende in Wien Künstler',
            ],
            'The whole block “seit Jahren in Wien” moves in front of the participle.',
          ),
          q(
            't4',
            'die Ausstellung, die von der Stadt finanziert wird',
            'die von der Stadt finanzierte Ausstellung',
            [
              'die von der Stadt finanzierende Ausstellung',
              'die von der Stadt zu finanzierte Ausstellung',
              'die finanzierte von der Stadt Ausstellung',
            ],
            'wird finanziert → Partizip II: finanziert + e.',
          ),
          q(
            't5',
            'die Besucher, die in der Schlange warten',
            'die in der Schlange wartenden Besucher',
            [
              'die in der Schlange gewarteten Besucher',
              'die wartenden in der Schlange Besucher',
              'die in der Schlange warten Besucher',
            ],
            'Active → Partizip I; the participle stands directly before the noun.',
          ),
          q(
            't6',
            'das Gemälde, das im Krieg verloren gegangen ist',
            'das im Krieg verloren gegangene Gemälde',
            [
              'das im Krieg verlorengehende Gemälde',
              'das im Krieg zu verlierende Gemälde',
              'das verloren im Krieg gegangene Gemälde',
            ],
            'Perfect with sein, completed → Partizip II (gegangen) + ending.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'gap-extended',
      'gapfill',
      meta(
        'Extended attributes',
        'Fill in the participle of a long attribute.',
        [...grammarTags],
        3,
        6,
      ),
      {
        items: [
          typed(
            'e1',
            'Die von der Kuratorin neu ___ (konzipieren) Ausstellung wurde gelobt.',
            'konzipierte',
            'The exhibition newly conceived by the curator was praised.',
            'Passive, completed → Partizip II; feminine singular after die → -e.',
          ),
          typed(
            'e2',
            'Der in der Pause lebhaft ___ (diskutieren) Entwurf wurde abgelehnt.',
            'diskutierte',
            'The design, discussed vividly in the break, was rejected.',
            'diskutiert + e (masculine singular after der).',
          ),
          typed(
            'e3',
            'Die auf dem Dachboden ___ (finden) Zeichnungen sind echt.',
            'gefundenen',
            'The drawings found in the attic are genuine.',
            'finden → gefunden; plural after die → -en.',
          ),
          typed(
            'e4',
            'Das den ganzen Saal ___ (füllen) Gemälde misst sechs Meter.',
            'füllende',
            'The painting, which fills the whole hall, measures six metres.',
            'The painting fills the hall (active, simultaneous) → Partizip I.',
          ),
          typed(
            'e5',
            'Ein von den Kritikern lange ___ (übersehen) Maler wird wiederentdeckt.',
            'übersehener',
            'A painter long overlooked by the critics is being rediscovered.',
            'Partizip II; after ein, masculine nominative → -er.',
          ),
          typed(
            'e6',
            'Die ihrer Zeit weit ___ (vorauseilen) Künstlerin starb arm.',
            'vorauseilende',
            'The artist, far ahead of her time, died poor.',
            'Active and simultaneous → Partizip I (vorauseilend) + e.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Describe the work',
        'Build sentences with extended attributes.',
        [...grammarTags],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'The picture painted by the artist in 1912 hangs in Vienna.', [
            'Das',
            'vom',
            'Künstler',
            '1912',
            'gemalte',
            'Bild',
            'hängt',
            'in',
            'Wien.',
          ]),
          sent('s2', 'The visitors waiting outside are getting impatient.', [
            'Die',
            'draußen',
            'wartenden',
            'Besucher',
            'werden',
            'ungeduldig.',
          ]),
          sent('s3', 'The retrospective shows the works created over decades.', [
            'Die',
            'Retrospektive',
            'zeigt',
            'die',
            'über',
            'Jahrzehnte',
            'entstandenen',
            'Werke.',
          ]),
          sent('s4', 'The shimmering colours impressed the viewer deeply.', [
            'Die',
            'schimmernden',
            'Farben',
            'haben',
            'den',
            'Betrachter',
            'tief',
            'beeindruckt.',
          ]),
          sent(
            's5',
            'The long overlooked painter is celebrated today.',
            ['Der', 'lange', 'übersehene', 'Maler', 'wird', 'heute', 'gefeiert.'],
            { alsoAccept: ['Heute wird der lange übersehene Maler gefeiert.'] },
          ),
          sent('s6', 'The auction house sells the paintings stolen in 1998.', [
            'Das',
            'Auktionshaus',
            'verkauft',
            'die',
            '1998',
            'gestohlenen',
            'Gemälde.',
          ]),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'listen-reviews',
      'listen',
      meta(
        'At the exhibition',
        'Listen to remarks from visitors and critics.',
        ['listening', 'c22-art'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Die vielschichtige Installation verstört mehr, als sie erklärt.',
            'The multi-layered installation unsettles more than it explains.',
            [
              'The simple installation explains everything.',
              'The installation was removed before the opening.',
              'The installation is not worth seeing.',
            ],
          ),
          heard(
            'l2',
            'Die lange vergessene Malerin erlebt gerade eine späte Wiederentdeckung.',
            'The long-forgotten painter is currently experiencing a late rediscovery.',
            [
              'The painter is still unknown to everyone.',
              'The painter has just forgotten her own paintings.',
              'The painter will exhibit for the first time next year.',
            ],
          ),
          heard(
            'l3',
            'Die vom Mäzen gestiftete Sammlung wird ab Herbst gezeigt.',
            'The collection donated by the patron will be shown from autumn.',
            [
              'The patron wants to sell his collection in autumn.',
              'The collection was shown last autumn.',
              'The patron has not decided yet what to donate.',
            ],
          ),
          heard(
            'l4',
            'Kritiker bezeichnen die schlichte Komposition als zeitlos.',
            'Critics call the plain composition timeless.',
            [
              'Critics find the composition outdated.',
              'Critics complain that the composition is cluttered.',
              'Critics have never seen the composition.',
            ],
          ),
          heard(
            'l5',
            'Die Fälschung wurde erst nach Jahren entlarvt.',
            'The forgery was only exposed after years.',
            [
              'The forgery was noticed immediately.',
              'The forgery was sold for a high price.',
              'The forgery was never found.',
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
        'Opening night',
        'Talk about works with extended participles.',
        ['communication', 'c22-participial-attributes', 'c22-art'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'vernissage',
            title: 'Auf der Vernissage',
            emoji: '🥂',
            setting: 'You meet the curator, Frau Brandt, at the opening of an exhibition.',
            turns: [
              say(
                'Frau Brandt',
                'Wie gefällt Ihnen die Ausstellung?',
                'How do you like the exhibition?',
              ),
              you(
                'Beeindruckend – besonders die von Frauen geschaffenen Werke.',
                [
                  'Beeindruckend – besonders die von Frauen schaffenden Werke.',
                  'Partizip II (geschaffen): the works were created; schaffend would be active.',
                ],
                [
                  'Beeindruckend – besonders die Werke von Frauen geschaffene.',
                  'The participle belongs before the noun: die … geschaffenen Werke.',
                ],
              ),
              say(
                'Frau Brandt',
                'Danke! Die Auswahl war schwierig, weil viele Leihgaben erst spät eintrafen.',
                'Thank you! The selection was difficult because many loans only arrived late.',
              ),
              you(
                'Die erst spät eingetroffenen Leihgaben haben die Planung sicher erschwert.',
                [
                  'Die erst spät eintreffenden Leihgaben haben die Planung sicher erschwert.',
                  'The arrival is finished: Partizip II of the sein-verb (eingetroffen).',
                ],
                [
                  'Die erst spät eingetroffene Leihgaben haben die Planung sicher erschwert.',
                  'Plural after die → -en: eingetroffenen.',
                ],
              ),
            ],
          },
          {
            id: 'kitsch',
            title: 'Kunst oder Kitsch?',
            emoji: '🤔',
            setting: 'You and your friend Jonas stand in front of a huge installation.',
            turns: [
              say('Jonas', 'Und? Kunst oder Kitsch?', 'Well? Art or kitsch?'),
              you(
                'Eher ein provokantes Spiel mit dem Zeitgeist.',
                [
                  'Eher ein provokant Spiel mit dem Zeitgeist.',
                  'Before a noun the adjective needs an ending: ein provokantes Spiel.',
                ],
                [
                  'Eher ein provokantes Spiel mit der Zeitgeist.',
                  'mit + dative; der Zeitgeist is masculine → mit dem Zeitgeist.',
                ],
              ),
              say(
                'Jonas',
                'Mir ist das zu überladen. Ich mag schlichte Formen.',
                'To me it is too cluttered. I like plain forms.',
              ),
              you(
                'Mich verstört gerade das Überladene – es spiegelt unsere Zeit wider.',
                [
                  'Mich verstört gerade das überladene – es spiegelt unsere Zeit wider.',
                  'A participle or adjective used as a noun is capitalised: das Überladene.',
                ],
                [
                  'Mich verstöre gerade das Überladene – es spiegelt unsere Zeit wider.',
                  'The subject is das Überladene (3rd person singular): verstört.',
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
      meta('Participle blitz', 'True or false: participles before nouns.', [...grammarTags], 3, 2),
      {
        seconds: 60,
        statements: [
          tf('b1', 'In „die steigenden Preise“ steht ein Partizip I.', true),
          tf(
            'b2',
            'In „das gemalte Bild“ steht ein Partizip I.',
            false,
            'gemalt is a Partizip II.',
          ),
          tf('b3', 'Das Partizip I bildet man aus Infinitiv + d.', true),
          tf('b4', '„das restaurierte Gemälde“ = das Gemälde, das restauriert wurde.', true),
          tf(
            'b5',
            '„die leuchtenden Farben“ = die Farben, die beleuchtet werden.',
            false,
            'Partizip I is active: die Farben, die leuchten.',
          ),
          tf('b6', '„das vom Maler gemalte Bild“ ist ein erweitertes Partizipialattribut.', true),
          tf(
            'b7',
            '„die gestohlene Gemälde“ ist richtig.',
            false,
            'Plural after die: die gestohlenen Gemälde.',
          ),
          tf('b8', 'In „der verblasste Stoff“ hat das Partizip II eine aktive Bedeutung.', true),
          tf(
            'b9',
            'Bei transitiven Verben hat das Partizip II als Attribut meist passive Bedeutung.',
            true,
          ),
          tf(
            'b10',
            'Von „lachen“ kann man „das gelachte Kind“ bilden.',
            false,
            'lachen is intransitive (haben): das lachende Kind.',
          ),
          tf('b11', 'Eine Vernissage ist die Eröffnung einer Ausstellung.', true),
          tf(
            'b12',
            'Ein Mäzen malt die Bilder selbst.',
            false,
            'A patron finances art and artists.',
          ),
        ].map((x) => ({ ...x })),
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Art words and participles in one round.',
        ['vocabulary', 'grammar', 'c22-art'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            q('c1', 'die ___ Preise (steigen)', 'steigenden', [
              'gestiegenden',
              'steigende',
              'gestiegt',
            ]),
            LESSON,
          ),
          withLesson(
            q('c2', 'das ___ Bild (malen)', 'gemalte', ['malende', 'gemalten', 'malte']),
            LESSON,
          ),
          q('c3', 'Die Komposition ist so schlicht und ___, dass sie kaum altert.', 'zeitlos', [
            'effekthascherisch',
            'überladen',
            'provokant',
          ]),
          q('c4', 'Ein Werk mit vielen Bedeutungen ist …', 'vielschichtig', [
            'schlicht',
            'effekthascherisch',
            'überladen',
          ]),
          q('c5', 'Wer Kunst und Künstler finanziell fördert, ist ein …', 'Mäzen', [
            'Kurator',
            'Betrachter',
            'Kunstkritiker',
          ]),
          withLesson(
            q('c6', 'das Gemälde, das im Krieg verloren ging', 'das im Krieg verlorene Gemälde', [
              'das im Krieg verlierende Gemälde',
              'das im Krieg verlorenen Gemälde',
              'das im Krieg zu verlierende Gemälde',
            ]),
            LESSON,
          ),
          q('c7', 'verstören', 'to unsettle', [
            'to convey',
            'to reflect',
            'to question critically',
          ]),
          q('c8', 'widerspiegeln', 'to reflect', [
            'to unsettle',
            'to convey',
            'to question critically',
          ]),
          q('c9', 'der Zeitgeist', 'spirit of the age', [
            'time zone',
            'contemporary witness',
            'timetable',
          ]),
          withLesson(
            q('c10', 'Der ___ Betrachter bleibt lange stehen. (staunen)', 'staunende', [
              'gestaunte',
              'staunenden',
              'gestaunt',
            ]),
            LESSON,
          ),
        ],
      },
    ),
  ],
};
