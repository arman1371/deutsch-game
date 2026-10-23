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
  unitB12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b1-2-kollegen';

const office = vocabList(U, 'At work with colleagues', [
  ['Arbeitsklima', 'working atmosphere', '🌤️', 'das'],
  ['Betriebsrat', 'works council', '🏢', 'der', 'Betriebsräte'],
  ['Teamleiter', 'team leader', '🧑‍💼', 'der', 'Teamleiter'],
  ['Mobbing', 'bullying at work', '😠', 'das'],
  ['Überstunde', 'hour of overtime', '⏰', 'die', 'Überstunden'],
  ['Krankmeldung', 'sick note', '🤒', 'die', 'Krankmeldungen'],
  ['Zuständigkeit', 'responsibility', '📌', 'die', 'Zuständigkeiten'],
  ['Abmahnung', 'formal warning', '⚠️', 'die', 'Abmahnungen'],
  ['Auseinandersetzung', 'argument, dispute', '💥', 'die', 'Auseinandersetzungen'],
  ['Einigung', 'agreement', '🤝', 'die', 'Einigungen'],
  ['ablehnen', 'to turn down', '🙅'],
  ['sich duzen', 'to say du to each other', '👋'],
  ['vertreten', 'to stand in for', '🔁'],
]);

const phrases = vocabList(U, 'Saying no and solving conflicts', [
  ['Das schaffe ich heute leider nicht.', 'Unfortunately I can’t manage that today.', '🙁'],
  ['Wie wäre es, wenn …?', 'How about if …?', '💡'],
  ['Ich schlage vor, dass …', 'I suggest that …', '🗣️'],
  ['Wollen wir uns nicht duzen?', 'Shall we say du to each other?', '🥂'],
  ['Mich stört, dass …', 'What bothers me is that …', '😒'],
  ['Lass uns das in Ruhe besprechen.', 'Let’s discuss this calmly.', '🧘'],
  ['Da muss ich Grenzen setzen.', 'I have to draw the line there.', '🚧'],
]);

const vocab = [...office, ...phrases];

