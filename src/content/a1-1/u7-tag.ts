import { activity, byDe, quizDeEn, quizEmoji, spell, unit, vocabList } from '../builders';
import { separableForms } from '@/lib/german/conjugation';
import { formatDigital, informalTime, parseTime } from '@/lib/german/time';
import type { UnitContent } from './types';

const U = 'a1-1-tag';

const days = vocabList(U, 'Weekdays', [
  ['Montag', 'Monday', '1️⃣', 'der'],
  ['Dienstag', 'Tuesday', '2️⃣', 'der'],
  ['Mittwoch', 'Wednesday', '3️⃣', 'der'],
  ['Donnerstag', 'Thursday', '4️⃣', 'der'],
  ['Freitag', 'Friday', '5️⃣', 'der'],
  ['Samstag', 'Saturday', '🎉', 'der'],
  ['Sonntag', 'Sunday', '😌', 'der'],
]);

const dayParts = vocabList(U, 'Times of day', [
  ['Morgen', 'morning', '🌅', 'der'],
  ['Vormittag', 'late morning', '☕', 'der'],
  ['Mittag', 'noon', '🌞', 'der'],
  ['Nachmittag', 'afternoon', '🌤️', 'der'],
  ['Abend', 'evening', '🌆', 'der'],
  ['Nacht', 'night', '🌙', 'die'],
]);

const routine = vocabList(U, 'Daily routine', [
  ['aufstehen', 'to get up', '⏰'],
  ['frühstücken', 'to have breakfast', '🥐'],
  ['duschen', 'to take a shower', '🚿'],
  ['arbeiten', 'to work', '💼'],
  ['zu Mittag essen', 'to have lunch', '🍝'],
  ['einkaufen', 'to shop', '🛍️'],
  ['Deutsch lernen', 'to learn German', '📚'],
  ['anrufen', 'to call (phone)', '📞'],
  ['fernsehen', 'to watch TV', '📺'],
  ['zu Abend essen', 'to have dinner', '🍽️'],
  ['schlafen', 'to sleep', '😴'],
]);

const timeWords = vocabList(U, 'Time expressions', [
  ['die Uhr', 'clock / o’clock', '🕒', 'die'],
  ['die Stunde', 'hour', '⌛', 'die', 'Stunden'],
  ['die Minute', 'minute', '⏱️', 'die', 'Minuten'],
  ['halb', 'half (to the next hour)', '🌗'],
  ['Viertel', 'quarter', '🍰'],
  ['nach', 'past', '➡️'],
  ['vor', 'to / before', '⬅️'],
  ['Wie spät ist es?', 'What time is it?', '❓'],
  ['Wann …?', 'When …?', '📆'],
  ['heute', 'today', '📍'],
  ['am Wochenende', 'at the weekend', '🎉'],
  ['von … bis …', 'from … to …', '↔️'],
]);

const vocab = [...days, ...dayParts, ...routine, ...timeWords];

const sepTable = (
  id: string,
  verb: string,
  prefix: string,
  base: string,
  meaning: string,
  blanks: ('ich' | 'du' | 'er/sie/es' | 'wir' | 'ihr' | 'sie/Sie')[],
) => ({
  id,
  verb,
  meaning,
  forms: separableForms(prefix, base),
  blanks,
});

const readRound = (time: string, style: 'formal' | 'informal') => ({
  id: `r-${time.replace(':', '')}-${style}`,
  time,
  mode: 'read' as const,
  style,
});
const setRound = (time: string, style: 'formal' | 'informal') => ({
  id: `s-${time.replace(':', '')}-${style}`,
  time,
  mode: 'set' as const,
  style,
});

const listenTime = (time: string, wrong: string[]) => {
  const t = parseTime(time);
  const sentence = `Es ist ${informalTime(t)}.`;
  return {
    id: `lt-${time.replace(':', '')}`,
    speak: sentence,
    transcript: `${informalTime(t)} = ${formatDigital(t)}`,
    answer: formatDigital(t),
    options: [formatDigital(t), ...wrong.map((w) => formatDigital(parseTime(w)))],
  };
};

