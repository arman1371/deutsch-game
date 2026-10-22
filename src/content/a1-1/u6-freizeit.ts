import { activity, flashcards, memory, quizEmoji, spell, unit, vocabList } from '../builders';
import { conjugate } from '@/lib/german/conjugation';
import type { UnitContent } from './types';

const U = 'a1-1-freizeit';

const vocab = vocabList(U, 'Hobbies', [
  ['Fußball spielen', 'to play football', '⚽'],
  ['Tennis spielen', 'to play tennis', '🎾'],
  ['Gitarre spielen', 'to play the guitar', '🎸'],
  ['Klavier spielen', 'to play the piano', '🎹'],
  ['schwimmen', 'to swim', '🏊'],
  ['tanzen', 'to dance', '💃'],
  ['singen', 'to sing', '🎤'],
  ['kochen', 'to cook', '🍳'],
  ['lesen', 'to read', '📖'],
  ['malen', 'to paint', '🎨'],
  ['wandern', 'to hike', '🥾'],
  ['reisen', 'to travel', '🧳'],
  ['Rad fahren', 'to ride a bike', '🚴'],
  ['joggen', 'to jog', '🏃'],
  ['Musik hören', 'to listen to music', '🎧'],
  ['Freunde treffen', 'to meet friends', '🧑‍🤝‍🧑'],
  ['ins Kino gehen', 'to go to the cinema', '🎬'],
  ['schlafen', 'to sleep', '😴'],
  ['das Hobby', 'hobby', '⭐', 'das', 'Hobbys'],
  ['die Freizeit', 'free time', '🕹️', 'die'],
  ['gern', 'gladly / like to', '😍'],
  ['nicht gern', 'do not like to', '😒'],
  ['sehr gut', 'very well', '🌟'],
  ['am Wochenende', 'at the weekend', '🎉'],
  ['Was machst du in deiner Freizeit?', 'What do you do in your free time?', '❓'],
]);

const hobbies = vocab.slice(0, 18);

const table = (
  verb: string,
  meaning: string,
  blanks: ('ich' | 'du' | 'er/sie/es' | 'wir' | 'ihr' | 'sie/Sie')[],
  id: string,
) => ({
  id,
  verb,
  meaning,
  forms: conjugate(verb),
  blanks,
});

