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

const U = 'c2-2-nuancen';
const LESSON = 'c22-nuance-particles' as const;

const stil = vocabList(U, 'Figurative language & tone', [
  ['Idiom', 'idiom', '💬', 'das', 'Idiome'],
  ['Aphorismus', 'aphorism', '📜', 'der', 'Aphorismen'],
  ['Ironie', 'irony', '🙃', 'die'],
  ['Untertreibung', 'understatement', '🤏', 'die', 'Untertreibungen'],
  ['Übertreibung', 'exaggeration', '🎈', 'die', 'Übertreibungen'],
  ['Anspielung', 'allusion, hint', '🎯', 'die', 'Anspielungen'],
  ['Zwischenton', 'nuance, undertone', '🎶', 'der', 'Zwischentöne'],
  ['Jargon', 'jargon', '🗨️', 'der', 'Jargons'],
  ['Floskel', 'stock phrase', '🧾', 'die', 'Floskeln'],
  ['Wortspiel', 'pun', '🎲', 'das', 'Wortspiele'],
  ['Unterton', 'tone, undertone', '🔉', 'der', 'Untertöne'],
  ['Metapher', 'metaphor', '🖼️', 'die', 'Metaphern'],
  ['Pointe', 'punchline', '🎤', 'die', 'Pointen'],
  ['Gemeinplatz', 'commonplace, platitude', '📌', 'der', 'Gemeinplätze'],
  ['Doppeldeutigkeit', 'ambiguity', '🔀', 'die'],
]);

const redewendungen = vocabList(U, 'Idioms', [
  ['auf dem Holzweg sein', 'to be on the wrong track', '🪵'],
  ['den Nagel auf den Kopf treffen', 'to hit the nail on the head', '🔨'],
  ['zwischen den Zeilen lesen', 'to read between the lines', '📖'],
  ['ins Fettnäpfchen treten', 'to put one’s foot in it', '🥣'],
  ['jemandem einen Bären aufbinden', 'to pull someone’s leg', '🐻'],
  ['um den heißen Brei herumreden', 'to beat around the bush', '🍲'],
  ['Tacheles reden', 'to speak plainly', '🗣️'],
  ['die Kirche im Dorf lassen', 'to keep things in proportion', '⛪'],
  ['etwas auf die lange Bank schieben', 'to put something off', '🪑'],
  ['jemandem reinen Wein einschenken', 'to tell someone the plain truth', '🍷'],
  ['ein Auge zudrücken', 'to turn a blind eye', '😉'],
]);

const vocab = [...stil, ...redewendungen];
const grammarTags = ['grammar', LESSON, 'c22-nuance'] as const;

