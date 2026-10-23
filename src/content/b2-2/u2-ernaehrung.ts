import {
  byDe,
  flashcards,
  listen,
  memory,
  quizDeEn,
  quizEmoji,
  spell,
  vocabList,
} from '../builders';
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
  unitB22,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b2-2-ernaehrung';

const eating = vocabList(U, 'Diets & ingredients', [
  ['Ernährungsweise', 'way of eating, diet', '🥗', 'die', 'Ernährungsweisen'],
  ['Vegetarier', 'vegetarian (person)', '🥕', 'der', 'Vegetarier'],
  ['Veganer', 'vegan (person)', '🌱', 'der', 'Veganer'],
  ['Fleischersatz', 'meat substitute', '🌭', 'der'],
  ['Zusatzstoff', 'additive', '🧪', 'der', 'Zusatzstoffe'],
  ['Nahrungsergänzung', 'dietary supplement', '💊', 'die', 'Nahrungsergänzungen'],
  ['Ballaststoffe', 'fibre', '🌾', 'die'],
  ['Eiweiß', 'protein', '🥚', 'das'],
  ['Kohlenhydrate', 'carbohydrates', '🍞', 'die'],
  ['Vollkornbrot', 'wholemeal bread', '🥖', 'das', 'Vollkornbrote'],
  ['Fertiggericht', 'ready meal', '🍱', 'das', 'Fertiggerichte'],
  ['Tiefkühlkost', 'frozen food', '🧊', 'die'],
  ['Heißhunger', 'craving, ravenous hunger', '🤤', 'der'],
  ['Unverträglichkeit', 'intolerance', '🤢', 'die', 'Unverträglichkeiten'],
  ['sich ernähren', 'to eat, to live on', '🍽️'],
  ['bekömmlich', 'easily digestible, wholesome', '😌'],
]);

const shopping = vocabList(U, 'Origin, labels & food waste', [
  ['Herkunftsangabe', 'indication of origin', '🏷️', 'die', 'Herkunftsangaben'],
  ['Bio-Siegel', 'organic label', '🌿', 'das'],
  ['Mindesthaltbarkeitsdatum', 'best-before date', '📅', 'das'],
  ['Lebensmittelverschwendung', 'food waste', '🗑️', 'die'],
  ['Überschuss', 'surplus', '📦', 'der', 'Überschüsse'],
  ['Hofladen', 'farm shop', '🧺', 'der', 'Hofläden'],
  ['Massentierhaltung', 'factory farming', '🐖', 'die'],
  ['Hersteller', 'manufacturer', '🏭', 'der', 'Hersteller'],
  ['Werbespruch', 'advertising slogan', '📢', 'der', 'Werbesprüche'],
  ['Aktionstag', 'day of action', '📣', 'der', 'Aktionstage'],
  ['containern', 'to dumpster-dive for food', '🚮'],
  ['entsorgen', 'to dispose of', '♻️'],
  ['verderben', 'to spoil, to go off', '🦠'],
  ['regional', 'regional', '📍'],
  ['saisonal', 'seasonal', '🍂'],
  ['gesundheitsbewusst', 'health-conscious', '🩺'],
]);

const vocab = [...eating, ...shopping];

