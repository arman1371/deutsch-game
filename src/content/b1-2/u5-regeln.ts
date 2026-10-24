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
  unitB12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b1-2-regeln';

const rules = vocabList(U, 'Rules & manners', [
  ['Pünktlichkeit', 'punctuality', '⏱️', 'die'],
  ['Vorschrift', 'regulation', '📜', 'die', 'Vorschriften'],
  ['Verbot', 'ban', '🚫', 'das', 'Verbote'],
  ['Gepflogenheit', 'custom, convention', '🧭', 'die', 'Gepflogenheiten'],
  ['Händedruck', 'handshake', '🤝', 'der', 'Händedrücke'],
  ['Tabu', 'taboo', '🤐', 'das', 'Tabus'],
  ['Fettnäpfchen', 'faux pas (lit. little pot of fat)', '🫕', 'das', 'Fettnäpfchen'],
  ['Mittagsruhe', 'quiet time at midday', '😴', 'die'],
  ['Gästebuch', 'guestbook', '📔', 'das', 'Gästebücher'],
  ['sich anpassen', 'to adapt', '🦎'],
  ['beachten', 'to observe, to follow (a rule)', '👁️'],
  ['üblich', 'usual, customary', '🔁'],
  ['gewöhnungsbedürftig', 'something you have to get used to', '😬'],
]);

const phrases = vocabList(U, 'Talking about customs', [
  ['Das ist bei uns üblich.', 'That is customary where I come from.', '🏡'],
  ['Das gehört sich nicht.', 'That is not done.', '🙊'],
  ['Andere Länder, andere Sitten.', 'Other countries, other customs.', '🌍'],
  ['Wie ist das denn bei euch?', 'So how is that where you are from?', '❓'],
  ['Ich bin ins Fettnäpfchen getreten.', 'I put my foot in it.', '🤦'],
  ['Daran muss ich mich erst gewöhnen.', 'I have to get used to that first.', '⏳'],
]);

const vocab = [...rules, ...phrases];

