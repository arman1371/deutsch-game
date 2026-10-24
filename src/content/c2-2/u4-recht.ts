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

const U = 'c2-2-recht';
const LESSON = 'c22-gerundive' as const;

const gericht = vocabList(U, 'Courts & crime', [
  ['Delikt', 'offence', '🚨', 'das', 'Delikte'],
  ['Angeklagte', 'defendant (adjectival noun)', '🧑‍🦱', 'der', 'Angeklagten'],
  ['Anklage', 'indictment, charge', '👉', 'die', 'Anklagen'],
  ['Verhandlung', 'hearing, trial', '🏛️', 'die', 'Verhandlungen'],
  ['Richterspruch', 'judge’s ruling', '🔨', 'der', 'Richtersprüche'],
  ['Freispruch', 'acquittal', '🕊️', 'der', 'Freisprüche'],
  ['Gutachten', 'expert opinion', '📄', 'das', 'Gutachten'],
  ['Indiz', 'circumstantial evidence', '🔎', 'das', 'Indizien'],
  ['Revision', 'appeal on points of law', '📤', 'die', 'Revisionen'],
  ['Bewährung', 'probation', '⏳', 'die'],
  ['Staatsanwalt', 'public prosecutor', '👔', 'der', 'Staatsanwälte'],
  ['Kläger', 'plaintiff', '🙋', 'der', 'Kläger'],
  ['Verjährung', 'statute of limitations', '⌛', 'die'],
  ['Wiedergutmachung', 'reparation, redress', '💶', 'die'],
]);

const verfahren = vocabList(U, 'Legal procedure', [
  ['anklagen', 'to charge', '☝️'],
  ['belangen', 'to prosecute, to hold liable', '⚖️'],
  ['freisprechen', 'to acquit', '✅'],
  ['vorladen', 'to summon', '📬'],
  ['bestreiten', 'to deny, to dispute', '🙅'],
  ['rechtskräftig', 'legally binding, final', '📌'],
  ['sittenwidrig', 'contrary to public policy', '🚫'],
  ['haftbar', 'liable', '⚠️'],
  ['schuldig', 'guilty', '😰'],
  ['Gerechtigkeit', 'justice', '🧑‍⚖️', 'die'],
  ['Verfahren', 'proceedings', '📂', 'das', 'Verfahren'],
]);

const vocab = [...gericht, ...verfahren];
const grammarTags = ['grammar', LESSON, 'c22-law'] as const;

