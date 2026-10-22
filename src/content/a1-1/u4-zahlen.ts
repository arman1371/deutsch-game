import { activity, spell, unit, vocabList } from '../builders';
import { digitsToGerman, numberToGerman, spellOut } from '@/lib/german/numbers';
import type { UnitContent } from './types';

const U = 'a1-1-zahlen';

const NUMBERS = [...Array.from({ length: 21 }, (_, i) => i), 30, 40, 50, 60, 70, 80, 90, 100, 1000];
const numberVocab = vocabList(
  U,
  'Numbers',
  NUMBERS.map((n) => [numberToGerman(n), String(n)] as const),
);
const num = (n: number) => numberVocab.find((v) => v.en === String(n))!;

const words = vocabList(U, 'Phone & address', [
  ['die Telefonnummer', 'phone number', '📞', 'die', 'Telefonnummern'],
  ['die Handynummer', 'mobile number', '📱', 'die', 'Handynummern'],
  ['die Adresse', 'address', '📮', 'die', 'Adressen'],
  ['die Straße', 'street', '🛣️', 'die', 'Straßen'],
  ['die Hausnummer', 'house number', '🏠', 'die', 'Hausnummern'],
  ['die Postleitzahl', 'postcode', '✉️', 'die', 'Postleitzahlen'],
  ['die E-Mail-Adresse', 'email address', '📧', 'die', 'E-Mail-Adressen'],
  ['der Buchstabe', 'letter', '🔠', 'der', 'Buchstaben'],
  ['buchstabieren', 'to spell', '🔤'],
  ['Wie schreibt man das?', 'How do you spell that?', '✍️'],
  ['Wie bitte?', 'Pardon?', '👂'],
  ['Noch einmal, bitte.', 'Once more, please.', '🔁'],
  ['Wie alt bist du?', 'How old are you?', '🎂'],
  ['plus', 'plus', '➕'],
  ['minus', 'minus', '➖'],
]);
const vocab = [...numberVocab, ...words];

const numCard = (n: number) => ({
  id: num(n).id,
  front: String(n),
  back: numberToGerman(n),
  speak: numberToGerman(n),
});

/** Question "digits → word" with hand-picked look-alike distractors. */
const digitQuestion = (n: number, wrong: number[], explanation?: string) => ({
  id: `dq-${n}`,
  prompt: String(n),
  speak: numberToGerman(n),
  options: [n, ...wrong].map(numberToGerman),
  answer: numberToGerman(n),
  ...(explanation ? { explanation } : {}),
});
const listenQuestion = (n: number, wrong: number[]) => ({
  id: `ln-${n}`,
  speak: numberToGerman(n),
  transcript: `${numberToGerman(n)} = ${n}`,
  options: [n, ...wrong].map(String),
  answer: String(n),
});

const phone = (digits: string) => ({
  id: `ph-${digits}`,
  mode: 'dictation' as const,
  answer: digits,
  numeric: true,
  hint: 'Type the phone number you hear (digits only).',
  speak: digitsToGerman(digits),
});
const spelledName = (name: string) => ({
  id: `nm-${name}`,
  mode: 'dictation' as const,
  answer: name,
  hint: 'Type the name that is spelled out.',
  speak: spellOut(name),
});

const letterQuestion = (letter: string, name: string, wrong: string[]) => ({
  id: `lt-${letter}`,
  prompt: `How is “${letter === 'ß' ? 'ß' : letter.toUpperCase()}” called in German?`,
  options: [name, ...wrong],
  answer: name,
  speak: name,
});

const sentenceTrue = (n: number) => ({
  id: `t-${n}`,
  text: `${n} = ${numberToGerman(n)}`,
  isTrue: true,
});
const sentenceFalse = (n: number, other: number) => ({
  id: `f-${n}`,
  text: `${n} = ${numberToGerman(other)}`,
  isTrue: false,
  explanation: `${n} = ${numberToGerman(n)}`,
});

