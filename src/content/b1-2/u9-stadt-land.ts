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

const U = 'b1-2-stadt-land';

const places = vocabList(U, 'City, country & tourism', [
  ['Großstadt', 'big city', '🏙️', 'die', 'Großstädte'],
  ['Kleinstadt', 'small town', '🏘️', 'die', 'Kleinstädte'],
  ['Einwohner', 'inhabitant', '🧍', 'der', 'Einwohner'],
  ['Lebensqualität', 'quality of life', '🌻', 'die'],
  ['Verkehrslärm', 'traffic noise', '🚗', 'der'],
  ['Grünfläche', 'green space', '🌳', 'die', 'Grünflächen'],
  ['Nahverkehr', 'local public transport', '🚋', 'der'],
  ['Stadtteil', 'district', '🗺️', 'der', 'Stadtteile'],
  ['Altstadt', 'old town', '🏰', 'die', 'Altstädte'],
  ['Stadtführung', 'guided city tour', '🚶', 'die', 'Stadtführungen'],
  ['Gebirge', 'mountains', '🏔️', 'das', 'Gebirge'],
  ['Ausflugsziel', 'destination for a day trip', '📍', 'das', 'Ausflugsziele'],
  ['lebenswert', 'worth living in', '💚'],
]);

const opinions = vocabList(U, 'Town or country?', [
  ['Hier ist immer etwas los.', 'There is always something going on here.', '🎉'],
  ['Auf dem Land ist es viel ruhiger.', 'It is much quieter in the country.', '🐄'],
  ['Die Stadt hat viel zu bieten.', 'The city has a lot to offer.', '🎁'],
  ['Ein Besuch lohnt sich.', 'A visit is worth it.', '👍'],
  ['Ich bin ein echter Stadtmensch.', 'I am a real city person.', '🌆'],
  ['Die Mieten sind kaum noch bezahlbar.', 'Rents are hardly affordable any more.', '💸'],
]);

const vocab = [...places, ...opinions];