export const kollegen: UnitContent = {
  unit: unitB12({
    id: U,
    order: 1,
    title: 'Unter Kollegen',
    subtitle: 'Working atmosphere, turning down tasks, du or Sie, and solving conflicts',
    emoji: '🧑‍💼',
    goals: [
      'Turn down a task politely and suggest an alternative',
      'Offer and accept du at work',
      'Talk about a conflict and find a compromise',
    ],
    grammar: [
      'je … desto / umso: Je mehr Überstunden ich mache, desto müder bin ich.',
      'Review: falls and wenn for conditions.',
    ],
    vocabFields: ['At work with colleagues', 'Saying no and solving conflicts'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-office',
      'flashcards',
      meta(
        'At work with colleagues',
        'Arbeitsklima, Betriebsrat, Überstunde – life in the office.',
        ['vocabulary', 'colleagues'],
        1,
        5,
      ),
      flashcards(office),
    ),
    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Saying no and solving conflicts',
        'Polite refusals, suggestions and clear limits.',
        ['vocabulary', 'communication', 'colleagues'],
        1,
        4,
      ),
      flashcards(phrases),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Office words', 'Name what you see.', ['vocabulary', 'colleagues'], 1, 4),
      quizEmoji(
        byDe(
          office,
          'Betriebsrat',
          'Mobbing',
          'Überstunde',
          'Krankmeldung',
          'Abmahnung',
          'Auseinandersetzung',
          'Einigung',
          'ablehnen',
        ),
      ),
    ),
    activity(
      U,
      'listen-phrases',
      'listen',
      meta('Hear the phrases', 'Listen and pick the meaning.', ['listening', 'colleagues'], 2, 4),
      listen(phrases),
    ),
    activity(
      U,
      'memory-du-sie',
      'memory',
      meta(
        'Formal and informal',
        'Match the Sie sentence with its du version.',
        ['vocabulary', 'communication', 'colleagues'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'Haben Sie kurz Zeit?', b: 'Hast du kurz Zeit?' },
          { id: 'm2', a: 'Könnten Sie mich vertreten?', b: 'Könntest du mich vertreten?' },
          { id: 'm3', a: 'Wie geht es Ihnen?', b: 'Wie geht’s dir?' },
          { id: 'm4', a: 'Ist das Ihr Büro?', b: 'Ist das dein Büro?' },
          { id: 'm5', a: 'Ich rufe Sie morgen an.', b: 'Ich rufe dich morgen an.' },
          { id: 'm6', a: 'Kommen Sie doch mit!', b: 'Komm doch mit!' },
        ],
      },
    ),
    activity(
      U,
      'spell-office',
      'spell',
      meta(
        'Spell the office words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'colleagues'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(office, 'Mobbing', 'Einigung', 'vertreten'), 'unscramble').items,
          ...spell(byDe(office, 'Abmahnung', 'Zuständigkeit', 'Teamleiter'), 'type').items,
          dictation(
            'd1',
            'Je länger die Besprechung dauert, desto müder werde ich.',
            'the longer the meeting, the more tired I get',
          ),
          dictation('d2', 'Das schaffe ich heute leider nicht.', 'I can’t manage that today'),
        ],
      },
    ),
    activity(
      U,
      'sort-je-desto',
      'sortit',
      meta('je … or desto …?', 'Which half of the sentence is it?', ['grammar', 'je-desto'], 2, 4),
      {
        instruction: 'Is it the je-part (verb at the end) or the desto-part (verb next)?',
        buckets: [
          { id: 'je', label: 'je … (verb at the end)', emoji: '1️⃣' },
          { id: 'desto', label: 'desto … (verb next)', emoji: '2️⃣' },
        ],
        items: sortItems('j', [
          ['je mehr ich arbeite', 'je'],
          ['desto müder bin ich', 'desto'],
          ['je besser das Arbeitsklima ist', 'je'],
          ['desto lieber gehe ich ins Büro', 'desto'],
          ['je früher wir anfangen', 'je'],
          ['umso schneller sind wir fertig', 'desto'],
          ['je öfter wir uns treffen', 'je'],
          ['desto besser verstehen wir uns', 'desto'],
        ]),
      },
    ),
    activity(
      U,
      'gap-je-desto',
      'gapfill',
      meta(
        'Je mehr, desto besser',
        'Comparatives and word order with je … desto.',
        ['grammar', 'je-desto'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'j1',
              'Je mehr Überstunden ich mache, ___ müder bin ich.',
              'desto',
              ['desto', 'als', 'je', 'dann'],
              'The more overtime I do, the more tired I am.',
              'The second half starts with desto (or umso).',
            ),
            {
              als: 'als compares two things (müder als); the second half of je … needs desto.',
              je: 'je only starts the first half; the second half takes desto.',
              dann: 'dann is not used with je; say desto or umso.',
            },
          ),
          hint(
            gap(
              'j2',
              'Je besser das Arbeitsklima ist, desto ___ arbeiten alle.',
              'lieber',
              ['lieber', 'gern', 'am liebsten', 'gerne'],
              'The better the working atmosphere, the more happily everyone works.',
              'desto needs a comparative: gern → lieber.',
            ),
            {
              gern: 'desto is followed by a comparative: gern → lieber.',
              gerne: 'desto is followed by a comparative: gern → lieber.',
              'am liebsten': 'That is the superlative; desto takes the comparative lieber.',
            },
          ),
          hint(
            gap(
              'j3',
              'Je früher wir anfangen, desto schneller ___ wir fertig.',
              'sind',
              ['sind', 'wir sind', 'sein', 'seid'],
              'The earlier we start, the sooner we are finished.',
              'After desto + comparative comes the verb, then the subject.',
            ),
            {
              'wir sind': 'The subject wir is already there; after desto schneller comes the verb.',
              sein: 'The verb must be conjugated: wir sind.',
              seid: 'seid is the ihr form; with wir it is sind.',
            },
          ),
          hint(
            gap(
              'j4',
              'Je länger der Konflikt dauert, umso ___ wird die Lösung.',
              'schwieriger',
              ['schwieriger', 'schwierig', 'schwierigste', 'schwierigen'],
              'The longer the conflict lasts, the harder the solution becomes.',
            ),
            {
              schwierig: 'umso needs the comparative: schwieriger.',
              schwierigste: 'That is the superlative; umso needs the comparative.',
              schwierigen:
                'No noun follows, so no adjective ending – just the comparative schwieriger.',
            },
          ),
          hint(
            typed(
              'j5',
              'Je öfter wir uns treffen, desto besser ___ wir uns. (verstehen)',
              'verstehen',
              'The more often we meet, the better we understand each other.',
            ),
            { versteht: 'The subject is wir: wir verstehen.' },
          ),
          hint(
            typed(
              'j6',
              'Je mehr man lernt, desto mehr ___ man. (wissen)',
              'weiß',
              'The more you learn, the more you know.',
              'wissen: man weiß (like er/sie/es).',
              ['weiss'],
            ),
            { wisst: 'wisst is the ihr form; man takes the er/sie/es form weiß.' },
          ),
          hint(
            gap(
              'j7',
              '___ Sie heute keine Zeit haben, kann Herr Ott Sie vertreten.',
              'Falls',
              ['Falls', 'Je', 'Desto', 'Ob'],
              'If you have no time today, Mr Ott can stand in for you.',
              'falls = in case / if.',
            ),
            {
              Je: 'je needs a comparative and a desto-part.',
              Desto: 'desto never starts a condition.',
              Ob: 'ob means whether and starts an indirect question.',
            },
            'subordinate-clauses',
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'The more, the better',
        'Build sentences with je … desto.',
        ['grammar', 'word-order', 'je-desto'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'The more I work, the more tired I am.', [
            'Je',
            'mehr',
            'ich',
            'arbeite,',
            'desto',
            'müder',
            'bin',
            'ich.',
          ]),
          sent('s2', 'The earlier we start, the sooner we finish.', [
            'Je',
            'früher',
            'wir',
            'anfangen,',
            'desto',
            'schneller',
            'sind',
            'wir',
            'fertig.',
          ]),
          sent('s3', 'Shall we say du to each other?', ['Wollen', 'wir', 'uns', 'nicht', 'duzen?']),
          sent(
            's4',
            'Unfortunately I can’t manage that today.',
            ['Das', 'schaffe', 'ich', 'heute', 'leider', 'nicht.'],
            { alsoAccept: ['Heute schaffe ich das leider nicht.'] },
          ),
          sent('s5', 'Can you stand in for me tomorrow?', [
            'Kannst',
            'du',
            'mich',
            'morgen',
            'vertreten?',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-office',
      'listen',
      meta(
        'Office talk',
        'Listen to colleagues and pick what they mean.',
        ['listening', 'colleagues', 'je-desto'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Tut mir leid, die Präsentation schaffe ich heute nicht. Aber morgen früh mache ich sie gern.',
            'She can’t do the presentation today but offers tomorrow morning.',
            [
              'She will do the presentation today.',
              'She refuses to do the presentation at all.',
              'She asks a colleague to do the presentation.',
            ],
          ),
          heard(
            'l2',
            'Wir arbeiten jetzt schon drei Jahre zusammen. Wollen wir uns nicht duzen?',
            'He offers to say du after three years of working together.',
            [
              'He wants to stay with Sie.',
              'They have just met for the first time.',
              'He is leaving the company after three years.',
            ],
          ),
          heard(
            'l3',
            'Je mehr Überstunden ich mache, desto weniger Zeit habe ich für meine Familie.',
            'More overtime means less time for the family.',
            [
              'Overtime gives him more time for the family.',
              'He never does overtime.',
              'His family helps him with his overtime.',
            ],
          ),
          heard(
            'l4',
            'Mich stört, dass du in Besprechungen immer auf dein Handy schaust.',
            'It bothers her that he always looks at his phone in meetings.',
            [
              'She likes that he takes notes on his phone.',
              'She wants him to call her after the meeting.',
              'She forgot her phone in the meeting.',
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
        'Saying no and finding a compromise',
        'Turn down an extra task and settle a conflict with a colleague.',
        ['communication', 'colleagues'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'no',
            title: 'Eine Aufgabe ablehnen',
            emoji: '🙅',
            setting: 'Your team leader Frau Brandt asks you to do an extra task at 5 pm.',
            turns: [
              say(
                'Frau Brandt',
                'Könnten Sie heute noch den Bericht für Herrn Kaya fertig machen?',
                'Could you finish the report for Mr Kaya today?',
              ),
              you(
                'Das schaffe ich heute leider nicht. Wie wäre es, wenn ich ihn morgen früh mache?',
                [
                  'Nein. Das ist nicht meine Aufgabe.',
                  'That is too direct – turn it down politely and offer an alternative.',
                ],
                [
                  'Das schaffe ich heute leider nicht. Wie wäre es, wenn ich ihn morgen früh machen?',
                  'The verb must agree with ich: wenn ich ihn … mache.',
                ],
              ),
              say(
                'Frau Brandt',
                'Gut, das passt. Bis morgen um zehn, bitte.',
                'Fine, that works. By ten tomorrow, please.',
              ),
            ],
          },
          {
            id: 'conflict',
            title: 'Ein Konflikt im Team',
            emoji: '⚡',
            setting: 'Your colleague Jonas always leaves the shared kitchen in a mess.',
            turns: [
              you(
                'Jonas, hast du kurz Zeit? Mich stört, dass die Küche oft so unordentlich ist.',
                [
                  'Jonas, du bist total chaotisch!',
                  'Describe what bothers you instead of attacking the person.',
                ],
                [
                  'Jonas, hast du kurz Zeit? Mich stört, dass die Küche ist oft so unordentlich.',
                  'In a dass-clause the verb goes to the end: … so unordentlich ist.',
                ],
              ),
              say(
                'Jonas',
                'Oh, das tut mir leid. Ich habe immer so wenig Zeit in der Mittagspause.',
                'Oh, I am sorry. I always have so little time in the lunch break.',
              ),
              you('Ich schlage vor, dass wir einen Putzplan machen. Was meinst du?', [
                'Ich schlage vor, dass wir machen einen Putzplan. Was meinst du?',
                'dass sends the verb to the end: dass wir einen Putzplan machen.',
              ]),
              say('Jonas', 'Gute Idee! So machen wir’s.', 'Good idea! Let’s do it like that.'),
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
        'Colleague blitz',
        'je … desto and office phrases – true or false?',
        ['grammar', 'je-desto'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Je mehr ich schlafe, desto fitter bin ich.', true),
          tf(
            'b2',
            'Je mehr ich schlafe, desto ich bin fitter.',
            false,
            'After desto + comparative comes the verb: desto fitter bin ich.',
          ),
          tf('b3', 'Je länger die Besprechung dauert, umso müder werden alle.', true),
          tf(
            'b4',
            'Je länger dauert die Besprechung, desto müder werden alle.',
            false,
            'The je-part is a subordinate clause: je länger die Besprechung dauert.',
          ),
          tf('b5', 'Je früher, desto besser.', true),
          tf('b6', 'Je mehr, desto gut.', false, 'desto needs a comparative: besser.'),
          tf('b7', 'Eine Krankmeldung bekommt man vom Arzt.', true),
          tf(
            'b8',
            'Der Betriebsrat ist der Chef der Firma.',
            false,
            'The Betriebsrat represents the employees.',
          ),
          tf('b9', 'Wer sich duzt, sagt „du“ zueinander.', true),
          tf(
            'b10',
            'Eine Abmahnung ist ein Lob vom Chef.',
            false,
            'An Abmahnung is a formal warning, not praise.',
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
        'Office words, polite refusals and je … desto in one round.',
        ['vocabulary', 'grammar', 'colleagues'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Je mehr ich übe, ___ besser spreche ich.', 'desto', ['als', 'dann', 'so']),
            {
              als: 'The second half of je … takes desto or umso.',
              dann: 'The second half of je … takes desto or umso.',
              so: 'The second half of je … takes desto or umso.',
            },
            'je-desto',
          ),
          hint(
            q('c2', 'Je ___ das Wetter ist, desto lieber fahre ich Rad.', 'schöner', [
              'schön',
              'am schönsten',
              'schönes',
            ]),
            {
              schön: 'je needs a comparative: schöner.',
              'am schönsten': 'je needs the comparative, not the superlative.',
              schönes: 'je needs a comparative: schöner.',
            },
            'je-desto',
          ),
          hint(
            q('c3', 'Je später es wird, desto ___.', 'müder bin ich', [
              'ich bin müder',
              'müder ich bin',
              'bin ich müder',
            ]),
            {
              'ich bin müder': 'desto + comparative first, then the verb: desto müder bin ich.',
              'müder ich bin':
                'The desto-part is a main clause: the verb comes before the subject.',
              'bin ich müder': 'The comparative goes right after desto: desto müder bin ich.',
            },
            'je-desto',
          ),
          q('c4', 'die Überstunde', 'hour of overtime', [
            'works council',
            'sick note',
            'formal warning',
          ]),
          q('c5', 'ablehnen', 'to turn down', ['to stand in for', 'to accept', 'to suggest']),
          q('c6', 'der Betriebsrat', 'works council', ['team leader', 'customer', 'trainee']),
          q('c7', 'You can’t do a task today. You say …', 'Das schaffe ich heute leider nicht.', [
            'Das ist mir egal.',
            'Mach das doch selbst!',
            'Herzlichen Glückwunsch!',
          ]),
          q('c8', 'You want to offer du to a colleague. You say …', 'Wollen wir uns nicht duzen?', [
            'Wollen wir uns nicht siezen?',
            'Wie wäre es mit Sie?',
            'Mich stört, dass …',
          ]),
          q('c9', 'die Einigung', 'agreement', [
            'argument, dispute',
            'formal warning',
            'atmosphere',
          ]),
          q('c10', 'die Zuständigkeit', 'responsibility', [
            'hour of overtime',
            'bullying at work',
            'team leader',
          ]),
        ],
      },
    ),
  ],
};
