import { byDe, flashcards, listen, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  futur2Table,
  gap,
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

const U = 'b2-1-kommunikation';

const body = vocabList(U, 'Body language', [
  ['Körpersprache', 'body language', '🕴️', 'die'],
  ['Mimik', 'facial expression', '😐', 'die'],
  ['Gestik', 'gestures', '🤌', 'die'],
  ['Blickkontakt', 'eye contact', '👀', 'der'],
  ['Handbewegung', 'hand movement', '🤝', 'die', 'Handbewegungen'],
  ['Körperhaltung', 'posture', '🧍', 'die'],
  ['Ausstrahlung', 'charisma, aura', '✨', 'die'],
  ['Eindruck', 'impression', '🖼️', 'der', 'Eindrücke'],
  ['Stirnrunzeln', 'frown', '🤨', 'das'],
  ['Schulterzucken', 'shrug', '🤷', 'das'],
  ['nicken', 'to nod', '🙂'],
  ['verschränken', 'to fold, cross (arms)', '🙅'],
  ['ausstrahlen', 'to radiate, to give off', '🎭'],
]);

const talk = vocabList(U, 'Conversation and conflict', [
  ['Smalltalk', 'small talk', '☕', 'der'],
  ['Tonfall', 'tone of voice', '🔊', 'der'],
  ['Andeutung', 'hint, insinuation', '💭', 'die', 'Andeutungen'],
  ['Vorwurf', 'reproach, accusation', '👉', 'der', 'Vorwürfe'],
  ['Tabuthema', 'taboo subject', '🚫', 'das', 'Tabuthemen'],
  ['Streitgespräch', 'heated discussion', '💥', 'das', 'Streitgespräche'],
  ['Sachlichkeit', 'objectivity', '📏', 'die'],
  ['einlenken', 'to back down, relent', '↩️'],
  ['beschwichtigen', 'to calm, appease', '🕊️'],
  ['eskalieren', 'to escalate', '📈'],
  ['schlagfertig', 'quick-witted', '⚡'],
  ['taktvoll', 'tactful', '🎩'],
]);

const guesses = vocabList(U, 'Guessing and commenting', [
  ['Er wird wohl gerade im Meeting sein.', 'He is probably in a meeting right now.', '🗓️'],
  ['Sie wird den Zug verpasst haben.', 'She will have missed the train.', '🚉'],
  ['Das muss ein Missverständnis gewesen sein.', 'That must have been a misunderstanding.', '🙈'],
  ['Vermutlich hat er die Nachricht nicht gelesen.', 'He probably did not read the message.', '📩'],
  ['Das dürfte stimmen.', 'That is probably true.', '👍'],
  [
    'Ich finde es schade, dass wir uns so selten sehen.',
    'I think it is a pity that we see each other so rarely.',
    '😔',
  ],
  ['Es ist wichtig, dass wir offen reden.', 'It is important that we talk openly.', '🗣️'],
]);

const vocab = [...body, ...talk, ...guesses];

export const kommunikation: UnitContent = {
  unit: unitB21({
    id: U,
    order: 4,
    title: 'Kommunikation & Körpersprache',
    subtitle: 'Gestures, small talk and arguments – guessing what others think and do',
    emoji: '🙌',
    goals: [
      'Describe body language and first impressions',
      'Keep small talk going and calm down an argument',
      'Express assumptions about the present and the past',
    ],
    grammar: [
      'Assumptions: Futur I and Futur II (Er wird den Zug verpasst haben), wohl, vermutlich, müssen, dürfte.',
      'es and dass-clauses: Ich finde es schade, dass …; darauf / darüber, dass …; infinitive with zu.',
    ],
    vocabFields: ['Body language', 'Conversation and conflict', 'Guessing and commenting'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-body',
      'flashcards',
      meta(
        'Body language',
        'Mimik, Gestik, Blickkontakt – what the body says.',
        ['vocabulary', 'body-language'],
        1,
        5,
      ),
      flashcards(body),
    ),
    activity(
      U,
      'flash-talk',
      'flashcards',
      meta(
        'Conversation and conflict',
        'Smalltalk, Tonfall, Vorwurf – talking and arguing.',
        ['vocabulary', 'body-language'],
        1,
        5,
      ),
      flashcards(talk),
    ),
    activity(
      U,
      'flash-guesses',
      'flashcards',
      meta(
        'Guessing and commenting',
        'Sentences for assumptions and opinions.',
        ['vocabulary', 'communication', 'body-language'],
        1,
        4,
      ),
      flashcards(guesses),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Faces and gestures', 'Name what you see.', ['vocabulary', 'body-language'], 1, 4),
      quizEmoji(
        byDe(
          [...body, ...talk],
          'Mimik',
          'Blickkontakt',
          'Handbewegung',
          'Stirnrunzeln',
          'Schulterzucken',
          'Smalltalk',
          'Tabuthema',
          'eskalieren',
        ),
      ),
    ),
    activity(
      U,
      'listen-guesses',
      'listen',
      meta(
        'Hear the guesses',
        'Listen and pick the meaning.',
        ['listening', 'body-language'],
        2,
        4,
      ),
      listen(guesses),
    ),
    activity(
      U,
      'memory-gestures',
      'memory',
      meta(
        'What does it show?',
        'Match the gesture with what it usually means.',
        ['vocabulary', 'body-language'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'nicken', b: 'zustimmen' },
          { id: 'm2', a: 'die Arme verschränken', b: 'sich verschließen' },
          { id: 'm3', a: 'das Schulterzucken', b: 'Ratlosigkeit' },
          { id: 'm4', a: 'das Stirnrunzeln', b: 'Zweifel' },
          { id: 'm5', a: 'der Blickkontakt', b: 'Interesse zeigen' },
          { id: 'm6', a: 'die Handbewegung', b: 'Betonung beim Sprechen' },
        ],
      },
    ),
    activity(
      U,
      'spell-body',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'body-language'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(body, 'Mimik', 'Gestik', 'Körperhaltung'), 'unscramble').items,
          ...spell(byDe(talk, 'Tonfall', 'Sachlichkeit', 'Streitgespräch'), 'type').items,
          dictation('d1', 'Sie wird den Zug verpasst haben.', 'she will have missed the train'),
          dictation(
            'd2',
            'Ich finde es schade, dass du schon gehst.',
            'I think it is a pity that you are leaving already',
          ),
        ],
      },
    ),
    activity(
      U,
      'conj-futur2',
      'conjugation',
      meta(
        'Futur II tables',
        'werden + participle + haben / sein – the form for guesses about the past.',
        ['grammar', 'assumptions'],
        2,
        5,
      ),
      {
        tables: [
          futur2Table('gelesen', 'haben', 'to have read', ['ich', 'er/sie/es', 'wir']),
          futur2Table('verstanden', 'haben', 'to have understood', ['du', 'er/sie/es', 'ihr']),
          futur2Table('gekommen', 'sein', 'to have come', ['ich', 'du', 'sie/Sie']),
          futur2Table('eingeschlafen', 'sein', 'to have fallen asleep', ['er/sie/es', 'wir']),
          futur2Table('vergessen', 'haben', 'to have forgotten', ['ich', 'ihr']),
        ],
      },
    ),
    activity(
      U,
      'sort-assumptions',
      'sortit',
      meta(
        'Now or earlier?',
        'Is the assumption about the present or the past?',
        ['grammar', 'assumptions'],
        2,
        4,
      ),
      {
        instruction: 'Does the speaker guess about now or about something that already happened?',
        buckets: [
          { id: 'now', label: 'Gegenwart (jetzt)', emoji: '⏺️' },
          { id: 'past', label: 'Vergangenheit', emoji: '⏪' },
        ],
        items: sortItems('a', [
          ['Er wird gerade arbeiten.', 'now'],
          ['Er wird gestern gearbeitet haben.', 'past'],
          ['Sie wird schon schlafen.', 'now'],
          ['Sie wird die Mail gelesen haben.', 'past'],
          ['Das dürfte stimmen.', 'now'],
          ['Das muss ein Fehler gewesen sein.', 'past'],
          ['Er wird im Stau stehen.', 'now'],
          ['Sie wird den Termin vergessen haben.', 'past'],
        ]),
      },
    ),
    activity(
      U,
      'gap-assumptions',
      'gapfill',
      meta(
        'I suppose …',
        'Complete the assumptions with the right verb form.',
        ['grammar', 'assumptions'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'a1',
              'Wo ist Anna? – Sie ___ wohl noch im Büro sein.',
              'wird',
              ['wird', 'wurde', 'würde', 'werden'],
              'Where is Anna? – She is probably still at the office.',
              'Futur I as an assumption: wird … sein.',
            ),
            {
              wurde:
                'wurde is the Präteritum of werden (passive); an assumption needs the present wird.',
              würde: 'würde is Konjunktiv II; for a likely guess use wird.',
              werden: 'werden is the plural; Anna is singular: sie wird.',
            },
          ),
          hint(
            gap(
              'a2',
              'Er kommt nicht. Er ___ den Zug verpasst haben.',
              'wird',
              ['wird', 'hat', 'ist', 'wurde'],
              'He is not coming. He will have missed the train.',
              'Futur II: wird + participle + haben.',
            ),
            {
              hat: 'hat + … haben would double the auxiliary; Futur II needs wird.',
              ist: 'ist does not form Futur II; use wird + participle + haben.',
              wurde: 'wurde would make a passive, not an assumption.',
            },
          ),
          hint(
            gap(
              'a3',
              'Sie hat nicht geantwortet. Sie ___ die Nachricht nicht gelesen haben.',
              'dürfte',
              ['dürfte', 'darf', 'durfte', 'dürfen'],
              'She has not replied. She probably has not read the message.',
              'dürfte + infinitive expresses a likely assumption.',
            ),
            {
              darf: 'darf means “is allowed to”, not “probably”.',
              durfte: 'durfte is the past of “be allowed to”.',
              dürfen: 'dürfen is the plural form; sie (she) takes dürfte.',
            },
          ),
          hint(
            gap(
              'a4',
              'Das ___ ein Missverständnis gewesen sein.',
              'muss',
              ['muss', 'soll', 'will', 'darf'],
              'That must have been a misunderstanding.',
              'müssen can express a strong assumption: Das muss … gewesen sein.',
            ),
            {
              soll: 'soll would mean “is said to have been”.',
              will: 'will means “wants” or “claims”.',
              darf: 'darf means “is allowed to”.',
            },
          ),
          hint(
            gap(
              'a5',
              'Die Gäste ___ schon gegangen sein.',
              'werden',
              ['werden', 'wird', 'wurde', 'sind'],
              'The guests will already have left.',
              'Plural subject: werden + participle + sein.',
            ),
            {
              wird: 'wird is singular; die Gäste is plural.',
              wurde: 'wurde is the Präteritum of werden and builds a passive.',
              sind: 'sind + … sein is not a form; Futur II uses werden.',
            },
          ),
          hint(
            typed(
              'a6',
              'Er ist nicht da. Er wird krank ___. (sein)',
              'sein',
              'He is not here. He is probably ill.',
              'Futur I as an assumption: wird … sein.',
            ),
            { ist: 'After wird the infinitive stands at the end: wird krank sein.' },
          ),
          hint(
            typed(
              'a7',
              'Sie wird den Bus verpasst ___. (haben)',
              'haben',
              'She will have missed the bus.',
              'Futur II ends with haben (or sein).',
            ),
            { hat: 'Futur II ends with the infinitive haben, not hat.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-es-dass',
      'gapfill',
      meta(
        'es, darauf, zu …',
        'Choose the word that points to the dass-clause or infinitive.',
        ['grammar', 'es-dass'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'e1',
              'Ich finde ___ schade, dass du schon gehst.',
              'es',
              ['es', 'das', 'dies', 'sich'],
              'I think it is a pity that you are leaving already.',
              'es points ahead to the dass-clause.',
            ),
            {
              das: 'das would refer back to something said; here es points ahead to dass.',
              dies: 'dies refers back, not forward to the dass-clause.',
              sich: 'sich is reflexive; finden does not need it here.',
            },
          ),
          hint(
            gap(
              'e2',
              'Ich verlasse mich ___, dass du pünktlich kommst.',
              'darauf',
              ['darauf', 'es', 'darüber', 'dafür'],
              'I am counting on you coming on time.',
              'sich verlassen auf → darauf, dass …',
            ),
            {
              es: 'With a verb + preposition you need darauf, not es.',
              darüber: 'sich verlassen takes auf, so darauf.',
              dafür: 'sich verlassen takes auf, so darauf.',
            },
          ),
          hint(
            gap(
              'e3',
              'Er ärgert sich ___, dass niemand zuhört.',
              'darüber',
              ['darüber', 'darauf', 'es', 'daran'],
              'He is annoyed that nobody listens.',
              'sich ärgern über → darüber, dass …',
            ),
            {
              darauf: 'sich ärgern takes über, so darüber.',
              es: 'With a verb + preposition you need darüber, not es.',
              daran: 'sich ärgern takes über, so darüber.',
            },
          ),
          hint(
            gap(
              'e4',
              'Ich finde ___ wichtig, offen miteinander zu reden.',
              'es',
              ['es', 'das', 'darauf', 'sich'],
              'I think it is important to talk openly with each other.',
              'es points ahead to the infinitive clause.',
            ),
            {
              das: 'das would refer back; es points ahead to the infinitive clause.',
              darauf: 'finden has no preposition; es points to the clause.',
              sich: 'sich is reflexive; finden does not need it here.',
            },
          ),
          hint(
            gap(
              'e5',
              'Wir hoffen, euch bald ___ sehen.',
              'zu',
              ['zu', 'dass', 'um', 'ob'],
              'We hope to see you soon.',
              'Same subject → infinitive clause with zu.',
            ),
            {
              dass: 'dass would need its own subject and a conjugated verb at the end.',
              um: 'um … zu expresses a purpose, not hope.',
              ob: 'ob means whether and starts an indirect question.',
            },
          ),
          hint(
            gap(
              'e6',
              'Er besteht ___, dass alle pünktlich sind.',
              'darauf',
              ['darauf', 'darüber', 'davon', 'daran'],
              'He insists that everyone is on time.',
              'bestehen auf → darauf, dass …',
            ),
            {
              darüber: 'bestehen takes auf, so darauf.',
              davon: 'bestehen takes auf, so darauf.',
              daran: 'bestehen takes auf, so darauf.',
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
        'Opinions and guesses',
        'Build sentences with es, darauf and Futur II.',
        ['grammar', 'word-order', 'es-dass'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'I think it is important that we talk openly.', [
            'Ich',
            'finde',
            'es',
            'wichtig,',
            'dass',
            'wir',
            'offen',
            'miteinander',
            'reden.',
          ]),
          sent('s2', 'He will have missed the train.', [
            'Er',
            'wird',
            'den',
            'Zug',
            'verpasst',
            'haben.',
          ]),
          sent('s3', 'She probably has not read the message.', [
            'Sie',
            'wird',
            'die',
            'Nachricht',
            'wohl',
            'nicht',
            'gelesen',
            'haben.',
          ]),
          sent('s4', 'I am counting on you coming on time.', [
            'Ich',
            'verlasse',
            'mich',
            'darauf,',
            'dass',
            'du',
            'pünktlich',
            'kommst.',
          ]),
          sent('s5', 'We hope to see you soon.', [
            'Wir',
            'hoffen,',
            'euch',
            'bald',
            'zu',
            'sehen.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Small talk and calming down',
        'Chat during a break and settle a heated discussion.',
        ['communication', 'body-language'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'smalltalk',
            title: 'Smalltalk in der Kaffeepause',
            emoji: '☕',
            setting: 'You meet a new colleague at the coffee machine.',
            turns: [
              say(
                'Neue Kollegin',
                'Hallo, ich bin seit gestern hier. Ich kenne noch niemanden.',
                'Hello, I started yesterday. I do not know anybody yet.',
              ),
              you(
                'Herzlich willkommen! Ich finde es schön, dass du da bist. Wie war dein erster Tag?',
                [
                  'Ach so. Dann musst du eben suchen.',
                  'That is unfriendly – welcome her and ask a question.',
                ],
                [
                  'Herzlich willkommen! Ich finde schön, dass du da bist. Wie war dein erster Tag?',
                  'finden needs es here: Ich finde es schön, dass …',
                ],
              ),
              say(
                'Neue Kollegin',
                'Ziemlich anstrengend, aber alle sind sehr nett. Ich hoffe, mich bald einzuarbeiten.',
                'Pretty tiring, but everybody is very nice. I hope to settle in soon.',
              ),
              you('Das wirst du sicher schaffen. Wenn du Fragen hast, melde dich einfach.', [
                'Das glaube ich nicht. Es ist hier sehr kompliziert.',
                'Be encouraging, not discouraging.',
              ]),
            ],
          },
          {
            id: 'calm',
            title: 'Ruhig bleiben im Streit',
            emoji: '🕊️',
            setting:
              'Your colleague Jonas is angry because you did not send him some data on time.',
            turns: [
              say(
                'Jonas',
                'Du hast die Daten wieder nicht rechtzeitig geschickt! Das ist doch immer dasselbe!',
                'You did not send the data in time again! It is always the same!',
              ),
              you(
                'Du hast recht, es tut mir leid. Lass uns sachlich bleiben: Was genau brauchst du bis wann?',
                [
                  'Du übertreibst wie immer!',
                  'That will make the argument worse – stay calm and factual.',
                ],
                [
                  'Du hast recht, es tut mir leid. Lass uns sachlich bleiben: Was genau du brauchst bis wann?',
                  'In a W-question the verb comes second: Was genau brauchst du …?',
                ],
              ),
              say(
                'Jonas',
                'Die Zahlen bis morgen früh. Du wirst die Mail wohl übersehen haben.',
                'The figures by tomorrow morning. You will probably have overlooked the e-mail.',
              ),
              you(
                'Das kann sein. Ich schicke die Zahlen noch heute und lese meine Mails künftig genauer.',
                ['Ich schicke gar nichts mehr.', 'Finding a solution is better than refusing.'],
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
        'Guessing blitz',
        'Assumptions and es / dass – true or false?',
        ['grammar', 'assumptions'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Er wird wohl schon zu Hause sein.', true),
          tf('b2', 'Sie wird gestern angekommen sein.', true),
          tf(
            'b3',
            'Sie wird gestern angekommen haben.',
            false,
            'ankommen takes sein: angekommen sein.',
          ),
          tf('b4', 'Ich finde es toll, dass du kommst.', true),
          tf(
            'b5',
            'Ich finde toll, dass du kommst.',
            false,
            'With finden + adjective + dass-clause, es is needed: Ich finde es toll, dass …',
          ),
          tf('b6', 'Ich warte darauf, dass du anrufst.', true),
          tf('b7', 'Ich warte es, dass du anrufst.', false, 'warten takes auf, so darauf.'),
          tf('b8', 'Das muss ein Fehler gewesen sein.', true),
          tf(
            'b9',
            'Wer ein Stirnrunzeln zeigt, ist meist begeistert.',
            false,
            'A frown usually shows doubt or displeasure.',
          ),
          tf('b10', 'Wer taktvoll ist, nimmt Rücksicht auf die Gefühle anderer.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Body language, conversation and assumptions in one round.',
        ['vocabulary', 'grammar', 'body-language'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Er ist nicht ans Telefon gegangen. Er ___ schon schlafen.', 'wird', [
              'wurde',
              'würde',
              'hat',
            ]),
            {
              wurde: 'wurde is a past passive form; for a guess use wird.',
              würde: 'würde is Konjunktiv II, not a likely assumption.',
              hat: 'hat does not express an assumption.',
            },
            'assumptions',
          ),
          hint(
            q('c2', 'Sie ist nicht gekommen. Sie wird den Termin ___.', 'vergessen haben', [
              'vergessen sein',
              'vergessen worden',
              'vergessen hat',
            ]),
            {
              'vergessen sein': 'vergessen takes haben: vergessen haben.',
              'vergessen worden': 'worden belongs to the passive perfect, not to Futur II.',
              'vergessen hat': 'After wird the infinitive haben stands at the end.',
            },
            'assumptions',
          ),
          hint(
            q('c3', 'Ich ärgere mich ___, dass er nie zuhört.', 'darüber', [
              'darauf',
              'es',
              'davon',
            ]),
            {
              darauf: 'sich ärgern takes über: darüber.',
              es: 'With a verb + preposition use darüber, not es.',
              davon: 'sich ärgern takes über: darüber.',
            },
            'es-dass',
          ),
          hint(
            q('c4', 'Ich hoffe, dich bald ___ sehen.', 'zu', ['dass', 'um', 'es']),
            {
              dass: 'Same subject → infinitive with zu; dass needs its own subject.',
              um: 'um … zu names a purpose, not hope.',
              es: 'es does not replace zu in an infinitive clause.',
            },
            'es-dass',
          ),
          q('c5', 'die Körpersprache', 'body language', [
            'tone of voice',
            'small talk',
            'handshake',
          ]),
          q('c6', 'einlenken', 'to back down, relent', ['to escalate', 'to nod', 'to appease']),
          q('c7', 'schlagfertig', 'quick-witted', ['tactful', 'reserved', 'objective']),
          q('c8', 'der Vorwurf', 'reproach, accusation', [
            'hint, insinuation',
            'impression',
            'posture',
          ]),
          q(
            'c9',
            'You guess that someone was late because of traffic.',
            'Er wird im Stau gestanden haben.',
            [
              'Er hat im Stau gestanden werden.',
              'Er wird im Stau stehen worden.',
              'Er steht im Stau haben.',
            ],
          ),
          q('c10', 'ausstrahlen', 'to radiate, to give off', [
            'to nod',
            'to calm, appease',
            'to cross (arms)',
          ]),
        ],
      },
    ),
  ],
};
