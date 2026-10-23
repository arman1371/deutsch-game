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

const U = 'b1-2-diskussion';

const debate = vocabList(U, 'Discussions & presentations', [
  ['Standpunkt', 'point of view', '📍', 'der', 'Standpunkte'],
  ['Gegenargument', 'counter-argument', '↩️', 'das', 'Gegenargumente'],
  ['Diskussion', 'discussion', '💬', 'die', 'Diskussionen'],
  ['Forumsbeitrag', 'forum post', '📝', 'der', 'Forumsbeiträge'],
  ['Gliederung', 'outline, structure', '🗂️', 'die', 'Gliederungen'],
  ['Stichpunkt', 'bullet point, note', '🔹', 'der', 'Stichpunkte'],
  ['Zusammenfassung', 'summary', '📄', 'die', 'Zusammenfassungen'],
  ['Fazit', 'conclusion', '🏁', 'das', 'Fazits'],
  ['Einwand', 'objection', '☝️', 'der', 'Einwände'],
  ['widersprechen', 'to contradict', '🙅'],
  ['zustimmen', 'to agree', '🙆'],
  ['vortragen', 'to present, to give (a talk)', '🎤'],
]);

const phrases = vocabList(U, 'Phrases for the B1 exam', [
  ['In meiner Präsentation geht es um …', 'My presentation is about …', '🎯'],
  [
    'Zunächst möchte ich über meine Erfahrungen sprechen.',
    'First I would like to talk about my experiences.',
    '1️⃣',
  ],
  ['Ich komme jetzt zum Schluss.', 'I am coming to the end now.', '🔚'],
  ['Da muss ich Ihnen widersprechen.', 'I have to disagree with you there.', '✋'],
  ['Da stimme ich dir voll zu.', 'I completely agree with you there.', '🤝'],
  ['Haben Sie noch Fragen?', 'Do you have any questions?', '❓'],
  ['Wie wäre es, wenn wir uns um zehn treffen?', 'How about meeting at ten?', '🕙'],
]);

const vocab = [...debate, ...phrases];

