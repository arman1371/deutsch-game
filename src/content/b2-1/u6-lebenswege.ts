import { byDe, flashcards, listen, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  hint,
  meta,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  unitB21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b2-1-lebenswege';

const education = vocabList(U, 'Education and training', [
  ['Eignungstest', 'aptitude test', '🧭', 'der', 'Eignungstests'],
  ['Berufsorientierung', 'career orientation', '🗺️', 'die'],
  ['Quereinsteiger', 'career changer', '🔀', 'der', 'Quereinsteiger'],
  ['Studiengang', 'degree programme', '🎓', 'der', 'Studiengänge'],
  ['Studienfinanzierung', 'financing of studies', '💶', 'die'],
  ['Stipendium', 'scholarship', '🏅', 'das', 'Stipendien'],
  ['Hochschulreife', 'university entrance qualification', '📜', 'die'],
  ['Weiterqualifizierung', 'further qualification', '🔄', 'die'],
  ['Berufsmesse', 'careers fair', '🎪', 'die', 'Berufsmessen'],
  ['Werdegang', 'career path, background', '🛤️', 'der'],
  ['Fachkraft', 'skilled worker', '🧑‍🔧', 'die', 'Fachkräfte'],
  ['Studienabbrecher', 'university dropout', '🚪', 'der', 'Studienabbrecher'],
  ['Praxisbezug', 'practical relevance', '🔧', 'der'],
]);

const turns = vocabList(U, 'Choices and turning points', [
  ['Weichenstellung', 'setting the course', '🚏', 'die', 'Weichenstellungen'],
  ['Wendepunkt', 'turning point', '↩️', 'der', 'Wendepunkte'],
  ['Umweg', 'detour', '🛣️', 'der', 'Umwege'],
  ['Rückschlag', 'setback', '📉', 'der', 'Rückschläge'],
  ['Durchhaltevermögen', 'perseverance', '🧗', 'das'],
  ['Ehrgeiz', 'ambition', '🚀', 'der'],
  ['Berufung', 'calling, vocation', '🌟', 'die'],
  ['umsatteln', 'to switch (careers)', '🐴'],
  ['durchstarten', 'to take off (career)', '🚪'],
  ['aufsteigen', 'to be promoted, rise', '🪜'],
  ['sich bewähren', 'to prove oneself', '🏆'],
  ['Fuß fassen', 'to gain a foothold', '🦶'],
]);

const timing = vocabList(U, 'Talking about timing', [
  ['Solange ich studiere, jobbe ich nebenbei.', 'As long as I study, I work on the side.', '📚'],
  [
    'Sobald ich meinen Abschluss habe, bewerbe ich mich.',
    'As soon as I have my degree, I will apply.',
    '🎓',
  ],
  [
    'Ehe ich mich entschied, habe ich viele Praktika gemacht.',
    'Before I decided, I did many internships.',
    '🧩',
  ],
  [
    'Seitdem ich in Berlin lebe, habe ich viele Kontakte.',
    'Since I have lived in Berlin, I have many contacts.',
    '🏙️',
  ],
  [
    'Sooft ich ihn sehe, erzählt er von seinem Studium.',
    'Whenever I see him, he talks about his studies.',
    '🗣️',
  ],
  [
    'Es dauerte zwei Jahre, bis ich die richtige Stelle fand.',
    'It took two years until I found the right job.',
    '⏳',
  ],
  [
    'Nachdem er die Ausbildung beendet hatte, wechselte er die Branche.',
    'After he had finished his training, he changed sector.',
    '🔁',
  ],
]);

const vocab = [...education, ...turns, ...timing];

export const lebenswege: UnitContent = {
  unit: unitB21({
    id: U,
    order: 6,
    title: 'Lebenswege & Ausbildung',
    subtitle: 'Studying, training, career changes and turning points – and timing words',
    emoji: '🛤️',
    goals: [
      'Describe educational paths and career changes',
      'Talk to a careers adviser and at a careers fair',
      'Say when and for how long things happen',
    ],
    grammar: [
      'Temporal conjunctions: solange, sobald, ehe, seitdem, sooft, bis.',
      'Review: nachdem, bevor and während from B1.',
    ],
    vocabFields: ['Education and training', 'Choices and turning points', 'Talking about timing'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-education',
      'flashcards',
      meta(
        'Education and training',
        'Studiengang, Stipendium, Eignungstest – paths into a career.',
        ['vocabulary', 'life-paths'],
        1,
        5,
      ),
      flashcards(education),
    ),
    activity(
      U,
      'flash-turns',
      'flashcards',
      meta(
        'Choices and turning points',
        'Wendepunkt, Rückschlag, Fuß fassen – the ups and downs of a career.',
        ['vocabulary', 'life-paths'],
        1,
        5,
      ),
      flashcards(turns),
    ),
    activity(
      U,
      'flash-timing',
      'flashcards',
      meta(
        'Talking about timing',
        'solange, sobald, ehe, seitdem – in full sentences.',
        ['vocabulary', 'communication', 'life-paths'],
        1,
        4,
      ),
      flashcards(timing),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Study and career', 'Name what you see.', ['vocabulary', 'life-paths'], 1, 4),
      quizEmoji(
        byDe(
          [...education, ...turns],
          'Studiengang',
          'Stipendium',
          'Berufsmesse',
          'Fachkraft',
          'Rückschlag',
          'Wendepunkt',
          'aufsteigen',
          'Umweg',
        ),
      ),
    ),
    activity(
      U,
      'listen-timing',
      'listen',
      meta('Hear the timing', 'Listen and pick the meaning.', ['listening', 'life-paths'], 2, 4),
      listen(timing),
    ),
    activity(
      U,
      'memory-connectors',
      'memory',
      meta(
        'What does it mean?',
        'Match the conjunction with its meaning.',
        ['vocabulary', 'temporal-connectors', 'life-paths'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'solange', b: 'for as long as' },
          { id: 'm2', a: 'sobald', b: 'as soon as' },
          { id: 'm3', a: 'ehe', b: 'before' },
          { id: 'm4', a: 'seitdem', b: 'since then' },
          { id: 'm5', a: 'sooft', b: 'whenever' },
          { id: 'm6', a: 'bis', b: 'until' },
        ],
      },
    ),
    activity(
      U,
      'spell-education',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'life-paths'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(education, 'Stipendium', 'Eignungstest', 'Werdegang'), 'unscramble').items,
          ...spell(byDe(turns, 'Weichenstellung', 'Durchhaltevermögen', 'Ehrgeiz'), 'type').items,
          dictation(
            'd1',
            'Solange ich studiere, jobbe ich nebenbei.',
            'as long as I study, I work on the side',
          ),
          dictation(
            'd2',
            'Sobald ich meinen Abschluss habe, bewerbe ich mich.',
            'as soon as I have my degree, I apply',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-timing',
      'sortit',
      meta(
        'Before, during or after?',
        'Sort the conjunctions by time relation.',
        ['grammar', 'temporal-connectors'],
        2,
        4,
      ),
      {
        instruction: 'Does the clause happen at the same time, before, or after the main clause?',
        buckets: [
          { id: 'same', label: 'gleichzeitig', emoji: '⏺️' },
          { id: 'before', label: 'davor', emoji: '⏪' },
          { id: 'after', label: 'danach', emoji: '⏩' },
        ],
        items: sortItems('t', [
          ['solange', 'same'],
          ['während', 'same'],
          ['sooft', 'same'],
          ['ehe', 'before'],
          ['bevor', 'before'],
          ['sobald', 'after'],
          ['nachdem', 'after'],
          ['seitdem', 'after'],
        ]),
      },
    ),
    activity(
      U,
      'gap-timing',
      'gapfill',
      meta(
        'When and how long?',
        'Choose the right temporal conjunction.',
        ['grammar', 'temporal-connectors'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              't1',
              '___ ich studiere, jobbe ich nebenbei.',
              'Solange',
              ['Solange', 'Sobald', 'Ehe', 'Seitdem'],
              'As long as I study, I work on the side.',
              'solange = for the whole time that.',
            ),
            {
              Sobald: 'sobald means “as soon as” – a moment, not a lasting period.',
              Ehe: 'ehe means “before”; the jobbing happens during the studies.',
              Seitdem: 'seitdem means “since then”; it does not express the whole period.',
            },
          ),
          hint(
            gap(
              't2',
              '___ ich meinen Abschluss habe, bewerbe ich mich.',
              'Sobald',
              ['Sobald', 'Solange', 'Ehe', 'Sooft'],
              'As soon as I have my degree, I will apply.',
              'sobald = immediately when something has happened.',
            ),
            {
              Solange: 'solange expresses a lasting period, not a moment.',
              Ehe: 'ehe means “before”; the application comes after the degree.',
              Sooft: 'sooft means “whenever” and needs repeated events.',
            },
          ),
          hint(
            gap(
              't3',
              '___ du dich entscheidest, solltest du ein Praktikum machen.',
              'Ehe',
              ['Ehe', 'Sobald', 'Seitdem', 'Solange'],
              'Before you decide, you should do an internship.',
              'ehe = bevor: the internship comes first.',
            ),
            {
              Sobald: 'sobald would mean the internship comes after the decision.',
              Seitdem: 'seitdem means “since then” and needs a starting point in the past.',
              Solange: 'solange would mean “as long as you are deciding”.',
            },
          ),
          hint(
            gap(
              't4',
              '___ er in Berlin studiert, hat er viele Freunde gefunden.',
              'Seitdem',
              ['Seitdem', 'Solange', 'Ehe', 'Sobald'],
              'Since he has been studying in Berlin, he has found many friends.',
              'seitdem = since a point in the past, up to now.',
            ),
            {
              Solange: 'solange would not say that this started at some point.',
              Ehe: 'ehe means “before”.',
              Sobald: 'sobald means “as soon as” and fits a single event.',
            },
          ),
          hint(
            gap(
              't5',
              '___ ich ihn sehe, erzählt er von seinem Studium.',
              'Sooft',
              ['Sooft', 'Sobald', 'Seitdem', 'Ehe'],
              'Whenever I see him, he talks about his studies.',
              'sooft = every time that.',
            ),
            {
              Sobald: 'sobald fits one event; the sentence describes a repeated habit.',
              Seitdem: 'seitdem means “since then”, not “every time”.',
              Ehe: 'ehe means “before”.',
            },
          ),
          hint(
            typed(
              't6',
              'Ich bleibe in der Stadt, ___ ich Arbeit habe. (as long as)',
              'solange',
              'I will stay in the city as long as I have work.',
              'solange starts a subordinate clause: the verb is at the end.',
            ),
            { sobald: 'sobald means “as soon as” – the sentence needs “as long as”: solange.' },
          ),
          hint(
            typed(
              't7',
              'Ruf mich an, ___ du angekommen bist. (as soon as)',
              'sobald',
              'Call me as soon as you have arrived.',
              'sobald starts a subordinate clause: the verb is at the end.',
            ),
            { solange: 'solange means “as long as” – the sentence needs “as soon as”: sobald.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-timing',
      'sentence',
      meta(
        'When?',
        'Build sentences with solange, sobald, ehe and seitdem.',
        ['grammar', 'word-order', 'temporal-connectors'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'As long as I study, I work on the side.', [
            'Solange',
            'ich',
            'studiere,',
            'jobbe',
            'ich',
            'nebenbei.',
          ]),
          sent('s2', 'As soon as I have my degree, I will apply.', [
            'Sobald',
            'ich',
            'meinen',
            'Abschluss',
            'habe,',
            'bewerbe',
            'ich',
            'mich.',
          ]),
          sent('s3', 'Before you decide, you should do an internship.', [
            'Ehe',
            'du',
            'dich',
            'entscheidest,',
            'solltest',
            'du',
            'ein',
            'Praktikum',
            'machen.',
          ]),
          sent('s4', 'Since he has lived in Berlin, he has found many friends.', [
            'Seitdem',
            'er',
            'in',
            'Berlin',
            'wohnt,',
            'hat',
            'er',
            'viele',
            'Freunde',
            'gefunden.',
          ]),
          sent('s5', 'It took two years until she found the right job.', [
            'Es',
            'dauerte',
            'zwei',
            'Jahre,',
            'bis',
            'sie',
            'die',
            'richtige',
            'Stelle',
            'fand.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-paths',
      'listen',
      meta(
        'Life stories',
        'Listen to people talk about their paths and pick what they mean.',
        ['listening', 'life-paths'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Nach dem Abitur habe ich zuerst eine Ausbildung gemacht. Erst später habe ich mich für ein Studium entschieden.',
            'She did an apprenticeship first and only later decided to study.',
            [
              'She studied first and then trained.',
              'She never studied.',
              'She dropped out of her apprenticeship.',
            ],
          ),
          heard(
            'l2',
            'Ich bin Quereinsteiger. Früher war ich Koch, jetzt arbeite ich als Programmierer.',
            'He changed careers: he used to be a cook and now is a programmer.',
            [
              'He is a cook who also programs.',
              'He has always been a programmer.',
              'He was a programmer and became a cook.',
            ],
          ),
          heard(
            'l3',
            'Ohne das Stipendium hätte ich das Studium nicht finanzieren können.',
            'Without the scholarship she could not have financed her studies.',
            [
              'She got a scholarship and did not study.',
              'She paid for everything herself.',
              'She refused the scholarship.',
            ],
          ),
          heard(
            'l4',
            'Der Rückschlag im ersten Jahr war hart, aber er war ein Wendepunkt für mich.',
            'The setback in the first year was hard but became a turning point.',
            [
              'The first year went perfectly.',
              'The setback made him give up for good.',
              'He did not have any setbacks.',
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
        'Career advice and careers fair',
        'Talk to a careers adviser and ask questions at a fair.',
        ['communication', 'life-paths'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'advice',
            title: 'Bei der Berufsberatung',
            emoji: '🧭',
            setting: 'You are unsure whether to study or train and visit a careers adviser.',
            turns: [
              say(
                'Beraterin',
                'Was möchten Sie später gern machen?',
                'What would you like to do later?',
              ),
              you(
                'Ich bin mir noch unsicher. Ehe ich mich entscheide, möchte ich mehr über Studiengänge und Ausbildungen erfahren.',
                [
                  'Keine Ahnung. Das ist mir egal.',
                  'Give a real answer – explain that you want to inform yourself first.',
                ],
                [
                  'Ich bin mir noch unsicher. Ehe ich entscheide mich, möchte ich mehr erfahren.',
                  'Ehe starts a subordinate clause: the verb goes to the end: Ehe ich mich entscheide.',
                ],
              ),
              say(
                'Beraterin',
                'Sehr vernünftig. Sobald Sie Ihre Interessen kennen, können wir passende Angebote suchen.',
                'Very sensible. As soon as you know your interests, we can look for suitable options.',
              ),
              you('Danke. Gibt es auch ein Stipendium für ein duales Studium?', [
                'Gibt es auch Geld, ohne dass ich etwas tun muss?',
                'Ask a concrete, polite question about financing.',
              ]),
            ],
          },
          {
            id: 'fair',
            title: 'Auf der Berufsmesse',
            emoji: '🎪',
            setting: 'At a careers fair you talk to a company representative.',
            turns: [
              say(
                'Personalerin',
                'Guten Tag! Wofür interessieren Sie sich?',
                'Hello! What are you interested in?',
              ),
              you(
                'Ich interessiere mich für ein duales Studium. Wie lange dauert die Ausbildung bei Ihnen?',
                [
                  'Ich interessiere mich auf ein duales Studium.',
                  'sich interessieren takes für: Ich interessiere mich für …',
                ],
                [
                  'Gar nichts. Ich bin nur wegen der kostenlosen Stifte hier.',
                  'Show real interest – ask about the programme.',
                ],
              ),
              say(
                'Personalerin',
                'Drei Jahre. Seitdem wir das Programm anbieten, sind fast alle Teilnehmer übernommen worden.',
                'Three years. Since we have offered the programme, almost all participants have been taken on.',
              ),
              you(
                'Das klingt gut. Wie kann ich mich bewerben, und bis wann muss ich die Unterlagen einreichen?',
                [
                  'Dann kommen Sie zu mir nach Hause.',
                  'Ask for the application process in a professional way.',
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
        'Timing blitz',
        'Temporal conjunctions and career words – true or false?',
        ['grammar', 'temporal-connectors'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Solange es regnet, bleiben wir drinnen.', true),
          tf(
            'b2',
            'Solange es regnet wir bleiben drinnen.',
            false,
            'solange sends the verb to the end of its clause and the main clause starts with the verb: …, bleiben wir drinnen.',
          ),
          tf('b3', 'Sobald ich Zeit habe, rufe ich dich an.', true),
          tf(
            'b4',
            'Sobald ich habe Zeit, rufe ich dich an.',
            false,
            'sobald starts a subordinate clause: Sobald ich Zeit habe.',
          ),
          tf('b5', 'Ehe er kam, war alles vorbereitet.', true),
          tf('b6', 'Sooft = jedes Mal, wenn.', true),
          tf('b7', 'Seitdem bedeutet „bis jetzt seit einem Zeitpunkt“.', true),
          tf(
            'b8',
            'Ein Quereinsteiger arbeitet immer in seinem Ausbildungsberuf.',
            false,
            'A Quereinsteiger enters a field without the usual training.',
          ),
          tf('b9', 'Ein Stipendium muss man in der Regel nicht zurückzahlen.', true),
          tf(
            'b10',
            'Ein Wendepunkt ist eine Straße ohne Ausgang.',
            false,
            'A Wendepunkt is a turning point in a life or career.',
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
        'Study and career words and temporal conjunctions in one round.',
        ['vocabulary', 'grammar', 'life-paths'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', '___ er studierte, arbeitete er in einer Bar.', 'Solange', [
              'Sobald',
              'Ehe',
              'Sooft',
            ]),
            {
              Sobald: 'sobald means “as soon as” – a moment, not a lasting period.',
              Ehe: 'ehe means “before”.',
              Sooft: 'sooft means “whenever” and needs repeated events.',
            },
            'temporal-connectors',
          ),
          hint(
            q('c2', 'Ruf an, ___ du zu Hause bist!', 'sobald', ['ehe', 'seitdem', 'solange']),
            {
              ehe: 'ehe means “before”; the call comes after arriving.',
              seitdem: 'seitdem means “since then”.',
              solange: 'solange means “as long as”.',
            },
            'temporal-connectors',
          ),
          hint(
            q('c3', '___ du gehst, musst du die Tür abschließen.', 'Ehe', [
              'Seitdem',
              'Sooft',
              'Sobald',
            ]),
            {
              Seitdem: 'seitdem needs a starting point in the past.',
              Sooft: 'sooft means “whenever”.',
              Sobald: 'sobald would put the locking after leaving.',
            },
            'temporal-connectors',
          ),
          q('c4', 'der Quereinsteiger', 'career changer', [
            'skilled worker',
            'university dropout',
            'careers adviser',
          ]),
          q('c5', 'umsatteln', 'to switch (careers)', [
            'to rise',
            'to prove oneself',
            'to start out',
          ]),
          q('c6', 'das Durchhaltevermögen', 'perseverance', ['ambition', 'setback', 'detour']),
          q('c7', 'die Hochschulreife', 'university entrance qualification', [
            'further qualification',
            'scholarship',
            'degree programme',
          ]),
          q('c8', 'der Werdegang', 'career path, background', [
            'turning point',
            'practical relevance',
            'careers fair',
          ]),
          q(
            'c9',
            'You want to say you are still deciding and want more information first.',
            'Ehe ich mich entscheide, möchte ich mehr erfahren.',
            [
              'Sobald ich mich entschieden habe, will ich nichts mehr wissen.',
              'Seitdem ich mich entscheide, weiß ich alles.',
              'Solange ich entscheide, bin ich fertig.',
            ],
          ),
          q('c10', 'Fuß fassen', 'to gain a foothold', [
            'to give up',
            'to take a break',
            'to switch careers',
          ]),
        ],
      },
    ),
  ],
};
