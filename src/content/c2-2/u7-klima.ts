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

const U = 'c2-2-klima';
const LESSON = 'c22-passive-alternatives' as const;

const welt = vocabList(U, 'Globalisation & climate', [
  ['Welthandel', 'world trade', '🌐', 'der'],
  ['Klimakrise', 'climate crisis', '🌡️', 'die', 'Klimakrisen'],
  ['Treibhausgas', 'greenhouse gas', '🏭', 'das', 'Treibhausgase'],
  ['Erderwärmung', 'global warming', '🔥', 'die'],
  ['Artensterben', 'species extinction', '🦋', 'das'],
  ['Zulieferer', 'supplier', '🚚', 'der', 'Zulieferer'],
  ['Handelsabkommen', 'trade agreement', '📑', 'das', 'Handelsabkommen'],
  ['Entwicklungsland', 'developing country', '🌍', 'das', 'Entwicklungsländer'],
  ['Kreislaufwirtschaft', 'circular economy', '♻️', 'die'],
  ['Abholzung', 'deforestation', '🪓', 'die'],
  ['Dürre', 'drought', '🏜️', 'die', 'Dürren'],
  ['Hitzewelle', 'heat wave', '🥵', 'die', 'Hitzewellen'],
  ['Artenvielfalt', 'biodiversity', '🐝', 'die'],
  ['Energiewende', 'energy transition', '⚡', 'die'],
  ['Meeresspiegel', 'sea level', '🌊', 'der', 'Meeresspiegel'],
]);

const handeln = vocabList(U, 'Responding to the crisis', [
  ['eindämmen', 'to contain, to curb', '🧱'],
  ['abmildern', 'to mitigate', '🩹'],
  ['ausstoßen', 'to emit', '💨'],
  ['aussterben', 'to die out', '🦣'],
  ['gefährden', 'to endanger', '⚠️'],
  ['vorantreiben', 'to push forward', '🚀'],
  ['unumkehrbar', 'irreversible', '⛔'],
  ['grenzüberschreitend', 'cross-border', '🛂'],
  ['klimaneutral', 'climate-neutral', '🌱'],
  ['folgenschwer', 'with serious consequences', '💥'],
  ['Maßnahme', 'measure', '📋', 'die', 'Maßnahmen'],
  ['Verzicht', 'renunciation, doing without', '🙅', 'der'],
]);

const vocab = [...welt, ...handeln];
const grammarTags = ['grammar', LESSON, 'c22-climate'] as const;