export const recht: UnitContent = {
  unit: unitC22({
    id: U,
    order: 4,
    title: 'Recht & Gerechtigkeit',
    subtitle: 'Courts, crime and legal conflicts – zu + Partizip I and sein + zu',
    emoji: '⚖️',
    goals: [
      'Understand and describe a trial and its stages',
      'Use zu + Partizip I (Gerundiv) as a compact way to say “must or can be …-ed”',
      'Recognise sein + zu + infinitive in official language',
    ],
    grammar: [
      'Gerundive: die zu erwartende Entscheidung = die Entscheidung, die man erwarten muss.',
      'Separable verbs: die einzuhaltende Frist, die vorzuladenden Zeugen',
      'sein + zu + infinitive: Der Antrag ist bis Freitag einzureichen.',
      'Contrast with Partizip I and II: die klagende Partei, das gefällte Urteil',
    ],
    vocabFields: ['Courts & crime', 'Legal procedure'],
  }),
  vocab,
  activities: [
    ...vocabPath({
      unitId: U,
      topic: 'c22-law',
      lists: [
        {
          key: 'court',
          title: 'Courts & crime',
          description: 'Anklage, Indiz, Revision – what happens in a trial.',
          vocab: gericht,
        },
        {
          key: 'procedure',
          title: 'Legal procedure',
          description: 'belangen, bestreiten, rechtskräftig – the language of the law.',
          vocab: verfahren,
        },
      ],
      pictures: byDe(
        gericht,
        'Delikt',
        'Angeklagte',
        'Verhandlung',
        'Richterspruch',
        'Freispruch',
        'Indiz',
        'Staatsanwalt',
        'Wiedergutmachung',
      ),
      picturesTitle: 'In the courtroom',
      picturesDescription: 'Name the legal word.',
      listening: verfahren,
      listenTitle: 'Hear the verdict',
      pairs: byDe(
        verfahren,
        'anklagen',
        'belangen',
        'freisprechen',
        'vorladen',
        'bestreiten',
        'rechtskräftig',
        'sittenwidrig',
        'haftbar',
      ),
      memoryTitle: 'Legal memory',
      memoryDescription: 'Match each legal term with its meaning.',
      unscramble: byDe(gericht, 'Anklage', 'Gutachten', 'Revision'),
      typeIn: byDe(gericht, 'Verjährung', 'Staatsanwalt'),
      dictations: [
        [
          'd1',
          'Das Urteil ist noch nicht rechtskräftig.',
          'The verdict is not yet legally binding.',
        ],
        ['d2', 'Der Angeklagte wurde freigesprochen.', 'The defendant was acquitted.'],
      ],
    }),
    activity(
      U,
      'gap-gerundive',
      'gapfill',
      meta(
        'zu erwartende, einzuhaltende …',
        'Form zu + Partizip I and choose the right participle.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'Die ___ Entscheidung des Gerichts fällt im Mai.',
              'zu erwartende',
              ['zu erwartende', 'erwartende', 'erwartete', 'zu erwarten'],
              'The expected decision of the court will be made in May.',
              'A decision that can be expected (passive meaning) → zu + Partizip I + ending.',
            ),
            {
              erwartende: 'Partizip I alone is active: “expecting”.',
              erwartete:
                'Partizip II would mean “was expected (and perhaps came)”, not “is to be expected”.',
              'zu erwarten': 'Before a noun the participle needs an ending: zu erwartende.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Das nicht ___ Risiko einer Verurteilung ist hoch.',
              'zu unterschätzende',
              ['zu unterschätzende', 'unterschätzende', 'unterschätzte', 'zu unterschätzte'],
              'The risk of a conviction, which is not to be underestimated, is high.',
              'nicht zu unterschätzen = must not be underestimated; neuter after das → -e.',
            ),
            {
              unterschätzende:
                'Partizip I alone is active: the risk would be underestimating something.',
              unterschätzte: 'Partizip II means “has been underestimated”, not “must not be”.',
              'zu unterschätzte': 'zu combines with Partizip I (…d), not with Partizip II.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'Die ___ Frist endet am Freitag.',
              'einzuhaltende',
              ['einzuhaltende', 'zu einhaltende', 'einhaltende', 'eingehaltene'],
              'The deadline that has to be observed ends on Friday.',
              'With separable verbs zu sits between prefix and verb: ein-zu-haltende.',
            ),
            {
              'zu einhaltende': 'With a separable verb zu goes inside the word: einzuhaltende.',
              einhaltende: 'The “must be” meaning needs zu: ein-zu-haltende.',
              eingehaltene:
                'Partizip II would mean “was observed”, but the deadline is still open.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Die noch ___ Beweise sind entscheidend.',
              'vorzulegenden',
              ['vorzulegenden', 'vorlegenden', 'vorgelegten', 'zu vorlegenden'],
              'The evidence still to be presented is decisive.',
              'vorlegen is separable: vor-zu-legen; plural after die → -en.',
            ),
            {
              vorlegenden:
                'Partizip I alone is active: the evidence would be presenting something.',
              vorgelegten: 'Partizip II would mean the evidence has already been presented.',
              'zu vorlegenden': 'zu belongs between vor and legend: vorzulegenden.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Das Gericht rügte ein kaum ___ Verhalten des Angeklagten.',
              'nachzuvollziehendes',
              [
                'nachzuvollziehendes',
                'nachvollziehendes',
                'nachvollzogenes',
                'nachzuvollziehendem',
              ],
              'The court criticised conduct of the defendant that is hard to comprehend.',
              'kaum nachzuvollziehen = hardly comprehensible; ein + neuter accusative → -es.',
            ),
            {
              nachvollziehendes:
                'Without zu the participle is active; the meaning “can be followed” needs zu.',
              nachvollzogenes: 'Partizip II would mean “was followed”.',
              nachzuvollziehendem: 'Accusative neuter after ein ends in -es, not -em.',
            },
          ),
          withWhy(
            gap(
              'g6',
              'Die Klage ist innerhalb von drei Monaten ___.',
              'einzureichen',
              ['einzureichen', 'einreichen', 'eingereicht', 'zu einreichen'],
              'The complaint has to be filed within three months.',
              'sein + zu + infinitive = must be done; with a separable verb: ein-zu-reichen.',
            ),
            {
              einreichen: 'sein + zu + infinitive needs zu: einzureichen.',
              eingereicht: 'ist eingereicht would say it has already been filed.',
              'zu einreichen': 'zu goes between the prefix and the verb: einzureichen.',
            },
          ),
          typed(
            'g7',
            'Das Gericht rechnet mit der kaum ___ (vermeiden) Verurteilung.',
            'zu vermeidenden',
            'The court expects the conviction, which can hardly be avoided.',
            'zu + Partizip I; dative feminine singular after der → -en.',
          ),
          typed(
            'g8',
            'Die Frist ist bis morgen ___ (einhalten).',
            'einzuhalten',
            'The deadline has to be observed until tomorrow.',
            'sein + zu + infinitive; with separable verbs: einzuhalten.',
          ),
          typed(
            'g9',
            'Der ___ (befolgen) Grundsatz gilt für alle.',
            'zu befolgende',
            'The principle to be followed applies to everyone.',
            'befolgen is inseparable: zu befolgende.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sort-participles',
      'sortit',
      meta(
        'Active, completed or “to be …-ed”?',
        'Partizip I, Partizip II or zu + Partizip I?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'What does the participle express?',
        buckets: [
          { id: 'p1', label: 'Active (Partizip I)', emoji: '▶️' },
          { id: 'p2', label: 'Passive, completed (Partizip II)', emoji: '✔️' },
          { id: 'ger', label: 'Must or can be done (zu + Partizip I)', emoji: '📏' },
        ],
        items: sortItems('p', [
          ['die klagende Partei', 'p1'],
          ['der schweigende Zeuge', 'p1'],
          ['die laufenden Ermittlungen', 'p1'],
          ['das gefällte Urteil', 'p2'],
          ['der verurteilte Täter', 'p2'],
          ['die eingelegte Berufung', 'p2'],
          ['das beschlagnahmte Geld', 'p2'],
          ['die zu zahlende Strafe', 'ger'],
          ['der nicht zu beweisende Vorwurf', 'ger'],
          ['die abzugebende Erklärung', 'ger'],
          ['das zu erwartende Urteil', 'ger'],
          ['die vorzuladenden Zeugen', 'ger'],
        ]),
      },
    ),
    activity(
      U,
      'quiz-transform',
      'quiz',
      meta(
        'Relative clause → Gerundiv',
        'Turn “…, die man … muss” into zu + Partizip I.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            't1',
            'die Entscheidung, die man erwarten muss',
            'die zu erwartende Entscheidung',
            [
              'die erwartende Entscheidung',
              'die erwartete Entscheidung',
              'die zu erwartet Entscheidung',
            ],
            'Necessity or possibility, passive meaning → zu + Partizip I + ending.',
          ),
          q(
            't2',
            'die Unterlagen, die man bis Montag einreichen muss',
            'die bis Montag einzureichenden Unterlagen',
            [
              'die bis Montag zu einreichenden Unterlagen',
              'die bis Montag einreichenden Unterlagen',
              'die bis Montag eingereichten Unterlagen',
            ],
            'ein-zu-reichen: zu sits between prefix and verb; plural after die → -en.',
          ),
          q(
            't3',
            'ein Fehler, den man nicht mehr korrigieren kann',
            'ein nicht mehr zu korrigierender Fehler',
            [
              'ein nicht mehr korrigierender Fehler',
              'ein nicht mehr korrigierter Fehler',
              'ein nicht mehr zu korrigiert Fehler',
            ],
            'ein + masculine nominative → -er.',
          ),
          q(
            't4',
            'die Kosten, die der Kläger tragen muss',
            'die vom Kläger zu tragenden Kosten',
            [
              'die vom Kläger tragenden Kosten',
              'die vom Kläger getragenen Kosten',
              'die zu vom Kläger tragenden Kosten',
            ],
            'The agent (vom Kläger) stands in front of zu tragenden.',
          ),
          q(
            't5',
            'ein Urteil, das man nicht mehr anfechten kann',
            'ein nicht mehr anzufechtendes Urteil',
            [
              'ein nicht mehr anfechtendes Urteil',
              'ein nicht mehr angefochtenes Urteil',
              'ein nicht mehr zu anfechtendes Urteil',
            ],
            'an-zu-fechten: zu sits between prefix and verb; ein + neuter → -es.',
          ),
          q(
            't6',
            'die Zeugen, die man noch vorladen muss',
            'die noch vorzuladenden Zeugen',
            [
              'die noch vorladenden Zeugen',
              'die noch vorgeladenen Zeugen',
              'die noch zu vorladenden Zeugen',
            ],
            'vor-zu-laden + -den.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Official German',
        'Build sentences with Gerundiv and sein + zu.',
        [...grammarTags],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'The expected judgment is a suspended sentence.', [
            'Das',
            'zu',
            'erwartende',
            'Urteil',
            'ist',
            'eine',
            'Bewährungsstrafe.',
          ]),
          sent('s2', 'The deadline to be observed ends on Friday.', [
            'Die',
            'einzuhaltende',
            'Frist',
            'endet',
            'am',
            'Freitag.',
          ]),
          sent('s3', 'The costs to be borne by the plaintiff are high.', [
            'Die',
            'vom',
            'Kläger',
            'zu',
            'tragenden',
            'Kosten',
            'sind',
            'hoch.',
          ]),
          sent('s4', 'The application must be submitted in writing.', [
            'Der',
            'Antrag',
            'ist',
            'schriftlich',
            'einzureichen.',
          ]),
          sent('s5', 'The witnesses still to be summoned live abroad.', [
            'Die',
            'noch',
            'vorzuladenden',
            'Zeugen',
            'leben',
            'im',
            'Ausland.',
          ]),
          sent('s6', 'The judgment, which can no longer be appealed, is final.', [
            'Das',
            'nicht',
            'mehr',
            'anzufechtende',
            'Urteil',
            'ist',
            'rechtskräftig.',
          ]),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'listen-court',
      'listen',
      meta('In court', 'Listen to a trial report.', ['listening', 'c22-law'], 3, 5),
      {
        items: [
          heard(
            'l1',
            'Die zu erwartende Strafe liegt bei mehreren Jahren Haft.',
            'The expected sentence is several years in prison.',
            [
              'The sentence was reduced to a fine.',
              'The defendant has already served several years.',
              'The court has not set a sentence yet and will not.',
            ],
          ),
          heard(
            'l2',
            'Der Antrag ist bis Freitag schriftlich einzureichen.',
            'The application must be submitted in writing by Friday.',
            [
              'The application has already been submitted.',
              'The application can be submitted orally on Friday.',
              'The application was rejected on Friday.',
            ],
          ),
          heard(
            'l3',
            'Das Gericht hat die Berufung des Angeklagten verworfen.',
            'The court has dismissed the defendant’s appeal.',
            [
              'The court has accepted the defendant’s appeal.',
              'The defendant has withdrawn his appeal.',
              'The court will hear the appeal next year.',
            ],
          ),
          heard(
            'l4',
            'Der Zeuge schwieg zu den gegen ihn erhobenen Vorwürfen.',
            'The witness remained silent about the accusations made against him.',
            [
              'The witness confirmed all the accusations.',
              'The witness accused the court.',
              'The witness was not asked any questions.',
            ],
          ),
          heard(
            'l5',
            'Die Verjährung tritt nach fünf Jahren ein.',
            'The statute of limitations takes effect after five years.',
            [
              'The trial begins after five years.',
              'The statute of limitations was abolished five years ago.',
              'The sentence is five years long.',
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
        'At the lawyer’s',
        'Use zu + Partizip I and sein + zu in formal talk.',
        ['communication', LESSON, 'c22-law'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'anwaeltin',
            title: 'Beim Rechtsanwalt',
            emoji: '👩‍⚖️',
            setting: 'You consult a lawyer about a contract dispute.',
            turns: [
              say(
                'Anwältin',
                'Wir müssen bis Freitag einige Unterlagen einreichen.',
                'We have to submit some documents by Friday.',
              ),
              you(
                'Welche bis Freitag einzureichenden Unterlagen brauchen Sie von mir?',
                [
                  'Welche bis Freitag einreichenden Unterlagen brauchen Sie von mir?',
                  'For “have to be submitted” you need zu + Partizip I: einzureichenden.',
                ],
                [
                  'Welche bis Freitag zu einreichenden Unterlagen brauchen Sie von mir?',
                  'With a separable verb zu goes inside the word: einzureichenden.',
                ],
              ),
              say(
                'Anwältin',
                'Den Vertrag und den Kontoauszug. Dann sehen wir weiter.',
                'The contract and the bank statement. Then we will see.',
              ),
              you(
                'Und mit welcher Entscheidung ist zu rechnen?',
                [
                  'Und mit welcher Entscheidung ist gerechnet zu?',
                  'sein + zu + infinitive: ist zu rechnen.',
                ],
                [
                  'Und mit welcher Entscheidung wird zu rechnen?',
                  'The construction uses sein, not werden: ist zu rechnen.',
                ],
              ),
            ],
          },
          {
            id: 'nach-verhandlung',
            title: 'Nach der Verhandlung',
            emoji: '🎙️',
            setting: 'A reporter asks you about the verdict outside the courtroom.',
            turns: [
              say('Reporter', 'Wie beurteilen Sie das Urteil?', 'How do you assess the verdict?'),
              you(
                'Das Urteil war zu erwarten – die Beweise waren kaum zu widerlegen.',
                [
                  'Das Urteil war erwarten zu – die Beweise waren kaum zu widerlegen.',
                  'zu stands directly before the infinitive: zu erwarten.',
                ],
                [
                  'Das Urteil war zu erwartet – die Beweise waren kaum zu widerlegen.',
                  'zu needs the infinitive (erwarten), not the participle.',
                ],
              ),
              say('Reporter', 'Wird es eine Berufung geben?', 'Will there be an appeal?'),
              you(
                'Die einzulegende Berufung ist bereits vorbereitet.',
                [
                  'Die einlegende Berufung ist bereits vorbereitet.',
                  'einlegend would be active; an appeal that is still to be lodged is einzulegende.',
                ],
                [
                  'Die eingelegte Berufung ist bereits vorbereitet.',
                  'eingelegte means “already lodged” – here it is still to be lodged.',
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
      meta('Gerundive blitz', 'True or false: zu + Partizip I.', [...grammarTags], 3, 2),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Das Gerundiv bildet man mit „zu“ + Partizip I + Endung.', true),
          tf(
            'b2',
            '„die zu erwartende Strafe“ = die Strafe, die man erwarten muss oder kann.',
            true,
          ),
          tf(
            'b3',
            'Bei trennbaren Verben sagt man „die zu einzuhaltende Frist“.',
            false,
            'zu sits inside: die einzuhaltende Frist.',
          ),
          tf('b4', '„Der Antrag ist zu stellen“ drückt eine Notwendigkeit aus.', true),
          tf(
            'b5',
            '„das gefällte Urteil“ enthält ein Partizip I.',
            false,
            'gefällt is a Partizip II.',
          ),
          tf(
            'b6',
            '„Die Entscheidung ist zu erwarten“ kann bedeuten: Man kann sie erwarten.',
            true,
          ),
          tf('b7', 'Das Gerundiv hat eine aktive Bedeutung.', false, 'It has a passive meaning.'),
          tf(
            'b8',
            'Ein Freispruch bedeutet, dass der Angeklagte schuldig gesprochen wird.',
            false,
            'An acquittal means he is found not guilty.',
          ),
          tf('b9', 'Ein Gutachten wird von einem Sachverständigen erstellt.', true),
          tf(
            'b10',
            'Wer Berufung einlegt, akzeptiert das Urteil.',
            false,
            'Whoever appeals does not accept the verdict.',
          ),
          tf(
            'b11',
            'Die Verjährung beendet nach einer bestimmten Zeit die Möglichkeit der Strafverfolgung.',
            true,
          ),
          tf('b12', 'Ein Staatsanwalt vertritt die Anklage.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Legal words and the Gerundiv in one round.',
        ['vocabulary', 'grammar', 'c22-law'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            q('c1', 'die Frist, die man einhalten muss = die ___ Frist', 'einzuhaltende', [
              'zu einhaltende',
              'einhaltende',
              'eingehaltene',
            ]),
            LESSON,
          ),
          withLesson(
            q('c2', 'das Urteil, das gefällt wurde = das ___ Urteil', 'gefällte', [
              'zu fällende',
              'fällende',
              'gefällten',
            ]),
            LESSON,
          ),
          withLesson(
            q('c3', 'Der Antrag ist bis morgen ___.', 'einzureichen', [
              'einreichen',
              'eingereicht',
              'zu einreichen',
            ]),
            LESSON,
          ),
          withLesson(
            q('c4', 'die ___ Zeugen (Zeugen, die noch kommen sollen: vorladen)', 'vorzuladenden', [
              'vorladenden',
              'vorgeladenen',
              'zu vorladenden',
            ]),
            LESSON,
          ),
          q('c5', 'Ein Gericht spricht ... frei: Der Angeklagte erhält einen …', 'Freispruch', [
            'Beweis',
            'Schadensersatz',
            'Täter',
          ]),
          q('c6', 'rechtskräftig', 'legally binding, final', ['unlawful', 'punishable', 'guilty']),
          q('c7', 'die Berufung', 'appeal', ['indictment', 'probation', 'statute of limitations']),
          q('c8', 'bestreiten', 'to deny, to dispute', ['to summon', 'to charge', 'to acquit']),
          q('c9', 'Wer Geld für einen erlittenen Schaden bekommt, erhält …', 'Schadensersatz', [
            'Bewährung',
            'Verjährung',
            'Freispruch',
          ]),
          q('c10', 'die Gerechtigkeit', 'justice', ['proceedings', 'verdict', 'evidence']),
        ],
      },
    ),
  ],
};