export const freizeit: UnitContent = {
  unit: unit({
    id: U,
    order: 6,
    title: 'Freizeit',
    subtitle: 'Hobbies and free time',
    emoji: '🎸',
    goals: [
      'Talk about your hobbies',
      'Say what you can and want to do',
      'Ask others about their free time',
    ],
    grammar: [
      'Modal verbs können and wollen',
      'Verb at the end of the sentence',
      'gern / nicht gern',
    ],
    vocabFields: ['Hobbies'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-hobbies',
      'flashcards',
      {
        title: 'Hobby cards',
        description: 'Discover what people do in their free time.',
        tags: ['vocabulary', 'hobbies'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(hobbies.slice(0, 14)),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'What are they doing?',
        description: 'Look at the picture and find the German hobby.',
        tags: ['vocabulary', 'hobbies'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        questions: quizEmoji(hobbies, hobbies).questions.map((q) => ({
          ...q,
          prompt: 'Which hobby is this?',
        })),
      },
    ),

    activity(
      U,
      'memory-hobbies',
      'memory',
      {
        title: 'Hobby memory',
        description: 'Match each hobby with its picture.',
        tags: ['vocabulary', 'hobbies'],
        difficulty: 1,
        estMinutes: 3,
      },
      memory(
        hobbies
          .slice(0, 8)
          .filter((v) => !['Rad fahren', 'Klavier spielen'].includes(v.de))
          .slice(0, 7),
        'emoji',
      ),
    ),

    activity(
      U,
      'sort-categories',
      'sortit',
      {
        title: 'Sport, music or home?',
        description: 'Sort the hobbies into categories.',
        tags: ['vocabulary', 'hobbies'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        instruction: 'Where does this hobby belong?',
        buckets: [
          { id: 'sport', label: 'Sport', emoji: '🏅' },
          { id: 'musik', label: 'Musik', emoji: '🎵' },
          { id: 'zuhause', label: 'Zu Hause', emoji: '🏠' },
        ],
        items: [
          { id: 'a1', text: 'Fußball spielen', bucket: 'sport' },
          { id: 'a2', text: 'schwimmen', bucket: 'sport' },
          { id: 'a3', text: 'Tennis spielen', bucket: 'sport' },
          { id: 'a4', text: 'Gitarre spielen', bucket: 'musik' },
          { id: 'a5', text: 'singen', bucket: 'musik' },
          { id: 'a6', text: 'Klavier spielen', bucket: 'musik' },
          { id: 'a7', text: 'kochen', bucket: 'zuhause' },
          { id: 'a8', text: 'lesen', bucket: 'zuhause' },
          { id: 'a9', text: 'malen', bucket: 'zuhause' },
          { id: 'a10', text: 'joggen', bucket: 'sport' },
        ],
      },
    ),

    activity(
      U,
      'conj-modals',
      'conjugation',
      {
        title: 'können & wollen',
        description: 'These two modal verbs change their stem – learn the pattern.',
        tags: ['grammar', 'verb-conjugation', 'modal-verbs'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          table('können', 'can / to be able to', ['ich', 'du', 'er/sie/es'], 'koennen-1'),
          table('wollen', 'to want to', ['ich', 'du', 'er/sie/es'], 'wollen-1'),
          table('können', 'can / to be able to', ['wir', 'ihr', 'sie/Sie'], 'koennen-2'),
          table('wollen', 'to want to', ['wir', 'ihr', 'sie/Sie'], 'wollen-2'),
          table('lesen', 'to read', ['du', 'er/sie/es', 'ihr'], 'lesen-1'),
          table('fahren', 'to drive / ride', ['du', 'er/sie/es', 'wir'], 'fahren-1'),
        ],
      },
    ),

    activity(
      U,
      'gap-gern',
      'gapfill',
      {
        title: 'What do you like?',
        description: 'Fill in the missing word about hobbies.',
        tags: ['grammar', 'hobbies', 'verb-conjugation'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Ich spiele gern ___.',
            answer: 'Fußball',
            options: ['Fußball', 'Fußballs', 'spielen', 'gern'],
            translation: 'I like to play football.',
          },
          {
            id: 'g2',
            text: 'Er ___ gern Musik.',
            answer: 'hört',
            translation: 'He likes listening to music.',
          },
          {
            id: 'g3',
            text: 'Ich lese ___ gern.',
            answer: 'nicht',
            options: ['nicht', 'kein', 'keine', 'nie'],
            translation: 'I do not like reading.',
            explanation: 'nicht gern = do not like to.',
          },
          {
            id: 'g4',
            text: 'Sie ___ gern. (she, tanzen)',
            answer: 'tanzt',
            translation: 'She likes dancing.',
          },
          {
            id: 'g5',
            text: 'Wir ___ am Wochenende wandern. (wollen)',
            answer: 'wollen',
            options: ['wollen', 'will', 'wollt', 'wollst'],
            translation: 'We want to hike at the weekend.',
          },
          {
            id: 'g6',
            text: 'Ich ___ gut schwimmen. (können)',
            answer: 'kann',
            options: ['kann', 'kannst', 'können', 'könnt'],
            translation: 'I can swim well.',
          },
          {
            id: 'g7',
            text: 'Du ___ sehr gut singen. (können)',
            answer: 'kannst',
            options: ['kannst', 'kann', 'können', 'könnt'],
            translation: 'You can sing very well.',
          },
          {
            id: 'g8',
            text: 'Was ___ du heute machen? (wollen)',
            answer: 'willst',
            options: ['willst', 'will', 'wollen', 'wollt'],
            translation: 'What do you want to do today?',
          },
        ],
      },
    ),

    activity(
      U,
      'sentences-modal',
      'sentence',
      {
        title: 'Modal verb sentences',
        description: 'With können and wollen the second verb goes to the END.',
        tags: ['grammar', 'modal-verbs', 'word-order', 'hobbies'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'm1',
            translation: 'I can cook well.',
            words: ['Ich', 'kann', 'gut', 'kochen.'],
            explanation: 'The modal verb is in position 2, the infinitive goes to the end.',
          },
          {
            id: 'm2',
            translation: 'Can you play the guitar?',
            words: ['Kannst', 'du', 'Gitarre', 'spielen?'],
          },
          {
            id: 'm3',
            translation: 'We want to hike on Saturday.',
            words: ['Wir', 'wollen', 'am', 'Samstag', 'wandern.'],
            alsoAccept: ['Am Samstag wollen wir wandern.'],
          },
          {
            id: 'm4',
            translation: 'Do you want to play tennis today?',
            words: ['Willst', 'du', 'heute', 'Tennis', 'spielen?'],
          },
          {
            id: 'm5',
            translation: 'He cannot swim.',
            words: ['Er', 'kann', 'nicht', 'schwimmen.'],
          },
          {
            id: 'm6',
            translation: 'She wants to travel.',
            words: ['Sie', 'will', 'reisen.'],
            extra: ['willst'],
          },
          {
            id: 'm7',
            translation: 'What can you do well?',
            words: ['Was', 'kannst', 'du', 'gut', 'machen?'],
          },
          {
            id: 'm8',
            translation: 'I want to watch a film.',
            words: ['Ich', 'will', 'einen', 'Film', 'sehen.'],
          },
        ],
      },
    ),

    activity(
      U,
      'sentences-gern',
      'sentence',
      {
        title: 'gern & nicht gern',
        description: 'Say what you like and do not like to do.',
        tags: ['grammar', 'hobbies', 'word-order'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'g1',
            translation: 'I like to play football.',
            words: ['Ich', 'spiele', 'gern', 'Fußball.'],
          },
          {
            id: 'g2',
            translation: 'I do not like to read.',
            words: ['Ich', 'lese', 'nicht', 'gern.'],
          },
          {
            id: 'g3',
            translation: 'What do you do in your free time?',
            words: ['Was', 'machst', 'du', 'in', 'deiner', 'Freizeit?'],
          },
          { id: 'g4', translation: 'She likes to sing.', words: ['Sie', 'singt', 'gern.'] },
          {
            id: 'g5',
            translation: 'We like to cook at the weekend.',
            words: ['Wir', 'kochen', 'am', 'Wochenende', 'gern.'],
          },
          { id: 'g6', translation: 'Do you like to dance?', words: ['Tanzt', 'du', 'gern?'] },
        ],
      },
    ),

    activity(
      U,
      'sort-word-order',
      'sortit',
      {
        title: 'Where is the verb?',
        description: 'Check sentences with a modal verb: is the word order right?',
        tags: ['grammar', 'modal-verbs', 'word-order'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        instruction: 'Is the word order correct?',
        buckets: [
          { id: 'ok', label: 'Correct', emoji: '✅' },
          { id: 'no', label: 'Wrong', emoji: '❌' },
        ],
        items: [
          { id: 'w1', text: 'Ich kann schwimmen.', bucket: 'ok' },
          { id: 'w2', text: 'Ich schwimmen kann.', bucket: 'no' },
          { id: 'w3', text: 'Wir wollen tanzen.', bucket: 'ok' },
          { id: 'w4', text: 'Wir tanzen wollen.', bucket: 'no' },
          { id: 'w5', text: 'Kannst du Gitarre spielen?', bucket: 'ok' },
          { id: 'w6', text: 'Kannst du spielen Gitarre?', bucket: 'no' },
          { id: 'w7', text: 'Er will Tennis spielen.', bucket: 'ok' },
          { id: 'w8', text: 'Er will spielen Tennis.', bucket: 'no' },
        ],
      },
    ),

    activity(
      U,
      'listen-hobbies',
      'listen',
      {
        title: 'Hobbies you hear',
        description: 'Listen and pick what the person likes to do.',
        tags: ['listening', 'hobbies'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'l1',
            speak: 'Ich spiele gern Gitarre.',
            answer: 'plays the guitar',
            options: ['plays the guitar', 'plays football', 'plays the piano', 'plays tennis'],
          },
          {
            id: 'l2',
            speak: 'Ich schwimme gern.',
            answer: 'swimming',
            options: ['swimming', 'dancing', 'jogging', 'cooking'],
          },
          {
            id: 'l3',
            speak: 'Wir wollen am Samstag wandern.',
            answer: 'hiking on Saturday',
            options: [
              'hiking on Saturday',
              'swimming on Sunday',
              'dancing on Saturday',
              'cooking on Monday',
            ],
          },
          {
            id: 'l4',
            speak: 'Ich kann gut kochen.',
            answer: 'can cook well',
            options: ['can cook well', 'can dance well', 'can sing well', 'can read well'],
          },
          {
            id: 'l5',
            speak: 'Er liest nicht gern.',
            answer: 'does not like to read',
            options: ['does not like to read', 'likes to read', 'cannot read', 'reads a lot'],
          },
          {
            id: 'l6',
            speak: 'Sie will nach Italien reisen.',
            answer: 'wants to travel to Italy',
            options: [
              'wants to travel to Italy',
              'lives in Italy',
              'speaks Italian',
              'comes from Italy',
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'spell-hobbies',
      'spell',
      {
        title: 'Spell the hobby',
        description: 'Unscramble and type hobby words.',
        tags: ['spelling', 'hobbies'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...spell(
            hobbies.filter((v) => ['tanzen', 'kochen', 'wandern', 'schwimmen'].includes(v.de)),
            'unscramble',
          ).items,
          ...spell(
            hobbies.filter((v) => ['singen', 'malen'].includes(v.de)),
            'type',
          ).items,
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Free time chat',
        description: 'Talk about hobbies and make a plan.',
        tags: ['communication', 'hobbies', 'modal-verbs'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        scenes: [
          {
            id: 'hobbies',
            title: 'What do you do?',
            emoji: '🎸',
            setting: 'Jan asks about your hobbies.',
            turns: [
              {
                kind: 'npc',
                who: 'Jan',
                text: 'Was machst du in deiner Freizeit?',
                translation: 'What do you do in your free time?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ich spiele gern Gitarre.', correct: true },
                  {
                    text: 'Ich gern Gitarre spiele.',
                    correct: false,
                    feedback: 'The verb must be in second position: Ich spiele …',
                  },
                  {
                    text: 'Ich bin Gitarre.',
                    correct: false,
                    feedback: 'You cannot “be” a guitar!',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Jan',
                text: 'Cool! Kannst du auch singen?',
                translation: 'Cool! Can you sing too?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ja, ich kann ein bisschen singen.', correct: true },
                  {
                    text: 'Ja, ich kann ein bisschen singe.',
                    correct: false,
                    feedback: 'After a modal verb the second verb stays in the infinitive: singen.',
                  },
                  {
                    text: 'Ja, ich ein bisschen singen kann.',
                    correct: false,
                    feedback: 'The modal verb comes second: ich kann …',
                  },
                ],
              },
            ],
          },
          {
            id: 'plan',
            title: 'Weekend plans',
            emoji: '🥾',
            setting: 'You make a plan with Jan.',
            turns: [
              {
                kind: 'npc',
                who: 'Jan',
                text: 'Was willst du am Wochenende machen?',
                translation: 'What do you want to do at the weekend?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ich will wandern. Und du?', correct: true },
                  { text: 'Ich willst wandern.', correct: false, feedback: 'ich will (no -st).' },
                  {
                    text: 'Ich will wandere.',
                    correct: false,
                    feedback: 'After “will” use the infinitive: wandern.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Jan',
                text: 'Ich auch! Wir können zusammen wandern.',
                translation: 'Me too! We can hike together.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Super, bis Samstag!', correct: true },
                  {
                    text: 'Gute Nacht!',
                    correct: false,
                    feedback: 'It is not bedtime – accept the plan!',
                  },
                  {
                    text: 'Wie heißt du?',
                    correct: false,
                    feedback: 'You already know each other.',
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
        title: 'Modal verb blitz',
        description: 'Correct sentence or not? Be quick!',
        tags: ['grammar', 'modal-verbs', 'word-order'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'Ich kann schwimmen.', isTrue: true },
          {
            id: 'b2',
            text: 'Ich schwimmen kann.',
            isTrue: false,
            explanation: 'Infinitive at the end: Ich kann schwimmen.',
          },
          { id: 'b3', text: 'Wir wollen Tennis spielen.', isTrue: true },
          {
            id: 'b4',
            text: 'Wir wollen spielen Tennis.',
            isTrue: false,
            explanation: 'Infinitive at the end.',
          },
          { id: 'b5', text: 'Kannst du kochen?', isTrue: true },
          {
            id: 'b6',
            text: 'Du kannst singst.',
            isTrue: false,
            explanation: 'After kannst: infinitive “singen”.',
          },
          { id: 'b7', text: 'Er will Fußball spielen.', isTrue: true },
          { id: 'b8', text: 'Er willst Fußball spielen.', isTrue: false, explanation: 'er will' },
          { id: 'b9', text: 'Ich lese gern.', isTrue: true },
          { id: 'b10', text: 'Ich kannst tanzen.', isTrue: false, explanation: 'ich kann' },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Hobbies, modal verbs and word order mixed.',
        tags: ['vocabulary', 'grammar', 'hobbies'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Ich ___ gut tanzen. (können)',
            options: ['kann', 'kannst', 'können', 'könnt'],
            answer: 'kann',
          },
          {
            id: 'c2',
            prompt: 'Which sentence is correct?',
            options: [
              'Wir wollen heute schwimmen.',
              'Wir wollen schwimmen heute.',
              'Wir schwimmen wollen heute.',
              'Wollen wir heute schwimmen.',
            ],
            answer: 'Wir wollen heute schwimmen.',
          },
          {
            id: 'c3',
            prompt: 'lesen: er ___',
            options: ['liest', 'lest', 'lesst', 'lese'],
            answer: 'liest',
          },
          {
            id: 'c4',
            prompt: '“Ich spiele gern Tennis” means …',
            options: [
              'I like to play tennis.',
              'I must play tennis.',
              'I can play tennis.',
              'I do not play tennis.',
            ],
            answer: 'I like to play tennis.',
          },
          {
            id: 'c5',
            prompt: 'Ihr ___ Gitarre spielen. (können)',
            options: ['könnt', 'können', 'kann', 'kannst'],
            answer: 'könnt',
          },
          {
            id: 'c6',
            prompt: 'How do you say you do NOT like to cook?',
            options: [
              'Ich koche nicht gern.',
              'Ich koche gern nicht.',
              'Ich nicht koche gern.',
              'Ich kein koche gern.',
            ],
            answer: 'Ich koche nicht gern.',
          },
          {
            id: 'c7',
            prompt: 'Du ___ am Wochenende wandern. (wollen)',
            options: ['willst', 'will', 'wollen', 'wollt'],
            answer: 'willst',
          },
          {
            id: 'c8',
            prompt: 'die Freizeit = ?',
            options: ['free time', 'hobby', 'weekend', 'holiday'],
            answer: 'free time',
          },
        ],
      },
    ),
  ],
};
