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
import { conjugate } from '@/lib/german/conjugation';
import type { UnitContent } from './types';

const U = 'a1-1-familie';

const vocab = vocabList(U, 'Family', [
  ['die Familie', 'family', '👨‍👩‍👧‍👦', 'die', 'Familien'],
  ['die Eltern', 'parents', '👫', 'die'],
  ['die Mutter', 'mother', '👩', 'die', 'Mütter'],
  ['der Vater', 'father', '👨', 'der', 'Väter'],
  ['der Bruder', 'brother', '👦', 'der', 'Brüder'],
  ['die Schwester', 'sister', '👧', 'die', 'Schwestern'],
  ['die Geschwister', 'siblings', '👫', 'die'],
  ['der Sohn', 'son', '👦', 'der', 'Söhne'],
  ['die Tochter', 'daughter', '👧', 'die', 'Töchter'],
  ['das Kind', 'child', '🧒', 'das', 'Kinder'],
  ['die Großmutter', 'grandmother', '👵', 'die', 'Großmütter'],
  ['der Großvater', 'grandfather', '👴', 'der', 'Großväter'],
  ['die Großeltern', 'grandparents', '👴', 'die'],
  ['der Onkel', 'uncle', '🧔', 'der', 'Onkel'],
  ['die Tante', 'aunt', '👩‍🦰', 'die', 'Tanten'],
  ['der Cousin', 'cousin (male)', '🧑', 'der', 'Cousins'],
  ['die Cousine', 'cousin (female)', '👱‍♀️', 'die', 'Cousinen'],
  ['der Mann', 'man / husband', '🧑‍🦱', 'der', 'Männer'],
  ['die Frau', 'woman / wife', '👩‍🦱', 'die', 'Frauen'],
  ['das Baby', 'baby', '👶', 'das', 'Babys'],
  ['verheiratet', 'married', '💍'],
  ['ledig', 'single', '🙋'],
  ['klein', 'small', '🔹'],
  ['groß', 'big / tall', '🔷'],
  ['Jahre alt', 'years old', '🎂'],
]);

const relatives = vocab.slice(0, 20);
const male = ['der Vater', 'der Bruder', 'der Sohn', 'der Großvater', 'der Onkel', 'der Cousin'];
const female = [
  'die Mutter',
  'die Schwester',
  'die Tochter',
  'die Großmutter',
  'die Tante',
  'die Cousine',
];

const gap = (
  id: string,
  text: string,
  answer: string,
  options: string[],
  translation: string,
  explanation?: string,
) => ({
  id,
  text,
  answer,
  options,
  translation,
  ...(explanation ? { explanation } : {}),
});

