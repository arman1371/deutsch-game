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
  sortItems,
  tf,
  unitB12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b1-2-politik';

const politics = vocabList(U, 'Politics & society', [
  ['Bundestag', 'German parliament', '🏛️', 'der'],
  ['Abgeordnete', 'member of parliament', '🧑‍⚖️', 'die', 'Abgeordneten'],
  ['Bundeskanzlerin', 'federal chancellor (f)', '👩‍💼', 'die', 'Bundeskanzlerinnen'],
  ['Gesetz', 'law', '📕', 'das', 'Gesetze'],
  ['Mehrheit', 'majority', '📊', 'die', 'Mehrheiten'],
  ['Stimme', 'vote; voice', '🗳️', 'die', 'Stimmen'],
  ['Wahlrecht', 'right to vote', '✅', 'das'],
  ['Gemeinderat', 'local council', '🏘️', 'der', 'Gemeinderäte'],
  ['Bürgerinitiative', 'citizens’ action group', '📣', 'die', 'Bürgerinitiativen'],
  ['Demonstration', 'demonstration', '🪧', 'die', 'Demonstrationen'],
  ['Gleichberechtigung', 'equal rights', '⚖️', 'die'],
  ['abstimmen', 'to vote (on something)', '✋'],
  ['protestieren', 'to protest', '📢'],
]);

const debate = vocabList(U, 'Discussing politics', [
  ['Ich bin der Ansicht, dass …', 'I am of the opinion that …', '🧐'],
  ['Das halte ich für richtig.', 'I think that is right.', '👍'],
  ['Darüber kann man streiten.', 'That is debatable.', '🤷'],
  ['Jede Stimme zählt.', 'Every vote counts.', '🗳️'],
  ['Die Mehrheit ist dafür.', 'The majority is in favour.', '📈'],
  ['Wer soll das bezahlen?', 'Who is supposed to pay for that?', '💰'],
]);

const vocab = [...politics, ...debate];

