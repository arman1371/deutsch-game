import { byDe, vocabList } from '../builders';
import {
  activity,
  gap,
  heard,
  meta,
  passiveFutureTable,
  passivePerfectTable,
  passivePreteriteTable,
  q,
  say,
  sent,
  sortItems,
  stateTable,
  tf,
  typed,
  unitC22,
  vocabPath,
  withLesson,
  withWhy,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'c2-2-kulturerbe';
const LESSON = 'c22-passive-forms' as const;

const erbe = vocabList(U, 'Heritage & customs', [
  ['Weltkulturerbe', 'World Heritage Site', '🌐', 'das'],
  ['Denkmalschutz', 'protection of monuments', '🛡️', 'der'],
  ['Brauchtum', 'customs and traditions', '🎎', 'das'],
  ['Überlieferung', 'tradition, handing down', '📜', 'die', 'Überlieferungen'],
  ['Nachwelt', 'posterity', '👴', 'die'],
  ['Gedenkstätte', 'memorial site', '🕯️', 'die', 'Gedenkstätten'],
  ['Ausgrabung', 'excavation', '⛏️', 'die', 'Ausgrabungen'],
  ['Sanierung', 'renovation, redevelopment', '🧱', 'die', 'Sanierungen'],
  ['Zeitalter', 'age, era', '🕰️', 'das', 'Zeitalter'],
  ['Maskerade', 'masquerade', '🎭', 'die', 'Maskeraden'],
  ['Sitte', 'custom, convention', '🧭', 'die', 'Sitten'],
  ['Zeremonie', 'ceremony', '🎊', 'die', 'Zeremonien'],
  ['Kulturgut', 'cultural asset', '🏺', 'das', 'Kulturgüter'],
]);

const bewahren = vocabList(U, 'Preserving & remembering', [
  ['bewahren', 'to preserve', '🔒'],
  ['überliefern', 'to hand down', '🤲'],
  ['begehen', 'to observe (an occasion)', '🎉'],
  ['restaurieren', 'to restore', '🛠️'],
  ['ausgraben', 'to dig up', '🪏'],
  ['enthüllen', 'to unveil', '🎁'],
  ['einweihen', 'to inaugurate', '🎀'],
  ['würdigen', 'to honour, to acknowledge', '🏅'],
  ['gedenken', 'to commemorate', '🌹'],
  ['in Vergessenheit geraten', 'to fall into oblivion', '🌫️'],
  ['prägen', 'to shape, to leave a mark on', '🪙'],
]);

const vocab = [...erbe, ...bewahren];
const grammarTags = ['grammar', LESSON, 'c22-heritage'] as const;

export const kulturerbe: UnitContent = {
  unit: unitC22({
    id: U,
    order: 3,
    title: 'Kulturerbe & Rituale',
    subtitle: 'History, customs and monuments – the passive in every tense',
    emoji: '🏛️',
    goals: [
      'Talk about heritage, customs, rituals and historical events',
      'Choose between process (werden) and state (sein) in the passive',
      'Form the passive in Präteritum, Perfekt, Plusquamperfekt, Futur and with modal verbs',
    ],
    grammar: [
      'Vorgangspassiv: Das Denkmal wurde 1895 enthüllt. / Es ist saniert worden.',
      'Zustandspassiv: Das Museum ist montags geschlossen.',
      'Passive Plusquamperfekt and Futur: war enthüllt worden, wird saniert werden',
      'Passive with modal verbs: Der Brauch muss bewahrt werden.',
    ],
    vocabFields: ['Heritage & customs', 'Preserving & remembering'],
  }),
  vocab,
  activities: [
    ...vocabPath({
      unitId: U,
      topic: 'c22-heritage',
      lists: [
        {
          key: 'heritage',
          title: 'Heritage & customs',
          description: 'Weltkulturerbe, Brauchtum, Nachwelt – history around us.',
          vocab: erbe,
        },
        {
          key: 'preserve',
          title: 'Preserving & remembering',
          description: 'bewahren, enthüllen, gedenken – what we do with the past.',
          vocab: bewahren,
        },
      ],
      pictures: byDe(
        erbe,
        'Weltkulturerbe',
        'Denkmalschutz',
        'Brauchtum',
        'Nachwelt',
        'Gedenkstätte',
        'Ausgrabung',
        'Sanierung',
        'Maskerade',
      ),
      picturesTitle: 'Signs of the past',
      picturesDescription: 'Name the heritage word.',
      listening: bewahren,
      listenTitle: 'Hear the guide',
      pairs: byDe(
        bewahren,
        'bewahren',
        'überliefern',
        'begehen',
        'restaurieren',
        'ausgraben',
        'enthüllen',
        'einweihen',
        'würdigen',
      ),
      memoryTitle: 'History memory',
      memoryDescription: 'Match each verb with its meaning.',
      unscramble: byDe(erbe, 'Brauchtum', 'Sanierung', 'Zeremonie'),
      typeIn: byDe(erbe, 'Weltkulturerbe', 'Gedenkstätte'),
      dictations: [
        [
          'd1',
          'Die Altstadt wurde zum Weltkulturerbe erklärt.',
          'The old town was declared a World Heritage Site.',
        ],
        [
          'd2',
          'Das Brauchtum wird von Generation zu Generation überliefert.',
          'The customs are handed down from generation to generation.',
        ],
      ],
    }),
    activity(
      U,
      'conj-passive',
      'conjugation',
      meta(
        'wurde, ist … worden, wird … werden',
        'The passive in Präteritum, Perfekt and Futur, and the state with sein.',
        [...grammarTags],
        2,
        6,
      ),
      {
        tables: [
          passivePreteriteTable('gefragt', 'was asked', ['ich', 'du', 'er/sie/es']),
          passivePerfectTable('eingeladen', 'has been invited', ['ich', 'wir', 'sie/Sie']),
          passiveFutureTable('informiert', 'will be informed', ['du', 'er/sie/es', 'ihr']),
          stateTable('eingeladen', 'is invited (state)', ['ich', 'ihr', 'sie/Sie']),
        ],
      },
    ),
    activity(
      U,
      'gap-tense',
      'gapfill',
      meta(
        'Which passive form?',
        'Choose the right auxiliary or participle.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'p1',
              'Das Denkmal ___ 1895 enthüllt.',
              'wurde',
              ['wurde', 'wird', 'ist', 'war'],
              'The monument was unveiled in 1895.',
              'A past process → wurde + Partizip II.',
            ),
            {
              wird: 'wird is the present; 1895 needs the past.',
              ist: 'ist + participle would describe a state, not the event of 1895.',
              war: 'war + participle describes a state in the past; the unveiling is an event.',
            },
          ),
          withWhy(
            gap(
              'p2',
              'Die Altstadt ist vor Jahren aufwendig saniert ___.',
              'worden',
              ['worden', 'geworden', 'werden', 'wurden'],
              'The old town was painstakingly renovated years ago.',
              'Passive Perfekt: ist + Partizip II + worden.',
            ),
            {
              geworden: 'geworden is the participle of werden as a full verb (“become”).',
              werden: 'The perfect needs the participle worden, not the infinitive.',
              wurden: 'wurden is the simple past and cannot follow ist.',
            },
          ),
          withWhy(
            gap(
              'p3',
              'Der Brauch ___ seit Generationen mündlich überliefert.',
              'wird',
              ['wird', 'ist', 'wurde', 'würde'],
              'The custom has been handed down orally for generations.',
              'An ongoing process up to the present → wird + Partizip II.',
            ),
            {
              ist: 'ist + participle would describe a finished state, but the handing down goes on.',
              wurde: 'The simple past would suggest that the handing down ended.',
              würde: 'würde is Konjunktiv II – there is no condition here.',
            },
          ),
          withWhy(
            gap(
              'p4',
              'Das Museum ___ montags geschlossen.',
              'ist',
              ['ist', 'wird', 'wurde', 'worden'],
              'The museum is closed on Mondays.',
              'A state (Zustandspassiv) → sein + Partizip II.',
            ),
            {
              wird: 'wird geschlossen means “is being closed” – a process, not a state.',
              wurde: 'wurde geschlossen means “was closed (at some time)”.',
              worden: 'worden only appears in the passive perfect.',
            },
          ),
          withWhy(
            gap(
              'p5',
              'Die Brücke ___ im nächsten Jahr saniert werden.',
              'wird',
              ['wird', 'ist', 'wurde', 'worden'],
              'The bridge will be renovated next year.',
              'Passive Futur I: wird + Partizip II + werden.',
            ),
            {
              ist: 'ist … werden does not exist; the future passive is wird … werden.',
              wurde: 'wurde is past; the sentence is about next year.',
              worden: 'worden belongs to the perfect, not the future.',
            },
          ),
          withWhy(
            gap(
              'p6',
              'Das Fest ___ gestern von der ganzen Stadt gefeiert.',
              'wurde',
              ['wurde', 'worden', 'ist', 'wird'],
              'The festival was celebrated by the whole town yesterday.',
              'Simple past passive: wurde + Partizip II.',
            ),
            {
              worden: 'worden needs ist / war before it (ist gefeiert worden).',
              ist: 'ist gefeiert would be a state; gestern points to an event.',
              wird: 'wird is the present.',
            },
          ),
          typed(
            'p7',
            'Der Eingang war bereits gesperrt ___.',
            'worden',
            'The entrance had already been closed off (by someone).',
            'Passive Plusquamperfekt: war + Partizip II + worden.',
          ),
          typed(
            'p8',
            'Das Tor ___ von 9 bis 17 Uhr geöffnet.',
            'ist',
            'The gate is open from 9 to 5.',
            'A state → sein + Partizip II.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sort-passive',
      'sortit',
      meta(
        'Process, state or perfect?',
        'Vorgangspassiv, Zustandspassiv or Passiv Perfekt?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'Which kind of passive is it?',
        buckets: [
          { id: 'process', label: 'Vorgangspassiv (werden)', emoji: '⚙️' },
          { id: 'state', label: 'Zustandspassiv (sein)', emoji: '🔒' },
          { id: 'perfect', label: 'Passiv Perfekt (… worden)', emoji: '⏮️' },
        ],
        items: sortItems('s', [
          ['Die Kirche wird renoviert.', 'process'],
          ['Das Fest wurde abgesagt.', 'process'],
          ['Die Gäste werden empfangen.', 'process'],
          ['Die Kirche ist renoviert.', 'state'],
          ['Das Fest ist abgesagt.', 'state'],
          ['Die Tür ist geschlossen.', 'state'],
          ['Die Kirche ist renoviert worden.', 'perfect'],
          ['Das Fest ist abgesagt worden.', 'perfect'],
          ['Die Gäste sind empfangen worden.', 'perfect'],
          ['Das Denkmal war schon enthüllt worden.', 'perfect'],
          ['Das Denkmal war schon enthüllt.', 'state'],
          ['Das Denkmal wurde enthüllt.', 'process'],
        ]),
      },
    ),
    activity(
      U,
      'quiz-transform',
      'quiz',
      meta(
        'Active → passive',
        'Put the sentence into the passive in the tense given.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            't1',
            'Man hat das Schloss restauriert. (Passiv Perfekt)',
            'Das Schloss ist restauriert worden.',
            [
              'Das Schloss ist restauriert geworden.',
              'Das Schloss hat restauriert worden.',
              'Das Schloss wurde restauriert worden.',
            ],
            'Passive Perfekt: sein + Partizip II + worden.',
          ),
          q(
            't2',
            'Man baut das Theater wieder auf. (Passiv Präsens)',
            'Das Theater wird wieder aufgebaut.',
            [
              'Das Theater ist wieder aufgebaut.',
              'Das Theater wird wieder aufgebaut worden.',
              'Das Theater wird wieder gebaut auf.',
            ],
            'werden + Partizip II (aufgebaut).',
          ),
          q(
            't3',
            'Man wird das Archiv digitalisieren. (Passiv Futur)',
            'Das Archiv wird digitalisiert werden.',
            [
              'Das Archiv wird digitalisiert worden.',
              'Das Archiv wird digitalisieren werden.',
              'Das Archiv würde digitalisiert.',
            ],
            'Passive Futur I: wird + Partizip II + werden.',
          ),
          q(
            't4',
            'Man muss die Fassade schützen. (Passiv mit Modalverb)',
            'Die Fassade muss geschützt werden.',
            [
              'Die Fassade muss geschützt worden.',
              'Die Fassade muss schützen werden.',
              'Die Fassade wird geschützt müssen.',
            ],
            'Modal verb + Partizip II + werden.',
          ),
          q(
            't5',
            'Man hatte das Denkmal schon enthüllt. (Passiv Plusquamperfekt)',
            'Das Denkmal war schon enthüllt worden.',
            [
              'Das Denkmal hatte schon enthüllt worden.',
              'Das Denkmal war schon enthüllt geworden.',
              'Das Denkmal wurde schon enthüllt gewesen.',
            ],
            'Passive Plusquamperfekt: war + Partizip II + worden.',
          ),
          q(
            't6',
            'Man konnte das Dach nicht retten. (Passiv Präteritum mit Modalverb)',
            'Das Dach konnte nicht gerettet werden.',
            [
              'Das Dach konnte nicht gerettet worden.',
              'Das Dach wurde nicht retten können.',
              'Das Dach war nicht gerettet können.',
            ],
            'Modal verb in the simple past + Partizip II + werden.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'History in the passive',
        'Build passive sentences about heritage.',
        [...grammarTags],
        3,
        7,
      ),
      {
        items: [
          sent(
            's1',
            'The old town was declared a World Heritage Site in 1995.',
            ['Die', 'Altstadt', 'wurde', '1995', 'zum', 'Weltkulturerbe', 'erklärt.'],
            { alsoAccept: ['1995 wurde die Altstadt zum Weltkulturerbe erklärt.'] },
          ),
          sent('s2', 'The custom has been handed down orally for centuries.', [
            'Der',
            'Brauch',
            'wird',
            'seit',
            'Jahrhunderten',
            'mündlich',
            'überliefert.',
          ]),
          sent('s3', 'The monument has not been restored yet.', [
            'Das',
            'Denkmal',
            'ist',
            'noch',
            'nicht',
            'restauriert',
            'worden.',
          ]),
          sent('s4', 'The memorial site is open every day.', [
            'Die',
            'Gedenkstätte',
            'ist',
            'täglich',
            'geöffnet.',
          ]),
          sent('s5', 'Old customs must be preserved.', [
            'Alte',
            'Bräuche',
            'müssen',
            'bewahrt',
            'werden.',
          ]),
          sent('s6', 'The excavation had been stopped in 1990.', [
            'Die',
            'Ausgrabung',
            'war',
            '1990',
            'gestoppt',
            'worden.',
          ]),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'listen-guide',
      'listen',
      meta('On the city tour', 'Listen to the guide.', ['listening', 'c22-heritage'], 3, 5),
      {
        items: [
          heard(
            'l1',
            'Die Altstadt wurde vor zwanzig Jahren zum Weltkulturerbe erklärt.',
            'The old town was declared a World Heritage Site twenty years ago.',
            [
              'The old town will be declared a World Heritage Site soon.',
              'The old town is no longer a World Heritage Site.',
              'The old town was built twenty years ago.',
            ],
          ),
          heard(
            'l2',
            'Das Schloss ist seit Monaten für Besucher gesperrt.',
            'The palace has been closed to visitors for months.',
            [
              'The palace is being closed right now.',
              'The palace was opened for visitors months ago.',
              'The palace will be closed for months.',
            ],
          ),
          heard(
            'l3',
            'Der Brauch wird in dieser Region bis heute gepflegt.',
            'The custom is still cultivated in this region today.',
            [
              'The custom has been forgotten in this region.',
              'The custom was introduced in this region today.',
              'The custom is only cultivated abroad.',
            ],
          ),
          heard(
            'l4',
            'Die Zeitzeugen sind noch nie zu ihren Erinnerungen befragt worden.',
            'The eyewitnesses have never been asked about their memories.',
            [
              'The eyewitnesses are asked about their memories every day.',
              'The eyewitnesses have refused to remember.',
              'The eyewitnesses will be asked soon.',
            ],
          ),
          heard(
            'l5',
            'Die Gedenkstätte wird nächstes Jahr feierlich eingeweiht werden.',
            'The memorial site will be solemnly inaugurated next year.',
            [
              'The memorial site was inaugurated last year.',
              'The memorial site is closed next year.',
              'The memorial site has been demolished.',
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
        'Customs and monuments',
        'Use the passive when talking about the past.',
        ['communication', LESSON, 'c22-heritage'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'stadtfuehrung',
            title: 'Auf der Stadtführung',
            emoji: '🗺️',
            setting: 'A guide shows your group an old city gate.',
            turns: [
              say(
                'Stadtführer',
                'Sehen Sie das Tor? Es wurde im Krieg zerstört und später wieder aufgebaut.',
                'Do you see the gate? It was destroyed in the war and rebuilt later.',
              ),
              you(
                'Ist es seitdem noch einmal renoviert worden?',
                [
                  'Ist es seitdem noch einmal renoviert geworden?',
                  'Passive perfect: renoviert worden – geworden is the participle of werden as a full verb.',
                ],
                [
                  'Wird es seitdem noch einmal renoviert worden?',
                  'The perfect needs ist … worden; wird … worden does not exist.',
                ],
              ),
              say(
                'Stadtführer',
                'Nein, aber es soll nächstes Jahr saniert werden.',
                'No, but it is supposed to be renovated next year.',
              ),
              you(
                'Gut, dass die Altstadt so sorgfältig gepflegt wird.',
                [
                  'Gut, dass die Altstadt so sorgfältig gepflegt ist.',
                  'Ongoing care is a process → wird gepflegt; ist gepflegt describes a state.',
                ],
                [
                  'Gut, dass die Altstadt so sorgfältig gepflegt worden wird.',
                  'Present passive: wird gepflegt – at the end of a dass-clause: gepflegt wird.',
                ],
              ),
            ],
          },
          {
            id: 'brauch',
            title: 'Ein alter Brauch',
            emoji: '🌳',
            setting: 'A villager explains the May tree tradition.',
            turns: [
              say(
                'Dorfbewohnerin',
                'Bei uns wird am ersten Mai ein Baum aufgestellt.',
                'In our village a tree is put up on the first of May.',
              ),
              you(
                'Seit wann wird dieser Brauch gepflegt?',
                [
                  'Seit wann ist dieser Brauch gepflegt?',
                  'Asking about an activity over time needs the process passive: wird gepflegt.',
                ],
                ['Seit wann wird dieser Brauch gepflegen?', 'The participle is gepflegt.'],
              ),
              say(
                'Dorfbewohnerin',
                'Er ist schon im Mittelalter eingeführt worden.',
                'It was already introduced in the Middle Ages.',
              ),
              you(
                'Dieser Brauch muss unbedingt weitergegeben werden.',
                [
                  'Dieser Brauch muss unbedingt weitergegeben worden.',
                  'With a modal verb in the present the passive infinitive is weitergegeben werden.',
                ],
                [
                  'Dieser Brauch muss unbedingt weitergeben werden.',
                  'The participle is weitergegeben.',
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
      meta('Passive blitz', 'True or false: forms of the passive.', [...grammarTags], 3, 2),
      {
        seconds: 60,
        statements: [
          tf('b1', '„Das Tor wird geöffnet“ beschreibt einen Vorgang.', true),
          tf('b2', '„Das Tor ist geöffnet“ beschreibt einen Zustand.', true),
          tf(
            'b3',
            'Das Passiv Perfekt von „Das Haus wird gebaut“ heißt „Das Haus ist gebaut geworden“.',
            false,
            'It is “gebaut worden”.',
          ),
          tf('b4', 'Im Passiv Perfekt steht „worden“ am Ende.', true),
          tf(
            'b5',
            'Das Passiv Futur von „bauen“ heißt „wird gebaut worden“.',
            false,
            'Future: wird gebaut werden.',
          ),
          tf('b6', '„Der Brauch muss bewahrt werden“ ist ein Passiv mit Modalverb.', true),
          tf('b7', 'Das Zustandspassiv bildet man mit sein + Partizip II.', true),
          tf('b8', 'Das Passiv Präteritum von „bauen“ lautet „wurde gebaut“.', true),
          tf(
            'b9',
            '„Das Museum ist montags geschlossen“ bedeutet: Jemand schließt es gerade.',
            false,
            'It describes the state: it is closed.',
          ),
          tf('b10', 'Ein Zeitzeuge hat ein historisches Ereignis selbst erlebt.', true),
          tf(
            'b11',
            'Denkmalschutz bedeutet, dass Denkmäler nicht ohne Erlaubnis verändert werden dürfen.',
            true,
          ),
          tf(
            'b12',
            'Eine Maskerade ist eine Beerdigung.',
            false,
            'A masquerade is a party or procession in disguise.',
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
        'Heritage words and the passive in one round.',
        ['vocabulary', 'grammar', 'c22-heritage'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            q('c1', 'Das Schloss ist 1998 restauriert ___.', 'worden', [
              'geworden',
              'werden',
              'wurde',
            ]),
            LESSON,
          ),
          withLesson(
            q('c2', 'Die Brücke ___ im Herbst gesperrt werden.', 'wird', [
              'ist',
              'wurde',
              'worden',
            ]),
            LESSON,
          ),
          withLesson(
            q('c3', 'Die Praxis ___ heute geschlossen. (Zustand)', 'ist', [
              'wird',
              'wurde',
              'worden',
            ]),
            LESSON,
          ),
          withLesson(
            q('c4', 'Das Dach musste ___ werden.', 'saniert', [
              'sanieren',
              'saniert worden',
              'sanierend',
            ]),
            LESSON,
          ),
          q('c5', 'Wer ein Ereignis selbst miterlebt hat, ist ein …', 'Zeitzeuge', [
            'Mäzen',
            'Erzähler',
            'Kurator',
          ]),
          q('c6', 'bewahren', 'to preserve', ['to unveil', 'to hand down', 'to excavate']),
          q('c7', 'enthüllen', 'to unveil', ['to inaugurate', 'to restore', 'to honour']),
          q('c8', 'in Vergessenheit geraten', 'to fall into oblivion', [
            'to become famous',
            'to be restored',
            'to be handed down',
          ]),
          q('c9', 'das Brauchtum', 'customs and traditions', [
            'excavation',
            'memorial site',
            'protection of monuments',
          ]),
          withLesson(
            q('c10', 'Der Eingang ___ gestern gesperrt. (Vorgang)', 'wurde', [
              'ist',
              'worden',
              'wird',
            ]),
            LESSON,
          ),
        ],
      },
    ),
  ],
};