export const diskussion: UnitContent = {
  unit: unitB12({
    id: U,
    order: 12,
    title: 'Diskutieren & präsentieren',
    subtitle: 'Opinions, counter-arguments, presentations and the B1 exam tasks',
    emoji: '🎤',
    goals: [
      'Agree, disagree and weigh up pros and cons in a discussion',
      'Structure a short presentation and answer questions about it',
      'Plan something together and write a forum post with your opinion',
    ],
    grammar: [
      'Consequences with sodass and so … dass: Es regnete, sodass das Fest ausfiel.',
      'Weighing up with einerseits … andererseits.',
    ],
    vocabFields: ['Discussions & presentations', 'Phrases for the B1 exam'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-debate',
      'flashcards',
      meta(
        'Discussions & presentations',
        'Standpunkt, Gegenargument, Fazit – arguing well.',
        ['vocabulary', 'opinions-presenting'],
        1,
        5,
      ),
      flashcards(debate),
    ),
    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Phrases for the B1 exam',
        'Start, structure and end a presentation; agree and disagree.',
        ['vocabulary', 'communication', 'opinions-presenting'],
        1,
        5,
      ),
      flashcards(phrases),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Discussion words', 'Name what you see.', ['vocabulary', 'opinions-presenting'], 1, 4),
      quizEmoji(
        byDe(
          debate,
          'Standpunkt',
          'Gegenargument',
          'Forumsbeitrag',
          'Gliederung',
          'Fazit',
          'widersprechen',
          'zustimmen',
          'vortragen',
        ),
      ),
    ),
    activity(
      U,
      'listen-phrases',
      'listen',
      meta(
        'Hear the phrases',
        'Listen and pick the meaning.',
        ['listening', 'opinions-presenting'],
        2,
        4,
      ),
      listen(phrases),
    ),
    activity(
      U,
      'spell-debate',
      'spell',
      meta(
        'Spell the discussion words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'opinions-presenting'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(debate, 'Fazit', 'Einwand', 'zustimmen'), 'unscramble').items,
          ...spell(byDe(debate, 'Zusammenfassung', 'Gliederung', 'widersprechen'), 'type').items,
          dictation(
            'd1',
            'Es regnete stark, sodass das Fest ausfiel.',
            'it rained heavily, so the party was cancelled',
          ),
          dictation('d2', 'Ich komme jetzt zum Schluss.', 'I am coming to the end now'),
        ],
      },
    ),
    activity(
      U,
      'sort-presentation',
      'sortit',
      meta(
        'Beginning, middle or end?',
        'Where in a presentation do you say it?',
        ['communication', 'opinions-presenting'],
        2,
        4,
      ),
      {
        instruction: 'When do you say this in your presentation?',
        buckets: [
          { id: 'start', label: 'Anfang', emoji: '🟢' },
          { id: 'middle', label: 'Hauptteil', emoji: '🟡' },
          { id: 'end', label: 'Schluss', emoji: '🔴' },
        ],
        items: sortItems('p', [
          ['In meiner Präsentation geht es um das Thema „Ohne Auto leben“.', 'start'],
          ['Zuerst stelle ich die Situation in meinem Heimatland vor.', 'start'],
          ['Ein Vorteil ist, dass man Geld spart.', 'middle'],
          ['Einerseits ist es gesund, andererseits dauert es länger.', 'middle'],
          ['Ich habe selbst die Erfahrung gemacht, dass …', 'middle'],
          ['Ich komme jetzt zum Schluss.', 'end'],
          ['Mein Fazit ist: Ohne Auto geht es, aber nicht überall.', 'end'],
          ['Vielen Dank fürs Zuhören! Haben Sie noch Fragen?', 'end'],
        ]),
      },
    ),
    activity(
      U,
      'gap-sodass',
      'gapfill',
      meta(
        'sodass, so … dass, einerseits …',
        'Give consequences and weigh up pros and cons.',
        ['grammar', 'consecutive-clauses'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              's1',
              'Der Zug hatte Verspätung, ___ ich den Anfang der Präsentation verpasst habe.',
              'sodass',
              ['sodass', 'damit', 'weil', 'obwohl'],
              'The train was late, so I missed the start of the presentation.',
              'sodass gives a result (so that, as a result).',
            ),
            {
              damit: 'damit gives an aim (in order that); missing the start was a result: sodass.',
              weil: 'weil gives the reason; the second part is the result: sodass.',
              obwohl: 'obwohl gives a contrast; here it is a result: sodass.',
            },
          ),
          hint(
            gap(
              's2',
              'Die Diskussion war ___ spannend, dass niemand nach Hause gehen wollte.',
              'so',
              ['so', 'sodass', 'zu', 'als'],
              'The discussion was so exciting that nobody wanted to go home.',
              'so + adjective … dass.',
            ),
            {
              sodass:
                'sodass is one word only when there is no adjective in between: so spannend, dass …',
              zu: 'zu spannend would mean too exciting – with dass the pattern is so … dass.',
              als: 'als compares; the pattern for a result is so … dass.',
            },
          ),
          hint(
            gap(
              's3',
              'Es regnete den ganzen Tag, sodass das Fest ___.',
              'ausfiel',
              ['ausfiel', 'fiel aus', 'ausfallen', 'ausgefallen'],
              'It rained all day, so the party was cancelled.',
              'sodass starts a subordinate clause: verb at the end.',
            ),
            {
              'fiel aus':
                'In the sodass-clause the verb goes to the end and joins its prefix: ausfiel.',
              ausfallen: 'The verb must be conjugated: das Fest ausfiel.',
              ausgefallen: 'The participle alone is not enough: ausfiel or ausgefallen ist.',
            },
          ),
          hint(
            gap(
              's4',
              '___ ist ein Leben ohne Auto billiger, andererseits braucht man mehr Zeit.',
              'Einerseits',
              ['Einerseits', 'Andererseits', 'Sowohl', 'Entweder'],
              'On the one hand life without a car is cheaper, on the other hand you need more time.',
              'einerseits … andererseits weighs up two sides.',
            ),
            {
              Andererseits: 'andererseits is the second half; the first is einerseits.',
              Sowohl: 'sowohl goes with als auch, not with andererseits.',
              Entweder: 'entweder goes with oder, not with andererseits.',
            },
            'two-part-conjunctions',
          ),
          hint(
            gap(
              's5',
              'Er hat so leise gesprochen, dass ihn niemand ___.',
              'verstanden hat',
              ['verstanden hat', 'hat verstanden', 'verstehen hat', 'versteht hat'],
              'He spoke so quietly that nobody understood him.',
            ),
            {
              'hat verstanden': 'In the dass-clause the conjugated verb goes last: verstanden hat.',
              'verstehen hat': 'Perfekt = participle + hat: verstanden hat.',
              'versteht hat': 'Perfekt = participle + hat: verstanden hat.',
            },
          ),
          hint(
            typed(
              's6',
              'Ich habe mich gut vorbereitet, ___ ich ruhig bleiben konnte. (with the result that)',
              'sodass',
              'I prepared well, so that I was able to stay calm.',
              undefined,
              ['so dass'],
            ),
            {
              damit: 'damit gives an aim; staying calm was the result: sodass.',
              weil: 'weil gives a reason; here it is a result: sodass.',
            },
          ),
          hint(
            typed(
              's7',
              'Einerseits spart man Geld, andererseits ___ man mehr Zeit. (brauchen)',
              'braucht',
              'On the one hand you save money, on the other hand you need more time.',
              'After andererseits the verb comes next, then the subject.',
            ),
            { brauchen: 'The verb must agree with man: braucht.' },
            'two-part-conjunctions',
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Making your point',
        'Build sentences for discussions and presentations.',
        ['grammar', 'word-order', 'consecutive-clauses'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'It rained, so the party was cancelled.', [
            'Es',
            'regnete,',
            'sodass',
            'das',
            'Fest',
            'ausfiel.',
          ]),
          sent('s2', 'The talk was so long that everyone got tired.', [
            'Der',
            'Vortrag',
            'war',
            'so',
            'lang,',
            'dass',
            'alle',
            'müde',
            'wurden.',
          ]),
          sent('s3', 'My presentation is about living without a car.', [
            'In',
            'meiner',
            'Präsentation',
            'geht',
            'es',
            'um',
            'das',
            'Leben',
            'ohne',
            'Auto.',
          ]),
          sent('s4', 'I completely agree with you there.', [
            'Da',
            'stimme',
            'ich',
            'dir',
            'voll',
            'zu.',
          ]),
          sent('s5', 'I am coming to the end now.', ['Ich', 'komme', 'jetzt', 'zum', 'Schluss.']),
        ],
      },
    ),
    activity(
      U,
      'listen-radio',
      'listen',
      meta(
        'A radio discussion',
        'Listen to opinions and pick what each speaker thinks.',
        ['listening', 'opinions-presenting', 'consecutive-clauses'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Ich bin klar gegen feste Arbeitszeiten. Wer flexibel arbeitet, ist zufriedener und produktiver.',
            'He is against fixed working hours because flexible work makes people happier.',
            [
              'He wants everybody to start at eight.',
              'He thinks flexible work makes people lazy.',
              'He has no opinion on working hours.',
            ],
          ),
          heard(
            'l2',
            'Einerseits finde ich Hochzeitsfeiern schön, andererseits sind sie oft so teuer, dass junge Paare Schulden machen.',
            'She likes weddings but thinks they are often so expensive that couples get into debt.',
            [
              'She thinks big weddings are cheap.',
              'She never goes to weddings.',
              'She wants an even bigger wedding.',
            ],
          ),
          heard(
            'l3',
            'In meiner Stadt gibt es so gute Busse und Radwege, dass ich mein Auto verkauft habe.',
            'Buses and cycle paths are so good that she sold her car.',
            [
              'She bought a car because the buses are bad.',
              'There are no cycle paths in her town.',
              'She is still looking for a new car.',
            ],
          ),
          heard(
            'l4',
            'Da muss ich widersprechen: Kinder sollten nicht schon im Kindergarten eine Fremdsprache lernen.',
            'He disagrees that children should learn a foreign language in nursery.',
            [
              'He thinks nursery children should learn two languages.',
              'He agrees with the previous speaker.',
              'He is talking about university students.',
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
        'The oral exam',
        'Plan something together, answer a question about your presentation and discuss.',
        ['communication', 'opinions-presenting'],
        3,
        10,
      ),
      {
        scenes: [
          {
            id: 'plan',
            title: 'Gemeinsam etwas planen',
            emoji: '🗓️',
            setting: 'Exam part 1: you and Nora plan a farewell party for your course leader.',
            turns: [
              say(
                'Nora',
                'Wann sollen wir die Party machen? Ich hätte am Freitagabend Zeit.',
                'When shall we have the party? I would be free on Friday evening.',
              ),
              you(
                'Freitag passt mir leider nicht. Wie wäre es mit Samstag um drei?',
                [
                  'Freitag passt mir leider nicht. Wie wäre es mit Samstag um drei Uhr ist?',
                  'One verb only: Wie wäre es mit Samstag um drei?',
                ],
                ['Ja, ich mag Partys.', 'Answer the question about the date.'],
              ),
              say(
                'Nora',
                'Gut. Und wer kümmert sich um das Essen?',
                'Fine. And who takes care of the food?',
              ),
              you('Ich schlage vor, dass jeder etwas mitbringt. Dann wird es nicht so teuer.', [
                'Ich schlage vor, dass jeder bringt etwas mit. Dann wird es nicht so teuer.',
                'dass sends the verb to the end: … etwas mitbringt.',
              ]),
            ],
          },
          {
            id: 'questions',
            title: 'Fragen zur Präsentation',
            emoji: '🎤',
            setting:
              'Exam part 3: after your talk “Ohne Auto leben”, the examiner asks a question.',
            turns: [
              say(
                'Prüferin',
                'Vielen Dank. Sie sagen, ohne Auto spart man Geld. Gilt das auch auf dem Land?',
                'Thank you. You say you save money without a car. Is that also true in the country?',
              ),
              you(
                'Gute Frage. Auf dem Land fahren die Busse oft so selten, dass man ein Auto braucht.',
                [
                  'Gute Frage. Auf dem Land fahren die Busse oft so selten, dass man braucht ein Auto.',
                  'dass sends the verb to the end: … dass man ein Auto braucht.',
                ],
                ['Ich habe kein Auto.', 'Answer the question about the country.'],
              ),
              say('Prüferin', 'Und was ist Ihr Fazit?', 'And what is your conclusion?'),
              you(
                'Einerseits ist ein Leben ohne Auto gesünder, andererseits geht es nicht überall.',
                [
                  'Einerseits ist ein Leben ohne Auto gesünder, andererseits es geht nicht überall.',
                  'After andererseits the verb comes next: andererseits geht es …',
                ],
              ),
            ],
          },
          {
            id: 'discussion',
            title: 'Feste Arbeitszeiten?',
            emoji: '⏰',
            setting: 'In class you discuss fixed working hours with your neighbour Paul.',
            turns: [
              say(
                'Paul',
                'Ich finde feste Arbeitszeiten gut. Dann weiß jeder, wann die Kollegen da sind.',
                'I think fixed working hours are good. Then everybody knows when colleagues are there.',
              ),
              you('Da muss ich dir widersprechen. Mit flexiblen Zeiten sind viele zufriedener.', [
                'Da muss ich dich widersprechen. Mit flexiblen Zeiten sind viele zufriedener.',
                'widersprechen takes the dative: dir.',
              ]),
              say(
                'Paul',
                'Aber dann gibt es keine gemeinsamen Besprechungen mehr.',
                'But then there are no shared meetings any more.',
              ),
              you(
                'Das stimmt. Vielleicht eine Kernzeit von zehn bis drei? Das wäre ein guter Kompromiss.',
                [
                  'Das stimmt. Vielleicht eine Kernzeit von zehn bis drei? Das wird ein guter Kompromiss.',
                  'For a suggestion use the Konjunktiv II: Das wäre …',
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
        'Discussion blitz',
        'sodass, so … dass and discussion phrases – true or false?',
        ['grammar', 'consecutive-clauses'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Es war so kalt, dass wir zu Hause blieben.', true),
          tf(
            'b2',
            'Es war so kalt, dass wir blieben zu Hause.',
            false,
            'dass sends the verb to the end.',
          ),
          tf('b3', 'Er war krank, sodass er nicht kommen konnte.', true),
          tf(
            'b4',
            '„sodass“ nennt einen Grund, „weil“ nennt eine Folge.',
            false,
            'It is the other way round: weil = reason, sodass = result.',
          ),
          tf('b5', 'Mit „einerseits … andererseits“ nennt man zwei Seiten.', true),
          tf('b6', 'Ich stimme dir zu = Ich bin deiner Meinung.', true),
          tf(
            'b7',
            'Ein Fazit steht am Anfang einer Präsentation.',
            false,
            'The conclusion comes at the end.',
          ),
          tf('b8', 'In der B1-Prüfung hält man eine kurze Präsentation.', true),
          tf(
            'b9',
            'Wer widerspricht, hat dieselbe Meinung.',
            false,
            'widersprechen = to disagree.',
          ),
          tf('b10', 'Ein Gegenargument spricht gegen eine Meinung.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Level challenge',
        'Discussion phrases and consequences – the final round of B1.2.',
        ['vocabulary', 'grammar', 'opinions-presenting'],
        3,
        6,
      ),
      {
        questions: [
          hint(
            q('c1', 'Es schneite stark, ___ die Schule geschlossen blieb.', 'sodass', [
              'damit',
              'obwohl',
              'weil',
            ]),
            {
              damit: 'The school staying closed is a result, not an aim: sodass.',
              obwohl: 'There is no contrast; it is a result: sodass.',
              weil: 'weil would introduce the reason; the second part is the result.',
            },
            'consecutive-clauses',
          ),
          hint(
            q('c2', 'Der Film war ___ langweilig, dass ich eingeschlafen bin.', 'so', [
              'zu',
              'sehr',
              'sodass',
            ]),
            {
              zu: 'The pattern for a result is so … dass.',
              sehr: 'The pattern for a result is so … dass.',
              sodass: 'With an adjective in between: so langweilig, dass …',
            },
            'consecutive-clauses',
          ),
          hint(
            q('c3', 'Einerseits ist das Handy praktisch, ___ macht es süchtig.', 'andererseits', [
              'einerseits',
              'als auch',
              'oder',
            ]),
            {
              einerseits: 'The second side is introduced with andererseits.',
              'als auch': 'als auch belongs to sowohl.',
              oder: 'oder belongs to entweder.',
            },
            'two-part-conjunctions',
          ),
          q('c4', 'der Standpunkt', 'point of view', ['counter-argument', 'summary', 'conclusion']),
          q('c5', 'zustimmen', 'to agree', [
            'to contradict',
            'to present, to give (a talk)',
            'to argue',
          ]),
          q('c6', 'die Gliederung', 'outline, structure', [
            'summary',
            'bullet point, note',
            'forum post',
          ]),
          q(
            'c7',
            'You want to finish your presentation. You say …',
            'Ich komme jetzt zum Schluss.',
            [
              'In meiner Präsentation geht es um …',
              'Zunächst möchte ich über meine Erfahrungen sprechen.',
              'Wie wäre es, wenn wir uns um zehn treffen?',
            ],
          ),
          q(
            'c8',
            'You disagree politely with the examiner. You say …',
            'Da muss ich Ihnen widersprechen.',
            ['Da stimme ich dir voll zu.', 'Haben Sie noch Fragen?', 'Das ist mir egal.'],
          ),
          q('c9', 'das Fazit', 'conclusion', ['outline, structure', 'point of view', 'experience']),
          q('c10', 'der Forumsbeitrag', 'forum post', [
            'bullet point, note',
            'discussion',
            'summary',
          ]),
        ],
      },
    ),
  ],
};