export const stadtLand: UnitContent = {
  unit: unitB12({
    id: U,
    order: 9,
    title: 'Stadt, Land & Tourismus',
    subtitle: 'City life versus country life, liveable cities and planning a city visit',
    emoji: '🏙️',
    goals: [
      'Compare life in the city and in the country',
      'Discuss what makes a city liveable',
      'Present a city and plan a programme for visitors',
    ],
    grammar: [
      'Relative clauses with wo: die Stadt, wo ich wohne.',
      'Relative clauses with was: alles, was …; das Beste, was …',
    ],
    vocabFields: ['City, country & tourism', 'Town or country?'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-places',
      'flashcards',
      meta(
        'City, country & tourism',
        'Großstadt, Grünfläche, Ausflugsziel – where to live and what to visit.',
        ['vocabulary', 'city-country'],
        1,
        5,
      ),
      flashcards(places),
    ),
    activity(
      U,
      'flash-opinions',
      'flashcards',
      meta(
        'Town or country?',
        'Say what you like about a place.',
        ['vocabulary', 'communication', 'city-country'],
        1,
        4,
      ),
      flashcards(opinions),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Places', 'Name what you see.', ['vocabulary', 'city-country'], 1, 4),
      quizEmoji(
        byDe(
          places,
          'Großstadt',
          'Kleinstadt',
          'Verkehrslärm',
          'Grünfläche',
          'Nahverkehr',
          'Altstadt',
          'Gebirge',
          'Ausflugsziel',
        ),
      ),
    ),
    activity(
      U,
      'listen-opinions',
      'listen',
      meta(
        'Hear the opinions',
        'Listen and pick the meaning.',
        ['listening', 'city-country'],
        2,
        4,
      ),
      listen(opinions),
    ),
    activity(
      U,
      'memory-city-country',
      'memory',
      meta(
        'City and country',
        'Match each city word with its country opposite.',
        ['vocabulary', 'city-country'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'die Großstadt', b: 'das Dorf' },
          { id: 'm2', a: 'laut', b: 'ruhig' },
          { id: 'm3', a: 'der Verkehrslärm', b: 'die Stille' },
          { id: 'm4', a: 'das Hochhaus', b: 'der Bauernhof' },
          { id: 'm5', a: 'anonym', b: 'familiär' },
          { id: 'm6', a: 'die U-Bahn', b: 'das Fahrrad' },
        ],
      },
    ),
    activity(
      U,
      'spell-places',
      'spell',
      meta(
        'Spell the place words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'city-country'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(places, 'Altstadt', 'Gebirge', 'Stadtteil'), 'unscramble').items,
          ...spell(byDe(places, 'Einwohner', 'Lebensqualität', 'lebenswert'), 'type').items,
          dictation(
            'd1',
            'Das ist die Stadt, wo ich geboren bin.',
            'that is the city where I was born',
          ),
          dictation('d2', 'Alles, was du brauchst, ist hier.', 'everything you need is here'),
        ],
      },
    ),
    activity(
      U,
      'sort-wo-was',
      'sortit',
      meta(
        'wo or was?',
        'wo for places, was after alles, nichts, etwas and superlatives.',
        ['grammar', 'relative-wo-was'],
        2,
        4,
      ),
      {
        instruction: 'Which word starts the relative clause?',
        buckets: [
          { id: 'wo', label: 'wo (place)', emoji: '📍' },
          { id: 'was', label: 'was (alles, nichts, das Beste …)', emoji: '📦' },
        ],
        items: sortItems('w', [
          ['die Stadt, ___ ich wohne', 'wo'],
          ['das Dorf, ___ meine Oma lebt', 'wo'],
          ['in Zürich, ___ es viele Parks gibt', 'wo'],
          ['der Stadtteil, ___ wir uns kennengelernt haben', 'wo'],
          ['alles, ___ du brauchst', 'was'],
          ['nichts, ___ mich interessiert', 'was'],
          ['das Schönste, ___ ich gesehen habe', 'was'],
          ['etwas, ___ man nicht vergisst', 'was'],
        ]),
      },
    ),
    activity(
      U,
      'gap-wo-was',
      'gapfill',
      meta(
        'Die Stadt, wo …',
        'Relative clauses with wo and was.',
        ['grammar', 'relative-wo-was'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'w1',
              'Tübingen ist die Stadt, ___ ich studiert habe.',
              'wo',
              ['wo', 'was', 'die', 'wohin'],
              'Tübingen is the city where I studied.',
              'wo refers to a place (= in der).',
            ),
            {
              was: 'was refers to alles, nichts, etwas …; for a place use wo.',
              die: 'die would be the subject or object; here it is a place: wo (or in der).',
              wohin: 'wohin asks for a direction; studieren happens at a place: wo.',
            },
          ),
          hint(
            gap(
              'w2',
              'In der Altstadt gibt es alles, ___ Touristen suchen.',
              'was',
              ['was', 'das', 'wo', 'die'],
              'In the old town there is everything tourists look for.',
              'After alles the relative pronoun is was.',
            ),
            {
              das: 'After alles, nichts, etwas the relative pronoun is was, not das.',
              wo: 'wo is for places; after alles use was.',
              die: 'After alles use was.',
            },
          ),
          hint(
            gap(
              'w3',
              'Das ist das Beste, ___ du in Wien machen kannst.',
              'was',
              ['was', 'das', 'wo', 'dem'],
              'That is the best thing you can do in Vienna.',
              'After a superlative used as a noun: was.',
            ),
            {
              das: 'After a superlative noun like das Beste the relative pronoun is was.',
              wo: 'Not a place here: das Beste, was …',
              dem: 'After das Beste the relative pronoun is was.',
            },
          ),
          hint(
            gap(
              'w4',
              'Es gibt nichts, ___ mir auf dem Land fehlt.',
              'was',
              ['was', 'das', 'wo', 'der'],
              'There is nothing I miss in the country.',
            ),
            {
              das: 'After nichts the relative pronoun is was.',
              wo: 'wo is for places; after nichts use was.',
              der: 'After nichts the relative pronoun is was.',
            },
          ),
          hint(
            gap(
              'w5',
              'Wir fahren in die Berge, ___ es im Sommer kühler ist.',
              'wo',
              ['wo', 'was', 'wohin', 'die'],
              'We are going to the mountains, where it is cooler in summer.',
            ),
            {
              was: 'die Berge is a place: wo.',
              wohin: 'Being cooler happens at a place: wo, not wohin.',
              die: 'die would need a verb with an object; for the place use wo.',
            },
          ),
          hint(
            typed(
              'w6',
              'Der Bus kam pünktlich, ___ mich sehr überrascht hat.',
              'was',
              'The bus came on time, which surprised me a lot.',
              'was can refer to a whole clause.',
            ),
            {
              das: 'was refers back to the whole clause (the bus being on time).',
              der: 'der would refer to the bus; it was the punctuality that surprised me: was.',
            },
          ),
          hint(
            typed(
              'w7',
              'Kennst du ein Café, ___ man draußen sitzen kann?',
              'wo',
              'Do you know a café where you can sit outside?',
              'For a place you can also say in dem.',
              ['in dem'],
            ),
            { was: 'ein Café is a place: wo (or in dem).' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'The place where …',
        'Build relative clauses with wo and was.',
        ['grammar', 'word-order', 'relative-wo-was'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'That is the city where I was born.', [
            'Das',
            'ist',
            'die',
            'Stadt,',
            'wo',
            'ich',
            'geboren',
            'bin.',
          ]),
          sent('s2', 'Everything you need is here.', [
            'Alles,',
            'was',
            'du',
            'brauchst,',
            'ist',
            'hier.',
          ]),
          sent('s3', 'A visit is worth it.', ['Ein', 'Besuch', 'lohnt', 'sich.']),
          sent('s4', 'It is much quieter in the country.', [
            'Auf',
            'dem',
            'Land',
            'ist',
            'es',
            'viel',
            'ruhiger.',
          ]),
          sent('s5', 'The city has a lot to offer.', [
            'Die',
            'Stadt',
            'hat',
            'viel',
            'zu',
            'bieten.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-city',
      'listen',
      meta(
        'Liveable cities',
        'Listen to people talking about where they live.',
        ['listening', 'city-country', 'relative-wo-was'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Ich wohne in einem Stadtteil, wo es kaum Grünflächen gibt. Das stört mich sehr.',
            'There are hardly any green spaces in his district, which bothers him.',
            [
              'His district has lots of parks.',
              'He doesn’t care about green spaces.',
              'He lives in the country.',
            ],
          ),
          heard(
            'l2',
            'Seit wir auf dem Land wohnen, brauchen wir zwei Autos, weil der Nahverkehr so schlecht ist.',
            'In the country they need two cars because public transport is poor.',
            [
              'They sold their cars when they moved to the country.',
              'Public transport in the village is excellent.',
              'They live in the city centre.',
            ],
          ),
          heard(
            'l3',
            'Zürich hat eine sehr hohe Lebensqualität, aber die Mieten sind kaum noch bezahlbar.',
            'Zurich has a high quality of life but very high rents.',
            [
              'Zurich is cheap but not very pleasant.',
              'Rents in Zurich are low.',
              'Nobody wants to live in Zurich.',
            ],
          ),
          heard(
            'l4',
            'Die Stadtführung beginnt um zehn Uhr am Marktplatz und dauert ungefähr zwei Stunden.',
            'The city tour starts at ten at the market square and takes about two hours.',
            [
              'The city tour starts at two at the station.',
              'The city tour lasts ten hours.',
              'The market is closed during the city tour.',
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
        'City or country?',
        'Argue about where to live and plan a city visit.',
        ['communication', 'city-country'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'move',
            title: 'Umziehen aufs Land?',
            emoji: '🐄',
            setting: 'Your partner Mia wants to move from Munich to a village.',
            turns: [
              say(
                'Mia',
                'Auf dem Land ist es viel ruhiger. Und die Mieten sind günstiger.',
                'It is much quieter in the country. And rents are cheaper.',
              ),
              you('Das stimmt, aber ich bin ein echter Stadtmensch. Hier ist immer etwas los.', [
                'Das stimmt, aber ich bin ein echter Stadtmensch. Hier ist immer etwas los ist.',
                'Only one verb: Hier ist immer etwas los.',
              ]),
              say('Mia', 'Und was ist mit dem Verkehrslärm?', 'And what about the traffic noise?'),
              you('Wir könnten in einen Stadtteil ziehen, wo es mehr Grünflächen gibt.', [
                'Wir könnten in einen Stadtteil ziehen, was es mehr Grünflächen gibt.',
                'For a place use wo, not was.',
              ]),
            ],
          },
          {
            id: 'visit',
            title: 'Besuch in Hamburg',
            emoji: '⚓',
            setting: 'Your friend Ahmet is visiting you in Hamburg for one day.',
            turns: [
              say(
                'Ahmet',
                'Was sollte ich in Hamburg unbedingt sehen?',
                'What should I definitely see in Hamburg?',
              ),
              you(
                'Das Beste, was du machen kannst, ist eine Hafenrundfahrt.',
                [
                  'Das Beste, das du machen kannst, ist eine Hafenrundfahrt.',
                  'After das Beste the relative pronoun is was.',
                ],
                ['Hamburg ist ein Dorf.', 'Hamburg is a big city with a lot to offer.'],
              ),
              say('Ahmet', 'Super! Und am Nachmittag?', 'Great! And in the afternoon?'),
              you(
                'Dann machen wir eine Stadtführung durch die Speicherstadt. Ein Besuch lohnt sich.',
                [
                  'Dann wir machen eine Stadtführung durch die Speicherstadt. Ein Besuch lohnt sich.',
                  'After dann the verb comes next: dann machen wir …',
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
        'City blitz',
        'wo, was and city words – true or false?',
        ['grammar', 'relative-wo-was'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Das ist das Haus, wo ich wohne.', true),
          tf('b2', 'Alles, das du brauchst, ist hier.', false, 'After alles: was.'),
          tf('b3', 'Das ist das Schönste, was ich je gesehen habe.', true),
          tf(
            'b4',
            'Die Stadt, was ich liebe, ist Wien.',
            false,
            'die Stadt as an object: die (or wo for a place).',
          ),
          tf('b5', 'Nichts, was er sagt, stimmt.', true),
          tf('b6', 'Ich kenne ein Café, wo man gut frühstücken kann.', true),
          tf(
            'b7',
            'Eine Großstadt hat sehr wenige Einwohner.',
            false,
            'A big city has many inhabitants.',
          ),
          tf('b8', 'In der Altstadt findet man oft alte Häuser und Kirchen.', true),
          tf('b9', 'Grünflächen sind Parks und Gärten in der Stadt.', true),
          tf(
            'b10',
            'Verkehrslärm ist auf dem Land meistens größer als in der Stadt.',
            false,
            'There is usually more traffic noise in the city.',
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
        'City and country words and relative wo / was in one round.',
        ['vocabulary', 'grammar', 'city-country'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Das ist der Park, ___ wir uns kennengelernt haben.', 'wo', [
              'was',
              'den',
              'wohin',
            ]),
            {
              was: 'der Park is a place: wo.',
              den: 'kennenlernen already has its object (uns); the park is the place: wo.',
              wohin: 'wohin is a direction; here it is the place: wo.',
            },
            'relative-wo-was',
          ),
          hint(
            q('c2', 'Ich habe etwas gefunden, ___ dir gefallen wird.', 'was', ['das', 'wo', 'dem']),
            {
              das: 'After etwas the relative pronoun is was.',
              wo: 'wo is for places; after etwas use was.',
              dem: 'After etwas the relative pronoun is was.',
            },
            'relative-wo-was',
          ),
          hint(
            q('c3', 'Er hat den Zug verpasst, ___ ihn sehr geärgert hat.', 'was', [
              'der',
              'den',
              'wo',
            ]),
            {
              der: 'der would refer to the train; it was missing it that annoyed him: was.',
              den: 'was refers to the whole clause.',
              wo: 'wo is for places; was refers to the whole clause.',
            },
            'relative-wo-was',
          ),
          q('c4', 'die Lebensqualität', 'quality of life', [
            'green space',
            'traffic noise',
            'district',
          ]),
          q('c5', 'der Nahverkehr', 'local public transport', [
            'traffic noise',
            'motorway',
            'district',
          ]),
          q('c6', 'das Ausflugsziel', 'destination for a day trip', [
            'old town',
            'guided city tour',
            'mountains',
          ]),
          q('c7', 'You love the city. You say …', 'Ich bin ein echter Stadtmensch.', [
            'Auf dem Land ist es viel ruhiger.',
            'Die Mieten sind kaum noch bezahlbar.',
            'Ein Besuch lohnt sich nicht.',
          ]),
          q('c8', 'lebenswert', 'worth living in', ['affordable', 'quiet', 'crowded']),
          q('c9', 'der Stadtteil', 'district', ['old town', 'small town', 'inhabitant']),
          q('c10', 'die Grünfläche', 'green space', ['quality of life', 'district', 'mountains']),
        ],
      },
    ),
  ],
};
