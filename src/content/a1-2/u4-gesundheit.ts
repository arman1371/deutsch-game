import { byDe, flashcards, memory, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sortItems,
  table,
  tf,
  typed,
  unit12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-gesundheit';

const body = vocabList(U, 'The body', [
  ['Kopf', 'head', '🙂', 'der', 'Köpfe'],
  ['Auge', 'eye', '👁️', 'das', 'Augen'],
  ['Ohr', 'ear', '👂', 'das', 'Ohren'],
  ['Nase', 'nose', '👃', 'die', 'Nasen'],
  ['Mund', 'mouth', '👄', 'der', 'Münder'],
  ['Zahn', 'tooth', '🦷', 'der', 'Zähne'],
  ['Hals', 'neck / throat', '🧣', 'der', 'Hälse'],
  ['Schulter', 'shoulder', '🤷', 'die', 'Schultern'],
  ['Arm', 'arm', '💪', 'der', 'Arme'],
  ['Hand', 'hand', '✋', 'die', 'Hände'],
  ['Finger', 'finger', '☝️', 'der', 'Finger'],
  ['Bauch', 'stomach', '🫃', 'der', 'Bäuche'],
  ['Rücken', 'back', '🔙', 'der', 'Rücken'],
  ['Bein', 'leg', '🦵', 'das', 'Beine'],
  ['Knie', 'knee', '🦿', 'das', 'Knie'],
  ['Fuß', 'foot', '🦶', 'der', 'Füße'],
  ['Herz', 'heart', '❤️', 'das', 'Herzen'],
]);

const health = vocabList(U, 'Illness & doctor', [
  ['Kopfschmerzen', 'headache', '🤕', 'die'],
  ['Halsschmerzen', 'sore throat', '😷', 'die'],
  ['Bauchschmerzen', 'stomach ache', '😖', 'die'],
  ['Husten', 'cough', '🤧', 'der'],
  ['Schnupfen', 'runny nose', '👃', 'der'],
  ['Erkältung', 'cold', '🤒', 'die', 'Erkältungen'],
  ['Grippe', 'flu', '🦠', 'die'],
  ['Fieber', 'fever', '🌡️', 'das'],
  ['Allergie', 'allergy', '🌼', 'die', 'Allergien'],
  ['Praxis', 'doctor’s surgery', '🏥', 'die', 'Praxen'],
  ['Rezept', 'prescription', '📝', 'das', 'Rezepte'],
  ['Tablette', 'tablet', '💊', 'die', 'Tabletten'],
  ['Hausarzt', 'family doctor', '🩺', 'der', 'Hausärzte'],
  ['Zahnarzt', 'dentist', '🦷', 'der', 'Zahnärzte'],
  ['Augenarzt', 'eye doctor', '👓', 'der', 'Augenärzte'],
  ['krank', 'ill', '🤢'],
  ['gesund', 'healthy', '😄'],
  ['Was fehlt Ihnen?', 'What is wrong with you?', '❓'],
  ['Mir tut … weh.', 'My … hurts.', '😣'],
  ['Gute Besserung!', 'Get well soon!', '💐'],
]);

const vocab = [...body, ...health];

export const gesundheit: UnitContent = {
  unit: unit12({
    id: U,
    order: 4,
    title: 'Gesundheit',
    subtitle: 'The body, symptoms, the doctor and advice',
    emoji: '🩺',
    goals: [
      'Name parts of the body and common symptoms',
      'Tell a doctor what is wrong with you',
      'Understand and give advice',
    ],
    grammar: [
      'Dative pronouns: mir, dir, ihm, ihr, uns, euch, ihnen / Ihnen',
      'Mir tut … weh; Wie geht es dir / Ihnen?; helfen + dative',
      'Modal verbs müssen, dürfen, sollen',
      'The imperative: du, ihr, Sie',
    ],
    vocabFields: ['The body', 'Illness & doctor'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-body',
      'flashcards',
      meta(
        'The body',
        'Head, shoulders, knees and toes – with der, die, das.',
        ['vocabulary', 'health-body'],
        1,
        4,
      ),
      flashcards(body),
    ),

    activity(
      U,
      'quiz-body',
      'quiz',
      meta(
        'Which body part?',
        'Name the body part – with the right article.',
        ['vocabulary', 'health-body', 'articles'],
        1,
        3,
      ),
      quizEmoji(body, body),
    ),

    activity(
      U,
      'memory-body',
      'memory',
      meta(
        'Body memory',
        'Match the German word with the picture.',
        ['vocabulary', 'health-body'],
        1,
        3,
      ),
      memory(byDe(body, 'Kopf', 'Auge', 'Ohr', 'Nase', 'Zahn', 'Hand', 'Bein', 'Herz'), 'emoji'),
    ),

    activity(
      U,
      'flash-health',
      'flashcards',
      meta(
        'Illness & the doctor',
        'Symptoms, medicine and useful phrases.',
        ['vocabulary', 'health-body'],
        1,
        4,
      ),
      flashcards(health),
    ),

    activity(
      U,
      'spell-body',
      'spell',
      meta(
        'Spell the body',
        'Unscramble the letters and type the words.',
        ['spelling', 'health-body'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(body, 'Kopf', 'Hand', 'Nase'), 'unscramble').items,
          ...spell(byDe(body, 'Bauch', 'Rücken', 'Schulter'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'sort-doctors',
      'sortit',
      meta(
        'Which doctor?',
        'Family doctor, dentist or eye doctor?',
        ['vocabulary', 'health-body'],
        2,
        3,
      ),
      {
        instruction: 'Which doctor do you see?',
        buckets: [
          { id: 'hausarzt', label: 'Hausarzt', emoji: '🩺' },
          { id: 'zahnarzt', label: 'Zahnarzt', emoji: '🦷' },
          { id: 'augenarzt', label: 'Augenarzt', emoji: '👓' },
        ],
        items: sortItems('d', [
          ['Ich habe Fieber.', 'hausarzt'],
          ['Ich habe Husten und Schnupfen.', 'hausarzt'],
          ['Ich brauche ein Rezept.', 'hausarzt'],
          ['Mein Zahn tut weh.', 'zahnarzt'],
          ['Ich habe ein Loch im Zahn.', 'zahnarzt'],
          ['Ich habe Zahnschmerzen.', 'zahnarzt'],
          ['Ich sehe schlecht.', 'augenarzt'],
          ['Ich brauche eine Brille.', 'augenarzt'],
          ['Mein Auge tut weh.', 'augenarzt'],
        ]),
      },
    ),

    activity(
      U,
      'listen-doctor',
      'listen',
      meta(
        'At the doctor’s',
        'Listen to patient and doctor and pick the meaning.',
        ['listening', 'health-body'],
        2,
        4,
      ),
      {
        items: [
          heard('l1', 'Ich habe Kopfschmerzen.', 'I have a headache.', [
            'I have a stomach ache.',
            'I have a sore throat.',
            'I have a fever.',
          ]),
          heard('l2', 'Mir tut der Rücken weh.', 'My back hurts.', [
            'My arm hurts.',
            'My leg hurts.',
            'My stomach hurts.',
          ]),
          heard('l3', 'Sie haben Fieber.', 'You have a fever.', [
            'You have a cold.',
            'You have an appointment.',
            'You have time.',
          ]),
          heard(
            'l4',
            'Bleiben Sie im Bett und trinken Sie viel Tee.',
            'Stay in bed and drink a lot of tea.',
            [
              'Go to work and drink a lot of coffee.',
              'Stay at home and eat a lot.',
              'Stay in bed and take two tablets.',
            ],
          ),
          heard(
            'l5',
            'Nehmen Sie die Tabletten dreimal am Tag.',
            'Take the tablets three times a day.',
            [
              'Take the tablets once a day.',
              'Take the tablets before the meal.',
              'Buy the tablets at the pharmacy.',
            ],
          ),
          heard('l6', 'Gute Besserung!', 'Get well soon!', [
            'Good morning!',
            'Have a good journey!',
            'Happy birthday!',
          ]),
          heard('l7', 'Sie dürfen heute nicht arbeiten.', 'You are not allowed to work today.', [
            'You do not have to work today.',
            'You should work today.',
            'You cannot work tomorrow.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-dative',
      'gapfill',
      meta(
        'mir, dir, ihm, ihr …',
        'Dative pronouns with tun, helfen and gehen.',
        ['grammar', 'dative', 'object-pronouns', 'health-body'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'd1',
            'Der Arzt hilft ___. (to me)',
            'mir',
            ['mir', 'mich', 'ich', 'mein'],
            'The doctor helps me.',
            'helfen always takes the dative: mir.',
          ),
          gap(
            'd2',
            'Wie geht es ___? (to you, informal)',
            'dir',
            ['dir', 'dich', 'du', 'dein'],
            'How are you?',
            'Wie geht es dir? – the dative of du is dir.',
          ),
          gap(
            'd3',
            '___ ist kalt. (I am cold)',
            'Mir',
            ['Mir', 'Mich', 'Ich', 'Meine'],
            'I am cold.',
            'Feelings use the dative: Mir ist kalt / warm / schlecht.',
          ),
          gap(
            'd4',
            'Der Hals tut ___ weh. (to him)',
            'ihm',
            ['ihm', 'ihn', 'er', 'sein'],
            'His throat hurts.',
          ),
          gap(
            'd5',
            'Die Tabletten helfen ___. (to her)',
            'ihr',
            ['ihr', 'sie', 'ihn', 'ihre'],
            'The tablets help her.',
          ),
          gap(
            'd6',
            'Der Arzt gibt ___ ein Rezept. (to us)',
            'uns',
            ['uns', 'unser', 'wir', 'unsere'],
            'The doctor gives us a prescription.',
          ),
          gap(
            'd7',
            'Wie geht es ___? (to you all, informal)',
            'euch',
            ['euch', 'ihr', 'dich', 'eure'],
            'How are you (all)?',
          ),
          gap(
            'd8',
            'Die Kinder sind krank. Der Arzt hilft ___. (to them)',
            'ihnen',
            ['ihnen', 'sie', 'ihm', 'ihr'],
            'The children are ill. The doctor helps them.',
          ),
          gap(
            'd9',
            'Wie geht es ___, Frau Weber? (formal)',
            'Ihnen',
            ['Ihnen', 'Sie', 'Ihr', 'Ihre'],
            'How are you, Mrs Weber?',
            'Formal: always a capital letter – Ihnen.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-modal',
      'gapfill',
      meta(
        'müssen, dürfen, sollen',
        'Must, may and should: pick the right modal verb.',
        ['grammar', 'modal-verbs', 'health-body'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'm1',
            'Du ___ im Bett bleiben. (must)',
            'musst',
            ['musst', 'darfst', 'sollst', 'kannst'],
            'You have to stay in bed.',
            'müssen = it is necessary.',
          ),
          gap(
            'm2',
            'Sie ___ hier nicht rauchen. (are not allowed to)',
            'dürfen',
            ['dürfen', 'müssen', 'sollen', 'können'],
            'You are not allowed to smoke here.',
            'dürfen = to be allowed to.',
          ),
          gap(
            'm3',
            'Ich ___ zum Arzt gehen. (have to)',
            'muss',
            ['muss', 'darf', 'soll', 'will'],
            'I have to go to the doctor.',
          ),
          gap(
            'm4',
            'Der Arzt sagt: Du ___ viel Wasser trinken. (should)',
            'sollst',
            ['sollst', 'musst', 'darfst', 'willst'],
            'The doctor says: you should drink a lot of water.',
            'sollen = advice or an instruction from someone else.',
          ),
          gap(
            'm5',
            'Er ___ heute nicht arbeiten. (is not allowed to)',
            'darf',
            ['darf', 'muss', 'soll', 'will'],
            'He is not allowed to work today.',
          ),
          gap(
            'm6',
            'Wir ___ lange warten. (have to)',
            'müssen',
            ['müssen', 'dürfen', 'sollen', 'wollen'],
            'We have to wait a long time.',
          ),
          gap(
            'm7',
            'Ihr ___ viel schlafen. (should)',
            'sollt',
            ['sollt', 'müsst', 'dürft', 'wollt'],
            'You should sleep a lot.',
          ),
          gap(
            'm8',
            '___ ich ein Glas Wasser haben? (may)',
            'Darf',
            ['Darf', 'Muss', 'Soll', 'Will'],
            'May I have a glass of water?',
            'Polite request: Darf ich …?',
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-modal',
      'conjugation',
      meta(
        'müssen, dürfen, sollen, können',
        'The modal verbs change in the singular.',
        ['grammar', 'modal-verbs', 'verb-conjugation'],
        2,
        5,
      ),
      {
        tables: [
          table('müssen', 'must / to have to', ['ich', 'du', 'er/sie/es']),
          table('dürfen', 'may / to be allowed to', ['ich', 'du', 'er/sie/es']),
          table('sollen', 'should / to be supposed to', ['ich', 'du', 'ihr']),
          table('können', 'can / to be able to', ['ich', 'du', 'wir']),
          table('wollen', 'to want to', ['ich', 'du', 'er/sie/es']),
        ],
      },
    ),

    activity(
      U,
      'gap-imperative',
      'gapfill',
      meta(
        'Imperative: du, ihr, Sie',
        'Give advice – type the imperative form.',
        ['grammar', 'imperative', 'health-body'],
        3,
        6,
      ),
      {
        items: [
          typed(
            'i1',
            '___ im Bett! (bleiben, du)',
            'Bleib',
            'Stay in bed!',
            'du-imperative: stem without -st (Bleib!). A final -e is optional.',
            ['Bleibe'],
          ),
          typed('i2', '___ viel Tee! (trinken, du)', 'Trink', 'Drink a lot of tea!', undefined, [
            'Trinke',
          ]),
          typed(
            'i3',
            '___ Sie bitte die Tabletten! (nehmen)',
            'Nehmen',
            'Please take the tablets!',
            'Sie-imperative: infinitive + Sie.',
          ),
          typed(
            'i4',
            '___ doch zum Arzt! (gehen, ihr)',
            'Geht',
            'Go to the doctor!',
            'ihr-imperative = the ihr form without ihr.',
          ),
          typed('i5', '___ Sie bitte hier! (warten)', 'Warten', 'Please wait here!'),
          typed(
            'i6',
            '___ viel! (schlafen, du)',
            'Schlaf',
            'Sleep a lot!',
            'schlafen has ä in du schläfst, but the imperative is Schlaf! (no umlaut).',
            ['Schlafe'],
          ),
          typed(
            'i7',
            '___ Sie tief ein! (einatmen)',
            'Atmen',
            'Breathe in deeply!',
            'Separable verbs: Atmen Sie tief ein!',
          ),
          typed(
            'i8',
            '___ nicht so viel Kaffee! (trinken, ihr)',
            'Trinkt',
            'Do not drink so much coffee!',
          ),
          typed(
            'i9',
            '___ vorsichtig! (sein, du)',
            'Sei',
            'Be careful!',
            'sein is irregular: Sei! / Seid! / Seien Sie!',
          ),
          typed(
            'i10',
            '___ bitte die Medizin! (nehmen, du)',
            'Nimm',
            'Please take the medicine!',
            'nehmen: e → i also in the du-imperative (Nimm!).',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Symptoms and advice',
        'Build sentences for the doctor’s visit.',
        ['grammar', 'word-order', 'health-body', 'imperative'],
        2,
        6,
      ),
      {
        items: [
          sent('s1', 'My head hurts.', ['Mir', 'tut', 'der', 'Kopf', 'weh.'], {
            alsoAccept: ['Der Kopf tut mir weh.'],
            explanation: 'Mir tut … weh: the person is in the dative.',
          }),
          sent('s2', 'I have a cold.', ['Ich', 'bin', 'erkältet.'], { extra: ['habe'] }),
          sent(
            's3',
            'You should drink a lot of water.',
            ['Du', 'sollst', 'viel', 'Wasser', 'trinken.'],
            {
              explanation: 'Modal verb in second position, infinitive at the end.',
            },
          ),
          sent('s4', 'Stay in bed!', ['Bleib', 'im', 'Bett!'], { alsoAccept: ['Bleibe im Bett!'] }),
          sent('s5', 'Take these tablets twice a day.', [
            'Nehmen',
            'Sie',
            'diese',
            'Tabletten',
            'zweimal',
            'am',
            'Tag.',
          ]),
          sent('s6', 'What is wrong with you? (formal)', ['Was', 'fehlt', 'Ihnen?']),
          sent('s7', 'I have to go to the doctor.', ['Ich', 'muss', 'zum', 'Arzt', 'gehen.']),
          sent(
            's8',
            'You are not allowed to work today.',
            ['Sie', 'dürfen', 'heute', 'nicht', 'arbeiten.'],
            {
              alsoAccept: ['Heute dürfen Sie nicht arbeiten.'],
            },
          ),
          sent('s9', 'Get well soon!', ['Gute', 'Besserung!']),
        ],
      },
    ),

    activity(
      U,
      'dialogues-doctor',
      'dialogue',
      meta(
        'Doctor, pharmacy, friend',
        'Three situations around feeling ill.',
        ['communication', 'health-body', 'modal-verbs', 'imperative'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'doctor',
            title: 'At the doctor’s',
            emoji: '🩺',
            setting: 'You have a headache and a fever.',
            turns: [
              say('Ärztin', 'Guten Tag! Was fehlt Ihnen?', 'Hello! What is wrong with you?'),
              you(
                'Ich habe Kopfschmerzen und Fieber.',
                ['Ich bin Kopfschmerzen und Fieber.', 'Symptoms go with haben: Ich habe Fieber.'],
                [
                  'Ich habe Kopf wehtun und Fieber.',
                  'Say Ich habe Kopfschmerzen, or Mir tut der Kopf weh.',
                ],
              ),
              say('Ärztin', 'Seit wann haben Sie das?', 'Since when have you had that?'),
              you(
                'Seit zwei Tagen.',
                ['Vor zwei Tagen.', 'vor means ago. To answer “since when” use seit.'],
                ['Ab zwei Tagen.', 'ab looks forward; use seit for “since”.'],
              ),
              say(
                'Ärztin',
                'Sie haben eine Grippe. Sie müssen im Bett bleiben und viel trinken.',
                'You have the flu. You have to stay in bed and drink a lot.',
              ),
              you(
                'Darf ich nächste Woche wieder arbeiten?',
                [
                  'Darf ich nächste Woche wieder arbeite?',
                  'After a modal verb: infinitive arbeiten.',
                ],
                [
                  'Dürfe ich nächste Woche wieder arbeiten?',
                  'ich darf – the modal verb is irregular.',
                ],
              ),
            ],
          },
          {
            id: 'pharmacy',
            title: 'At the pharmacy',
            emoji: '💊',
            setting: 'You need something for your cough.',
            turns: [
              say(
                'Apothekerin',
                'Guten Tag, was kann ich für Sie tun?',
                'Hello, what can I do for you?',
              ),
              you(
                'Ich brauche etwas gegen Husten.',
                ['Ich brauche etwas für Husten.', 'Medicine against a symptom: gegen.'],
                [
                  'Ich brauche etwas mit Husten.',
                  'mit means “with”. You want something against a cough: gegen.',
                ],
              ),
              say(
                'Apothekerin',
                'Nehmen Sie diesen Saft dreimal am Tag.',
                'Take this syrup three times a day.',
              ),
              you(
                'Danke schön. Was kostet das?',
                ['Danke schön. Wie heißt das?', 'You want to know the price.'],
                ['Danke schön. Wo ist das?', 'To ask the price say: Was kostet das?'],
              ),
            ],
          },
          {
            id: 'friend',
            title: 'With a friend',
            emoji: '🤒',
            setting: 'A friend asks how you are.',
            turns: [
              say('Lea', 'Hallo! Wie geht es dir?', 'Hi! How are you?'),
              you(
                'Nicht so gut. Mir tut der Bauch weh.',
                ['Nicht so gut. Ich tut der Bauch weh.', 'Dative pronoun: Mir tut … weh.'],
                ['Nicht so gut. Mich tut der Bauch weh.', 'Dative, not accusative: mir.'],
              ),
              say(
                'Lea',
                'Oje, du bist blass. Bleib heute im Bett und trink viel Tee!',
                'Oh dear, you are pale. Stay in bed today and drink a lot of tea!',
              ),
              you(
                'Danke, das ist lieb von dir!',
                ['Danke, das ist lieb von dich!', 'von takes the dative: von dir.'],
                ['Danke, das ist lieb von du!', 'Dative of du: dir.'],
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
        'Health blitz',
        'Dative pronouns, modal verbs, imperative – true or false?',
        ['grammar', 'dative', 'imperative'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Mir tut der Kopf weh.', true),
          tf('b2', 'Ich tut der Kopf weh.', false, 'Dative: Mir tut …'),
          tf('b3', 'Wie geht es dir?', true),
          tf('b4', 'Wie geht es dich?', false, 'Dative: Wie geht es dir?'),
          tf('b5', 'Du musst im Bett bleiben.', true),
          tf(
            'b6',
            'Du musst im Bett bleibst.',
            false,
            'After a modal verb the infinitive goes to the end: bleiben.',
          ),
          tf('b7', 'Sie dürfen hier nicht rauchen.', true),
          tf('b8', 'Trink viel Wasser!', true),
          tf('b9', 'Trinke Sie viel Wasser!', false, 'Sie-imperative: Trinken Sie …'),
          tf('b10', 'Nimm die Tablette!', true),
          tf('b11', 'Nehm die Tablette!', false, 'nehmen: Nimm! (e → i)'),
          tf('b12', 'Der Arzt hilft mich.', false, 'helfen takes the dative: mir.'),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Body, dative pronouns, modal verbs and imperative in one final round.',
        ['vocabulary', 'grammar', 'health-body'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Der Arzt hilft ___.', 'mir', ['mich', 'ich', 'mein']),
          q('c2', 'Wie geht es ___? (formal)', 'Ihnen', ['Sie', 'Ihr', 'Ihre']),
          q('c3', '___ tut der Bauch weh. (I)', 'Mir', ['Ich', 'Mich', 'Mein']),
          q('c4', 'Du ___ viel schlafen. (should)', 'sollst', ['darfst', 'kannst', 'willst']),
          q('c5', 'Sie ___ hier nicht rauchen. (not allowed)', 'dürfen', [
            'müssen',
            'sollen',
            'wollen',
          ]),
          q('c6', 'Imperative (du): “Drink a lot!”', 'Trink viel!', [
            'Trinkst viel!',
            'Trinken du viel!',
            'Du trink viel!',
          ]),
          q('c7', 'Imperative (ihr): “Go to the doctor!”', 'Geht zum Arzt!', [
            'Gehen zum Arzt!',
            'Gehst zum Arzt!',
            'Geh ihr zum Arzt!',
          ]),
          q('c8', 'Imperative (Sie): “Take the tablets!”', 'Nehmen Sie die Tabletten!', [
            'Nimm Sie die Tabletten!',
            'Nehmt Sie die Tabletten!',
            'Sie nehmen die Tabletten!',
          ]),
          q('c9', 'What does a doctor ask?', 'Was fehlt Ihnen?', [
            'Was kostet das?',
            'Wo wohnen Sie?',
            'Wie spät ist es?',
          ]),
          q('c10', 'Gute Besserung! means …', 'Get well soon!', [
            'Good luck!',
            'Have a nice trip!',
            'Good night!',
          ]),
        ],
      },
    ),
  ],
};