export const klima: UnitContent = {
  unit: unitC22({
    id: U,
    order: 7,
    title: 'Globalisierung, Klima & Natur',
    subtitle: 'Climate, nature and global trade – five ways to avoid the passive',
    emoji: '🌍',
    goals: [
      'Discuss globalisation, climate change and the loss of nature',
      'Replace the passive with man, sich lassen, sein + zu, -bar / -lich adjectives and bekommen',
      'Recognise these constructions in newspaper and official German',
    ],
    grammar: [
      'sich lassen + infinitive: Das Problem lässt sich lösen.',
      'sein + zu + infinitive: Die Grenzwerte sind einzuhalten.',
      'Adjectives in -bar / -lich / -fähig: erreichbar, verständlich, unumkehrbar',
      'man + active verb; bekommen + Partizip II: Er bekommt das Buch geschenkt.',
    ],
    vocabFields: ['Globalisation & climate', 'Responding to the crisis'],
  }),
  vocab,
  activities: [
    ...vocabPath({
      unitId: U,
      topic: 'c22-climate',
      lists: [
        {
          key: 'world',
          title: 'Globalisation & climate',
          description: 'Klimakrise, Welthandel, Artensterben – the big topics.',
          vocab: welt,
        },
        {
          key: 'act',
          title: 'Responding to the crisis',
          description: 'eindämmen, abmildern, klimaneutral – talking about solutions.',
          vocab: handeln,
        },
      ],
      pictures: byDe(
        welt,
        'Welthandel',
        'Treibhausgas',
        'Artensterben',
        'Zulieferer',
        'Abholzung',
        'Dürre',
        'Hitzewelle',
        'Meeresspiegel',
      ),
      picturesTitle: 'A changing planet',
      picturesDescription: 'Name the climate or globalisation word.',
      listening: handeln,
      listenTitle: 'Hear the experts',
      pairs: byDe(
        handeln,
        'eindämmen',
        'abmildern',
        'ausstoßen',
        'aussterben',
        'gefährden',
        'vorantreiben',
        'unumkehrbar',
        'klimaneutral',
      ),
      memoryTitle: 'Climate memory',
      memoryDescription: 'Match each word with its meaning.',
      unscramble: byDe(welt, 'Dürre', 'Hitzewelle', 'Energiewende'),
      typeIn: byDe(welt, 'Kreislaufwirtschaft', 'Erderwärmung'),
      dictations: [
        [
          'd1',
          'Der Klimawandel lässt sich nicht mehr vollständig aufhalten.',
          'Climate change can no longer be stopped completely.',
        ],
        [
          'd2',
          'Die Lieferketten sind heute grenzüberschreitend organisiert.',
          'Supply chains are organised across borders today.',
        ],
      ],
    }),
    activity(
      U,
      'gap-alternatives',
      'gapfill',
      meta(
        'lässt sich, ist zu, -bar',
        'Choose the construction that replaces the passive.',
        [...grammarTags],
        2,
        7,
      ),
      {
        items: [
          withWhy(
            gap(
              'a1',
              'Das Problem ___ sich nicht schnell lösen.',
              'lässt',
              ['lässt', 'lasst', 'lassen', 'ließ'],
              'The problem cannot be solved quickly.',
              'sich lassen + infinitive = can be …-ed; the verb agrees with the subject: es lässt sich.',
            ),
            {
              lasst: 'lasst is the ihr-form or the plural imperative.',
              lassen: 'lassen would need a plural subject.',
              ließ: 'The simple past does not fit the present-tense statement.',
            },
          ),
          withWhy(
            gap(
              'a2',
              'Die Emissionen sind bis 2040 drastisch ___.',
              'zu senken',
              ['zu senken', 'senken', 'gesenkt', 'zu gesenkt'],
              'Emissions have to be cut drastically by 2040.',
              'sein + zu + infinitive = must be done.',
            ),
            {
              senken: 'sein + infinitive without zu does not express the duty.',
              gesenkt: 'sind gesenkt would describe a state: they have already been cut.',
              'zu gesenkt': 'zu belongs before the infinitive, not before the participle.',
            },
          ),
          withWhy(
            gap(
              'a3',
              'Der Klimawandel ist kaum noch ___.',
              'aufzuhalten',
              ['aufzuhalten', 'aufhalten', 'aufgehalten', 'zu aufhalten'],
              'Climate change can hardly be stopped any more.',
              'sein + zu + infinitive = can be …-ed; with a separable verb zu sits in the middle.',
            ),
            {
              aufhalten: 'The zu is missing: auf-zu-halten.',
              aufgehalten: 'ist aufgehalten would say it has been stopped.',
              'zu aufhalten': 'With a separable verb zu goes between prefix and verb: aufzuhalten.',
            },
          ),
          withWhy(
            gap(
              'a4',
              'Diese Schäden sind nicht mehr ___.',
              'umkehrbar',
              ['umkehrbar', 'umkehrlich', 'umkehrend', 'umkehrt'],
              'This damage is no longer reversible.',
              '-bar on a transitive verb stem = can be …-ed.',
            ),
            {
              umkehrlich: 'There is no such adjective; the usual ending here is -bar.',
              umkehrend: 'A Partizip I would be active, not “can be reversed”.',
              umkehrt: 'That is a verb form, not an adjective.',
            },
          ),
          withWhy(
            gap(
              'a5',
              'Die neue Regel ist leicht ___.',
              'verständlich',
              ['verständlich', 'verstehbar', 'verstandbar', 'verstehend'],
              'The new rule is easily understandable.',
              '-lich also forms passive-like adjectives: verständlich = can be understood.',
            ),
            {
              verstehbar: 'verstehbar is not idiomatic; the established word is verständlich.',
              verstandbar: 'Not a German word.',
              verstehend: 'Partizip I would mean “understanding”, which is active.',
            },
          ),
          withWhy(
            gap(
              'a6',
              'Die Mitarbeiter ___ ein Jobticket geschenkt.',
              'bekommen',
              ['bekommen', 'werden', 'haben', 'sind'],
              'The employees are given a job ticket.',
              'bekommen + Partizip II: the recipient is the subject.',
            ),
            {
              werden:
                'werden + geschenkt would make the ticket the subject: Das Ticket wird geschenkt.',
              haben: 'haben + geschenkt would be the active perfect (“have given”).',
              sind: 'sind geschenkt would describe a state of the ticket.',
            },
          ),
          typed(
            'a7',
            'Der Verbrauch ___ sich deutlich senken.',
            'lässt',
            'Consumption can be reduced considerably.',
            'sich lassen + infinitive; er/sie/es lässt sich.',
          ),
          typed(
            'a8',
            'Die Maßnahmen sind sofort ___ (umsetzen).',
            'umzusetzen',
            'The measures have to be implemented immediately.',
            'sein + zu + infinitive; separable: um-zu-setzen.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sort-alternatives',
      'sortit',
      meta('Which construction?', 'Sort the passive alternatives.', [...grammarTags], 2, 5),
      {
        instruction: 'How is the passive meaning expressed?',
        buckets: [
          { id: 'man', label: 'man + active verb', emoji: '👤' },
          { id: 'lassen', label: 'sich lassen + infinitive', emoji: '🤲' },
          { id: 'zu', label: 'sein + zu + infinitive', emoji: '➰' },
          { id: 'adj', label: 'Adjective in -bar / -lich', emoji: '🏷️' },
        ],
        items: sortItems('s', [
          ['Man muss die Wälder schützen.', 'man'],
          ['Man hat die Grenzwerte gesenkt.', 'man'],
          ['Man spricht von einer Krise.', 'man'],
          ['Das lässt sich ändern.', 'lassen'],
          ['Der Schaden lässt sich nicht beheben.', 'lassen'],
          ['Das Ziel lässt sich erreichen.', 'lassen'],
          ['Der Antrag ist zu prüfen.', 'zu'],
          ['Die Folgen sind kaum abzuschätzen.', 'zu'],
          ['Die Frist ist einzuhalten.', 'zu'],
          ['Das Ziel ist erreichbar.', 'adj'],
          ['Der Schaden ist vermeidbar.', 'adj'],
          ['Diese Zahlen sind nachvollziehbar.', 'adj'],
        ]),
      },
    ),
    activity(
      U,
      'quiz-transform',
      'quiz',
      meta(
        'Passive → alternative',
        'Rewrite the passive with the construction in brackets.',
        [...grammarTags],
        3,
        7,
      ),
      {
        questions: [
          q(
            't1',
            'Das Problem kann gelöst werden. (sich lassen)',
            'Das Problem lässt sich lösen.',
            [
              'Das Problem lässt lösen.',
              'Das Problem lässt sich gelöst.',
              'Das Problem lässt sich zu lösen.',
            ],
            'sich lassen + infinitive without zu.',
          ),
          q(
            't2',
            'Die Grenzwerte müssen eingehalten werden. (sein + zu)',
            'Die Grenzwerte sind einzuhalten.',
            [
              'Die Grenzwerte sind einhalten.',
              'Die Grenzwerte sind zu einhalten.',
              'Die Grenzwerte sind eingehalten.',
            ],
            'sein + zu + infinitive; zu sits inside separable verbs.',
          ),
          q(
            't3',
            'Die Klimaziele können noch erreicht werden. (-bar)',
            'Die Klimaziele sind noch erreichbar.',
            [
              'Die Klimaziele sind noch erreichend.',
              'Die Klimaziele sind noch erreichlich.',
              'Die Klimaziele sind noch erreicht.',
            ],
            'erreichen → erreichbar.',
          ),
          q(
            't4',
            'Die Wälder werden abgeholzt. (man)',
            'Man holzt die Wälder ab.',
            [
              'Man wird die Wälder abgeholzt.',
              'Man abholzt die Wälder.',
              'Man holzt die Wälder ab worden.',
            ],
            'man + active verb; the separable prefix goes to the end.',
          ),
          q(
            't5',
            'Die Kosten sollen gesenkt werden. (sein + zu)',
            'Die Kosten sind zu senken.',
            [
              'Die Kosten sind senken zu.',
              'Die Kosten sind zu gesenkt.',
              'Die Kosten sind gesenkt zu werden.',
            ],
            'zu stands directly before the infinitive.',
          ),
          q(
            't6',
            'Dem Dorf wurden Hilfsgelder zugesagt. (bekommen-Passiv)',
            'Das Dorf bekam Hilfsgelder zugesagt.',
            [
              'Das Dorf wurde Hilfsgelder zugesagt.',
              'Das Dorf bekam Hilfsgelder zugesagt worden.',
              'Das Dorf bekam zugesagt Hilfsgelder zu werden.',
            ],
            'The recipient becomes the subject: Das Dorf bekam … zugesagt.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Newspaper German',
        'Build sentences with passive alternatives.',
        [...grammarTags],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'The climate targets can still be reached.', [
            'Die',
            'Klimaziele',
            'lassen',
            'sich',
            'noch',
            'erreichen.',
          ]),
          sent('s2', 'The consequences are hard to estimate.', [
            'Die',
            'Folgen',
            'sind',
            'kaum',
            'abzuschätzen.',
          ]),
          sent('s3', 'Emissions have to be cut considerably by 2040.', [
            'Die',
            'Emissionen',
            'sind',
            'bis',
            '2040',
            'deutlich',
            'zu',
            'senken.',
          ]),
          sent('s4', 'The damage is no longer reversible.', [
            'Der',
            'Schaden',
            'ist',
            'nicht',
            'mehr',
            'umkehrbar.',
          ]),
          sent('s5', 'They have cut the funding.', [
            'Man',
            'hat',
            'die',
            'Fördermittel',
            'gekürzt.',
          ]),
          sent('s6', 'The village was promised financial aid.', [
            'Das',
            'Dorf',
            'bekam',
            'Hilfsgelder',
            'zugesagt.',
          ]),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'listen-climate',
      'listen',
      meta('Climate news', 'Listen to a radio report.', ['listening', 'c22-climate'], 3, 5),
      {
        items: [
          heard(
            'l1',
            'Der Anstieg des Meeresspiegels lässt sich nicht mehr aufhalten.',
            'The rise in sea level can no longer be stopped.',
            [
              'The sea level is falling slowly.',
              'The rise in sea level has been stopped.',
              'Nobody has measured the sea level yet.',
            ],
          ),
          heard(
            'l2',
            'Die Emissionen sind bis 2040 drastisch zu senken.',
            'Emissions have to be cut drastically by 2040.',
            [
              'Emissions have been cut drastically since 2040.',
              'Emissions may rise until 2040.',
              'Emissions cannot be measured before 2040.',
            ],
          ),
          heard(
            'l3',
            'Das Artensterben ist ein grenzüberschreitendes Problem.',
            'Species extinction is a cross-border problem.',
            [
              'Species extinction only affects one country.',
              'Species extinction has stopped at the border.',
              'Species extinction is not a problem.',
            ],
          ),
          heard(
            'l4',
            'Die Hitzewelle ist für ältere Menschen kaum erträglich.',
            'The heat wave is hardly bearable for older people.',
            [
              'The heat wave is pleasant for older people.',
              'The heat wave has ended for older people.',
              'Older people are not allowed to leave during the heat wave.',
            ],
          ),
          heard(
            'l5',
            'Das Handelsabkommen lässt sich nur mit einer Mehrheit verabschieden.',
            'The trade agreement can only be passed with a majority.',
            [
              'The trade agreement has been passed unanimously.',
              'The trade agreement cannot be changed by a majority.',
              'The trade agreement is not allowed to be discussed.',
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
        'Panel and citizens’ forum',
        'Use passive alternatives in a debate.',
        ['communication', LESSON, 'c22-climate'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'podium',
            title: 'Auf dem Podium',
            emoji: '🎙️',
            setting: 'You are a guest on a panel about climate policy.',
            turns: [
              say(
                'Moderator',
                'Ist der Klimawandel noch aufzuhalten?',
                'Can climate change still be stopped?',
              ),
              you(
                'Aufzuhalten ist er kaum noch, aber seine Folgen lassen sich abmildern.',
                [
                  'Aufzuhalten ist er kaum noch, aber seine Folgen lässt sich abmildern.',
                  'Folgen is plural, so the verb is lassen: Folgen lassen sich.',
                ],
                [
                  'Aufzuhalten ist er kaum noch, aber seine Folgen sind zu abmildern.',
                  'With a separable verb zu goes inside: abzumildern.',
                ],
              ),
              say(
                'Moderator',
                'Was fordern Sie von der Politik?',
                'What do you demand from politicians?',
              ),
              you(
                'Die Grenzwerte sind konsequent einzuhalten und der Ausstoß ist zu verringern.',
                [
                  'Die Grenzwerte sind konsequent einhalten und der Ausstoß ist zu verringern.',
                  'sein + zu + infinitive: einzuhalten.',
                ],
                [
                  'Die Grenzwerte werden konsequent einzuhalten und der Ausstoß wird zu verringern.',
                  'werden + zu does not express necessity; use sein + zu.',
                ],
              ),
            ],
          },
          {
            id: 'buergerforum',
            title: 'Im Bürgerforum',
            emoji: '🏘️',
            setting: 'Residents discuss a planned wind farm.',
            turns: [
              say(
                'Anwohner',
                'Man hat das Projekt ohne Anhörung genehmigt.',
                'They approved the project without a hearing.',
              ),
              you(
                'Das ist nicht nachvollziehbar – die Entscheidung ist zu überprüfen.',
                [
                  'Das ist nicht nachvollziehen – die Entscheidung ist zu überprüfen.',
                  'The adjective is nachvollziehbar.',
                ],
                [
                  'Das ist nicht nachvollziehbar – die Entscheidung ist überprüfen zu.',
                  'zu comes before the infinitive: zu überprüfen.',
                ],
              ),
              say(
                'Anwohner',
                'Die Pläne haben wir erst gestern bekommen.',
                'We only received the plans yesterday.',
              ),
              you(
                'Das lässt sich ändern – die Pläne sind sofort online zu stellen.',
                [
                  'Das lässt ändern – die Pläne sind sofort online zu stellen.',
                  'The reflexive sich is needed: Das lässt sich ändern.',
                ],
                [
                  'Das lässt sich ändern – die Pläne sind sofort zu online stellen.',
                  'zu stands directly before the infinitive: online zu stellen.',
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
      meta('Alternatives blitz', 'True or false: avoiding the passive.', [...grammarTags], 3, 2),
      {
        seconds: 60,
        statements: [
          tf('b1', '„Das lässt sich lösen“ bedeutet: Das kann gelöst werden.', true),
          tf('b2', '„Der Antrag ist zu prüfen“ bedeutet: Der Antrag muss geprüft werden.', true),
          tf('b3', '„lösbar“ bedeutet „kann gelöst werden“.', true),
          tf('b4', 'Mit „man“ kann man das Passiv oft vermeiden: „Man schützt die Wälder.“', true),
          tf(
            'b5',
            'In „Das Problem lässt sich lösen“ steht ein Passiv.',
            false,
            'It is an active form with passive meaning.',
          ),
          tf(
            'b6',
            '„Der Schaden ist zu beheben“ drückt eine Möglichkeit oder Notwendigkeit aus.',
            true,
          ),
          tf(
            'b7',
            'In „Er bekommt das Buch geschenkt“ ist das Buch das Subjekt.',
            false,
            'The recipient er is the subject.',
          ),
          tf('b8', 'Bei „einhalten“ steht zu in der Mitte: „Die Frist ist einzuhalten.“', true),
          tf('b9', 'Die Endung -bar bildet Adjektive mit der Bedeutung „kann …-t werden“.', true),
          tf(
            'b10',
            '„Der Klimawandel ist kaum noch aufzuhalten“ heißt: Man kann ihn kaum noch aufhalten.',
            true,
          ),
          tf('b11', 'Klimaneutral heißt, dass man insgesamt kein zusätzliches CO₂ ausstößt.', true),
          tf(
            'b12',
            'Artensterben bedeutet, dass mehr Tier- und Pflanzenarten entstehen.',
            false,
            'It means that species die out.',
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
        'Climate words and passive alternatives in one round.',
        ['vocabulary', 'grammar', 'c22-climate'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            q('c1', 'Das Problem ___ sich lösen.', 'lässt', ['lasst', 'lassen', 'ließ']),
            LESSON,
          ),
          withLesson(
            q('c2', 'Die Frist ist unbedingt ___.', 'einzuhalten', [
              'einhalten',
              'eingehalten',
              'zu einhalten',
            ]),
            LESSON,
          ),
          withLesson(
            q('c3', 'Die Folgen sind nicht ___. (can be estimated)', 'absehbar', [
              'absehend',
              'abgesehen',
              'absehlich',
            ]),
            LESSON,
          ),
          withLesson(
            q('c4', 'Die Kinder ___ ein Eis spendiert.', 'bekommen', ['werden', 'haben', 'sind']),
            LESSON,
          ),
          q('c5', 'Ein Problem, das mehrere Länder betrifft, ist …', 'grenzüberschreitend', [
            'folgenschwer',
            'unumkehrbar',
            'klimaneutral',
          ]),
          q('c6', 'eindämmen', 'to contain, to curb', [
            'to emit',
            'to endanger',
            'to push forward',
          ]),
          q('c7', 'das Artensterben', 'species extinction', [
            'biodiversity',
            'deforestation',
            'drought',
          ]),
          q('c8', 'Eine Entwicklung, die man nicht rückgängig machen kann, ist …', 'unumkehrbar', [
            'klimaneutral',
            'grenzüberschreitend',
            'folgenschwer',
          ]),
          q('c9', 'die Lieferkette', 'supply chain', [
            'trade agreement',
            'energy transition',
            'greenhouse gas',
          ]),
          withLesson(
            q('c10', 'Man ___ die Grenzwerte gesenkt. (They have lowered the limits.)', 'hat', [
              'wird',
              'ist',
              'wurde',
            ]),
            LESSON,
          ),
        ],
      },
    ),
  ],
};
