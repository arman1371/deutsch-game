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
  statePassiveTable,
  tf,
  typed,
  unitB21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b2-1-teamgeist';

const team = vocabList(U, 'Job satisfaction and teamwork', [
  ['Arbeitszufriedenheit', 'job satisfaction', '😊', 'die'],
  ['Teamgeist', 'team spirit', '🧑‍🤝‍🧑', 'der'],
  ['Zusammenhalt', 'cohesion, solidarity', '🤝', 'der'],
  ['Wertschätzung', 'appreciation', '💐', 'die'],
  ['Anerkennung', 'recognition', '🏅', 'die'],
  ['Aufstiegschance', 'chance of promotion', '🪜', 'die', 'Aufstiegschancen'],
  ['Gehaltserhöhung', 'pay rise', '💶', 'die', 'Gehaltserhöhungen'],
  ['Leistungsdruck', 'pressure to perform', '📈', 'der'],
  ['Eigenverantwortung', 'personal responsibility', '🧭', 'die'],
  ['Entscheidungsfreiheit', 'freedom to decide', '🗽', 'die'],
  ['Großraumbüro', 'open-plan office', '🏢', 'das', 'Großraumbüros'],
  ['delegieren', 'to delegate', '📤'],
  ['sich identifizieren mit', 'to identify with', '🪪'],
]);

const office = vocabList(U, 'Meetings and processes', [
  ['Besprechungsraum', 'meeting room', '🚪', 'der', 'Besprechungsräume'],
  ['Protokoll', 'minutes, record', '📝', 'das', 'Protokolle'],
  ['Tagesordnung', 'agenda', '📋', 'die', 'Tagesordnungen'],
  ['Abteilungsleiter', 'head of department', '🧑‍💼', 'der', 'Abteilungsleiter'],
  ['Geschäftsführung', 'management', '🏛️', 'die'],
  ['Zwischenbericht', 'interim report', '📞', 'der', 'Zwischenberichte'],
  ['Anliegen', 'concern, request', '🙋', 'das', 'Anliegen'],
  ['Arbeitsverdichtung', 'work intensification', '⏳', 'die'],
  ['zuarbeiten', 'to provide input for', '↪️'],
  ['fertigstellen', 'to complete', '🏁'],
  ['absegnen', 'to approve, sign off', '✅'],
  ['einreichen', 'to submit', '📥'],
]);

const states = vocabList(U, 'Results and states', [
  ['Das Büro ist ab acht Uhr geöffnet.', 'The office is open from eight o’clock.', '🔓'],
  ['Der Vertrag ist bereits unterschrieben.', 'The contract has already been signed.', '✍️'],
  ['Die Aufgaben sind klar verteilt.', 'The tasks are clearly distributed.', '🗂️'],
  ['Der Bericht ist noch nicht fertiggestellt.', 'The report is not finished yet.', '🚧'],
  ['Das Meeting ist auf Freitag verschoben.', 'The meeting has been moved to Friday.', '📆'],
  ['Wir sind bestens informiert.', 'We are very well informed.', 'ℹ️'],
  [
    'Ich bin gerade in einer Besprechung. Kann ich Sie zurückrufen?',
    'I am in a meeting right now. May I call you back?',
    '☎️',
  ],
]);

const vocab = [...team, ...office, ...states];

