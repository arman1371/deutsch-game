import { activity, byDe, flashcards, quizEmoji, spell, unit, vocabList } from '../builders';
import { conjugate } from '@/lib/german/conjugation';
import type { UnitContent } from './types';

const U = 'a1-1-woher';

const countries = vocabList(U, 'Countries', [
  ['Deutschland', 'Germany', '🇩🇪'],
  ['Österreich', 'Austria', '🇦🇹'],
  ['die Schweiz', 'Switzerland', '🇨🇭', 'die'],
  ['Frankreich', 'France', '🇫🇷'],
  ['Italien', 'Italy', '🇮🇹'],
  ['Spanien', 'Spain', '🇪🇸'],
  ['Polen', 'Poland', '🇵🇱'],
  ['England', 'England', '🇬🇧'],
  ['Russland', 'Russia', '🇷🇺'],
  ['China', 'China', '🇨🇳'],
  ['Indien', 'India', '🇮🇳'],
  ['Brasilien', 'Brazil', '🇧🇷'],
  ['die Türkei', 'Turkey', '🇹🇷', 'die'],
  ['der Iran', 'Iran', '🇮🇷', 'der'],
  ['die USA', 'the USA', '🇺🇸', 'die'],
]);

const languages = vocabList(U, 'Languages', [
  ['Deutsch', 'German', '🗣️'],
  ['Englisch', 'English', '💬'],
  ['Französisch', 'French', '🥐'],
  ['Italienisch', 'Italian', '🍕'],
  ['Spanisch', 'Spanish', '💃'],
  ['Polnisch', 'Polish', '🗨️'],
  ['Russisch', 'Russian', '🪆'],
  ['Türkisch', 'Turkish', '🧿'],
  ['Persisch', 'Persian (Farsi)', '📜'],
  ['Arabisch', 'Arabic', '🕌'],
  ['Chinesisch', 'Chinese', '🏮'],
]);

const words = vocabList(U, 'Living & speaking', [
  ['Woher kommst du?', 'Where are you from?', '🧭'],
  ['Ich komme aus …', 'I come from …', '✈️'],
  ['Wo wohnst du?', 'Where do you live?', '🏠'],
  ['Ich wohne in …', 'I live in …', '🏙️'],
  ['Welche Sprachen sprichst du?', 'Which languages do you speak?', '🗣️'],
  ['Ich spreche …', 'I speak …', '💬'],
  ['ein bisschen', 'a little', '🤏'],
  ['auch', 'also / too', '➕'],
  ['das Land', 'country', '🗺️', 'das', 'Länder'],
  ['die Stadt', 'city', '🌆', 'die', 'Städte'],
  ['die Sprache', 'language', '🔤', 'die', 'Sprachen'],
  ['kommen', 'to come', '🚶'],
  ['wohnen', 'to live (somewhere)', '🏡'],
  ['sprechen', 'to speak', '🗣️'],
  ['lernen', 'to learn', '📖'],
]);

const vocab = [...countries, ...languages, ...words];
const country = (names: string[]) => byDe(countries, ...names);

const table = (
  verb: string,
  meaning: string,
  blanks: ('ich' | 'du' | 'er/sie/es' | 'wir' | 'ihr' | 'sie/Sie')[],
  id = verb,
) => ({
  id,
  verb,
  meaning,
  forms: conjugate(verb),
  blanks,
});