export const tag: UnitContent = {
  unit: unit({
    id: U,
    order: 7,
    title: 'Mein Tag',
    subtitle: 'Weekdays, clock time and daily routine',
    emoji: '⏰',
    goals: [
      'Name the weekdays and parts of the day',
      'Tell the time',
      'Describe your daily routine',
    ],
    grammar: [
      'Prepositions am, um, von … bis',
      'Separable verbs (aufstehen, einkaufen …)',
      'Time in everyday and official style',
    ],
    vocabFields: ['Weekdays', 'Times of day', 'Daily routine', 'Time expressions'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-weekdays',
      'flashcards',
      {
        title: 'Days of the week',
        description: 'Seven days – and one tiny word for “on”: am.',
        tags: ['vocabulary', 'weekdays'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        cards: days.map((d) => ({
          id: d.id,
          front: d.de,
          back: d.en,
          emoji: d.emoji,
          speak: d.de,
          note: `am ${d.de} = on ${d.en}`,
        })),
      },
    ),

    activity(
      U,
      'spell-weekdays',
      'spell',
      {
        title: 'Spell the weekdays',
        description: 'Unscramble and type the days.',
        tags: ['spelling', 'weekdays'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          ...spell(byDe(days, 'Montag', 'Dienstag', 'Freitag', 'Samstag'), 'unscramble').items,
          ...spell(byDe(days, 'Mittwoch', 'Donnerstag', 'Sonntag'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'sort-workday-weekend',
      'sortit',
      {
        title: 'Work week or weekend?',
        description: 'Which days belong to the working week?',
        tags: ['vocabulary', 'weekdays'],
        difficulty: 1,
        estMinutes: 2,
      },
      {
        instruction: 'Working week or weekend?',
        buckets: [
          { id: 'week', label: 'Montag–Freitag', emoji: '💼' },
          { id: 'weekend', label: 'Wochenende', emoji: '🎉' },
        ],
        items: days.map((d) => ({
          id: d.id,
          text: d.de,
          bucket: d.de === 'Samstag' || d.de === 'Sonntag' ? 'weekend' : 'week',
          speak: d.de,
        })),
      },
    ),

    activity(
      U,
      'quiz-day-parts',
      'quiz',
      {
        title: 'Times of day',
        description: 'Morning, noon, evening – match picture and word.',
        tags: ['vocabulary', 'daily-routine'],
        difficulty: 1,
        estMinutes: 2,
      },
      {
        questions: quizEmoji(dayParts, dayParts).questions.map((q) => ({
          ...q,
          prompt: 'What part of the day?',
        })),
      },
    ),

    activity(
      U,
      'quiz-routine',
      'quiz',
      {
        title: 'My daily routine',
        description: 'Learn the verbs that describe your day.',
        tags: ['vocabulary', 'daily-routine'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(routine, routine),
    ),

    activity(
      U,
      'clock-read',
      'clock',
      {
        title: 'Read the clock',
        description: 'What time is it? Everyday speech and official time.',
        tags: ['vocabulary', 'time-clock'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        rounds: [
          readRound('03:00', 'informal'),
          readRound('07:30', 'informal'),
          readRound('09:15', 'informal'),
          readRound('10:45', 'informal'),
          readRound('14:20', 'informal'),
          readRound('18:50', 'informal'),
          readRound('13:30', 'formal'),
          readRound('20:15', 'formal'),
        ],
      },
    ),

    activity(
      U,
      'clock-set',
      'clock',
      {
        title: 'Set the clock',
        description: 'Hear the time in words and set the hands.',
        tags: ['vocabulary', 'time-clock'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        rounds: [
          setRound('02:30', 'informal'),
          setRound('06:15', 'informal'),
          setRound('08:45', 'informal'),
          setRound('10:00', 'informal'),
          setRound('05:10', 'informal'),
          setRound('16:40', 'formal'),
        ],
      },
    ),

    activity(
      U,
      'listen-time',
      'listen',
      {
        title: 'What time is it?',
        description: 'Listen to the time and pick the digital clock.',
        tags: ['listening', 'time-clock'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          listenTime('07:30', ['08:30', '07:15', '06:30']),
          listenTime('09:15', ['09:45', '08:15', '10:15']),
          listenTime('10:45', ['10:15', '11:15', '09:45']),
          listenTime('03:00', ['02:00', '04:00', '03:30']),
          listenTime('14:20', ['14:40', '13:20', '14:10']),
          listenTime('06:10', ['06:50', '05:10', '06:20']),
        ],
      },
    ),

    activity(
      U,
      'gap-prepositions',
      'gapfill',
      {
        title: 'am, um, von … bis',
        description: 'Pick the right preposition for days and clock times.',
        tags: ['grammar', 'prepositions-of-time', 'weekdays'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'p1',
            text: '___ Montag habe ich Deutschkurs.',
            answer: 'Am',
            options: ['Am', 'Um', 'Von', 'In'],
            translation: 'On Monday I have German class.',
            explanation: 'Days and parts of the day: am (am Montag, am Abend).',
          },
          {
            id: 'p2',
            text: 'Der Kurs beginnt ___ neun Uhr.',
            answer: 'um',
            options: ['am', 'um', 'von', 'bis'],
            translation: 'The course starts at nine o’clock.',
            explanation: 'Clock times: um (um neun Uhr).',
          },
          {
            id: 'p3',
            text: 'Ich arbeite von acht ___ siebzehn Uhr.',
            answer: 'bis',
            options: ['bis', 'um', 'am', 'nach'],
            translation: 'I work from eight to five p.m.',
          },
          {
            id: 'p4',
            text: 'Ich arbeite ___ acht bis siebzehn Uhr.',
            answer: 'von',
            options: ['von', 'um', 'am', 'vor'],
            translation: 'I work from eight to five p.m.',
          },
          {
            id: 'p5',
            text: '___ Wochenende schlafe ich lange.',
            answer: 'Am',
            options: ['Am', 'Um', 'Von', 'Bis'],
            translation: 'At the weekend I sleep late.',
          },
          {
            id: 'p6',
            text: 'Wir essen ___ halb eins.',
            answer: 'um',
            options: ['um', 'am', 'von', 'bis'],
            translation: 'We eat at half past twelve.',
          },
          {
            id: 'p7',
            text: 'Der Film läuft ___ Abend.',
            answer: 'am',
            options: ['am', 'um', 'von', 'bis'],
            translation: 'The film is on in the evening.',
          },
          {
            id: 'p8',
            text: 'Das Geschäft ist von Montag ___ Freitag offen.',
            answer: 'bis',
            options: ['bis', 'um', 'am', 'nach'],
            translation: 'The shop is open from Monday to Friday.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-am-um',
      'sortit',
      {
        title: 'am or um?',
        description: 'Days and parts of the day take am – clock times take um.',
        tags: ['grammar', 'prepositions-of-time'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Which preposition fits?',
        buckets: [
          { id: 'am', label: 'am …', emoji: '📅' },
          { id: 'um', label: 'um …', emoji: '🕒' },
        ],
        items: [
          { id: 'a1', text: 'Montag', bucket: 'am' },
          { id: 'a2', text: 'acht Uhr', bucket: 'um' },
          { id: 'a3', text: 'Abend', bucket: 'am' },
          { id: 'a4', text: 'halb drei', bucket: 'um' },
          { id: 'a5', text: 'Wochenende', bucket: 'am' },
          { id: 'a6', text: 'Viertel nach vier', bucket: 'um' },
          { id: 'a7', text: 'Samstag', bucket: 'am' },
          { id: 'a8', text: '12:30 Uhr', bucket: 'um' },
          { id: 'a9', text: 'Morgen', bucket: 'am' },
          { id: 'a10', text: 'zehn vor sieben', bucket: 'um' },
        ],
      },
    ),

    activity(
      U,
      'sort-separable',
      'sortit',
      {
        title: 'Separable or not?',
        description: 'Some verbs split: “Ich stehe um 7 Uhr auf.” Can you spot them?',
        tags: ['grammar', 'separable-verbs', 'daily-routine'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Does this verb split into two parts?',
        buckets: [
          { id: 'sep', label: 'Separable', emoji: '✂️' },
          { id: 'not', label: 'Not separable', emoji: '🔗' },
        ],
        items: [
          { id: 'v1', text: 'aufstehen', bucket: 'sep', speak: 'aufstehen' },
          { id: 'v2', text: 'frühstücken', bucket: 'not', speak: 'frühstücken' },
          { id: 'v3', text: 'einkaufen', bucket: 'sep', speak: 'einkaufen' },
          { id: 'v4', text: 'arbeiten', bucket: 'not', speak: 'arbeiten' },
          { id: 'v5', text: 'fernsehen', bucket: 'sep', speak: 'fernsehen' },
          { id: 'v6', text: 'duschen', bucket: 'not', speak: 'duschen' },
          { id: 'v7', text: 'anrufen', bucket: 'sep', speak: 'anrufen' },
          { id: 'v8', text: 'lernen', bucket: 'not', speak: 'lernen' },
          { id: 'v9', text: 'mitkommen', bucket: 'sep', speak: 'mitkommen' },
          { id: 'v10', text: 'schlafen', bucket: 'not', speak: 'schlafen' },
        ],
      },
    ),

    activity(
      U,
      'conj-separable',
      'conjugation',
      {
        title: 'Separable verbs in action',
        description: 'The prefix jumps to the end of the sentence – complete the forms.',
        tags: ['grammar', 'separable-verbs', 'verb-conjugation'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        tables: [
          sepTable('aufstehen', 'aufstehen', 'auf', 'stehen', 'to get up', [
            'ich',
            'du',
            'er/sie/es',
          ]),
          sepTable('einkaufen', 'einkaufen', 'ein', 'kaufen', 'to shop', ['ich', 'wir', 'ihr']),
          sepTable('fernsehen', 'fernsehen', 'fern', 'sehen', 'to watch TV', [
            'ich',
            'du',
            'er/sie/es',
          ]),
          sepTable('anrufen', 'anrufen', 'an', 'rufen', 'to call', ['du', 'er/sie/es', 'wir']),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'My day in sentences',
        description: 'Build sentences with times, prepositions and separable verbs.',
        tags: ['grammar', 'separable-verbs', 'prepositions-of-time', 'word-order'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'I get up at seven o’clock.',
            words: ['Ich', 'stehe', 'um', 'sieben', 'Uhr', 'auf.'],
            alsoAccept: ['Um sieben Uhr stehe ich auf.'],
            explanation: 'The prefix “auf” goes to the end.',
          },
          { id: 's2', translation: 'When do you get up?', words: ['Wann', 'stehst', 'du', 'auf?'] },
          {
            id: 's3',
            translation: 'In the evening I watch TV.',
            words: ['Am', 'Abend', 'sehe', 'ich', 'fern.'],
            alsoAccept: ['Ich sehe am Abend fern.'],
          },
          {
            id: 's4',
            translation: 'She shops on Saturday.',
            words: ['Sie', 'kauft', 'am', 'Samstag', 'ein.'],
            alsoAccept: ['Am Samstag kauft sie ein.'],
          },
          {
            id: 's5',
            translation: 'I work from eight to five.',
            words: ['Ich', 'arbeite', 'von', 'acht', 'bis', 'siebzehn', 'Uhr.'],
          },
          {
            id: 's6',
            translation: 'The course starts at nine o’clock.',
            words: ['Der', 'Kurs', 'beginnt', 'um', 'neun', 'Uhr.'],
          },
          {
            id: 's7',
            translation: 'I call you at half past seven.',
            words: ['Ich', 'rufe', 'dich', 'um', 'halb', 'acht', 'an.'],
            alsoAccept: ['Um halb acht rufe ich dich an.'],
          },
          { id: 's8', translation: 'What time is it?', words: ['Wie', 'spät', 'ist', 'es?'] },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Plans and times',
        description: 'Ask for the time, talk about your day and make an appointment.',
        tags: ['communication', 'time-clock', 'daily-routine'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'time',
            title: 'Excuse me, what time is it?',
            emoji: '🕒',
            setting: 'You ask a stranger on the street.',
            turns: [
              {
                kind: 'you',
                options: [
                  { text: 'Entschuldigung, wie spät ist es?', correct: true },
                  {
                    text: 'Entschuldigung, wo wohnst du?',
                    correct: false,
                    feedback: 'You want to know the time.',
                  },
                  {
                    text: 'Entschuldigung, wie heißt du?',
                    correct: false,
                    feedback: 'You want to know the time.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Passant',
                text: 'Es ist halb drei.',
                translation: 'It is half past two.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Danke! Auf Wiedersehen!', correct: true },
                  { text: 'Gute Nacht!', correct: false, feedback: 'It is the afternoon.' },
                  {
                    text: 'Wie geht’s?',
                    correct: false,
                    feedback: 'You just wanted to know the time – thank them.',
                  },
                ],
              },
            ],
          },
          {
            id: 'routine',
            title: 'Your day',
            emoji: '🌅',
            setting: 'Mia asks about your daily routine.',
            turns: [
              {
                kind: 'npc',
                who: 'Mia',
                text: 'Wann stehst du auf?',
                translation: 'When do you get up?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ich stehe um sieben Uhr auf.', correct: true },
                  {
                    text: 'Ich aufstehe um sieben Uhr.',
                    correct: false,
                    feedback: 'Separable verbs split: stehe … auf.',
                  },
                  {
                    text: 'Ich stehe am sieben Uhr auf.',
                    correct: false,
                    feedback: 'Clock times take “um”, not “am”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Mia',
                text: 'Und wann arbeitest du?',
                translation: 'And when do you work?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ich arbeite von neun bis siebzehn Uhr.', correct: true },
                  {
                    text: 'Ich arbeite von neun um siebzehn Uhr.',
                    correct: false,
                    feedback: 'from … to = von … bis.',
                  },
                  {
                    text: 'Ich arbeite am neun Uhr.',
                    correct: false,
                    feedback: 'Use von … bis for a period.',
                  },
                ],
              },
            ],
          },
          {
            id: 'date',
            title: 'Making an appointment',
            emoji: '📅',
            setting: 'You arrange to meet Paul.',
            turns: [
              {
                kind: 'npc',
                who: 'Paul',
                text: 'Hast du am Samstag Zeit?',
                translation: 'Do you have time on Saturday?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ja, am Samstag habe ich Zeit.', correct: true },
                  {
                    text: 'Ja, um Samstag habe ich Zeit.',
                    correct: false,
                    feedback: 'Weekdays take “am”.',
                  },
                  {
                    text: 'Ja, ich Zeit habe am Samstag.',
                    correct: false,
                    feedback: 'The verb must be in second position.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Paul',
                text: 'Super! Um wie viel Uhr?',
                translation: 'Great! At what time?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Um drei Uhr.', correct: true },
                  { text: 'Am drei Uhr.', correct: false, feedback: 'Clock times take “um”.' },
                  { text: 'Montag.', correct: false, feedback: 'He asked for a time, not a day.' },
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
        title: 'Time blitz',
        description: 'Prepositions, separable verbs and clock times – true or false?',
        tags: ['grammar', 'prepositions-of-time', 'separable-verbs', 'time-clock'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'Der Kurs beginnt um 9 Uhr.', isTrue: true },
          {
            id: 'b2',
            text: 'Der Kurs beginnt am 9 Uhr.',
            isTrue: false,
            explanation: 'Clock time → um',
          },
          { id: 'b3', text: 'Ich stehe um 7 Uhr auf.', isTrue: true },
          {
            id: 'b4',
            text: 'Ich aufstehe um 7 Uhr.',
            isTrue: false,
            explanation: 'Ich stehe … auf.',
          },
          { id: 'b5', text: 'halb drei = 2:30', isTrue: true },
          {
            id: 'b6',
            text: 'halb drei = 3:30',
            isTrue: false,
            explanation: 'halb drei = half to three = 2:30',
          },
          { id: 'b7', text: 'Viertel vor vier = 3:45', isTrue: true },
          { id: 'b8', text: 'Ich arbeite am Montag.', isTrue: true },
          { id: 'b9', text: 'Ich arbeite um Montag.', isTrue: false, explanation: 'Weekday → am' },
          { id: 'b10', text: 'Sonntag kommt nach Samstag.', isTrue: true },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Days, times, prepositions and separable verbs.',
        tags: ['vocabulary', 'grammar', 'time-clock'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Which day comes after Dienstag?',
            options: ['Mittwoch', 'Montag', 'Donnerstag', 'Freitag'],
            answer: 'Mittwoch',
          },
          {
            id: 'c2',
            prompt: 'Der Film beginnt ___ 20 Uhr.',
            options: ['um', 'am', 'von', 'bis'],
            answer: 'um',
          },
          {
            id: 'c3',
            prompt: 'Which verb is separable?',
            options: ['aufstehen', 'frühstücken', 'arbeiten', 'lernen'],
            answer: 'aufstehen',
          },
          {
            id: 'c4',
            prompt: '“halb vier” is …',
            options: ['3:30', '4:30', '3:45', '4:15'],
            answer: '3:30',
          },
          {
            id: 'c5',
            prompt: 'Ich ___ am Samstag ___. (einkaufen)',
            options: ['kaufe … ein', 'einkaufe … –', 'kaufe ein … am', 'ein … kaufe'],
            answer: 'kaufe … ein',
          },
          {
            id: 'c6',
            prompt: 'Which sentence is correct?',
            options: [
              'Ich arbeite von Montag bis Freitag.',
              'Ich arbeite am Montag um Freitag.',
              'Ich arbeite um Montag bis Freitag.',
              'Ich von Montag arbeite bis Freitag.',
            ],
            answer: 'Ich arbeite von Montag bis Freitag.',
          },
          {
            id: 'c7',
            prompt: 'Wie spät ist es? 15:15 (everyday speech)',
            options: ['Viertel nach drei', 'Viertel vor drei', 'halb vier', 'Viertel nach vier'],
            answer: 'Viertel nach drei',
          },
          {
            id: 'c8',
            prompt: 'die Nacht = ?',
            options: ['night', 'evening', 'noon', 'morning'],
            answer: 'night',
          },
        ],
      },
    ),
  ],
};
