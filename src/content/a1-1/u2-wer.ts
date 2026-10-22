import {
  activity,
  byDe,
  flashcards,
  memory,
  quizDeEn,
  quizEnDe,
  spell,
  unit,
  vocabList,
} from '../builders';
import { conjugate, PRONOUNS } from '@/lib/german/conjugation';
import type { UnitContent } from './types';

const U = 'a1-1-wer';

const vocab = vocabList(U, 'Introductions', [
  ['Wie heißt du?', 'What is your name? (informal)', '🏷️'],
  ['Wie heißen Sie?', 'What is your name? (formal)', '🎩'],
  ['Ich heiße …', 'My name is …', '🙋'],
  ['Mein Name ist …', 'My name is …', '📛'],
  ['Das ist …', 'This is …', '👉'],
  ['Freut mich!', 'Nice to meet you!', '🤝'],
  ['Und du?', 'And you? (informal)', '🔁'],
  ['Und Sie?', 'And you? (formal)', '🎩'],
  ['Wer ist das?', 'Who is that?', '🕵️'],
  ['der Name', 'name', '🏷️', 'der', 'Namen'],
  ['der Vorname', 'first name', '🔤', 'der', 'Vornamen'],
  ['der Nachname', 'last name', '🔡', 'der', 'Nachnamen'],
  ['der Freund', 'friend (male)', '🧑', 'der', 'Freunde'],
  ['die Freundin', 'friend (female)', '👩', 'die', 'Freundinnen'],
  ['der Lehrer', 'teacher (male)', '👨‍🏫', 'der', 'Lehrer'],
  ['die Lehrerin', 'teacher (female)', '👩‍🏫', 'die', 'Lehrerinnen'],
  ['der Student', 'student (male)', '🧑‍🎓', 'der', 'Studenten'],
  ['die Studentin', 'student (female)', '👩‍🎓', 'die', 'Studentinnen'],
  ['ich', 'I', '☝️'],
  ['du', 'you (informal, one person)', '🫵'],
  ['er', 'he', '👨'],
  ['sie', 'she', '👩'],
  ['es', 'it', '📦'],
  ['wir', 'we', '👥'],
  ['ihr', 'you (informal, several people)', '🫂'],
  ['Sie', 'you (formal)', '🎩'],
]);

const phrases = vocab.slice(0, 9);
const people = byDe(
  vocab,
  'der Freund',
  'die Freundin',
  'der Lehrer',
  'die Lehrerin',
  'der Student',
  'die Studentin',
);

const row = (verb: string, blanks: (typeof PRONOUNS)[number][]) => ({
  id: verb,
  verb,
  meaning: verb === 'heißen' ? 'to be called' : verb === 'sein' ? 'to be' : 'to come',
  forms: conjugate(verb),
  blanks,
});

