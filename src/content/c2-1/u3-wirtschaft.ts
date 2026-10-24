import { byDe, flashcards, listen, memory, quizDeEn, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  meta,
  q,
  say,
  sortItems,
  sw,
  tf,
  typed,
  unitC21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'c2-1-wirtschaft';

const economy = vocabList(U, 'The economy', [
  ['Teuerungsrate', 'inflation rate', '💹', 'die', 'Teuerungsraten'],
  ['Inflationsrate', 'inflation rate', '💶', 'die'],
  ['Konjunktur', 'state of the economy, economic cycle', '🌤️', 'die'],
  ['Rezession', 'recession', '📉', 'die', 'Rezessionen'],
  ['Zinswende', 'turnaround in interest rates', '🔄', 'die'],
  ['Staatsverschuldung', 'national debt', '🏛️', 'die'],
  ['Haushaltsdefizit', 'budget deficit', '🕳️', 'das', 'Haushaltsdefizite'],
  ['Wertschöpfungskette', 'value chain', '🚚', 'die', 'Wertschöpfungsketten'],
  ['Nachfrage', 'demand', '📢', 'die'],
  ['Lohngefälle', 'pay gap', '🧾', 'das', 'Lohngefälle'],
  ['Grundeinkommen', 'basic income', '🎁', 'das'],
  ['Strafzoll', 'punitive tariff', '🤝', 'der', 'Strafzölle'],
]);

const money = vocabList(U, 'Wealth & finance', [
  ['Vermögen', 'wealth, assets', '💰', 'das'],
  ['Altersvorsorge', 'provision for old age', '🧓', 'die'],
  ['Rendite', 'return, yield', '📊', 'die', 'Renditen'],
  ['Anleger', 'investor', '🧑‍💼', 'der', 'Anleger'],
  ['Steuerlast', 'tax burden', '🧮', 'die'],
  ['Insolvenz', 'insolvency', '🧾', 'die', 'Insolvenzen'],
  ['Erbschaft', 'inheritance', '📜', 'die', 'Erbschaften'],
  ['subventionieren', 'to subsidise', '💼'],
  ['besteuern', 'to tax', '🏷️'],
  ['bezuschussen', 'to subsidise', '🎟️'],
  ['vererben', 'to bequeath', '🗝️'],
  ['wohlhabend', 'affluent, well-off', '💎'],
  ['verschuldet', 'in debt', '⛓️'],
]);

const vocab = [...economy, ...money];

export const wirtschaft: UnitContent = {
  unit: unitC21({
    id: U,
    order: 3,
    title: 'Geld & Wirtschaft',
    subtitle: 'Economy, wealth and contrast and cause clauses',
    emoji: '📊',
    goals: [
      'Follow and discuss economic news',
      'Contrast two developments and add a further reason',
      'Explain causes with dadurch, dass and zumal',
    ],
    grammar: [
      'Contrast: während, wohingegen, (an)statt dass',
      'Added reason: zumal, nämlich',
      'Cause through an action: dadurch, dass …',
    ],
    vocabFields: ['The economy', 'Wealth & finance'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-economy',
      'flashcards',
      meta(
        'The economy',
        'Konjunktur, Inflationsrate, Wertschöpfungskette – the words of the business pages.',
        ['vocabulary', 'c21-economy'],
        1,
        6,
      ),
      flashcards(economy),
    ),
    activity(
      U,
      'flash-money',
      'flashcards',
      meta(
        'Wealth & finance',
        'Rendite, Altersvorsorge, vererben – money in the long run.',
        ['vocabulary', 'c21-economy'],
        1,
        5,
      ),
      flashcards(money),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta('What does it mean?', 'Pick the English meaning.', ['vocabulary', 'c21-economy'], 2, 5),
      quizDeEn(
        byDe(
          vocab,
          'Teuerungsrate',
          'Inflationsrate',
          'Zinswende',
          'Haushaltsdefizit',
          'Wertschöpfungskette',
          'Rendite',
          'Steuerlast',
          'bezuschussen',
          'vererben',
          'verschuldet',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-economy',
      'memory',
      meta(
        'Match the words',
        'German words and their meanings.',
        ['vocabulary', 'c21-economy'],
        2,
        4,
      ),
      memory(
        byDe(
          vocab,
          'Konjunktur',
          'Nachfrage',
          'Lohngefälle',
          'Grundeinkommen',
          'Anleger',
          'Insolvenz',
          'Erbschaft',
          'wohlhabend',
        ),
      ),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      meta(
        'Hear the money words',
        'Listen and pick the meaning.',
        ['listening', 'c21-economy'],
        2,
        4,
      ),
      listen(
        byDe(
          vocab,
          'Rezession',
          'Staatsverschuldung',
          'Strafzoll',
          'Vermögen',
          'Altersvorsorge',
          'subventionieren',
          'besteuern',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'spell-economy',
      'spell',
      meta(
        'Spell the economy',
        'Unscramble, type and write what you hear.',
        ['spelling', 'c21-economy'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(vocab, 'Rendite', 'Anleger'), 'unscramble').items,
          ...spell(byDe(vocab, 'Konjunktur', 'Rezession'), 'unscramble').items,
          ...spell(byDe(vocab, 'Staatsverschuldung', 'Inflationsrate'), 'type').items,
          ...spell(byDe(vocab, 'Insolvenz'), 'type').items,
          dictation(
            'd1',
            'Die Teuerungsrate ist im Herbst leicht gesunken.',
            'The inflation rate fell slightly in autumn.',
          ),
          dictation(
            'd2',
            'Viele Anleger setzen auf eine sichere Rendite.',
            'Many investors bet on a safe return.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-connectors',
      'gapfill',
      meta(
        'während, zumal, dadurch dass',
        'Choose the connector that fits the relation.',
        ['grammar', 'c21-contrast-cause'],
        2,
        6,
      ),
      {
        items: [
          gap(
            'c1',
            'Er gibt viel Geld aus, ___ sie jeden Cent spart.',
            'während',
            ['während', 'damit', 'sodass', 'falls'],
            'He spends a lot of money, whereas she saves every cent.',
            'während (also wohingegen) contrasts two facts; the verb goes to the end.',
          ),
          gap(
            'c2',
            'Wir sollten warten, ___ die Zahlen noch unklar sind.',
            'zumal',
            ['zumal', 'obwohl', 'ehe', 'statt'],
            'We should wait, especially as the figures are still unclear.',
            'zumal adds a further, strong reason.',
          ),
          gap(
            'c3',
            'Die Opposition kritisiert die Pläne; die Regierung hält sie ___ für unvermeidlich.',
            'indes',
            ['indes', 'zumal', 'sodass', 'falls'],
            'The opposition criticises the plans; the government, meanwhile, considers them unavoidable.',
            'indes / indessen contrast two positions in formal writing (also hingegen, dagegen).',
          ),
          gap(
            'c4',
            'Er ist pleite. Er hat ___ sein ganzes Geld verspielt.',
            'nämlich',
            ['nämlich', 'deshalb', 'trotzdem', 'sodass'],
            'He is broke. You see, he gambled away all his money.',
            'nämlich introduces the reason for the previous sentence – never in position 1.',
          ),
          gap(
            'c5',
            'Die Inflation sank ___, dass die Zentralbank die Zinsen erhöhte.',
            'dadurch',
            ['dadurch', 'dafür', 'darauf', 'deshalb'],
            'Inflation fell because the central bank raised interest rates.',
            'dadurch, dass … = by (the fact that) …; the dass-clause names the cause.',
          ),
          gap(
            'c6',
            'Die Industrie wächst, ___ der Dienstleistungssektor stagniert.',
            'wohingegen',
            ['wohingegen', 'sodass', 'damit', 'falls'],
            'Industry is growing whereas the service sector is stagnating.',
          ),
          typed(
            'c7',
            'Das Projekt ist riskant, ___ die Finanzierung noch fehlt.',
            'zumal',
            'The project is risky, especially as the financing is still missing.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-relations',
      'sortit',
      meta(
        'Contrast, extra reason or plain cause?',
        'Sort the sentences by the relation they express.',
        ['grammar', 'c21-contrast-cause'],
        3,
        5,
      ),
      {
        instruction: 'What relation does the sentence express?',
        buckets: [
          { id: 'contrast', label: 'Contrast', emoji: '⚖️' },
          { id: 'extra', label: 'Extra reason (zumal, nämlich)', emoji: '➕' },
          { id: 'cause', label: 'Plain cause', emoji: '➡️' },
        ],
        items: sortItems('r', [
          ['Er spart, während sie investiert.', 'contrast'],
          ['Der Norden boomt, wohingegen der Süden stagniert.', 'contrast'],
          ['Anstatt dass die Preise fallen, steigen sie weiter.', 'contrast'],
          ['Wir verkaufen, zumal der Kurs gerade hoch ist.', 'extra'],
          ['Das Projekt ist riskant, zumal die Finanzierung fehlt.', 'extra'],
          ['Sie kauft keine Aktien; sie ist nämlich vorsichtig.', 'extra'],
          ['Die Preise steigen, weil die Nachfrage wächst.', 'cause'],
          ['Da die Zinsen sinken, lohnt sich ein Kredit.', 'cause'],
          ['Der Kurs fiel, denn die Zahlen waren schlecht.', 'cause'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Business pages',
        'Build sentences with contrast and cause clauses.',
        ['grammar', 'word-order', 'c21-contrast-cause'],
        3,
        7,
      ),
      {
        items: [
          sw(
            's1',
            'He spends a lot, whereas she saves every cent.',
            'Er gibt viel aus, wohingegen sie jeden Cent spart.',
          ),
          sw(
            's2',
            'We should wait, especially as the figures are still unclear.',
            'Wir sollten warten, zumal die Zahlen noch unklar sind.',
          ),
          sw(
            's3',
            'Instead of saving, he spends everything.',
            'Anstatt dass er spart, gibt er alles aus.',
          ),
          sw(
            's4',
            'He cannot afford the house, especially as interest rates are rising.',
            'Er kann sich das Haus nicht leisten, zumal die Zinsen steigen.',
          ),
          sw(
            's5',
            'Inflation fell because the central bank demanded higher interest.',
            'Die Teuerungsrate sank dadurch, dass die Notenbank höhere Zinsen verlangte.',
          ),
          sw(
            's6',
            'Industry is growing whereas the service sector is stagnating.',
            'Die Industrie wächst, wohingegen der Dienstleistungssektor stagniert.',
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-news',
      'listen',
      meta(
        'Economic news',
        'Understand short news items.',
        ['listening', 'c21-economy', 'c21-contrast-cause'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Die Kaufkraft sinkt, während die Mieten weiter steigen.',
            'Purchasing power is falling while rents continue to rise.',
            [
              'Purchasing power and rents are both falling.',
              'Rents fall because purchasing power rises.',
              'Purchasing power is rising and so are rents.',
            ],
          ),
          heard(
            'l2',
            'Viele Anleger zögern, zumal die Zinsen bald wieder steigen könnten.',
            'Many investors hesitate, especially as interest rates could soon rise again.',
            [
              'Many investors buy because interest rates will fall.',
              'Investors hesitate because the interest rate has already risen.',
              'Interest rates will certainly never rise again.',
            ],
          ),
          heard(
            'l3',
            'Der Staat entlastet Familien, indem er die Steuern senkt.',
            'The state relieves families by lowering taxes.',
            [
              'The state burdens families by raising taxes.',
              'Families lower taxes for the state.',
              'The state abolishes all family benefits.',
            ],
          ),
          heard(
            'l4',
            'Die Firma meldete Insolvenz an, nachdem die Lieferkette zusammengebrochen war.',
            'The company filed for insolvency after the supply chain had broken down.',
            [
              'The company filed for insolvency before the supply chain broke down.',
              'The company repaired its supply chain after the insolvency.',
              'The company grew because of a better supply chain.',
            ],
          ),
          heard(
            'l5',
            'Das Haushaltsdefizit wächst, obwohl die Steuereinnahmen steigen.',
            'The budget deficit is growing although tax revenue is rising.',
            [
              'The budget deficit shrinks because tax revenue rises.',
              'Tax revenue is falling and so is the deficit.',
              'There is no budget deficit.',
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
        'Money talks',
        'Discuss savings and the economy in a measured way.',
        ['communication', 'c21-economy', 'c21-contrast-cause'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'bank',
            title: 'Beratung zur Altersvorsorge',
            emoji: '🏦',
            setting: 'At the bank, an adviser talks about investing.',
            turns: [
              say(
                'Beraterin',
                'Welche Rendite erwarten Sie von Ihrer Altersvorsorge?',
                'What return do you expect from your pension provision?',
              ),
              you(
                'Mir ist Sicherheit wichtiger, zumal ich in zehn Jahren in Rente gehe.',
                [
                  'Mir ist Sicherheit wichtiger, zumal gehe ich in zehn Jahren in Rente.',
                  'zumal starts a subordinate clause: the verb goes to the end.',
                ],
                ['Das sage ich Ihnen nicht.', 'Not helpful for a consultation.'],
              ),
              say(
                'Beraterin',
                'Dann empfehle ich einen Mix aus Anleihen und Fonds.',
                'Then I recommend a mix of bonds and funds.',
              ),
              you(
                'Gut, wobei ich Aktien eher meiden möchte, während meine Frau mehr Risiko eingehen würde.',
                [
                  'Gut, wobei ich Aktien eher meiden möchte, während meine Frau würde mehr Risiko eingehen.',
                  'In a während-clause the verb goes to the end.',
                ],
                ['Mir egal, machen Sie, was Sie wollen.', 'Too careless for a financial decision.'],
              ),
            ],
          },
          {
            id: 'news',
            title: 'Was steckt dahinter?',
            emoji: '📰',
            setting: 'You and a friend discuss a news report.',
            turns: [
              say(
                'Jonas',
                'Die Preise sinken, und trotzdem kaufen die Leute weniger. Wieso?',
                'Prices are falling and still people buy less. Why?',
              ),
              you(
                'Vermutlich, weil sie unsicher sind, zumal viele Betriebe Stellen streichen.',
                [
                  'Vermutlich, weil sie sind unsicher, zumal viele Betriebe Stellen streichen.',
                  'In a weil-clause the verb goes to the end.',
                ],
                ['Vermutlich, damit sie unsicher sind.', 'damit expresses a purpose, not a cause.'],
              ),
              say('Jonas', 'Und der Staat?', 'And the state?'),
              you(
                'Der will die Konjunktur stützen, indem er Investitionen bezuschusst.',
                [
                  'Der will die Konjunktur stützen, indem er bezuschusst Investitionen.',
                  'The verb of an indem-clause goes to the end.',
                ],
                ['Der will die Konjunktur stützen, ohne dass.', 'The clause is incomplete.'],
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
      meta(
        'Economy blitz',
        'Contrast and cause – true or false?',
        ['grammar', 'c21-contrast-cause'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Er arbeitet, während sie schläft.', true),
          tf(
            'b2',
            'Er arbeitet, während sie schläft nicht.',
            false,
            'The verb of the clause goes to the end.',
          ),
          tf('b3', 'Wir warten, zumal es regnet.', true),
          tf('b4', 'Wir warten, zumal es regnet nicht.', false),
          tf('b5', 'Nämlich steht nie am Satzanfang.', true),
          tf(
            'b6',
            'Nämlich kann den Satz einleiten wie „Deshalb“.',
            false,
            'nämlich gives a reason; it stays inside the sentence.',
          ),
          tf('b7', 'Wohingegen drückt einen Gegensatz aus.', true),
          tf('b8', 'Zumal nennt einen zusätzlichen Grund.', true),
          tf('b9', 'Die Kaufkraft beschreibt, was man mit seinem Geld kaufen kann.', true),
          tf(
            'b10',
            'Eine Rezession ist eine Phase wirtschaftlichen Wachstums.',
            false,
            'It is a phase of decline.',
          ),
          tf('b11', 'Wer wohlhabend ist, hat wenig Geld.', false),
          tf('b12', 'Ein Mindestlohn ist die gesetzliche Untergrenze für Löhne.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Economy words and connectors in one round.',
        ['vocabulary', 'grammar', 'c21-economy'],
        3,
        6,
      ),
      {
        questions: [
          q('c1', 'Sie spart, ___ er alles ausgibt.', 'während', ['damit', 'sodass', 'falls']),
          q('c2', 'Das Haus ist zu teuer, ___ die Zinsen steigen.', 'zumal', [
            'obwohl',
            'damit',
            'bevor',
          ]),
          q('c3', '___ dass er etwas tut, wartet er ab.', 'Anstatt', [
            'Dadurch',
            'Zumal',
            'Während',
          ]),
          q('c4', 'Er ist krank. Er hat ___ drei Nächte nicht geschlafen.', 'nämlich', [
            'trotzdem',
            'zumal',
            'sodass',
          ]),
          q('c5', 'Die Preise sanken ___, dass mehr Waren angeboten wurden.', 'dadurch', [
            'dafür',
            'danach',
            'darum',
          ]),
          q('c6', 'die Rendite', 'return, yield', ['tax burden', 'inheritance', 'wealth']),
          q('c7', 'bezuschussen', 'to subsidise', ['to tax', 'to invest', 'to bequeath']),
          q('c8', 'die Zinswende', 'turnaround in interest rates', [
            'budget deficit',
            'trade agreement',
            'supply chain',
          ]),
          q('c9', 'verschuldet', 'in debt', ['affluent', 'insolvent', 'wealthy']),
          q('c10', 'Welches Wort passt zu „Bedarf an Waren“?', 'die Nachfrage', [
            'die Insolvenz',
            'die Erbschaft',
            'die Konjunktur',
          ]),
        ],
      },
    ),
  ],
};
