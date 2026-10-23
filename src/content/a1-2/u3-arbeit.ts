import { byDe, flashcards, memory, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  gap,
  heard,
  meta,
  pastTable,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  unit12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-arbeit';

const jobs = vocabList(U, 'Jobs', [
  ['Lehrer', 'teacher (f. Lehrerin)', '🧑‍🏫', 'der', 'Lehrer'],
  ['Arzt', 'doctor (f. Ärztin)', '🩺', 'der', 'Ärzte'],
  ['Krankenpfleger', 'nurse (f. Krankenpflegerin)', '💉', 'der', 'Krankenpfleger'],
  ['Verkäufer', 'shop assistant (f. Verkäuferin)', '🛍️', 'der', 'Verkäufer'],
  ['Koch', 'cook (f. Köchin)', '🧑‍🍳', 'der', 'Köche'],
  ['Kellner', 'waiter (f. Kellnerin)', '🍽️', 'der', 'Kellner'],
  ['Ingenieur', 'engineer (f. Ingenieurin)', '👷', 'der', 'Ingenieure'],
  ['Informatiker', 'IT specialist (f. Informatikerin)', '💻', 'der', 'Informatiker'],
  ['Polizist', 'police officer (f. Polizistin)', '👮', 'der', 'Polizisten'],
  ['Busfahrer', 'bus driver (f. Busfahrerin)', '🚌', 'der', 'Busfahrer'],
  ['Friseur', 'hairdresser (f. Friseurin)', '💇', 'der', 'Friseure'],
  ['Mechaniker', 'mechanic (f. Mechanikerin)', '🔧', 'der', 'Mechaniker'],
  ['Bäcker', 'baker (f. Bäckerin)', '🥖', 'der', 'Bäcker'],
  ['Student', 'student (f. Studentin)', '🎓', 'der', 'Studenten'],
  ['Maler', 'painter (f. Malerin)', '🎨', 'der', 'Maler'],
  ['Fotograf', 'photographer (f. Fotografin)', '📷', 'der', 'Fotografen'],
]);

const work = vocabList(U, 'Workplace & job ads', [
  ['Büro', 'office', '🏢', 'das', 'Büros'],
  ['Firma', 'company', '🏭', 'die', 'Firmen'],
  ['Baustelle', 'building site', '🚧', 'die', 'Baustellen'],
  ['Werkstatt', 'workshop', '🛠️', 'die', 'Werkstätten'],
  ['Kantine', 'canteen', '🍴', 'die', 'Kantinen'],
  ['Chef', 'boss (f. Chefin)', '👔', 'der', 'Chefs'],
  ['Kollege', 'colleague (f. Kollegin)', '🤝', 'der', 'Kollegen'],
  ['Gehalt', 'salary', '💶', 'das', 'Gehälter'],
  ['Bewerbung', 'application', '📨', 'die', 'Bewerbungen'],
  ['Lebenslauf', 'CV', '📄', 'der', 'Lebensläufe'],
  ['Vorstellungsgespräch', 'job interview', '🗣️', 'das', 'Vorstellungsgespräche'],
  ['Erfahrung', 'experience', '⭐', 'die', 'Erfahrungen'],
  ['Ausbildung', 'training / apprenticeship', '📚', 'die', 'Ausbildungen'],
  ['Praktikum', 'internship', '🧪', 'das', 'Praktika'],
  ['Vollzeit', 'full-time', '🕘'],
  ['Teilzeit', 'part-time', '🕐'],
  ['arbeitslos', 'unemployed', '📭'],
  ['Ich arbeite als …', 'I work as a …', '💼'],
  ['Ich war …', 'I was a …', '⏪'],
  ['seit zwei Jahren', 'for two years (and still)', '📅'],
  ['vor zwei Jahren', 'two years ago', '⏳'],
]);

const vocab = [...jobs, ...work];

export const arbeit: UnitContent = {
  unit: unit12({
    id: U,
    order: 3,
    title: 'Arbeit & Beruf',
    subtitle: 'Jobs, job ads and what you did before',
    emoji: '💼',
    goals: [
      'Name jobs (masculine and feminine) and workplaces',
      'Read a job ad and talk in a job interview',
      'Say what you did in the past',
    ],
    grammar: [
      'Jobs: der Lehrer – die Lehrerin; arbeiten als …',
      'seit / vor / ab / bis / nach + dative',
      'War and hatte (simple past of sein and haben)',
      'Perfekt with haben and sein (ich habe gearbeitet, er ist gefahren)',
    ],
    vocabFields: ['Jobs', 'Workplace & job ads'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-jobs',
      'flashcards',
      meta(
        'Jobs',
        'Sixteen jobs – the card back shows the feminine form.',
        ['vocabulary', 'work-jobs'],
        1,
        4,
      ),
      flashcards(jobs),
    ),

    activity(
      U,
      'quiz-jobs',
      'quiz',
      meta(
        'Who is this?',
        'Name the job from the picture.',
        ['vocabulary', 'work-jobs', 'articles'],
        1,
        3,
      ),
      quizEmoji(jobs, jobs),
    ),

    activity(
      U,
      'flash-work',
      'flashcards',
      meta(
        'At work',
        'Workplaces, job-ad words and time expressions.',
        ['vocabulary', 'work-jobs'],
        1,
        4,
      ),
      flashcards(work.slice(0, 17)),
    ),

    activity(
      U,
      'memory-jobs',
      'memory',
      meta('Job memory', 'Match the job with the picture.', ['vocabulary', 'work-jobs'], 1, 3),
      memory(
        byDe(
          jobs,
          'Lehrer',
          'Arzt',
          'Koch',
          'Polizist',
          'Busfahrer',
          'Friseur',
          'Bäcker',
          'Fotograf',
        ),
        'emoji',
      ),
    ),

    activity(
      U,
      'sort-gender',
      'sortit',
      meta(
        'He or she?',
        'Add -in for women: sort the job titles.',
        ['grammar', 'work-jobs', 'articles'],
        2,
        3,
      ),
      {
        instruction: 'Is it a man (der …) or a woman (die … -in)?',
        buckets: [
          { id: 'm', label: 'der … (man)', emoji: '👨' },
          { id: 'w', label: 'die … -in (woman)', emoji: '👩' },
        ],
        items: sortItems('g', [
          ['Lehrer', 'm'],
          ['Ärztin', 'w'],
          ['Koch', 'm'],
          ['Kellnerin', 'w'],
          ['Ingenieur', 'm'],
          ['Friseurin', 'w'],
          ['Verkäuferin', 'w'],
          ['Mechaniker', 'm'],
          ['Studentin', 'w'],
          ['Polizist', 'm'],
        ]),
      },
    ),

    activity(
      U,
      'spell-jobs',
      'spell',
      meta(
        'Spell the jobs',
        'Unscramble the letters and type the words.',
        ['spelling', 'work-jobs'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(jobs, 'Lehrer', 'Koch', 'Arzt'), 'unscramble').items,
          ...spell(byDe(jobs, 'Ingenieur', 'Mechaniker', 'Verkäufer'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'listen-jobs',
      'listen',
      meta(
        'What do they do?',
        'Listen and pick the right job and workplace.',
        ['listening', 'work-jobs'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'Ich arbeite als Koch in einem Restaurant.',
            'I work as a cook in a restaurant.',
            [
              'I work as a waiter in a restaurant.',
              'I work as a cook in a hospital.',
              'I work as a baker in a restaurant.',
            ],
          ),
          heard(
            'l2',
            'Meine Schwester ist Ärztin im Krankenhaus.',
            'My sister is a doctor in the hospital.',
            [
              'My sister is a nurse in the hospital.',
              'My sister is a doctor in a school.',
              'My mother is a doctor in the hospital.',
            ],
          ),
          heard(
            'l3',
            'Er arbeitet seit zwei Jahren als Busfahrer.',
            'He has been working as a bus driver for two years.',
            [
              'He worked as a bus driver two years ago.',
              'He has been working as a taxi driver for two years.',
              'He is going to start as a bus driver in two years.',
            ],
          ),
          heard('l4', 'Vor drei Jahren war sie Studentin.', 'Three years ago she was a student.', [
            'For three years she has been a student.',
            'In three years she will be a student.',
            'Three years ago she was a teacher.',
          ]),
          heard('l5', 'Ich habe in einer Fabrik gearbeitet.', 'I worked in a factory.', [
            'I work in a factory.',
            'I worked in a shop.',
            'I am looking for a job in a factory.',
          ]),
          heard(
            'l6',
            'Wir suchen eine Verkäuferin in Teilzeit.',
            'We are looking for a part-time shop assistant.',
            [
              'We are looking for a full-time shop assistant.',
              'We are looking for a part-time cook.',
              'We are a shop and sell part-time jobs.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-ads',
      'quiz',
      meta(
        'Reading job ads',
        'm/w/d, Teilzeit, Bewerbung … what does the ad offer?',
        ['vocabulary', 'work-jobs'],
        2,
        5,
      ),
      {
        questions: [
          q(
            'a1',
            'Wir suchen einen Koch (m/w/d), Vollzeit, ab sofort.',
            'A full-time job as a cook, starting immediately',
            [
              'A part-time job as a cook, starting next month',
              'A full-time job as a waiter, starting immediately',
              'An internship as a cook, starting immediately',
            ],
          ),
          q('a2', 'Mechaniker gesucht. Berufserfahrung erwünscht.', 'Experience is welcome', [
            'No experience is needed',
            'Only trainees may apply',
            'A university degree is required',
          ]),
          q('a3', 'Teilzeit, 20 Stunden pro Woche', 'Part-time: 20 hours a week', [
            'Full-time: 20 hours a day',
            'Two weeks of work',
            '20 days of holiday',
          ]),
          q(
            'a4',
            'What does “(m/w/d)” in a job title mean?',
            'The job is open to everyone (male, female, diverse)',
            ['Monday to Wednesday', 'Manager, worker, driver', 'Morning, midday, evening'],
          ),
          q(
            'a5',
            'Bewerbung bitte per E-Mail mit Lebenslauf.',
            'Send your application by e-mail with your CV',
            ['Call us with your CV', 'Bring the application in person', 'Send the CV by post only'],
          ),
          q('a6', 'Deutschkenntnisse A2 erforderlich.', 'German at level A2 is required', [
            'German is not needed',
            'German classes at level A2 are offered',
            'German is a plus, not a must',
          ]),
          q('a7', 'Gehalt nach Vereinbarung.', 'The salary will be agreed', [
            'There is no salary',
            'The salary is 100 euros',
            'The salary is paid weekly',
          ]),
          q('a8', 'Wir bieten: 30 Tage Urlaub.', 'We offer 30 days of holiday', [
            'We ask for 30 days of work',
            'We offer 30 hours a week',
            'We need 30 years of experience',
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-time',
      'gapfill',
      meta(
        'seit, vor, ab, bis, nach',
        'Time prepositions in job talk – they all take the dative.',
        ['grammar', 'prepositions-of-time', 'dative', 'work-jobs'],
        2,
        5,
      ),
      {
        items: [
          gap(
            't1',
            'Ich arbeite ___ drei Jahren hier.',
            'seit',
            ['seit', 'vor', 'bis', 'ab'],
            'I have been working here for three years.',
            'seit = since / for (it still goes on).',
          ),
          gap(
            't2',
            'Er hat ___ zwei Jahren in Berlin gearbeitet.',
            'vor',
            ['vor', 'seit', 'in', 'nach'],
            'He worked in Berlin two years ago.',
            'vor = ago (it is over).',
          ),
          gap(
            't3',
            'Sie arbeitet von acht ___ sechzehn Uhr.',
            'bis',
            ['bis', 'seit', 'ab', 'nach'],
            'She works from eight to four o’clock.',
          ),
          gap(
            't4',
            'Ich bin ___ einem Monat arbeitslos.',
            'seit',
            ['seit', 'vor', 'ab', 'bis'],
            'I have been unemployed for a month.',
          ),
          gap(
            't5',
            'Die Stelle ist ___ 1. März frei.',
            'ab',
            ['ab', 'seit', 'vor', 'bis'],
            'The position is available from 1 March.',
            'ab = starting from (future).',
          ),
          gap(
            't6',
            'Ich habe ___ der Arbeit einen Deutschkurs.',
            'nach',
            ['nach', 'vor', 'seit', 'ab'],
            'I have a German class after work.',
          ),
          gap(
            't7',
            'Wir frühstücken ___ der Arbeit im Café.',
            'vor',
            ['vor', 'nach', 'seit', 'bis'],
            'We have breakfast at the café before work.',
          ),
          gap(
            't8',
            'Sie ist ___ einem Jahr nach München gezogen.',
            'vor',
            ['vor', 'seit', 'ab', 'bis'],
            'She moved to Munich a year ago.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-war-hatte',
      'gapfill',
      meta(
        'war or hatte?',
        'The simple past of sein and haben.',
        ['grammar', 'past-tense', 'work-jobs'],
        2,
        4,
      ),
      {
        items: [
          gap(
            'p1',
            'Gestern ___ ich krank.',
            'war',
            ['war', 'waren', 'bin', 'hatte'],
            'Yesterday I was ill.',
            'sein → war (ich / er / sie / es).',
          ),
          gap(
            'p2',
            'Letztes Jahr ___ wir in Wien.',
            'waren',
            ['waren', 'war', 'wart', 'hatten'],
            'Last year we were in Vienna.',
          ),
          gap(
            'p3',
            'Er ___ keine Zeit.',
            'hatte',
            ['hatte', 'hattest', 'war', 'hat'],
            'He had no time.',
            'haben → hatte (ich / er / sie / es).',
          ),
          gap(
            'p4',
            'Du ___ gestern nicht im Büro.',
            'warst',
            ['warst', 'war', 'waren', 'bist'],
            'You were not in the office yesterday.',
          ),
          gap(
            'p5',
            'Ich ___ vor zwei Jahren einen Job in Hamburg.',
            'hatte',
            ['hatte', 'war', 'hattet', 'habe'],
            'Two years ago I had a job in Hamburg.',
          ),
          gap(
            'p6',
            'Ihr ___ gestern sehr müde.',
            'wart',
            ['wart', 'waren', 'seid', 'hattet'],
            'You were very tired yesterday.',
          ),
          gap(
            'p7',
            'Wir ___ viel Arbeit.',
            'hatten',
            ['hatten', 'hatte', 'waren', 'haben'],
            'We had a lot of work.',
          ),
          gap(
            'p8',
            'Sie ___ früher Lehrerin.',
            'war',
            ['war', 'waren', 'hatte', 'ist'],
            'She used to be a teacher.',
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-past',
      'conjugation',
      meta(
        'war and hatte',
        'Fill in the simple past of sein and haben.',
        ['grammar', 'past-tense', 'verb-conjugation'],
        2,
        4,
      ),
      {
        tables: [
          pastTable('sein', 'sein (war)', 'to be – simple past', ['ich', 'du', 'er/sie/es']),
          pastTable('haben', 'haben (hatte)', 'to have – simple past', ['ich', 'du', 'er/sie/es']),
          {
            ...pastTable('sein', 'sein (war), plural', 'to be – simple past', [
              'wir',
              'ihr',
              'sie/Sie',
            ]),
            id: 'past-sein-pl',
          },
          {
            ...pastTable('haben', 'haben (hatte), plural', 'to have – simple past', [
              'wir',
              'ihr',
              'sie/Sie',
            ]),
            id: 'past-haben-pl',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-perfekt',
      'gapfill',
      meta(
        'Perfekt: haben / sein + Partizip II',
        'What did you do? Type the participle or pick haben/sein.',
        ['grammar', 'perfekt', 'work-jobs'],
        3,
        6,
      ),
      {
        items: [
          typed(
            'f1',
            'Ich habe zwei Jahre als Koch ___. (arbeiten)',
            'gearbeitet',
            'I worked as a cook for two years.',
            'Regular verbs: ge- + stem + -t.',
          ),
          typed('f2', 'Sie hat ein Praktikum ___. (machen)', 'gemacht', 'She did an internship.'),
          typed('f3', 'Er hat Deutsch ___. (lernen)', 'gelernt', 'He learned German.'),
          typed(
            'f4',
            'Wir haben eine Bewerbung ___. (schreiben)',
            'geschrieben',
            'We wrote an application.',
            'Irregular verbs: ge- + stem + -en (schreiben → geschrieben).',
          ),
          gap(
            'x1',
            'Er ___ nach Wien gefahren.',
            'ist',
            ['ist', 'hat', 'war', 'wird'],
            'He travelled to Vienna.',
            'Verbs of movement (fahren, gehen, kommen) use sein.',
          ),
          gap(
            'x2',
            'Ich ___ gestern lange gearbeitet.',
            'habe',
            ['habe', 'bin', 'war', 'hatte'],
            'I worked for a long time yesterday.',
            'Most verbs use haben.',
          ),
          gap(
            'x3',
            'Ihr ___ zu Hause geblieben.',
            'seid',
            ['seid', 'habt', 'wart', 'hattet'],
            'You stayed at home.',
            'bleiben uses sein.',
          ),
          typed(
            'f5',
            'Sie ist um acht Uhr ___. (kommen)',
            'gekommen',
            'She came at eight o’clock.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Talk about work',
        'Build sentences about jobs and the past.',
        ['grammar', 'word-order', 'work-jobs', 'perfekt'],
        2,
        6,
      ),
      {
        items: [
          sent('s1', 'He works as a teacher.', ['Er', 'arbeitet', 'als', 'Lehrer.']),
          sent(
            's2',
            'She has been working in a hospital for two years.',
            ['Sie', 'arbeitet', 'seit', 'zwei', 'Jahren', 'im', 'Krankenhaus.'],
            {
              explanation: 'seit + dative: zwei Jahren.',
            },
          ),
          sent(
            's3',
            'Two years ago I worked in Spain.',
            ['Vor', 'zwei', 'Jahren', 'habe', 'ich', 'in', 'Spanien', 'gearbeitet.'],
            {
              alsoAccept: ['Ich habe vor zwei Jahren in Spanien gearbeitet.'],
              explanation: 'Perfekt: haben in second position, the participle at the end.',
            },
          ),
          sent(
            's4',
            'Maria was a student in Vienna.',
            ['Maria', 'war', 'Studentin', 'in', 'Wien.'],
            { extra: ['Student'] },
          ),
          sent(
            's5',
            'Yesterday we had a lot of work.',
            ['Gestern', 'hatten', 'wir', 'viel', 'Arbeit.'],
            {
              alsoAccept: ['Wir hatten gestern viel Arbeit.'],
            },
          ),
          sent('s6', 'My boss is nice, but the work is hard.', [
            'Mein',
            'Chef',
            'ist',
            'nett,',
            'aber',
            'die',
            'Arbeit',
            'ist',
            'schwer.',
          ]),
          sent('s7', 'He drove to Berlin.', ['Er', 'ist', 'nach', 'Berlin', 'gefahren.'], {
            extra: ['hat'],
            explanation: 'fahren (movement) → sein.',
          }),
          sent('s8', 'I am applying for the job.', [
            'Ich',
            'bewerbe',
            'mich',
            'um',
            'die',
            'Stelle.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues-job',
      'dialogue',
      meta(
        'Job interview and a new colleague',
        'Talk about your job and your past.',
        ['communication', 'work-jobs', 'past-tense', 'perfekt'],
        2,
        6,
      ),
      {
        scenes: [
          {
            id: 'interview',
            title: 'Job interview',
            emoji: '🗣️',
            setting: 'You apply for a job as a cook.',
            turns: [
              say('Chefin', 'Guten Tag! Was sind Sie von Beruf?', 'Hello! What is your job?'),
              you(
                'Ich bin Koch. Ich arbeite seit drei Jahren in einem Restaurant.',
                [
                  'Ich bin Koch. Ich arbeite vor drei Jahren in einem Restaurant.',
                  'vor = ago. For something that still goes on use seit.',
                ],
                [
                  'Ich bin Koch. Ich arbeite seit drei Jahre in einem Restaurant.',
                  'seit takes the dative: seit drei Jahren.',
                ],
              ),
              say(
                'Chefin',
                'Und wo haben Sie vorher gearbeitet?',
                'And where did you work before?',
              ),
              you(
                'Ich habe in einem Hotel gearbeitet.',
                ['Ich bin in einem Hotel gearbeitet.', 'arbeiten forms the Perfekt with haben.'],
                [
                  'Ich habe in einem Hotel arbeiten.',
                  'The Perfekt needs the participle: gearbeitet.',
                ],
              ),
              say('Chefin', 'Wie arbeiten Sie am liebsten?', 'How do you like to work best?'),
              you(
                'Ich arbeite gern im Team.',
                [
                  'Ich gern arbeite im Team.',
                  'The verb is always in second position: Ich arbeite gern …',
                ],
                ['Ich arbeite gern in Team.', 'in + dem = im: im Team.'],
              ),
              say('Chefin', 'Wann können Sie anfangen?', 'When can you start?'),
              you(
                'Ab dem ersten Mai.',
                ['Seit dem ersten Mai.', 'seit looks back; for a start date in the future use ab.'],
                [
                  'Vor dem ersten Mai.',
                  'vor means before; you want to say from when you can start: ab.',
                ],
              ),
            ],
          },
          {
            id: 'colleague',
            title: 'Your first day',
            emoji: '🏢',
            setting: 'A new colleague talks to you.',
            turns: [
              say('Kollege', 'Wo hast du früher gearbeitet?', 'Where did you work before?'),
              you(
                'Früher war ich in Spanien. Dort habe ich in einer Schule gearbeitet.',
                [
                  'Früher bin ich in Spanien. Dort habe ich in einer Schule gearbeitet.',
                  'For the past say war: Früher war ich …',
                ],
                [
                  'Früher war ich in Spanien. Dort habe ich in einer Schule arbeiten.',
                  'The Perfekt needs the participle gearbeitet.',
                ],
              ),
              say('Kollege', 'Und wie war die Arbeit?', 'And how was the work?'),
              you(
                'Sie war interessant, aber ich hatte wenig Zeit.',
                [
                  'Sie hatte interessant, aber ich war wenig Zeit.',
                  'war + adjective, hatte + noun.',
                ],
                ['Sie war interessant, aber ich hat wenig Zeit.', 'ich hatte (not hat).'],
              ),
              say(
                'Kollege',
                'Hast du Hunger? Wir machen jetzt Mittagspause.',
                'Are you hungry? We are having a lunch break now.',
              ),
              you(
                'Ja, gern! Wo ist die Kantine?',
                ['Ja, gern! Wohin ist die Kantine?', 'Wo? asks where something is.'],
                [
                  'Ja, gern! Wann ist die Kantine?',
                  'Wann asks about time; here you want to know the place.',
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
      meta(
        'Work blitz',
        'war, hatte, seit/vor, Perfekt – true or false?',
        ['grammar', 'past-tense', 'perfekt'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Ich war gestern im Büro.', true),
          tf('b2', 'Ich bin gestern im Büro.', false, 'In the past: Ich war …'),
          tf('b3', 'Er hatte keine Zeit.', true),
          tf('b4', 'Er war keine Zeit.', false, 'hatte + noun (Zeit)'),
          tf('b5', 'Ich arbeite seit zwei Jahren hier.', true),
          tf('b6', 'Ich arbeite vor zwei Jahren hier.', false, 'seit = for; vor = ago'),
          tf('b7', 'Sie hat in Berlin gearbeitet.', true),
          tf('b8', 'Sie ist in Berlin gearbeitet.', false, 'arbeiten → haben'),
          tf('b9', 'Er ist nach Wien gefahren.', true),
          tf('b10', 'Er hat nach Wien gefahren.', false, 'fahren (movement) → sein'),
          tf('b11', 'Die Stelle ist ab Montag frei.', true),
          tf('b12', 'Eine Köchin arbeitet oft in einem Restaurant.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Jobs, job ads, war/hatte and Perfekt in one final round.',
        ['vocabulary', 'grammar', 'work-jobs'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Gestern ___ ich krank.', 'war', ['bin', 'hatte', 'wurde']),
          q('c2', 'Er ___ keine Zeit.', 'hatte', ['war', 'hattest', 'hat']),
          q('c3', 'Ich arbeite ___ drei Jahren hier.', 'seit', ['vor', 'ab', 'bis']),
          q('c4', 'Er ___ nach Wien gefahren.', 'ist', ['hat', 'war', 'wird']),
          q('c5', 'Sie hat Deutsch ___.', 'gelernt', ['lernt', 'gelernen', 'geliernt']),
          q('c6', 'The feminine form of “der Lehrer”:', 'die Lehrerin', [
            'die Lehrer',
            'der Lehrerin',
            'die Lehrere',
          ]),
          q('c7', '“(m/w/d)” in a job ad means …', 'the job is open to everyone', [
            'Monday to Wednesday',
            'manager, worker, driver',
            'morning, midday, evening',
          ]),
          q('c8', 'Ich habe vor zwei Jahren in Spanien ___.', 'gearbeitet', [
            'gearbeite',
            'arbeitet',
            'gearbeiten',
          ]),
          q('c9', 'Du ___ gestern nicht im Büro.', 'warst', ['war', 'bist', 'hattest']),
          q('c10', 'der Lebenslauf', 'CV', ['job interview', 'salary', 'colleague']),
        ],
      },
    ),
  ],
};
