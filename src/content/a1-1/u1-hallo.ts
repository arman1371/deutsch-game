import {
  activity,
  byDe,
  flashcards,
  listen,
  memory,
  quizDeEn,
  quizEmoji,
  spell,
  unit,
  vocabList,
} from '../builders';
import type { UnitContent } from './types';

const U = 'a1-1-hallo';

const vocab = vocabList(U, 'Greetings', [
  ['Hallo', 'hello', '👋'],
  ['Guten Morgen', 'good morning', '🌅'],
  ['Guten Tag', 'good day / hello', '☀️'],
  ['Guten Abend', 'good evening', '🌆'],
  ['Gute Nacht', 'good night', '🌙'],
  ['Moin', 'hi (northern Germany)', '⚓'],
  ['Servus', 'hi / bye (southern Germany)', '🏔️'],
  ['Tschüss', 'bye', '🙋'],
  ['Auf Wiedersehen', 'goodbye (formal)', '🤝'],
  ['Bis bald', 'see you soon', '🔜'],
  ['Bis später', 'see you later', '🕓'],
  ['Bis morgen', 'see you tomorrow', '📆'],
  ['Wie geht’s?', 'How are you? (informal)', '💬'],
  ['Wie geht es Ihnen?', 'How are you? (formal)', '🎩'],
  ['Danke', 'thank you', '🙏'],
  ['Bitte', 'please / you’re welcome', '🤲'],
  ['Entschuldigung', 'excuse me / sorry', '🙇'],
  ['Ja', 'yes', '✅'],
  ['Nein', 'no', '❌'],
  ['Herr', 'Mr.', '👨‍💼'],
  ['Frau', 'Mrs. / Ms.', '👩‍💼'],
  ['gut', 'good / fine', '👍'],
  ['super', 'great', '🤩'],
  ['es geht', 'so-so', '😐'],
  ['schlecht', 'bad', '👎'],
]);

const hellos = byDe(vocab, 'Hallo', 'Guten Morgen', 'Guten Tag', 'Guten Abend', 'Moin', 'Servus');
const byes = byDe(
  vocab,
  'Tschüss',
  'Auf Wiedersehen',
  'Bis bald',
  'Bis später',
  'Bis morgen',
  'Gute Nacht',
);
const feelings = byDe(vocab, 'gut', 'super', 'es geht', 'schlecht');
const polite = byDe(vocab, 'Danke', 'Bitte', 'Entschuldigung', 'Ja', 'Nein');