export const teamgeist: UnitContent = {
  unit: unitB21({
    id: U,
    order: 5,
    title: 'Arbeit & Teamgeist',
    subtitle: 'Job satisfaction, teamwork, meetings and phone calls – and the result passive',
    emoji: '🧑‍🤝‍🧑',
    goals: [
      'Talk about what makes people happy at work',
      'Take part in meetings and business phone calls',
      'Describe results with the Zustandspassiv',
    ],
    grammar: [
      'Zustandspassiv: Der Vertrag ist unterschrieben (result) vs. Der Vertrag wird unterschrieben (process).',
      'von (person) and durch (cause or means) in passive sentences.',
    ],
    vocabFields: ['Job satisfaction and teamwork', 'Meetings and processes', 'Results and states'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-team',
      'flashcards',
      meta(
        'Job satisfaction and teamwork',
        'Teamgeist, Wertschätzung, Leistungsdruck – what matters at work.',
        ['vocabulary', 'teamwork'],
        1,
        5,
      ),
      flashcards(team),
    ),
    activity(
      U,
      'flash-office',
      'flashcards',
      meta(
        'Meetings and processes',
        'Protokoll, Tagesordnung, Frist – words for the office.',
        ['vocabulary', 'teamwork'],
        1,
        5,
      ),
      flashcards(office),
    ),
    activity(
      U,
      'flash-states',
      'flashcards',
      meta(
        'Results and states',
        'Sentences with sein + participle.',
        ['vocabulary', 'communication', 'teamwork'],
        1,
        4,
      ),
      flashcards(states),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('At the office', 'Name what you see.', ['vocabulary', 'teamwork'], 1, 4),
      quizEmoji(
        byDe(
          [...team, ...office],
          'Gehaltserhöhung',
          'Großraumbüro',
          'Besprechungsraum',
          'Protokoll',
          'Tagesordnung',
          'Zwischenbericht',
          'Arbeitsverdichtung',
          'einreichen',
        ),
      ),
    ),
    activity(
      U,
      'listen-states',
      'listen',
      meta('Hear the results', 'Listen and pick the meaning.', ['listening', 'teamwork'], 2, 4),
      listen(states),
    ),
    activity(
      U,
      'memory-explain',
      'memory',
      meta(
        'Say it differently',
        'Match each word with its explanation in German.',
        ['vocabulary', 'teamwork'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'der Zusammenhalt', b: 'Gefühl, zu einem Team zu gehören' },
          { id: 'm2', a: 'die Wertschätzung', b: 'Respekt für die Arbeit anderer' },
          { id: 'm3', a: 'die Eigenverantwortung', b: 'für eigene Entscheidungen einstehen' },
          { id: 'm4', a: 'delegieren', b: 'eine Aufgabe weitergeben' },
          { id: 'm5', a: 'die Tagesordnung', b: 'Liste der Themen im Meeting' },
          { id: 'm6', a: 'absegnen', b: 'offiziell genehmigen' },
        ],
      },
    ),
    activity(
      U,
      'spell-team',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'teamwork'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(team, 'Teamgeist', 'Zusammenhalt', 'delegieren'), 'unscramble').items,
          ...spell(byDe(office, 'Protokoll', 'Tagesordnung', 'Geschäftsführung'), 'type').items,
          dictation(
            'd1',
            'Der Vertrag ist bereits unterschrieben.',
            'the contract has already been signed',
          ),
          dictation(
            'd2',
            'Das Meeting ist auf Freitag verschoben.',
            'the meeting has been moved to Friday',
          ),
        ],
      },
    ),
    activity(
      U,
      'conj-state',
      'conjugation',
      meta(
        'Result passive tables',
        'sein + participle: bin geöffnet, bist geöffnet …',
        ['grammar', 'state-passive'],
        2,
        5,
      ),
      {
        tables: [
          statePassiveTable('geöffnet', 'opened (state)', ['ich', 'er/sie/es', 'wir']),
          statePassiveTable('geschlossen', 'closed (state)', ['du', 'er/sie/es', 'ihr']),
          statePassiveTable('informiert', 'informed (state)', ['ich', 'du', 'sie/Sie']),
          statePassiveTable('verteilt', 'distributed (state)', ['er/sie/es', 'wir']),
          statePassiveTable('erledigt', 'done (state)', ['ich', 'ihr']),
        ],
      },
    ),
    activity(
      U,
      'sort-passive',
      'sortit',
      meta(
        'Process or result?',
        'Is the action happening, or is the result there?',
        ['grammar', 'state-passive'],
        2,
        4,
      ),
      {
        instruction: 'werden + participle = process. sein + participle = result.',
        buckets: [
          { id: 'process', label: 'Vorgang (wird …)', emoji: '🔄' },
          { id: 'state', label: 'Zustand (ist …)', emoji: '🔒' },
        ],
        items: sortItems('s', [
          ['Die Tür wird geschlossen.', 'process'],
          ['Die Tür ist geschlossen.', 'state'],
          ['Der Vertrag wird unterschrieben.', 'process'],
          ['Der Vertrag ist unterschrieben.', 'state'],
          ['Die Tickets werden gebucht.', 'process'],
          ['Die Tickets sind gebucht.', 'state'],
          ['Das Zimmer wird gereinigt.', 'process'],
          ['Das Zimmer ist gereinigt.', 'state'],
        ]),
      },
    ),
    activity(
      U,
      'gap-state',
      'gapfill',
      meta(
        'Is it done?',
        'Choose between werden and sein, von and durch.',
        ['grammar', 'state-passive'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'z1',
              'Sie können nicht mehr herein, das Büro ___ geschlossen.',
              'ist',
              ['ist', 'wird', 'wurde', 'hat'],
              'You cannot come in any more, the office is closed.',
              'A result: sein + participle.',
            ),
            {
              wird: 'wird geschlossen would mean the closing is happening right now.',
              wurde: 'wurde geschlossen describes a past event, not the present state.',
              hat: 'hat does not form the passive.',
            },
          ),
          hint(
            gap(
              'z2',
              'Gerade ___ der Raum gereinigt, bitte warten Sie.',
              'wird',
              ['wird', 'ist', 'hat', 'sei'],
              'The room is being cleaned right now, please wait.',
              'A process in progress: werden + participle.',
            ),
            {
              ist: 'ist gereinigt would mean it is already clean.',
              hat: 'hat does not form the passive.',
              sei: 'sei is Konjunktiv I and does not fit this statement.',
            },
          ),
          hint(
            gap(
              'z3',
              'Der Vertrag ___ schon seit gestern unterschrieben.',
              'ist',
              ['ist', 'wird', 'wurde', 'werden'],
              'The contract has been signed since yesterday.',
              'seit gestern describes a lasting result: sein + participle.',
            ),
            {
              wird: 'wird unterschrieben is a process; seit gestern needs the state.',
              wurde: 'wurde unterschrieben is a one-time event in the past.',
              werden: 'werden is plural; Vertrag is singular.',
            },
          ),
          hint(
            gap(
              'z4',
              'Die Aufgaben ___ klar verteilt.',
              'sind',
              ['sind', 'werden', 'wurde', 'ist'],
              'The tasks are clearly distributed.',
              'Plural subject, result: sind + participle.',
            ),
            {
              werden: 'werden verteilt describes the process of distributing.',
              wurde: 'wurde is singular and describes a past event.',
              ist: 'ist is singular; die Aufgaben is plural.',
            },
          ),
          hint(
            gap(
              'z5',
              'Das Haus wurde ___ einen Sturm beschädigt.',
              'durch',
              ['durch', 'von', 'mit', 'für'],
              'The house was damaged by a storm.',
              'durch names a cause or means (storm, fire).',
            ),
            {
              von: 'von names a person or agent; a storm is a cause: durch.',
              mit: 'mit does not introduce the cause in a passive sentence.',
              für: 'für does not introduce the cause in a passive sentence.',
            },
          ),
          hint(
            gap(
              'z6',
              'Der Bericht wurde ___ der Abteilungsleiterin geprüft.',
              'von',
              ['von', 'durch', 'mit', 'bei'],
              'The report was checked by the head of department.',
              'von names the person who acts.',
            ),
            {
              durch: 'durch names a cause or means; a person is introduced with von.',
              mit: 'mit does not introduce the agent in a passive sentence.',
              bei: 'bei does not introduce the agent in a passive sentence.',
            },
          ),
          hint(
            typed(
              'z7',
              'Die Tür ist schon ___. (öffnen)',
              'geöffnet',
              'The door is already open.',
              'sein + participle: geöffnet.',
            ),
            { öffnet: 'After ist the participle geöffnet is needed.' },
          ),
          hint(
            typed(
              'z8',
              'Alles ist gut ___. (organisieren)',
              'organisiert',
              'Everything is well organised.',
              'organisieren has no ge- in the participle: organisiert.',
            ),
            { georganisiert: 'Verbs ending in -ieren form the participle without ge-.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-state',
      'sentence',
      meta('Results', 'Build passive sentences.', ['grammar', 'word-order', 'state-passive'], 3, 6),
      {
        items: [
          sent('s1', 'The office is open from eight o’clock.', [
            'Das',
            'Büro',
            'ist',
            'ab',
            'acht',
            'Uhr',
            'geöffnet.',
          ]),
          sent('s2', 'The contract has already been signed.', [
            'Der',
            'Vertrag',
            'ist',
            'bereits',
            'unterschrieben.',
          ]),
          sent('s3', 'The tasks are clearly distributed.', [
            'Die',
            'Aufgaben',
            'sind',
            'klar',
            'verteilt.',
          ]),
          sent(
            's4',
            'The room is being cleaned at the moment.',
            ['Der', 'Raum', 'wird', 'gerade', 'gereinigt.'],
            { alsoAccept: ['Gerade wird der Raum gereinigt.'] },
          ),
          sent('s5', 'The house was damaged by the storm.', [
            'Das',
            'Haus',
            'wurde',
            'durch',
            'den',
            'Sturm',
            'beschädigt.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-work',
      'listen',
      meta(
        'Workplace talk',
        'Listen to colleagues and pick what they mean.',
        ['listening', 'teamwork'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Seit wir im Großraumbüro sitzen, ist der Zusammenhalt im Team besser, aber ich kann mich schlechter konzentrieren.',
            'The team bonds better in the open-plan office, but concentrating is harder.',
            [
              'The team is worse but concentration is easier.',
              'The team has moved into single offices.',
              'The open-plan office has been closed.',
            ],
          ),
          heard(
            'l2',
            'Die Tagesordnung ist bereits verschickt, das Protokoll schreibt heute Frau Weber.',
            'The agenda has been sent; Ms Weber writes the minutes today.',
            [
              'The agenda has not been sent yet.',
              'Ms Weber has cancelled the meeting.',
              'The minutes were written yesterday by Mr Weber.',
            ],
          ),
          heard(
            'l3',
            'Guten Tag, hier ist die Personalabteilung. Ihr Anliegen wurde weitergeleitet, Sie bekommen noch heute einen Rückruf.',
            'The caller’s request was forwarded and they will get a call back today.',
            [
              'The caller must call back tomorrow.',
              'The request was rejected.',
              'The caller has to come to the office today.',
            ],
          ),
          heard(
            'l4',
            'Mehr Gehalt ist nicht alles. Mir sind Wertschätzung und Entscheidungsfreiheit wichtiger.',
            'Appreciation and freedom to decide matter more to him than more salary.',
            [
              'He wants only a higher salary.',
              'He does not care about appreciation.',
              'He prefers strict rules and little freedom.',
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
        'On the phone and in the review',
        'Handle a business call and talk about your job satisfaction.',
        ['communication', 'teamwork'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'phone',
            title: 'Ein geschäftliches Telefongespräch',
            emoji: '☎️',
            setting: 'A customer calls and asks for Frau Brandt, who is in a meeting.',
            turns: [
              say(
                'Kunde',
                'Guten Tag, hier Kaya. Könnte ich bitte Frau Brandt sprechen?',
                'Hello, this is Kaya. Could I speak to Ms Brandt, please?',
              ),
              you(
                'Guten Tag, Herr Kaya. Frau Brandt ist gerade in einer Besprechung. Kann sie Sie zurückrufen?',
                [
                  'Die ist nicht da. Ruf später an.',
                  'That is impolite – stay formal and offer a solution.',
                ],
                [
                  'Guten Tag, Herr Kaya. Frau Brandt ist gerade in einer Besprechung. Kann sie Ihnen zurückrufen?',
                  'zurückrufen takes the accusative: Sie zurückrufen.',
                ],
              ),
              say(
                'Kunde',
                'Ja, gern. Es geht um den Vertrag. Ist er schon unterschrieben?',
                'Yes, please. It is about the contract. Has it been signed yet?',
              ),
              you(
                'Ja, der Vertrag ist bereits unterschrieben und liegt bei der Geschäftsführung.',
                [
                  'Nein, der Vertrag wird gelöscht.',
                  'That is not what the situation says – answer politely and truthfully.',
                ],
              ),
            ],
          },
          {
            id: 'review',
            title: 'Ein Gespräch über Arbeitszufriedenheit',
            emoji: '😊',
            setting: 'Your manager asks how you feel in the team.',
            turns: [
              say(
                'Chefin',
                'Wie zufrieden sind Sie im Moment mit Ihrer Arbeit?',
                'How satisfied are you with your work at the moment?',
              ),
              you(
                'Insgesamt sehr zufrieden. Der Teamgeist ist gut. Mir fehlt aber manchmal Anerkennung für meine Arbeit.',
                [
                  'Ich bin zufrieden auf meine Arbeit. Mir fehlt manchmal Anerkennung.',
                  'zufrieden takes mit: zufrieden mit meiner Arbeit.',
                ],
                [
                  'Alles ist schrecklich, ich will kündigen.',
                  'Be constructive: name what is good and what you miss.',
                ],
              ),
              say(
                'Chefin',
                'Das nehme ich ernst. Was würde Ihnen konkret helfen?',
                'I take that seriously. What would concretely help you?',
              ),
              you('Mehr Entscheidungsfreiheit und ein regelmäßiges Feedback wären hilfreich.', [
                'Mehr Gehalt, sonst nichts.',
                'You have just said recognition matters – be concrete about it.',
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
        'Result blitz',
        'Process or result? Zustandspassiv – true or false?',
        ['grammar', 'state-passive'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Die Tür ist geschlossen. = Die Tür ist zu.', true),
          tf('b2', 'Die Tür wird geschlossen. = Jemand schließt sie gerade.', true),
          tf('b3', 'Das Fenster ist schon repariert.', true),
          tf(
            'b4',
            'Das Fenster ist schon reparieren.',
            false,
            'After ist the participle repariert is needed.',
          ),
          tf('b5', 'Das Haus wurde von einem Sturm zerstört.', true),
          tf(
            'b6',
            'Das Haus wurde durch einen Architekten geplant.',
            false,
            'A person is introduced with von: von einem Architekten.',
          ),
          tf('b7', 'Die Aufgaben sind verteilt = Alle wissen, wer was macht.', true),
          tf('b8', 'Eine Tagesordnung nennt die Themen einer Besprechung.', true),
          tf(
            'b9',
            'Delegieren bedeutet, alles selbst zu machen.',
            false,
            'delegieren means passing tasks on to others.',
          ),
          tf(
            'b10',
            'Wer eine Frist verpasst, ist zu früh.',
            false,
            'A missed deadline means you are too late.',
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
        'Work words and the result passive in one round.',
        ['vocabulary', 'grammar', 'teamwork'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Das Geschäft ist leider schon ___.', 'geschlossen', [
              'schließen',
              'geschlossen worden',
              'wird geschlossen',
            ]),
            {
              schließen: 'After ist you need the participle geschlossen.',
              'geschlossen worden':
                'worden belongs to the passive perfect; for a plain state use ist geschlossen.',
              'wird geschlossen': 'ist geschlossen is the state; wird geschlossen is the process.',
            },
            'state-passive',
          ),
          hint(
            q('c2', 'Die Rechnung ___ schon bezahlt.', 'ist', ['wird', 'wurde', 'hat']),
            {
              wird: 'wird bezahlt is a process; schon points to the finished result.',
              wurde: 'wurde bezahlt is a one-time event in the past.',
              hat: 'hat does not form the passive.',
            },
            'state-passive',
          ),
          hint(
            q('c3', 'Der Brief wurde ___ meinem Chef unterschrieben.', 'von', [
              'durch',
              'mit',
              'für',
            ]),
            {
              durch: 'durch names a cause; a person is introduced with von.',
              mit: 'mit does not introduce the agent.',
              für: 'für does not introduce the agent.',
            },
            'state-passive',
          ),
          hint(
            q('c4', 'Das Dorf wurde ___ ein Erdbeben zerstört.', 'durch', ['von', 'mit', 'bei']),
            {
              von: 'von is for persons; an earthquake is a cause: durch.',
              mit: 'mit does not introduce the cause.',
              bei: 'bei does not introduce the cause.',
            },
            'state-passive',
          ),
          q('c5', 'die Wertschätzung', 'appreciation', [
            'pressure to perform',
            'pay rise',
            'deadline',
          ]),
          q('c6', 'das Protokoll', 'minutes, record', ['agenda', 'meeting room', 'management']),
          q('c7', 'zuarbeiten', 'to provide input for', ['to submit', 'to approve', 'to complete']),
          q('c8', 'der Teamgeist', 'team spirit', [
            'personal responsibility',
            'open-plan office',
            'concern',
          ]),
          q(
            'c9',
            'The caller asks for someone who is in a meeting. You say …',
            'Kann sie Sie zurückrufen?',
            ['Ich lösche Ihre Nummer.', 'Rufen Sie nie wieder an.', 'Sie ist nicht wichtig.'],
          ),
          q('c10', 'die Arbeitsverdichtung', 'work intensification', [
            'concern',
            'interim report',
            'agenda',
          ]),
        ],
      },
    ),
  ],
};
