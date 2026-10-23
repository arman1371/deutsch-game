import { yearToGerman } from '@/lib/german/numbers';
import { byDe, flashcards, spell, vocabList } from '../builders';
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
  unit21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a2-1-beruf';

const cv = vocabList(U, 'CV & work life', [
  ['Berufserfahrung', 'work experience', '💼', 'die'],
  ['Schulbildung', 'school education', '🏫', 'die'],
  ['Sprachkenntnisse', 'language skills', '🗣️', 'die'],
  ['EDV-Kenntnisse', 'IT skills', '💻', 'die'],
  ['Führerschein', 'driving licence', '🪪', 'der', 'Führerscheine'],
  ['Referenz', 'reference', '📋', 'die', 'Referenzen'],
  ['Geburtsdatum', 'date of birth', '🎂', 'das'],
  ['Zeitraum', 'period', '⏱️', 'der', 'Zeiträume'],
  ['Position', 'position', '🪜', 'die', 'Positionen'],
  ['Firma', 'company', '🏭', 'die', 'Firmen'],
  ['Abteilung', 'department', '🗂️', 'die', 'Abteilungen'],
  ['Kollege', 'colleague (f. Kollegin)', '🧑‍🤝‍🧑', 'der', 'Kollegen'],
  ['Chef', 'boss', '👔', 'der', 'Chefs'],
  ['Überstunden', 'overtime', '⏰', 'die'],
  ['Urlaub', 'holiday / leave', '🏝️', 'der'],
  ['Kündigung', 'notice / dismissal', '📄', 'die', 'Kündigungen'],
  ['Arbeitszeugnis', 'reference letter', '📜', 'das', 'Arbeitszeugnisse'],
  ['Muttersprache', 'mother tongue', '👶', 'die', 'Muttersprachen'],
]);

const verbs = vocabList(U, 'Work history verbs', [
  ['arbeiten', 'to work', '🛠️'],
  ['kündigen', 'to give notice', '✉️'],
  ['anfangen', 'to start', '▶️'],
  ['aufhören', 'to stop', '⏹️'],
  ['wechseln', 'to change', '🔀'],
  ['verdienen', 'to earn', '💰'],
  ['leiten', 'to lead / manage', '🧭'],
  ['übernehmen', 'to take over', '📥'],
  ['beenden', 'to finish', '🏁'],
  ['absolvieren', 'to complete (a course)', '🎓'],
  ['organisieren', 'to organise', '🗓️'],
  ['umziehen', 'to move house', '🚚'],
]);

const vocab = [...cv, ...verbs];

/** infinitive → Perfekt (auxiliary + participle) */
const PERFEKT: [string, string, string][] = [
  ['arbeiten', 'hat gearbeitet', '🛠️'],
  ['kündigen', 'hat gekündigt', '✉️'],
  ['anfangen', 'hat angefangen', '▶️'],
  ['aufhören', 'hat aufgehört', '⏹️'],
  ['wechseln', 'hat gewechselt', '🔀'],
  ['verdienen', 'hat verdient', '💰'],
  ['leiten', 'hat geleitet', '🧭'],
  ['übernehmen', 'hat übernommen', '📥'],
  ['beenden', 'hat beendet', '🏁'],
  ['absolvieren', 'hat absolviert', '🎓'],
  ['organisieren', 'hat organisiert', '🗓️'],
  ['umziehen', 'ist umgezogen', '🚚'],
];

const CV_TEXT =
  'Lebenslauf | Name: Ana Kowalska | Geboren: 12.03.1990 in Krakau | ' +
  '2006–2009: Gymnasium in Krakau, Abitur | 2009–2014: Studium Informatik, Universität Krakau | ' +
  '2014–2018: Programmiererin, Firma Softex, Krakau | Seit 2019: Teamleiterin, Firma Datana, Berlin | ' +
  'Sprachen: Polnisch (Muttersprache), Deutsch B2, Englisch B2 | Führerschein: Klasse B';
const ask = (question: string) => `${CV_TEXT} ${question}`;

const year = (y: number) => ({
  id: `y${y}`,
  mode: 'dictation' as const,
  answer: String(y),
  numeric: true,
  hint: 'Type the year you hear (digits only).',
  speak: yearToGerman(y),
});

