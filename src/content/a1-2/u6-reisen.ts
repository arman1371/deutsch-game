import { byDe, flashcards, memory, quizEmoji, spell, vocabList } from '../builders';
import { numberToGerman } from '@/lib/german/numbers';
import {
  activity,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sortItems,
  table,
  tf,
  typed,
  unit12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-reisen';

const weather = vocabList(U, 'Weather & seasons', [
  ['Sonne', 'sun', '☀️', 'die', 'Sonnen'],
  ['Regen', 'rain', '🌧️', 'der'],
  ['Wolke', 'cloud', '☁️', 'die', 'Wolken'],
  ['Wind', 'wind', '💨', 'der', 'Winde'],
  ['Schnee', 'snow', '❄️', 'der'],
  ['Gewitter', 'thunderstorm', '⛈️', 'das', 'Gewitter'],
  ['Nebel', 'fog', '🌫️', 'der'],
  ['Regenschirm', 'umbrella', '☔', 'der', 'Regenschirme'],
  ['Temperatur', 'temperature', '🌡️', 'die', 'Temperaturen'],
  ['Frühling', 'spring', '🌷', 'der'],
  ['Sommer', 'summer', '😎', 'der'],
  ['Herbst', 'autumn', '🍂', 'der'],
  ['Winter', 'winter', '⛄', 'der'],
]);

const weatherTalk = vocabList(U, 'Describing the weather', [
  ['Es regnet.', 'It is raining.', '🌧️'],
  ['Es schneit.', 'It is snowing.', '🌨️'],
  ['Die Sonne scheint.', 'The sun is shining.', '🌞'],
  ['Es ist sonnig.', 'It is sunny.', '😎'],
  ['Es ist windig.', 'It is windy.', '🌬️'],
  ['Es ist bewölkt.', 'It is cloudy.', '🌥️'],
  ['warm', 'warm', '🥵'],
  ['kalt', 'cold', '🥶'],
  ['heiß', 'hot', '🔥'],
  ['kühl', 'cool', '🍃'],
  ['Wie ist das Wetter?', 'What is the weather like?', '❓'],
  ['Grad', 'degrees', '🔢', 'das'],
]);

const travel = vocabList(U, 'Travel & holiday', [
  ['Reise', 'journey', '✈️', 'die', 'Reisen'],
  ['Urlaub', 'holiday', '🏖️', 'der', 'Urlaube'],
  ['Koffer', 'suitcase', '🧳', 'der', 'Koffer'],
  ['Reisepass', 'passport', '🛂', 'der', 'Reisepässe'],
  ['Strand', 'beach', '🏝️', 'der', 'Strände'],
  ['Meer', 'sea', '🌊', 'das', 'Meere'],
  ['Berg', 'mountain', '⛰️', 'der', 'Berge'],
  ['See', 'lake', '🏞️', 'der', 'Seen'],
  ['Zelt', 'tent', '⛺', 'das', 'Zelte'],
  ['Postkarte', 'postcard', '💌', 'die', 'Postkarten'],
  ['Foto', 'photo', '📸', 'das', 'Fotos'],
  ['Ausflug', 'trip / outing', '🚌', 'der', 'Ausflüge'],
  ['reisen', 'to travel', '🧭'],
  ['fliegen', 'to fly', '🛫'],
  ['wandern', 'to hike', '🥾'],
  ['schwimmen', 'to swim', '🏊'],
  ['besuchen', 'to visit', '🏛️'],
]);

const hotel = vocabList(U, 'At the hotel', [
  ['Hotel', 'hotel', '🏨', 'das', 'Hotels'],
  ['Einzelzimmer', 'single room', '🛏️', 'das', 'Einzelzimmer'],
  ['Doppelzimmer', 'double room', '🛌', 'das', 'Doppelzimmer'],
  ['Frühstück', 'breakfast', '🥐', 'das'],
  ['Nacht', 'night', '🌙', 'die', 'Nächte'],
  ['Reservierung', 'reservation', '📋', 'die', 'Reservierungen'],
  ['Schlüssel', 'key', '🔑', 'der', 'Schlüssel'],
  ['Rezeption', 'reception', '🛎️', 'die'],
  ['Haben Sie ein Zimmer frei?', 'Do you have a room free?', '❓'],
  ['Ich habe ein Zimmer reserviert.', 'I have reserved a room.', '📞'],
  ['Viele Grüße aus …', 'Best wishes from …', '💌'],
]);

const vocab = [...weather, ...weatherTalk, ...travel, ...hotel];

export const reisen: UnitContent = {
  unit: unit12({
    id: U,
    order: 6,
    title: 'Wetter & Reisen',
    subtitle: 'Weather, holidays, hotel and postcards',
    emoji: '🌦️',
    goals: [
      'Talk about the weather and the seasons',
      'Book a hotel room and read a postcard',
      'Tell what you did on holiday',
    ],
    grammar: [
      'Perfekt with haben (ich habe gebucht) and sein (wir sind gefahren)',
      'War / hatte for descriptions in the past',
      'Conjunctions und, oder, aber, denn (no change in word order)',
    ],
    vocabFields: [
      'Weather & seasons',
      'Describing the weather',
      'Travel & holiday',
      'At the hotel',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-weather',
      'flashcards',
      meta(
        'Weather & seasons',
        'Sun, rain, snow and the four seasons.',
        ['vocabulary', 'weather-travel'],
        1,
        4,
      ),
      flashcards([...weather, ...weatherTalk.slice(0, 6)]),
    ),

    activity(
      U,
      'quiz-weather',
      'quiz',
      meta(
        'What is this?',
        'Name the weather or season from the picture.',
        ['vocabulary', 'weather-travel', 'articles'],
        1,
        3,
      ),
      quizEmoji(weather, weather),
    ),

    activity(
      U,
      'memory-weather',
      'memory',
      meta(
        'Weather memory',
        'Match the German word with the picture.',
        ['vocabulary', 'weather-travel'],
        1,
        3,
      ),
      memory(
        byDe(
          weather,
          'Sonne',
          'Regen',
          'Wolke',
          'Wind',
          'Schnee',
          'Gewitter',
          'Nebel',
          'Regenschirm',
        ),
        'emoji',
      ),
    ),

    activity(
      U,
      'flash-travel',
      'flashcards',
      meta(
        'Travel & hotel',
        'Suitcase, beach, double room – the holiday words.',
        ['vocabulary', 'weather-travel'],
        1,
        5,
      ),
      flashcards([...travel, ...hotel.slice(0, 6)]),
    ),

    activity(
      U,
      'spell-travel',
      'spell',
      meta(
        'Spell the holiday',
        'Unscramble the letters and type the words.',
        ['spelling', 'weather-travel'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(travel, 'Koffer', 'Strand', 'Meer'), 'unscramble').items,
          ...spell(byDe(travel, 'Reisepass', 'Postkarte', 'Ausflug'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'sort-aux',
      'sortit',
      meta(
        'haben or sein?',
        'Which verbs form the Perfekt with sein?',
        ['grammar', 'perfekt', 'weather-travel'],
        2,
        4,
      ),
      {
        instruction: 'Which auxiliary verb goes with it in the Perfekt?',
        buckets: [
          { id: 'haben', label: 'haben + Partizip II', emoji: '✋' },
          { id: 'sein', label: 'sein + Partizip II', emoji: '🚶' },
        ],
        items: sortItems('a', [
          ['fahren', 'sein'],
          ['fliegen', 'sein'],
          ['gehen', 'sein'],
          ['bleiben', 'sein'],
          ['kommen', 'sein'],
          ['schlafen', 'haben'],
          ['essen', 'haben'],
          ['kaufen', 'haben'],
          ['sehen', 'haben'],
          ['machen', 'haben'],
        ]),
      },
    ),

    activity(
      U,
      'listen-travel',
      'listen',
      meta(
        'Weather report and hotel',
        'Listen and pick the meaning.',
        ['listening', 'weather-travel', 'numbers'],
        2,
        5,
      ),
      {
        items: [
          heard('l1', 'Heute scheint die Sonne.', 'The sun is shining today.', [
            'It is raining today.',
            'It is snowing today.',
            'It is foggy today.',
          ]),
          heard('l2', 'Morgen regnet es den ganzen Tag.', 'Tomorrow it will rain all day.', [
            'Tomorrow it will be sunny all day.',
            'Yesterday it rained all day.',
            'Tomorrow it will snow all day.',
          ]),
          heard('l3', `Heute sind es ${numberToGerman(25)} Grad.`, 'Today it is 25 degrees.', [
            'Today it is 15 degrees.',
            'Today it is 52 degrees.',
            'Today it is 5 degrees.',
          ]),
          heard(
            'l4',
            'Im Winter ist es kalt und es schneit oft.',
            'In winter it is cold and it often snows.',
            [
              'In summer it is cold and it often snows.',
              'In winter it is warm and it often rains.',
              'In winter it is cold and it never snows.',
            ],
          ),
          heard(
            'l5',
            'Ich möchte ein Doppelzimmer für drei Nächte.',
            'I would like a double room for three nights.',
            [
              'I would like a single room for three nights.',
              'I would like a double room for two nights.',
              'I would like a double room with breakfast.',
            ],
          ),
          heard(
            'l6',
            'Das Frühstück gibt es von sieben bis zehn Uhr.',
            'Breakfast is from seven to ten.',
            [
              'Breakfast is from eight to eleven.',
              'Dinner is from seven to ten.',
              'Breakfast is until seven.',
            ],
          ),
          heard(
            'l7',
            'Wir sind letzten Sommer nach Spanien geflogen.',
            'Last summer we flew to Spain.',
            [
              'Last summer we drove to Spain.',
              'Next summer we will fly to Spain.',
              'Last winter we flew to Spain.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-postcard',
      'quiz',
      meta(
        'Reading postcards',
        'Short messages from holiday – what do they say?',
        ['vocabulary', 'weather-travel'],
        2,
        4,
      ),
      {
        questions: [
          q(
            'p1',
            '“Das Wetter ist heiß, die Sonne scheint.” – How is the weather?',
            'Hot and sunny',
            ['Cold and snowy', 'Rainy and windy', 'Foggy and cool'],
          ),
          q(
            'p2',
            '“Wir haben ein Doppelzimmer mit Balkon gebucht.” – What did they book?',
            'A double room with a balcony',
            ['A single room with a balcony', 'A double room by the sea', 'A tent near the lake'],
          ),
          q(
            'p3',
            '“Gestern sind wir auf einen Berg gewandert.” – What did they do yesterday?',
            'They hiked up a mountain',
            [
              'They swam in the sea',
              'They took a train to the mountain',
              'They stayed in the hotel',
            ],
          ),
          q(
            'p4',
            '“Morgen fliegen wir nach Hause.” – What will they do tomorrow?',
            'They fly home',
            ['They fly to a hotel', 'They came home yesterday', 'They are driving home'],
          ),
          q('p5', '“Liebe Anna, viele Grüße aus Rom!” – Where is the writer?', 'In Rome', [
            'In Anna’s house',
            'At home',
            'In Vienna',
          ]),
          q('p6', '“Bis bald, dein Tom” – What does the writer mean?', 'See you soon', [
            'Goodbye for ever',
            'Good morning',
            'Thank you very much',
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-aux',
      'gapfill',
      meta(
        'haben or sein? – Perfekt',
        'Choose the auxiliary verb for the holiday story.',
        ['grammar', 'perfekt', 'weather-travel'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'a1',
            'Wir ___ nach Italien gefahren.',
            'sind',
            ['sind', 'haben', 'waren', 'hatten'],
            'We travelled to Italy.',
            'Movement from A to B → sein.',
          ),
          gap(
            'a2',
            'Ich ___ ein Hotel gebucht.',
            'habe',
            ['habe', 'bin', 'hatte', 'war'],
            'I booked a hotel.',
            'Most verbs → haben.',
          ),
          gap(
            'a3',
            'Sie ___ am Strand geblieben.',
            'ist',
            ['ist', 'hat', 'war', 'wird'],
            'She stayed on the beach.',
            'bleiben and sein always use sein.',
          ),
          gap(
            'a4',
            'Er ___ viele Fotos gemacht.',
            'hat',
            ['hat', 'ist', 'hatte', 'war'],
            'He took many photos.',
          ),
          gap(
            'a5',
            'Ihr ___ nach Wien geflogen.',
            'seid',
            ['seid', 'habt', 'wart', 'hattet'],
            'You flew to Vienna.',
          ),
          gap(
            'a6',
            'Wir ___ den Koffer gepackt.',
            'haben',
            ['haben', 'sind', 'hatten', 'waren'],
            'We packed the suitcase.',
          ),
          gap(
            'a7',
            'Du ___ gestern früh aufgestanden.',
            'bist',
            ['bist', 'hast', 'warst', 'hattest'],
            'You got up early yesterday.',
            'aufstehen (change of state) → sein.',
          ),
          gap(
            'a8',
            'Sie ___ drei Tage in Rom gewesen.',
            'sind',
            ['sind', 'haben', 'waren', 'hatten'],
            'They have been in Rome for three days.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-participle',
      'gapfill',
      meta(
        'Partizip II',
        'Type the participle of the verb in brackets.',
        ['grammar', 'perfekt', 'weather-travel'],
        3,
        6,
      ),
      {
        items: [
          typed(
            'p1',
            'Wir haben ein Hotel ___. (buchen)',
            'gebucht',
            'We booked a hotel.',
            'ge- + stem + -t for regular verbs.',
          ),
          typed('p2', 'Ich habe viele Fotos ___. (machen)', 'gemacht', 'I took many photos.'),
          typed(
            'p3',
            'Er ist nach Spanien ___. (fliegen)',
            'geflogen',
            'He flew to Spain.',
            'Irregular verbs: ge- + changed stem + -en.',
          ),
          typed(
            'p4',
            'Sie hat eine Postkarte ___. (schreiben)',
            'geschrieben',
            'She wrote a postcard.',
          ),
          typed(
            'p5',
            'Wir sind drei Tage in Rom ___. (bleiben)',
            'geblieben',
            'We stayed in Rome for three days.',
          ),
          typed('p6', 'Wir haben Pizza ___. (essen)', 'gegessen', 'We ate pizza.'),
          typed('p7', 'Sie hat den Koffer ___. (packen)', 'gepackt', 'She packed the suitcase.'),
          typed(
            'p8',
            'Ich bin um sieben Uhr ___. (aufstehen)',
            'aufgestanden',
            'I got up at seven.',
            'Separable verbs: ge- goes between prefix and stem.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-conjunctions',
      'gapfill',
      meta(
        'und, oder, aber, denn',
        'Join two sentences – the word order does not change.',
        ['grammar', 'conjunctions', 'weather-travel'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'c1',
            'Ich bleibe zu Hause, ___ es regnet.',
            'denn',
            ['denn', 'oder', 'und', 'aber'],
            'I am staying at home because it is raining.',
            'denn = because (gives a reason).',
          ),
          gap(
            'c2',
            'Wir fahren ans Meer ___ in die Berge.',
            'oder',
            ['oder', 'denn', 'und', 'aber'],
            'We are going to the sea or to the mountains.',
            'oder = or (a choice).',
          ),
          gap(
            'c3',
            'Es ist sonnig, ___ es ist kalt.',
            'aber',
            ['aber', 'denn', 'und', 'oder'],
            'It is sunny, but it is cold.',
            'aber = but (a contrast).',
          ),
          gap(
            'c4',
            'Ich packe den Koffer ___ ich gehe zum Bahnhof.',
            'und',
            ['und', 'denn', 'oder', 'aber'],
            'I pack the suitcase and go to the station.',
          ),
          gap(
            'c5',
            'Wir bleiben im Hotel, ___ es schneit.',
            'denn',
            ['denn', 'und', 'oder', 'aber'],
            'We stay in the hotel because it is snowing.',
          ),
          gap(
            'c6',
            'Möchtest du ans Meer ___ in die Berge fahren?',
            'oder',
            ['oder', 'aber', 'denn', 'und'],
            'Would you like to go to the sea or to the mountains?',
          ),
          gap(
            'c7',
            'Das Hotel ist schön, ___ teuer.',
            'aber',
            ['aber', 'denn', 'oder', 'und'],
            'The hotel is nice, but expensive.',
          ),
          gap(
            'c8',
            'Ich liebe den Sommer, ___ ich schwimme gern.',
            'denn',
            ['denn', 'aber', 'oder', 'und'],
            'I love summer because I like swimming.',
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-travel',
      'conjugation',
      meta(
        'fliegen, reisen, wandern …',
        'Present-tense travel verbs.',
        ['grammar', 'verb-conjugation', 'weather-travel'],
        2,
        4,
      ),
      {
        tables: [
          table('fliegen', 'to fly', ['ich', 'du', 'er/sie/es']),
          table('reisen', 'to travel', ['ich', 'du', 'ihr']),
          table('wandern', 'to hike', ['ich', 'du', 'wir']),
          table('schwimmen', 'to swim', ['du', 'er/sie/es', 'ihr']),
          table('regnen', 'to rain', ['er/sie/es', 'wir', 'sie/Sie']),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Holiday sentences',
        'Weather, hotel and postcards – build the sentences.',
        ['grammar', 'word-order', 'weather-travel', 'perfekt'],
        2,
        6,
      ),
      {
        items: [
          sent('s1', 'It is raining today.', ['Heute', 'regnet', 'es.'], {
            alsoAccept: ['Es regnet heute.'],
          }),
          sent('s2', 'The sun is shining.', ['Die', 'Sonne', 'scheint.']),
          sent(
            's3',
            'Last summer we went to Italy.',
            ['Letzten', 'Sommer', 'sind', 'wir', 'nach', 'Italien', 'gefahren.'],
            {
              alsoAccept: ['Wir sind letzten Sommer nach Italien gefahren.'],
              explanation: 'Perfekt: sein in second position, participle at the end.',
            },
          ),
          sent('s4', 'The weather was great.', ['Das', 'Wetter', 'war', 'toll.']),
          sent('s5', 'We booked a double room.', [
            'Wir',
            'haben',
            'ein',
            'Doppelzimmer',
            'gebucht.',
          ]),
          sent(
            's6',
            'I am staying at home because it is snowing.',
            ['Ich', 'bleibe', 'zu', 'Hause,', 'denn', 'es', 'schneit.'],
            {
              explanation: 'denn does not change the word order: es schneit.',
            },
          ),
          sent('s7', 'Best wishes from Berlin!', ['Viele', 'Grüße', 'aus', 'Berlin!']),
          sent('s8', 'Do you have a room free?', ['Haben', 'Sie', 'ein', 'Zimmer', 'frei?']),
          sent('s9', 'We swam in the sea.', ['Wir', 'sind', 'im', 'Meer', 'geschwommen.']),
        ],
      },
    ),

    activity(
      U,
      'dialogues-holiday',
      'dialogue',
      meta(
        'Hotel and holiday talk',
        'Check in at a hotel and tell a friend about your holiday.',
        ['communication', 'weather-travel', 'perfekt', 'past-tense'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'hotel',
            title: 'At the hotel',
            emoji: '🏨',
            setting: 'You arrive and check in.',
            turns: [
              say(
                'Rezeption',
                'Guten Abend! Kann ich Ihnen helfen?',
                'Good evening! Can I help you?',
              ),
              you(
                'Guten Abend, ich habe ein Zimmer reserviert.',
                [
                  'Guten Abend, ich bin ein Zimmer reserviert.',
                  'reservieren forms the Perfekt with haben.',
                ],
                [
                  'Guten Abend, ich habe ein Zimmer reservieren.',
                  'The Perfekt needs the participle: reserviert.',
                ],
              ),
              say('Rezeption', 'Auf welchen Namen?', 'Under what name?'),
              you(
                'Auf den Namen Meier.',
                ['Auf dem Namen Meier.', 'In this phrase: auf den Namen (accusative).'],
                ['Mit den Namen Meier.', 'The set phrase is: auf den Namen …'],
              ),
              say(
                'Rezeption',
                'Ein Doppelzimmer für drei Nächte, mit Frühstück. Das macht 240 Euro.',
                'A double room for three nights with breakfast. That is 240 euros.',
              ),
              you(
                'Wann gibt es Frühstück?',
                ['Wer gibt es Frühstück?', 'Wer asks about a person. For time use wann.'],
                ['Wann es gibt Frühstück?', 'Question word order: Wann gibt es Frühstück?'],
              ),
              say(
                'Rezeption',
                'Von sieben bis zehn Uhr im Restaurant.',
                'From seven to ten in the restaurant.',
              ),
              you(
                'Vielen Dank! Wo ist das Restaurant?',
                ['Vielen Dank! Wohin ist das Restaurant?', 'To ask where something is, use wo.'],
                ['Vielen Dank! Wer ist das Restaurant?', 'Wer asks about a person.'],
              ),
            ],
          },
          {
            id: 'holiday',
            title: 'After the holiday',
            emoji: '🏖️',
            setting: 'A friend asks about your holiday.',
            turns: [
              say('Freundin', 'Wie war dein Urlaub?', 'How was your holiday?'),
              you(
                'Super! Das Wetter war schön und wir waren jeden Tag am Strand.',
                [
                  'Super! Das Wetter hatte schön und wir hatten jeden Tag am Strand.',
                  'war for adjectives and places, hatte for things you have.',
                ],
                [
                  'Super! Das Wetter war schön und wir sind jeden Tag am Strand.',
                  'In the past: wir waren.',
                ],
              ),
              say('Freundin', 'Wo seid ihr gewesen?', 'Where were you?'),
              you(
                'Wir sind nach Spanien geflogen.',
                ['Wir haben nach Spanien geflogen.', 'fliegen (movement) uses sein.'],
                ['Wir sind nach Spanien fliegen.', 'The Perfekt needs the participle geflogen.'],
              ),
              say('Freundin', 'Habt ihr Fotos gemacht?', 'Did you take photos?'),
              you(
                'Ja, ich habe viele Fotos gemacht.',
                ['Ja, ich bin viele Fotos gemacht.', 'machen uses haben.'],
                ['Ja, ich habe viele Fotos machen.', 'The Perfekt needs the participle gemacht.'],
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
        'Holiday blitz',
        'Perfekt, war/hatte and denn – true or false?',
        ['grammar', 'perfekt', 'conjunctions'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Wir sind nach Italien gefahren.', true),
          tf('b2', 'Wir haben nach Italien gefahren.', false, 'fahren (movement) → sein'),
          tf('b3', 'Ich habe ein Hotel gebucht.', true),
          tf('b4', 'Ich bin ein Hotel gebucht.', false, 'buchen → haben'),
          tf('b5', 'Ich bleibe zu Hause, denn es regnet.', true),
          tf(
            'b6',
            'Ich bleibe zu Hause, denn regnet es.',
            false,
            'denn does not change the word order: es regnet.',
          ),
          tf('b7', 'Das Wetter war schön.', true),
          tf('b8', 'Das Wetter hatte schön.', false, 'war + adjective'),
          tf('b9', 'Im Winter schneit es oft.', true),
          tf('b10', 'Wir sind in Rom geblieben.', true),
          tf('b11', 'Er hat nach Hause gegangen.', false, 'gehen → ist gegangen'),
          tf('b12', 'Es ist sonnig, aber es ist kalt.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Weather, holidays, Perfekt and conjunctions in one final round.',
        ['vocabulary', 'grammar', 'weather-travel'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Wir ___ nach Italien gefahren.', 'sind', ['haben', 'waren', 'hatten']),
          q('c2', 'Ich ___ ein Hotel gebucht.', 'habe', ['bin', 'hatte', 'war']),
          q('c3', 'Ich bleibe zu Hause, ___ es regnet.', 'denn', ['oder', 'und', 'aber']),
          q('c4', 'Es ist sonnig, ___ es ist kalt.', 'aber', ['denn', 'und', 'oder']),
          q('c5', 'Partizip II of “fliegen”:', 'geflogen', ['geflieget', 'gefliegt', 'fliegen']),
          q('c6', 'Das Wetter ___ gestern schön.', 'war', ['hatte', 'ist', 'hat']),
          q('c7', 'What does “Es schneit.” mean?', 'It is snowing.', [
            'It is raining.',
            'It is windy.',
            'It is foggy.',
          ]),
          q('c8', 'You ask at the hotel:', 'Haben Sie ein Zimmer frei?', [
            'Haben Sie ein Zimmer teuer?',
            'Sind Sie ein Zimmer?',
            'Wo ist das Zimmer frei?',
          ]),
          q('c9', 'Wir sind drei Tage in Rom ___.', 'geblieben', [
            'gebleibt',
            'gebleiben',
            'bleiben',
          ]),
          q('c10', 'der Regenschirm', 'umbrella', ['raincoat', 'rain', 'cloud']),
        ],
      },
    ),
  ],
};