export const woher: UnitContent = {
  unit: unit({
    id: U,
    order: 3,
    title: 'Woher kommst du?',
    subtitle: 'Countries, languages and where you live',
    emoji: '🌍',
    goals: [
      'Say where you come from and where you live',
      'Name countries and languages',
      'Ask and answer simple questions',
    ],
    grammar: ['W-questions: woher, wo, welche', 'Yes/no questions', 'kommen, wohnen, sprechen'],
    vocabFields: ['Countries', 'Languages', 'Living & speaking'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-countries',
      'flashcards',
      {
        title: 'Countries with flags',
        description: 'Learn the German names of countries.',
        tags: ['vocabulary', 'countries-languages'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(countries.slice(0, 12)),
    ),

    activity(
      U,
      'quiz-flags',
      'quiz',
      {
        title: 'Name the flag',
        description: 'Which country does this flag belong to?',
        tags: ['vocabulary', 'countries-languages'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        questions: quizEmoji(countries, countries).questions.map((q) => ({
          ...q,
          prompt: 'Which country is this?',
        })),
      },
    ),

    activity(
      U,
      'memory-languages',
      'memory',
      {
        title: 'Country & language',
        description: 'Match every country with its language.',
        tags: ['vocabulary', 'countries-languages'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        pairs: [
          { id: 'fr', a: 'Frankreich', b: 'Französisch' },
          { id: 'it', a: 'Italien', b: 'Italienisch' },
          { id: 'es', a: 'Spanien', b: 'Spanisch' },
          { id: 'pl', a: 'Polen', b: 'Polnisch' },
          { id: 'ru', a: 'Russland', b: 'Russisch' },
          { id: 'tr', a: 'die Türkei', b: 'Türkisch' },
        ],
      },
    ),

    activity(
      U,
      'sort-land-sprache',
      'sortit',
      {
        title: 'Land or Sprache?',
        description: 'Is it a country or a language?',
        tags: ['vocabulary', 'countries-languages'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        instruction: 'Country or language?',
        buckets: [
          { id: 'land', label: 'Land', emoji: '🗺️' },
          { id: 'sprache', label: 'Sprache', emoji: '💬' },
        ],
        items: [
          ...['Spanien', 'Polen', 'Italien', 'China', 'Russland'].map((de) => ({
            id: `l-${de}`,
            text: de,
            bucket: 'land',
          })),
          ...['Spanisch', 'Polnisch', 'Italienisch', 'Chinesisch', 'Russisch'].map((de) => ({
            id: `s-${de}`,
            text: de,
            bucket: 'sprache',
          })),
        ],
      },
    ),

    activity(
      U,
      'listen-where',
      'listen',
      {
        title: 'Where is she from?',
        description: 'Listen and choose the right country.',
        tags: ['listening', 'countries-languages'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'l1',
            speak: 'Ich komme aus Frankreich.',
            answer: 'France',
            options: ['France', 'Italy', 'Spain', 'Poland'],
          },
          {
            id: 'l2',
            speak: 'Ich komme aus Spanien.',
            answer: 'Spain',
            options: ['Spain', 'Austria', 'France', 'Brazil'],
          },
          {
            id: 'l3',
            speak: 'Ich komme aus Österreich.',
            answer: 'Austria',
            options: ['Austria', 'Germany', 'Switzerland', 'Poland'],
          },
          {
            id: 'l4',
            speak: 'Ich komme aus Brasilien.',
            answer: 'Brazil',
            options: ['Brazil', 'Russia', 'India', 'Spain'],
          },
          {
            id: 'l5',
            speak: 'Ich komme aus China.',
            answer: 'China',
            options: ['China', 'India', 'Italy', 'England'],
          },
          {
            id: 'l6',
            speak: 'Ich spreche Polnisch.',
            answer: 'Polish',
            options: ['Polish', 'Russian', 'Spanish', 'Persian'],
          },
        ],
      },
    ),

    activity(
      U,
      'conj-verbs',
      'conjugation',
      {
        title: 'kommen, wohnen, sprechen',
        description: 'Complete the present-tense tables.',
        tags: ['grammar', 'verb-conjugation'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          table('kommen', 'to come', ['ich', 'du', 'wir']),
          table('wohnen', 'to live', ['ich', 'er/sie/es', 'ihr']),
          table('sprechen', 'to speak', ['ich', 'du', 'er/sie/es'], 'sprechen-1'),
          table('sprechen', 'to speak', ['wir', 'ihr', 'sie/Sie'], 'sprechen-2'),
          table('kommen', 'to come', ['er/sie/es', 'ihr', 'sie/Sie'], 'kommen-2'),
        ],
      },
    ),

    activity(
      U,
      'gap-verbs',
      'gapfill',
      {
        title: 'Fill in the verb',
        description: 'Choose the right form of kommen, wohnen or sprechen.',
        tags: ['grammar', 'verb-conjugation', 'countries-languages'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Ich ___ aus Spanien.',
            answer: 'komme',
            translation: 'I come from Spain.',
          },
          { id: 'g2', text: 'Wo ___ du?', answer: 'wohnst', translation: 'Where do you live?' },
          {
            id: 'g3',
            text: 'Er ___ Deutsch und Englisch.',
            answer: 'spricht',
            translation: 'He speaks German and English.',
            explanation: 'sprechen: e → i for du and er/sie/es (du sprichst, er spricht).',
          },
          {
            id: 'g4',
            text: 'Wir ___ in Wien.',
            answer: 'wohnen',
            translation: 'We live in Vienna.',
          },
          {
            id: 'g5',
            text: 'Sie ___ aus Italien. (she)',
            answer: 'kommt',
            translation: 'She comes from Italy.',
          },
          {
            id: 'g6',
            text: '___ du Französisch?',
            answer: 'Sprichst',
            translation: 'Do you speak French?',
          },
          {
            id: 'g7',
            text: 'Ihr ___ aus Polen.',
            answer: 'kommt',
            translation: 'You (all) come from Poland.',
          },
          {
            id: 'g8',
            text: 'Ich ___ ein bisschen Deutsch.',
            answer: 'spreche',
            translation: 'I speak a little German.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-sentence-type',
      'sortit',
      {
        title: 'Statement or question?',
        description: 'Sort sentences into statements, W-questions and yes/no questions.',
        tags: ['grammar', 'questions', 'word-order'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'What kind of sentence is this?',
        buckets: [
          { id: 'statement', label: 'Statement', emoji: '➖' },
          { id: 'w', label: 'W-question', emoji: '❓' },
          { id: 'yn', label: 'Yes/no question', emoji: '✔️' },
        ],
        items: [
          { id: 't1', text: 'Ich wohne in Köln.', bucket: 'statement' },
          { id: 't2', text: 'Wo wohnst du?', bucket: 'w' },
          { id: 't3', text: 'Wohnst du in Köln?', bucket: 'yn' },
          { id: 't4', text: 'Woher kommst du?', bucket: 'w' },
          { id: 't5', text: 'Er kommt aus Polen.', bucket: 'statement' },
          { id: 't6', text: 'Kommst du aus Polen?', bucket: 'yn' },
          { id: 't7', text: 'Sprichst du Englisch?', bucket: 'yn' },
          { id: 't8', text: 'Welche Sprachen sprichst du?', bucket: 'w' },
          { id: 't9', text: 'Wir sprechen Deutsch.', bucket: 'statement' },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Where are you from?',
        description: 'Build questions and answers about origin and languages.',
        tags: ['grammar', 'questions', 'word-order', 'countries-languages'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        items: [
          { id: 's1', translation: 'Where are you from?', words: ['Woher', 'kommst', 'du?'] },
          {
            id: 's2',
            translation: 'I come from Tehran.',
            words: ['Ich', 'komme', 'aus', 'Teheran.'],
          },
          {
            id: 's3',
            translation: 'Do you come from Berlin?',
            words: ['Kommst', 'du', 'aus', 'Berlin?'],
            explanation: 'Yes/no question: verb first.',
          },
          { id: 's4', translation: 'Where do you live?', words: ['Wo', 'wohnst', 'du?'] },
          { id: 's5', translation: 'I live in Vienna.', words: ['Ich', 'wohne', 'in', 'Wien.'] },
          {
            id: 's6',
            translation: 'Do you speak English?',
            words: ['Sprichst', 'du', 'Englisch?'],
          },
          {
            id: 's7',
            translation: 'Yes, I speak a little German.',
            words: ['Ja,', 'ich', 'spreche', 'ein', 'bisschen', 'Deutsch.'],
          },
          {
            id: 's8',
            translation: 'He speaks Spanish and Italian.',
            words: ['Er', 'spricht', 'Spanisch', 'und', 'Italienisch.'],
          },
        ],
      },
    ),

    activity(
      U,
      'spell-countries',
      'spell',
      {
        title: 'Spell the country',
        description: 'Unscramble and type country and language names.',
        tags: ['spelling', 'countries-languages'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...spell(country(['Spanien', 'Italien', 'Polen']), 'unscramble').items,
          ...spell(country(['Deutschland', 'Frankreich', 'Österreich']), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'In the language course',
        description: 'Talk about where you come from and what you speak.',
        tags: ['communication', 'countries-languages', 'questions'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        scenes: [
          {
            id: 'origin',
            title: 'Where are you from?',
            emoji: '🌍',
            setting: 'You meet Marta in your German course.',
            turns: [
              {
                kind: 'npc',
                who: 'Marta',
                text: 'Hallo! Ich bin Marta. Woher kommst du?',
                translation: 'Hi! I am Marta. Where are you from?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ich komme aus Teheran.', correct: true },
                  {
                    text: 'Ich wohne aus Teheran.',
                    correct: false,
                    feedback: 'Origin = “kommen aus”, not “wohnen aus”.',
                  },
                  {
                    text: 'Ich bin Teheran.',
                    correct: false,
                    feedback: 'You cannot “be” a city – say where you come from.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Marta',
                text: 'Ich komme aus Polen. Und wo wohnst du?',
                translation: 'I come from Poland. And where do you live?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ich wohne in Berlin.', correct: true },
                  {
                    text: 'Ich komme in Berlin.',
                    correct: false,
                    feedback: '“Wohnen in” tells where you live.',
                  },
                  {
                    text: 'Ich wohnst in Berlin.',
                    correct: false,
                    feedback: 'ich wohne (not wohnst).',
                  },
                ],
              },
            ],
          },
          {
            id: 'languages',
            title: 'Languages',
            emoji: '🗣️',
            setting: 'Marta asks about your languages.',
            turns: [
              {
                kind: 'npc',
                who: 'Marta',
                text: 'Welche Sprachen sprichst du?',
                translation: 'Which languages do you speak?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ich spreche Persisch und ein bisschen Deutsch.', correct: true },
                  {
                    text: 'Ich sprechen Persisch.',
                    correct: false,
                    feedback: 'ich spreche – the verb ending must match “ich”.',
                  },
                  {
                    text: 'Ich komme Persisch.',
                    correct: false,
                    feedback: 'Languages are spoken: “sprechen”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Marta',
                text: 'Sprichst du auch Englisch?',
                translation: 'Do you speak English too?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ja, ich spreche auch Englisch.', correct: true },
                  {
                    text: 'Ja, ich sprichst auch Englisch.',
                    correct: false,
                    feedback: 'Only du has the “sprichst” form.',
                  },
                  {
                    text: 'Ja, du sprichst Englisch.',
                    correct: false,
                    feedback: 'You answer about yourself: ich.',
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
        title: 'Question blitz',
        description: 'Correct sentence or not? Fast!',
        tags: ['grammar', 'questions', 'verb-conjugation'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'Ich komme aus Italien.', isTrue: true },
          { id: 'b2', text: 'Ich kommen aus Italien.', isTrue: false, explanation: 'ich komme' },
          { id: 'b3', text: 'Woher kommst du?', isTrue: true },
          { id: 'b4', text: 'Wo kommst du?', isTrue: false, explanation: 'Origin: woher.' },
          { id: 'b5', text: 'Er spricht Spanisch.', isTrue: true },
          { id: 'b6', text: 'Er sprecht Spanisch.', isTrue: false, explanation: 'er spricht' },
          { id: 'b7', text: 'Du wohnst in Wien.', isTrue: true },
          { id: 'b8', text: 'Wohnst du in Wien?', isTrue: true },
          { id: 'b9', text: 'Ich wohne in Wien.', isTrue: true },
          { id: 'b10', text: 'Wir wohnt in Wien.', isTrue: false, explanation: 'wir wohnen' },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Countries, languages, verbs and questions mixed together.',
        tags: ['vocabulary', 'grammar', 'countries-languages'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: '“Where are you from?” in German:',
            options: ['Woher kommst du?', 'Wo wohnst du?', 'Wie heißt du?', 'Was sprichst du?'],
            answer: 'Woher kommst du?',
          },
          {
            id: 'c2',
            prompt: 'Er ___ Französisch.',
            options: ['spricht', 'sprichst', 'sprechen', 'spreche'],
            answer: 'spricht',
          },
          {
            id: 'c3',
            prompt: 'The language of Spain:',
            options: ['Spanisch', 'Spanien', 'Italienisch', 'Englisch'],
            answer: 'Spanisch',
          },
          {
            id: 'c4',
            prompt: 'Wir ___ in Hamburg.',
            options: ['wohnen', 'wohnt', 'wohne', 'wohnst'],
            answer: 'wohnen',
          },
          {
            id: 'c5',
            prompt: 'Which one is a yes/no question?',
            options: [
              'Kommst du aus Polen?',
              'Woher kommst du?',
              'Ich komme aus Polen.',
              'Wo wohnst du?',
            ],
            answer: 'Kommst du aus Polen?',
          },
          {
            id: 'c6',
            prompt: 'ein bisschen = ?',
            options: ['a little', 'a lot', 'also', 'never'],
            answer: 'a little',
          },
          {
            id: 'c7',
            prompt: 'Ihr ___ aus Brasilien.',
            options: ['kommt', 'kommen', 'komme', 'kommst'],
            answer: 'kommt',
          },
          {
            id: 'c8',
            prompt: 'Which word means “country”?',
            options: ['das Land', 'die Stadt', 'die Sprache', 'der Name'],
            answer: 'das Land',
          },
        ],
      },
    ),
  ],
};
