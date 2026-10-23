import { byDe, flashcards, listen, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  adjGap,
  dictation,
  gap,
  heard,
  hint,
  meta,
  q,
  say,
  sent,
  tf,
  typed,
  unitB12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b1-2-weiterbildung';

const courses = vocabList(U, 'Courses & learning', [
  ['Fortbildung', 'training course (for work)', '📈', 'die', 'Fortbildungen'],
  ['Kursprogramm', 'course programme', '📋', 'das', 'Kursprogramme'],
  ['Abendkurs', 'evening class', '🌙', 'der', 'Abendkurse'],
  ['Workshop', 'workshop', '🛠️', 'der', 'Workshops'],
  ['Fernstudium', 'distance learning', '🖥️', 'das'],
  ['Bildungsurlaub', 'paid educational leave', '🏖️', 'der'],
  ['Kursleiterin', 'course instructor', '👩‍🏫', 'die', 'Kursleiterinnen'],
  ['Gedächtnis', 'memory', '🧠', 'das'],
  ['Eselsbrücke', 'mnemonic', '🫏', 'die', 'Eselsbrücken'],
  ['Lernziel', 'learning goal', '🎯', 'das', 'Lernziele'],
  ['sich weiterbilden', 'to continue one’s education', '🎓'],
  ['sich etwas merken', 'to remember something', '📝'],
  ['ausgebucht', 'fully booked', '🈵'],
]);

const recommend = vocabList(U, 'Recommending a course', [
  ['Ich kann dir den Kurs nur empfehlen.', 'I can only recommend the course to you.', '👍'],
  ['Es lohnt sich auf jeden Fall.', 'It is definitely worth it.', '💯'],
  ['Der Kurs hat mir viel gebracht.', 'I got a lot out of the course.', '🎁'],
  ['Was hältst du von …?', 'What do you think of …?', '🤔'],
  ['Ich würde dir eher davon abraten.', 'I would rather advise you against it.', '👎'],
  ['Wann ist der Anmeldeschluss?', 'When is the registration deadline?', '📆'],
]);

const vocab = [...courses, ...recommend];

export const weiterbildung: UnitContent = {
  unit: unitB12({
    id: U,
    order: 4,
    title: 'Weiterbildung',
    subtitle: 'Course programmes, evening classes, learning tips and recommendations',
    emoji: '📖',
    goals: [
      'Understand a course programme and ask about a course',
      'Recommend a course or advise against it',
      'Give learning tips for a better memory',
    ],
    grammar: [
      'Partizip II as an adjective: ein ausgebuchter Kurs, die angemeldeten Teilnehmer.',
      'Review: Partizip I – ein spannender Vortrag.',
    ],
    vocabFields: ['Courses & learning', 'Recommending a course'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-courses',
      'flashcards',
      meta(
        'Courses & learning',
        'Fortbildung, Abendkurs, Eselsbrücke – learning as an adult.',
        ['vocabulary', 'further-education'],
        1,
        5,
      ),
      flashcards(courses),
    ),
    activity(
      U,
      'flash-recommend',
      'flashcards',
      meta(
        'Recommending a course',
        'Recommend, advise against and ask about deadlines.',
        ['vocabulary', 'communication', 'further-education'],
        1,
        4,
      ),
      flashcards(recommend),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Course words', 'Name what you see.', ['vocabulary', 'further-education'], 1, 4),
      quizEmoji(
        byDe(
          courses,
          'Abendkurs',
          'Workshop',
          'Fernstudium',
          'Bildungsurlaub',
          'Kursleiterin',
          'Gedächtnis',
          'Eselsbrücke',
          'ausgebucht',
        ),
      ),
    ),
    activity(
      U,
      'listen-recommend',
      'listen',
      meta(
        'Hear the recommendations',
        'Listen and pick the meaning.',
        ['listening', 'further-education'],
        2,
        4,
      ),
      listen(recommend),
    ),
    activity(
      U,
      'memory-participles',
      'memory',
      meta(
        'Verb and participle',
        'Match each verb with its Partizip II.',
        ['grammar', 'participles-as-adjectives'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'anmelden', b: 'angemeldet' },
          { id: 'm2', a: 'empfehlen', b: 'empfohlen' },
          { id: 'm3', a: 'ausbuchen', b: 'ausgebucht' },
          { id: 'm4', a: 'bestehen', b: 'bestanden' },
          { id: 'm5', a: 'gebrauchen', b: 'gebraucht' },
          { id: 'm6', a: 'verbessern', b: 'verbessert' },
          { id: 'm7', a: 'besuchen', b: 'besucht' },
        ],
      },
    ),
    activity(
      U,
      'spell-courses',
      'spell',
      meta(
        'Spell the course words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'further-education'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(courses, 'Workshop', 'Lernziel', 'ausgebucht'), 'unscramble').items,
          ...spell(byDe(courses, 'Fortbildung', 'Gedächtnis', 'Eselsbrücke'), 'type').items,
          dictation(
            'd1',
            'Der Kurs ist leider schon ausgebucht.',
            'the course is already fully booked',
          ),
          dictation('d2', 'Es lohnt sich auf jeden Fall.', 'it is definitely worth it'),
        ],
      },
    ),
    activity(
      U,
      'gap-partizip-2',
      'gapfill',
      meta(
        'Ein ausgebuchter Kurs',
        'Partizip II before a noun takes adjective endings.',
        ['grammar', 'participles-as-adjectives'],
        3,
        6,
      ),
      {
        items: [
          adjGap(
            'p1',
            'Leider ist das ein ___ Kurs.',
            'ausgebucht',
            'indefinite',
            'm',
            'nom',
            'Unfortunately that is a fully booked course.',
          ),
          adjGap(
            'p2',
            'Die ___ Teilnehmer bekommen eine E-Mail.',
            'angemeldet',
            'definite',
            'pl',
            'nom',
            'The registered participants get an e-mail.',
          ),
          adjGap(
            'p3',
            'Ich kaufe ein ___ Lehrbuch.',
            'gebraucht',
            'indefinite',
            'n',
            'acc',
            'I am buying a second-hand textbook.',
          ),
          adjGap(
            'p4',
            'Wir haben einen sehr ___ Kursleiter.',
            'erfahren',
            'indefinite',
            'm',
            'acc',
            'We have a very experienced course instructor.',
          ),
          adjGap(
            'p5',
            'Mit der ___ Prüfung kann ich mich bewerben.',
            'bestanden',
            'definite',
            'f',
            'dat',
            'With the passed exam I can apply.',
          ),
          hint(
            gap(
              'p6',
              'Das ist ein gut ___ Workshop – fast alle Plätze sind weg.',
              'besuchter',
              ['besuchter', 'besuchender', 'besucht', 'besuchten'],
              'That is a well-attended workshop – almost all places are gone.',
              'The workshop is visited (passive): Partizip II + ending.',
            ),
            {
              besuchender:
                'Partizip I would mean the workshop visits someone. It is visited: besuchter.',
              besucht: 'Before a noun the participle needs an ending: ein gut besuchter Workshop.',
              besuchten: 'After ein (masculine, nominative) the ending is -er.',
            },
          ),
          hint(
            typed(
              'p7',
              'Die von der Kursleiterin ___ Bücher sind sehr gut. (empfehlen)',
              'empfohlenen',
              'The books recommended by the instructor are very good.',
              'Partizip II of empfehlen: empfohlen + -en after die (plural).',
            ),
            {
              empfohlene: 'After die in the plural the ending is -en: die empfohlenen Bücher.',
              empfehlenden: 'The books are recommended (passive): Partizip II empfohlenen.',
            },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Recommending a course',
        'Build sentences about courses and learning.',
        ['grammar', 'word-order', 'participles-as-adjectives'],
        3,
        6,
      ),
      {
        items: [
          sent(
            's1',
            'Unfortunately the course is already fully booked.',
            ['Der', 'Kurs', 'ist', 'leider', 'schon', 'ausgebucht.'],
            { alsoAccept: ['Leider ist der Kurs schon ausgebucht.'] },
          ),
          sent('s2', 'The registered participants get an e-mail.', [
            'Die',
            'angemeldeten',
            'Teilnehmer',
            'bekommen',
            'eine',
            'E-Mail.',
          ]),
          sent('s3', 'I got a lot out of the course.', [
            'Der',
            'Kurs',
            'hat',
            'mir',
            'viel',
            'gebracht.',
          ]),
          sent('s4', 'I can’t remember the words.', [
            'Ich',
            'kann',
            'mir',
            'die',
            'Wörter',
            'nicht',
            'merken.',
          ]),
          sent('s5', 'I would like to continue my education.', [
            'Ich',
            'möchte',
            'mich',
            'weiterbilden.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-programme',
      'listen',
      meta(
        'The course programme',
        'Listen to course information and pick what is right.',
        ['listening', 'further-education'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Der Abendkurs „Excel für Einsteiger“ findet ab März immer dienstags von 18 bis 20 Uhr statt.',
            'The Excel evening class is on Tuesdays from 6 to 8 pm, starting in March.',
            [
              'The Excel class is on Thursday mornings.',
              'The Excel class ends in March.',
              'The Excel class is for advanced users only.',
            ],
          ),
          heard(
            'l2',
            'Anmeldeschluss ist der 15. Februar. Danach können wir leider keine Anmeldungen mehr annehmen.',
            'You must register by 15 February.',
            [
              'The course starts on 15 February.',
              'You can register any time.',
              'Registration opens on 15 February.',
            ],
          ),
          heard(
            'l3',
            'Wer sich Vokabeln merken will, sollte sie laut sprechen und mit Bildern verbinden.',
            'To remember words, say them aloud and link them to pictures.',
            [
              'To remember words, read them silently once.',
              'Pictures make it harder to remember words.',
              'You should only learn words at night.',
            ],
          ),
          heard(
            'l4',
            'In Deutschland haben viele Arbeitnehmer Anspruch auf fünf Tage Bildungsurlaub im Jahr.',
            'Many employees in Germany can take five days of educational leave a year.',
            [
              'Employees get five extra days of holiday on the beach.',
              'Educational leave is only for students.',
              'Employees must pay for five days of training.',
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
        'Finding the right course',
        'Ask about a course and give a friend a recommendation.',
        ['communication', 'further-education'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'office',
            title: 'Bei der Volkshochschule',
            emoji: '🏫',
            setting: 'You call the adult education centre about a photography course.',
            turns: [
              say(
                'Frau Yilmaz',
                'Volkshochschule, Yilmaz, guten Tag.',
                'Adult education centre, Yilmaz speaking, hello.',
              ),
              you('Guten Tag, ich interessiere mich für den Fotokurs. Gibt es noch freie Plätze?', [
                'Guten Tag, ich interessiere mich an den Fotokurs. Gibt es noch freie Plätze?',
                'sich interessieren für + accusative.',
              ]),
              say(
                'Frau Yilmaz',
                'Der Samstagskurs ist leider ausgebucht, aber im Abendkurs ist noch etwas frei.',
                'The Saturday course is fully booked, but there is still space in the evening class.',
              ),
              you('Gut, dann nehme ich den Abendkurs. Wann ist der Anmeldeschluss?', [
                'Gut, dann ich nehme den Abendkurs. Wann ist der Anmeldeschluss?',
                'After dann the verb comes next: dann nehme ich …',
              ]),
            ],
          },
          {
            id: 'friend',
            title: 'Lohnt sich das?',
            emoji: '🤔',
            setting: 'Your colleague Ben wants to do the same leadership workshop you did.',
            turns: [
              say(
                'Ben',
                'Was hältst du von dem Workshop „Gut führen“? Du warst doch letztes Jahr dort.',
                'What do you think of the “Leading well” workshop? You were there last year.',
              ),
              you(
                'Ich kann dir den Workshop nur empfehlen. Er hat mir viel gebracht.',
                [
                  'Ich kann dir den Workshop nur empfehlen. Er hat mich viel gebracht.',
                  'jemandem etwas bringen: dative – mir.',
                ],
                ['Ich war nie in einem Workshop.', 'Ben says you were there.'],
              ),
              say('Ben', 'Und die Kursleiterin?', 'And the instructor?'),
              you('Sie ist sehr erfahren und erklärt alles mit vielen Beispielen.', [
                'Sie ist sehr erfahrene und erklärt alles mit vielen Beispielen.',
                'After sein the adjective has no ending: sie ist erfahren.',
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
        'Course blitz',
        'Partizip II as an adjective – true or false?',
        ['grammar', 'participles-as-adjectives'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Ich kaufe ein gebrauchtes Lehrbuch.', true),
          tf(
            'b2',
            'Ich kaufe ein gebraucht Lehrbuch.',
            false,
            'Before a noun the participle needs an ending: ein gebrauchtes Lehrbuch.',
          ),
          tf('b3', 'Die angemeldeten Teilnehmer bekommen eine E-Mail.', true),
          tf(
            'b4',
            'Ein ausgebuchter Kurs hat noch viele freie Plätze.',
            false,
            'ausgebucht = fully booked: no places left.',
          ),
          tf('b5', 'Eine bestandene Prüfung ist eine Prüfung, die man geschafft hat.', true),
          tf(
            'b6',
            'Ein empfehlender Kurs ist ein Kurs, den man empfiehlt.',
            false,
            'A course that is recommended is an empfohlener Kurs (Partizip II).',
          ),
          tf('b7', 'Eine Eselsbrücke hilft beim Merken.', true),
          tf(
            'b8',
            'Ein Fernstudium macht man immer im Hörsaal.',
            false,
            'Distance learning happens from home.',
          ),
          tf('b9', 'Wer sich weiterbildet, lernt neue Dinge dazu.', true),
          tf(
            'b10',
            'Nach dem Anmeldeschluss kann man sich noch anmelden.',
            false,
            'After the deadline registration is closed.',
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
        'Course words, recommendations and participles in one round.',
        ['vocabulary', 'grammar', 'further-education'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Das ist ein ___ Kurs. (empfehlen)', 'empfohlener', [
              'empfehlender',
              'empfohlen',
              'empfohlenen',
            ]),
            {
              empfehlender: 'The course is recommended (passive): Partizip II empfohlener.',
              empfohlen: 'Before a noun the participle needs an ending: empfohlener.',
              empfohlenen: 'After ein (masculine, nominative) the ending is -er.',
            },
            'participles-as-adjectives',
          ),
          hint(
            q('c2', 'Wir suchen ___ Kursleiterinnen. (erfahren)', 'erfahrene', [
              'erfahrenen',
              'erfahrener',
              'erfahren',
            ]),
            {
              erfahrenen: 'No article, plural, accusative: -e (erfahrene).',
              erfahrener: 'No article, plural, accusative: -e (erfahrene).',
              erfahren: 'Before a noun the participle needs an ending.',
            },
            'participles-as-adjectives',
          ),
          hint(
            q('c3', 'Partizip II von „bestehen“:', 'bestanden', [
              'besteht',
              'bestehend',
              'gestanden',
            ]),
            {
              besteht: 'besteht is the present tense.',
              bestehend: 'bestehend is the Partizip I.',
              gestanden: 'gestanden comes from stehen; bestehen → bestanden (no ge-).',
            },
            'participles-as-adjectives',
          ),
          q('c4', 'die Fortbildung', 'training course (for work)', [
            'evening class',
            'distance learning',
            'learning goal',
          ]),
          q('c5', 'die Eselsbrücke', 'mnemonic', ['memory', 'course programme', 'workshop']),
          q('c6', 'ausgebucht', 'fully booked', ['cancelled', 'free of charge', 'recommended']),
          q(
            'c7',
            'A friend asks if a course is good. It was great. You say …',
            'Ich kann dir den Kurs nur empfehlen.',
            [
              'Ich würde dir eher davon abraten.',
              'Wann ist der Anmeldeschluss?',
              'Was hältst du von dem Kurs?',
            ],
          ),
          q('c8', 'das Gedächtnis', 'memory', ['mnemonic', 'learning goal', 'workshop']),
          q('c9', 'der Bildungsurlaub', 'paid educational leave', [
            'distance learning',
            'evening class',
            'training course (for work)',
          ]),
          q('c10', 'sich etwas merken', 'to remember something', [
            'to continue one’s education',
            'to register',
            'to forget something',
          ]),
        ],
      },
    ),
  ],
};
