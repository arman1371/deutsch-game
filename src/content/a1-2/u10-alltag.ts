import { byDe, flashcards, memory, quizEmoji, spell, vocabList } from '../builders';
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
  table,
  tf,
  unit12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-alltag';

const people = vocabList(U, 'Describing people', [
  ['groß', 'tall', '🦒'],
  ['klein', 'small / short', '🐭'],
  ['jung', 'young', '👶'],
  ['alt', 'old', '👴'],
  ['lustig', 'funny', '🤣'],
  ['nett', 'nice', '😊'],
  ['ruhig', 'quiet / calm', '🤫'],
  ['laut', 'loud', '📢'],
  ['sportlich', 'sporty', '🏃'],
  ['fleißig', 'hard-working', '🐝'],
  ['faul', 'lazy', '🦥'],
  ['schlank', 'slim', '🧘'],
  ['blond', 'blond', '👱'],
  ['Bart', 'beard', '🧔', 'der', 'Bärte'],
  ['Brille', 'glasses', '👓', 'die', 'Brillen'],
  ['Haare', 'hair', '💇', 'die'],
  ['lange Haare', 'long hair', '💁'],
  ['kurze Haare', 'short hair', '💈'],
  ['blaue Augen', 'blue eyes', '👁️'],
  ['Wie sieht er aus?', 'What does he look like?', '❓'],
]);

const chores = vocabList(U, 'Household tasks', [
  ['putzen', 'to clean', '🧽'],
  ['aufräumen', 'to tidy up', '🧹'],
  ['kochen', 'to cook', '🍳'],
  ['abwaschen', 'to wash up', '🍽️'],
  ['Wäsche waschen', 'to do the laundry', '🧺'],
  ['Müll rausbringen', 'to take out the rubbish', '🗑️'],
  ['einkaufen', 'to go shopping', '🛒'],
  ['bügeln', 'to iron', '👔'],
  ['Fenster putzen', 'to clean the windows', '🪟'],
  ['Bett machen', 'to make the bed', '🛏️'],
  ['lüften', 'to air the room', '🌬️'],
  ['staubsaugen', 'to vacuum', '🌀'],
  ['Blumen gießen', 'to water the plants', '🪴'],
  ['Rasen mähen', 'to mow the lawn', '🌱'],
]);

const rules = vocabList(U, 'House rules & plans', [
  ['Hausordnung', 'house rules', '📜', 'die', 'Hausordnungen'],
  ['Ruhezeit', 'quiet hours', '🤫', 'die', 'Ruhezeiten'],
  ['Nachbar', 'neighbour (f. Nachbarin)', '🧑‍🤝‍🧑', 'der', 'Nachbarn'],
  ['Lärm', 'noise', '📢', 'der'],
  ['Mülltrennung', 'waste separation', '♻️', 'die'],
  ['verboten', 'forbidden', '🚫'],
  ['erlaubt', 'allowed', '✅'],
  ['man darf (nicht)', 'one may (not)', '🚦'],
  ['man muss', 'one must', '❗'],
  ['Plan', 'plan', '🗺️', 'der', 'Pläne'],
  ['Wunsch', 'wish', '🌠', 'der', 'Wünsche'],
  ['Traum', 'dream', '💭', 'der', 'Träume'],
  ['Ziel', 'goal', '🎯', 'das', 'Ziele'],
  ['Zukunft', 'future', '🔮', 'die'],
  ['bald', 'soon', '🔜'],
  ['später', 'later', '⏭️'],
  ['nächstes Jahr', 'next year', '📅'],
  ['vielleicht', 'maybe', '🤷'],
  ['Ich würde gern …', 'I would like to …', '💫'],
  ['Ich will … werden.', 'I want to become …', '🎓'],
]);

const vocab = [...people, ...chores, ...rules];