export const regeln: UnitContent = {
  unit: unitB12({
    id: U,
    order: 5,
    title: 'Regeln & Umgangsformen',
    subtitle: 'House rules, cultural differences, faux pas and friendly modal particles',
    emoji: '📜',
    goals: [
      'Understand rules in a house or a club',
      'Compare customs in different countries',
      'Sound friendlier with modal particles',
    ],
    grammar: [
      'Modal particles: denn (friendly question), mal / doch (soft request), ja (we both know), eigentlich (by the way).',
      'Review: passive with modal verbs – Die Mittagsruhe muss beachtet werden.',
    ],
    vocabFields: ['Rules & manners', 'Talking about customs'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-rules',
      'flashcards',
      meta(
        'Rules & manners',
        'Pünktlichkeit, Vorschrift, Fettnäpfchen – the dos and don’ts.',
        ['vocabulary', 'rules-manners'],
        1,
        5,
      ),
      flashcards(rules),
    ),
    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Talking about customs',
        'Compare customs and admit a faux pas.',
        ['vocabulary', 'communication', 'rules-manners'],
        1,
        4,
      ),
      flashcards(phrases),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Dos and don’ts', 'Name what you see.', ['vocabulary', 'rules-manners'], 1, 4),
      quizEmoji(
        byDe(
          rules,
          'Pünktlichkeit',
          'Verbot',
          'Händedruck',
          'Tabu',
          'Fettnäpfchen',
          'Mittagsruhe',
          'Gästebuch',
          'sich anpassen',
        ),
      ),
    ),
    activity(
      U,
      'listen-phrases',
      'listen',
      meta(
        'Hear the phrases',
        'Listen and pick the meaning.',
        ['listening', 'rules-manners'],
        2,
        4,
      ),
      listen(phrases),
    ),
    activity(
      U,
      'spell-rules',
      'spell',
      meta(
        'Spell the rule words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'rules-manners'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(rules, 'Verbot', 'Tabu', 'üblich'), 'unscramble').items,
          ...spell(byDe(rules, 'Pünktlichkeit', 'Vorschrift', 'beachten'), 'type').items,
          dictation('d1', 'Komm doch mal vorbei!', 'do come round some time'),
          dictation('d2', 'Andere Länder, andere Sitten.', 'other countries, other customs'),
        ],
      },
    ),
    activity(
      U,
      'sort-particles',
      'sortit',
      meta(
        'What does the particle do?',
        'denn, mal, doch, ja – sort by what they add to the sentence.',
        ['grammar', 'modal-particles'],
        2,
        5,
      ),
      {
        instruction: 'What does the little word do here?',
        buckets: [
          { id: 'q', label: 'makes a question friendlier', emoji: '🙂' },
          { id: 'req', label: 'softens a request', emoji: '🪶' },
          { id: 'known', label: 'we both know it', emoji: '🤝' },
        ],
        items: sortItems('p', [
          ['Wie spät ist es denn?', 'q'],
          ['Was machst du denn hier?', 'q'],
          ['Wo wohnst du denn jetzt?', 'q'],
          ['Gib mir mal das Salz.', 'req'],
          ['Komm doch mit!', 'req'],
          ['Ruf mich mal an.', 'req'],
          ['Du weißt ja, dass ich Kaffee mag.', 'known'],
          ['Das ist ja bekannt.', 'known'],
          ['Wir haben ja am Sonntag Mittagsruhe.', 'known'],
        ]),
      },
    ),
    activity(
      U,
      'gap-particles',
      'gapfill',
      meta(
        'denn, doch, mal, ja, eigentlich',
        'Choose the particle that fits the situation.',
        ['grammar', 'modal-particles'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'p1',
              'Wo kommst du ___ her? (friendly question)',
              'denn',
              ['denn', 'ja', 'mal', 'doch'],
              'So where are you from?',
              'denn makes a question sound interested and friendly.',
            ),
            {
              ja: 'ja is for statements both people know, not for questions.',
              mal: 'mal softens requests, not questions like this.',
              doch: 'doch in a W-question would sound like a reproach.',
            },
          ),
          hint(
            gap(
              'p2',
              'Kannst du ___ kurz das Fenster zumachen? (soft request)',
              'mal',
              ['mal', 'denn', 'ja', 'eigentlich'],
              'Could you just close the window for a moment?',
              'mal makes a request sound small and casual.',
            ),
            {
              denn: 'denn is for real questions, not for requests.',
              ja: 'ja marks shared knowledge, not a request.',
              eigentlich: 'eigentlich would change the topic, not soften the request.',
            },
          ),
          hint(
            gap(
              'p3',
              'Komm ___ am Samstag zu uns! (friendly invitation)',
              'doch',
              ['doch', 'denn', 'ja', 'eigentlich'],
              'Why don’t you come to us on Saturday!',
              'doch in an imperative = a friendly encouragement.',
            ),
            {
              denn: 'denn is used in questions, not in an imperative.',
              ja: 'ja in an imperative sounds like a warning (Komm ja pünktlich!).',
              eigentlich: 'eigentlich does not fit an invitation.',
            },
          ),
          hint(
            gap(
              'p4',
              'Du weißt ___, dass man hier sonntags nicht bohren darf. (we both know it)',
              'ja',
              ['ja', 'denn', 'mal', 'doch'],
              'You know that you are not allowed to drill here on Sundays.',
              'ja = this is something we both already know.',
            ),
            {
              denn: 'denn belongs in questions.',
              mal: 'mal softens requests, it does not mark shared knowledge.',
              doch: 'doch would contradict someone; ja marks what both know.',
            },
          ),
          hint(
            gap(
              'p5',
              'Was machst du ___ am Wochenende? (by the way, new topic)',
              'eigentlich',
              ['eigentlich', 'mal', 'ja', 'doch'],
              'By the way, what are you doing at the weekend?',
              'eigentlich in a question opens a new topic.',
            ),
            {
              mal: 'mal softens requests, it does not start a new topic.',
              ja: 'ja is not used in questions like this.',
              doch: 'doch in a W-question sounds like a reproach.',
            },
          ),
          hint(
            gap(
              'p6',
              '„Du kommst nicht mit?“ – „___, ich komme mit!“',
              'Doch',
              ['Doch', 'Ja', 'Nein', 'Denn'],
              '“You’re not coming?” – “Yes I am, I’m coming!”',
              'doch answers yes to a negative question.',
            ),
            {
              Ja: 'After a negative question, yes is doch, not ja.',
              Nein: 'nein would mean you are not coming.',
              Denn: 'denn cannot be an answer.',
            },
          ),
          hint(
            typed(
              'p7',
              'Die Mittagsruhe muss beachtet ___.',
              'werden',
              'The midday quiet time must be observed.',
              'Passive with a modal verb: muss + participle + werden.',
            ),
            {
              wird: 'After a modal verb the infinitive werden goes to the end.',
              worden: 'worden is only used in the Perfekt passive.',
            },
            'passive',
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Friendly German',
        'Build sentences with modal particles.',
        ['grammar', 'word-order', 'modal-particles'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'Do come round some time!', ['Komm', 'doch', 'mal', 'vorbei!']),
          sent('s2', 'So how is that where you are from?', [
            'Wie',
            'ist',
            'das',
            'denn',
            'bei',
            'euch?',
          ]),
          sent('s3', 'You know I am always on time.', ['Ich', 'bin', 'ja', 'immer', 'pünktlich.']),
          sent('s4', 'That is not done.', ['Das', 'gehört', 'sich', 'nicht.']),
          sent(
            's5',
            'I have to get used to that first.',
            ['Daran', 'muss', 'ich', 'mich', 'erst', 'gewöhnen.'],
            { alsoAccept: ['Ich muss mich erst daran gewöhnen.'] },
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-customs',
      'listen',
      meta(
        'Customs around the world',
        'Listen to people comparing customs.',
        ['listening', 'rules-manners'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'In Deutschland kommt man zu einem Termin pünktlich, zu einer Party aber gern zehn Minuten später.',
            'Be on time for appointments, a little later for parties.',
            [
              'Always arrive early at parties in Germany.',
              'Being late for appointments is normal in Germany.',
              'Germans never go to parties.',
            ],
          ),
          heard(
            'l2',
            'In unserem Haus gilt: Von 13 bis 15 Uhr ist Mittagsruhe, dann darf man keinen Lärm machen.',
            'There is no noise allowed from 1 to 3 pm.',
            [
              'Lunch is served from 1 to 3 pm in the house.',
              'You may only make noise from 1 to 3 pm.',
              'The house is closed in the afternoon.',
            ],
          ),
          heard(
            'l3',
            'Bei uns begrüßt man sich mit einem Kuss auf die Wange. Den Händedruck fand ich am Anfang sehr gewöhnungsbedürftig.',
            'At home people kiss on the cheek, so the handshake felt strange at first.',
            [
              'He has always preferred a handshake.',
              'In his country people never greet each other.',
              'He found the cheek kiss strange in Germany.',
            ],
          ),
          heard(
            'l4',
            'Ich habe meine Chefin gleich am ersten Tag geduzt. Da bin ich echt ins Fettnäpfchen getreten.',
            'She said du to her boss on day one and made a faux pas.',
            [
              'Her boss offered her du on the first day.',
              'She was very formal with her boss.',
              'She fell over in the office on the first day.',
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
        'Customs and house rules',
        'Talk about customs with a new colleague and settle a house-rule question.',
        ['communication', 'rules-manners', 'modal-particles'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'customs',
            title: 'Andere Länder, andere Sitten',
            emoji: '🌍',
            setting: 'Your new colleague Akiko from Japan is surprised by German habits.',
            turns: [
              say(
                'Akiko',
                'Hier gibt man sich ständig die Hand. Das ist für mich ungewohnt.',
                'People shake hands all the time here. I am not used to that.',
              ),
              you(
                'Das verstehe ich. Wie ist das denn bei euch in Japan?',
                [
                  'Das verstehe ich. Wie ist das ja bei euch in Japan?',
                  'In a friendly question use denn, not ja.',
                ],
                ['Das ist ein Tabu.', 'Ask about her customs instead.'],
              ),
              say(
                'Akiko',
                'Bei uns verbeugt man sich. Andere Länder, andere Sitten!',
                'We bow. Other countries, other customs!',
              ),
              you('Genau! Komm doch mal mit zu unserem Stammtisch, dann erzählst du mehr.', [
                'Genau! Komm denn mal mit zu unserem Stammtisch, dann erzählst du mehr.',
                'denn is for questions; an invitation takes doch.',
              ]),
            ],
          },
          {
            id: 'house',
            title: 'Die Hausordnung',
            emoji: '🏠',
            setting: 'Your neighbour Herr Krause rings the bell at 1.30 pm on Sunday.',
            turns: [
              say(
                'Herr Krause',
                'Entschuldigung, Sie bohren gerade. Es ist doch Mittagsruhe!',
                'Excuse me, you are drilling. It is the midday quiet time!',
              ),
              you('Oh, das tut mir leid. Das wusste ich nicht. Bis wann ist denn Mittagsruhe?', [
                'Oh, das tut mir leid. Das wusste ich nicht. Bis wann ist mal Mittagsruhe?',
                'mal softens requests; a friendly question takes denn.',
              ]),
              say(
                'Herr Krause',
                'Bis 15 Uhr. Das steht auch in der Hausordnung.',
                'Until 3 pm. It is also in the house rules.',
              ),
              you('Danke für den Hinweis. Ich mache dann später weiter.', [
                'Danke für den Hinweis. Ich mache später dann weiter mich.',
                'weitermachen is not reflexive: Ich mache später weiter.',
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
        'Manners blitz',
        'Modal particles and customs – true or false?',
        ['grammar', 'modal-particles'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '„Komm doch mal vorbei!“ ist eine freundliche Einladung.', true),
          tf(
            'b2',
            '„denn“ benutzt man vor allem in Aussagesätzen.',
            false,
            'denn as a particle is used in questions.',
          ),
          tf('b3', '„Du weißt ja …“ heißt: Das weißt du schon.', true),
          tf(
            'b4',
            'Auf „Kommst du nicht?“ antwortet man mit „Ja“, wenn man kommt.',
            false,
            'After a negative question the yes-answer is doch.',
          ),
          tf('b5', 'Modalpartikeln stehen meistens nach dem Verb.', true),
          tf(
            'b6',
            'Modalpartikeln ändern die Information im Satz.',
            false,
            'They change the tone, not the facts.',
          ),
          tf('b7', 'Wer ins Fettnäpfchen tritt, macht etwas Peinliches.', true),
          tf(
            'b8',
            'Während der Mittagsruhe darf man laut Musik hören.',
            false,
            'During the quiet time you should not make noise.',
          ),
          tf('b9', 'Ein Gästebuch findet man oft in Ferienwohnungen.', true),
          tf(
            'b10',
            'Ein Verbot sagt, was man tun muss.',
            false,
            'A ban says what you must not do.',
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
        'Customs, rules and modal particles in one round.',
        ['vocabulary', 'grammar', 'rules-manners'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Was ist ___ los? (friendly, interested question)', 'denn', [
              'ja',
              'mal',
              'doch',
            ]),
            {
              ja: 'ja is not used in W-questions.',
              mal: 'mal softens requests, not questions.',
              doch: 'doch in a W-question sounds like a reproach.',
            },
            'modal-particles',
          ),
          hint(
            q('c2', 'Hilf mir ___ bitte! (soft request)', 'mal', ['denn', 'ja', 'eigentlich']),
            {
              denn: 'denn belongs in questions.',
              ja: 'ja in an imperative sounds like a warning.',
              eigentlich: 'eigentlich does not soften a request.',
            },
            'modal-particles',
          ),
          hint(
            q('c3', '„Hast du keinen Hunger?“ – „___, großen Hunger!“', 'Doch', [
              'Ja',
              'Nein',
              'Mal',
            ]),
            {
              Ja: 'After a negative question, yes is doch.',
              Nein: 'nein would mean you are not hungry.',
              Mal: 'mal cannot be an answer.',
            },
            'modal-particles',
          ),
          q('c4', 'die Vorschrift', 'regulation', ['ban', 'taboo', 'manners']),
          q('c5', 'üblich', 'usual, customary', ['impolite', 'forbidden', 'punctual']),
          q('c6', 'das Fettnäpfchen', 'faux pas (lit. little pot of fat)', [
            'taboo',
            'ban',
            'guestbook',
          ]),
          q(
            'c7',
            'You said something embarrassing. You say …',
            'Ich bin ins Fettnäpfchen getreten.',
            ['Andere Länder, andere Sitten.', 'Das ist bei uns üblich.', 'Komm doch mal vorbei!'],
          ),
          q('c8', 'beachten', 'to observe, to follow (a rule)', [
            'to adapt',
            'to forbid',
            'to greet',
          ]),
          q('c9', 'die Pünktlichkeit', 'punctuality', [
            'handshake',
            'quiet time at midday',
            'regulation',
          ]),
          q('c10', 'gewöhnungsbedürftig', 'something you have to get used to', [
            'usual, customary',
            'polite',
            'forbidden',
          ]),
        ],
      },
    ),
  ],
};
