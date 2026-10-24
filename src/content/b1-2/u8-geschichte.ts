import { byDe, flashcards, listen, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  hint,
  meta,
  passivePastTable,
  passivePerfektTable,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  unitB12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b1-2-geschichte';

const history = vocabList(U, 'German history', [
  ['Mauer', 'wall', '🧱', 'die', 'Mauern'],
  ['Mauerfall', 'fall of the Wall', '🔨', 'der'],
  ['Wiedervereinigung', 'reunification', '🤝', 'die'],
  ['Grenze', 'border', '🚧', 'die', 'Grenzen'],
  ['Besatzungszone', 'occupation zone', '🗺️', 'die', 'Besatzungszonen'],
  ['Krieg', 'war', '⚔️', 'der', 'Kriege'],
  ['Frieden', 'peace', '🕊️', 'der'],
  ['Diktatur', 'dictatorship', '⛓️', 'die', 'Diktaturen'],
  ['Zeitzeuge', 'contemporary witness', '👴', 'der', 'Zeitzeugen'],
  ['Ereignis', 'event', '📅', 'das', 'Ereignisse'],
  ['Denkmal', 'monument, memorial', '🗿', 'das', 'Denkmäler'],
  ['fliehen', 'to flee', '🏃'],
  ['teilen', 'to divide', '✂️'],
]);

const memories = vocabList(U, 'Remembering the past', [
  ['Ich kann mich noch gut daran erinnern.', 'I can still remember it well.', '🧠'],
  ['Damals war alles anders.', 'Back then everything was different.', '📻'],
  ['Das war ein historischer Moment.', 'That was a historic moment.', '🎆'],
  ['Wir konnten es kaum glauben.', 'We could hardly believe it.', '😲'],
  ['Hätte ich das damals nur gewusst!', 'If only I had known that back then!', '🤔'],
  ['Die Grenze wurde geöffnet.', 'The border was opened.', '🚪'],
]);

const vocab = [...history, ...memories];

export const geschichte: UnitContent = {
  unit: unitB12({
    id: U,
    order: 8,
    title: 'Geschichte',
    subtitle: 'The divided Germany, the fall of the Wall, reunification and memories',
    emoji: '🏛️',
    goals: [
      'Understand an audio guide about historical events',
      'Summarise what happened and when',
      'Ask a contemporary witness about their memories',
    ],
    grammar: [
      'Passive in the Präteritum: Die Mauer wurde 1961 gebaut.',
      'Passive in the Perfekt: Die Grenze ist 1989 geöffnet worden.',
      'The doer with von + dative: Das Gesetz wurde vom Parlament beschlossen.',
    ],
    vocabFields: ['German history', 'Remembering the past'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-history',
      'flashcards',
      meta(
        'German history',
        'Mauer, Wiedervereinigung, Zeitzeuge – the 20th century.',
        ['vocabulary', 'history'],
        1,
        5,
      ),
      flashcards(history),
    ),
    activity(
      U,
      'flash-memories',
      'flashcards',
      meta(
        'Remembering the past',
        'Talk about what you remember.',
        ['vocabulary', 'communication', 'history'],
        1,
        4,
      ),
      flashcards(memories),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('History words', 'Name what you see.', ['vocabulary', 'history'], 1, 4),
      quizEmoji(
        byDe(
          history,
          'Mauer',
          'Mauerfall',
          'Grenze',
          'Krieg',
          'Frieden',
          'Diktatur',
          'Zeitzeuge',
          'Denkmal',
        ),
      ),
    ),
    activity(
      U,
      'listen-memories',
      'listen',
      meta('Hear the memories', 'Listen and pick the meaning.', ['listening', 'history'], 2, 4),
      listen(memories),
    ),
    activity(
      U,
      'spell-history',
      'spell',
      meta(
        'Spell the history words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'history'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(history, 'Mauer', 'Krieg', 'Frieden'), 'unscramble').items,
          ...spell(byDe(history, 'Wiedervereinigung', 'Ereignis', 'Diktatur'), 'type').items,
          dictation(
            'd1',
            'Die Mauer wurde 1961 gebaut.',
            'the Wall was built in 1961',
            'Die Mauer wurde neunzehnhunderteinundsechzig gebaut.',
          ),
          dictation('d2', 'Die Grenze ist geöffnet worden.', 'the border has been opened'),
        ],
      },
    ),
    activity(
      U,
      'conj-passive-past',
      'conjugation',
      meta(
        'wurde gebaut, ist geöffnet worden',
        'Passive in the Präteritum (wurde) and the Perfekt (ist … worden).',
        ['grammar', 'verb-conjugation', 'passive-past'],
        2,
        6,
      ),
      {
        tables: [
          passivePastTable('eingeladen', 'was invited', ['ich', 'du', 'wir']),
          passivePastTable('gefragt', 'was asked', ['er/sie/es', 'ihr', 'sie/Sie']),
          passivePastTable('kontrolliert', 'was checked', ['ich', 'er/sie/es', 'wir']),
          passivePerfektTable('gerettet', 'has been rescued', ['ich', 'du', 'sie/Sie']),
          passivePerfektTable('informiert', 'has been informed', ['er/sie/es', 'wir', 'ihr']),
        ],
      },
    ),
    activity(
      U,
      'sort-tense',
      'sortit',
      meta(
        'Now, then, or done?',
        'Passive in the present, the Präteritum and the Perfekt.',
        ['grammar', 'passive-past', 'passive'],
        2,
        4,
      ),
      {
        instruction: 'Which tense is the passive in?',
        buckets: [
          { id: 'pres', label: 'Präsens (wird …)', emoji: '▶️' },
          { id: 'prt', label: 'Präteritum (wurde …)', emoji: '📜' },
          { id: 'perf', label: 'Perfekt (ist … worden)', emoji: '✔️' },
        ],
        items: sortItems('t', [
          ['Das Denkmal wird renoviert.', 'pres'],
          ['Die Grenze wird kontrolliert.', 'pres'],
          ['Die Mauer wurde 1961 gebaut.', 'prt'],
          ['Deutschland wurde 1945 geteilt.', 'prt'],
          ['Viele Menschen wurden verhaftet.', 'prt'],
          ['Die Mauer ist 1989 geöffnet worden.', 'perf'],
          ['Das Museum ist neu eröffnet worden.', 'perf'],
          ['Die Zeitzeugen sind interviewt worden.', 'perf'],
        ]),
      },
    ),
    activity(
      U,
      'gap-passive',
      'gapfill',
      meta(
        'Die Mauer wurde gebaut',
        'wurde, worden or geworden?',
        ['grammar', 'passive-past'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'p1',
              'Die Berliner Mauer ___ im August 1961 gebaut.',
              'wurde',
              ['wurde', 'wird', 'war', 'hat'],
              'The Berlin Wall was built in August 1961.',
              'Passive Präteritum: wurde + participle.',
            ),
            {
              wird: 'wird is the present; 1961 is in the past: wurde.',
              war: 'war gebaut describes a state (it was built already); the event is wurde gebaut.',
              hat: 'The passive is formed with werden, not haben.',
            },
          ),
          hint(
            gap(
              'p2',
              'Am 9. November 1989 ist die Grenze geöffnet ___.',
              'worden',
              ['worden', 'geworden', 'wurde', 'werden'],
              'On 9 November 1989 the border was opened.',
              'Perfekt passive: ist + participle + worden.',
            ),
            {
              geworden: 'In the passive the participle of werden is worden, without ge-.',
              wurde: 'The sentence already has ist: ist … geöffnet worden.',
              werden: 'With ist you need the participle worden.',
            },
          ),
          hint(
            gap(
              'p3',
              'Nach dem Krieg ___ Deutschland in vier Besatzungszonen geteilt.',
              'wurde',
              ['wurde', 'wurden', 'würde', 'ist'],
              'After the war Germany was divided into four occupation zones.',
            ),
            {
              wurden: 'The subject is Deutschland (singular): wurde.',
              würde: 'würde (with umlaut) is the Konjunktiv II; the fact is wurde.',
              ist: 'ist geteilt would need worden at the end; here: wurde geteilt.',
            },
          ),
          hint(
            gap(
              'p4',
              'Die Wiedervereinigung wurde ___ beiden Regierungen vorbereitet.',
              'von',
              ['von', 'aus', 'mit', 'bei'],
              'Reunification was prepared by both governments.',
              'The people who do it: von + dative.',
            ),
            {
              aus: 'aus does not introduce the doer of a passive; use von.',
              mit: 'mit names a tool, not the doer of a passive.',
              bei: 'bei does not introduce the doer of a passive.',
            },
          ),
          hint(
            typed(
              'p5',
              'Viele Familien ___ durch die Mauer getrennt. (Präteritum passive)',
              'wurden',
              'Many families were separated by the Wall.',
              'Plural subject: wurden.',
            ),
            {
              wurde: 'The subject Familien is plural: wurden.',
              werden: 'werden is the present; we need the Präteritum wurden.',
            },
          ),
          hint(
            typed(
              'p6',
              'Das Denkmal ist im Jahr 2009 eröffnet ___.',
              'worden',
              'The memorial was opened in 2009.',
            ),
            { geworden: 'In the passive the participle is worden, without ge-.' },
          ),
          hint(
            gap(
              'p7',
              'Der Zeitzeuge erzählt, wie er 1988 an der Grenze ___ wurde.',
              'kontrolliert',
              ['kontrolliert', 'kontrollieren', 'gekontrolliert', 'kontrollierte'],
              'The witness tells how he was checked at the border in 1988.',
              'Verbs in -ieren have no ge- in the participle.',
            ),
            {
              kontrollieren: 'The passive needs the participle: kontrolliert.',
              gekontrolliert: 'Verbs ending in -ieren take no ge-: kontrolliert.',
              kontrollierte:
                'kontrollierte is the Präteritum active; the passive needs the participle.',
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
        'What happened?',
        'Build passive sentences in the past.',
        ['grammar', 'word-order', 'passive-past'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'The Wall was built in 1961.', ['Die', 'Mauer', 'wurde', '1961', 'gebaut.'], {
            alsoAccept: ['1961 wurde die Mauer gebaut.'],
          }),
          sent('s2', 'The border has been opened.', [
            'Die',
            'Grenze',
            'ist',
            'geöffnet',
            'worden.',
          ]),
          sent(
            's3',
            'Germany was divided after the war.',
            ['Deutschland', 'wurde', 'nach', 'dem', 'Krieg', 'geteilt.'],
            { alsoAccept: ['Nach dem Krieg wurde Deutschland geteilt.'] },
          ),
          sent('s4', 'I can still remember it well.', [
            'Ich',
            'kann',
            'mich',
            'noch',
            'gut',
            'daran',
            'erinnern.',
          ]),
          sent('s5', 'Back then everything was different.', ['Damals', 'war', 'alles', 'anders.']),
        ],
      },
    ),
    activity(
      U,
      'listen-guide',
      'listen',
      meta(
        'The audio guide',
        'Listen to the museum audio guide and pick what happened.',
        ['listening', 'history', 'passive-past'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Nach dem Zweiten Weltkrieg wurde Deutschland in vier Zonen aufgeteilt.',
            'After the Second World War Germany was split into four zones.',
            [
              'Germany was split into two zones before the war.',
              'Germany was united after the war.',
              'Four countries joined Germany after the war.',
            ],
          ),
          heard(
            'l2',
            '1949 wurden zwei deutsche Staaten gegründet: die Bundesrepublik und die DDR.',
            'Two German states were founded in 1949.',
            [
              'One German state was founded in 1949.',
              'The two German states were united in 1949.',
              'The GDR was founded in 1989.',
            ],
          ),
          heard(
            'l3',
            'Wer in den Westen fliehen wollte, riskierte sein Leben.',
            'People who wanted to flee to the West risked their lives.',
            [
              'Travelling to the West was easy and safe.',
              'Nobody wanted to go to the West.',
              'People from the West fled to the East.',
            ],
          ),
          heard(
            'l4',
            'Am 3. Oktober 1990 ist Deutschland wiedervereinigt worden. Seitdem ist das ein Feiertag.',
            'Germany was reunified on 3 October 1990, now a public holiday.',
            [
              'The Wall was built on 3 October 1990.',
              '3 October is a normal working day.',
              'Germany was divided on 3 October 1990.',
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
        'Talking to a contemporary witness',
        'Interview a witness about 1989 and talk at a memorial.',
        ['communication', 'history'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'witness',
            title: 'Ein Zeitzeuge erzählt',
            emoji: '👴',
            setting: 'For a school project you interview Herr Lange, who lived in East Berlin.',
            turns: [
              you('Herr Lange, wie haben Sie den 9. November 1989 erlebt?', [
                'Herr Lange, wie Sie haben den 9. November 1989 erlebt?',
                'In a W-question the verb comes second: wie haben Sie …',
              ]),
              say(
                'Herr Lange',
                'Ich kann mich noch gut daran erinnern. Die Grenze wurde abends geöffnet.',
                'I can still remember it well. The border was opened in the evening.',
              ),
              you('Was haben Sie da gedacht?', [
                'Was haben Sie da gedenkt?',
                'The participle of denken is gedacht.',
              ]),
              say(
                'Herr Lange',
                'Wir konnten es kaum glauben. Das war ein historischer Moment.',
                'We could hardly believe it. That was a historic moment.',
              ),
            ],
          },
          {
            id: 'memorial',
            title: 'An der Gedenkstätte',
            emoji: '🗿',
            setting: 'You visit the Berlin Wall Memorial with your friend Clara.',
            turns: [
              say(
                'Clara',
                'Hier stand die Mauer? Das ist ja direkt vor den Häusern!',
                'The Wall stood here? It’s right in front of the houses!',
              ),
              you(
                'Ja, die Straße wurde einfach geteilt. Viele Familien wurden getrennt.',
                [
                  'Ja, die Straße wurde einfach geteilt. Viele Familien wurde getrennt.',
                  'Familien is plural: wurden.',
                ],
                [
                  'Ja, die Straße hat einfach geteilt. Viele Familien wurden getrennt.',
                  'The street did not divide itself – passive: wurde geteilt.',
                ],
              ),
              say(
                'Clara',
                'Und wann ist die Gedenkstätte eröffnet worden?',
                'And when was the memorial opened?',
              ),
              you('Ich glaube, sie ist 1998 eröffnet worden.', [
                'Ich glaube, sie ist 1998 eröffnet geworden.',
                'In the passive: worden, not geworden.',
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
        'History blitz',
        'Passive in the past and history facts – true or false?',
        ['grammar', 'passive-past'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Die Mauer wurde 1961 gebaut.', true),
          tf('b2', 'Die Mauer ist 1961 gebaut geworden.', false, 'Perfekt passive: gebaut worden.'),
          tf('b3', 'Die Grenze ist 1989 geöffnet worden.', true),
          tf('b4', 'Viele Familien wurde getrennt.', false, 'Familien is plural: wurden getrennt.'),
          tf('b5', 'Das Gesetz wurde vom Parlament beschlossen.', true),
          tf(
            'b6',
            'Die Grenze wurde 1989 geöffnet geworden.',
            false,
            'Präteritum passive: wurde geöffnet – without geworden.',
          ),
          tf('b7', 'Die Wiedervereinigung war 1990.', true),
          tf(
            'b8',
            'Ein Zeitzeuge hat das Ereignis nur im Buch gelesen.',
            false,
            'A contemporary witness experienced the events.',
          ),
          tf('b9', 'Nach dem Krieg gab es vier Besatzungszonen.', true),
          tf('b10', 'Der Mauerfall war im Jahr 1961.', false, 'The Wall fell in 1989.'),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'History words, memories and the passive in the past in one round.',
        ['vocabulary', 'grammar', 'history'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Das Brandenburger Tor ___ 1791 fertig gebaut.', 'wurde', [
              'wird',
              'würde',
              'worden',
            ]),
            {
              wird: '1791 is in the past: wurde.',
              würde: 'würde (with umlaut) is the Konjunktiv II.',
              worden: 'worden needs ist: ist … gebaut worden.',
            },
            'passive-past',
          ),
          hint(
            q('c2', 'Die Mauer ist 1989 geöffnet ___.', 'worden', ['geworden', 'wurde', 'werden']),
            {
              geworden: 'In the passive the participle is worden.',
              wurde: 'With ist you need the participle worden.',
              werden: 'With ist you need the participle worden.',
            },
            'passive-past',
          ),
          hint(
            q('c3', 'Der Plan wurde ___ Bürgermeister vorgestellt.', 'vom', [
              'aus dem',
              'mit dem',
              'beim',
            ]),
            {
              'aus dem': 'The person doing it takes von: vom Bürgermeister.',
              'mit dem': 'mit names a tool; the doer takes von.',
              beim: 'bei does not introduce the doer of a passive.',
            },
            'passive-past',
          ),
          q('c4', 'die Wiedervereinigung', 'reunification', [
            'fall of the Wall',
            'border',
            'peace',
          ]),
          q('c5', 'der Zeitzeuge', 'contemporary witness', [
            'dictator',
            'soldier',
            'tourist guide',
          ]),
          q('c6', 'fliehen', 'to flee', ['to divide', 'to build', 'to remember']),
          q(
            'c7',
            'Someone asks if you remember an event. You do. You say …',
            'Ich kann mich noch gut daran erinnern.',
            ['Das habe ich vergessen.', 'Damals war alles anders.', 'Wir konnten es kaum glauben.'],
          ),
          q('c8', 'das Denkmal', 'monument, memorial', ['event', 'occupation zone', 'wall']),
          q('c9', 'der Frieden', 'peace', ['war', 'dictatorship', 'border']),
          q('c10', 'das Ereignis', 'event', ['monument, memorial', 'peace', 'border']),
        ],
      },
    ),
  ],
};
