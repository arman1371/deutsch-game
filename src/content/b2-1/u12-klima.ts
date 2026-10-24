import { byDe, flashcards, listen, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  hint,
  meta,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  unitB21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b2-1-klima';

const climate = vocabList(U, 'Climate and environment', [
  ['Erderwärmung', 'global warming', '🌡️', 'die'],
  ['Treibhausgas', 'greenhouse gas', '🏭', 'das', 'Treibhausgase'],
  ['Dürre', 'drought', '🏜️', 'die', 'Dürren'],
  ['Überschwemmung', 'flood', '🌊', 'die', 'Überschwemmungen'],
  ['Artensterben', 'loss of species', '🦋', 'das'],
  ['Gletscher', 'glacier', '🏔️', 'der', 'Gletscher'],
  ['Meeresspiegel', 'sea level', '🌐', 'der'],
  ['Energiewende', 'energy transition', '🔋', 'die'],
  ['Abholzung', 'deforestation', '🪓', 'die'],
  ['erneuerbar', 'renewable', '♻️'],
  ['schmelzen', 'to melt', '🧊'],
  ['eindämmen', 'to contain, curb', '🛑'],
]);

const globalisation = vocabList(U, 'Globalisation and economy', [
  ['Weltwirtschaft', 'global economy', '🌍', 'die'],
  ['Handelsroute', 'trade route', '🚢', 'die', 'Handelsrouten'],
  ['Handelsabkommen', 'trade agreement', '🤝', 'das', 'Handelsabkommen'],
  ['Entwicklungsland', 'developing country', '🌱', 'das', 'Entwicklungsländer'],
  ['Wohlstand', 'prosperity', '💎', 'der'],
  ['Ausbeutung', 'exploitation', '⛓️', 'die'],
  ['Abhängigkeit', 'dependence', '🪢', 'die', 'Abhängigkeiten'],
  ['Ungleichheit', 'inequality', '⚖️', 'die', 'Ungleichheiten'],
  ['Zoll', 'customs duty', '🛃', 'der', 'Zölle'],
  ['Wachstum', 'growth', '📈', 'das'],
  ['exportieren', 'to export', '📤'],
  ['fair gehandelt', 'fairly traded', '🏷️'],
]);

const nominal = vocabList(U, 'Nominalisation and contrast', [
  [
    'Die Temperaturen steigen. – Der Anstieg der Temperaturen ist gefährlich.',
    'Temperatures rise. – The rise in temperatures is dangerous.',
    '🌡️',
  ],
  [
    'Die Emissionen werden verringert. – Die Verringerung der Emissionen ist das Ziel.',
    'Emissions are reduced. – The reduction of emissions is the goal.',
    '📉',
  ],
  [
    'Während die einen Strom sparen, verbrauchen die anderen mehr.',
    'While some save electricity, others use more.',
    '💡',
  ],
  [
    'Der Norden ist reich, der Süden hat hingegen Probleme.',
    'The north is rich; the south, on the other hand, has problems.',
    '🧭',
  ],
  [
    'Die Preise steigen. Die Löhne bleiben dagegen gleich.',
    'Prices are rising. Wages, on the other hand, stay the same.',
    '💶',
  ],
  [
    'Viele Länder wollen das Klima schützen, es fehlt jedoch oft das Geld.',
    'Many countries want to protect the climate, but money is often lacking.',
    '🌿',
  ],
]);

const vocab = [...climate, ...globalisation, ...nominal];

export const klima: UnitContent = {
  unit: unitB21({
    id: U,
    order: 12,
    title: 'Klima & Globalisierung',
    subtitle:
      'Climate change, global trade and fair living – nouns instead of verbs, and contrasts',
    emoji: '🌍',
    goals: [
      'Describe climate problems and possible solutions',
      'Discuss advantages and risks of globalisation',
      'Write and understand formal texts with nominalisation',
      'Contrast two facts: während, dagegen, hingegen, jedoch',
    ],
    grammar: [
      'Nominalisation: -ung, -keit/-heit, no suffix (der Anstieg) and genitive (der Anstieg der Preise).',
      'Contrasts: während (verb at the end), dagegen / hingegen / jedoch (verb in second position).',
    ],
    vocabFields: [
      'Climate and environment',
      'Globalisation and economy',
      'Nominalisation and contrast',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-climate',
      'flashcards',
      meta(
        'Climate and environment',
        'Erderwärmung, Dürre, Energiewende – the words of the climate debate.',
        ['vocabulary', 'climate-global'],
        1,
        5,
      ),
      flashcards(climate),
    ),
    activity(
      U,
      'flash-globalisation',
      'flashcards',
      meta(
        'Globalisation and economy',
        'Handelsroute, Wohlstand, Ungleichheit – trade and fairness.',
        ['vocabulary', 'climate-global'],
        1,
        5,
      ),
      flashcards(globalisation),
    ),
    activity(
      U,
      'flash-nominal',
      'flashcards',
      meta(
        'Nominalisation and contrast',
        'Verb sentences become noun phrases; während and hingegen contrast facts.',
        ['vocabulary', 'communication', 'climate-global'],
        1,
        4,
      ),
      flashcards(nominal),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('The planet in pictures', 'Name what you see.', ['vocabulary', 'climate-global'], 1, 4),
      quizEmoji(
        byDe(
          [...climate, ...globalisation],
          'Erderwärmung',
          'Dürre',
          'Überschwemmung',
          'Gletscher',
          'Treibhausgas',
          'Handelsroute',
          'Zoll',
          'Wachstum',
        ),
      ),
    ),
    activity(
      U,
      'listen-nominal',
      'listen',
      meta(
        'Hear the sentences',
        'Listen and pick the meaning.',
        ['listening', 'climate-global'],
        2,
        4,
      ),
      listen(nominal),
    ),
    activity(
      U,
      'memory-nominal',
      'memory',
      meta(
        'Verb and noun',
        'Match the verb with the noun made from it.',
        ['vocabulary', 'nominalisation', 'climate-global'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'steigen', b: 'der Anstieg' },
          { id: 'm2', a: 'entscheiden', b: 'die Entscheidung' },
          { id: 'm3', a: 'sich verändern', b: 'die Veränderung' },
          { id: 'm4', a: 'möglich', b: 'die Möglichkeit' },
          { id: 'm5', a: 'sinken', b: 'der Rückgang' },
          { id: 'm6', a: 'verbrauchen', b: 'der Verbrauch' },
        ],
      },
    ),
    activity(
      U,
      'spell-climate',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'climate-global'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(climate, 'Erderwärmung', 'Überschwemmung', 'Energiewende'), 'unscramble')
            .items,
          ...spell(byDe(globalisation, 'Handelsroute', 'Wohlstand', 'Ungleichheit'), 'type').items,
          dictation(
            'd1',
            'Der Anstieg der Temperaturen ist gefährlich.',
            'the rise in temperatures is dangerous',
          ),
          dictation(
            'd2',
            'Während die einen sparen, verbrauchen die anderen mehr.',
            'while some save, others use more',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-formation',
      'sortit',
      meta(
        'How is the noun formed?',
        'Sort the nouns by the way they were made.',
        ['grammar', 'nominalisation'],
        2,
        4,
      ),
      {
        instruction: 'Which pattern was used to make the noun?',
        buckets: [
          { id: 'ung', label: 'Verb + -ung', emoji: '🔤' },
          { id: 'keit', label: 'Adjektiv + -keit / -heit', emoji: '🔠' },
          { id: 'stem', label: 'Verbstamm ohne Endung', emoji: '✂️' },
        ],
        items: sortItems('f', [
          ['die Entscheidung', 'ung'],
          ['die Verringerung', 'ung'],
          ['die Veränderung', 'ung'],
          ['die Möglichkeit', 'keit'],
          ['die Schwierigkeit', 'keit'],
          ['die Gesundheit', 'keit'],
          ['der Anstieg', 'stem'],
          ['der Rückgang', 'stem'],
          ['der Verbrauch', 'stem'],
        ]),
      },
    ),
    activity(
      U,
      'gap-nominal',
      'gapfill',
      meta('Verbs become nouns', 'Complete the noun phrases.', ['grammar', 'nominalisation'], 3, 6),
      {
        items: [
          hint(
            gap(
              'a1',
              'Die Preise steigen. → Der ___ der Preise ist deutlich.',
              'Anstieg',
              ['Anstieg', 'Rückgang', 'Verlust', 'Beginn'],
              'Prices rise. → The rise in prices is clear.',
              'steigen → der Anstieg (no ending).',
            ),
            {
              Rückgang: 'Rückgang is the noun for sinken (decline), the opposite of steigen.',
              Verlust: 'Verlust comes from verlieren.',
              Beginn: 'Beginn comes from beginnen.',
            },
          ),
          hint(
            gap(
              'a2',
              'Man entscheidet sich für Solarenergie. → Die ___ für Solarenergie fällt.',
              'Entscheidung',
              ['Entscheidung', 'Entschuldigung', 'Entwicklung', 'Entfernung'],
              'People choose solar energy. → The decision for solar energy is made.',
              'entscheiden → die Entscheidung (-ung).',
            ),
            {
              Entschuldigung: 'Entschuldigung comes from sich entschuldigen (to apologise).',
              Entwicklung: 'Entwicklung comes from sich entwickeln (to develop).',
              Entfernung: 'Entfernung comes from entfernen (to remove).',
            },
          ),
          hint(
            typed(
              'a3',
              'Es ist möglich. → Die ___ besteht. (möglich)',
              'Möglichkeit',
              'It is possible. → The possibility exists.',
              'Adjective + -keit makes a feminine noun.',
            ),
            { Möglichheit: 'Adjectives ending in -lich take -keit: Möglichkeit.' },
          ),
          hint(
            gap(
              'a4',
              'Die Emissionen werden verringert. → Die ___ der Emissionen ist wichtig.',
              'Verringerung',
              ['Verringerung', 'Verringern', 'Verringert', 'Geringheit'],
              'Emissions are reduced. → The reduction of emissions is important.',
              'verringern → die Verringerung (-ung).',
            ),
            {
              Verringern: 'das Verringern would be neuter; with die you need the -ung noun.',
              Verringert: 'Verringert is a verb form, not a noun.',
              Geringheit: 'Geringheit is not an established word; the noun is Verringerung.',
            },
          ),
          hint(
            gap(
              'a5',
              'Das Eis schmilzt. → Das ___ der Gletscher bedroht Städte.',
              'Schmelzen',
              ['Schmelzen', 'Schmelze', 'Geschmolzen', 'Schmelzend'],
              'The ice melts. → The melting of the glaciers threatens cities.',
              'The infinitive can be used as a neuter noun: das Schmelzen.',
            ),
            {
              Schmelze:
                'die Schmelze is a feminine noun (molten mass); with das you need das Schmelzen.',
              Geschmolzen: 'Geschmolzen is a participle, not a noun.',
              Schmelzend: 'Schmelzend is a participle used as an adjective.',
            },
          ),
          hint(
            gap(
              'a6',
              'Der Anstieg ___ Meeresspiegels macht Küsten gefährlich.',
              'des',
              ['des', 'der', 'dem', 'den'],
              'The rise of the sea level makes coasts dangerous.',
              'The “subject” of the original verb becomes a genitive: des Meeresspiegels.',
            ),
            {
              der: 'der Meeresspiegel is masculine: the genitive is des Meeresspiegels.',
              dem: 'dem is dative; the possessor needs the genitive.',
              den: 'den is accusative or dative plural.',
            },
          ),
          hint(
            typed(
              'a7',
              'Die Wirtschaft wächst. → Das ___ der Wirtschaft. (wachsen)',
              'Wachstum',
              'The economy grows. → The growth of the economy.',
              'wachsen → das Wachstum.',
            ),
            { Wachsung: 'wachsen has an irregular noun: das Wachstum, not -ung.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-contrast',
      'gapfill',
      meta(
        'Contrasting two facts',
        'Choose the right connector or verb.',
        ['grammar', 'adversative'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'c1',
              '___ die einen Strom sparen, verbrauchen die anderen immer mehr.',
              'Während',
              ['Während', 'Weil', 'Damit', 'Obwohl'],
              'While some save electricity, others use more and more.',
              'während contrasts two facts.',
            ),
            {
              Weil: 'weil gives a reason; here two facts are contrasted.',
              Damit: 'damit expresses a purpose.',
              Obwohl: 'obwohl concedes; here the facts are simply opposed.',
            },
          ),
          hint(
            gap(
              'c2',
              'Im Norden gibt es viel Industrie. Der Süden ist ___ ländlich.',
              'hingegen',
              ['hingegen', 'deshalb', 'nämlich', 'sonst'],
              'There is a lot of industry in the north. The south, on the other hand, is rural.',
              'hingegen = on the other hand.',
            ),
            {
              deshalb: 'deshalb gives a result, not a contrast.',
              nämlich: 'nämlich explains something (“namely”).',
              sonst: 'sonst means “otherwise”.',
            },
          ),
          hint(
            gap(
              'c3',
              'Die Preise steigen. Die Löhne bleiben ___ gleich.',
              'dagegen',
              ['dagegen', 'deshalb', 'darum', 'damit'],
              'Prices rise. Wages, on the other hand, stay the same.',
              'dagegen = in contrast (not “against it” here).',
            ),
            {
              deshalb: 'deshalb gives a result, not a contrast.',
              darum: 'darum gives a reason.',
              damit: 'damit means “with it” or introduces a purpose.',
            },
          ),
          hint(
            gap(
              'c4',
              'Viele Länder wollen Emissionen senken. Es fehlt ___ oft das Geld.',
              'jedoch',
              ['jedoch', 'denn', 'weil', 'dass'],
              'Many countries want to cut emissions. However, money is often lacking.',
              'jedoch is an adverb: it stands after the verb or in position 1.',
            ),
            {
              denn: 'denn gives a reason and stands in position 0.',
              weil: 'weil sends the verb to the end.',
              dass: 'dass starts a clause with the verb at the end.',
            },
          ),
          hint(
            typed(
              'c5',
              'Während die Industrie wächst, ___ die Umwelt. (leiden)',
              'leidet',
              'While industry grows, the environment suffers.',
              'After a subordinate clause the main clause starts with the verb.',
            ),
            { leiden: 'Umwelt is singular: leidet.' },
          ),
          hint(
            gap(
              'c6',
              'Hingegen ___ der Süden viele Probleme.',
              'hat',
              ['hat', 'der Süden', 'haben', 'Probleme'],
              'The south, on the other hand, has many problems.',
              'hingegen in position 1 → the conjugated verb comes next.',
            ),
            {
              'der Süden': 'The verb must come directly after hingegen.',
              haben: 'der Süden is singular: hat.',
              Probleme: 'Probleme is the object and comes later.',
            },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-contrast',
      'sentence',
      meta(
        'Build the contrast',
        'Put the words in order.',
        ['grammar', 'word-order', 'adversative'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'While some save electricity, others use more.', [
            'Während',
            'die',
            'einen',
            'Strom',
            'sparen,',
            'verbrauchen',
            'die',
            'anderen',
            'mehr.',
          ]),
          sent('s2', 'The north is rich; the south, however, has problems.', [
            'Der',
            'Norden',
            'ist',
            'reich,',
            'der',
            'Süden',
            'hat',
            'hingegen',
            'Probleme.',
          ]),
          sent('s3', 'Prices rise. Wages, however, stay the same.', [
            'Die',
            'Preise',
            'steigen.',
            'Die',
            'Löhne',
            'bleiben',
            'dagegen',
            'gleich.',
          ]),
          sent('s4', 'The reduction of emissions is the most important goal.', [
            'Die',
            'Verringerung',
            'der',
            'Emissionen',
            'ist',
            'das',
            'wichtigste',
            'Ziel.',
          ]),
          sent(
            's5',
            'Many countries want to protect the climate; however, money is often lacking.',
            [
              'Viele',
              'Länder',
              'wollen',
              'das',
              'Klima',
              'schützen,',
              'jedoch',
              'fehlt',
              'oft',
              'das',
              'Geld.',
            ],
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-climate',
      'listen',
      meta(
        'Climate and trade news',
        'Listen to short reports and pick what they say.',
        ['listening', 'climate-global'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Wegen der Erderwärmung schmelzen die Gletscher, und der Meeresspiegel steigt.',
            'Because of global warming the glaciers melt and the sea level rises.',
            [
              'The glaciers are growing and the sea level is falling.',
              'Global warming has stopped.',
              'The sea level has not changed in decades.',
            ],
          ),
          heard(
            'l2',
            'Die Regierung will die Energiewende beschleunigen und erneuerbare Energien stärker fördern.',
            'The government wants to speed up the energy transition and promote renewable energy more.',
            [
              'The government wants to build more coal power stations.',
              'The government has cancelled the energy transition.',
              'Renewable energy will be banned.',
            ],
          ),
          heard(
            'l3',
            'Durch die Globalisierung sind viele Waren billiger geworden, die Abhängigkeit von langen Lieferketten ist jedoch gewachsen.',
            'Globalisation made many goods cheaper, but dependence on long supply chains has grown.',
            [
              'Goods have become more expensive and supply chains shorter.',
              'Globalisation has no effect on prices.',
              'Supply chains are no longer important.',
            ],
          ),
          heard(
            'l4',
            'Fair gehandelte Produkte sorgen dafür, dass die Arbeiter einen gerechten Lohn bekommen.',
            'Fairly traded products ensure that workers receive a fair wage.',
            [
              'Fairly traded products make workers poorer.',
              'Workers in fair trade get no wage.',
              'Fair trade only exists for luxury goods.',
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
        'Debate and discussion',
        'Take part in a discussion on climate policy and globalisation.',
        ['communication', 'climate-global'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'carbon',
            title: 'Podiumsdiskussion: Klimaschutz',
            emoji: '🌡️',
            setting: 'At a university debate you comment on a CO₂ tax.',
            turns: [
              say(
                'Moderator',
                'Was halten Sie von einer höheren CO₂-Steuer?',
                'What do you think of a higher CO₂ tax?',
              ),
              you(
                'Während die einen höhere Preise fürchten, sehen die anderen darin eine Chance.',
                [
                  'Während die einen höhere Preise fürchten, die anderen sehen darin eine Chance.',
                  'After the subordinate clause with während the main clause starts with the verb: sehen die anderen.',
                ],
                ['Mir ist die Steuer egal.', 'Give a differentiated answer with a contrast.'],
              ),
              say(
                'Moderator',
                'Und wie wirkt sich das auf die Unternehmen aus?',
                'And what effect does that have on companies?',
              ),
              you(
                'Die Verringerung der Emissionen kostet Geld. Langfristig spart sie jedoch Kosten.',
                [
                  'Die Verringerung der Emissionen kostet Geld. Langfristig sie spart jedoch Kosten.',
                  'In a main clause the verb stays in second position: Langfristig spart sie jedoch Kosten.',
                ],
              ),
            ],
          },
          {
            id: 'trade',
            title: 'Gespräch über Globalisierung',
            emoji: '🚢',
            setting: 'Over lunch you talk with a colleague about global trade.',
            turns: [
              say(
                'Kollege',
                'Durch die Globalisierung sind viele Waren billiger geworden.',
                'Globalisation has made many goods cheaper.',
              ),
              you(
                'Das stimmt, die Ausbeutung der Arbeiter ist jedoch ein großes Problem.',
                [
                  'Das stimmt, dagegen die Ausbeutung der Arbeiter ist ein großes Problem.',
                  'dagegen is an adverb in position 1, so the verb follows: dagegen ist die Ausbeutung …',
                ],
                ['Waren sind mir egal.', 'Agree, then add a contrasting point.'],
              ),
              say('Kollege', 'Und was kann man dagegen tun?', 'And what can be done about it?'),
              you('Der Kauf fair gehandelter Produkte hilft den Menschen vor Ort.', [
                'Die Kauf fair gehandelter Produkte hilft den Menschen vor Ort.',
                'Kauf is masculine: der Kauf (the noun made from kaufen).',
              ]),
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
        'Climate blitz',
        'Nouns made from verbs and contrasts – true or false?',
        ['grammar', 'nominalisation', 'adversative'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Aus „entscheiden“ wird „die Entscheidung“.', true),
          tf('b2', 'Aus „möglich“ wird „die Möglichkeit“.', true),
          tf('b3', 'Aus „steigen“ wird „die Anstieg“.', false, 'Der Anstieg is masculine.'),
          tf('b4', 'Während die einen sparen, verbrauchen die anderen mehr.', true),
          tf(
            'b5',
            'Während die einen sparen, die anderen verbrauchen mehr.',
            false,
            'After the subordinate clause the main clause starts with the verb.',
          ),
          tf('b6', 'Der Norden ist reich. Der Süden hat hingegen Probleme.', true),
          tf('b7', 'Hingegen bedeutet „außerdem“.', false, 'hingegen means “on the other hand”.'),
          tf(
            'b8',
            'Ein Entwicklungsland ist ein Land mit sehr hohem Wohlstand.',
            false,
            'In a developing country wealth and infrastructure are usually still limited.',
          ),
          tf('b9', 'Treibhausgase tragen zur Erderwärmung bei.', true),
          tf(
            'b10',
            'Eine Lieferkette beschreibt den Weg einer Ware vom Hersteller zum Kunden.',
            true,
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
        'Climate words, nominalisation and contrasts in one round.',
        ['vocabulary', 'grammar', 'climate-global'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Der ___ der Temperaturen ist gefährlich. (steigen)', 'Anstieg', [
              'Steigen',
              'Steigung',
              'Aufstieg',
            ]),
            {
              Steigen: 'das Steigen is neuter; with der you need Anstieg.',
              Steigung: 'Steigung means a slope or gradient.',
              Aufstieg: 'Aufstieg means ascent or promotion.',
            },
            'nominalisation',
          ),
          hint(
            q('c2', 'Die ___ des Problems ist schwierig. (lösen)', 'Lösung', [
              'Löser',
              'Gelöst',
              'Lösbarkeit',
            ]),
            {
              Löser: 'der Löser is the person who solves something.',
              Gelöst: 'Gelöst is a participle, not a noun.',
              Lösbarkeit: 'Lösbarkeit means “solvability”.',
            },
            'nominalisation',
          ),
          hint(
            q('c3', '___ die Stadt wächst, schrumpft das Dorf.', 'Während', [
              'Weil',
              'Damit',
              'Falls',
            ]),
            {
              Weil: 'weil gives a reason, not a contrast.',
              Damit: 'damit expresses a purpose.',
              Falls: 'falls means “in case”.',
            },
            'adversative',
          ),
          hint(
            q('c4', 'Die Städte wachsen. Die Dörfer schrumpfen ___.', 'dagegen', [
              'deshalb',
              'darum',
              'trotzdem',
            ]),
            {
              deshalb: 'deshalb gives a result.',
              darum: 'darum gives a reason.',
              trotzdem: 'trotzdem means “nevertheless”, not “on the other hand”.',
            },
            'adversative',
          ),
          q('c5', 'die Dürre', 'drought', ['flood', 'glacier', 'sea level']),
          q('c6', 'die Handelsroute', 'trade route', ['trade agreement', 'customs duty', 'growth']),
          q('c7', 'erneuerbar', 'renewable', ['contained', 'melting', 'exported']),
          q('c8', 'die Ausbeutung', 'exploitation', ['prosperity', 'dependence', 'inequality']),
          q(
            'c9',
            'You want to say: The reduction of emissions is the goal.',
            'Die Verringerung der Emissionen ist das Ziel.',
            [
              'Die Verringerung die Emissionen ist das Ziel.',
              'Der Verringerung der Emissionen ist das Ziel.',
              'Die Verringert der Emissionen ist das Ziel.',
            ],
          ),
          q('c10', 'die Energiewende', 'energy transition', [
            'greenhouse gas',
            'deforestation',
            'loss of species',
          ]),
        ],
      },
    ),
  ],
};
