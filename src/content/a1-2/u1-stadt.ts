import { byDe, flashcards, memory, quizEmoji, spell, vocabList } from '../builders';
import { ordinal } from '@/lib/german/ordinals';
import {
  activity,
  gap,
  heard,
  meta,
  q,
  readRound,
  sent,
  say,
  sepTable,
  setRound,
  sortItems,
  table,
  tf,
  typed,
  unit12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-stadt';

const places = vocabList(U, 'Places in town', [
  ['Bahnhof', 'station', '🚉', 'der', 'Bahnhöfe'],
  ['Haltestelle', 'stop', '🚏', 'die', 'Haltestellen'],
  ['Apotheke', 'pharmacy', '💊', 'die', 'Apotheken'],
  ['Bank', 'bank', '🏦', 'die', 'Banken'],
  ['Post', 'post office', '📮', 'die'],
  ['Krankenhaus', 'hospital', '🏥', 'das', 'Krankenhäuser'],
  ['Schule', 'school', '🏫', 'die', 'Schulen'],
  ['Kino', 'cinema', '🎬', 'das', 'Kinos'],
  ['Café', 'café', '☕', 'das', 'Cafés'],
  ['Restaurant', 'restaurant', '🍽️', 'das', 'Restaurants'],
  ['Bibliothek', 'library', '📚', 'die', 'Bibliotheken'],
  ['Park', 'park', '🌳', 'der', 'Parks'],
  ['Museum', 'museum', '🖼️', 'das', 'Museen'],
  ['Kirche', 'church', '⛪', 'die', 'Kirchen'],
  ['Rathaus', 'town hall', '🏛️', 'das', 'Rathäuser'],
  ['Flughafen', 'airport', '✈️', 'der', 'Flughäfen'],
  ['Schwimmbad', 'swimming pool', '🏊', 'das', 'Schwimmbäder'],
  ['Hotel', 'hotel', '🏨', 'das', 'Hotels'],
  ['Theater', 'theatre', '🎭', 'das', 'Theater'],
  ['Marktplatz', 'market square', '🧺', 'der', 'Marktplätze'],
]);

const ways = vocabList(U, 'Directions & transport', [
  ['geradeaus', 'straight ahead', '⬆️'],
  ['links', 'left', '⬅️'],
  ['rechts', 'right', '➡️'],
  ['Ecke', 'corner', '📐', 'die', 'Ecken'],
  ['Ampel', 'traffic light', '🚦', 'die', 'Ampeln'],
  ['Kreuzung', 'junction', '✖️', 'die', 'Kreuzungen'],
  ['Brücke', 'bridge', '🌉', 'die', 'Brücken'],
  ['Straße', 'street', '🛣️', 'die', 'Straßen'],
  ['Bus', 'bus', '🚌', 'der', 'Busse'],
  ['U-Bahn', 'underground', '🚇', 'die', 'U-Bahnen'],
  ['Straßenbahn', 'tram', '🚋', 'die', 'Straßenbahnen'],
  ['Zug', 'train', '🚆', 'der', 'Züge'],
  ['Taxi', 'taxi', '🚕', 'das', 'Taxis'],
  ['Fahrrad', 'bicycle', '🚲', 'das', 'Fahrräder'],
  ['Fahrkarte', 'ticket', '🎫', 'die', 'Fahrkarten'],
  ['Gleis', 'platform / track', '🛤️', 'das', 'Gleise'],
  ['Abfahrt', 'departure', '🛫', 'die', 'Abfahrten'],
  ['Ankunft', 'arrival', '🛬', 'die', 'Ankünfte'],
  ['umsteigen', 'to change (trains)', '🔄'],
  ['aussteigen', 'to get off', '🚪'],
  ['einsteigen', 'to get on', '🚶'],
  ['weit', 'far', '↔️'],
  ['in der Nähe', 'nearby', '📍'],
  ['Wo ist …?', 'Where is …?', '❓'],
  ['Wie komme ich zum …?', 'How do I get to the …?', '🗺️'],
]);

const vocab = [...places, ...ways];

export const stadt: UnitContent = {
  unit: unit12({
    id: U,
    order: 1,
    title: 'In der Stadt',
    subtitle: 'Places, directions and public transport',
    emoji: '🏙️',
    goals: [
      'Name important places in a town',
      'Ask for and understand directions',
      'Buy a ticket and talk about trains and buses',
    ],
    grammar: [
      'Wo? with the dative (im Park, an der Ecke)',
      'Wohin? (in den Park, ins Kino, zur Post, nach Berlin)',
      'The imperative with Sie (Gehen Sie geradeaus!)',
      'Ordinal numbers (die zweite Straße)',
    ],
    vocabFields: ['Places in town', 'Directions & transport'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-places',
      'flashcards',
      meta(
        'Places in town',
        'Learn 16 places – with article and plural.',
        ['vocabulary', 'city-directions'],
        1,
        4,
      ),
      flashcards(places.slice(0, 16)),
    ),

    activity(
      U,
      'quiz-places',
      'quiz',
      meta(
        'What place is this?',
        'Name the place – with the right article.',
        ['vocabulary', 'city-directions', 'articles'],
        1,
        3,
      ),
      quizEmoji(places.slice(0, 16), places),
    ),

    activity(
      U,
      'memory-places',
      'memory',
      meta(
        'Town memory',
        'Match the German word with the picture.',
        ['vocabulary', 'city-directions'],
        1,
        3,
      ),
      memory(
        byDe(
          places,
          'Bahnhof',
          'Apotheke',
          'Kino',
          'Park',
          'Kirche',
          'Hotel',
          'Flughafen',
          'Museum',
        ),
        'emoji',
      ),
    ),

    activity(
      U,
      'flash-ways',
      'flashcards',
      meta(
        'Directions & transport',
        'Left, right, straight ahead – and how to travel.',
        ['vocabulary', 'city-directions', 'transport'],
        1,
        4,
      ),
      flashcards(ways.slice(0, 18)),
    ),

    activity(
      U,
      'listen-ways',
      'listen',
      meta(
        'Which way?',
        'Listen to the directions and pick the meaning.',
        ['listening', 'city-directions', 'ordinal-numbers'],
        2,
        4,
      ),
      {
        items: [
          heard('l1', 'Gehen Sie geradeaus.', 'Go straight ahead.', [
            'Turn left.',
            'Turn right.',
            'Stop here.',
          ]),
          heard('l2', 'Biegen Sie links ab.', 'Turn left.', [
            'Turn right.',
            'Go straight ahead.',
            'Take the bus.',
          ]),
          heard('l3', 'Fahren Sie bis zur Ampel.', 'Drive as far as the traffic light.', [
            'Drive over the bridge.',
            'Turn around at the corner.',
            'Park at the station.',
          ]),
          heard(
            'l4',
            `Nehmen Sie die ${ordinal(3)} Straße rechts.`,
            'Take the third street on the right.',
            [
              'Take the second street on the right.',
              'Take the third street on the left.',
              'Take the first street on the right.',
            ],
          ),
          heard(
            'l5',
            `Nehmen Sie die ${ordinal(2)} Straße links.`,
            'Take the second street on the left.',
            [
              'Take the second street on the right.',
              'Take the fourth street on the left.',
              'Take the first street on the left.',
            ],
          ),
          heard('l6', 'Die Apotheke ist neben der Bank.', 'The pharmacy is next to the bank.', [
            'The pharmacy is opposite the bank.',
            'The bank is behind the pharmacy.',
            'The pharmacy is in the bank.',
          ]),
          heard('l7', 'Der Zug fährt von Gleis vier ab.', 'The train leaves from platform four.', [
            'The train arrives at platform four.',
            'The bus leaves from stop four.',
            'The train leaves at four o’clock.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'spell-places',
      'spell',
      meta(
        'Spell the places',
        'Unscramble the letters and type the words.',
        ['spelling', 'city-directions'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(places, 'Bahnhof', 'Apotheke', 'Kirche'), 'unscramble').items,
          ...spell(byDe(places, 'Bibliothek', 'Schwimmbad', 'Flughafen'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'sort-errands',
      'sortit',
      meta(
        'Where do you go?',
        'Pharmacy, bank or post office?',
        ['vocabulary', 'city-directions'],
        2,
        3,
      ),
      {
        instruction: 'Where do you do this?',
        buckets: [
          { id: 'apotheke', label: 'Apotheke', emoji: '💊' },
          { id: 'bank', label: 'Bank', emoji: '🏦' },
          { id: 'post', label: 'Post', emoji: '📮' },
        ],
        items: sortItems('e', [
          ['Tabletten kaufen', 'apotheke'],
          ['Hustensaft kaufen', 'apotheke'],
          ['Geld abheben', 'bank'],
          ['ein Konto öffnen', 'bank'],
          ['Geld wechseln', 'bank'],
          ['einen Brief schicken', 'post'],
          ['ein Paket abholen', 'post'],
          ['Briefmarken kaufen', 'post'],
        ]),
      },
    ),

    activity(
      U,
      'gap-wo',
      'gapfill',
      meta(
        'Wo? – im, am, an der …',
        'Where is it? After these prepositions the dative is used.',
        ['grammar', 'two-way-prepositions', 'dative', 'city-directions'],
        2,
        4,
      ),
      {
        items: [
          gap(
            'w1',
            'Die Apotheke ist ___ Bahnhof.',
            'am',
            ['am', 'im', 'an der', 'zum'],
            'The pharmacy is at the station.',
            'an + dem = am (der Bahnhof). Wo? → dative.',
          ),
          gap(
            'w2',
            'Wir sind ___ Park.',
            'im',
            ['im', 'in den', 'am', 'zum'],
            'We are in the park.',
            'in + dem = im. Wo? → dative.',
          ),
          gap(
            'w3',
            'Das Café ist ___ Ecke.',
            'an der',
            ['an der', 'an die', 'am', 'in der'],
            'The café is on the corner.',
            'die Ecke is feminine: dative = der.',
          ),
          gap(
            'w4',
            'Ich warte ___ Haltestelle.',
            'an der',
            ['an der', 'an die', 'bei der', 'zur'],
            'I am waiting at the stop.',
          ),
          gap(
            'w5',
            'Das Kino ist ___ Bibliothek.',
            'neben der',
            ['neben der', 'neben dem', 'neben die', 'neben den'],
            'The cinema is next to the library.',
            'die Bibliothek → dative: der.',
          ),
          gap(
            'w6',
            'Die Post ist ___ Museum.',
            'gegenüber dem',
            ['gegenüber dem', 'gegenüber der', 'gegenüber den', 'gegenüber das'],
            'The post office is opposite the museum.',
            'gegenüber always takes the dative; das Museum → dem.',
          ),
          gap(
            'w7',
            'Der Bus hält ___ Kirche.',
            'vor der',
            ['vor der', 'vor die', 'vor dem', 'vor den'],
            'The bus stops in front of the church.',
          ),
          gap(
            'w8',
            'Ich bin ___ Schule.',
            'in der',
            ['in der', 'in die', 'im', 'ins'],
            'I am at school.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-wohin',
      'gapfill',
      meta(
        'Wohin? – in den, ins, zur, nach',
        'Going somewhere: accusative, zu and nach.',
        ['grammar', 'two-way-prepositions', 'dative', 'city-directions'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'h1',
            'Ich gehe ___ Park.',
            'in den',
            ['in den', 'im', 'in dem', 'in die'],
            'I am going into the park.',
            'Wohin? → accusative: der Park → in den Park.',
          ),
          gap(
            'h2',
            'Wir gehen ___ Kino.',
            'ins',
            ['ins', 'im', 'in dem', 'in den'],
            'We are going to the cinema.',
            'in + das = ins.',
          ),
          gap(
            'h3',
            'Sie fährt ___ Bahnhof.',
            'zum',
            ['zum', 'zur', 'im', 'in den'],
            'She is going to the station.',
            'zu + dem = zum.',
          ),
          gap(
            'h4',
            'Ich gehe ___ Post.',
            'zur',
            ['zur', 'zum', 'nach', 'ins'],
            'I am going to the post office.',
            'zu + der = zur.',
          ),
          gap(
            'h5',
            'Wir fahren ___ Berlin.',
            'nach',
            ['nach', 'zu', 'in', 'zur'],
            'We are travelling to Berlin.',
            'Cities and countries without an article take nach.',
          ),
          gap(
            'h6',
            'Er geht ___ Hause.',
            'nach',
            ['nach', 'zu', 'in', 'bei'],
            'He is going home.',
            'nach Hause = (going) home.',
          ),
          gap(
            'h7',
            'Ich bin ___ Hause.',
            'zu',
            ['zu', 'nach', 'in', 'bei'],
            'I am at home.',
            'zu Hause = at home.',
          ),
          gap(
            'h8',
            'Gehen Sie ___ die Brücke.',
            'über',
            ['über', 'zu', 'nach', 'bei'],
            'Go over the bridge.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-ordinals',
      'gapfill',
      meta(
        'Die erste, zweite, dritte …',
        'Type the ordinal number in the right form.',
        ['grammar', 'ordinal-numbers', 'city-directions'],
        2,
        5,
      ),
      {
        items: [
          typed(
            'o1',
            'Nehmen Sie die ___ Straße links. (1.)',
            'erste',
            'Take the first street on the left.',
            '1. = erste, 3. = dritte – the two irregular ones.',
          ),
          typed(
            'o2',
            'Biegen Sie in die ___ Straße rechts ab. (3.)',
            'dritte',
            'Turn into the third street on the right.',
          ),
          typed(
            'o3',
            'Gehen Sie bis zur ___ Ampel. (2.)',
            'zweiten',
            'Go as far as the second traffic light.',
            'After an article in the dative the ordinal ends in -en.',
          ),
          typed(
            'o4',
            'Die Apotheke ist in der ___ Straße. (4.)',
            'vierten',
            'The pharmacy is in the fourth street.',
          ),
          typed(
            'o5',
            'Nehmen Sie die ___ Straße rechts. (7.)',
            'siebte',
            'Take the seventh street on the right.',
            '7. = siebte (not “siebente”, which is rare).',
          ),
          typed(
            'o6',
            'Das Hotel ist an der ___ Kreuzung. (5.)',
            'fünften',
            'The hotel is at the fifth junction.',
            'Up to 19: number + -te. From 20: number + -ste.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences-imperative',
      'sentence',
      meta(
        'Show the way',
        'Build the directions with the Sie-imperative.',
        ['grammar', 'imperative', 'word-order', 'city-directions'],
        2,
        5,
      ),
      {
        items: [
          sent('s1', 'Go straight ahead.', ['Gehen', 'Sie', 'geradeaus.'], {
            explanation: 'Imperative (Sie): verb first, then Sie.',
          }),
          sent(
            's2',
            'Turn left at the traffic light.',
            ['Biegen', 'Sie', 'an', 'der', 'Ampel', 'links', 'ab.'],
            { explanation: 'abbiegen is separable: ab goes to the end.' },
          ),
          sent('s3', 'Take the underground to the station.', [
            'Nehmen',
            'Sie',
            'die',
            'U-Bahn',
            'zum',
            'Bahnhof.',
          ]),
          sent('s4', 'Cross the bridge.', ['Überqueren', 'Sie', 'die', 'Brücke.']),
          sent(
            's5',
            'Change at the main station.',
            ['Steigen', 'Sie', 'am', 'Hauptbahnhof', 'um.'],
            { explanation: 'umsteigen is separable: um goes to the end.' },
          ),
          sent('s6', 'Take the second street on the right.', [
            'Nehmen',
            'Sie',
            'die',
            'zweite',
            'Straße',
            'rechts.',
          ]),
          sent(
            's7',
            'Excuse me, where is the post office?',
            ['Entschuldigung,', 'wo', 'ist', 'die', 'Post?'],
            { extra: ['der'] },
          ),
          sent('s8', 'How do I get to the station?', ['Wie', 'komme', 'ich', 'zum', 'Bahnhof?'], {
            extra: ['zur'],
          }),
        ],
      },
    ),

    activity(
      U,
      'conj-transport',
      'conjugation',
      meta(
        'fahren, abfahren, umsteigen',
        'Travel verbs – some change their vowel, some split in two.',
        ['grammar', 'verb-conjugation', 'separable-verbs', 'transport'],
        2,
        5,
      ),
      {
        tables: [
          table('fahren', 'to drive / travel', ['ich', 'du', 'er/sie/es']),
          table('nehmen', 'to take', ['du', 'er/sie/es', 'ihr']),
          sepTable('ab', 'fahren', 'to depart', ['er/sie/es', 'wir', 'ihr']),
          sepTable('um', 'steigen', 'to change (trains)', ['ich', 'du', 'er/sie/es']),
          sepTable('aus', 'steigen', 'to get off', ['du', 'ihr', 'sie/Sie']),
        ],
      },
    ),

    activity(
      U,
      'clock-trains',
      'clock',
      meta(
        'Train times',
        'Read and set the departure times of the trains.',
        ['vocabulary', 'time-clock', 'transport'],
        2,
        5,
      ),
      {
        rounds: [
          readRound('06:15', 'informal'),
          readRound('08:45', 'informal'),
          readRound('12:30', 'informal'),
          readRound('15:20', 'formal'),
          setRound('09:10', 'informal'),
          setRound('13:40', 'formal'),
        ],
      },
    ),

    activity(
      U,
      'dialogues-way',
      'dialogue',
      meta(
        'Asking the way, buying a ticket',
        'Two everyday conversations in town.',
        ['communication', 'city-directions', 'transport', 'imperative'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'way',
            title: 'Asking the way',
            emoji: '🗺️',
            setting: 'You are looking for the station.',
            turns: [
              you(
                'Entschuldigung, wie komme ich zum Bahnhof?',
                [
                  'Entschuldigung, wie heißt der Bahnhof?',
                  'That asks for the name of the station, not for the way.',
                ],
                [
                  'Entschuldigung, wo wohnt der Bahnhof?',
                  'Wohnen is for people. Ask: Wie komme ich zum …?',
                ],
              ),
              say(
                'Passantin',
                'Gehen Sie geradeaus bis zur Ampel. Dort biegen Sie links ab.',
                'Go straight ahead to the traffic light. Turn left there.',
              ),
              you(
                'Ist es weit?',
                [
                  'Ist es teuer?',
                  'Price is not the question here – you want to know the distance.',
                ],
                ['Wer ist das?', 'You want to know how far it is.'],
              ),
              say('Passantin', 'Nein, nur fünf Minuten zu Fuß.', 'No, only five minutes on foot.'),
              you(
                'Vielen Dank! Auf Wiedersehen!',
                ['Ich möchte einen Kaffee.', 'You are not in a café – thank the person.'],
                ['Ich bin fünf Minuten.', 'That does not make sense. Say thank you and goodbye.'],
              ),
            ],
          },
          {
            id: 'ticket',
            title: 'At the ticket counter',
            emoji: '🎫',
            setting: 'You want a ticket to Cologne.',
            turns: [
              say(
                'Mitarbeiter',
                'Guten Tag! Wohin möchten Sie fahren?',
                'Hello! Where would you like to go?',
              ),
              you(
                'Ich möchte nach Köln fahren.',
                ['Ich möchte in Köln fahren.', 'Going to a city: nach, not in.'],
                ['Ich möchte zu Köln fahren.', 'Cities take nach.'],
              ),
              say('Mitarbeiter', 'Einfach oder hin und zurück?', 'One way or return?'),
              you(
                'Hin und zurück, bitte.',
                ['Ich bin ein Zug.', 'You are not a train – choose a ticket type.'],
                ['Zwei Brötchen, bitte.', 'This is not the bakery.'],
              ),
              say(
                'Mitarbeiter',
                'Das macht neunundzwanzig Euro. Der Zug fährt um zehn Uhr fünfzehn von Gleis vier.',
                'That is 29 euros. The train leaves at 10:15 from platform four.',
              ),
              you(
                'Danke schön. Und wo ist Gleis vier?',
                ['Danke schön. Wie heißt Gleis vier?', 'Ask where something is with Wo ist …?'],
                ['Danke schön. Wann ist Gleis vier?', 'Wann asks about time; for a place use wo.'],
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
        'Wo or wohin? Imperative and ordinals – true or false?',
        ['grammar', 'two-way-prepositions', 'imperative'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Ich gehe in den Park.', true),
          tf('b2', 'Ich gehe im Park.', false, 'Wohin? → in den Park. (im Park answers Wo?)'),
          tf('b3', 'Die Bank ist an der Ecke.', true),
          tf('b4', 'Wir gehen ins Kino.', true),
          tf('b5', 'Wir fahren zur Berlin.', false, 'Cities: nach Berlin'),
          tf('b6', 'Gehen Sie geradeaus!', true),
          tf('b7', 'Gehe Sie geradeaus!', false, 'Imperative (Sie): Gehen Sie …'),
          tf('b8', 'Nehmen Sie die zweite Straße links.', true),
          tf('b9', 'Ich steige am Bahnhof um.', true),
          tf('b10', 'Ich umsteige am Bahnhof.', false, 'umsteigen is separable: Ich steige … um.'),
          tf('b11', 'Das Museum ist neben dem Kino.', true),
          tf('b12', 'Das Museum ist neben das Kino.', false, 'Wo? → dative: neben dem Kino'),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Places, directions, Wo/Wohin and ordinals in one final round.',
        ['vocabulary', 'grammar', 'city-directions'],
        3,
        5,
      ),
      {
        questions: [
          q(
            'c1',
            'Wir gehen ___ Kino.',
            'ins',
            ['im', 'in dem', 'in den'],
            'in + das = ins (Wohin?)',
          ),
          q(
            'c2',
            'You ask a stranger the way. You say:',
            'Entschuldigung, wie komme ich zum Bahnhof?',
            [
              'Entschuldigung, wie heißt du?',
              'Entschuldigung, was kostet der Bahnhof?',
              'Entschuldigung, ich bin am Bahnhof.',
            ],
          ),
          q('c3', 'Imperative (Sie): “Go straight ahead!”', 'Gehen Sie geradeaus!', [
            'Gehe Sie geradeaus!',
            'Geht Sie geradeaus!',
            'Sie geradeaus gehen!',
          ]),
          q('c4', 'Nehmen Sie die ___ Straße. (3.)', 'dritte', ['drei', 'dritten', 'dritt']),
          q('c5', 'Die Haltestelle ist ___ Ecke.', 'an der', ['an die', 'am', 'im']),
          q('c6', 'Wir fahren ___ Berlin.', 'nach', ['in', 'zu', 'ins']),
          q('c7', 'Which sentence is correct?', 'Ich steige in Köln um.', [
            'Ich umsteige in Köln.',
            'Ich steige in Köln.',
            'Ich um steige in Köln.',
          ]),
          q('c8', 'das Gleis', 'platform / track', ['ticket', 'stop', 'departure']),
          q('c9', 'Ich gehe ___ Apotheke.', 'zur', ['nach', 'im', 'zum']),
          q(
            'c10',
            'Wo ist die Bank? – Neben ___ Post.',
            'der',
            ['dem', 'die', 'den'],
            'die Post is feminine; neben + dative → der.',
          ),
        ],
      },
    ),
  ],
};
