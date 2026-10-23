import { byDe, flashcards, memory, quizDeEn, quizEmoji, spell, vocabList } from '../builders';
import { dateToDigits, dateToGerman, ordinal, ordinalDative } from '@/lib/german/ordinals';
import {
  activity,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sortItems,
  table,
  tf,
  typed,
  unit12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-feste';

const months = vocabList(U, 'Months', [
  ['Januar', 'January', '🎆', 'der'],
  ['Februar', 'February', '🎭', 'der'],
  ['März', 'March', '🌱', 'der'],
  ['April', 'April', '🌦️', 'der'],
  ['Mai', 'May', '🌸', 'der'],
  ['Juni', 'June', '☀️', 'der'],
  ['Juli', 'July', '🏖️', 'der'],
  ['August', 'August', '🌻', 'der'],
  ['September', 'September', '🍎', 'der'],
  ['Oktober', 'October', '🎃', 'der'],
  ['November', 'November', '🍂', 'der'],
  ['Dezember', 'December', '🎄', 'der'],
]);

const feste = vocabList(U, 'Celebrations', [
  ['Geburtstag', 'birthday', '🎂', 'der', 'Geburtstage'],
  ['Hochzeit', 'wedding', '💒', 'die', 'Hochzeiten'],
  ['Party', 'party', '🥳', 'die', 'Partys'],
  ['Geschenk', 'present', '🎁', 'das', 'Geschenke'],
  ['Einladung', 'invitation', '💌', 'die', 'Einladungen'],
  ['Gast', 'guest', '🧑‍🤝‍🧑', 'der', 'Gäste'],
  ['Weihnachten', 'Christmas', '🎅', 'das'],
  ['Ostern', 'Easter', '🐰', 'das'],
  ['Silvester', 'New Year’s Eve', '🍾', 'das'],
  ['Kerze', 'candle', '🕯️', 'die', 'Kerzen'],
  ['Luftballon', 'balloon', '🎈', 'der', 'Luftballons'],
  ['Torte', 'gateau', '🍰', 'die', 'Torten'],
  ['Feuerwerk', 'fireworks', '🎇', 'das', 'Feuerwerke'],
  ['Musik', 'music', '🎶', 'die'],
  ['Fest', 'celebration', '🎉', 'das', 'Feste'],
]);

const phrases = vocabList(U, 'Invitations & congratulations', [
  ['feiern', 'to celebrate', '🥂'],
  ['einladen', 'to invite', '📩'],
  ['schenken', 'to give (as a present)', '🎁'],
  ['gratulieren', 'to congratulate', '👏'],
  ['tanzen', 'to dance', '💃'],
  ['Herzlichen Glückwunsch!', 'Congratulations!', '🎊'],
  ['Alles Gute zum Geburtstag!', 'Happy birthday!', '🎂'],
  ['Frohe Weihnachten!', 'Merry Christmas!', '🎄'],
  ['Frohes neues Jahr!', 'Happy New Year!', '🎆'],
  ['Viel Spaß!', 'Have fun!', '😄'],
  ['Danke für die Einladung!', 'Thanks for the invitation!', '💌'],
  ['Ich komme gern.', 'I’ll be glad to come.', '✅'],
  ['Leider kann ich nicht kommen.', 'Unfortunately I cannot come.', '❌'],
  ['Wann hast du Geburtstag?', 'When is your birthday?', '❓'],
  ['am dritten Mai', 'on 3 May', '📅'],
]);

const vocab = [...months, ...feste, ...phrases];

type DM = readonly [day: number, month: number];
const dateHeard = (d: number, m: number, wrong: DM[]) =>
  heard(
    `date-${d}-${m}`,
    `Mein Geburtstag ist ${dateToGerman(d, m)}.`,
    dateToDigits(d, m),
    wrong.map(([wd, wm]) => dateToDigits(wd, wm)),
    `${dateToGerman(d, m)} = ${dateToDigits(d, m)}`,
  );

export const feiern: UnitContent = {
  unit: unit12({
    id: U,
    order: 7,
    title: 'Feste & Feiern',
    subtitle: 'Dates, invitations and congratulations',
    emoji: '🎉',
    goals: [
      'Say and write dates with months and ordinal numbers',
      'Invite someone, accept or politely decline',
      'Congratulate and give presents',
    ],
    grammar: [
      'Ordinal numbers in dates: am dritten Mai, der erste Januar',
      'Dative pronouns with schenken, gratulieren, danken, gefallen',
      'vor / nach / ab / bis / seit / zu with the dative',
      'Separable verbs: einladen, mitbringen',
    ],
    vocabFields: ['Months', 'Celebrations', 'Invitations & congratulations'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-months',
      'flashcards',
      meta('The months', 'Januar to Dezember – all der.', ['vocabulary', 'celebrations'], 1, 3),
      flashcards(months),
    ),

    activity(
      U,
      'quiz-months',
      'quiz',
      meta('Which month?', 'German month → English.', ['vocabulary', 'celebrations'], 1, 3),
      quizDeEn(months),
    ),

    activity(
      U,
      'flash-feste',
      'flashcards',
      meta(
        'Celebrations',
        'Birthday, wedding, Christmas and party words.',
        ['vocabulary', 'celebrations'],
        1,
        4,
      ),
      flashcards(feste),
    ),

    activity(
      U,
      'quiz-feste',
      'quiz',
      meta(
        'What is this?',
        'Name the picture – with the right article.',
        ['vocabulary', 'celebrations', 'articles'],
        1,
        3,
      ),
      quizEmoji(feste, feste),
    ),

    activity(
      U,
      'memory-feste',
      'memory',
      meta(
        'Party memory',
        'Match the German word with the picture.',
        ['vocabulary', 'celebrations'],
        1,
        3,
      ),
      memory(
        byDe(
          feste,
          'Geburtstag',
          'Hochzeit',
          'Geschenk',
          'Einladung',
          'Kerze',
          'Luftballon',
          'Torte',
          'Feuerwerk',
        ),
        'emoji',
      ),
    ),

    activity(
      U,
      'spell-feste',
      'spell',
      meta(
        'Spell the party',
        'Unscramble the letters and type the words.',
        ['spelling', 'celebrations'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(feste, 'Kerze', 'Geschenk', 'Gast'), 'unscramble').items,
          ...spell(byDe(feste, 'Geburtstag', 'Einladung', 'Hochzeit'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'sort-season',
      'sortit',
      meta(
        'Which season?',
        'Sort the months into the four seasons.',
        ['vocabulary', 'celebrations'],
        2,
        3,
      ),
      {
        instruction: 'In which season is this month?',
        buckets: [
          { id: 'fruehling', label: 'Frühling', emoji: '🌷' },
          { id: 'sommer', label: 'Sommer', emoji: '😎' },
          { id: 'herbst', label: 'Herbst', emoji: '🍂' },
          { id: 'winter', label: 'Winter', emoji: '⛄' },
        ],
        items: sortItems('m', [
          ['März', 'fruehling'],
          ['April', 'fruehling'],
          ['Mai', 'fruehling'],
          ['Juni', 'sommer'],
          ['Juli', 'sommer'],
          ['August', 'sommer'],
          ['September', 'herbst'],
          ['Oktober', 'herbst'],
          ['November', 'herbst'],
          ['Dezember', 'winter'],
          ['Januar', 'winter'],
          ['Februar', 'winter'],
        ]),
      },
    ),

    activity(
      U,
      'listen-dates',
      'listen',
      meta(
        'When is the party?',
        'Listen to the date and pick the written form.',
        ['listening', 'celebrations', 'ordinal-numbers'],
        2,
        5,
      ),
      {
        items: [
          dateHeard(3, 5, [
            [5, 3],
            [13, 5],
            [3, 6],
          ]),
          dateHeard(24, 12, [
            [24, 11],
            [14, 12],
            [23, 12],
          ]),
          dateHeard(1, 1, [
            [11, 1],
            [1, 11],
            [2, 1],
          ]),
          dateHeard(15, 8, [
            [5, 8],
            [15, 9],
            [16, 8],
          ]),
          dateHeard(31, 10, [
            [30, 10],
            [31, 12],
            [13, 10],
          ]),
          dateHeard(20, 3, [
            [2, 3],
            [20, 8],
            [12, 3],
          ]),
          heard('i1', 'Ich lade dich zu meiner Party ein.', 'I am inviting you to my party.', [
            'I am inviting you to my wedding.',
            'You are inviting me to your party.',
            'I am going to your party.',
          ]),
          heard('i2', 'Leider kann ich nicht kommen.', 'Unfortunately I cannot come.', [
            'I am looking forward to coming.',
            'Unfortunately I am late.',
            'I would like to come.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-dative',
      'gapfill',
      meta(
        'schenken, gratulieren, danken',
        'Who gets the present? Dative pronouns again.',
        ['grammar', 'dative', 'object-pronouns', 'celebrations'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Ich schenke ___ ein Buch. (you, informal)',
            'dir',
            ['dir', 'dich', 'du', 'dein'],
            'I give you a book.',
            'schenken: the person (dative) first, the gift (accusative) second.',
          ),
          gap(
            'g2',
            'Wir gratulieren ___ zum Geburtstag. (him)',
            'ihm',
            ['ihm', 'ihn', 'er', 'sein'],
            'We congratulate him on his birthday.',
            'gratulieren takes the dative.',
          ),
          gap(
            'g3',
            'Er schenkt ___ Blumen. (her)',
            'ihr',
            ['ihr', 'sie', 'ihn', 'ihre'],
            'He gives her flowers.',
          ),
          gap(
            'g4',
            'Die Party gefällt ___ sehr. (us)',
            'uns',
            ['uns', 'wir', 'unser', 'euch'],
            'We like the party very much.',
          ),
          gap(
            'g5',
            'Ich schicke ___ eine Einladung. (them)',
            'ihnen',
            ['ihnen', 'sie', 'ihm', 'ihr'],
            'I send them an invitation.',
          ),
          gap(
            'g6',
            'Was schenkst du ___ zum Geburtstag? (me)',
            'mir',
            ['mir', 'mich', 'ich', 'mein'],
            'What are you giving me for my birthday?',
          ),
          gap(
            'g7',
            'Wir danken ___ für die Einladung. (formal)',
            'Ihnen',
            ['Ihnen', 'Sie', 'Ihr', 'Ihre'],
            'We thank you for the invitation.',
            'danken takes the dative.',
          ),
          gap(
            'g8',
            'Ich gebe ___ das Geschenk. (you all, informal)',
            'euch',
            ['euch', 'ihr', 'dich', 'eure'],
            'I give you the present.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-prepositions',
      'gapfill',
      meta(
        'ab, bis, vor, nach, zu, mit',
        'Prepositions for time and invitations – all with the dative.',
        ['grammar', 'prepositions-of-time', 'dative', 'celebrations'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'v1',
            'Die Party beginnt ___ 20 Uhr. (from)',
            'ab',
            ['ab', 'bis', 'vor', 'seit'],
            'The party starts from 8 p.m.',
            'ab = starting at / from (future).',
          ),
          gap(
            'v2',
            '___ der Party räumen wir auf. (after)',
            'Nach',
            ['Nach', 'Vor', 'Seit', 'Bis'],
            'After the party we tidy up.',
          ),
          gap(
            'v3',
            'Ich komme ___ dem Essen. (before)',
            'vor',
            ['vor', 'nach', 'ab', 'bis'],
            'I am coming before the meal.',
          ),
          gap(
            'v4',
            'Wir bleiben ___ Mitternacht. (until)',
            'bis',
            ['bis', 'ab', 'vor', 'seit'],
            'We are staying until midnight.',
            'bis = until (no article after it).',
          ),
          gap(
            'v5',
            'Ich lade dich ___ meiner Party ein.',
            'zu',
            ['zu', 'nach', 'in', 'bei'],
            'I am inviting you to my party.',
            'einladen zu + dative: zu meiner Party.',
          ),
          gap(
            'v6',
            'Wir sind ___ drei Tagen verheiratet. (for)',
            'seit',
            ['seit', 'vor', 'ab', 'bis'],
            'We have been married for three days.',
          ),
          gap(
            'v7',
            'Ich komme ___ meinem Freund. (with)',
            'mit',
            ['mit', 'zu', 'bei', 'von'],
            'I am coming with my boyfriend/friend.',
            'mit always takes the dative.',
          ),
          gap(
            'v8',
            'Das Geschenk ist ___ meiner Schwester. (from)',
            'von',
            ['von', 'mit', 'zu', 'bis'],
            'The present is from my sister.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-dates',
      'gapfill',
      meta(
        'Dates with ordinal numbers',
        'Type the ordinal: am … (-en), der … (-e).',
        ['grammar', 'ordinal-numbers', 'celebrations'],
        3,
        6,
      ),
      {
        items: [
          typed(
            'd1',
            'Mein Geburtstag ist am ___ Mai. (3.)',
            ordinalDative(3),
            'My birthday is on 3 May.',
            'am + dative: the ordinal ends in -en.',
          ),
          typed(
            'd2',
            'Wir feiern am ___ Januar. (1.)',
            ordinalDative(1),
            'We celebrate on 1 January.',
          ),
          typed(
            'd3',
            'Heute ist der ___ Juli. (7.)',
            ordinal(7),
            'Today is the seventh of July.',
            'der + nominative: the ordinal ends in -e.',
          ),
          typed(
            'd4',
            'Die Party ist am ___ Dezember. (24.)',
            ordinalDative(24),
            'The party is on 24 December.',
          ),
          typed(
            'd5',
            'Ich habe am ___ März Geburtstag. (8.)',
            ordinalDative(8),
            'My birthday is on 8 March.',
          ),
          typed(
            'd6',
            'Der ___ Oktober ist ein Feiertag. (3.)',
            ordinal(3),
            '3 October is a public holiday.',
          ),
          typed(
            'd7',
            'Wir treffen uns am ___ August. (20.)',
            ordinalDative(20),
            'We are meeting on 20 August.',
            'From 20 on: -ste + n → zwanzigsten.',
          ),
          typed('d8', 'Heute ist der ___ Februar. (14.)', ordinal(14), 'Today is 14 February.'),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Invite and congratulate',
        'Build invitations, answers and wishes.',
        ['grammar', 'word-order', 'celebrations', 'dative'],
        2,
        6,
      ),
      {
        items: [
          sent(
            's1',
            'I am inviting you to my party.',
            ['Ich', 'lade', 'dich', 'zu', 'meiner', 'Party', 'ein.'],
            {
              explanation: 'einladen is separable: the prefix ein goes to the end.',
            },
          ),
          sent('s2', 'My birthday is on 3 May.', [
            'Mein',
            'Geburtstag',
            'ist',
            'am',
            'dritten',
            'Mai.',
          ]),
          sent('s3', 'Happy birthday!', ['Herzlichen', 'Glückwunsch', 'zum', 'Geburtstag!']),
          sent('s4', 'I am giving you a book.', ['Ich', 'schenke', 'dir', 'ein', 'Buch.']),
          sent('s5', 'Thank you for the invitation!', ['Danke', 'für', 'die', 'Einladung!']),
          sent(
            's6',
            'Unfortunately I cannot come.',
            ['Leider', 'kann', 'ich', 'nicht', 'kommen.'],
            {
              alsoAccept: ['Ich kann leider nicht kommen.'],
            },
          ),
          sent('s7', 'The party starts at eight o’clock.', [
            'Die',
            'Party',
            'beginnt',
            'um',
            'acht',
            'Uhr.',
          ]),
          sent('s8', 'We celebrate from six o’clock until midnight.', [
            'Wir',
            'feiern',
            'ab',
            'sechs',
            'Uhr',
            'bis',
            'Mitternacht.',
          ]),
          sent('s9', 'Merry Christmas and a happy new year!', [
            'Frohe',
            'Weihnachten',
            'und',
            'ein',
            'frohes',
            'neues',
            'Jahr!',
          ]),
        ],
      },
    ),

    activity(
      U,
      'conj-feiern',
      'conjugation',
      meta(
        'feiern, schenken, gratulieren …',
        'Verbs for parties.',
        ['grammar', 'verb-conjugation', 'celebrations'],
        2,
        4,
      ),
      {
        tables: [
          table('feiern', 'to celebrate', ['ich', 'du', 'er/sie/es']),
          table('schenken', 'to give (a present)', ['ich', 'du', 'ihr']),
          table('gratulieren', 'to congratulate', ['ich', 'er/sie/es', 'wir']),
          table('tanzen', 'to dance', ['du', 'er/sie/es', 'ihr']),
          table('bringen', 'to bring', ['ich', 'du', 'sie/Sie']),
        ],
      },
    ),

    activity(
      U,
      'dialogues-party',
      'dialogue',
      meta(
        'Invitations',
        'Accept, decline and say thank you.',
        ['communication', 'celebrations', 'dative', 'ordinal-numbers'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'invite',
            title: 'An invitation',
            emoji: '💌',
            setting: 'Lisa invites you to her birthday party.',
            turns: [
              say(
                'Lisa',
                'Hallo! Ich habe am zwölften Juni Geburtstag. Ich lade dich zu meiner Party ein.',
                'Hi! My birthday is on 12 June. I’m inviting you to my party.',
              ),
              you(
                'Danke für die Einladung! Ich komme gern.',
                [
                  'Danke für der Einladung! Ich komme gern.',
                  'für takes the accusative: für die Einladung.',
                ],
                ['Danke für die Einladung! Ich kommen gern.', 'ich komme – the verb ending is -e.'],
              ),
              say(
                'Lisa',
                'Super! Die Party beginnt um 18 Uhr. Bringst du etwas zu essen mit?',
                'Great! The party starts at 6 p.m. Will you bring something to eat?',
              ),
              you(
                'Ja, ich bringe einen Kuchen mit.',
                ['Ja, ich bringe ein Kuchen mit.', 'der Kuchen → accusative: einen Kuchen.'],
                ['Ja, ich mitbringe einen Kuchen.', 'mitbringen is separable: ich bringe … mit.'],
              ),
              say('Lisa', 'Toll! Bis zum zwölften!', 'Great! See you on the 12th!'),
              you(
                'Bis dann! Ich freue mich.',
                [
                  'Gute Nacht! Ich freue mich.',
                  'This is not a goodbye for the night – say Bis dann.',
                ],
                ['Bis dann! Ich freue.', 'sich freuen is reflexive: Ich freue mich.'],
              ),
            ],
          },
          {
            id: 'decline',
            title: 'Wedding invitation',
            emoji: '💒',
            setting: 'Ben and Mia are getting married.',
            turns: [
              say(
                'Ben',
                'Wir heiraten im August und laden euch zur Hochzeit ein.',
                'We’re getting married in August and are inviting you to the wedding.',
              ),
              you(
                'Herzlichen Glückwunsch! Das freut mich sehr.',
                ['Herzlichen Glückwunsch zum Geburtstag!', 'It is a wedding, not a birthday.'],
                ['Gute Besserung!', 'That is for someone who is ill.'],
              ),
              say('Ben', 'Habt ihr am achtzehnten August Zeit?', 'Are you free on 18 August?'),
              you(
                'Leider kann ich nicht kommen, denn ich bin im Urlaub.',
                [
                  'Leider kann ich nicht kommen, denn bin ich im Urlaub.',
                  'denn does not change the word order.',
                ],
                [
                  'Leider ich kann nicht kommen, denn ich bin im Urlaub.',
                  'The verb stays in second position: Leider kann ich …',
                ],
              ),
            ],
          },
          {
            id: 'gift',
            title: 'A present',
            emoji: '🎁',
            setting: 'At the party a friend gives you a present.',
            turns: [
              say(
                'Tom',
                'Hier ist ein Geschenk für dich! Alles Gute zum Geburtstag!',
                'Here is a present for you! Happy birthday!',
              ),
              you(
                'Oh, danke! Das ist sehr lieb von dir.',
                ['Oh, danke! Das ist sehr lieb von dich.', 'von takes the dative: dir.'],
                ['Oh, danke! Das ist sehr lieb von du.', 'The dative of du is dir.'],
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
        'Party blitz',
        'Dates, dative and prepositions – true or false?',
        ['grammar', 'ordinal-numbers', 'dative'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Mein Geburtstag ist am dritten Mai.', true),
          tf('b2', 'Mein Geburtstag ist am dritte Mai.', false, 'am + dative: dritten.'),
          tf('b3', 'Heute ist der erste Januar.', true),
          tf('b4', 'Heute ist der ersten Januar.', false, 'After der in the nominative: erste.'),
          tf('b5', 'Ich schenke dir ein Buch.', true),
          tf('b6', 'Ich schenke dich ein Buch.', false, 'schenken + dative: dir.'),
          tf('b7', 'Wir gratulieren ihm.', true),
          tf('b8', 'Wir gratulieren ihn.', false, 'gratulieren + dative: ihm.'),
          tf('b9', 'Ich lade dich zu meiner Party ein.', true),
          tf('b10', 'Ich lade dich zu meinem Party ein.', false, 'die Party → zu meiner Party.'),
          tf('b11', 'Wir bleiben bis Mitternacht.', true),
          tf('b12', 'Dezember ist der zwölfte Monat.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Months, dates, dative and invitations in one final round.',
        ['vocabulary', 'grammar', 'celebrations'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Mein Geburtstag ist am ___ Mai. (3.)', ordinalDative(3), [
            'dritte',
            'dritt',
            'drei',
          ]),
          q('c2', 'Heute ist der ___ Januar. (1.)', ordinal(1), ['ersten', 'eins', 'erst']),
          q('c3', 'Ich schenke ___ ein Buch. (you, informal)', 'dir', ['dich', 'du', 'dein']),
          q('c4', 'Wir gratulieren ___. (him)', 'ihm', ['ihn', 'er', 'sein']),
          q('c5', 'Ich lade dich ___ meiner Party ein.', 'zu', ['nach', 'in', 'bei']),
          q(
            'c6',
            '“Herzlichen Glückwunsch!” – you say this when …',
            'it is someone’s birthday or wedding',
            ['someone is ill', 'someone leaves', 'you are lost'],
          ),
          q('c7', 'The twelfth month is …', 'Dezember', ['November', 'Januar', 'Oktober']),
          q('c8', 'Die Party beginnt ___ 20 Uhr. (from)', 'ab', ['seit', 'vor', 'mit']),
          q('c9', 'Which sentence is correct?', 'Ich bringe einen Kuchen mit.', [
            'Ich mitbringe einen Kuchen.',
            'Ich bringe mit einen Kuchen.',
            'Ich bringe ein Kuchen mit.',
          ]),
          q('c10', 'Wir bleiben ___ Mitternacht. (until)', 'bis', ['ab', 'vor', 'seit']),
        ],
      },
    ),
  ],
};
