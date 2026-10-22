import { byDe, flashcards, memory, quizEmoji, spell, vocabList } from '../builders';
import { numberToGerman } from '@/lib/german/numbers';
import { ordinalDative } from '@/lib/german/ordinals';
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
  unit12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-wohnen';

const rooms = vocabList(U, 'Rooms', [
  ['Küche', 'kitchen', '🍳', 'die', 'Küchen'],
  ['Wohnzimmer', 'living room', '🛋️', 'das', 'Wohnzimmer'],
  ['Schlafzimmer', 'bedroom', '😴', 'das', 'Schlafzimmer'],
  ['Badezimmer', 'bathroom', '🛁', 'das', 'Badezimmer'],
  ['Kinderzimmer', 'children’s room', '🧸', 'das', 'Kinderzimmer'],
  ['Flur', 'hall', '🚪', 'der', 'Flure'],
  ['Balkon', 'balcony', '🌇', 'der', 'Balkone'],
  ['Garten', 'garden', '🌻', 'der', 'Gärten'],
  ['Keller', 'cellar', '🕳️', 'der', 'Keller'],
  ['Garage', 'garage', '🚗', 'die', 'Garagen'],
  ['Toilette', 'toilet', '🚽', 'die', 'Toiletten'],
  ['Treppe', 'stairs', '🪜', 'die', 'Treppen'],
  ['Aufzug', 'lift', '🛗', 'der', 'Aufzüge'],
]);

const furniture = vocabList(U, 'Furniture & things at home', [
  ['Bett', 'bed', '🛏️', 'das', 'Betten'],
  ['Tisch', 'table', '🍽️', 'der', 'Tische'],
  ['Stuhl', 'chair', '🪑', 'der', 'Stühle'],
  ['Sofa', 'sofa', '🛋️', 'das', 'Sofas'],
  ['Schrank', 'cupboard', '🗄️', 'der', 'Schränke'],
  ['Kleiderschrank', 'wardrobe', '👗', 'der', 'Kleiderschränke'],
  ['Regal', 'shelf', '📚', 'das', 'Regale'],
  ['Lampe', 'lamp', '💡', 'die', 'Lampen'],
  ['Herd', 'cooker', '🔥', 'der', 'Herde'],
  ['Kühlschrank', 'fridge', '🧊', 'der', 'Kühlschränke'],
  ['Waschmaschine', 'washing machine', '🧺', 'die', 'Waschmaschinen'],
  ['Spiegel', 'mirror', '🪞', 'der', 'Spiegel'],
  ['Fenster', 'window', '🪟', 'das', 'Fenster'],
  ['Tür', 'door', '🚪', 'die', 'Türen'],
  ['Dusche', 'shower', '🚿', 'die', 'Duschen'],
  ['Badewanne', 'bathtub', '🛁', 'die', 'Badewannen'],
  ['Waschbecken', 'washbasin', '🚰', 'das', 'Waschbecken'],
  ['Teppich', 'carpet', '🟥', 'der', 'Teppiche'],
  ['Bild', 'picture', '🖼️', 'das', 'Bilder'],
  ['Fernseher', 'TV', '📺', 'der', 'Fernseher'],
  ['Wand', 'wall', '🧱', 'die', 'Wände'],
]);

const ads = vocabList(U, 'Flat & rental ads', [
  ['Wohnung', 'flat', '🏢', 'die', 'Wohnungen'],
  ['Haus', 'house', '🏠', 'das', 'Häuser'],
  ['Zimmer', 'room', '🚪', 'das', 'Zimmer'],
  ['Miete', 'rent', '💶', 'die', 'Mieten'],
  ['Nebenkosten', 'extra costs (heating, water …)', '🧾', 'die'],
  ['Kaution', 'deposit', '🔐', 'die', 'Kautionen'],
  ['Vermieter', 'landlord', '🧑‍💼', 'der', 'Vermieter'],
  ['Mieter', 'tenant', '🔑', 'der', 'Mieter'],
  ['Mietvertrag', 'rental contract', '📄', 'der', 'Mietverträge'],
  ['Besichtigung', 'viewing', '👀', 'die', 'Besichtigungen'],
  ['Quadratmeter', 'square metre', '📐', 'der', 'Quadratmeter'],
  ['möbliert', 'furnished', '🛋️'],
  ['ruhig', 'quiet', '🤫'],
  ['hell', 'bright', '☀️'],
  ['zentral', 'central', '📍'],
  ['ab sofort', 'immediately', '⏩'],
  ['zu vermieten', 'for rent', '🪧'],
]);