export const beruf: UnitContent = {
  unit: unit21({
    id: U,
    order: 10,
    title: 'Arbeit & Lebenslauf',
    subtitle: 'Work experience, the tabular CV and talking about your career',
    emoji: '📑',
    goals: [
      'Talk about your work experience',
      'Read and write a tabular CV with years and periods',
      'Say why you changed jobs and since when you work somewhere',
      'Answer questions in a job interview',
    ],
    grammar: [
      'Perfekt of regular and irregular verbs: gearbeitet, angefangen, umgezogen (sein)',
      'Time: von … bis, seit, vor, ab',
      'weil / denn / deshalb review',
      'Years in German: neunzehnhundertneunzig, zweitausendachtzehn',
    ],
    vocabFields: ['CV & work life', 'Work history verbs'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-cv',
      'flashcards',
      meta(
        'CV & work life',
        'The sections of a CV and words from a working life.',
        ['vocabulary', 'cv-career'],
        1,
        6,
      ),
      flashcards(cv),
    ),
    activity(
      U,
      'flash-verbs',
      'flashcards',
      meta(
        'Work history verbs',
        'arbeiten, wechseln, kündigen – what you did in your career.',
        ['vocabulary', 'cv-career'],
        1,
        4,
      ),
      flashcards(verbs),
    ),
    activity(
      U,
      'flash-perfekt',
      'flashcards',
      meta(
        'Perfekt forms',
        'The Perfekt of the work verbs: hat gearbeitet, ist umgezogen.',
        ['vocabulary', 'cv-career', 'perfekt'],
        1,
        4,
      ),
      {
        cards: PERFEKT.map(([inf, perfekt, emoji]) => ({
          id: `pf-${inf}`,
          front: inf,
          back: perfekt,
          emoji,
          speak: inf,
        })),
      },
    ),
    activity(
      U,
      'memory-perfekt',
      'memory',
      meta(
        'Perfekt memory',
        'Match each verb with its Perfekt form.',
        ['vocabulary', 'cv-career', 'perfekt'],
        2,
        3,
      ),
      {
        pairs: PERFEKT.filter(([inf]) =>
          [
            'arbeiten',
            'anfangen',
            'wechseln',
            'verdienen',
            'leiten',
            'übernehmen',
            'organisieren',
            'umziehen',
          ].includes(inf),
        ).map(([inf, perfekt]) => ({ id: `pf-${inf}`, a: inf, b: perfekt })),
      },
    ),
    activity(
      U,
      'sort-cv',
      'sortit',
      meta(
        'Which part of the CV?',
        'Put each line in the right section of a tabular CV.',
        ['vocabulary', 'cv-career'],
        2,
        4,
      ),
      {
        instruction: 'Which section of the CV is it?',
        buckets: [
          { id: 'person', label: 'Persönliche Daten', emoji: '👤' },
          { id: 'bildung', label: 'Schulbildung', emoji: '🏫' },
          { id: 'erfahrung', label: 'Berufserfahrung', emoji: '💼' },
          { id: 'kenntnisse', label: 'Kenntnisse', emoji: '🧠' },
        ],
        items: sortItems('c', [
          ['Geburtsdatum: 12.03.1990', 'person'],
          ['Staatsangehörigkeit: polnisch', 'person'],
          ['Familienstand: ledig', 'person'],
          ['2006–2009 Gymnasium, Abitur', 'bildung'],
          ['2009–2014 Studium Informatik', 'bildung'],
          ['2014–2018 Programmiererin, Softex', 'erfahrung'],
          ['seit 2019 Teamleiterin, Datana', 'erfahrung'],
          ['2013 Praktikum bei einer Bank', 'erfahrung'],
          ['Deutsch B2', 'kenntnisse'],
          ['Führerschein Klasse B', 'kenntnisse'],
          ['MS Office, sehr gut', 'kenntnisse'],
        ]),
      },
    ),
    activity(
      U,
      'quiz-read-cv',
      'quiz',
      meta(
        'Read a tabular CV',
        'Answer questions about Ana’s CV.',
        ['vocabulary', 'cv-career', 'numbers'],
        2,
        6,
      ),
      {
        questions: [
          q('r1', ask('Wo ist Ana geboren?'), 'In Krakau', [
            'In Berlin',
            'In Warschau',
            'In Deutschland',
          ]),
          q('r2', ask('Wann hat sie das Abitur gemacht?'), '2009', ['2006', '2014', '2019']),
          q('r3', ask('Was hat sie von 2009 bis 2014 gemacht?'), 'Sie hat Informatik studiert.', [
            'Sie hat als Programmiererin gearbeitet.',
            'Sie ist zur Schule gegangen.',
            'Sie hat ein Team geleitet.',
          ]),
          q('r4', ask('Wie lange hat sie bei Softex gearbeitet?'), 'Vier Jahre', [
            'Fünf Jahre',
            'Zwei Jahre',
            'Seit 2019',
          ]),
          q('r5', ask('Wo arbeitet sie jetzt?'), 'In Berlin bei Datana', [
            'In Krakau bei Softex',
            'In Hamburg bei Datana',
            'Sie arbeitet nicht',
          ]),
          q('r6', ask('Seit wann ist sie Teamleiterin?'), 'Seit 2019', [
            'Seit 2014',
            'Seit 2018',
            'Seit 2009',
          ]),
          q('r7', ask('Wie gut ist ihr Deutsch?'), 'B2', ['A2', 'C1', 'Muttersprache']),
          q('r8', ask('Welchen Führerschein hat sie?'), 'Klasse B', [
            'Klasse A',
            'Klasse C',
            'Keinen',
          ]),
        ],
      },
    ),
    activity(
      U,
      'spell-cv',
      'spell',
      meta(
        'Spell and type the years',
        'Unscramble words, type CV words and write the years you hear.',
        ['spelling', 'cv-career', 'numbers'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(cv, 'Firma', 'Chef', 'Urlaub'), 'unscramble').items,
          ...spell(byDe(cv, 'Berufserfahrung', 'Arbeitszeugnis', 'Führerschein'), 'type').items,
          year(1985),
          year(2003),
          year(2018),
        ],
      },
    ),
    activity(
      U,
      'listen-career',
      'listen',
      meta(
        'Talking about a career',
        'Listen to people describe their work history.',
        ['listening', 'cv-career', 'perfekt'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            `Von ${yearToGerman(2014)} bis ${yearToGerman(2018)} habe ich als Programmierer gearbeitet.`,
            'From 2014 to 2018 I worked as a programmer.',
            [
              'Since 2014 I have worked as a programmer.',
              'From 2004 to 2008 I worked as a programmer.',
              'From 2014 to 2018 I studied computer science.',
            ],
          ),
          heard(
            'l2',
            'Seit einem Jahr leite ich ein kleines Team.',
            'I have been leading a small team for a year.',
            [
              'A year ago I led a small team.',
              'I will lead a small team in a year.',
              'I have been working in a big team for a year.',
            ],
          ),
          heard(
            'l3',
            'Ich habe die Firma gewechselt, denn ich wollte mehr Geld.',
            'I changed company because I wanted more money.',
            [
              'I changed company because I did not like my colleagues.',
              'I am changing company because I want more money.',
              'I stayed with the company because I wanted more money.',
            ],
          ),
          heard(
            'l4',
            'Im Lebenslauf steht: Berufserfahrung, Ausbildung und Sprachkenntnisse.',
            'The CV lists: work experience, training and language skills.',
            [
              'The CV lists: hobbies, training and language skills.',
              'The CV lists: work experience, family and hobbies.',
              'The CV is missing the work experience.',
            ],
          ),
          heard(
            'l5',
            'Ich habe zehn Jahre in einem Krankenhaus gearbeitet.',
            'I worked in a hospital for ten years.',
            [
              'I have worked in a hospital for two years.',
              'I worked in a school for ten years.',
              'I will work in a hospital for ten years.',
            ],
          ),
          heard(
            'l6',
            'Sie können ab dem ersten Juli bei uns anfangen.',
            'You can start with us from 1 July.',
            [
              'You can start with us until 1 July.',
              'You started with us on 1 July.',
              'You can start with us from 1 June.',
            ],
          ),
          heard(
            'l7',
            'Vor zehn Jahren bin ich nach Deutschland umgezogen.',
            'I moved to Germany ten years ago.',
            [
              'I have been living in Germany for ten years.',
              'I will move to Germany in ten years.',
              'I moved away from Germany ten years ago.',
            ],
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-perfekt-work',
      'gapfill',
      meta(
        'Perfekt in the CV',
        'Participles of regular, separable and -ieren verbs.',
        ['grammar', 'perfekt', 'cv-career'],
        3,
        6,
      ),
      {
        items: [
          gap(
            'p1',
            'Ich habe fünf Jahre als Verkäufer ___. (arbeiten)',
            'gearbeitet',
            ['gearbeitet', 'arbeitet', 'gearbeiten', 'arbeiten'],
            'I worked as a sales assistant for five years.',
          ),
          gap(
            'p2',
            'Er hat die Stelle ___. (kündigen)',
            'gekündigt',
            ['gekündigt', 'kündigt', 'gekündigen', 'kündigen'],
            'He has given notice on the job.',
          ),
          gap(
            'p3',
            'Wann hast du bei der Firma ___? (anfangen)',
            'angefangen',
            ['angefangen', 'gefangen', 'anfangen', 'angefangt'],
            'When did you start at the company?',
            'Separable: an-ge-fangen.',
          ),
          gap(
            'p4',
            'Sie ist 2020 in die Schweiz ___. (umziehen)',
            'umgezogen',
            ['umgezogen', 'gezogen', 'umgezieht', 'umziehen'],
            'She moved to Switzerland in 2020.',
            'umziehen (change of place) uses sein.',
          ),
          gap(
            'p5',
            'Wir haben das Projekt ___. (organisieren)',
            'organisiert',
            ['organisiert', 'georganisiert', 'organisieren', 'organisierte'],
            'We organised the project.',
            'Verbs on -ieren have no ge-.',
          ),
          gap(
            'p6',
            'Ich habe die Ausbildung ___. (absolvieren)',
            'absolviert',
            ['absolviert', 'geabsolviert', 'absolvieren', 'absolvierte'],
            'I have completed the training.',
          ),
          gap(
            'p7',
            'Er hat die Abteilung drei Jahre ___. (leiten)',
            'geleitet',
            ['geleitet', 'leitet', 'geleiten', 'leiten'],
            'He led the department for three years.',
          ),
          gap(
            'p8',
            'Sie hat die Firma ___. (wechseln)',
            'gewechselt',
            ['gewechselt', 'wechselt', 'gewechseln', 'wechseln'],
            'She changed company.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-periods',
      'gapfill',
      meta(
        'von … bis, seit, vor, ab',
        'Time expressions in a CV and in an interview.',
        ['grammar', 'prepositions-of-time', 'dative-prepositions', 'cv-career'],
        3,
        6,
      ),
      {
        items: [
          gap(
            't1',
            'Ich arbeite ___ 2019 bei Datana.',
            'seit',
            ['seit', 'vor', 'bis', 'für'],
            'I have worked at Datana since 2019.',
          ),
          gap(
            't2',
            '___ 2014 bis 2018 war ich Programmierer.',
            'Von',
            ['Von', 'Seit', 'Vor', 'Ab'],
            'From 2014 to 2018 I was a programmer.',
            'von … bis for a period with a start and an end.',
          ),
          gap(
            't3',
            'Ich habe ___ drei Jahren die Firma gewechselt.',
            'vor',
            ['vor', 'seit', 'bis', 'für'],
            'I changed company three years ago.',
          ),
          gap(
            't4',
            'Der Vertrag gilt ___ 31. Dezember.',
            'bis',
            ['bis', 'seit', 'vor', 'für'],
            'The contract is valid until 31 December.',
          ),
          gap(
            't5',
            'Sie kann ___ dem 1. Mai anfangen.',
            'ab',
            ['ab', 'seit', 'bis', 'vor'],
            'She can start from 1 May.',
          ),
          gap(
            't6',
            'Er hat ___ zwei Jahren die Stelle verloren.',
            'vor',
            ['vor', 'seit', 'bis', 'ab'],
            'He lost his job two years ago.',
          ),
          gap(
            't7',
            'Wie lange arbeiten Sie schon hier? – ___ fünf Jahren.',
            'Seit',
            ['Seit', 'Vor', 'Bis', 'Ab'],
            'How long have you worked here? – For five years.',
          ),
          gap(
            't8',
            'Ich habe ___ drei Monate Urlaub genommen.',
            'für',
            ['für', 'seit', 'vor', 'ab'],
            'I took three months’ leave.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-reasons',
      'gapfill',
      meta(
        'weil and deshalb – type the verb',
        'Reasons and consequences, with the verb in the right place.',
        ['grammar', 'subordinate-clauses', 'connectors', 'word-order', 'cv-career'],
        3,
        6,
      ),
      {
        items: [
          typed(
            'v1',
            'Ich suche eine neue Stelle, weil mein Chef unfreundlich ___. (sein)',
            'ist',
            'I am looking for a new job because my boss is unfriendly.',
            'In a weil-clause the conjugated verb is last.',
          ),
          typed(
            'v2',
            'Das Gehalt ist niedrig. Deshalb ___ ich die Firma. (wechseln)',
            'wechsle',
            'The salary is low. That is why I am changing company.',
            'After deshalb the verb is in second position.',
          ),
          typed(
            'v3',
            'Er hat viel Erfahrung, weil er lange im Ausland ___ hat. (arbeiten)',
            'gearbeitet',
            'He has a lot of experience because he worked abroad for a long time.',
          ),
          typed(
            'v4',
            'Ich möchte mehr lernen. Deshalb ___ ich einen Kurs. (machen)',
            'mache',
            'I want to learn more. That is why I am taking a course.',
          ),
          typed(
            'v5',
            'Sie bewirbt sich, weil die Stelle ihr ___. (gefallen)',
            'gefällt',
            'She is applying because she likes the job.',
          ),
          typed(
            'v6',
            'Wir haben wenig Zeit. Deshalb ___ wir schnell. (arbeiten)',
            'arbeiten',
            'We have little time. That is why we work fast.',
          ),
          typed(
            'v7',
            'Ich bleibe hier, weil ich die Kollegen ___. (mögen)',
            'mag',
            'I am staying here because I like my colleagues.',
          ),
          typed(
            'v8',
            'Er ist müde, weil er viele Überstunden ___ hat. (machen)',
            'gemacht',
            'He is tired because he has done a lot of overtime.',
          ),
        ],
      },
    ),
    activity(
      U,
      'conj-career',
      'conjugation',
      meta(
        'leiten, wechseln, verdienen …',
        'Present tense of the work verbs.',
        ['grammar', 'verb-conjugation', 'cv-career'],
        2,
        5,
      ),
      {
        tables: [
          table('leiten', 'to lead', ['ich', 'du', 'er/sie/es']),
          table('wechseln', 'to change', ['ich', 'du', 'wir']),
          table('verdienen', 'to earn', ['ich', 'du', 'ihr']),
          table('kündigen', 'to give notice', ['ich', 'er/sie/es', 'sie/Sie']),
          table('absolvieren', 'to complete', ['ich', 'du', 'wir']),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'My work history',
        'Perfekt, time expressions and reasons in the right order.',
        ['grammar', 'word-order', 'perfekt', 'cv-career'],
        2,
        6,
      ),
      {
        items: [
          sent('s1', 'From 2014 to 2018 I worked as a programmer.', [
            'Von',
            '2014',
            'bis',
            '2018',
            'habe',
            'ich',
            'als',
            'Programmierer',
            'gearbeitet.',
          ]),
          sent('s2', 'I have worked at Datana since 2019.', [
            'Ich',
            'arbeite',
            'seit',
            '2019',
            'bei',
            'Datana.',
          ]),
          sent(
            's3',
            'I moved to Germany ten years ago.',
            ['Vor', 'zehn', 'Jahren', 'bin', 'ich', 'nach', 'Deutschland', 'umgezogen.'],
            { alsoAccept: ['Ich bin vor zehn Jahren nach Deutschland umgezogen.'] },
          ),
          sent('s4', 'He has led the department for three years.', [
            'Er',
            'hat',
            'die',
            'Abteilung',
            'drei',
            'Jahre',
            'geleitet.',
          ]),
          sent('s5', 'I changed company because I wanted to earn more.', [
            'Ich',
            'habe',
            'die',
            'Firma',
            'gewechselt,',
            'weil',
            'ich',
            'mehr',
            'verdienen',
            'wollte.',
          ]),
          sent('s6', 'I can start from the first of October.', [
            'Ich',
            'kann',
            'ab',
            'dem',
            'ersten',
            'Oktober',
            'anfangen.',
          ]),
          sent('s7', 'She has finished her training.', [
            'Sie',
            'hat',
            'ihre',
            'Ausbildung',
            'beendet.',
          ]),
          sent('s8', 'My mother tongue is Polish.', ['Meine', 'Muttersprache', 'ist', 'Polnisch.']),
          sent('s9', 'I have a driving licence, class B.', [
            'Ich',
            'habe',
            'einen',
            'Führerschein,',
            'Klasse',
            'B.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'dialogues-career',
      'dialogue',
      meta(
        'Experience, CV and interview',
        'Talk about your work history, your CV and your plans.',
        ['communication', 'cv-career', 'perfekt'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'colleague',
            title: 'What did you do before?',
            emoji: '🧑‍🤝‍🧑',
            setting: 'A new colleague asks about your past.',
            turns: [
              say('Kollege', 'Was hast du vorher gemacht?', 'What did you do before?'),
              you(
                'Ich habe fünf Jahre in einem Hotel gearbeitet.',
                [
                  'Ich habe fünf Jahre in einem Hotel gearbeiten.',
                  'The Perfekt needs the participle: gearbeitet.',
                ],
                ['Ich bin fünf Jahre in einem Hotel gearbeitet.', 'arbeiten uses haben.'],
              ),
              say('Kollege', 'Warum hast du die Stelle gewechselt?', 'Why did you change jobs?'),
              you(
                'Ich habe sie gewechselt, weil ich mehr Geld verdienen wollte.',
                [
                  'Ich habe sie gewechselt, weil ich wollte mehr Geld verdienen.',
                  'After weil the verb goes to the end.',
                ],
                [
                  'Ich habe sie gewechselt, deshalb ich mehr Geld verdienen wollte.',
                  'deshalb starts a main clause: the verb is second.',
                ],
              ),
              say('Kollege', 'Und seit wann bist du hier?', 'And since when have you been here?'),
              you(
                'Seit einem Jahr.',
                ['Vor einem Jahr.', 'seit = for (up to now).'],
                ['Für einem Jahr.', 'Say seit einem Jahr.'],
              ),
            ],
          },
          {
            id: 'cv',
            title: 'Writing a tabular CV',
            emoji: '📑',
            setting: 'An adviser explains how to write a CV.',
            turns: [
              say(
                'Berater',
                'Sie müssen den Lebenslauf tabellarisch schreiben. Was kommt zuerst?',
                'You have to write the CV in table form. What comes first?',
              ),
              you(
                'Zuerst schreibe ich meine persönlichen Daten, dann meine Berufserfahrung.',
                [
                  'Zuerst ich schreibe meine persönlichen Daten, dann meine Berufserfahrung.',
                  'After zuerst the verb comes second.',
                ],
                [
                  'Zuerst schreibe ich meine persönlichen Daten, dann meinen Berufserfahrung.',
                  'die Berufserfahrung is feminine: meine.',
                ],
              ),
              say('Berater', 'Wie schreibt man die Zeiträume?', 'How do you write the periods?'),
              you(
                'Man schreibt zum Beispiel: 2014 bis 2018.',
                ['Man schreiben zum Beispiel: 2014 bis 2018.', 'man + er/sie/es form: schreibt.'],
                ['Man schreibt zum Beispiel: 2014 seit 2018.', 'Use bis for the end of a period.'],
              ),
            ],
          },
          {
            id: 'interview',
            title: 'The interview',
            emoji: '🤝',
            setting: 'The manager asks about your experience.',
            turns: [
              say('Chef', 'Erzählen Sie von Ihrer Erfahrung.', 'Tell me about your experience.'),
              you(
                'Ich habe vier Jahre als Programmierer gearbeitet und ein Team geleitet.',
                [
                  'Ich habe vier Jahre als Programmierer gearbeitet und ein Team geleiten.',
                  'leiten → geleitet.',
                ],
                [
                  'Ich habe vier Jahre als Programmierer gearbeitet und ein Team gelitten.',
                  'gelitten means “suffered”; the participle of leiten is geleitet.',
                ],
              ),
              say('Chef', 'Warum möchten Sie wechseln?', 'Why do you want to change?'),
              you(
                'Ich möchte mehr Verantwortung, deshalb suche ich eine neue Stelle.',
                [
                  'Ich möchte mehr Verantwortung, deshalb ich suche eine neue Stelle.',
                  'After deshalb the verb comes second.',
                ],
                [
                  'Ich möchte mehr Verantwortung, weil suche ich eine neue Stelle.',
                  'weil sends the verb to the end – here use deshalb.',
                ],
              ),
              say('Chef', 'Wann können Sie anfangen?', 'When can you start?'),
              you(
                'Ab dem ersten Oktober.',
                ['Seit dem ersten Oktober.', 'seit looks back; ab = from … on.'],
                ['Vor dem ersten Oktober.', 'vor = before.'],
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
        'CV blitz',
        'Perfekt and time words – true or false?',
        ['grammar', 'perfekt', 'prepositions-of-time'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Ich habe fünf Jahre als Koch gearbeitet.', true),
          tf('b2', 'Ich habe fünf Jahre als Koch gearbeiten.', false, 'Participle: gearbeitet.'),
          tf('b3', 'Er hat die Firma gewechselt.', true),
          tf('b4', 'Er hat die Firma wechseln.', false, 'Participle: gewechselt.'),
          tf('b5', 'Sie ist nach Berlin umgezogen.', true),
          tf(
            'b6',
            'Sie hat nach Berlin umgezogen.',
            false,
            'umziehen (change of place) uses sein.',
          ),
          tf('b7', 'Ich arbeite seit 2019 bei Datana.', true),
          tf('b8', 'Ich arbeite vor 2019 bei Datana.', false, 'seit = since / for.'),
          tf('b9', 'Von 2014 bis 2018 war ich Programmierer.', true),
          tf('b10', 'Von 2014 seit 2018 war ich Programmierer.', false, 'von … bis.'),
          tf('b11', 'Er hat das Projekt organisiert.', true),
          tf('b12', 'Er hat das Projekt georganisiert.', false, 'Verbs on -ieren have no ge-.'),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'CV words, the Perfekt and time expressions in one round.',
        ['vocabulary', 'grammar', 'cv-career'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Ich habe fünf Jahre als Koch ___.', 'gearbeitet', [
            'gearbeiten',
            'arbeitet',
            'arbeiten',
          ]),
          q('c2', 'Er hat das Projekt ___. (organisieren)', 'organisiert', [
            'georganisiert',
            'organisieren',
            'organisierte',
          ]),
          q('c3', 'Sie ist nach Berlin ___. (umziehen)', 'umgezogen', [
            'gezogen',
            'umgezieht',
            'umziehen',
          ]),
          q('c4', 'Ich arbeite ___ 2019 bei Datana.', 'seit', ['vor', 'bis', 'für']),
          q('c5', '___ 2014 bis 2018 war ich Programmierer.', 'Von', ['Seit', 'Vor', 'Ab']),
          q('c6', 'Ich habe die Firma gewechselt, ___ ich mehr Geld verdienen wollte.', 'weil', [
            'deshalb',
            'denn',
            'dann',
          ]),
          q('c7', 'Ich möchte mehr Geld. ___ wechsle ich die Firma.', 'Deshalb', [
            'Weil',
            'Denn',
            'Wenn',
          ]),
          q('c8', 'die Berufserfahrung', 'work experience', ['education', 'salary', 'job ad']),
          q('c9', 'der Führerschein', 'driving licence', ['passport', 'ID card', 'certificate']),
          q('c10', 'Which part of a CV lists your languages and IT skills?', 'Kenntnisse', [
            'Persönliche Daten',
            'Berufserfahrung',
            'Schulbildung',
          ]),
        ],
      },
    ),
  ],
};