export const zahlen: UnitContent = {
  unit: unit({
    id: U,
    order: 4,
    title: 'ABC & Zahlen',
    subtitle: 'Spell, count and give phone numbers and addresses',
    emoji: '🔢',
    goals: [
      'Spell words and names with the German alphabet',
      'Count from 0 to 100 and beyond',
      'Give your phone number and address',
    ],
    grammar: ['Numbers 0–1000', 'W-questions: wie alt, wie schreibt man'],
    vocabFields: ['Numbers', 'Phone & address', 'Alphabet'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-numbers',
      'flashcards',
      {
        title: 'Numbers 0–12',
        description: 'Flip the cards: digit on the front, German on the back.',
        tags: ['vocabulary', 'numbers'],
        difficulty: 1,
        estMinutes: 3,
      },
      { cards: Array.from({ length: 13 }, (_, n) => numCard(n)) },
    ),

    activity(
      U,
      'quiz-digits',
      'quiz',
      {
        title: 'Digits to words',
        description: 'Which German number word matches the digits?',
        tags: ['vocabulary', 'numbers'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        questions: [
          digitQuestion(3, [4, 8, 13]),
          digitQuestion(7, [6, 17, 70]),
          digitQuestion(11, [10, 12, 1]),
          digitQuestion(12, [2, 20, 11]),
          digitQuestion(15, [5, 50, 14]),
          digitQuestion(20, [2, 12, 10]),
        ],
      },
    ),

    activity(
      U,
      'memory-teens-tens',
      'memory',
      {
        title: 'Number memory',
        description: 'Match the digits with the number words – careful with 13/30!',
        tags: ['vocabulary', 'numbers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        pairs: [13, 30, 16, 60, 17, 70].map((n) => ({
          id: `m-${n}`,
          a: String(n),
          b: numberToGerman(n),
        })),
      },
    ),

    activity(
      U,
      'sort-zehn-zig',
      'sortit',
      {
        title: '-zehn or -zig?',
        description: 'Teens end in -zehn, tens in -zig. Can you keep them apart?',
        tags: ['vocabulary', 'numbers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Is it 13–19 or 30–90?',
        buckets: [
          { id: 'teen', label: '13–19', emoji: '🧒' },
          { id: 'ten', label: '30–90', emoji: '🔟' },
        ],
        items: [13, 14, 15, 16, 17, 18, 30, 40, 50, 60, 70, 80].map((n) => ({
          id: `s-${n}`,
          text: numberToGerman(n),
          bucket: n < 20 ? 'teen' : 'ten',
          speak: numberToGerman(n),
        })),
      },
    ),

    activity(
      U,
      'listen-numbers',
      'listen',
      {
        title: 'Hear the number',
        description: 'Listen and pick the digits.',
        tags: ['listening', 'numbers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          listenQuestion(16, [6, 60, 26]),
          listenQuestion(7, [17, 70, 6]),
          listenQuestion(13, [30, 3, 31]),
          listenQuestion(40, [14, 4, 44]),
          listenQuestion(19, [90, 9, 91]),
          listenQuestion(21, [12, 20, 11]),
        ],
      },
    ),

    activity(
      U,
      'spell-numbers',
      'spell',
      {
        title: 'Write the number',
        description: 'Unscramble and type number words.',
        tags: ['spelling', 'numbers'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          ...spell([num(7), num(12), num(8)], 'unscramble').items,
          {
            id: 'ty-21',
            mode: 'type',
            answer: 'einundzwanzig',
            hint: '21',
            speak: 'einundzwanzig',
          },
          {
            id: 'ty-45',
            mode: 'type',
            answer: 'fünfundvierzig',
            hint: '45',
            speak: 'fünfundvierzig',
          },
          {
            id: 'ty-66',
            mode: 'type',
            answer: 'sechsundsechzig',
            hint: '66',
            speak: 'sechsundsechzig',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-math',
      'gapfill',
      {
        title: 'Number maths',
        description: 'Calculate and write the answer as a number word.',
        tags: ['grammar', 'numbers'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          { id: 'm1', text: 'zwei plus drei ist ___', answer: 'fünf', translation: '2 + 3 = ?' },
          { id: 'm2', text: 'zehn minus vier ist ___', answer: 'sechs', translation: '10 − 4 = ?' },
          {
            id: 'm3',
            text: 'zwölf plus acht ist ___',
            answer: 'zwanzig',
            translation: '12 + 8 = ?',
          },
          {
            id: 'm4',
            text: 'fünfzehn minus fünf ist ___',
            answer: 'zehn',
            translation: '15 − 5 = ?',
          },
          {
            id: 'm5',
            text: 'zwanzig plus zwanzig ist ___',
            answer: 'vierzig',
            translation: '20 + 20 = ?',
          },
          {
            id: 'm6',
            text: 'dreißig plus vierzig ist ___',
            answer: 'siebzig',
            translation: '30 + 40 = ?',
          },
        ],
      },
    ),

    activity(
      U,
      'dictation-phone',
      'spell',
      {
        title: 'Phone number dictation',
        description: 'Listen to the phone number and type the digits.',
        tags: ['listening', 'numbers', 'phone-address'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [phone('01512345678'), phone('0301234567'), phone('0176987654'), phone('040555777')],
      },
    ),

    activity(
      U,
      'alphabet',
      'quiz',
      {
        title: 'The German alphabet',
        description: 'Some letters sound different from English. Which name is right?',
        tags: ['vocabulary', 'alphabet', 'spelling'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        questions: [
          letterQuestion('j', 'jot', ['ge', 'je', 'ypsilon']),
          letterQuestion('w', 'we', ['fau', 'ge', 'ix']),
          letterQuestion('v', 'fau', ['we', 'be', 'ef']),
          letterQuestion('z', 'zett', ['ypsilon', 'ce', 'es']),
          letterQuestion('y', 'ypsilon', ['ix', 'zett', 'ü']),
          letterQuestion('q', 'ku', ['ka', 'ge', 'ce']),
          letterQuestion('ß', 'Eszett', ['Umlaut', 'ypsilon', 'zett']),
        ],
      },
    ),

    activity(
      U,
      'dictation-names',
      'spell',
      {
        title: 'Spell the name',
        description: 'Someone spells a name letter by letter – write it down.',
        tags: ['listening', 'alphabet', 'spelling'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        items: [
          spelledName('Becker'),
          spelledName('Schmidt'),
          spelledName('Müller'),
          spelledName('Fischer'),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Phone, address, age',
        description: 'Build the questions and answers you need at the reception.',
        tags: ['grammar', 'questions', 'word-order', 'phone-address'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'What is your phone number?',
            words: ['Wie', 'ist', 'deine', 'Telefonnummer?'],
          },
          {
            id: 's2',
            translation: 'My number is nine eight seven.',
            words: ['Meine', 'Nummer', 'ist', 'neun', 'acht', 'sieben.'],
          },
          {
            id: 's3',
            translation: 'What is your address?',
            words: ['Wie', 'ist', 'deine', 'Adresse?'],
          },
          {
            id: 's4',
            translation: 'My address is Hauptstraße five.',
            words: ['Meine', 'Adresse', 'ist', 'Hauptstraße', 'fünf.'],
          },
          {
            id: 's5',
            translation: 'How do you spell that?',
            words: ['Wie', 'schreibt', 'man', 'das?'],
          },
          { id: 's6', translation: 'Once more, please.', words: ['Noch', 'einmal,', 'bitte.'] },
          { id: 's7', translation: 'How old are you?', words: ['Wie', 'alt', 'bist', 'du?'] },
          {
            id: 's8',
            translation: 'I am twenty years old.',
            words: ['Ich', 'bin', 'zwanzig', 'Jahre', 'alt.'],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'At the reception',
        description: 'Spell your name, give your number and ask for repetition.',
        tags: ['communication', 'phone-address', 'alphabet'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        scenes: [
          {
            id: 'hotel',
            title: 'Hotel check-in',
            emoji: '🏨',
            setting: 'You check in. The receptionist needs your details.',
            turns: [
              {
                kind: 'npc',
                who: 'Rezeption',
                text: 'Guten Tag! Wie ist Ihr Name, bitte?',
                translation: 'Good day! What is your name, please?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Mein Name ist Berger.', correct: true },
                  {
                    text: 'Ich bin zwanzig Jahre alt.',
                    correct: false,
                    feedback: 'She asked for your name, not your age.',
                  },
                  {
                    text: 'Meine Telefonnummer ist drei.',
                    correct: false,
                    feedback: 'That is not a name.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Rezeption',
                text: 'Wie schreibt man das?',
                translation: 'How do you spell that?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'B – E – R – G – E – R', correct: true },
                  {
                    text: 'Berger, Berger',
                    correct: false,
                    feedback: 'She wants the letters one by one.',
                  },
                  {
                    text: 'Ja, bitte.',
                    correct: false,
                    feedback: 'That does not answer the question.',
                  },
                ],
              },
            ],
          },
          {
            id: 'phone',
            title: 'Swapping numbers',
            emoji: '📱',
            setting: 'A new classmate asks for your number.',
            turns: [
              {
                kind: 'npc',
                who: 'Jan',
                text: 'Wie ist deine Handynummer?',
                translation: 'What is your mobile number?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Meine Nummer ist null eins fünf eins, zwei drei vier.', correct: true },
                  {
                    text: 'Ich heiße null eins fünf eins.',
                    correct: false,
                    feedback: '“heißen” is for names, not numbers.',
                  },
                  {
                    text: 'Ich wohne in zwei drei vier.',
                    correct: false,
                    feedback: 'That is an address pattern, not a phone number.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Jan',
                text: 'Meine Nummer ist vier fünf sechs, sieben acht.',
                translation: 'My number is 456 78.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Wie bitte? Noch einmal, bitte.', correct: true },
                  {
                    text: 'Guten Morgen!',
                    correct: false,
                    feedback: 'You did not understand – ask him to repeat it.',
                  },
                  {
                    text: 'Tschüss!',
                    correct: false,
                    feedback: 'Do not leave yet – you need the number!',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Jan',
                text: 'Vier fünf sechs, sieben acht.',
                translation: '456 78.',
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
        title: 'Number blitz',
        description: 'Is the number word right? Decide fast!',
        tags: ['vocabulary', 'numbers'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          sentenceTrue(16),
          sentenceFalse(60, 16),
          sentenceTrue(13),
          sentenceFalse(30, 13),
          sentenceTrue(17),
          sentenceFalse(7, 17),
          sentenceTrue(21),
          sentenceFalse(40, 14),
          sentenceTrue(99),
          sentenceFalse(12, 20),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Numbers, letters and phone talk – all in one quiz.',
        tags: ['vocabulary', 'numbers', 'alphabet'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          digitQuestion(14, [4, 40, 41]),
          digitQuestion(18, [8, 80, 81]),
          digitQuestion(33, [13, 30, 23]),
          {
            id: 'c4',
            prompt: 'How do you ask for someone’s phone number?',
            options: [
              'Wie ist deine Telefonnummer?',
              'Wie alt bist du?',
              'Wie heißt du?',
              'Woher kommst du?',
            ],
            answer: 'Wie ist deine Telefonnummer?',
          },
          {
            id: 'c5',
            prompt: 'You did not understand. What do you say?',
            options: ['Wie bitte?', 'Guten Tag!', 'Danke schön!', 'Bis später!'],
            answer: 'Wie bitte?',
          },
          {
            id: 'c6',
            prompt: 'die Postleitzahl = ?',
            options: ['postcode', 'phone number', 'street', 'email'],
            answer: 'postcode',
          },
          {
            id: 'c7',
            prompt: 'Which letter is called “zett”?',
            options: ['Z', 'S', 'C', 'ß'],
            answer: 'Z',
          },
          {
            id: 'c8',
            prompt: 'Ich bin ___ Jahre alt. (25)',
            options: ['fünfundzwanzig', 'zwanzigfünf', 'fünfzwanzig', 'zweiundfünfzig'],
            answer: 'fünfundzwanzig',
            explanation: 'German says the ones first: 5 + and + 20.',
          },
        ],
      },
    ),
  ],
};