export const hallo: UnitContent = {
  unit: unit({
    id: U,
    order: 1,
    title: 'Hallo & Tschüss',
    subtitle: 'Greet people and say goodbye',
    emoji: '👋',
    goals: [
      'Greet people and say goodbye',
      'Ask and answer “How are you?”',
      'Use du and Sie politely',
    ],
    grammar: ['Statements and questions', 'W-questions (Wie …?)'],
    vocabFields: ['Greetings', 'Polite phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash',
      'flashcards',
      {
        title: 'Greeting cards',
        description: 'Meet the most important greetings and goodbyes.',
        tags: ['vocabulary', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(vocab.slice(0, 12)),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match each German phrase with its English meaning.',
        tags: ['vocabulary', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn([...hellos, ...byes.slice(0, 4)], vocab),
    ),

    activity(
      U,
      'sort-hello-bye',
      'sortit',
      {
        title: 'Hello or goodbye?',
        description: 'Sort the phrases: do you say them when you arrive or when you leave?',
        tags: ['vocabulary', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        instruction: 'Is it a hello or a goodbye?',
        buckets: [
          { id: 'hello', label: 'Hello', emoji: '👋' },
          { id: 'bye', label: 'Goodbye', emoji: '🚪' },
        ],
        items: [
          ...hellos
            .filter((v) => v.de !== 'Servus')
            .map((v) => ({ id: v.id, text: v.de, bucket: 'hello', speak: v.de })),
          ...byes.map((v) => ({ id: v.id, text: v.de, bucket: 'bye', speak: v.de })),
        ],
      },
    ),

    activity(
      U,
      'listen-greetings',
      'listen',
      {
        title: 'Which greeting?',
        description: 'Listen to the greeting and pick its meaning.',
        tags: ['listening', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      listen([...hellos.slice(0, 4), ...byes.slice(0, 4)], vocab),
    ),

    activity(
      U,
      'memory-greetings',
      'memory',
      {
        title: 'Greeting memory',
        description: 'Find the pairs: German greeting and English meaning.',
        tags: ['vocabulary', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      memory([...hellos.slice(0, 3), ...byes.slice(0, 3)]),
    ),

    activity(
      U,
      'time-of-day',
      'quiz',
      {
        title: 'Greeting for the time of day',
        description: 'Which greeting fits the picture?',
        tags: ['vocabulary', 'greetings'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        questions: [
          {
            id: 'morning',
            prompt: 'You wake up. 7:00 a.m.',
            emoji: '🌅',
            options: ['Guten Morgen', 'Guten Abend', 'Gute Nacht', 'Auf Wiedersehen'],
            answer: 'Guten Morgen',
          },
          {
            id: 'noon',
            prompt: 'Lunch time. 1:00 p.m.',
            emoji: '☀️',
            options: ['Guten Tag', 'Gute Nacht', 'Guten Abend', 'Bis morgen'],
            answer: 'Guten Tag',
          },
          {
            id: 'evening',
            prompt: 'You arrive at a restaurant. 7:00 p.m.',
            emoji: '🌆',
            options: ['Guten Abend', 'Guten Morgen', 'Tschüss', 'Gute Nacht'],
            answer: 'Guten Abend',
          },
          {
            id: 'night',
            prompt: 'You go to bed.',
            emoji: '🌙',
            options: ['Gute Nacht', 'Guten Tag', 'Guten Morgen', 'Hallo'],
            answer: 'Gute Nacht',
            explanation: '“Gute Nacht” is only for saying goodbye at night – it is not a greeting.',
          },
          {
            id: 'tomorrow',
            prompt: 'You will see your friend tomorrow.',
            emoji: '📆',
            options: ['Bis morgen', 'Guten Morgen', 'Danke', 'Servus'],
            answer: 'Bis morgen',
          },
        ],
      },
    ),

    activity(
      U,
      'feelings',
      'quiz',
      {
        title: 'How are you?',
        description: 'Answer “Wie geht’s?” in German.',
        tags: ['vocabulary', 'communication', 'questions'],
        difficulty: 1,
        estMinutes: 2,
      },
      quizEmoji(feelings, feelings, 4),
    ),

    activity(
      U,
      'gap-greetings',
      'gapfill',
      {
        title: 'Complete the greeting',
        description: 'Fill in the missing word.',
        tags: ['grammar', 'greetings', 'questions'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Guten ___!',
            answer: 'Morgen',
            options: ['Morgen', 'Wiedersehen', 'Danke', 'Herr'],
            translation: 'Good morning!',
          },
          {
            id: 'g2',
            text: 'Wie ___ es Ihnen?',
            answer: 'geht',
            options: ['geht', 'gehe', 'gehst', 'gut'],
            translation: 'How are you? (formal)',
            explanation: '“es” is third person, so the verb ends in -t: es geht.',
          },
          {
            id: 'g3',
            text: 'Auf ___!',
            answer: 'Wiedersehen',
            options: ['Wiedersehen', 'Morgen', 'Abend', 'Tschüss'],
            translation: 'Goodbye!',
          },
          {
            id: 'g4',
            text: 'Wie geht’s ___?',
            answer: 'dir',
            options: ['dir', 'Ihnen', 'Herr', 'gut'],
            translation: 'How are you? (informal)',
            explanation: 'To friends you say “dir”, to strangers “Ihnen”.',
          },
          {
            id: 'g5',
            text: '___ Tag, Frau Weber!',
            answer: 'Guten',
            options: ['Guten', 'Gute', 'Guter', 'Gut'],
            translation: 'Good day, Mrs. Weber!',
          },
          {
            id: 'g6',
            text: 'Gute ___!',
            answer: 'Nacht',
            options: ['Nacht', 'Tag', 'Morgen', 'Abend'],
            translation: 'Good night!',
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a greeting',
        description: 'Put the words in the right order – first questions, then statements.',
        tags: ['grammar', 'questions', 'word-order'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          { id: 's1', translation: 'How are you? (informal)', words: ['Wie', 'geht’s', 'dir?'] },
          {
            id: 's2',
            translation: 'How are you? (formal)',
            words: ['Wie', 'geht', 'es', 'Ihnen?'],
            explanation: 'W-questions: the question word is first, the verb is second.',
          },
          {
            id: 's3',
            translation: 'I am fine.',
            words: ['Mir', 'geht', 'es', 'gut.'],
            alsoAccept: ['Es geht mir gut.'],
          },
          {
            id: 's4',
            translation: 'Good morning, Mrs. Weber!',
            words: ['Guten', 'Morgen,', 'Frau', 'Weber!'],
          },
          {
            id: 's5',
            translation: 'Goodbye, Mr. Klein!',
            words: ['Auf', 'Wiedersehen,', 'Herr', 'Klein!'],
          },
          {
            id: 's6',
            translation: 'Thank you, I am fine.',
            words: ['Danke,', 'gut!'],
            extra: ['bitte'],
          },
        ],
      },
    ),

    activity(
      U,
      'spell-polite',
      'spell',
      {
        title: 'Spell the polite words',
        description: 'Unscramble and type the key words.',
        tags: ['spelling', 'greetings'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...spell(polite.slice(0, 3), 'unscramble').items,
          {
            id: 'sp-tschuess',
            mode: 'type',
            answer: 'Tschüss',
            hint: 'bye',
            emoji: '🙋',
            speak: 'Tschüss',
          },
          {
            id: 'sp-morgen',
            mode: 'type',
            answer: 'Morgen',
            hint: 'morning',
            emoji: '🌅',
            speak: 'Morgen',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Say hello!',
        description: 'Three short chats: with a friend, with a teacher and when leaving.',
        tags: ['communication', 'greetings'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        scenes: [
          {
            id: 'friend',
            title: 'Meeting a friend',
            emoji: '🧑‍🤝‍🧑',
            setting: 'You meet Anna in the morning.',
            turns: [
              { kind: 'npc', who: 'Anna', text: 'Guten Morgen!', translation: 'Good morning!' },
              {
                kind: 'you',
                options: [
                  { text: 'Guten Morgen!', correct: true },
                  {
                    text: 'Gute Nacht!',
                    correct: false,
                    feedback: 'It is morning – “Gute Nacht” is for bedtime.',
                  },
                  {
                    text: 'Auf Wiedersehen!',
                    correct: false,
                    feedback: 'That is a goodbye, but you are just meeting.',
                  },
                ],
              },
              { kind: 'npc', who: 'Anna', text: 'Wie geht’s?', translation: 'How are you?' },
              {
                kind: 'you',
                options: [
                  { text: 'Gut, danke. Und dir?', correct: true },
                  {
                    text: 'Bitte, Anna.',
                    correct: false,
                    feedback: '“Bitte” does not answer “Wie geht’s?”.',
                  },
                  {
                    text: 'Gut, danke. Und Ihnen?',
                    correct: false,
                    feedback: 'Anna is your friend – use “dir”, not “Ihnen”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Anna',
                text: 'Auch gut, danke!',
                translation: 'Fine too, thanks!',
              },
            ],
          },
          {
            id: 'teacher',
            title: 'Meeting your teacher',
            emoji: '👩‍🏫',
            setting: 'Frau Weber is your teacher. Be polite!',
            turns: [
              {
                kind: 'npc',
                who: 'Frau Weber',
                text: 'Guten Tag! Wie geht es Ihnen?',
                translation: 'Good day! How are you?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Gut, danke. Und Ihnen?', correct: true },
                  {
                    text: 'Gut, danke. Und dir?',
                    correct: false,
                    feedback: 'With a teacher use the formal “Ihnen”.',
                  },
                  { text: 'Tschüss!', correct: false, feedback: 'That is a goodbye.' },
                ],
              },
              {
                kind: 'npc',
                who: 'Frau Weber',
                text: 'Sehr gut, danke.',
                translation: 'Very well, thank you.',
              },
            ],
          },
          {
            id: 'leaving',
            title: 'Saying goodbye',
            emoji: '🚪',
            setting: 'Class is over.',
            turns: [
              {
                kind: 'npc',
                who: 'Tom',
                text: 'Tschüss! Bis morgen!',
                translation: 'Bye! See you tomorrow!',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Tschüss! Bis morgen!', correct: true },
                  {
                    text: 'Guten Morgen!',
                    correct: false,
                    feedback: 'It is the end of the lesson, not the morning.',
                  },
                  { text: 'Wie geht’s?', correct: false, feedback: 'He is leaving – say goodbye.' },
                ],
              },
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      {
        title: 'Greeting blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'greetings', 'questions'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Guten Morgen” is a greeting for the morning.', isTrue: true },
          {
            id: 'b2',
            text: '“Gute Nacht” is a good way to say hello at 8 a.m.',
            isTrue: false,
            explanation: '“Gute Nacht” is said before bed.',
          },
          { id: 'b3', text: '“Tschüss” means goodbye.', isTrue: true },
          {
            id: 'b4',
            text: 'You say “Wie geht’s dir?” to your boss.',
            isTrue: false,
            explanation: 'To your boss: “Wie geht es Ihnen?”',
          },
          { id: 'b5', text: '“Danke” means thank you.', isTrue: true },
          {
            id: 'b6',
            text: '“Auf Wiedersehen” is a hello.',
            isTrue: false,
            explanation: 'It means goodbye.',
          },
          { id: 'b7', text: '“Frau” is used for women, “Herr” for men.', isTrue: true },
          { id: 'b8', text: '“Wie geht es Ihnen?” is formal.', isTrue: true },
          { id: 'b9', text: '“Bis morgen” means “see you tomorrow”.', isTrue: true },
          {
            id: 'b10',
            text: '“Nein” means yes.',
            isTrue: false,
            explanation: '“Ja” = yes, “Nein” = no.',
          },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'greetings'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'It is 9 p.m. You arrive at a party.',
            options: ['Guten Abend', 'Guten Morgen', 'Bis bald', 'Gute Nacht'],
            answer: 'Guten Abend',
          },
          {
            id: 'c2',
            prompt: 'Which question is formal?',
            options: ['Wie geht es Ihnen?', 'Wie geht’s dir?', 'Wie geht’s?', 'Wie gehst du?'],
            answer: 'Wie geht es Ihnen?',
          },
          {
            id: 'c3',
            prompt: 'Which answer fits “Wie geht’s?”',
            options: ['Super, danke!', 'Guten Morgen!', 'Auf Wiedersehen!', 'Bis morgen!'],
            answer: 'Super, danke!',
          },
          {
            id: 'c4',
            prompt: 'How do you say “see you later”?',
            options: ['Bis später', 'Bis morgen', 'Guten Tag', 'Bitte'],
            answer: 'Bis später',
          },
          {
            id: 'c5',
            prompt: 'Servus is typically used in …',
            options: ['southern Germany', 'northern Germany', 'formal letters', 'the evening only'],
            answer: 'southern Germany',
          },
          {
            id: 'c6',
            prompt: 'Which word order is correct?',
            options: [
              'Wie geht es dir?',
              'Wie es geht dir?',
              'Geht wie es dir?',
              'Es wie geht dir?',
            ],
            answer: 'Wie geht es dir?',
            explanation: 'The verb is always in second position in a W-question.',
          },
          {
            id: 'c7',
            prompt: '“Entschuldigung” means …',
            options: ['excuse me', 'thank you', 'good night', 'see you soon'],
            answer: 'excuse me',
          },
          {
            id: 'c8',
            prompt: 'How do you say “thank you”?',
            options: ['Danke', 'Bitte', 'Hallo', 'Nein'],
            answer: 'Danke',
          },
        ],
      },
    ),
  ],
};