export const alltag: UnitContent = {
  unit: unit12({
    id: U,
    order: 10,
    title: 'Alltag, Pläne & Regeln',
    subtitle: 'Describing people, plans and wishes, household tasks and rules',
    emoji: '🌟',
    goals: [
      'Describe what a person looks like and what they are like',
      'Talk about your plans, wishes and dreams',
      'Understand house rules and share household tasks',
    ],
    grammar: [
      'Modal verbs: man darf (nicht), man muss, man soll, ich will, ich möchte',
      'Polite wishes: Ich würde gern …, Ich hätte gern …',
      'Comparison: älter als, so … wie, am ältesten',
      'Conjunctions: und, oder, aber, denn',
    ],
    vocabFields: ['Describing people', 'Household tasks', 'House rules & plans'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-people',
      'flashcards',
      meta(
        'Describing people',
        'Tall, funny, long hair – what does someone look like?',
        ['vocabulary', 'describing-people'],
        1,
        5,
      ),
      flashcards(people),
    ),

    activity(
      U,
      'quiz-people',
      'quiz',
      meta(
        'Which word fits?',
        'Match the picture with the description.',
        ['vocabulary', 'describing-people'],
        1,
        3,
      ),
      quizEmoji(people.slice(0, 16), people.slice(0, 16)),
    ),

    activity(
      U,
      'flash-chores',
      'flashcards',
      meta(
        'Household tasks',
        'Cleaning, cooking, washing up – who does what?',
        ['vocabulary', 'household'],
        1,
        4,
      ),
      flashcards(chores),
    ),

    activity(
      U,
      'memory-chores',
      'memory',
      meta('Chores memory', 'Match the task with the picture.', ['vocabulary', 'household'], 1, 3),
      memory(
        byDe(
          chores,
          'putzen',
          'aufräumen',
          'kochen',
          'abwaschen',
          'einkaufen',
          'bügeln',
          'lüften',
          'staubsaugen',
        ),
        'emoji',
      ),
    ),

    activity(
      U,
      'sort-rules',
      'sortit',
      meta(
        'Allowed or forbidden?',
        'House rules: what may you do?',
        ['communication', 'household', 'modal-verbs'],
        2,
        4,
      ),
      {
        instruction: 'Is this usually allowed or forbidden in a block of flats?',
        buckets: [
          { id: 'erlaubt', label: 'Das darf man', emoji: '✅' },
          { id: 'verboten', label: 'Das darf man nicht', emoji: '🚫' },
        ],
        items: sortItems('r', [
          ['tagsüber Musik hören', 'erlaubt'],
          ['um 23 Uhr laut singen', 'verboten'],
          ['das Fahrrad im Keller parken', 'erlaubt'],
          ['das Fahrrad im Treppenhaus parken', 'verboten'],
          ['Besuch empfangen', 'erlaubt'],
          ['im Treppenhaus rauchen', 'verboten'],
          ['Wäsche im Keller waschen', 'erlaubt'],
          ['den Müll vor die Tür stellen', 'verboten'],
          ['sonntags laut Rasen mähen', 'verboten'],
        ]),
      },
    ),

    activity(
      U,
      'spell-chores',
      'spell',
      meta(
        'Spell the chores',
        'Unscramble the letters and type the verbs.',
        ['spelling', 'household'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(chores, 'putzen', 'kochen', 'lüften'), 'unscramble').items,
          ...spell(byDe(chores, 'aufräumen', 'abwaschen', 'einkaufen'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'listen-life',
      'listen',
      meta(
        'People, rules, plans',
        'Listen and pick the meaning.',
        ['listening', 'describing-people', 'household', 'plans-wishes'],
        2,
        5,
      ),
      {
        items: [
          heard('l1', 'Mein Bruder ist groß und sportlich.', 'My brother is tall and sporty.', [
            'My brother is small and sporty.',
            'My brother is tall and lazy.',
            'My father is tall and sporty.',
          ]),
          heard(
            'l2',
            'Sie hat lange blonde Haare und blaue Augen.',
            'She has long blond hair and blue eyes.',
            [
              'She has short blond hair and blue eyes.',
              'She has long dark hair and brown eyes.',
              'She has long blond hair and brown eyes.',
            ],
          ),
          heard('l3', 'Er ist nett, aber manchmal laut.', 'He is nice, but sometimes loud.', [
            'He is nice and always quiet.',
            'He is loud, but never nice.',
            'He is nice, but sometimes lazy.',
          ]),
          heard(
            'l4',
            'Nach zweiundzwanzig Uhr muss man leise sein.',
            'After 10 p.m. you have to be quiet.',
            [
              'After 10 p.m. you are allowed to be loud.',
              'Before 10 p.m. you have to be quiet.',
              'After 12 p.m. you have to be quiet.',
            ],
          ),
          heard(
            'l5',
            'Man darf im Treppenhaus nicht rauchen.',
            'You are not allowed to smoke in the stairwell.',
            [
              'You have to smoke in the stairwell.',
              'You are not allowed to park in the stairwell.',
              'You may smoke in the garden.',
            ],
          ),
          heard(
            'l6',
            'Ich möchte später in Berlin wohnen.',
            'I would like to live in Berlin later.',
            [
              'I lived in Berlin earlier.',
              'I am living in Berlin now.',
              'I would like to work in Berlin.',
            ],
          ),
          heard(
            'l7',
            'Nächstes Jahr will ich Deutsch lernen.',
            'Next year I want to learn German.',
            [
              'Last year I learned German.',
              'Next year I want to teach German.',
              'Next week I want to learn German.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-modal',
      'gapfill',
      meta(
        'man darf, man muss, man soll',
        'Rules and plans with modal verbs.',
        ['grammar', 'modal-verbs', 'household'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'm1',
            'Hier ___ man nicht rauchen. (is not allowed to)',
            'darf',
            ['darf', 'muss', 'soll', 'will'],
            'You are not allowed to smoke here.',
            'man darf nicht = it is forbidden.',
          ),
          gap(
            'm2',
            'Nach 22 Uhr ___ man leise sein. (must)',
            'muss',
            ['muss', 'darf', 'kann', 'will'],
            'After 10 p.m. you have to be quiet.',
            'man muss = it is necessary.',
          ),
          gap(
            'm3',
            'Man ___ den Müll trennen. (should)',
            'soll',
            ['soll', 'darf', 'will', 'kann'],
            'You should separate your rubbish.',
          ),
          gap(
            'm4',
            'Mia ___ später Ärztin werden. (wants to)',
            'will',
            ['will', 'muss', 'darf', 'soll'],
            'Mia wants to become a doctor later.',
            'wollen = a strong wish or plan.',
          ),
          gap(
            'm5',
            'Du ___ dein Zimmer aufräumen. (must)',
            'musst',
            ['musst', 'darfst', 'willst', 'sollst'],
            'You have to tidy your room.',
          ),
          gap(
            'm6',
            '___ ich hier parken? (may)',
            'Darf',
            ['Darf', 'Muss', 'Soll', 'Will'],
            'May I park here?',
          ),
          gap(
            'm7',
            'Kinder ___ nach 20 Uhr nicht mehr draußen spielen. (are not allowed to)',
            'dürfen',
            ['dürfen', 'müssen', 'sollen', 'wollen'],
            'Children are not allowed to play outside after 8 p.m.',
          ),
          gap(
            'm8',
            'Ihr ___ heute abwaschen. (should)',
            'sollt',
            ['sollt', 'dürft', 'wollt', 'könnt'],
            'You should wash up today.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-wishes',
      'gapfill',
      meta(
        'Ich würde gern … / Ich hätte gern …',
        'Say what you would like – politely.',
        ['grammar', 'polite-forms', 'plans-wishes'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'w1',
            'Ich ___ gern nach Spanien reisen. (would)',
            'würde',
            ['würde', 'werde', 'wurde', 'wird'],
            'I would like to travel to Spain.',
            'würde gern + infinitive.',
          ),
          gap(
            'w2',
            'Am liebsten ___ ich ein Haus am Meer. (would have)',
            'hätte',
            ['hätte', 'habe', 'hatte', 'hat'],
            'Most of all I would like a house by the sea.',
            'hätte gern + noun.',
          ),
          gap(
            'w3',
            'Wir ___ gern ein Boot kaufen. (would)',
            'würden',
            ['würden', 'werden', 'wurden', 'würde'],
            'We would like to buy a boat.',
          ),
          gap(
            'w4',
            'Ich ___ gern Pilot werden. (would like to)',
            'möchte',
            ['möchte', 'möchten', 'möchtest', 'mögen'],
            'I would like to become a pilot.',
            'möchte (ich/er) – möchtest (du).',
          ),
          gap(
            'w5',
            'Was ___ du gern machen? (would)',
            'würdest',
            ['würdest', 'würde', 'wirst', 'wurdest'],
            'What would you like to do?',
          ),
          gap(
            'w6',
            'Meine Eltern ___ gern öfter reisen. (would)',
            'würden',
            ['würden', 'werden', 'wurden', 'würdet'],
            'My parents would like to travel more often.',
          ),
          gap(
            'w7',
            'Ich ___ gern mehr Zeit. (would have)',
            'hätte',
            ['hätte', 'hatte', 'habe', 'hättest'],
            'I would like more time.',
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-wishes',
      'conjugation',
      meta(
        'wollen, werden, mögen, möchten',
        'Verbs for plans, wishes and likes.',
        ['grammar', 'modal-verbs', 'verb-conjugation', 'plans-wishes'],
        2,
        5,
      ),
      {
        tables: [
          table('wollen', 'to want to', ['ich', 'du', 'er/sie/es']),
          table('werden', 'to become', ['ich', 'du', 'er/sie/es']),
          table('mögen', 'to like', ['ich', 'du', 'wir']),
          table('möchten', 'would like to', ['ich', 'du', 'ihr']),
          customTable(
            'wuerde',
            'werden → würde',
            'would',
            ['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'],
            ['ich', 'du', 'wir'],
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-comparison',
      'gapfill',
      meta(
        'älter als, so … wie, am ältesten',
        'Compare people and things.',
        ['grammar', 'comparison', 'describing-people'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'k1',
            'Mein Bruder ist ___ als ich. (alt)',
            'älter',
            ['älter', 'alter', 'am ältesten', 'mehr alt'],
            'My brother is older than me.',
            'Short adjectives add an umlaut: alt – älter – am ältesten.',
          ),
          gap(
            'k2',
            'Meine Schwester ist ___ als mein Bruder. (jung)',
            'jünger',
            ['jünger', 'junger', 'am jüngsten', 'mehr jung'],
            'My sister is younger than my brother.',
          ),
          gap(
            'k3',
            'Wer ist hier ___? (groß)',
            'am größten',
            ['am größten', 'größer', 'am großesten', 'groß'],
            'Who is the tallest here?',
            'Superlative: am + -sten (-esten after -ß).',
          ),
          gap(
            'k4',
            'Lea ist so ___ wie Tom. (nett)',
            'nett',
            ['nett', 'netter', 'am nettesten', 'nette'],
            'Lea is as nice as Tom.',
            'so … wie uses the basic form.',
          ),
          gap(
            'k5',
            'Er ist ___ als sein Vater. (sportlich)',
            'sportlicher',
            ['sportlicher', 'sportlichere', 'am sportlichsten', 'mehr sportlich'],
            'He is sportier than his father.',
          ),
          gap(
            'k6',
            'Ich koche ___ als ich putze. (gern)',
            'lieber',
            ['lieber', 'gerner', 'am liebsten', 'mehr gern'],
            'I prefer cooking to cleaning.',
            'gern – lieber – am liebsten.',
          ),
          gap(
            'k7',
            'Am ___ mag ich meine Oma. (gern)',
            'liebsten',
            ['liebsten', 'lieber', 'gernsten', 'meisten'],
            'I like my grandma best of all.',
          ),
          gap(
            'k8',
            'Mein Opa ist ___ in der Familie. (alt)',
            'am ältesten',
            ['am ältesten', 'älter', 'der älteste', 'am alten'],
            'My grandpa is the oldest in the family.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-conjunctions',
      'gapfill',
      meta(
        'und, oder, aber, denn',
        'Join descriptions, plans and reasons.',
        ['grammar', 'conjunctions', 'describing-people', 'household'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'j1',
            'Er ist klein, ___ sehr sportlich.',
            'aber',
            ['aber', 'denn', 'oder', 'und'],
            'He is small but very sporty.',
            'aber = contrast.',
          ),
          gap(
            'j2',
            'Sie ist nett ___ lustig.',
            'und',
            ['und', 'denn', 'aber', 'oder'],
            'She is nice and funny.',
          ),
          gap(
            'j3',
            'Ich wohne allein, ___ ich habe viele Freunde.',
            'aber',
            ['aber', 'denn', 'und', 'oder'],
            'I live alone, but I have many friends.',
          ),
          gap(
            'j4',
            'Ich putze heute, ___ morgen kommt Besuch.',
            'denn',
            ['denn', 'aber', 'oder', 'und'],
            'I am cleaning today because guests are coming tomorrow.',
            'denn = because; the verb stays in second position.',
          ),
          gap(
            'j5',
            'Möchtest du kochen ___ abwaschen?',
            'oder',
            ['oder', 'denn', 'aber', 'und'],
            'Would you like to cook or wash up?',
          ),
          gap(
            'j6',
            'Wir wollen ein Haus kaufen ___ einen Hund haben.',
            'und',
            ['und', 'aber', 'oder', 'denn'],
            'We want to buy a house and have a dog.',
          ),
          gap(
            'j7',
            'Ich will reisen, ___ ich habe kein Geld.',
            'aber',
            ['aber', 'denn', 'und', 'oder'],
            'I want to travel, but I have no money.',
          ),
          gap(
            'j8',
            'Räum bitte auf, ___ es ist sehr unordentlich.',
            'denn',
            ['denn', 'aber', 'und', 'oder'],
            'Please tidy up, because it is very messy.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Describe, plan, set the rules',
        'Build sentences about people, plans and rules.',
        ['grammar', 'word-order', 'describing-people', 'plans-wishes'],
        2,
        7,
      ),
      {
        items: [
          sent('s1', 'My brother is tall and sporty.', [
            'Mein',
            'Bruder',
            'ist',
            'groß',
            'und',
            'sportlich.',
          ]),
          sent('s2', 'She has long blond hair.', ['Sie', 'hat', 'lange', 'blonde', 'Haare.'], {
            explanation: 'Plural without an article: adjective ending -e.',
          }),
          sent('s3', 'He is nice, but sometimes loud.', [
            'Er',
            'ist',
            'nett,',
            'aber',
            'manchmal',
            'laut.',
          ]),
          sent(
            's4',
            'After ten o’clock you have to be quiet.',
            ['Nach', 'zehn', 'Uhr', 'muss', 'man', 'leise', 'sein.'],
            {
              alsoAccept: ['Man muss nach zehn Uhr leise sein.'],
            },
          ),
          sent(
            's5',
            'You are not allowed to smoke here.',
            ['Hier', 'darf', 'man', 'nicht', 'rauchen.'],
            {
              alsoAccept: ['Man darf hier nicht rauchen.'],
            },
          ),
          sent('s6', 'Mia wants to become a doctor.', ['Mia', 'möchte', 'Ärztin', 'werden.'], {
            alsoAccept: ['Mia will Ärztin werden.'],
          }),
          sent(
            's7',
            'Next year we want to travel to Italy.',
            ['Nächstes', 'Jahr', 'wollen', 'wir', 'nach', 'Italien', 'reisen.'],
            {
              alsoAccept: ['Wir wollen nächstes Jahr nach Italien reisen.'],
            },
          ),
          sent('s8', 'Who washes up today?', ['Wer', 'wäscht', 'heute', 'ab?'], {
            explanation: 'abwaschen is separable: wäscht … ab.',
          }),
          sent('s9', 'I would like to have a house by the sea.', [
            'Ich',
            'hätte',
            'gern',
            'ein',
            'Haus',
            'am',
            'Meer.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues-life',
      'dialogue',
      meta(
        'Looks, rules and dreams',
        'Describe a person, talk to a neighbour, share your plans.',
        ['communication', 'describing-people', 'household', 'plans-wishes'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'lost',
            title: 'Describing a friend',
            emoji: '🧑',
            setting: 'You lost your friend at the station and ask the information desk.',
            turns: [
              say('Information', 'Wie sieht Ihr Freund aus?', 'What does your friend look like?'),
              you(
                'Er ist groß und hat kurze braune Haare.',
                [
                  'Er ist groß und hat kurz braune Haare.',
                  'Plural without an article: kurze Haare.',
                ],
                ['Er hat groß und ist kurze braune Haare.', 'ist + adjective, hat + noun.'],
              ),
              say('Information', 'Trägt er eine Brille?', 'Is he wearing glasses?'),
              you(
                'Ja, er trägt eine Brille. Er ist sehr nett.',
                ['Ja, er trägt ein Brille. Er ist sehr nett.', 'die Brille → eine Brille.'],
                [
                  'Ja, er trägt eine Brille. Er hat sehr nett.',
                  'sein + adjective: Er ist sehr nett.',
                ],
              ),
            ],
          },
          {
            id: 'neighbour',
            title: 'A neighbour knocks',
            emoji: '🚪',
            setting: 'It is half past ten in the evening and your music is loud.',
            turns: [
              say(
                'Nachbar',
                'Entschuldigung, es ist schon halb elf. Nach zehn Uhr muss man leise sein.',
                'Excuse me, it is already half past ten. After ten you have to be quiet.',
              ),
              you(
                'Oh, das tut mir leid. Ich mache die Musik sofort leiser.',
                [
                  'Oh, das tut mir leid. Ich mache die Musik sofort laut.',
                  'You need to make it quieter (leiser), not louder.',
                ],
                [
                  'Oh, das tut mir leid. Ich darf die Musik sofort leiser.',
                  'You promise to do something: Ich mache …',
                ],
              ),
              say(
                'Nachbar',
                'Danke. Und bitte denken Sie an den Müll: Man darf ihn nicht vor die Tür stellen.',
                'Thanks. And please remember the rubbish: you must not put it in front of the door.',
              ),
              you(
                'Entschuldigung, wohin soll ich ihn stellen?',
                [
                  'Entschuldigung, wo soll ich ihn stellen?',
                  'When you put something somewhere, ask Wohin?',
                ],
                ['Entschuldigung, wohin soll ich es stellen?', 'der Müll → ihn.'],
              ),
              say('Nachbar', 'In die Mülltonne im Hof.', 'Into the bin in the courtyard.'),
              you(
                'Alles klar, danke für den Tipp!',
                ['Alles klar, danke für dem Tipp!', 'für takes the accusative: den Tipp.'],
                ['Alles klar, danke für der Tipp!', 'für takes the accusative: den Tipp.'],
              ),
            ],
          },
          {
            id: 'dreams',
            title: 'Plans and dreams',
            emoji: '🌟',
            setting: 'A friend asks about your plans.',
            turns: [
              say(
                'Freundin',
                'Was sind deine Pläne für nächstes Jahr?',
                'What are your plans for next year?',
              ),
              you(
                'Ich will Deutsch lernen und im Sommer nach Wien reisen.',
                [
                  'Ich will Deutsch lerne und im Sommer nach Wien reisen.',
                  'After a modal verb: infinitive lernen.',
                ],
                [
                  'Ich will Deutsch lernen und im Sommer nach Wien reise.',
                  'After a modal verb: infinitive reisen.',
                ],
              ),
              say('Freundin', 'Und was ist dein Traum?', 'And what is your dream?'),
              you(
                'Ich würde gern ein kleines Café eröffnen.',
                ['Ich werde gern ein kleines Café eröffnen.', 'A wish: würde gern.'],
                [
                  'Ich würde gern ein kleines Café eröffnet.',
                  'The infinitive eröffnen goes to the end.',
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
      meta(
        'Everyday blitz',
        'Modal verbs, comparison, conjunctions – true or false?',
        ['grammar', 'modal-verbs', 'comparison', 'conjunctions'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Hier darf man nicht rauchen.', true),
          tf(
            'b2',
            'Hier man darf nicht rauchen.',
            false,
            'The verb is in second position: Hier darf man …',
          ),
          tf('b3', 'Nach 22 Uhr muss man leise sein.', true),
          tf('b4', 'Mein Bruder ist größer als ich.', true),
          tf('b5', 'Mein Bruder ist größer wie ich.', false, 'comparative + als'),
          tf('b6', 'Mein Opa ist am ältesten in der Familie.', true),
          tf('b7', 'Sie hat lange blonde Haare.', true),
          tf('b8', 'Sie hat lang blonde Haare.', false, 'Plural without an article: lange.'),
          tf('b9', 'Ich würde gern reisen.', true),
          tf('b10', 'Ich werde gern reisen.', false, 'A wish: würde gern.'),
          tf('b11', 'Ich putze, denn morgen kommt Besuch.', true),
          tf(
            'b12',
            'Ich putze, denn kommt morgen Besuch.',
            false,
            'After denn the word order does not change.',
          ),
          tf('b13', 'Mia möchte Ärztin werden.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'People, plans, rules and comparison in one final round.',
        ['vocabulary', 'grammar', 'plans-wishes'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Hier ___ man nicht parken. (is not allowed to)', 'darf', [
            'muss',
            'soll',
            'will',
          ]),
          q('c2', 'Mein Bruder ist ___ als ich. (alt)', 'älter', [
            'alter',
            'am ältesten',
            'mehr alt',
          ]),
          q('c3', 'Wer ist ___? (the tallest)', 'am größten', ['größer', 'am großesten', 'groß']),
          q('c4', 'Ich ___ gern nach Spanien reisen.', 'würde', ['werde', 'wurde', 'wird']),
          q('c5', 'Ich putze, ___ morgen kommt Besuch.', 'denn', ['aber', 'oder', 'und']),
          q('c6', 'Sie hat ___ Haare. (lang)', 'lange', ['langen', 'langer', 'lang']),
          q('c7', 'Which sentence is correct?', 'Wer wäscht heute ab?', [
            'Wer abwäscht heute?',
            'Wer wäscht ab heute?',
            'Wer wascht heute ab?',
          ]),
          q('c8', 'Er ist klein, ___ sehr sportlich.', 'aber', ['denn', 'oder', 'weil']),
          q('c9', 'der Nachbar', 'neighbour', ['landlord', 'guest', 'colleague']),
          q('c10', 'Ich ___ später Ärztin werden. (want to)', 'will', ['darf', 'muss', 'soll']),
        ],
      },
    ),
  ],
};
