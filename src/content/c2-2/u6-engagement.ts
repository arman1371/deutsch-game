import { byDe, vocabList } from '../builders';
import {
  activity,
  customTable,
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

const U = 'c2-2-engagement';
const LESSON = 'c22-prefix-verbs' as const;

const gesellschaft = vocabList(U, 'Civil society', [
  ['Zivilgesellschaft', 'civil society', '🌐', 'die'],
  ['Gemeinwohl', 'common good', '🏘️', 'das'],
  ['Solidarität', 'solidarity', '🤝', 'die'],
  ['Bürgerinitiative', 'citizens’ initiative', '📣', 'die', 'Bürgerinitiativen'],
  ['Ehrenamtliche', 'volunteer (adjectival noun)', '🎗️', 'der', 'Ehrenamtlichen'],
  ['Stiftung', 'foundation', '🏦', 'die', 'Stiftungen'],
  ['Selbsthilfegruppe', 'self-help group', '🫂', 'die', 'Selbsthilfegruppen'],
  ['Genossenschaft', 'cooperative', '🏭', 'die', 'Genossenschaften'],
  ['Gemeinnützigkeit', 'non-profit status', '💚', 'die'],
  ['Teilhabe', 'participation, inclusion', '🚪', 'die'],
  ['Ausgrenzung', 'exclusion', '🚧', 'die', 'Ausgrenzungen'],
  ['Diskriminierung', 'discrimination', '🙈', 'die', 'Diskriminierungen'],
  ['Spendenaufruf', 'donation appeal', '📢', 'der', 'Spendenaufrufe'],
  ['Zivilcourage', 'moral courage', '🦁', 'die'],
]);

const verben = vocabList(U, 'Two-faced verbs', [
  ['einen Text übersetzen', 'to translate a text', '🔤'],
  ['zum anderen Ufer übersetzen', 'to cross to the other bank (by ferry)', '⛴️'],
  ['ein Schild umfahren', 'to run down a sign', '🚧'],
  ['eine Baustelle umfahren', 'to drive around roadworks', '🚗'],
  ['jemandem Absicht unterstellen', 'to insinuate intent', '🕵️'],
  ['sich bei Regen unterstellen', 'to take shelter from rain', '☔'],
  ['eine Regel umgehen', 'to circumvent a rule', '🔀'],
  ['mit Menschen umgehen', 'to deal with people', '🧑‍🤝‍🧑'],
  ['einen Begriff umschreiben', 'to paraphrase a term', '📝'],
  ['einen Antrag umschreiben', 'to rewrite an application', '✍️'],
  ['eine Lüge durchschauen', 'to see through a lie', '👁️'],
]);

const vocab = [...gesellschaft, ...verben];
const grammarTags = ['grammar', LESSON, 'c22-civic'] as const;

export const engagement: UnitContent = {
  unit: unitC22({
    id: U,
    order: 6,
    title: 'Engagement & Zivilgesellschaft',
    subtitle: 'Volunteering, solidarity and verbs whose prefix may or may not separate',
    emoji: '🙌',
    goals: [
      'Talk about civil society, volunteering and exclusion',
      'Decide whether a prefix verb (über-, unter-, um-, durch-) is separable or inseparable',
      'Form the Partizip II correctly: umgefahren versus umfahren',
    ],
    grammar: [
      'Separable (stressed prefix, literal meaning): Er fährt das Schild um. – umgefahren',
      'Inseparable (stressed stem, figurative meaning): Er umfährt die Baustelle. – umfahren',
      'Pairs: übersetzen, umfahren, umgehen, umschreiben, unterstellen, durchschauen',
      'No ge- in the participle of inseparable verbs',
    ],
    vocabFields: ['Civil society', 'Two-faced verbs'],
  }),
  vocab,
  activities: [
    ...vocabPath({
      unitId: U,
      topic: 'c22-civic',
      lists: [
        {
          key: 'society',
          title: 'Civil society',
          description: 'Gemeinwohl, Solidarität, Zivilcourage – words for engagement.',
          vocab: gesellschaft,
        },
        {
          key: 'verbs',
          title: 'Two-faced verbs',
          description: 'übersetzen, umfahren, umgehen – the same verb, two meanings.',
          vocab: verben,
        },
      ],
      pictures: byDe(
        gesellschaft,
        'Zivilgesellschaft',
        'Solidarität',
        'Bürgerinitiative',
        'Stiftung',
        'Genossenschaft',
        'Diskriminierung',
        'Spendenaufruf',
        'Zivilcourage',
      ),
      picturesTitle: 'Engaged citizens',
      picturesDescription: 'Name the civil-society word.',
      listening: verben,
      listenTitle: 'Hear the verb pairs',
      pairs: byDe(
        verben,
        'einen Text übersetzen',
        'zum anderen Ufer übersetzen',
        'ein Schild umfahren',
        'eine Baustelle umfahren',
        'eine Regel umgehen',
        'mit Menschen umgehen',
        'einen Begriff umschreiben',
        'eine Lüge durchschauen',
      ),
      memoryTitle: 'Prefix memory',
      memoryDescription: 'Match each phrase with its meaning.',
      unscramble: byDe(gesellschaft, 'Gemeinwohl', 'Teilhabe', 'Stiftung'),
      typeIn: byDe(gesellschaft, 'Zivilgesellschaft', 'Genossenschaft'),
      dictations: [
        [
          'd1',
          'Zivilcourage bedeutet, bei Unrecht nicht wegzusehen.',
          'Moral courage means not looking away when injustice happens.',
        ],
        [
          'd2',
          'Die Ehrenamtlichen übersetzen die Flyer für die Nachbarschaft.',
          'The volunteers translate the flyers for the neighbourhood.',
        ],
      ],
    }),
    activity(
      U,
      'conj-prefix',
      'conjugation',
      meta(
        'fahre … um or umfahre?',
        'Separable and inseparable forms of the same verb.',
        [...grammarTags],
        2,
        6,
      ),
      {
        tables: [
          customTable(
            'umfahren-sep',
            'umfahren (separable: knock down)',
            'to run down',
            ['fahre um', 'fährst um', 'fährt um', 'fahren um', 'fahrt um', 'fahren um'],
            ['ich', 'er/sie/es', 'wir'],
          ),
          customTable(
            'umfahren-insep',
            'umfahren (inseparable: drive around)',
            'to drive around',
            ['umfahre', 'umfährst', 'umfährt', 'umfahren', 'umfahrt', 'umfahren'],
            ['du', 'er/sie/es', 'ihr'],
          ),
          customTable(
            'umgehen-sep',
            'umgehen (separable: deal with)',
            'to deal with',
            ['gehe um', 'gehst um', 'geht um', 'gehen um', 'geht um', 'gehen um'],
            ['ich', 'du', 'sie/Sie'],
          ),
          customTable(
            'umgehen-insep',
            'umgehen (inseparable: bypass)',
            'to circumvent',
            ['umgehe', 'umgehst', 'umgeht', 'umgehen', 'umgeht', 'umgehen'],
            ['ich', 'wir', 'er/sie/es'],
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-separable',
      'sortit',
      meta('Separable or inseparable?', 'Does the prefix separate?', [...grammarTags], 2, 5),
      {
        instruction: 'Is the prefix separable or inseparable in this sentence?',
        buckets: [
          { id: 'sep', label: 'Separable (stressed prefix)', emoji: '✂️' },
          { id: 'insep', label: 'Inseparable (stressed stem)', emoji: '🔗' },
        ],
        items: sortItems('s', [
          ['Er fährt das Schild um.', 'sep'],
          ['Die Fähre setzt uns über.', 'sep'],
          ['Wir stellen uns unter.', 'sep'],
          ['Sie geht respektvoll mit Kollegen um.', 'sep'],
          ['Er schreibt den Antrag um.', 'sep'],
          ['Der Lkw hat den Mast umgefahren.', 'sep'],
          ['Er umfährt die Baustelle.', 'insep'],
          ['Sie übersetzt den Roman.', 'insep'],
          ['Er unterstellt ihr Absicht.', 'insep'],
          ['Sie umgeht die Regel.', 'insep'],
          ['Sie umschreibt den Begriff.', 'insep'],
          ['Wir haben die Baustelle umfahren.', 'insep'],
        ]),
      },
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta('Which meaning?', 'The form tells you the meaning.', [...grammarTags], 3, 6),
      {
        questions: [
          q(
            't1',
            'Er hat den Poller umgefahren.',
            'He ran into the bollard and knocked it over.',
            [
              'He drove around the bollard.',
              'He drove past the bollard slowly.',
              'He parked next to the bollard.',
            ],
            'umgefahren (with ge-) → separable um|fahren: to knock over.',
          ),
          q(
            't2',
            'Er hat den Poller umfahren.',
            'He drove around the bollard.',
            [
              'He ran into the bollard and knocked it over.',
              'He turned the bollard around.',
              'He painted the bollard.',
            ],
            'umfahren (no ge-) → inseparable: to drive around.',
          ),
          q(
            't3',
            'Wir wurden ans andere Ufer übergesetzt.',
            'We were ferried to the other bank.',
            [
              'We were translated into the other language.',
              'We were pushed over the edge.',
              'We were left on the shore by mistake.',
            ],
            'übergesetzt (with ge-) → separable über|setzen.',
          ),
          q(
            't4',
            'Sie hat die Rede übersetzt.',
            'She translated the speech.',
            [
              'She ferried the speech across.',
              'She gave the speech again.',
              'She rewrote the speech.',
            ],
            'übersetzt (no ge-) → inseparable: to translate.',
          ),
          q(
            't5',
            'Er unterstellt ihr Neid.',
            'He insinuates that she is envious.',
            ['He puts her envy under cover.', 'He supports her envy.', 'He hides his own envy.'],
            'unterstellen with a person and a charge is inseparable.',
          ),
          q(
            't6',
            'Die Kinder stellen sich unter.',
            'The children take shelter.',
            [
              'The children are being accused.',
              'The children line up.',
              'The children are being hidden by mistake.',
            ],
            'Literal “put oneself under (a roof)” → separable.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'gap-participles',
      'gapfill',
      meta(
        'umgefahren or umfahren?',
        'Choose the right form and participle.',
        [...grammarTags],
        3,
        7,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'Der Lkw hat das Verkehrsschild ___.',
              'umgefahren',
              ['umgefahren', 'umfahren', 'umfahrt', 'umgefährt'],
              'The lorry knocked down the traffic sign.',
              'Knock over = separable um|fahren; the participle has ge- inside: um-ge-fahren.',
            ),
            {
              umfahren: 'umfahren (no ge-) would mean “drove around” the sign.',
              umfahrt: 'That is a present-tense form, not a participle.',
              umgefährt: 'fahren is irregular: the participle is gefahren, not gefährt.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Der Fahrer hat die Baustelle weiträumig ___.',
              'umfahren',
              ['umfahren', 'umgefahren', 'umfährt', 'umfuhr'],
              'The driver took a wide detour around the roadworks.',
              'Drive around = inseparable umfahren: no ge- in the participle.',
            ),
            {
              umgefahren: 'umgefahren would mean “knocked over” the roadworks.',
              umfährt: 'That is a present-tense form, not a participle.',
              umfuhr: 'That is the simple past; the perfect needs the participle.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'Sie hat den Roman ins Englische ___.',
              'übersetzt',
              ['übersetzt', 'übergesetzt', 'übersetzen', 'übersetz'],
              'She translated the novel into English.',
              'Translate = inseparable übersetzen: no ge-.',
            ),
            {
              übergesetzt: 'übergesetzt belongs to separable übersetzen = ferry across.',
              übersetzen: 'The perfect needs the participle: übersetzt.',
              übersetz: 'The participle ends in -t: übersetzt.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Die Fähre hat uns ans andere Ufer ___.',
              'übergesetzt',
              ['übergesetzt', 'übersetzt', 'übersetzen', 'übergesetzen'],
              'The ferry took us across to the other bank.',
              'Ferry across = separable über|setzen: über-ge-setzt.',
            ),
            {
              übersetzt: 'übersetzt (no ge-) would mean “translated”.',
              übersetzen: 'The perfect needs the participle.',
              übergesetzen: 'The participle of setzen is gesetzt, not gesetzen.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Er ___ ihr böse Absichten.',
              'unterstellt',
              ['unterstellt', 'stellt unter', 'unterstellen', 'untergestellt'],
              'He insinuates that she has bad intentions.',
              'Insinuate = inseparable unterstellen; the prefix stays on the verb.',
            ),
            {
              'stellt unter':
                'The separable form means to put something under cover or in storage.',
              unterstellen: 'The verb must agree with er: unterstellt.',
              untergestellt: 'That is a participle, not a finite verb.',
            },
          ),
          withWhy(
            gap(
              'g6',
              'Wir haben uns bei dem Gewitter im Hauseingang ___.',
              'untergestellt',
              ['untergestellt', 'unterstellt', 'unterstellen', 'unterzustellen'],
              'We took shelter in the doorway during the storm.',
              'Take shelter = separable unter|stellen: unter-ge-stellt.',
            ),
            {
              unterstellt: 'unterstellt (no ge-) means “insinuated”.',
              unterstellen: 'The perfect needs the participle.',
              unterzustellen: 'That is zu + infinitive, not a participle.',
            },
          ),
          withWhy(
            gap(
              'g7',
              'Sie ___ die Vorschrift geschickt.',
              'umgeht',
              ['umgeht', 'geht um', 'umgegangen', 'umgehen'],
              'She cleverly circumvents the regulation.',
              'Circumvent = inseparable umgehen: she umgeht.',
            ),
            {
              'geht um': 'The separable umgehen means “deal with” or “go around” (rumours).',
              umgegangen: 'That is a participle, not a finite verb.',
              umgehen: 'With sie (singular) the verb is umgeht.',
            },
          ),
          typed(
            'g8',
            'Er ist mit seinen Kollegen immer respektvoll ___.',
            'umgegangen',
            'He has always dealt respectfully with his colleagues.',
            'Deal with = separable um|gehen: um-ge-gangen (sein).',
          ),
          typed(
            'g9',
            'Die Lehrerin hat den schwierigen Begriff ___ (umschreiben: paraphrase).',
            'umschrieben',
            'The teacher paraphrased the difficult term.',
            'Paraphrase = inseparable umschreiben: no ge-.',
          ),
          typed(
            'g10',
            'Der Autor hat das Kapitel noch einmal ___ (umschreiben: rewrite).',
            'umgeschrieben',
            'The author has rewritten the chapter once more.',
            'Rewrite = separable um|schreiben: um-ge-schrieben.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta('Same verb, new meaning', 'Build sentences with prefix verbs.', [...grammarTags], 3, 7),
      {
        items: [
          sent('s1', 'He has cleverly circumvented the rule.', [
            'Er',
            'hat',
            'die',
            'Regel',
            'geschickt',
            'umgangen.',
          ]),
          sent('s2', 'The lorry knocked over the sign.', [
            'Der',
            'Lkw',
            'hat',
            'das',
            'Schild',
            'umgefahren.',
          ]),
          sent('s3', 'She translated the report into English.', [
            'Sie',
            'hat',
            'den',
            'Bericht',
            'ins',
            'Englische',
            'übersetzt.',
          ]),
          sent('s4', 'The ferry takes us to the other bank.', [
            'Die',
            'Fähre',
            'setzt',
            'uns',
            'ans',
            'andere',
            'Ufer',
            'über.',
          ]),
          sent('s5', 'He deals respectfully with the volunteers.', [
            'Er',
            'geht',
            'mit',
            'den',
            'Ehrenamtlichen',
            'respektvoll',
            'um.',
          ]),
          sent('s6', 'She paraphrased the term.', ['Sie', 'hat', 'den', 'Begriff', 'umschrieben.']),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'listen-engagement',
      'listen',
      meta('Volunteers speak', 'Listen to people who volunteer.', ['listening', 'c22-civic'], 3, 5),
      {
        items: [
          heard(
            'l1',
            'Die Bürgerinitiative umgeht die Behörden nicht, sondern sucht das Gespräch.',
            'The citizens’ initiative does not bypass the authorities but seeks dialogue.',
            [
              'The citizens’ initiative walks around the authorities’ building.',
              'The citizens’ initiative has been closed by the authorities.',
              'The citizens’ initiative ignores every conversation.',
            ],
          ),
          heard(
            'l2',
            'Die Stiftung unterstützt Selbsthilfegruppen im ganzen Land.',
            'The foundation supports self-help groups all over the country.',
            [
              'The foundation was founded by self-help groups abroad.',
              'The foundation closes self-help groups in the country.',
              'The foundation only helps one group in the capital.',
            ],
          ),
          heard(
            'l3',
            'Zivilcourage bedeutet, einzugreifen, wenn andere ausgegrenzt werden.',
            'Moral courage means stepping in when others are being excluded.',
            [
              'Moral courage means staying calm when others argue.',
              'Moral courage means keeping your opinion to yourself.',
              'Moral courage means excluding others politely.',
            ],
          ),
          heard(
            'l4',
            'Man darf den Ehrenamtlichen keine bösen Absichten unterstellen.',
            'One must not insinuate bad intentions on the part of volunteers.',
            [
              'One must not give volunteers any tasks.',
              'One has to put volunteers under supervision.',
              'One may reward volunteers for their intentions.',
            ],
          ),
          heard(
            'l5',
            'Die Genossenschaft gehört allen Mitgliedern gemeinsam.',
            'The cooperative belongs to all members jointly.',
            [
              'The cooperative belongs to a single owner.',
              'The cooperative has no members yet.',
              'The cooperative belongs to the state.',
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
        'Helping out',
        'Use separable and inseparable verbs in volunteer talk.',
        ['communication', LESSON, 'c22-civic'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'hilfsverein',
            title: 'Beim Hilfsverein',
            emoji: '🤝',
            setting: 'You volunteer for an association that helps newcomers.',
            turns: [
              say(
                'Koordinatorin',
                'Können Sie den Flyer ins Arabische übersetzen?',
                'Can you translate the flyer into Arabic?',
              ),
              you(
                'Das habe ich schon letzte Woche übersetzt.',
                [
                  'Das habe ich schon letzte Woche übergesetzt.',
                  'übergesetzt belongs to separable übersetzen (ferry across); for texts the verb is inseparable: übersetzt.',
                ],
                [
                  'Das habe ich schon letzte Woche übersetzen.',
                  'The perfect needs a participle: übersetzt.',
                ],
              ),
              say(
                'Koordinatorin',
                'Wunderbar. Und wie gehen Sie mit schwierigen Situationen um?',
                'Wonderful. And how do you handle difficult situations?',
              ),
              you(
                'Ich bleibe ruhig und gehe respektvoll mit allen um.',
                [
                  'Ich bleibe ruhig und umgehe respektvoll mit allen.',
                  'umgehen in the sense of “deal with” is separable: gehe … um.',
                ],
                [
                  'Ich bleibe ruhig und gehe respektvoll um mit allen.',
                  'The prefix um goes to the very end of the clause: … mit allen um.',
                ],
              ),
            ],
          },
          {
            id: 'initiative',
            title: 'In der Bürgerinitiative',
            emoji: '📣',
            setting: 'A neighbourhood group discusses how to protest against a demolition.',
            turns: [
              say(
                'Sprecher',
                'Die Stadt will das Gebäude abreißen. Sollen wir einfach die Behörden umgehen?',
                'The city wants to demolish the building. Should we simply bypass the authorities?',
              ),
              you(
                'Nein, wir umgehen die Behörden nicht, sondern suchen den Dialog.',
                [
                  'Nein, wir gehen die Behörden nicht um, sondern suchen den Dialog.',
                  'To bypass is inseparable: wir umgehen.',
                ],
                [
                  'Nein, wir haben die Behörden nicht umgegangen, sondern suchen den Dialog.',
                  'The inseparable participle has no ge-: umgangen.',
                ],
              ),
              say(
                'Sprecher',
                'Manche unterstellen uns, wir wollten nur Ärger machen.',
                'Some insinuate that we only want to cause trouble.',
              ),
              you(
                'Das ist unfair. Man unterstellt Ehrenamtlichen oft böse Absichten.',
                [
                  'Das ist unfair. Man stellt Ehrenamtlichen oft böse Absichten unter.',
                  'stellt … unter means to put under cover; to insinuate is inseparable: unterstellt.',
                ],
                [
                  'Das ist unfair. Man hat Ehrenamtlichen oft böse Absichten untergestellt.',
                  'Insinuate: unterstellt (inseparable, no ge-).',
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
      meta('Prefix blitz', 'True or false: separable or inseparable.', [...grammarTags], 3, 2),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Bei trennbaren Verben ist das Präfix betont.', true),
          tf(
            'b2',
            'Bei untrennbaren Verben bildet man das Partizip II mit ge-.',
            false,
            'No ge-: übersetzt, umfahren, unterstellt.',
          ),
          tf('b3', '„Er hat das Schild umgefahren“ bedeutet: Er hat es umgeworfen.', true),
          tf(
            'b4',
            '„Er hat die Baustelle umgefahren“ ist richtig, wenn er außen herumgefahren ist.',
            false,
            'Driving around is inseparable: umfahren.',
          ),
          tf(
            'b5',
            '„übersetzen“ im Sinn von „in eine andere Sprache bringen“ ist untrennbar.',
            true,
          ),
          tf('b6', '„Die Fähre setzt uns über“: Hier ist übersetzen trennbar.', true),
          tf(
            'b7',
            '„unterstellen“ im Sinn von „unterstellen, dass …“ ist trennbar.',
            false,
            'To insinuate is inseparable.',
          ),
          tf('b8', '„umgehen“ im Sinn von „vermeiden“ ist untrennbar: Er umgeht die Regel.', true),
          tf('b9', '„mit Menschen umgehen“ ist trennbar: Er geht gut mit ihnen um.', true),
          tf('b10', 'Zivilcourage bedeutet, bei Unrecht einzugreifen.', true),
          tf(
            'b11',
            'Eine Genossenschaft gehört einer einzelnen Person.',
            false,
            'A cooperative belongs to its members together.',
          ),
          tf('b12', 'Gemeinwohl bedeutet das Wohl der Allgemeinheit.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Civil-society words and prefix verbs in one round.',
        ['vocabulary', 'grammar', 'c22-civic'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            q('c1', 'Der Lkw hat den Mast ___. (knocked over)', 'umgefahren', [
              'umfahren',
              'umgefährt',
              'umgefahrt',
            ]),
            LESSON,
          ),
          withLesson(
            q('c2', 'Wir haben die Stadt weiträumig ___. (drove around)', 'umfahren', [
              'umgefahren',
              'umgefährt',
              'umfahrt',
            ]),
            LESSON,
          ),
          withLesson(
            q('c3', 'Sie hat den Vertrag ins Deutsche ___.', 'übersetzt', [
              'übergesetzt',
              'übersetzen',
              'übersetz',
            ]),
            LESSON,
          ),
          withLesson(
            q('c4', 'Die Fähre hat uns ___. (ferried across)', 'übergesetzt', [
              'übersetzt',
              'übersetzen',
              'übergesetzen',
            ]),
            LESSON,
          ),
          withLesson(
            q('c5', 'Er ___ ihr Neid. (insinuates)', 'unterstellt', [
              'stellt unter',
              'unterstellen',
              'untergestellt',
            ]),
            LESSON,
          ),
          q('c6', 'Wer bei Unrecht mutig eingreift, zeigt …', 'Zivilcourage', [
            'Gemeinnützigkeit',
            'Teilhabe',
            'Ausgrenzung',
          ]),
          q('c7', 'die Zivilgesellschaft', 'civil society', [
            'cooperative',
            'foundation',
            'discrimination',
          ]),
          q('c8', 'Das Wohl aller nennt man …', 'Gemeinwohl', [
            'Diskriminierung',
            'Spendenaufruf',
            'Genossenschaft',
          ]),
          q('c9', 'die Ausgrenzung', 'exclusion', [
            'participation',
            'solidarity',
            'discrimination',
          ]),
          withLesson(
            q('c10', 'Er geht gut mit Kindern ___.', 'um', ['umgeht', 'umgegangen', 'umzugehen']),
            LESSON,
          ),
        ],
      },
    ),
  ],
};
