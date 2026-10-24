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

const U = 'b2-1-gesellschaft';

const social = vocabList(U, 'Inclusion and fairness', [
  ['Inklusion', 'inclusion', '♿', 'die'],
  ['Barrierefreiheit', 'accessibility', '🚪', 'die'],
  ['Teilhabe', 'participation', '🙌', 'die'],
  ['Chancengleichheit', 'equal opportunities', '⚖️', 'die'],
  ['Altersarmut', 'poverty in old age', '👵', 'die'],
  ['Benachteiligung', 'disadvantage, discrimination', '📉', 'die', 'Benachteiligungen'],
  ['Diskriminierung', 'discrimination', '🚫', 'die', 'Diskriminierungen'],
  ['Geschlechtergerechtigkeit', 'gender equality', '🟰', 'die'],
  ['Zivilcourage', 'moral courage', '🦁', 'die'],
  ['Solidarität', 'solidarity', '🤲', 'die'],
  ['Randgruppe', 'marginalised group', '🫥', 'die', 'Randgruppen'],
  ['ausgrenzen', 'to exclude', '🚷'],
  ['benachteiligen', 'to disadvantage', '⬇️'],
]);

const politics = vocabList(U, 'Petitions and engagement', [
  ['Petition', 'petition', '📝', 'die', 'Petitionen'],
  ['Unterschriftensammlung', 'collection of signatures', '✍️', 'die', 'Unterschriftensammlungen'],
  ['Bürgerbegehren', 'citizens’ petition for a referendum', '🏘️', 'das', 'Bürgerbegehren'],
  ['Volksentscheid', 'referendum', '🗳️', 'der', 'Volksentscheide'],
  ['Kundgebung', 'rally', '📣', 'die', 'Kundgebungen'],
  ['Forderung', 'demand', '☝️', 'die', 'Forderungen'],
  ['Gesetzentwurf', 'draft law', '📜', 'der', 'Gesetzentwürfe'],
  ['Kampagne', 'campaign', '📢', 'die', 'Kampagnen'],
  ['Mitspracherecht', 'right to have a say', '🗣️', 'das'],
  ['unterzeichnen', 'to sign', '🖊️'],
  ['durchsetzen', 'to push through, enforce', '🚜'],
  ['mobilisieren', 'to mobilise', '📲'],
]);

const phrases = vocabList(U, 'Fixed noun-verb phrases', [
  ['Wir treffen morgen eine Entscheidung.', 'We will make a decision tomorrow.', '🧭'],
  [
    'Die Stadt stellt den Vereinen Räume zur Verfügung.',
    'The city provides rooms for the clubs.',
    '🏛️',
  ],
  ['Viele Menschen nehmen die Hilfe in Anspruch.', 'Many people make use of the help.', '🆘'],
  ['Der Verein übt Kritik an der Regierung.', 'The association criticises the government.', '🧐'],
  [
    'Dieses Angebot kommt für mich nicht in Frage.',
    'This offer is out of the question for me.',
    '🙅',
  ],
  ['Das Thema kam in der Sitzung zur Sprache.', 'The topic came up in the meeting.', '🗨️'],
  ['Wir müssen Rücksicht auf andere nehmen.', 'We must show consideration for others.', '🤝'],
]);

const vocab = [...social, ...politics, ...phrases];