export const ernaehrung: UnitContent = {
  unit: unitB22({
    id: U,
    order: 2,
    title: 'Ernährung & Lebensmittel',
    subtitle: 'Ways of eating, labels, food waste – and what people claim about them',
    emoji: '🥗',
    goals: [
      'Talk about diets, ingredients and shopping habits',
      'Report rumours and claims: Er soll … sein, sie will … gewusst haben',
      'Understand and write formal noun-style sentences (Nominalisierung)',
    ],
    grammar: [
      'sollen (“it is said”) and wollen (“claims”) with infinitive Perfekt: Der Koch soll berühmt gewesen sein.',
      'Nominalisierung: weil es teuer ist → wegen der hohen Preise; wenn man isst → beim Essen',
      'Verb to noun: verzichten → der Verzicht, ernähren → die Ernährung, -ung',
    ],
    vocabFields: ['Diets & ingredients', 'Origin, labels & food waste'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-eating',
      'flashcards',
      meta(
        'Diets & ingredients',
        'Ernährungsweise, Eiweiß, Unverträglichkeit – talking about what we eat.',
        ['vocabulary', 'nutrition'],
        1,
        5,
      ),
      flashcards(eating),
    ),
    activity(
      U,
      'flash-shopping',
      'flashcards',
      meta(
        'Labels & food waste',
        'Herkunftsangabe, Überschuss, containern – shopping with a conscience.',
        ['vocabulary', 'nutrition'],
        1,
        5,
      ),
      flashcards(shopping),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Food in pictures', 'Name what you see.', ['vocabulary', 'nutrition'], 1, 4),
      quizEmoji(
        byDe(
          eating,
          'Vegetarier',
          'Veganer',
          'Eiweiß',
          'Vollkornbrot',
          'Fertiggericht',
          'Tiefkühlkost',
          'Nahrungsergänzung',
          'Kohlenhydrate',
        ),
        eating,
      ),
    ),
    activity(
      U,
      'quiz-words',
      'quiz',
      meta(
        'What does it mean?',
        'Labels, waste and diet words in English.',
        ['vocabulary', 'nutrition'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'Zusatzstoff',
          'Heißhunger',
          'Unverträglichkeit',
          'Herkunftsangabe',
          'Mindesthaltbarkeitsdatum',
          'Überschuss',
          'Massentierhaltung',
          'entsorgen',
          'verderben',
          'bekömmlich',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-shopping',
      'memory',
      meta(
        'Match the shopping words',
        'Pair German words with their English meaning.',
        ['vocabulary', 'nutrition'],
        2,
        4,
      ),
      memory(
        byDe(
          shopping,
          'Hofladen',
          'Bio-Siegel',
          'Werbespruch',
          'Aktionstag',
          'regional',
          'saisonal',
        ),
      ),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      meta('Hear the food words', 'Listen and pick the meaning.', ['listening', 'nutrition'], 2, 4),
      listen(
        byDe(
          vocab,
          'Ernährungsweise',
          'Ballaststoffe',
          'Hersteller',
          'containern',
          'gesundheitsbewusst',
          'Lebensmittelverschwendung',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'spell-words',
      'spell',
      meta(
        'Spell the food words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'nutrition'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(eating, 'Zusatzstoff', 'Vegetarier'), 'unscramble').items,
          ...spell(byDe(shopping, 'Hofladen'), 'unscramble').items,
          ...spell(byDe(eating, 'Eiweiß', 'Heißhunger'), 'type').items,
          ...spell(byDe(shopping, 'Überschuss'), 'type').items,
          dictation(
            'd1',
            'Viele Menschen ernähren sich heute bewusster.',
            'Many people eat more consciously today.',
          ),
          dictation(
            'd2',
            'Das Mindesthaltbarkeitsdatum ist abgelaufen.',
            'The best-before date has expired.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-hearsay',
      'gapfill',
      meta(
        'Er soll …, sie will …',
        'sollen reports what others say, wollen what the person claims.',
        ['grammar', 'modal-hearsay', 'nutrition'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'h1',
              'Dieses Restaurant ___ das beste der Stadt sein, sagen alle.',
              'soll',
              ['soll', 'will', 'muss', 'kann'],
              'This restaurant is said to be the best in town, everyone says.',
              'sollen = it is said (by others)',
            ),
            {
              will: 'wollen would mean the restaurant itself claims this.',
              muss: 'muss expresses a conclusion (“must be”), not a rumour.',
              kann: 'kann means “can be”, not “is said to be”.',
            },
          ),
          hint(
            gap(
              'h2',
              'Der Koch ___ nie Fleisch gegessen haben – behauptet er selbst.',
              'will',
              ['will', 'soll', 'muss', 'darf'],
              'The cook claims never to have eaten meat – he says so himself.',
              'wollen = the subject claims it',
            ),
            {
              soll: 'soll reports what other people say. Here the cook says it himself: will.',
              muss: 'muss expresses a conclusion, not a claim.',
              darf: 'darf means “is allowed to”.',
            },
          ),
          hint(
            gap(
              'h3',
              'Die neue Diät ___ sehr gesund sein, habe ich gehört.',
              'soll',
              ['soll', 'will', 'wollte', 'sollte'],
              'The new diet is supposed to be very healthy, I heard.',
              'heard from others → soll',
            ),
            {
              will: 'A diet cannot claim anything itself, so wollen does not fit.',
              wollte: 'The rumour is about now, so use the present: soll.',
              sollte: 'sollte would mean “should” in advice (Konjunktiv II) or a past report.',
            },
          ),
          hint(
            gap(
              'h4',
              'Sie ___ schon als Kind vegan gelebt haben, so sagt sie.',
              'will',
              ['will', 'soll', 'wollte', 'kann'],
              'She claims to have lived vegan since childhood.',
              'will + infinitive Perfekt (gelebt haben)',
            ),
            {
              soll: 'She says it herself, so use wollen.',
              wollte:
                'The modal stays in the present; the past is in the infinitive Perfekt (gelebt haben).',
              kann: 'kann means “can”, not “claims”.',
            },
          ),
          hint(
            gap(
              'h5',
              'Laut einer Studie ___ Zucker die Konzentration senken.',
              'soll',
              ['soll', 'will', 'muss', 'darf'],
              'According to a study, sugar is said to reduce concentration.',
              'laut + sollen: reported information',
            ),
            {
              will: 'Sugar cannot claim anything. For reported information use soll.',
              muss: 'muss would mean certainty without a source.',
              darf: 'darf means “may”.',
            },
          ),
          typed(
            'h6',
            'Der Wirt ___ früher Koch in Paris gewesen sein (man sagt).',
            'soll',
            'The landlord is said to have been a cook in Paris.',
            'infinitive Perfekt: gewesen sein',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-nominalisation',
      'gapfill',
      meta(
        'Nebensatz → Nomen',
        'Turn clauses into noun phrases: wegen, beim, durch, nach.',
        ['grammar', 'nominalisation', 'nutrition'],
        3,
        7,
      ),
      {
        items: [
          hint(
            gap(
              'm1',
              'Weil die Preise hoch sind, verzichten viele auf Fleisch. → ___ der hohen Preise verzichten viele auf Fleisch.',
              'Wegen',
              ['Wegen', 'Trotz', 'Durch', 'Während'],
              'Because of the high prices many people do without meat.',
              'weil + clause → wegen + genitive',
            ),
            {
              Trotz: 'trotz means “despite”, but the clause gives a reason (weil).',
              Durch: 'durch gives the means, not the reason.',
              Während: 'während is about time.',
            },
          ),
          hint(
            gap(
              'm2',
              'Wenn man isst, sollte man nicht fernsehen. → ___ Essen sollte man nicht fernsehen.',
              'Beim',
              ['Beim', 'Zum', 'Im', 'Am'],
              'While eating you should not watch TV.',
              'wenn / während + verb → beim + nominalised verb',
            ),
            {
              Zum: 'zum expresses a purpose (“for eating”).',
              Im: 'im is not used for simultaneous actions.',
              Am: 'am is used with days and the superlative, not here.',
            },
          ),
          hint(
            gap(
              'm3',
              'Indem man weniger Fleisch isst, schützt man das Klima. → ___ geringeren Fleischkonsum schützt man das Klima.',
              'Durch',
              ['Durch', 'Mit', 'Für', 'Bei'],
              'By eating less meat you protect the climate.',
              'indem + clause → durch + accusative',
            ),
            {
              Mit: 'mit takes the dative and names a tool, not the means of an action.',
              Für: 'für expresses a purpose.',
              Bei: 'bei is for situations or places.',
            },
          ),
          hint(
            gap(
              'm4',
              'Nachdem wir gegessen hatten, tranken wir Tee. → ___ dem Essen tranken wir Tee.',
              'Nach',
              ['Nach', 'Seit', 'Vor', 'Aus'],
              'After the meal we drank tea.',
              'nachdem + clause → nach + dative',
            ),
            {
              Seit: 'seit means “since”.',
              Vor: 'vor means “before”.',
              Aus: 'aus is not used for time.',
            },
          ),
          hint(
            typed(
              'm5',
              'verzichten → der ___ auf Fleisch',
              'Verzicht',
              'to do without → the renunciation of meat',
              'noun from the verb stem: verzichten → der Verzicht',
            ),
            { Verzichtung: 'Verzicht is the noun – there is no -ung form.' },
          ),
          hint(
            typed(
              'm6',
              'verschwenden → die ___ von Lebensmitteln',
              'Verschwendung',
              'to waste → the waste of food',
              'verb stem + -ung',
            ),
            { Verschwend: 'Verbs in -en often become a noun in -ung: die Verschwendung.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-hearsay',
      'sortit',
      meta(
        'Rumour or claim?',
        'sollen (said by others) or wollen (the person claims it)?',
        ['grammar', 'modal-hearsay', 'nutrition'],
        3,
        5,
      ),
      {
        instruction: 'Which modal verb fits the meaning?',
        buckets: [
          { id: 'sollen', label: 'soll (others say)', emoji: '📢' },
          { id: 'wollen', label: 'will (claims himself/herself)', emoji: '🙋' },
        ],
        items: sortItems('r', [
          ['Man sagt: Der Wein ist sehr teuer.', 'sollen'],
          ['Die Zeitung schreibt: Der Koch ist berühmt.', 'sollen'],
          ['Alle sagen: Die Suppe ist gesund.', 'sollen'],
          ['Laut Radio ist der Supermarkt pleite.', 'sollen'],
          ['Der Koch sagt: „Ich habe nie Fleisch gegessen.“', 'wollen'],
          ['Die Kundin behauptet: „Ich habe nichts bestellt.“', 'wollen'],
          ['Er sagt über sich: „Ich bin Experte für Gewürze.“', 'wollen'],
          ['Sie behauptet: „Ich habe es nicht gewusst.“', 'wollen'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the sentence',
        'Hearsay with sollen / wollen and noun-style sentences.',
        ['grammar', 'modal-hearsay', 'nominalisation'],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'The restaurant is said to be excellent.', [
            'Das',
            'Restaurant',
            'soll',
            'ausgezeichnet',
            'sein.',
          ]),
          sent('s2', 'She claims to have eaten vegan for years.', [
            'Sie',
            'will',
            'jahrelang',
            'vegan',
            'gegessen',
            'haben.',
          ]),
          sent('s3', 'Because of the high prices many people avoid meat.', [
            'Wegen',
            'der',
            'hohen',
            'Preise',
            'verzichten',
            'viele',
            'auf',
            'Fleisch.',
          ]),
          sent('s4', 'While eating you should not watch TV.', [
            'Beim',
            'Essen',
            'sollte',
            'man',
            'nicht',
            'fernsehen.',
          ]),
          sent('s5', 'By eating less meat you protect the climate.', [
            'Durch',
            'weniger',
            'Fleischkonsum',
            'schützt',
            'man',
            'das',
            'Klima.',
          ]),
          sent('s6', 'The new diet is said to have helped him a lot.', [
            'Die',
            'neue',
            'Diät',
            'soll',
            'ihm',
            'sehr',
            'geholfen',
            'haben.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-talk',
      'listen',
      meta(
        'Food talk',
        'Listen to people talk about what they eat.',
        ['listening', 'nutrition'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Dieses Brot soll besonders bekömmlich sein.',
            'This bread is said to be particularly easy to digest.',
            [
              'This bread is particularly cheap.',
              'This bread has to be eaten immediately.',
              'This bread is made without flour.',
            ],
          ),
          heard(
            'l2',
            'Er will nie ein Fertiggericht gegessen haben.',
            'He claims never to have eaten a ready meal.',
            [
              'He is not allowed to eat ready meals.',
              'He always wants a ready meal.',
              'He ate a ready meal yesterday.',
            ],
          ),
          heard(
            'l3',
            'Wegen der Massentierhaltung essen immer mehr Leute vegetarisch.',
            'Because of factory farming more and more people eat vegetarian.',
            [
              'More and more people keep animals at home.',
              'Factory farming is forbidden in Germany.',
              'People eat vegetarian because it is cheaper.',
            ],
          ),
          heard(
            'l4',
            'Beim Einkaufen achte ich auf Herkunftsangaben und das Bio-Siegel.',
            'When shopping I pay attention to origin labels and the organic seal.',
            [
              'I buy everything from the cheapest shop.',
              'I never read what is on the packaging.',
              'I shop only at the farm shop on Sundays.',
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
        'Diets and action days',
        'Talk about a trendy diet and plan a day against food waste.',
        ['communication', 'nutrition', 'modal-hearsay'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'diet',
            title: 'Die neue Diät',
            emoji: '🥑',
            setting: 'Your friend Mira talks about a trendy diet.',
            turns: [
              say(
                'Mira',
                'Hast du schon von der neuen Diät gehört? Sie soll wahre Wunder wirken.',
                'Have you heard about the new diet? It is said to work wonders.',
              ),
              you(
                'Ja, aber der Erfinder will zwanzig Kilo abgenommen haben. Das glaube ich nicht.',
                [
                  'Ja, aber der Erfinder will zwanzig Kilo abgenommen. Das glaube ich nicht.',
                  'Claim about the past: wollen + infinitive Perfekt (abgenommen haben).',
                ],
                [
                  'Ja, aber der Erfinder wollte zwanzig Kilo abgenommen haben. Das glaube ich nicht.',
                  'The modal stays in the present for the claim: will … abgenommen haben.',
                ],
              ),
              say(
                'Mira',
                'Meine Oma sagt: Beim Essen darf man nicht fernsehen.',
                'My grandma says: you must not watch TV while eating.',
              ),
              you(
                'Da hat sie recht. Beim Essen konzentriert man sich besser auf die Mahlzeit.',
                [
                  'Da hat sie recht. Bei Essen konzentriert man sich besser auf die Mahlzeit.',
                  'bei + dem = beim, and the nominalised verb is neuter: beim Essen.',
                ],
                [
                  'Da hat sie recht. Beim Essen konzentriert sich man besser auf die Mahlzeit.',
                  'The reflexive pronoun follows man: konzentriert man sich.',
                ],
              ),
            ],
          },
          {
            id: 'action-day',
            title: 'Aktionstag gegen Verschwendung',
            emoji: '📣',
            setting: 'At the community centre you plan a day against food waste.',
            turns: [
              say(
                'Frau Keller',
                'Wir planen einen Aktionstag gegen Lebensmittelverschwendung. Haben Sie eine Idee?',
                'We are planning a day of action against food waste. Do you have an idea?',
              ),
              you(
                'Wir könnten Überschüsse vom Markt verteilen, statt sie wegzuwerfen.',
                [
                  'Wir könnten Überschüsse vom Markt verteilen, statt sie wegwerfen.',
                  'statt … zu: with separable verbs zu goes between prefix and verb – wegzuwerfen.',
                ],
                [
                  'Wir könnten Überschüsse vom Markt verteilen, statt sie zu wegwerfen.',
                  'zu goes between prefix and verb: wegzuwerfen.',
                ],
              ),
              say(
                'Frau Keller',
                'Gute Idee. Und wie erreichen wir möglichst viele Menschen?',
                'Good idea. And how do we reach as many people as possible?',
              ),
              you(
                'Durch Plakate und durch Werbung in den sozialen Medien.',
                [
                  'Wegen Plakaten und durch Werbung in den sozialen Medien.',
                  'wegen gives a reason; the means is expressed with durch + accusative.',
                ],
                [
                  'Durch Plakate und mit Werbung in den sozialen Medien.',
                  'Both parts name a means, so use durch for both (mit would also need the dative: mit Plakaten).',
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
        'Food blitz',
        'sollen / wollen, noun style and vocabulary – true or false?',
        ['grammar', 'modal-hearsay', 'nominalisation'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Der Koch soll sehr berühmt sein.', true),
          tf(
            'b2',
            'Der Koch soll sehr berühmt gewesen haben.',
            false,
            'Infinitive Perfekt: berühmt gewesen sein.',
          ),
          tf('b3', 'Er will nichts gewusst haben.', true),
          tf(
            'b4',
            'Er will nichts gewusst.',
            false,
            'The past needs the infinitive Perfekt: gewusst haben.',
          ),
          tf('b5', 'Wegen der hohen Preise kaufe ich weniger.', true),
          tf(
            'b6',
            'Wegen die hohen Preise kaufe ich weniger.',
            false,
            'wegen takes the genitive: der hohen Preise.',
          ),
          tf('b7', 'Beim Essen telefoniere ich nicht.', true),
          tf(
            'b8',
            'Nach den Essen gehen wir spazieren.',
            false,
            'nach takes the dative: nach dem Essen.',
          ),
          tf('b9', 'Ein Veganer isst keine tierischen Produkte.', true),
          tf(
            'b10',
            'Das Mindesthaltbarkeitsdatum sagt, wo ein Produkt herkommt.',
            false,
            'It is the best-before date; origin is the Herkunftsangabe.',
          ),
          tf('b11', 'Eiweiß ist ein anderes Wort für Protein.', true),
          tf(
            'b12',
            'Containern bedeutet, im Supermarkt einzukaufen.',
            false,
            'It means taking discarded food from bins.',
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
        'Diet words, sollen / wollen and noun style in one round.',
        ['vocabulary', 'grammar', 'nutrition'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Der Politiker ___ nichts gewusst haben (er selbst behauptet das).', 'will', [
            'soll',
            'muss',
            'darf',
          ]),
          q('c2', 'Das Café ___ sehr gut sein (das sagen die Leute).', 'soll', [
            'will',
            'wollte',
            'darf',
          ]),
          q(
            'c3',
            '___ des schlechten Wetters fiel der Markt aus.',
            'Wegen',
            ['Trotz', 'Durch', 'Während'],
            'wegen + Genitiv = reason',
          ),
          q('c4', 'entscheiden → die ___', 'Entscheidung', [
            'Entscheid',
            'Entscheiden',
            'Entschiedung',
          ]),
          q('c5', 'Wenn man liest → ___ Lesen', 'beim', ['zum', 'im', 'vom']),
          q('c6', 'Indem man spart → ___ Sparen', 'durch', ['mit', 'für', 'bei']),
          q('c7', 'das Mindesthaltbarkeitsdatum', 'best-before date', [
            'origin label',
            'recipe',
            'price tag',
          ]),
          q('c8', 'die Unverträglichkeit', 'intolerance', ['surplus', 'diet', 'additive']),
          q('c9', 'regional', 'from the local area', ['very expensive', 'organic', 'frozen']),
          q('c10', 'Sie soll früher Köchin ___.', 'gewesen sein', [
            'gewesen haben',
            'sein gewesen',
            'war',
          ]),
        ],
      },
    ),
  ],
};