export const politik: UnitContent = {
  unit: unitB12({
    id: U,
    order: 7,
    title: 'Politik & Gesellschaft',
    subtitle: 'Parliament, elections, local politics, protests and surveys',
    emoji: '🗳️',
    goals: [
      'Understand basic political words and a short report',
      'Read a survey and talk about results',
      'Give and defend your opinion on a political question',
    ],
    grammar: [
      'Comparative and superlative before a noun: die bessere Lösung, das wichtigste Thema.',
      'Superlative with je: die beste Idee, die ich je gehört habe.',
    ],
    vocabFields: ['Politics & society', 'Discussing politics'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-politics',
      'flashcards',
      meta(
        'Politics & society',
        'Bundestag, Mehrheit, Bürgerinitiative – how decisions are made.',
        ['vocabulary', 'politics-society'],
        1,
        5,
      ),
      flashcards(politics),
    ),
    activity(
      U,
      'flash-debate',
      'flashcards',
      meta(
        'Discussing politics',
        'State and defend an opinion.',
        ['vocabulary', 'communication', 'politics-society'],
        1,
        4,
      ),
      flashcards(debate),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Political words', 'Name what you see.', ['vocabulary', 'politics-society'], 1, 4),
      quizEmoji(
        byDe(
          politics,
          'Bundestag',
          'Gesetz',
          'Mehrheit',
          'Stimme',
          'Bürgerinitiative',
          'Demonstration',
          'Gleichberechtigung',
          'abstimmen',
        ),
      ),
    ),
    activity(
      U,
      'listen-debate',
      'listen',
      meta(
        'Hear the opinions',
        'Listen and pick the meaning.',
        ['listening', 'politics-society'],
        2,
        4,
      ),
      listen(debate),
    ),
    activity(
      U,
      'spell-politics',
      'spell',
      meta(
        'Spell the political words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'politics-society'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(politics, 'Gesetz', 'Stimme', 'Mehrheit'), 'unscramble').items,
          ...spell(byDe(politics, 'Wahlrecht', 'Demonstration', 'protestieren'), 'type').items,
          dictation(
            'd1',
            'Das ist die beste Idee, die ich je gehört habe.',
            'the best idea I have ever heard',
          ),
          dictation('d2', 'Jede Stimme zählt.', 'every vote counts'),
        ],
      },
    ),
    activity(
      U,
      'sort-forms',
      'sortit',
      meta(
        'Comparative or superlative?',
        'besser / bessere vs. beste / am besten.',
        ['grammar', 'comparison', 'adjective-endings'],
        2,
        4,
      ),
      {
        instruction: 'Is the adjective a comparative or a superlative?',
        buckets: [
          { id: 'comp', label: 'Komparativ (-er)', emoji: '📈' },
          { id: 'sup', label: 'Superlativ (-st)', emoji: '🏆' },
        ],
        items: sortItems('k', [
          ['eine bessere Lösung', 'comp'],
          ['die beste Lösung', 'sup'],
          ['ein größeres Problem', 'comp'],
          ['das größte Problem', 'sup'],
          ['jüngere Wähler', 'comp'],
          ['die jüngsten Wähler', 'sup'],
          ['eine wichtigere Frage', 'comp'],
          ['die wichtigste Frage', 'sup'],
        ]),
      },
    ),
    activity(
      U,
      'gap-comparative',
      'gapfill',
      meta(
        'Die bessere Lösung',
        'Comparative and superlative forms take adjective endings before a noun.',
        ['grammar', 'adjective-endings', 'comparison'],
        3,
        6,
      ),
      {
        items: [
          adjGap(
            'k1',
            'Wir brauchen eine ___ Lösung.',
            'besser',
            'indefinite',
            'f',
            'acc',
            'We need a better solution.',
          ),
          adjGap(
            'k2',
            'Die Partei verspricht ___ Schulen.',
            'größer',
            'none',
            'pl',
            'acc',
            'The party promises bigger schools.',
          ),
          adjGap(
            'k3',
            'Der Gemeinderat hat einen ___ Vorschlag gemacht.',
            'konkreter',
            'indefinite',
            'm',
            'acc',
            'The local council made a more concrete proposal.',
          ),
          hint(
            gap(
              'k4',
              'Das ist das ___ Thema der Wahl. (wichtig, superlative)',
              'wichtigste',
              ['wichtigste', 'wichtigsten', 'wichtigere', 'am wichtigsten'],
              'That is the most important topic of the election.',
              'Superlative before a noun: wichtigst- + ending; after das (nominative) -e.',
            ),
            {
              wichtigsten: 'After das in the nominative the ending is -e: das wichtigste Thema.',
              wichtigere: 'wichtigere is the comparative; the superlative is wichtigste.',
              'am wichtigsten':
                'am …sten is used without a noun; before a noun: das wichtigste Thema.',
            },
          ),
          hint(
            gap(
              'k5',
              'Die ___ Wähler in Österreich sind 16 Jahre alt. (jung, superlative)',
              'jüngsten',
              ['jüngsten', 'jüngste', 'jüngeren', 'jungsten'],
              'The youngest voters in Austria are 16 years old.',
            ),
            {
              jüngste: 'After die in the plural the ending is -en: die jüngsten Wähler.',
              jüngeren: 'jüngeren is the comparative; the superlative is jüngsten.',
              jungsten: 'jung takes an umlaut in the superlative: jüngsten.',
            },
          ),
          hint(
            gap(
              'k6',
              'Das ist die beste Idee, die ich ___ gehört habe.',
              'je',
              ['je', 'nie', 'schon', 'jemals nie'],
              'That is the best idea I have ever heard.',
              'Superlative + Relativsatz + je = ever.',
            ),
            {
              nie: 'nie means never – the sentence says ever: je.',
              schon: 'schon means already; after a superlative we say je (ever).',
              'jemals nie': 'jemals and nie contradict each other; the word is je.',
            },
          ),
          hint(
            gap(
              'k7',
              'Die Mehrheit wünscht sich ___ Tempolimit auf der Autobahn.',
              'ein strengeres',
              ['ein strengeres', 'ein strenger', 'einen strengeren', 'ein strengster'],
              'The majority wants a stricter speed limit on the motorway.',
              'das Tempolimit, accusative after ein: -es.',
            ),
            {
              'ein strenger':
                'The comparative needs -er plus the ending: ein strengeres Tempolimit.',
              'einen strengeren': 'Tempolimit is neuter (das), so ein + -es.',
              'ein strengster': 'The superlative is used with the definite article: das strengste.',
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
        'Better, best, ever',
        'Build sentences with comparatives and superlatives.',
        ['grammar', 'word-order', 'adjective-endings'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'We need a better solution.', [
            'Wir',
            'brauchen',
            'eine',
            'bessere',
            'Lösung.',
          ]),
          sent('s2', 'That is the best idea I have ever heard.', [
            'Das',
            'ist',
            'die',
            'beste',
            'Idee,',
            'die',
            'ich',
            'je',
            'gehört',
            'habe.',
          ]),
          sent('s3', 'The majority is in favour.', ['Die', 'Mehrheit', 'ist', 'dafür.']),
          sent(
            's4',
            'The council votes on the new law today.',
            ['Der', 'Gemeinderat', 'stimmt', 'heute', 'über', 'das', 'neue', 'Gesetz', 'ab.'],
            { alsoAccept: ['Heute stimmt der Gemeinderat über das neue Gesetz ab.'] },
          ),
          sent('s5', 'I think that is right.', ['Das', 'halte', 'ich', 'für', 'richtig.'], {
            alsoAccept: ['Ich halte das für richtig.'],
          }),
        ],
      },
    ),
    activity(
      U,
      'listen-survey',
      'listen',
      meta(
        'A survey and a report',
        'Listen to the results and pick what is right.',
        ['listening', 'politics-society'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'In unserer Umfrage sind 62 Prozent für ein Wahlrecht ab 16, 38 Prozent sind dagegen.',
            'Most people in the survey support voting from 16.',
            [
              'Most people in the survey are against voting from 16.',
              'Exactly half are for voting from 16.',
              'Nobody answered the survey.',
            ],
          ),
          heard(
            'l2',
            'Eine Bürgerinitiative protestiert gegen die neue Autobahn, weil sie durch ein Naturschutzgebiet führen soll.',
            'A citizens’ group protests against a motorway through a nature reserve.',
            [
              'Citizens want a new motorway to the nature reserve.',
              'The motorway has already been built.',
              'The council protests against the citizens.',
            ],
          ),
          heard(
            'l3',
            'Der Bundestag hat das Gesetz mit großer Mehrheit beschlossen.',
            'Parliament passed the law with a large majority.',
            [
              'Parliament rejected the law.',
              'Only a few members voted for the law.',
              'The law will be discussed next year.',
            ],
          ),
          heard(
            'l4',
            'Für viele junge Leute ist der Klimaschutz das wichtigste Thema bei dieser Wahl.',
            'For many young people climate protection is the key issue in this election.',
            [
              'Young people think the economy is the key issue.',
              'Young people are not interested in the election.',
              'Climate protection is the least important issue.',
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
        'Wählen ab 16?',
        'Discuss voting at 16 and a local project.',
        ['communication', 'politics-society'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'vote16',
            title: 'Wählen ab 16',
            emoji: '🗳️',
            setting: 'Your colleague Tobias thinks 16-year-olds should not vote.',
            turns: [
              say(
                'Tobias',
                'Mit 16 ist man doch noch viel zu jung zum Wählen, oder?',
                'At 16 you are much too young to vote, aren’t you?',
              ),
              you(
                'Das sehe ich anders. Ich bin der Ansicht, dass junge Leute mitentscheiden sollten.',
                [
                  'Das sehe ich anders. Ich bin der Ansicht, dass junge Leute sollten mitentscheiden.',
                  'dass sends the modal verb to the end: … mitentscheiden sollten.',
                ],
                ['Ja, ich bin 16.', 'Answer his opinion, not his question about age.'],
              ),
              say(
                'Tobias',
                'Aber interessieren die sich überhaupt für Politik?',
                'But are they even interested in politics?',
              ),
              you('Viele schon. Für sie ist der Klimaschutz das wichtigste Thema.', [
                'Viele schon. Für sie ist der Klimaschutz das wichtigsten Thema.',
                'After das in the nominative: das wichtigste Thema.',
              ]),
            ],
          },
          {
            id: 'council',
            title: 'Im Gemeinderat',
            emoji: '🏘️',
            setting: 'At a council meeting, people discuss a new swimming pool.',
            turns: [
              say(
                'Frau Becker',
                'Wir möchten ein größeres Schwimmbad bauen. Was halten Sie davon?',
                'We would like to build a bigger swimming pool. What do you think?',
              ),
              you('Darüber kann man streiten. Wer soll das bezahlen?', [
                'Darüber kann man streiten. Wer soll das bezahlt?',
                'After soll the infinitive goes to the end: bezahlen.',
              ]),
              say(
                'Frau Becker',
                'Die Stadt und das Land teilen sich die Kosten.',
                'The town and the state share the costs.',
              ),
              you('Dann halte ich es für richtig. Ein besseres Angebot für Familien ist wichtig.', [
                'Dann halte ich es für richtig. Ein besserer Angebot für Familien ist wichtig.',
                'das Angebot is neuter: ein besseres Angebot.',
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
        'Politics blitz',
        'Comparatives, superlatives and political words – true or false?',
        ['grammar', 'adjective-endings', 'comparison'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Wir brauchen eine bessere Lösung.', true),
          tf(
            'b2',
            'Wir brauchen eine besser Lösung.',
            false,
            'Before a noun: eine bessere Lösung.',
          ),
          tf('b3', 'Das ist das wichtigste Thema.', true),
          tf(
            'b4',
            'Das ist das am wichtigsten Thema.',
            false,
            'Before a noun the superlative is das wichtigste, without am.',
          ),
          tf('b5', 'Das ist der beste Film, den ich je gesehen habe.', true),
          tf('b6', 'Die jungsten Wähler sind 16.', false, 'jung → jüngsten (with umlaut).'),
          tf('b7', 'Im Bundestag sitzen die Abgeordneten.', true),
          tf(
            'b8',
            'Eine Mehrheit bedeutet: weniger als die Hälfte.',
            false,
            'A majority is more than half.',
          ),
          tf('b9', 'Bei einer Demonstration protestieren Menschen auf der Straße.', true),
          tf(
            'b10',
            'Ein Gesetz ist eine Empfehlung, die niemand beachten muss.',
            false,
            'Everybody has to follow a law.',
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
        'Political words, opinions and comparatives in one round.',
        ['vocabulary', 'grammar', 'politics-society'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Wir wünschen uns ___ Busse. (modern, comparative)', 'modernere', [
              'moderner',
              'modernsten',
              'modern',
            ]),
            {
              moderner: 'No article, plural, accusative: -e → modernere.',
              modernsten: 'That is the superlative; the question asks for the comparative.',
              modern: 'The comparative needs -er plus an ending: modernere.',
            },
            'adjective-endings',
          ),
          hint(
            q('c2', 'Er ist der ___ Abgeordnete im Bundestag.', 'jüngste', [
              'jüngsten',
              'jungste',
              'am jüngsten',
            ]),
            {
              jüngsten: 'After der in the nominative singular the ending is -e.',
              jungste: 'jung takes an umlaut: jüngste.',
              'am jüngsten': 'Before a noun: der jüngste Abgeordnete, without am.',
            },
            'adjective-endings',
          ),
          hint(
            q('c3', 'Das war die längste Rede, die ich ___ gehört habe.', 'je', [
              'nie',
              'schon',
              'noch',
            ]),
            {
              nie: 'After a superlative + relative clause we say je (ever).',
              schon: 'After a superlative + relative clause we say je (ever).',
              noch: 'After a superlative + relative clause we say je (ever).',
            },
            'comparison',
          ),
          q('c4', 'die Mehrheit', 'majority', ['vote; voice', 'law', 'right to vote']),
          q('c5', 'abstimmen', 'to vote (on something)', ['to protest', 'to elect', 'to argue']),
          q('c6', 'der Gemeinderat', 'local council', [
            'German parliament',
            'citizens’ action group',
            'member of parliament',
          ]),
          q(
            'c7',
            'You think a question has no clear answer. You say …',
            'Darüber kann man streiten.',
            ['Das halte ich für richtig.', 'Die Mehrheit ist dafür.', 'Jede Stimme zählt.'],
          ),
          q('c8', 'das Gesetz', 'law', ['majority', 'demonstration', 'vote; voice']),
          q('c9', 'die Gleichberechtigung', 'equal rights', ['right to vote', 'majority', 'law']),
          q('c10', 'protestieren', 'to protest', [
            'to vote (on something)',
            'to agree',
            'to govern',
          ]),
        ],
      },
    ),
  ],
};