const vocab = [...rooms, ...furniture, ...ads];

const euro = (n: number) => `${n} €`;
const rent = (id: string, label: string, n: number, wrong: number[]) =>
  heard(id, `${label} ${numberToGerman(n)} Euro.`, euro(n), wrong.map(euro));

export const wohnen: UnitContent = {
  unit: unit12({
    id: U,
    order: 2,
    title: 'Wohnen',
    subtitle: 'Rooms, furniture and rental ads',
    emoji: '🏠',
    goals: [
      'Describe your flat and its rooms',
      'Say where furniture stands, lies and hangs',
      'Understand a rental ad and phone about a flat',
    ],
    grammar: [
      'Wo? (dative) vs. Wohin? (accusative) with auf, an, in, neben, über, unter, vor, hinter',
      'stehen / stellen, liegen / legen, hängen / hängen',
      'es gibt + accusative',
      'mit + dative',
    ],
    vocabFields: ['Rooms', 'Furniture & things at home', 'Flat & rental ads'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-rooms',
      'flashcards',
      meta(
        'Rooms',
        'Kitchen, bedroom, balcony … learn the rooms with their articles.',
        ['vocabulary', 'housing'],
        1,
        3,
      ),
      flashcards(rooms),
    ),

    activity(
      U,
      'flash-furniture',
      'flashcards',
      meta(
        'Furniture',
        'Table, chair, wardrobe: what is in your flat?',
        ['vocabulary', 'housing', 'articles'],
        1,
        4,
      ),
      flashcards(furniture.slice(0, 18)),
    ),

    activity(
      U,
      'quiz-furniture',
      'quiz',
      meta(
        'What is this?',
        'Name the piece of furniture – with the right article.',
        ['vocabulary', 'housing', 'articles'],
        1,
        3,
      ),
      quizEmoji(furniture, furniture),
    ),

    activity(
      U,
      'memory-rooms',
      'memory',
      meta(
        'Room memory',
        'Match the German word with the picture.',
        ['vocabulary', 'housing'],
        1,
        3,
      ),
      memory(
        byDe(
          rooms,
          'Küche',
          'Wohnzimmer',
          'Schlafzimmer',
          'Badezimmer',
          'Balkon',
          'Garten',
          'Keller',
          'Garage',
        ),
        'emoji',
      ),
    ),

    activity(
      U,
      'spell-furniture',
      'spell',
      meta(
        'Spell the furniture',
        'Unscramble the letters and type the words.',
        ['spelling', 'housing'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(furniture, 'Tisch', 'Schrank', 'Lampe'), 'unscramble').items,
          ...spell(byDe(furniture, 'Kühlschrank', 'Waschmaschine', 'Fernseher'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'sort-rooms',
      'sortit',
      meta(
        'Which room?',
        'Where do you find it – kitchen, living room, bedroom or bathroom?',
        ['vocabulary', 'housing', 'articles'],
        2,
        4,
      ),
      {
        instruction: 'In which room is it?',
        buckets: [
          { id: 'kueche', label: 'Küche', emoji: '🍳' },
          { id: 'wohnzimmer', label: 'Wohnzimmer', emoji: '🛋️' },
          { id: 'schlafzimmer', label: 'Schlafzimmer', emoji: '😴' },
          { id: 'bad', label: 'Badezimmer', emoji: '🛁' },
        ],
        items: sortItems('r', [
          ['der Herd', 'kueche', '🔥'],
          ['der Kühlschrank', 'kueche', '🧊'],
          ['das Sofa', 'wohnzimmer', '🛋️'],
          ['der Fernseher', 'wohnzimmer', '📺'],
          ['das Bett', 'schlafzimmer', '🛏️'],
          ['der Kleiderschrank', 'schlafzimmer', '👗'],
          ['die Dusche', 'bad', '🚿'],
          ['die Badewanne', 'bad', '🛁'],
          ['das Waschbecken', 'bad', '🚰'],
        ]),
      },
    ),

    activity(
      U,
      'listen-ad',
      'listen',
      meta(
        'On the phone about a flat',
        'Listen to the landlord and pick what you hear.',
        ['listening', 'housing', 'numbers'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'Die Wohnung hat zwei Zimmer, Küche und Bad.',
            'Two rooms, kitchen and bathroom.',
            [
              'Two bedrooms and two bathrooms.',
              'One room, kitchen and balcony.',
              'Two rooms, kitchen and garden.',
            ],
          ),
          rent('l2', 'Die Miete ist', 650, [560, 615, 506]),
          rent('l3', 'Die Nebenkosten sind', 120, [210, 112, 102]),
          rent('l4', 'Die Kaution ist', 1200, [1020, 2100, 1002]),
          heard(
            'l5',
            `Die Wohnung ist im ${ordinalDative(3)} Stock.`,
            'The flat is on the third floor.',
            [
              'The flat is on the second floor.',
              'The flat is on the fourth floor.',
              'The flat is on the ground floor.',
            ],
          ),
          heard('l6', 'Die Wohnung ist ab sofort frei.', 'The flat is available immediately.', [
            'The flat is available next month.',
            'The flat is already rented.',
            'The flat is for sale.',
          ]),
          heard('l7', 'Das Zimmer ist möbliert.', 'The room is furnished.', [
            'The room is empty.',
            'The room is quiet.',
            'The room is bright.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'quiz-ads',
      'quiz',
      meta(
        'Reading rental ads',
        'ZKB, NK, EG … decode the abbreviations.',
        ['vocabulary', 'housing'],
        2,
        4,
      ),
      {
        questions: [
          q('a1', 'ZKB', 'Zimmer, Küche, Bad', [
            'Zimmer, Keller, Balkon',
            'Zentrum, Küche, Bahnhof',
            'Zentralheizung, Küche, Bad',
          ]),
          q('a2', 'NK', 'Nebenkosten (extra costs)', ['Neue Küche', 'Nähe Kino', 'Nachtkonto']),
          q('a3', 'KM', 'Kaltmiete (rent without heating)', [
            'Küche und Möbel',
            'Kinderzimmer, Mietvertrag',
            'Kaution und Miete',
          ]),
          q('a4', 'WM', 'Warmmiete (rent including heating)', [
            'Wohnung, möbliert',
            'Waschmaschine, Mikrowelle',
            'Wohnzimmer, Miete',
          ]),
          q('a5', 'EG', 'Erdgeschoss (ground floor)', [
            'Einbauküche, Garten',
            'Erster Stock',
            'Eingang, Garage',
          ]),
          q('a6', 'OG', 'Obergeschoss (upper floor)', [
            'Ofen, Garten',
            'Orangerie, Garage',
            'Ohne Garten',
          ]),
          q('a7', '60 qm', '60 square metres', [
            '60 quiet rooms',
            '60 furnished rooms',
            '60 kilometres',
          ]),
          q('a8', 'ab sofort frei', 'available immediately', [
            'available next year',
            'already rented',
            'for sale',
          ]),
          q('a9', 'möbl. Zimmer', 'furnished room', ['empty room', 'quiet room', 'small room']),
          q('a10', '2 Monatsmieten Kaution', 'a deposit of two months’ rent', [
            'two months free of rent',
            'a rent of two euros',
            'a two-month contract',
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-wo',
      'gapfill',
      meta(
        'Wo? – auf dem, an der, im …',
        'Where is it? These prepositions take the dative.',
        ['grammar', 'two-way-prepositions', 'dative', 'housing'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'w1',
            'Die Lampe steht ___ Tisch.',
            'auf dem',
            ['auf dem', 'auf den', 'auf der', 'auf das'],
            'The lamp is on the table.',
            'Wo? → dative: der Tisch → dem Tisch.',
          ),
          gap(
            'w2',
            'Das Bild hängt ___ Wand.',
            'an der',
            ['an der', 'an die', 'an dem', 'an den'],
            'The picture hangs on the wall.',
            'die Wand → dative: der Wand.',
          ),
          gap(
            'w3',
            'Die Schuhe stehen ___ Schrank.',
            'im',
            ['im', 'ins', 'in den', 'in die'],
            'The shoes are in the cupboard.',
            'in + dem = im.',
          ),
          gap(
            'w4',
            'Der Teppich liegt ___ Sofa.',
            'unter dem',
            ['unter dem', 'unter den', 'unter das', 'unter der'],
            'The carpet is under the sofa.',
          ),
          gap(
            'w5',
            'Die Lampe hängt ___ Tisch.',
            'über dem',
            ['über dem', 'über den', 'über der', 'über das'],
            'The lamp hangs above the table.',
          ),
          gap(
            'w6',
            'Der Stuhl steht ___ Fenster.',
            'am',
            ['am', 'ans', 'an den', 'im'],
            'The chair is by the window.',
            'an + dem = am.',
          ),
          gap(
            'w7',
            'Das Handy liegt ___ Bett.',
            'auf dem',
            ['auf dem', 'auf das', 'auf der', 'auf den'],
            'The phone lies on the bed.',
          ),
          gap(
            'w8',
            'Das Sofa steht ___ Fernseher.',
            'vor dem',
            ['vor dem', 'vor den', 'vor der', 'vor das'],
            'The sofa is in front of the TV.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-wohin',
      'gapfill',
      meta(
        'Wohin? – auf den, an die, ins …',
        'Putting things somewhere: the accusative.',
        ['grammar', 'two-way-prepositions', 'housing'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'h1',
            'Ich stelle die Lampe ___ Tisch.',
            'auf den',
            ['auf den', 'auf dem', 'auf der', 'auf die'],
            'I put the lamp on the table.',
            'Wohin? → accusative: der Tisch → den Tisch.',
          ),
          gap(
            'h2',
            'Er hängt das Bild ___ Wand.',
            'an die',
            ['an die', 'an der', 'an dem', 'an den'],
            'He hangs the picture on the wall.',
            'die Wand stays die in the accusative.',
          ),
          gap(
            'h3',
            'Ich lege das Handy ___ Bett.',
            'auf das',
            ['auf das', 'auf dem', 'auf den', 'auf der'],
            'I put the phone on the bed.',
          ),
          gap(
            'h4',
            'Wir stellen den Kühlschrank ___ Küche.',
            'in die',
            ['in die', 'in der', 'im', 'in den'],
            'We put the fridge in the kitchen.',
          ),
          gap(
            'h5',
            'Sie stellt den Stuhl ___ Fenster.',
            'ans',
            ['ans', 'am', 'an dem', 'an den'],
            'She puts the chair by the window.',
            'an + das = ans.',
          ),
          gap(
            'h6',
            'Ich lege die Schuhe ___ Schrank.',
            'in den',
            ['in den', 'im', 'in dem', 'in die'],
            'I put the shoes into the cupboard.',
          ),
          gap(
            'h7',
            'Wir stellen das Sofa ___ Wohnzimmer.',
            'ins',
            ['ins', 'im', 'in dem', 'in die'],
            'We put the sofa into the living room.',
          ),
          gap(
            'h8',
            'Er legt den Teppich ___ Sofa.',
            'unter das',
            ['unter das', 'unter dem', 'unter den', 'unter der'],
            'He puts the carpet under the sofa.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-verbs',
      'gapfill',
      meta(
        'stehen or stellen?',
        'Choose the right verb: standing, lying or hanging – and putting.',
        ['grammar', 'two-way-prepositions', 'housing'],
        2,
        4,
      ),
      {
        items: [
          gap(
            'v1',
            'Die Lampe ___ auf dem Tisch.',
            'steht',
            ['steht', 'stellt', 'legt', 'hängt'],
            'The lamp stands on the table.',
            'steht = is standing (Wo?).',
          ),
          gap(
            'v2',
            'Ich ___ die Lampe auf den Tisch.',
            'stelle',
            ['stelle', 'stehe', 'liege', 'hänge'],
            'I put the lamp on the table.',
            'stellen = to put upright (Wohin?).',
          ),
          gap(
            'v3',
            'Das Handy ___ auf dem Bett.',
            'liegt',
            ['liegt', 'legt', 'steht', 'stellt'],
            'The phone is lying on the bed.',
          ),
          gap(
            'v4',
            'Ich ___ das Handy auf das Bett.',
            'lege',
            ['lege', 'liege', 'stelle', 'stehe'],
            'I put the phone on the bed.',
            'legen = to lay down (Wohin?).',
          ),
          gap(
            'v5',
            'Das Bild ___ an der Wand.',
            'hängt',
            ['hängt', 'stellt', 'liegt', 'legt'],
            'The picture hangs on the wall.',
          ),
          gap(
            'v6',
            'Wir ___ den Stuhl ans Fenster.',
            'stellen',
            ['stellen', 'stehen', 'liegen', 'legen'],
            'We put the chair by the window.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Describe the flat',
        'Build sentences about rooms and furniture.',
        ['grammar', 'word-order', 'housing', 'two-way-prepositions'],
        2,
        6,
      ),
      {
        items: [
          sent('s1', 'The lamp is on the table.', [
            'Die',
            'Lampe',
            'steht',
            'auf',
            'dem',
            'Tisch.',
          ]),
          sent('s2', 'I put the book on the shelf.', [
            'Ich',
            'lege',
            'das',
            'Buch',
            'ins',
            'Regal.',
          ]),
          sent('s3', 'The flat has a balcony.', ['Die', 'Wohnung', 'hat', 'einen', 'Balkon.'], {
            extra: ['ein'],
          }),
          sent(
            's4',
            'There is a garden behind the house.',
            ['Hinter', 'dem', 'Haus', 'gibt', 'es', 'einen', 'Garten.'],
            {
              alsoAccept: ['Es gibt einen Garten hinter dem Haus.'],
              explanation: 'es gibt + accusative: der Garten → einen Garten.',
            },
          ),
          sent('s5', 'The kitchen is next to the living room.', [
            'Die',
            'Küche',
            'ist',
            'neben',
            'dem',
            'Wohnzimmer.',
          ]),
          sent(
            's6',
            'We are looking for a flat with three rooms.',
            ['Wir', 'suchen', 'eine', 'Wohnung', 'mit', 'drei', 'Zimmern.'],
            {
              explanation: 'mit + dative; the plural dative adds -n: Zimmern.',
            },
          ),
          sent('s7', 'The rent is 600 euros.', ['Die', 'Miete', 'ist', 'sechshundert', 'Euro.']),
          sent(
            's8',
            'Can I see the flat tomorrow?',
            ['Kann', 'ich', 'die', 'Wohnung', 'morgen', 'besichtigen?'],
            {
              alsoAccept: ['Kann ich morgen die Wohnung besichtigen?'],
              explanation: 'After a modal verb the infinitive goes to the end.',
            },
          ),
          sent('s9', 'I hang the picture on the wall.', [
            'Ich',
            'hänge',
            'das',
            'Bild',
            'an',
            'die',
            'Wand.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'conj-housing',
      'conjugation',
      meta(
        'stehen, liegen, finden, mieten',
        'Verbs for describing and finding a flat.',
        ['grammar', 'verb-conjugation', 'housing'],
        2,
        4,
      ),
      {
        tables: [
          table('stehen', 'to stand', ['ich', 'du', 'er/sie/es']),
          table('liegen', 'to lie', ['du', 'wir', 'ihr']),
          table('hängen', 'to hang', ['ich', 'er/sie/es', 'sie/Sie']),
          table('finden', 'to find', ['du', 'er/sie/es', 'ihr']),
          table('mieten', 'to rent', ['ich', 'du', 'ihr']),
        ],
      },
    ),

    activity(
      U,
      'dialogues-flat',
      'dialogue',
      meta(
        'Phoning and viewing',
        'Ask about a flat on the phone, then look around.',
        ['communication', 'housing', 'appointments'],
        2,
        6,
      ),
      {
        scenes: [
          {
            id: 'phone',
            title: 'Phoning the landlord',
            emoji: '📞',
            setting: 'You saw a rental ad and call the landlady.',
            turns: [
              say('Frau Müller', 'Müller, guten Tag.', 'Müller speaking, hello.'),
              you(
                'Guten Tag, hier ist Anna Meier. Ist die Wohnung noch frei?',
                [
                  'Guten Tag, hier ist Anna Meier. Wie heißt die Wohnung?',
                  'Flats have no names – ask whether it is still available.',
                ],
                [
                  'Guten Tag, ich bin die Wohnung.',
                  'You are calling about the flat, you are not the flat.',
                ],
              ),
              say(
                'Frau Müller',
                'Ja, sie ist noch frei. Sie hat zwei Zimmer, eine Küche und ein Bad.',
                'Yes, it is still free. It has two rooms, a kitchen and a bathroom.',
              ),
              you(
                'Wie hoch ist die Miete?',
                [
                  'Wie spät ist die Miete?',
                  'Spät is for time. Rent is “hoch”: Wie hoch ist die Miete?',
                ],
                ['Wo ist die Miete?', 'You want to know the price, not a place.'],
              ),
              say(
                'Frau Müller',
                'Die Miete ist 650 Euro plus 120 Euro Nebenkosten.',
                'The rent is 650 euros plus 120 euros extra costs.',
              ),
              you(
                'Kann ich die Wohnung morgen besichtigen?',
                [
                  'Kann ich die Wohnung morgen besichtigt?',
                  'After a modal verb we need the infinitive: besichtigen.',
                ],
                [
                  'Kann ich morgen Wohnung besichtigen die?',
                  'Word order: Kann ich die Wohnung morgen besichtigen?',
                ],
              ),
            ],
          },
          {
            id: 'viewing',
            title: 'Viewing the flat',
            emoji: '🔑',
            setting: 'You are looking around the flat.',
            turns: [
              say(
                'Frau Müller',
                'Hier ist das Wohnzimmer. Es hat einen Balkon.',
                'This is the living room. It has a balcony.',
              ),
              you(
                'Sehr schön! Wo ist die Küche?',
                [
                  'Sehr schön! Wohin ist die Küche?',
                  'Wo? asks for a place. Wohin? is for movement.',
                ],
                ['Sehr schön! Wer ist die Küche?', 'Wer asks about a person.'],
              ),
              say(
                'Frau Müller',
                'Die Küche ist links, neben dem Bad.',
                'The kitchen is on the left, next to the bathroom.',
              ),
              you(
                'Gibt es auch einen Keller?',
                ['Gibt es auch ein Keller?', 'der Keller is masculine → es gibt einen Keller.'],
                ['Gibt es auch eine Keller?', 'der Keller is masculine → einen Keller.'],
              ),
              say(
                'Frau Müller',
                'Ja, im Keller steht auch die Waschmaschine.',
                'Yes, the washing machine is in the cellar too.',
              ),
              you(
                'Ich nehme die Wohnung!',
                ['Ich nehme der Wohnung!', 'nehmen takes the accusative: die Wohnung.'],
                ['Ich bin die Wohnung!', 'You want to take the flat.'],
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
        'Home blitz',
        'Wo or wohin? es gibt, mit – true or false?',
        ['grammar', 'two-way-prepositions', 'housing'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Die Lampe steht auf dem Tisch.', true),
          tf('b2', 'Die Lampe steht auf den Tisch.', false, 'Wo? → dative: auf dem Tisch.'),
          tf('b3', 'Ich stelle die Lampe auf den Tisch.', true),
          tf(
            'b4',
            'Ich stelle die Lampe auf dem Tisch.',
            false,
            'Wohin? → accusative: auf den Tisch.',
          ),
          tf('b5', 'Das Bild hängt an der Wand.', true),
          tf('b6', 'Es gibt einen Balkon.', true),
          tf('b7', 'Es gibt ein Balkon.', false, 'es gibt + accusative: einen Balkon.'),
          tf('b8', 'Wir suchen eine Wohnung mit drei Zimmern.', true),
          tf(
            'b9',
            'Wir suchen eine Wohnung mit drei Zimmer.',
            false,
            'mit + dative plural: Zimmern.',
          ),
          tf('b10', 'Die Küche ist im Erdgeschoss.', true),
          tf('b11', 'ZKB bedeutet Zimmer, Küche, Bad.', true),
          tf(
            'b12',
            'Der Vermieter wohnt in der Wohnung und zahlt die Miete.',
            false,
            'The Mieter (tenant) pays the rent; the Vermieter receives it.',
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
        'Rooms, furniture, ads and Wo/Wohin in one final round.',
        ['vocabulary', 'grammar', 'housing'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Das Bild hängt ___ Wand.', 'an der', ['an die', 'am', 'an den']),
          q('c2', 'Ich lege das Buch ___ Tisch.', 'auf den', ['auf dem', 'auf der', 'auf das']),
          q('c3', 'Wo ist die Lampe? – Sie ___ auf dem Tisch.', 'steht', [
            'stellt',
            'legt',
            'hängt',
          ]),
          q('c4', 'In a rental ad, “NK” means …', 'Nebenkosten', [
            'Neue Küche',
            'Nähe Kino',
            'Nachtkonto',
          ]),
          q('c5', 'der Vermieter', 'landlord', ['tenant', 'neighbour', 'flatmate']),
          q('c6', 'In which room do you sleep?', 'das Schlafzimmer', [
            'die Küche',
            'das Badezimmer',
            'der Flur',
          ]),
          q(
            'c7',
            'Es gibt ___ Garten.',
            'einen',
            ['ein', 'eine', 'einem'],
            'der Garten + es gibt → accusative: einen.',
          ),
          q('c8', 'Wir suchen eine Wohnung mit zwei ___.', 'Zimmern', [
            'Zimmer',
            'Zimmers',
            'Zimmere',
          ]),
          q('c9', 'Ich ___ den Stuhl ans Fenster.', 'stelle', ['stehe', 'liege', 'hänge']),
          q('c10', 'Kann ich die Wohnung ___?', 'besichtigen', [
            'besichtigt',
            'besichtige',
            'zu besichtigen',
          ]),
        ],
      },
    ),
  ],
};