export const familie: UnitContent = {
  unit: unit({
    id: U,
    order: 5,
    title: 'Meine Familie',
    subtitle: 'Talk about your family',
    emoji: '👨‍👩‍👧',
    goals: [
      'Name family members',
      'Say how many brothers and sisters you have',
      'Use mein, dein, sein, ihr',
    ],
    grammar: ['haben', 'Possessive articles', 'Plural of nouns', 'kein / keine'],
    vocabFields: ['Family'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-family',
      'flashcards',
      {
        title: 'Family cards',
        description: 'Learn who is who in a German family – with plurals.',
        tags: ['vocabulary', 'family', 'plurals'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(relatives.slice(0, 16)),
    ),

    activity(
      U,
      'memory-family',
      'memory',
      {
        title: 'Family memory',
        description: 'Find the German word and its English meaning.',
        tags: ['vocabulary', 'family'],
        difficulty: 1,
        estMinutes: 3,
      },
      memory(
        byDe(
          vocab,
          'die Mutter',
          'der Vater',
          'der Bruder',
          'die Schwester',
          'die Tante',
          'der Onkel',
        ),
      ),
    ),

    activity(
      U,
      'quiz-family',
      'quiz',
      {
        title: 'Who is that?',
        description: 'German to English – and English to German.',
        tags: ['vocabulary', 'family'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        questions: [
          ...quizDeEn(
            byDe(vocab, 'die Großmutter', 'der Sohn', 'die Tochter', 'der Onkel'),
            relatives,
          ).questions,
          ...quizEnDe(
            byDe(vocab, 'die Eltern', 'die Geschwister', 'die Tante', 'das Kind'),
            relatives,
          ).questions,
        ],
      },
    ),

    activity(
      U,
      'sort-gender',
      'sortit',
      {
        title: 'Male or female?',
        description: 'Der, die or das? Sort the family members by gender.',
        tags: ['vocabulary', 'family', 'articles'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        instruction: 'Male (der) or female (die)?',
        buckets: [
          { id: 'm', label: 'der / männlich', emoji: '👨' },
          { id: 'f', label: 'die / weiblich', emoji: '👩' },
        ],
        items: [
          ...male.map((w) => ({
            id: `m-${w}`,
            text: w.replace(/^der /, ''),
            bucket: 'm',
            speak: w,
          })),
          ...female.map((w) => ({
            id: `f-${w}`,
            text: w.replace(/^die /, ''),
            bucket: 'f',
            speak: w,
          })),
        ],
      },
    ),

    activity(
      U,
      'sort-plural',
      'sortit',
      {
        title: 'One or many?',
        description: 'Singular or plural? Look at the article and the ending.',
        tags: ['grammar', 'plurals', 'family'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Singular or plural?',
        buckets: [
          { id: 's', label: 'Singular', emoji: '1️⃣' },
          { id: 'p', label: 'Plural', emoji: '👥' },
        ],
        items: [
          { id: 'p1', text: 'die Tochter', bucket: 's' },
          { id: 'p2', text: 'die Töchter', bucket: 'p' },
          { id: 'p3', text: 'der Bruder', bucket: 's' },
          { id: 'p4', text: 'die Brüder', bucket: 'p' },
          { id: 'p5', text: 'das Kind', bucket: 's' },
          { id: 'p6', text: 'die Kinder', bucket: 'p' },
          { id: 'p7', text: 'die Eltern', bucket: 'p' },
          { id: 'p8', text: 'die Tante', bucket: 's' },
          { id: 'p9', text: 'die Schwestern', bucket: 'p' },
        ],
      },
    ),

    activity(
      U,
      'gap-plural',
      'gapfill',
      {
        title: 'Make the plural',
        description: 'Type the plural form – watch the umlauts!',
        tags: ['grammar', 'plurals', 'family'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'pl1',
            text: 'ein Bruder, zwei ___',
            answer: 'Brüder',
            translation: 'one brother, two brothers',
            explanation: 'Many family words add an umlaut: Bruder → Brüder.',
          },
          {
            id: 'pl2',
            text: 'eine Schwester, drei ___',
            answer: 'Schwestern',
            translation: 'one sister, three sisters',
          },
          {
            id: 'pl3',
            text: 'ein Kind, zwei ___',
            answer: 'Kinder',
            translation: 'one child, two children',
          },
          {
            id: 'pl4',
            text: 'eine Tante, zwei ___',
            answer: 'Tanten',
            translation: 'one aunt, two aunts',
          },
          {
            id: 'pl5',
            text: 'ein Sohn, zwei ___',
            answer: 'Söhne',
            translation: 'one son, two sons',
          },
          {
            id: 'pl6',
            text: 'eine Tochter, zwei ___',
            answer: 'Töchter',
            translation: 'one daughter, two daughters',
          },
          {
            id: 'pl7',
            text: 'ein Onkel, zwei ___',
            answer: 'Onkel',
            translation: 'one uncle, two uncles',
            explanation: 'Onkel does not change in the plural.',
          },
        ],
      },
    ),

    activity(
      U,
      'conj-haben',
      'conjugation',
      {
        title: 'haben – to have',
        description: 'Complete the table for haben.',
        tags: ['grammar', 'verb-conjugation', 'family'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        tables: [
          {
            id: 'haben-1',
            verb: 'haben',
            meaning: 'to have',
            forms: conjugate('haben'),
            blanks: ['ich', 'du', 'er/sie/es'],
          },
          {
            id: 'haben-2',
            verb: 'haben',
            meaning: 'to have',
            forms: conjugate('haben'),
            blanks: ['wir', 'ihr', 'sie/Sie'],
          },
          {
            id: 'haben-3',
            verb: 'haben',
            meaning: 'to have',
            forms: conjugate('haben'),
            blanks: ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'],
          },
        ],
      },
    ),

    activity(
      U,
      'gap-possessive',
      'gapfill',
      {
        title: 'mein, dein, sein, ihr',
        description: 'Choose the right possessive article.',
        tags: ['grammar', 'possessives', 'family'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          gap(
            'po1',
            'Das ist ___ Mutter. (my)',
            'meine',
            ['mein', 'meine', 'meinen', 'meiner'],
            'This is my mother.',
            'Mutter is feminine → meine (like eine).',
          ),
          gap(
            'po2',
            'Das ist ___ Vater. (my)',
            'mein',
            ['mein', 'meine', 'meinen', 'meiner'],
            'This is my father.',
            'Vater is masculine → mein (like ein).',
          ),
          gap(
            'po3',
            'Wie heißt ___ Schwester? (your, du)',
            'deine',
            ['dein', 'deine', 'Ihre', 'deinen'],
            'What is your sister called?',
          ),
          gap(
            'po4',
            '___ Bruder heißt Tim. (his)',
            'Sein',
            ['Sein', 'Seine', 'Ihr', 'Mein'],
            'His brother is called Tim.',
          ),
          gap(
            'po5',
            '___ Tochter ist klein. (her)',
            'Ihre',
            ['Ihr', 'Ihre', 'Seine', 'Seiner'],
            'Her daughter is small.',
            'ihr = her; Tochter is feminine → ihre.',
          ),
          gap(
            'po6',
            'Das sind ___ Eltern. (our)',
            'unsere',
            ['unser', 'unsere', 'euer', 'unseren'],
            'These are our parents.',
            'Plural nouns take the -e ending: unsere Eltern.',
          ),
          gap(
            'po7',
            'Ist das ___ Kind? (your, Sie)',
            'Ihr',
            ['Ihr', 'Ihre', 'dein', 'deine'],
            'Is that your child?',
            'Formal “your” is Ihr, with a capital letter.',
          ),
          gap(
            'po8',
            'Wo wohnen ___ Großeltern? (your, ihr)',
            'eure',
            ['euer', 'eure', 'unsere', 'ihre'],
            'Where do your grandparents live?',
            'euer loses the second e before an ending: eure.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-mein-meine',
      'sortit',
      {
        title: 'mein or meine?',
        description: 'Masculine and neuter words take mein, feminine and plural words take meine.',
        tags: ['grammar', 'possessives', 'articles'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Which possessive fits?',
        buckets: [
          { id: 'mein', label: 'mein', emoji: '👨' },
          { id: 'meine', label: 'meine', emoji: '👩' },
        ],
        items: [
          { id: 'k1', text: 'Vater', bucket: 'mein' },
          { id: 'k2', text: 'Mutter', bucket: 'meine' },
          { id: 'k3', text: 'Kind', bucket: 'mein' },
          { id: 'k4', text: 'Eltern', bucket: 'meine' },
          { id: 'k5', text: 'Schwester', bucket: 'meine' },
          { id: 'k6', text: 'Bruder', bucket: 'mein' },
          { id: 'k7', text: 'Onkel', bucket: 'mein' },
          { id: 'k8', text: 'Tante', bucket: 'meine' },
          { id: 'k9', text: 'Geschwister', bucket: 'meine' },
          { id: 'k10', text: 'Baby', bucket: 'mein' },
        ],
      },
    ),

    activity(
      U,
      'listen-family',
      'listen',
      {
        title: 'Listen to the family',
        description: 'Who is talking about whom?',
        tags: ['listening', 'family'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'l1',
            speak: 'Ich habe zwei Schwestern und einen Bruder.',
            answer: 'I have two sisters and one brother.',
            options: [
              'I have two sisters and one brother.',
              'I have two brothers and one sister.',
              'I have no siblings.',
              'I have three sisters.',
            ],
          },
          {
            id: 'l2',
            speak: 'Meine Mutter heißt Anna.',
            answer: 'My mother is called Anna.',
            options: [
              'My mother is called Anna.',
              'My sister is called Anna.',
              'Her mother is called Anna.',
              'Anna is my aunt.',
            ],
          },
          {
            id: 'l3',
            speak: 'Das sind meine Eltern.',
            answer: 'These are my parents.',
            options: [
              'These are my parents.',
              'These are my children.',
              'This is my father.',
              'These are my grandparents.',
            ],
          },
          {
            id: 'l4',
            speak: 'Ich habe keine Geschwister.',
            answer: 'I have no siblings.',
            options: [
              'I have no siblings.',
              'I have two siblings.',
              'I have one brother.',
              'I have many cousins.',
            ],
          },
          {
            id: 'l5',
            speak: 'Mein Bruder ist zehn Jahre alt.',
            answer: 'My brother is ten years old.',
            options: [
              'My brother is ten years old.',
              'My brother is twelve years old.',
              'My father is ten years old.',
              'My brother has ten children.',
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Talk about your family',
        description: 'Build sentences with haben, possessives and kein/keine.',
        tags: ['grammar', 'word-order', 'family', 'possessives'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'I have two brothers.',
            words: ['Ich', 'habe', 'zwei', 'Brüder.'],
          },
          {
            id: 's2',
            translation: 'My sister is called Anna.',
            words: ['Meine', 'Schwester', 'heißt', 'Anna.'],
          },
          {
            id: 's3',
            translation: 'Do you have siblings?',
            words: ['Hast', 'du', 'Geschwister?'],
            explanation: 'Yes/no question: haben comes first.',
          },
          {
            id: 's4',
            translation: 'This is my family.',
            words: ['Das', 'ist', 'meine', 'Familie.'],
          },
          {
            id: 's5',
            translation: 'I have no sister.',
            words: ['Ich', 'habe', 'keine', 'Schwester.'],
            extra: ['kein'],
            explanation: 'Die Schwester is feminine → keine.',
          },
          {
            id: 's6',
            translation: 'My father is forty-five years old.',
            words: ['Mein', 'Vater', 'ist', 'fünfundvierzig', 'Jahre', 'alt.'],
          },
          {
            id: 's7',
            translation: 'We have a child.',
            words: ['Wir', 'haben', 'ein', 'Kind.'],
            extra: ['eine'],
          },
        ],
      },
    ),

    activity(
      U,
      'spell-family',
      'spell',
      {
        title: 'Spell the family',
        description: 'Unscramble and type the family words.',
        tags: ['spelling', 'family'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...spell(byDe(vocab, 'die Mutter', 'der Vater', 'der Bruder'), 'unscramble').items,
          ...spell(byDe(vocab, 'die Schwester', 'die Tochter', 'der Onkel'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'My family',
        description: 'Chat about brothers, sisters and parents.',
        tags: ['communication', 'family', 'possessives'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        scenes: [
          {
            id: 'siblings',
            title: 'Do you have siblings?',
            emoji: '👫',
            setting: 'Lena asks about your family.',
            turns: [
              {
                kind: 'npc',
                who: 'Lena',
                text: 'Hast du Geschwister?',
                translation: 'Do you have siblings?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ja, ich habe eine Schwester und einen Bruder.', correct: true },
                  { text: 'Ja, ich hast eine Schwester.', correct: false, feedback: 'ich → habe.' },
                  {
                    text: 'Ja, ich bin eine Schwester.',
                    correct: false,
                    feedback: '“sein” does not mean “to have”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Lena',
                text: 'Wie heißt deine Schwester?',
                translation: 'What is your sister called?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Meine Schwester heißt Sara.', correct: true },
                  {
                    text: 'Mein Schwester heißt Sara.',
                    correct: false,
                    feedback: 'Schwester is feminine: meine Schwester.',
                  },
                  {
                    text: 'Deine Schwester heißt Sara.',
                    correct: false,
                    feedback: 'Lena asked about your sister – say “meine”.',
                  },
                ],
              },
            ],
          },
          {
            id: 'parents',
            title: 'About your parents',
            emoji: '👫',
            setting: 'Tom wants to know more.',
            turns: [
              {
                kind: 'npc',
                who: 'Tom',
                text: 'Wie alt ist dein Vater?',
                translation: 'How old is your father?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Er ist fünfzig Jahre alt.', correct: true },
                  {
                    text: 'Sie ist fünfzig Jahre alt.',
                    correct: false,
                    feedback: 'Father = er (he).',
                  },
                  {
                    text: 'Ich bin fünfzig Jahre alt.',
                    correct: false,
                    feedback: 'Tom asked about your father, not you.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Tom',
                text: 'Und deine Mutter?',
                translation: 'And your mother?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Sie ist achtundvierzig.', correct: true },
                  {
                    text: 'Er ist achtundvierzig.',
                    correct: false,
                    feedback: 'Mother = sie (she).',
                  },
                  {
                    text: 'Wir sind achtundvierzig.',
                    correct: false,
                    feedback: 'One person → sie ist.',
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
        title: 'Family blitz',
        description: 'Right or wrong? Haben, plurals and possessives.',
        tags: ['grammar', 'possessives', 'plurals'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'Das ist meine Mutter.', isTrue: true },
          {
            id: 'b2',
            text: 'Das ist mein Mutter.',
            isTrue: false,
            explanation: 'die Mutter → meine Mutter',
          },
          { id: 'b3', text: 'Ich habe zwei Brüder.', isTrue: true },
          { id: 'b4', text: 'Ich hast zwei Brüder.', isTrue: false, explanation: 'ich habe' },
          { id: 'b5', text: 'Die Kinder sind klein.', isTrue: true },
          { id: 'b6', text: 'Er hat keine Geschwister.', isTrue: true },
          { id: 'b7', text: 'Wir haben ein Baby.', isTrue: true },
          { id: 'b8', text: 'Ihr habt eine Schwester.', isTrue: true },
          {
            id: 'b9',
            text: 'Mein Schwester heißt Anna.',
            isTrue: false,
            explanation: 'meine Schwester',
          },
          { id: 'b10', text: 'Du habt einen Bruder.', isTrue: false, explanation: 'du hast' },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Family words, haben, plurals and possessives mixed.',
        tags: ['vocabulary', 'grammar', 'family'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Wir ___ zwei Kinder. (haben)',
            options: ['haben', 'habt', 'hat', 'habe'],
            answer: 'haben',
          },
          {
            id: 'c2',
            prompt: 'Plural of “der Bruder”:',
            options: ['die Brüder', 'die Bruders', 'die Bruder', 'die Brudern'],
            answer: 'die Brüder',
          },
          {
            id: 'c3',
            prompt: '___ Vater ist Lehrer. (my)',
            options: ['Mein', 'Meine', 'Meinen', 'Meiner'],
            answer: 'Mein',
          },
          {
            id: 'c4',
            prompt: 'die Großeltern = ?',
            options: ['grandparents', 'parents', 'siblings', 'cousins'],
            answer: 'grandparents',
          },
          {
            id: 'c5',
            prompt: 'Er ___ keine Schwester. (haben)',
            options: ['hat', 'hast', 'habe', 'haben'],
            answer: 'hat',
          },
          {
            id: 'c6',
            prompt: '___ Schwester ist 20. (his)',
            options: ['Seine', 'Sein', 'Ihr', 'Meine'],
            answer: 'Seine',
          },
          {
            id: 'c7',
            prompt: 'Which one is the male relative?',
            options: ['der Onkel', 'die Tante', 'die Cousine', 'die Tochter'],
            answer: 'der Onkel',
          },
          {
            id: 'c8',
            prompt: 'Ihr ___ eine Familie. (haben)',
            options: ['habt', 'haben', 'hast', 'hat'],
            answer: 'habt',
          },
        ],
      },
    ),
  ],
};