export const nuancen: UnitContent = {
  unit: unitC22({
    id: U,
    order: 8,
    title: 'Redewendungen & Zwischentöne',
    subtitle: 'Idioms, irony and the modal particles that colour what we say',
    emoji: '🎭',
    goals: [
      'Understand irony, understatement and common idioms',
      'Use modal particles and adverbs to shade a statement: doch, ja, eben, halt, wohl, schon, immerhin',
      'Hear the attitude of the speaker behind a sentence',
    ],
    grammar: [
      'doch / ja: reminding, surprise – Du hast es doch versprochen! Das ist ja unglaublich!',
      'eben / halt: it cannot be changed – Das ist halt so.',
      'wohl: assumption – Er ist wohl krank.',
      'schon / immerhin / ohnehin / bloß / etwa / vielleicht / eigentlich as shading words',
    ],
    vocabFields: ['Figurative language & tone', 'Idioms'],
  }),
  vocab,
  activities: [
    ...vocabPath({
      unitId: U,
      topic: 'c22-nuance',
      lists: [
        {
          key: 'tone',
          title: 'Figurative language & tone',
          description: 'Ironie, Anspielung, Zwischenton – words for what is between the lines.',
          vocab: stil,
        },
        {
          key: 'idioms',
          title: 'Idioms',
          description: 'Tacheles reden, ins Fettnäpfchen treten – twelve German idioms.',
          vocab: redewendungen,
        },
      ],
      pictures: byDe(
        stil,
        'Aphorismus',
        'Ironie',
        'Untertreibung',
        'Übertreibung',
        'Anspielung',
        'Wortspiel',
        'Pointe',
        'Gemeinplatz',
      ),
      picturesTitle: 'Between the lines',
      picturesDescription: 'Name the stylistic term.',
      listening: redewendungen,
      listenTitle: 'Hear the idioms',
      pairs: byDe(
        redewendungen,
        'auf dem Holzweg sein',
        'den Nagel auf den Kopf treffen',
        'zwischen den Zeilen lesen',
        'ins Fettnäpfchen treten',
        'jemandem einen Bären aufbinden',
        'um den heißen Brei herumreden',
        'Tacheles reden',
        'ein Auge zudrücken',
      ),
      memoryTitle: 'Idiom memory',
      memoryDescription: 'Match each idiom with its meaning.',
      unscramble: byDe(stil, 'Idiom', 'Anspielung', 'Floskel'),
      typeIn: byDe(stil, 'Doppeldeutigkeit', 'Jargon'),
      dictations: [
        [
          'd1',
          'Zwischen den Zeilen steckt oft mehr als im Text.',
          'Between the lines there is often more than in the text.',
        ],
        ['d2', 'Das ist halt so – daran kann man nichts ändern.', 'That is just how it is.'],
      ],
    }),
    activity(
      U,
      'gap-particles',
      'gapfill',
      meta(
        'doch, eben, wohl, immerhin …',
        'Choose the particle that carries the right attitude.',
        [...grammarTags],
        2,
        7,
      ),
      {
        items: [
          withWhy(
            gap(
              'p1',
              'Du hast es mir ___ versprochen!',
              'doch',
              ['doch', 'eben', 'wohl', 'immerhin'],
              'But you promised me!',
              'doch reminds the other person of something they know – contrary to what they now do.',
            ),
            {
              eben: 'eben/halt say that something cannot be changed.',
              wohl: 'wohl marks an assumption (“probably”).',
              immerhin: 'immerhin means “at least”.',
            },
          ),
          withWhy(
            gap(
              'p2',
              'Es regnet. Dann bleiben wir ___ zu Hause.',
              'halt',
              ['halt', 'ja', 'etwa', 'vielleicht'],
              'It is raining. Then we will just stay at home.',
              'halt / eben = resigned acceptance: nothing to be done.',
            ),
            {
              ja: 'ja says “as you know” or expresses surprise.',
              etwa: 'etwa suggests suspicion in questions.',
              vielleicht:
                'vielleicht in a statement strengthens an exclamation or means “perhaps”.',
            },
          ),
          withWhy(
            gap(
              'p3',
              'Das war ___ ein Fest!',
              'vielleicht',
              ['vielleicht', 'wohl', 'eigentlich', 'immerhin'],
              'What a party that was!',
              'vielleicht in an exclamation = “what a …!”.',
            ),
            {
              wohl: 'wohl would turn it into an assumption.',
              eigentlich: 'eigentlich means “actually”.',
              immerhin: 'immerhin means “at least”.',
            },
          ),
          withWhy(
            gap(
              'p4',
              'Wie spät ist es ___?',
              'eigentlich',
              ['eigentlich', 'eben', 'ohnehin', 'bloß'],
              'What time is it, actually?',
              'eigentlich softens a question and often changes the topic.',
            ),
            {
              eben: 'eben does not occur in this kind of question.',
              ohnehin: 'ohnehin means “anyway”.',
              bloß: 'bloß strengthens wishes or warnings.',
            },
          ),
          withWhy(
            gap(
              'p5',
              'Er ist nicht gekommen, aber er hat ___ angerufen.',
              'immerhin',
              ['immerhin', 'eben', 'wohl', 'ja'],
              'He did not come, but at least he called.',
              'immerhin = at least (a small positive point).',
            ),
            {
              eben: 'eben expresses that it cannot be changed.',
              wohl: 'wohl marks an assumption.',
              ja: 'ja means “as you know”.',
            },
          ),
          withWhy(
            gap(
              'p6',
              'Sie wird ___ krank sein.',
              'wohl',
              ['wohl', 'halt', 'ja', 'mal'],
              'She is probably ill.',
              'wohl = assumption, often with werden.',
            ),
            {
              halt: 'halt expresses that it cannot be changed.',
              ja: 'ja means “as you know”.',
              mal: 'mal softens requests.',
            },
          ),
          withWhy(
            gap(
              'p7',
              'Ich muss ___ in die Stadt, also kaufe ich gleich ein.',
              'ohnehin',
              ['ohnehin', 'bloß', 'etwa', 'denn'],
              'I have to go into town anyway, so I will shop right away.',
              'ohnehin = anyway, regardless.',
            ),
            {
              bloß: 'bloß strengthens a warning or wish.',
              etwa: 'etwa suggests suspicion in questions.',
              denn: 'denn softens questions.',
            },
          ),
          withWhy(
            gap(
              'p8',
              'Bist du ___ krank? Du siehst so blass aus.',
              'etwa',
              ['etwa', 'eben', 'ohnehin', 'immerhin'],
              'Are you ill, by any chance? You look so pale.',
              'etwa in a yes/no question = “by any chance”, the speaker suspects it.',
            ),
            {
              eben: 'eben does not occur in questions like this.',
              ohnehin: 'ohnehin means “anyway”.',
              immerhin: 'immerhin means “at least”.',
            },
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sort-particles',
      'sortit',
      meta(
        'What does the particle do?',
        'Reminder, resignation, assumption or concession?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'What attitude does the shading word express?',
        buckets: [
          { id: 'remind', label: 'Reminder or surprise (doch, ja)', emoji: '☝️' },
          { id: 'accept', label: 'Resignation (eben, halt)', emoji: '🤷' },
          { id: 'guess', label: 'Assumption (wohl)', emoji: '🔮' },
          { id: 'concede', label: 'Concession (schon, immerhin)', emoji: '🤝' },
        ],
        items: sortItems('s', [
          ['Du weißt doch, dass ich Spinnen hasse.', 'remind'],
          ['Das ist ja unglaublich!', 'remind'],
          ['Ich habe es dir doch gesagt.', 'remind'],
          ['Es regnet hier halt oft.', 'accept'],
          ['So ist das eben.', 'accept'],
          ['Dann musst du halt warten.', 'accept'],
          ['Er ist wohl schon zu Hause.', 'guess'],
          ['Das war wohl ein Missverständnis.', 'guess'],
          ['Sie wird wohl müde sein.', 'guess'],
          ['Es ist schon teuer, aber gut.', 'concede'],
          ['Immerhin hat er sich entschuldigt.', 'concede'],
          ['Die Prüfung war schon schwer, aber fair.', 'concede'],
        ]),
      },
    ),
    activity(
      U,
      'quiz-attitude',
      'quiz',
      meta(
        'What does the speaker mean?',
        'Read the attitude behind the particle.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            'n1',
            'Das ist ja interessant!',
            'The speaker is surprised – or ironic.',
            [
              'The speaker is bored.',
              'The speaker asks a question.',
              'The speaker gives an order.',
            ],
            'ja in a statement: “as you see” or surprise.',
          ),
          q(
            'n2',
            'Das ist halt so.',
            'It cannot be changed; accept it.',
            ['Please stop now.', 'That is probably so.', 'I will explain it later.'],
            'halt / eben = resignation.',
          ),
          q(
            'n3',
            'Du hast doch gesagt, dass du kommst!',
            'A reminder: you said so – and now it is different.',
            ['A neutral question about plans.', 'A word of thanks.', 'A guess about the future.'],
            'doch reminds the listener of something they know.',
          ),
          q(
            'n4',
            'Er hat immerhin angerufen.',
            'At least he called.',
            ['He only called once.', 'He called immediately.', 'He did not call.'],
            'immerhin = at least.',
          ),
          q(
            'n5',
            'Komm bloß nicht zu spät!',
            'A warning: do not be late!',
            ['A friendly invitation.', 'A question about the time.', 'A wish to be late.'],
            'bloß + nicht strengthens a warning.',
          ),
          q(
            'n6',
            'Das ist ja wohl nicht dein Ernst!',
            'The speaker is indignant: you cannot be serious.',
            [
              'The speaker is delighted.',
              'The speaker asks for details.',
              'The speaker is unsure.',
            ],
            'ja wohl in an exclamation = indignation.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'quiz-idioms',
      'quiz',
      meta(
        'What is meant?',
        'Idioms are not to be taken literally.',
        ['vocabulary', 'c22-nuance'],
        2,
        6,
      ),
      {
        questions: [
          q('i1', 'auf dem Holzweg sein', 'to be on the wrong track', [
            'to be lost in the forest',
            'to be in a hurry',
            'to be very rich',
          ]),
          q('i2', 'den Nagel auf den Kopf treffen', 'to say exactly the right thing', [
            'to do manual work badly',
            'to hurt oneself',
            'to get angry',
          ]),
          q('i3', 'ins Fettnäpfchen treten', 'to commit a social blunder', [
            'to cook a meal',
            'to slip on the floor',
            'to put on weight',
          ]),
          q('i4', 'um den heißen Brei herumreden', 'to beat around the bush', [
            'to talk about food',
            'to speak very quickly',
            'to argue loudly',
          ]),
          q('i5', 'Tacheles reden', 'to speak plainly', [
            'to speak Hebrew',
            'to whisper',
            'to read aloud',
          ]),
          q('i6', 'die Kirche im Dorf lassen', 'to keep things in proportion', [
            'to build a church',
            'to leave the village',
            'to stay out of church',
          ]),
          q('i7', 'jemandem einen Bären aufbinden', 'to pull someone’s leg', [
            'to tie up a bear',
            'to scare someone',
            'to give someone a present',
          ]),
          q('i8', 'ein Auge zudrücken', 'to turn a blind eye', [
            'to wink at someone',
            'to go to sleep',
            'to look closely',
          ]),
        ],
      },
    ),
    activity(
      U,
      'gap-idioms',
      'gapfill',
      meta('Finish the idiom', 'Which word is missing?', ['vocabulary', 'c22-nuance'], 3, 5),
      {
        items: [
          gap(
            'x1',
            'Du hast den Nagel auf den ___ getroffen!',
            'Kopf',
            ['Kopf', 'Hammer', 'Daumen', 'Finger'],
            'You hit the nail on the head!',
          ),
          gap(
            'x2',
            'Wir sollten die Kirche im ___ lassen.',
            'Dorf',
            ['Dorf', 'Haus', 'Zentrum', 'Wald'],
            'We should keep things in proportion.',
          ),
          gap(
            'x3',
            'Wenn er das glaubt, ist er auf dem ___.',
            'Holzweg',
            ['Holzweg', 'Irrweg', 'Feldweg', 'Umweg'],
            'If he believes that, he is on the wrong track.',
          ),
          gap(
            'x4',
            'Der Lehrer hat bei der Hausaufgabe ein ___ zugedrückt.',
            'Auge',
            ['Auge', 'Ohr', 'Bein', 'Tor'],
            'The teacher turned a blind eye to the homework.',
          ),
          gap(
            'x5',
            'Willst du mir einen ___ aufbinden?',
            'Bären',
            ['Bären', 'Hasen', 'Wolf', 'Esel'],
            'Are you trying to pull my leg?',
          ),
          gap(
            'x6',
            'Er hat das Projekt immer wieder auf die lange ___ geschoben.',
            'Bank',
            ['Bank', 'Straße', 'Stufe', 'Leiter'],
            'He kept putting the project off.',
          ),
          gap(
            'x7',
            'Mit dieser Bemerkung ist er ins ___ getreten.',
            'Fettnäpfchen',
            ['Fettnäpfchen', 'Wasser', 'Loch', 'Netz'],
            'With that remark he put his foot in it.',
          ),
          typed(
            'x8',
            'Reden wir nicht um den heißen ___ herum!',
            'Brei',
            'Let us not beat around the bush!',
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Say it with attitude',
        'Build sentences with particles and idioms.',
        [...grammarTags],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'But you promised me!', ['Du', 'hast', 'es', 'mir', 'doch', 'versprochen!']),
          sent('s2', 'He is probably already at home.', [
            'Er',
            'ist',
            'wohl',
            'schon',
            'zu',
            'Hause.',
          ]),
          sent('s3', 'At least he apologised.', ['Immerhin', 'hat', 'er', 'sich', 'entschuldigt.']),
          sent('s4', 'That is just how it is.', ['Das', 'ist', 'eben', 'so.']),
          sent('s5', 'Whatever you do, do not be late!', ['Komm', 'bloß', 'nicht', 'zu', 'spät!']),
          sent('s6', 'You hit the nail on the head.', [
            'Du',
            'hast',
            'den',
            'Nagel',
            'auf',
            'den',
            'Kopf',
            'getroffen.',
          ]),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'listen-tone',
      'listen',
      meta(
        'Hear the tone',
        'Listen for irony and shading words.',
        ['listening', 'c22-nuance'],
        3,
        5,
      ),
      {
        items: [
          heard('l1', 'Das ist ja ein schöner Mist!', 'Well, that is a fine mess!', [
            'That is a beautiful garden!',
            'That is a very good idea!',
            'That is a perfect result!',
          ]),
          heard('l2', 'Er hat sich entschuldigt – immerhin.', 'He apologised – at least that.', [
            'He apologised too late.',
            'He did not apologise at all.',
            'He apologised immediately and sincerely.',
          ]),
          heard(
            'l3',
            'Reden wir nicht um den heißen Brei herum!',
            'Let us not beat around the bush!',
            [
              'Let us talk about the soup!',
              'Let us talk around the table!',
              'Let us not talk at all!',
            ],
          ),
          heard('l4', 'Da hast du wohl recht.', 'You are probably right about that.', [
            'You are definitely wrong.',
            'You asked the right question.',
            'You have just been right.',
          ]),
          heard(
            'l5',
            'Man muss die Kirche im Dorf lassen.',
            'You have to keep things in proportion.',
            [
              'You have to go to church every Sunday.',
              'You must leave the village.',
              'You must build a new church.',
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
        'Friends and colleagues',
        'Use idioms and particles naturally.',
        ['communication', LESSON, 'c22-nuance'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'freunde',
            title: 'Unter Freunden',
            emoji: '👯',
            setting: 'You and Lena talk about a birthday present.',
            turns: [
              say(
                'Lena',
                'Hast du Jonas schon gesagt, dass er das Geschenk nicht bezahlen muss?',
                'Have you told Jonas that he does not have to pay for the present?',
              ),
              you(
                'Nein, ich will nicht ins Fettnäpfchen treten.',
                [
                  'Nein, ich will nicht im Fettnäpfchen treten.',
                  'The idiom is ins Fettnäpfchen treten (accusative: into).',
                ],
                [
                  'Nein, ich will nicht Fettnäpfchen ins treten.',
                  'The idiom keeps its fixed order: ins Fettnäpfchen treten.',
                ],
              ),
              say(
                'Lena',
                'Meinst du, er hat uns einen Bären aufgebunden?',
                'Do you think he was pulling our legs?',
              ),
              you(
                'Möglich. Aber wir sollten die Kirche im Dorf lassen.',
                [
                  'Möglich. Aber wir sollten die Kirche in Dorf lassen.',
                  'in dem Dorf contracts to im Dorf.',
                ],
                [
                  'Möglich. Aber wir sollten das Kirche im Dorf lassen.',
                  'Kirche is feminine: die Kirche.',
                ],
              ),
            ],
          },
          {
            id: 'buero',
            title: 'Nach der Präsentation',
            emoji: '💼',
            setting: 'A colleague comments on the presentation.',
            turns: [
              say(
                'Kollegin',
                'Die Zahlen waren ja nicht gerade überzeugend.',
                'The figures were not exactly convincing.',
              ),
              you(
                'Stimmt. Aber immerhin war die Präsentation gut strukturiert.',
                [
                  'Stimmt. Aber eben war die Präsentation gut strukturiert.',
                  'eben expresses resignation; “at least” is immerhin.',
                ],
                [
                  'Stimmt. Aber immerhin die Präsentation war gut strukturiert.',
                  'After immerhin the verb comes second: immerhin war die Präsentation …',
                ],
              ),
              say(
                'Kollegin',
                'Der Chef hat wohl schon wieder alles zerredet.',
                'The boss has probably talked everything to death again.',
              ),
              you(
                'Du hast den Nagel auf den Kopf getroffen – er redet gern um den heißen Brei herum.',
                [
                  'Du hast den Nagel auf den Kopf getroffen – er redet gern um heißen Brei herum.',
                  'The idiom has an article: um den heißen Brei.',
                ],
                [
                  'Du hast den Nagel auf den Kopf getroffen – er redet gern um den heißen Brei.',
                  'The idiom needs herumreden: … um den heißen Brei herum.',
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
      meta('Nuance blitz', 'True or false: particles and idioms.', [...grammarTags], 3, 2),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Modalpartikeln stehen nicht am Satzanfang.', true),
          tf(
            'b2',
            'Modalpartikeln kann man mit „nicht“ verneinen.',
            false,
            'They cannot be negated.',
          ),
          tf('b3', '„Das ist halt so“ bedeutet: Das kann man nicht ändern.', true),
          tf('b4', '„Er ist wohl krank“ drückt eine Vermutung aus.', true),
          tf('b5', '„immerhin“ bedeutet „zumindest“.', true),
          tf('b6', '„Komm bloß nicht zu spät!“ ist eine Warnung.', true),
          tf('b7', '„Du hast doch gesagt …“ erinnert an etwas, das der andere gesagt hat.', true),
          tf(
            'b8',
            '„ins Fettnäpfchen treten“ bedeutet „zu viel essen“.',
            false,
            'It means to commit a social blunder.',
          ),
          tf('b9', '„Tacheles reden“ bedeutet „offen und deutlich reden“.', true),
          tf(
            'b10',
            '„jemandem einen Bären aufbinden“ bedeutet „jemandem helfen“.',
            false,
            'It means to tell someone a tall tale.',
          ),
          tf('b11', 'Ironie sagt das Gegenteil von dem, was gemeint ist.', true),
          tf(
            'b12',
            'Eine Untertreibung macht eine Sache größer, als sie ist.',
            false,
            'That is an exaggeration; an understatement makes it smaller.',
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
        'Idioms and shading words in one round.',
        ['vocabulary', 'grammar', 'c22-nuance'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            q('c1', 'Du hast es mir ___ versprochen! (reminder)', 'doch', ['eben', 'wohl', 'bloß']),
            LESSON,
          ),
          withLesson(
            q('c2', 'Dann musst du ___ warten. (nothing to be done)', 'halt', [
              'ja',
              'etwa',
              'wohl',
            ]),
            LESSON,
          ),
          withLesson(
            q('c3', 'Er ist ___ schon zu Hause. (assumption)', 'wohl', ['halt', 'eben', 'bloß']),
            LESSON,
          ),
          withLesson(
            q('c4', 'Er hat ___ angerufen. (at least)', 'immerhin', [
              'ohnehin',
              'eigentlich',
              'doch',
            ]),
            LESSON,
          ),
          q(
            'c5',
            'Wenn jemand das Gegenteil von dem sagt, was er meint, spricht er mit …',
            'Ironie',
            ['Übertreibung', 'Doppeldeutigkeit', 'Pointe'],
          ),
          q('c6', 'ins Fettnäpfchen treten', 'to commit a social blunder', [
            'to cook in a pan',
            'to be very clumsy with food',
            'to avoid trouble',
          ]),
          q('c7', 'Ein kurzer Satz, den man oft sagt, ohne viel zu denken, ist eine …', 'Floskel', [
            'Pointe',
            'Metapher',
            'Anspielung',
          ]),
          q('c8', 'das Wortspiel', 'pun', ['idiom', 'proverb', 'metaphor']),
          q('c9', 'Tacheles reden', 'to speak plainly', [
            'to beat around the bush',
            'to turn a blind eye',
            'to read between the lines',
          ]),
          q('c10', 'das Idiom', 'idiom', ['punchline', 'irony', 'platitude']),
        ],
      },
    ),
  ],
};