export const wer: UnitContent = {
  unit: unit({
    id: U,
    order: 2,
    title: 'Wer bist du?',
    subtitle: 'Introduce yourself and others',
    emoji: '🙋',
    goals: [
      'Say your name and ask for names',
      'Introduce other people',
      'Use the personal pronouns ich, du, er, sie, wir, ihr, Sie',
    ],
    grammar: ['Personal pronouns', 'heißen and sein', 'du or Sie'],
    vocabFields: ['Introductions', 'People', 'Pronouns'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-phrases',
      'flashcards',
      {
        title: 'Introduction phrases',
        description: 'The phrases you need to meet someone new.',
        tags: ['vocabulary', 'introductions'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(phrases),
    ),

    activity(
      U,
      'memory-pronouns',
      'memory',
      {
        title: 'Pronoun memory',
        description: 'Match each pronoun with its meaning.',
        tags: ['vocabulary', 'pronouns'],
        difficulty: 1,
        estMinutes: 3,
      },
      memory(byDe(vocab, 'ich', 'du', 'er', 'sie', 'wir', 'ihr')),
    ),

    activity(
      U,
      'quiz-people',
      'quiz',
      {
        title: 'Who is who?',
        description: 'People and jobs – German to English and back.',
        tags: ['vocabulary', 'introductions'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        questions: [
          ...quizDeEn(people, people).questions.slice(0, 3),
          ...quizEnDe(people, people).questions.slice(3),
        ],
      },
    ),

    activity(
      U,
      'sort-du-sie',
      'sortit',
      {
        title: 'du or Sie?',
        description: 'Is this phrase informal (du) or formal (Sie)?',
        tags: ['grammar', 'pronouns', 'introductions'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Informal (du) or formal (Sie)?',
        buckets: [
          { id: 'du', label: 'du', emoji: '🧑‍🤝‍🧑' },
          { id: 'sie', label: 'Sie', emoji: '🎩' },
        ],
        items: [
          { id: 'i1', text: 'Wie heißt du?', bucket: 'du', speak: 'Wie heißt du?' },
          { id: 'i2', text: 'Wie heißen Sie?', bucket: 'sie', speak: 'Wie heißen Sie?' },
          { id: 'i3', text: 'Bist du Student?', bucket: 'du', speak: 'Bist du Student?' },
          { id: 'i4', text: 'Sind Sie Lehrer?', bucket: 'sie', speak: 'Sind Sie Lehrer?' },
          { id: 'i5', text: 'Wie geht’s dir?', bucket: 'du', speak: 'Wie geht’s dir?' },
          { id: 'i6', text: 'Wie geht es Ihnen?', bucket: 'sie', speak: 'Wie geht es Ihnen?' },
          { id: 'i7', text: 'Und du?', bucket: 'du', speak: 'Und du?' },
          { id: 'i8', text: 'Und Sie?', bucket: 'sie', speak: 'Und Sie?' },
        ],
      },
    ),

    activity(
      U,
      'conj-heissen-sein',
      'conjugation',
      {
        title: 'heißen & sein',
        description: 'Complete the verb tables for the two most important verbs.',
        tags: ['grammar', 'verb-conjugation', 'pronouns'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          row('heißen', ['ich', 'du', 'wir']),
          row('sein', ['ich', 'du', 'er/sie/es']),
          row('heißen', ['er/sie/es', 'ihr', 'sie/Sie']),
          row('sein', ['wir', 'ihr', 'sie/Sie']),
        ].map((t, i) => ({ ...t, id: `${t.id}-${i}` })),
      },
    ),

    activity(
      U,
      'sort-verb-forms',
      'sortit',
      {
        title: 'Who goes with this verb?',
        description: 'Sort the verb forms by pronoun.',
        tags: ['grammar', 'verb-conjugation', 'pronouns'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Which pronoun belongs to this verb form?',
        buckets: [
          { id: 'ich', label: 'ich' },
          { id: 'du', label: 'du' },
          { id: 'er', label: 'er/sie/es' },
        ],
        items: [
          { id: 'v1', text: 'bin', bucket: 'ich' },
          { id: 'v2', text: 'heiße', bucket: 'ich' },
          { id: 'v3', text: 'bist', bucket: 'du' },
          { id: 'v4', text: 'kommst', bucket: 'du' },
          { id: 'v5', text: 'ist', bucket: 'er' },
          { id: 'v6', text: 'spricht', bucket: 'er' },
          { id: 'v7', text: 'komme', bucket: 'ich' },
          { id: 'v8', text: 'sprichst', bucket: 'du' },
          { id: 'v9', text: 'hat', bucket: 'er' },
        ],
      },
    ),

    activity(
      U,
      'gap-sein-heissen',
      'gapfill',
      {
        title: 'ich heiße, du bist …',
        description: 'Fill in the right verb form.',
        tags: ['grammar', 'verb-conjugation', 'introductions'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Ich ___ Anna.',
            answer: 'heiße',
            translation: 'My name is Anna.',
            explanation: 'ich → heiße',
          },
          {
            id: 'g2',
            text: 'Wie ___ du?',
            answer: 'heißt',
            translation: 'What is your name?',
            explanation: 'du → heißt (stems ending in ß only take -t)',
          },
          {
            id: 'g3',
            text: 'Das ___ Tom.',
            answer: 'ist',
            options: ['ist', 'bin', 'bist', 'sind'],
            translation: 'This is Tom.',
          },
          {
            id: 'g4',
            text: 'Er ___ Lehrer.',
            answer: 'ist',
            options: ['ist', 'bist', 'sind', 'bin'],
            translation: 'He is a teacher.',
          },
          {
            id: 'g5',
            text: 'Wir ___ Freunde.',
            answer: 'sind',
            options: ['sind', 'seid', 'ist', 'bin'],
            translation: 'We are friends.',
          },
          {
            id: 'g6',
            text: 'Ihr ___ nett.',
            answer: 'seid',
            options: ['seid', 'sind', 'bist', 'ist'],
            translation: 'You (all) are nice.',
          },
          {
            id: 'g7',
            text: '___ Sie Frau Weber?',
            answer: 'Sind',
            options: ['Sind', 'Seid', 'Ist', 'Bist'],
            translation: 'Are you Mrs. Weber?',
            explanation: 'Sie (formal) always takes the verb form “sind”.',
          },
          {
            id: 'g8',
            text: 'Ich ___ Student.',
            answer: 'bin',
            options: ['bin', 'ist', 'bist', 'sind'],
            translation: 'I am a student.',
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Introduce yourself',
        description: 'Build statements, W-questions and yes/no questions.',
        tags: ['grammar', 'questions', 'word-order', 'introductions'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'What is your name?',
            words: ['Wie', 'heißt', 'du?'],
            explanation: 'W-question: question word, verb, subject.',
          },
          {
            id: 's2',
            translation: 'My name is Maria.',
            words: ['Ich', 'heiße', 'Maria.'],
            alsoAccept: ['Mein Name ist Maria.'],
          },
          {
            id: 's3',
            translation: 'Are you a student?',
            words: ['Bist', 'du', 'Student?'],
            explanation: 'Yes/no question: the verb comes first.',
          },
          { id: 's4', translation: 'This is Tom.', words: ['Das', 'ist', 'Tom.'] },
          {
            id: 's5',
            translation: 'What is your name? (formal)',
            words: ['Wie', 'heißen', 'Sie?'],
          },
          {
            id: 's6',
            translation: 'I am a teacher.',
            words: ['Ich', 'bin', 'Lehrerin.'],
            extra: ['ist'],
          },
          { id: 's7', translation: 'Who is that?', words: ['Wer', 'ist', 'das?'] },
        ],
      },
    ),

    activity(
      U,
      'listen-intro',
      'listen',
      {
        title: 'Who is talking?',
        description: 'Listen to the sentence and pick what it means.',
        tags: ['listening', 'introductions'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'l1',
            speak: 'Das ist Tom.',
            answer: 'This is Tom.',
            options: ['This is Tom.', 'Tom is a teacher.', 'I am Tom.', 'Who is Tom?'],
          },
          {
            id: 'l2',
            speak: 'Wie heißen Sie?',
            answer: 'What is your name? (formal)',
            options: [
              'What is your name? (formal)',
              'What is your name? (informal)',
              'How are you?',
              'Who are you?',
            ],
          },
          {
            id: 'l3',
            speak: 'Ich bin Lehrerin.',
            answer: 'I am a teacher (female).',
            options: [
              'I am a teacher (female).',
              'She is a teacher.',
              'I am a student.',
              'You are a teacher.',
            ],
          },
          {
            id: 'l4',
            speak: 'Freut mich!',
            answer: 'Nice to meet you!',
            options: ['Nice to meet you!', 'See you soon!', 'Thank you!', 'How are you?'],
          },
          {
            id: 'l5',
            speak: 'Wir sind Freunde.',
            answer: 'We are friends.',
            options: ['We are friends.', 'They are friends.', 'I am a friend.', 'You are friends.'],
          },
          {
            id: 'l6',
            speak: 'Mein Name ist Lena.',
            answer: 'My name is Lena.',
            options: [
              'My name is Lena.',
              'Her name is Lena.',
              'Who is Lena?',
              'Lena is my friend.',
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'spell-names',
      'spell',
      {
        title: 'Spell it',
        description: 'Unscramble and type key words for introductions.',
        tags: ['spelling', 'introductions'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...spell(byDe(vocab, 'der Name', 'der Freund'), 'unscramble').items,
          ...spell(byDe(vocab, 'die Freundin', 'der Lehrer', 'der Student'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Nice to meet you',
        description: 'Two conversations: informal and formal.',
        tags: ['communication', 'introductions', 'pronouns'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        scenes: [
          {
            id: 'party',
            title: 'At a party',
            emoji: '🎉',
            setting: 'You meet Lena. You use du.',
            turns: [
              {
                kind: 'npc',
                who: 'Lena',
                text: 'Hallo! Ich bin Lena. Wie heißt du?',
                translation: 'Hi! I am Lena. What is your name?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ich heiße Max.', correct: true },
                  {
                    text: 'Ich heißt Max.',
                    correct: false,
                    feedback: 'After “ich” the verb ends in -e: ich heiße.',
                  },
                  {
                    text: 'Du heißt Max.',
                    correct: false,
                    feedback: 'You are talking about yourself – use “ich”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Lena',
                text: 'Freut mich, Max!',
                translation: 'Nice to meet you, Max!',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Freut mich auch!', correct: true },
                  {
                    text: 'Wie geht es Ihnen?',
                    correct: false,
                    feedback: 'Lena is your age – “Ihnen” is too formal.',
                  },
                  { text: 'Auf Wiedersehen!', correct: false, feedback: 'You have just met!' },
                ],
              },
            ],
          },
          {
            id: 'office',
            title: 'At the office',
            emoji: '🏢',
            setting: 'Mr. Klein is your new boss. You use Sie.',
            turns: [
              {
                kind: 'npc',
                who: 'Herr Klein',
                text: 'Guten Tag! Mein Name ist Klein. Wie heißen Sie?',
                translation: 'Good day! My name is Klein. What is your name?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Guten Tag, Herr Klein. Ich heiße Sara Weber.', correct: true },
                  {
                    text: 'Hallo Klein! Ich bin Sara.',
                    correct: false,
                    feedback: 'Too casual for your boss.',
                  },
                  {
                    text: 'Wie heißt du?',
                    correct: false,
                    feedback: 'He asked you – answer first. And he is “Sie”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Herr Klein',
                text: 'Sind Sie die neue Kollegin?',
                translation: 'Are you the new colleague?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ja, ich bin die neue Kollegin.', correct: true },
                  {
                    text: 'Ja, ich ist die neue Kollegin.',
                    correct: false,
                    feedback: 'ich → bin.',
                  },
                  {
                    text: 'Nein, du bist Kollegin.',
                    correct: false,
                    feedback: 'Mixed up the pronouns.',
                  },
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
        title: 'Pronoun blitz',
        description: 'Spot the correct sentences – fast.',
        tags: ['grammar', 'verb-conjugation', 'pronouns'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'Ich heiße Anna.', isTrue: true },
          { id: 'b2', text: 'Ich heißt Anna.', isTrue: false, explanation: 'ich heiße' },
          { id: 'b3', text: 'Du bist Student.', isTrue: true },
          { id: 'b4', text: 'Er sind Lehrer.', isTrue: false, explanation: 'er ist' },
          { id: 'b5', text: 'Wir sind Freunde.', isTrue: true },
          { id: 'b6', text: 'Ihr seid nett.', isTrue: true },
          { id: 'b7', text: 'Sie ist Lehrerin. (she)', isTrue: true },
          { id: 'b8', text: 'Ich ist Student.', isTrue: false, explanation: 'ich bin' },
          { id: 'b9', text: 'Wie heißen Sie?', isTrue: true },
          { id: 'b10', text: 'Du bin Lehrerin.', isTrue: false, explanation: 'du bist' },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Mixed questions about names, pronouns and verbs.',
        tags: ['vocabulary', 'grammar', 'pronouns'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Ich ___ Student. (sein)',
            options: ['bin', 'bist', 'ist', 'sind'],
            answer: 'bin',
          },
          {
            id: 'c2',
            prompt: 'Wie ___ Sie? (heißen)',
            options: ['heißen', 'heißt', 'heiße', 'heiß'],
            answer: 'heißen',
            explanation: 'Sie (formal) uses the infinitive form.',
          },
          {
            id: 'c3',
            prompt: 'You talk to your teacher. Which pronoun?',
            options: ['Sie', 'du', 'ihr', 'er'],
            answer: 'Sie',
          },
          {
            id: 'c4',
            prompt: 'Which pronoun means “we”?',
            options: ['wir', 'ihr', 'sie', 'es'],
            answer: 'wir',
          },
          {
            id: 'c5',
            prompt: 'Das ___ meine Freundin. (sein)',
            options: ['ist', 'bin', 'bist', 'seid'],
            answer: 'ist',
          },
          {
            id: 'c6',
            prompt: 'Ihr ___ Studenten. (sein)',
            options: ['seid', 'sind', 'bist', 'ist'],
            answer: 'seid',
          },
          {
            id: 'c7',
            prompt: 'Which is a yes/no question?',
            options: ['Bist du Lehrer?', 'Wer bist du?', 'Ich bin Lehrer.', 'Wie heißt du?'],
            answer: 'Bist du Lehrer?',
          },
          {
            id: 'c8',
            prompt: 'die Lehrerin = ?',
            options: ['female teacher', 'male teacher', 'friend', 'student'],
            answer: 'female teacher',
          },
        ],
      },
    ),
  ],
};