export const gesellschaft: UnitContent = {
  unit: unitB21({
    id: U,
    order: 7,
    title: 'Gesellschaft im Wandel',
    subtitle: 'Inclusion, fairness, petitions and engagement – and fixed noun-verb phrases',
    emoji: '🌐',
    goals: [
      'Talk about inclusion, gender equality and social problems',
      'Understand and start a petition or a citizens’ initiative',
      'Use fixed noun-verb phrases like eine Entscheidung treffen or in Anspruch nehmen',
    ],
    grammar: [
      'Noun-verb phrases: eine Entscheidung treffen, zur Verfügung stellen, in Anspruch nehmen, in Frage kommen.',
      'Review: the passive in the present and the past (Petitionen werden unterschrieben, wurden eingereicht).',
    ],
    vocabFields: ['Inclusion and fairness', 'Petitions and engagement', 'Fixed noun-verb phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-social',
      'flashcards',
      meta(
        'Inclusion and fairness',
        'Inklusion, Teilhabe, Chancengleichheit – words for a fair society.',
        ['vocabulary', 'society-change'],
        1,
        5,
      ),
      flashcards(social),
    ),
    activity(
      U,
      'flash-politics',
      'flashcards',
      meta(
        'Petitions and engagement',
        'Petition, Bürgerbegehren, Volksentscheid – how people take action.',
        ['vocabulary', 'society-change'],
        1,
        5,
      ),
      flashcards(politics),
    ),
    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Fixed noun-verb phrases',
        'Sentences with eine Entscheidung treffen, in Frage kommen …',
        ['vocabulary', 'communication', 'society-change'],
        1,
        4,
      ),
      flashcards(phrases),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Society in pictures', 'Name what you see.', ['vocabulary', 'society-change'], 1, 4),
      quizEmoji(
        byDe(
          [...social, ...politics],
          'Barrierefreiheit',
          'Altersarmut',
          'Zivilcourage',
          'Solidarität',
          'Petition',
          'Volksentscheid',
          'Kundgebung',
          'Kampagne',
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
        ['listening', 'society-change'],
        2,
        4,
      ),
      listen(phrases),
    ),
    activity(
      U,
      'memory-phrases',
      'memory',
      meta(
        'Phrase and verb',
        'Match the noun-verb phrase with a single verb.',
        ['vocabulary', 'noun-verb-phrases', 'society-change'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'eine Entscheidung treffen', b: 'entscheiden' },
          { id: 'm2', a: 'Kritik üben', b: 'kritisieren' },
          { id: 'm3', a: 'in Anspruch nehmen', b: 'nutzen' },
          { id: 'm4', a: 'zur Verfügung stellen', b: 'bereitstellen' },
          { id: 'm5', a: 'zur Sprache bringen', b: 'ansprechen' },
          { id: 'm6', a: 'in Frage stellen', b: 'bezweifeln' },
        ],
      },
    ),
    activity(
      U,
      'spell-social',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'society-change'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(social, 'Teilhabe', 'Solidarität', 'Randgruppe'), 'unscramble').items,
          ...spell(byDe(politics, 'Bürgerbegehren', 'Gesetzentwurf', 'Forderung'), 'type').items,
          dictation(
            'd1',
            'Wir treffen morgen eine Entscheidung.',
            'we will make a decision tomorrow',
          ),
          dictation(
            'd2',
            'Dieses Angebot kommt für mich nicht in Frage.',
            'this offer is out of the question for me',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-verbs',
      'sortit',
      meta(
        'Which verb?',
        'Sort the nouns by the verb that goes with them.',
        ['grammar', 'noun-verb-phrases'],
        2,
        4,
      ),
      {
        instruction: 'Which verb belongs to the noun phrase?',
        buckets: [
          { id: 'treffen', label: 'treffen', emoji: '1️⃣' },
          { id: 'nehmen', label: 'nehmen', emoji: '2️⃣' },
          { id: 'stellen', label: 'stellen', emoji: '3️⃣' },
          { id: 'kommen', label: 'kommen', emoji: '4️⃣' },
        ],
        items: sortItems('v', [
          ['eine Entscheidung …', 'treffen'],
          ['Vorbereitungen …', 'treffen'],
          ['Rücksicht …', 'nehmen'],
          ['Abschied …', 'nehmen'],
          ['zur Verfügung …', 'stellen'],
          ['zur Diskussion …', 'stellen'],
          ['ums Leben …', 'kommen'],
          ['zu Ende …', 'kommen'],
        ]),
      },
    ),
    activity(
      U,
      'gap-phrases',
      'gapfill',
      meta(
        'Noun-verb phrases',
        'Complete the sentences with the right verb.',
        ['grammar', 'noun-verb-phrases'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'v1',
              'Wir ___ morgen eine Entscheidung.',
              'treffen',
              ['treffen', 'machen', 'geben', 'tun'],
              'We will make a decision tomorrow.',
              'eine Entscheidung treffen is the fixed phrase.',
            ),
            {
              machen: 'English says “make a decision”, but German uses treffen.',
              geben: 'geben does not combine with Entscheidung in this meaning.',
              tun: 'tun does not combine with Entscheidung.',
            },
          ),
          hint(
            gap(
              'v2',
              'Die Stadt ___ den Vereinen Räume zur Verfügung.',
              'stellt',
              ['stellt', 'gibt', 'legt', 'setzt'],
              'The city provides rooms for the clubs.',
              'zur Verfügung stellen is the fixed phrase.',
            ),
            {
              gibt: 'gibt does not fit with zur Verfügung; the fixed verb is stellen.',
              legt: 'legen does not fit with zur Verfügung.',
              setzt: 'setzen does not fit with zur Verfügung.',
            },
          ),
          hint(
            gap(
              'v3',
              'Viele Familien ___ staatliche Hilfe in Anspruch.',
              'nehmen',
              ['nehmen', 'haben', 'bekommen', 'machen'],
              'Many families make use of state aid.',
              'in Anspruch nehmen is the fixed phrase.',
            ),
            {
              haben: 'haben does not form this phrase; it is in Anspruch nehmen.',
              bekommen: 'bekommen means “receive”; the phrase uses nehmen.',
              machen: 'machen does not form this phrase.',
            },
          ),
          hint(
            gap(
              'v4',
              'Der Verein ___ scharfe Kritik an der Regierung.',
              'übt',
              ['übt', 'macht', 'gibt', 'hat'],
              'The association strongly criticises the government.',
              'Kritik üben is the fixed phrase.',
            ),
            {
              macht: 'macht does not fit with Kritik here; the fixed verb is üben.',
              gibt: 'gibt does not form this phrase.',
              hat: 'hat does not form this phrase.',
            },
          ),
          hint(
            gap(
              'v5',
              'Das Angebot ___ für mich nicht in Frage.',
              'kommt',
              ['kommt', 'geht', 'steht', 'ist'],
              'The offer is out of the question for me.',
              'in Frage kommen is the fixed phrase.',
            ),
            {
              geht: 'gehen does not form this phrase.',
              steht: 'stehen does not form this phrase.',
              ist: 'sein does not form this phrase.',
            },
          ),
          hint(
            gap(
              'v6',
              'Das Thema soll bei der Sitzung zur Sprache ___.',
              'kommen',
              ['kommen', 'bringen', 'gehen', 'haben'],
              'The topic is to come up at the meeting.',
              'zur Sprache kommen (intransitive) vs. zur Sprache bringen (with an object).',
            ),
            {
              bringen:
                'zur Sprache bringen needs an object (etwas); here the topic itself comes up.',
              gehen: 'gehen does not form this phrase.',
              haben: 'haben does not form this phrase.',
            },
          ),
          hint(
            typed(
              'v7',
              'Wir müssen Rücksicht auf andere ___. (nehmen)',
              'nehmen',
              'We must show consideration for others.',
              'Rücksicht nehmen auf + accusative.',
            ),
            { geben: 'The fixed verb is nehmen: Rücksicht nehmen.' },
          ),
          hint(
            typed(
              'v8',
              'Nach einem Jahr ___ die Stadt Bilanz. (ziehen)',
              'zieht',
              'After one year the city takes stock.',
              'Bilanz ziehen: the verb is conjugated, die Stadt = sie.',
            ),
            { ziehen: 'The verb must be conjugated for die Stadt (sie): zieht.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-phrases',
      'sentence',
      meta(
        'Formal German',
        'Build sentences with fixed noun-verb phrases.',
        ['grammar', 'word-order', 'noun-verb-phrases'],
        3,
        6,
      ),
      {
        items: [
          sent(
            's1',
            'We will make a decision tomorrow.',
            ['Wir', 'treffen', 'morgen', 'eine', 'Entscheidung.'],
            {
              alsoAccept: ['Morgen treffen wir eine Entscheidung.'],
            },
          ),
          sent('s2', 'The city provides rooms for the clubs.', [
            'Die',
            'Stadt',
            'stellt',
            'den',
            'Vereinen',
            'Räume',
            'zur',
            'Verfügung.',
          ]),
          sent('s3', 'This offer is out of the question for me.', [
            'Dieses',
            'Angebot',
            'kommt',
            'für',
            'mich',
            'nicht',
            'in',
            'Frage.',
          ]),
          sent('s4', 'Many people make use of the help.', [
            'Viele',
            'Menschen',
            'nehmen',
            'die',
            'Hilfe',
            'in',
            'Anspruch.',
          ]),
          sent('s5', 'The association criticises the government.', [
            'Der',
            'Verein',
            'übt',
            'Kritik',
            'an',
            'der',
            'Regierung.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-society',
      'listen',
      meta(
        'News and opinions',
        'Listen to short reports and pick what they say.',
        ['listening', 'society-change'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Eine Bürgerinitiative sammelt Unterschriften, damit das Rathaus künftig barrierefrei wird.',
            'A citizens’ initiative collects signatures so that the town hall becomes accessible.',
            [
              'A citizens’ initiative wants to close the town hall.',
              'The town hall already has full accessibility.',
              'The initiative collects money for a new car park.',
            ],
          ),
          heard(
            'l2',
            'Die Petition wurde von mehr als fünfzigtausend Menschen unterzeichnet und gestern eingereicht.',
            'The petition was signed by more than fifty thousand people and handed in yesterday.',
            [
              'The petition was rejected because too few people signed.',
              'The petition will be handed in next year.',
              'Fifty thousand people wrote against the petition.',
            ],
          ),
          heard(
            'l3',
            'Altersarmut betrifft immer mehr Menschen. Der Sozialverband fordert eine bessere Absicherung.',
            'Poverty in old age affects more people; the association demands better security.',
            [
              'Poverty in old age is shrinking and nobody demands anything.',
              'The association wants to abolish pensions.',
              'Only young people are affected.',
            ],
          ),
          heard(
            'l4',
            'Zivilcourage bedeutet, einzugreifen, wenn jemand diskriminiert wird, auch wenn es unbequem ist.',
            'Moral courage means stepping in when someone is discriminated against.',
            [
              'Moral courage means looking away.',
              'Moral courage is only needed in court.',
              'Moral courage means to discriminate against others.',
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
        'Signatures and arguments',
        'Collect signatures for a petition and argue for accessibility.',
        ['communication', 'society-change'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'signatures',
            title: 'Unterschriften sammeln',
            emoji: '✍️',
            setting: 'You collect signatures for a petition for a barrier-free station.',
            turns: [
              say(
                'Passantin',
                'Entschuldigung, worum geht es bei Ihrer Petition?',
                'Excuse me, what is your petition about?',
              ),
              you(
                'Wir fordern, dass der Bahnhof barrierefrei wird. Bisher kommen Rollstuhlfahrer nicht auf alle Bahnsteige.',
                ['Das ist geheim.', 'Explain your demand in a friendly and clear way.'],
                [
                  'Wir fordern, dass der Bahnhof barrierefrei wird. Bisher Rollstuhlfahrer kommen nicht auf alle Bahnsteige.',
                  'After Bisher the verb comes second: Bisher kommen Rollstuhlfahrer …',
                ],
              ),
              say(
                'Passantin',
                'Verstehe. Und was passiert mit den Unterschriften?',
                'I see. And what happens with the signatures?',
              ),
              you('Wir reichen sie beim Gemeinderat ein. Dort wird dann darüber entschieden.', [
                'Wir werfen sie weg.',
                'Answer honestly and make clear that the petition has an effect.',
              ]),
            ],
          },
          {
            id: 'debate',
            title: 'Eine Diskussion über Inklusion',
            emoji: '♿',
            setting: 'A colleague says inclusion at school is too expensive.',
            turns: [
              say(
                'Kollege',
                'Inklusion ist doch viel zu teuer. Das nimmt keiner in Anspruch.',
                'Inclusion is far too expensive. Nobody uses it.',
              ),
              you(
                'Ich sehe das anders. Wenn alle Kinder gemeinsam lernen, profitiert die ganze Gesellschaft.',
                ['Du hast keine Ahnung.', 'Stay respectful and give an argument.'],
                [
                  'Ich sehe das anders. Wenn alle Kinder lernen gemeinsam, profitiert die ganze Gesellschaft.',
                  'In a wenn-clause the verb goes to the end: … gemeinsam lernen.',
                ],
              ),
              say(
                'Kollege',
                'Aber wer soll die zusätzlichen Lehrer bezahlen?',
                'But who is supposed to pay for the additional teachers?',
              ),
              you(
                'Der Staat sollte die nötigen Mittel zur Verfügung stellen. Bildung ist eine Investition.',
                ['Das ist mir egal.', 'Give a concrete answer and use a fixed phrase.'],
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
        'Society blitz',
        'Noun-verb phrases and society words – true or false?',
        ['grammar', 'noun-verb-phrases'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Man trifft eine Entscheidung.', true),
          tf(
            'b2',
            'Man macht eine Entscheidung.',
            false,
            'The fixed phrase is eine Entscheidung treffen.',
          ),
          tf('b3', 'Man nimmt Hilfe in Anspruch.', true),
          tf('b4', 'Man gibt Hilfe in Anspruch.', false, 'The fixed phrase is in Anspruch nehmen.'),
          tf('b5', 'Ein Vorschlag kommt in Frage = er ist möglich.', true),
          tf('b6', 'Inklusion bedeutet, dass alle Menschen mitmachen können.', true),
          tf(
            'b7',
            'Barrierefreiheit hilft nur gesunden Menschen.',
            false,
            'Accessibility helps people with limited mobility and many others.',
          ),
          tf(
            'b8',
            'Eine Petition ist eine schriftliche Bitte oder Forderung an eine Behörde.',
            true,
          ),
          tf(
            'b9',
            'Ein Volksentscheid ist eine Abstimmung aller Wahlberechtigten über eine Sachfrage.',
            true,
          ),
          tf(
            'b10',
            'Wer jemanden ausgrenzt, nimmt ihn besonders herzlich auf.',
            false,
            'ausgrenzen means to exclude.',
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
        'Society vocabulary and noun-verb phrases in one round.',
        ['vocabulary', 'grammar', 'society-change'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Die Regierung zieht eine positive ___.', 'Bilanz', [
              'Entscheidung',
              'Kritik',
              'Hilfe',
            ]),
            {
              Entscheidung:
                'Entscheidung goes with treffen; with ziehen the phrase is Bilanz ziehen.',
              Kritik: 'Kritik goes with üben; with ziehen the phrase is Bilanz ziehen.',
              Hilfe: 'Hilfe goes with in Anspruch nehmen; with ziehen the phrase is Bilanz ziehen.',
            },
            'noun-verb-phrases',
          ),
          hint(
            q('c2', 'Der Gemeinderat hat die Pläne in Frage ___.', 'gestellt', [
              'getroffen',
              'genommen',
              'gekommen',
            ]),
            {
              getroffen: 'in Frage stellen is the fixed phrase.',
              genommen: 'in Frage stellen is the fixed phrase.',
              gekommen:
                'in Frage kommen means “be possible”; with an object it is in Frage stellen.',
            },
            'noun-verb-phrases',
          ),
          hint(
            q('c3', 'Der Fall kam gestern vor Gericht zur ___.', 'Sprache', [
              'Verfügung',
              'Hilfe',
              'Kritik',
            ]),
            {
              Verfügung: 'zur Verfügung goes with stellen.',
              Hilfe: 'zur Hilfe does not form this phrase with kommen.',
              Kritik: 'zur Kritik does not form this phrase with kommen.',
            },
            'noun-verb-phrases',
          ),
          q('c4', 'die Teilhabe', 'participation', ['rally', 'demand', 'campaign']),
          q('c5', 'ausgrenzen', 'to exclude', ['to sign', 'to enforce', 'to mobilise']),
          q('c6', 'die Chancengleichheit', 'equal opportunities', [
            'accessibility',
            'moral courage',
            'right to have a say',
          ]),
          q('c7', 'der Volksentscheid', 'referendum', [
            'draft law',
            'petition',
            'citizens’ initiative',
          ]),
          q('c8', 'unterzeichnen', 'to sign', ['to demand', 'to push through', 'to exclude']),
          q(
            'c9',
            'You want to say that a topic came up in a meeting.',
            'Das Thema kam in der Sitzung zur Sprache.',
            [
              'Das Thema nahm in der Sitzung Rücksicht.',
              'Das Thema traf in der Sitzung eine Entscheidung.',
              'Das Thema stellte in der Sitzung Kritik.',
            ],
          ),
          q('c10', 'die Benachteiligung', 'disadvantage, discrimination', [
            'solidarity',
            'equal rights',
            'participation',
          ]),
        ],
      },
    ),
  ],
};
