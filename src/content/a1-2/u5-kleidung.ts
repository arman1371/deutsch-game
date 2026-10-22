import { byDe, flashcards, memory, quizEmoji, spell, vocabList } from '../builders';
import { formatPrice, priceToGerman } from '@/lib/german/numbers';
import { ordinalDative } from '@/lib/german/ordinals';
import { activity, gap, heard, meta, q, say, sent, sortItems, tf, unit12, you } from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-kleidung';

const clothes = vocabList(U, 'Clothes', [
  ['Hemd', 'shirt', '👔', 'das', 'Hemden'],
  ['T-Shirt', 'T-shirt', '👕', 'das', 'T-Shirts'],
  ['Hose', 'trousers', '👖', 'die', 'Hosen'],
  ['Kleid', 'dress', '👗', 'das', 'Kleider'],
  ['Bluse', 'blouse', '👚', 'die', 'Blusen'],
  ['Jacke', 'jacket', '🧥', 'die', 'Jacken'],
  ['Mantel', 'coat', '🥼', 'der', 'Mäntel'],
  ['Pullover', 'jumper', '🧶', 'der', 'Pullover'],
  ['Anzug', 'suit', '🤵', 'der', 'Anzüge'],
  ['Schuhe', 'shoes', '👟', 'die'],
  ['Stiefel', 'boots', '🥾', 'die'],
  ['Sandalen', 'sandals', '🩴', 'die'],
  ['Socken', 'socks', '🧦', 'die'],
  ['Mütze', 'hat / cap', '🧢', 'die', 'Mützen'],
  ['Schal', 'scarf', '🧣', 'der', 'Schals'],
  ['Handschuhe', 'gloves', '🧤', 'die'],
  ['Brille', 'glasses', '👓', 'die', 'Brillen'],
  ['Tasche', 'bag', '👜', 'die', 'Taschen'],
  ['Badeanzug', 'swimsuit', '👙', 'der', 'Badeanzüge'],
]);

const colours = vocabList(U, 'Colours', [
  ['rot', 'red', '🔴'],
  ['blau', 'blue', '🔵'],
  ['grün', 'green', '🟢'],
  ['gelb', 'yellow', '🟡'],
  ['schwarz', 'black', '⚫'],
  ['weiß', 'white', '⚪'],
  ['braun', 'brown', '🟤'],
  ['grau', 'grey', '🩶'],
  ['rosa', 'pink', '🌸'],
  ['lila', 'purple', '🟣'],
  ['orange', 'orange', '🟠'],
]);

const shop = vocabList(U, 'In the department store', [
  ['Kaufhaus', 'department store', '🏬', 'das', 'Kaufhäuser'],
  ['Abteilung', 'department', '🗂️', 'die', 'Abteilungen'],
  ['Kasse', 'checkout', '🧾', 'die', 'Kassen'],
  ['Umkleidekabine', 'changing room', '🚪', 'die', 'Umkleidekabinen'],
  ['Größe', 'size', '📏', 'die', 'Größen'],
  ['Angebot', 'special offer', '🏷️', 'das', 'Angebote'],
  ['Kreditkarte', 'credit card', '💳', 'die', 'Kreditkarten'],
  ['bar', 'in cash', '💵'],
  ['anprobieren', 'to try on', '👗'],
  ['passen', 'to fit', '👌'],
  ['gefallen', 'to please / to like', '❤️'],
  ['stehen', 'to suit', '✨'],
  ['zu groß', 'too big', '🔼'],
  ['zu klein', 'too small', '🔽'],
  ['zu teuer', 'too expensive', '💸'],
  ['billig', 'cheap', '🤑'],
  ['besser', 'better', '👍'],
  ['am besten', 'best', '🏆'],
]);

const vocab = [...clothes, ...colours, ...shop];

const priceHeard = (id: string, item: string, cents: number, wrong: number[]) =>
  heard(
    id,
    `${item} kostet ${priceToGerman(cents)}.`,
    formatPrice(cents),
    wrong.map(formatPrice),
    `${priceToGerman(cents)} = ${formatPrice(cents)}`,
  );

export const kleidung: UnitContent = {
  unit: unit12({
    id: U,
    order: 5,
    title: 'Kleidung & Kaufhaus',
    subtitle: 'Clothes, colours, shopping and giving your opinion',
    emoji: '👕',
    goals: [
      'Name clothes and colours',
      'Find your way around a department store and try things on',
      'Say what you like, what fits and what you prefer',
    ],
    grammar: [
      'gefallen, passen, stehen, gehören + dative (Die Jacke gefällt mir)',
      'Accusative pronouns: mich, dich, ihn, sie, es, uns, euch, sie',
      'Comparison: gut – besser – am besten; gern – lieber – am liebsten',
      'Ordinal numbers for floors (im dritten Stock)',
    ],
    vocabFields: ['Clothes', 'Colours', 'In the department store'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-clothes',
      'flashcards',
      meta(
        'Clothes',
        'Shirts, shoes and scarves – with their articles.',
        ['vocabulary', 'clothing'],
        1,
        4,
      ),
      flashcards(clothes),
    ),

    activity(
      U,
      'quiz-clothes',
      'quiz',
      meta(
        'What is this?',
        'Name the piece of clothing – with the right article.',
        ['vocabulary', 'clothing', 'articles'],
        1,
        3,
      ),
      quizEmoji(clothes, clothes),
    ),

    activity(
      U,
      'memory-clothes',
      'memory',
      meta(
        'Clothes memory',
        'Match the German word with the picture.',
        ['vocabulary', 'clothing'],
        1,
        3,
      ),
      memory(
        byDe(clothes, 'Hemd', 'Hose', 'Kleid', 'Mütze', 'Socken', 'Schal', 'Brille', 'Tasche'),
        'emoji',
      ),
    ),

    activity(
      U,
      'flash-shop',
      'flashcards',
      meta(
        'In the department store',
        'Words for the changing room, the checkout and opinions.',
        ['vocabulary', 'clothing', 'shopping'],
        1,
        4,
      ),
      flashcards(shop),
    ),

    activity(
      U,
      'quiz-colours',
      'quiz',
      meta('Which colour?', 'Name the colour.', ['vocabulary', 'clothing'], 1, 3),
      quizEmoji(colours, colours),
    ),

    activity(
      U,
      'spell-clothes',
      'spell',
      meta(
        'Spell the clothes',
        'Unscramble the letters and type the words.',
        ['spelling', 'clothing'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(clothes, 'Hose', 'Jacke', 'Mantel'), 'unscramble').items,
          ...spell(byDe(clothes, 'Pullover', 'Handschuhe', 'Badeanzug'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'sort-season',
      'sortit',
      meta('Summer or winter?', 'When do you wear it?', ['vocabulary', 'clothing'], 2, 3),
      {
        instruction: 'When do you wear this?',
        buckets: [
          { id: 'sommer', label: 'Sommer', emoji: '☀️' },
          { id: 'winter', label: 'Winter', emoji: '❄️' },
        ],
        items: sortItems('s', [
          ['die Sandalen', 'sommer', '🩴'],
          ['das T-Shirt', 'sommer', '👕'],
          ['der Badeanzug', 'sommer', '👙'],
          ['die Bluse', 'sommer', '👚'],
          ['der Mantel', 'winter', '🥼'],
          ['die Handschuhe', 'winter', '🧤'],
          ['die Mütze', 'winter', '🧢'],
          ['die Stiefel', 'winter', '🥾'],
          ['der Schal', 'winter', '🧣'],
        ]),
      },
    ),

    activity(
      U,
      'listen-shop',
      'listen',
      meta(
        'In the shop',
        'Prices and opinions: listen and pick.',
        ['listening', 'clothing', 'numbers'],
        2,
        4,
      ),
      {
        items: [
          priceHeard('p1', 'Die Hose', 4990, [5990, 4909, 3990]),
          priceHeard('p2', 'Der Pullover', 3500, [3050, 5300, 1500]),
          priceHeard('p3', 'Das T-Shirt', 1295, [1259, 1925, 1205]),
          heard('o1', 'Die Jacke gefällt mir gut.', 'I like the jacket.', [
            'The jacket fits me well.',
            'I do not like the jacket.',
            'The jacket belongs to me.',
          ]),
          heard('o2', 'Die Schuhe sind zu klein.', 'The shoes are too small.', [
            'The shoes are too big.',
            'The shoes are too expensive.',
            'The shoes are very small.',
          ]),
          heard('o3', 'Das Kleid steht dir sehr gut.', 'The dress really suits you.', [
            'The dress is too expensive for you.',
            'You like the dress very much.',
            'The dress belongs to you.',
          ]),
          heard(
            'o4',
            `Die Schuhabteilung ist im ${ordinalDative(2)} Stock.`,
            'The shoe department is on the second floor.',
            [
              'The shoe department is on the third floor.',
              'The shoe department is on the first floor.',
              'The shoe department is in the basement.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-dative',
      'gapfill',
      meta(
        'gefallen, passen, stehen',
        'Clothes and opinions need the dative: mir, dir, ihm …',
        ['grammar', 'dative', 'object-pronouns', 'clothing'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Die Jacke gefällt ___. (me)',
            'mir',
            ['mir', 'mich', 'ich', 'meine'],
            'I like the jacket.',
            'gefallen takes the dative.',
          ),
          gap(
            'g2',
            'Die Hose passt ___ nicht. (him)',
            'ihm',
            ['ihm', 'ihn', 'er', 'sein'],
            'The trousers do not fit him.',
            'passen takes the dative.',
          ),
          gap(
            'g3',
            'Das Kleid steht ___ gut. (you, informal)',
            'dir',
            ['dir', 'dich', 'du', 'dein'],
            'The dress suits you.',
            'stehen (= to suit) takes the dative.',
          ),
          gap(
            'g4',
            'Wem gehört die Tasche? – Sie gehört ___. (her)',
            'ihr',
            ['ihr', 'sie', 'ihn', 'ihre'],
            'Whose bag is it? – It is hers.',
            'gehören takes the dative.',
          ),
          gap(
            'g5',
            'Gefallen ___ die Schuhe? (formal)',
            'Ihnen',
            ['Ihnen', 'Sie', 'Ihr', 'Ihre'],
            'Do you like the shoes?',
          ),
          gap(
            'g6',
            'Wie gefällt ___ der Mantel? (to us)',
            'uns',
            ['uns', 'wir', 'unser', 'euch'],
            'How do we like the coat?',
          ),
          gap(
            'g7',
            'Die Kinder lieben die Mütze. Sie steht ___ gut. (them)',
            'ihnen',
            ['ihnen', 'sie', 'ihm', 'ihr'],
            'The children love the hat. It suits them.',
          ),
          gap(
            'g8',
            'Der Pullover passt ___ nicht, er ist zu klein. (me)',
            'mir',
            ['mir', 'mich', 'ich', 'meiner'],
            'The jumper does not fit me, it is too small.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-accusative',
      'gapfill',
      meta(
        'ihn, sie, es, mich, dich …',
        'Replace the noun with an accusative pronoun.',
        ['grammar', 'accusative', 'object-pronouns', 'clothing'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'a1',
            'Wie findest du den Mantel? – Ich finde ___ schön.',
            'ihn',
            ['ihn', 'er', 'ihm', 'es'],
            'How do you find the coat? – I find it nice.',
            'der Mantel (masculine) → ihn.',
          ),
          gap(
            'a2',
            'Wie findest du die Hose? – Ich nehme ___.',
            'sie',
            ['sie', 'ihr', 'es', 'ihn'],
            'How do you find the trousers? – I will take them.',
            'die Hose (feminine) → sie.',
          ),
          gap(
            'a3',
            'Das Hemd ist toll. Ich kaufe ___.',
            'es',
            ['es', 'ihn', 'sie', 'ihm'],
            'The shirt is great. I will buy it.',
            'das Hemd (neuter) → es.',
          ),
          gap(
            'a4',
            'Die Schuhe sind teuer. Ich nehme ___ nicht.',
            'sie',
            ['sie', 'ihnen', 'es', 'ihn'],
            'The shoes are expensive. I will not take them.',
            'Plural → sie.',
          ),
          gap(
            'a5',
            'Das ist mein Bruder. Ich besuche ___ morgen.',
            'ihn',
            ['ihn', 'ihm', 'er', 'sie'],
            'That is my brother. I am visiting him tomorrow.',
          ),
          gap(
            'a6',
            'Kannst du ___ hören? (me)',
            'mich',
            ['mich', 'mir', 'ich', 'mein'],
            'Can you hear me?',
          ),
          gap(
            'a7',
            'Ich liebe ___. (you, informal)',
            'dich',
            ['dich', 'dir', 'du', 'dein'],
            'I love you.',
          ),
          gap(
            'a8',
            'Der Verkäufer fragt ___. (us)',
            'uns',
            ['uns', 'wir', 'unser', 'unsere'],
            'The shop assistant asks us.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-comparison',
      'gapfill',
      meta(
        'gut, besser, am besten',
        'Compare: -er, am -sten – and the irregular ones.',
        ['grammar', 'comparison', 'clothing'],
        3,
        6,
      ),
      {
        items: [
          gap(
            'k1',
            'Die Jacke ist ___ als der Mantel. (billig)',
            'billiger',
            ['billiger', 'billig', 'am billigsten', 'mehr billig'],
            'The jacket is cheaper than the coat.',
            'Comparative: adjective + -er, then als.',
          ),
          gap(
            'k2',
            'Der Mantel ist ___ als die Jacke. (teuer)',
            'teurer',
            ['teurer', 'teuerer', 'teuer', 'am teuersten'],
            'The coat is more expensive than the jacket.',
            'teuer loses the e: teurer.',
          ),
          gap(
            'k3',
            'Das Kleid gefällt mir ___ als die Hose. (gut)',
            'besser',
            ['besser', 'guter', 'gut', 'am besten'],
            'I like the dress better than the trousers.',
            'gut – besser – am besten (irregular).',
          ),
          gap(
            'k4',
            'Von allen Hosen gefällt mir diese ___.',
            'am besten',
            ['am besten', 'am gutesten', 'besser', 'gut'],
            'Of all trousers I like this pair best.',
            'Superlative: am + -sten.',
          ),
          gap(
            'k5',
            'Ich trage ___ Jeans als Kleider. (gern)',
            'lieber',
            ['lieber', 'gerner', 'am liebsten', 'mehr gern'],
            'I prefer wearing jeans to dresses.',
            'gern – lieber – am liebsten.',
          ),
          gap(
            'k6',
            'Aber ___ trage ich Sportkleidung. (gern)',
            'am liebsten',
            ['am liebsten', 'am gernsten', 'lieber', 'liebsten'],
            'But I like wearing sportswear best.',
          ),
          gap(
            'k7',
            'Mein Bruder ist ___ als ich. (groß)',
            'größer',
            ['größer', 'großer', 'am größten', 'groß'],
            'My brother is taller than me.',
            'Short adjectives often add an umlaut: groß – größer.',
          ),
          gap(
            'k8',
            'Im Winter ist es ___ als im Herbst. (kalt)',
            'kälter',
            ['kälter', 'kalter', 'am kältesten', 'kalt'],
            'In winter it is colder than in autumn.',
          ),
          gap(
            'k9',
            'Die Schuhe sind so teuer ___ die Stiefel.',
            'wie',
            ['wie', 'als', 'wenn', 'denn'],
            'The shoes are as expensive as the boots.',
            'so … wie (equal), comparative + als (unequal).',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Opinions in the shop',
        'Build sentences for shopping and giving your opinion.',
        ['grammar', 'word-order', 'clothing', 'dative'],
        2,
        6,
      ),
      {
        items: [
          sent('s1', 'I like the jacket.', ['Die', 'Jacke', 'gefällt', 'mir.'], {
            alsoAccept: ['Mir gefällt die Jacke.'],
            explanation: 'gefallen + dative: the thing is the subject.',
          }),
          sent('s2', 'The trousers do not fit me.', ['Die', 'Hose', 'passt', 'mir', 'nicht.']),
          sent('s3', 'Can I try on the shoes?', ['Kann', 'ich', 'die', 'Schuhe', 'anprobieren?']),
          sent('s4', 'It suits you very well.', ['Das', 'steht', 'dir', 'sehr', 'gut.']),
          sent('s5', 'I will take it. (the coat)', ['Ich', 'nehme', 'ihn.'], {
            extra: ['es', 'sie'],
            explanation: 'der Mantel → ihn.',
          }),
          sent('s6', 'The shirt is cheaper than the jacket.', [
            'Das',
            'Hemd',
            'ist',
            'billiger',
            'als',
            'die',
            'Jacke.',
          ]),
          sent('s7', 'I like red best.', ['Rot', 'gefällt', 'mir', 'am', 'besten.'], {
            alsoAccept: ['Mir gefällt Rot am besten.'],
          }),
          sent(
            's8',
            'The children’s department is on the second floor.',
            ['Die', 'Kinderabteilung', 'ist', 'im', 'zweiten', 'Stock.'],
            {
              explanation: 'im (= in dem) + ordinal with -en.',
            },
          ),
          sent('s9', 'Do you have this in size M?', ['Haben', 'Sie', 'das', 'in', 'Größe', 'M?']),
        ],
      },
    ),

    activity(
      U,
      'market-clothes',
      'market',
      meta(
        'At the clothes shop',
        'Fill the basket for each customer, then work out the price.',
        ['communication', 'clothing', 'shopping', 'numbers'],
        2,
        6,
      ),
      {
        products: [
          { id: 'tshirt', name: 'T-Shirt', emoji: '👕', priceCents: 1500 },
          { id: 'hose', name: 'Hose', emoji: '👖', priceCents: 4990 },
          { id: 'jacke', name: 'Jacke', emoji: '🧥', priceCents: 7990 },
          { id: 'schuhe', name: 'Schuhe', emoji: '👟', priceCents: 5990 },
          { id: 'socken', name: 'Socken', emoji: '🧦', priceCents: 590 },
          { id: 'muetze', name: 'Mütze', emoji: '🧢', priceCents: 1290 },
        ],
        orders: [
          {
            id: 'o1',
            request: 'Ich nehme zwei T-Shirts, bitte.',
            translation: 'I’ll take two T-shirts, please.',
            items: [{ product: 'tshirt', qty: 2 }],
          },
          {
            id: 'o2',
            request: 'Ich möchte eine Hose und ein Paar Socken.',
            translation: 'I would like trousers and a pair of socks.',
            items: [
              { product: 'hose', qty: 1 },
              { product: 'socken', qty: 1 },
            ],
          },
          {
            id: 'o3',
            request: 'Ich nehme die Jacke und die Mütze.',
            translation: 'I’ll take the jacket and the hat.',
            items: [
              { product: 'jacke', qty: 1 },
              { product: 'muetze', qty: 1 },
            ],
          },
          {
            id: 'o4',
            request: 'Ich brauche Schuhe und drei Paar Socken.',
            translation: 'I need shoes and three pairs of socks.',
            items: [
              { product: 'schuhe', qty: 1 },
              { product: 'socken', qty: 3 },
            ],
          },
          {
            id: 'o5',
            request: 'Ich nehme drei T-Shirts und eine Mütze.',
            translation: 'I’ll take three T-shirts and a hat.',
            items: [
              { product: 'tshirt', qty: 3 },
              { product: 'muetze', qty: 1 },
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues-shop',
      'dialogue',
      meta(
        'Department store dialogues',
        'Find the department, try something on, give your opinion.',
        ['communication', 'clothing', 'dative', 'object-pronouns'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'info',
            title: 'At the information desk',
            emoji: '🏬',
            setting: 'You are looking for the shoe department.',
            turns: [
              you(
                'Entschuldigung, wo finde ich die Schuhabteilung?',
                [
                  'Entschuldigung, wohin finde ich die Schuhabteilung?',
                  'To ask for a place use wo.',
                ],
                [
                  'Entschuldigung, wo ist die Schuhabteilung finden?',
                  'Either Wo ist …? or Wo finde ich …?',
                ],
              ),
              say(
                'Mitarbeiterin',
                'Im zweiten Stock, neben dem Aufzug.',
                'On the second floor, next to the lift.',
              ),
              you(
                'Danke! Und wo ist die Kasse?',
                ['Danke! Und wer ist die Kasse?', 'Wer asks about a person. For a place: Wo?'],
                ['Danke! Und wann ist die Kasse?', 'Wann asks about time.'],
              ),
            ],
          },
          {
            id: 'tryon',
            title: 'Trying on a jacket',
            emoji: '🧥',
            setting: 'A shop assistant helps you.',
            turns: [
              say('Verkäuferin', 'Kann ich Ihnen helfen?', 'Can I help you?'),
              you(
                'Ja, ich suche eine Jacke in Größe M.',
                ['Ja, ich suche einen Jacke in Größe M.', 'die Jacke is feminine: eine Jacke.'],
                ['Ja, ich bin eine Jacke in Größe M.', 'You are looking for a jacket: Ich suche …'],
              ),
              say(
                'Verkäuferin',
                'Hier ist eine blaue Jacke. Möchten Sie sie anprobieren?',
                'Here is a blue jacket. Would you like to try it on?',
              ),
              you(
                'Ja, gern. Wo ist die Umkleidekabine?',
                ['Ja, gern. Wohin ist die Umkleidekabine?', 'Wo? asks where something is.'],
                ['Ja, gern. Wann ist die Umkleidekabine?', 'Wann asks about time.'],
              ),
              say('Verkäuferin', 'Wie gefällt Ihnen die Jacke?', 'How do you like the jacket?'),
              you(
                'Sie gefällt mir, aber sie ist zu groß.',
                ['Sie gefällt mich, aber sie ist zu groß.', 'gefallen takes the dative: mir.'],
                ['Er gefällt mir, aber er ist zu groß.', 'die Jacke → sie.'],
              ),
              say(
                'Verkäuferin',
                'Größe S passt Ihnen bestimmt besser.',
                'Size S will surely fit you better.',
              ),
              you(
                'Ja, ich nehme sie.',
                ['Ja, ich nehme ihn.', 'die Jacke → sie.'],
                ['Ja, ich nehme ihr.', 'nehmen takes the accusative: sie.'],
              ),
            ],
          },
          {
            id: 'friend',
            title: 'Asking a friend',
            emoji: '🛍️',
            setting: 'You shop together with Tom.',
            turns: [
              say('Tom', 'Wie findest du den Mantel?', 'How do you find the coat?'),
              you(
                'Ich finde ihn zu teuer, aber er gefällt mir.',
                [
                  'Ich finde er zu teuer, aber er gefällt mir.',
                  'finden takes the accusative: den Mantel → ihn.',
                ],
                [
                  'Ich finde ihm zu teuer, aber er gefällt mir.',
                  'finden + accusative: ihn, not ihm.',
                ],
              ),
              say('Tom', 'Und die Jacke?', 'And the jacket?'),
              you(
                'Die Jacke ist billiger als der Mantel. Ich nehme sie.',
                [
                  'Die Jacke ist billig als der Mantel. Ich nehme sie.',
                  'Comparative: billiger als.',
                ],
                [
                  'Die Jacke ist billiger wie der Mantel. Ich nehme sie.',
                  'After a comparative use als, not wie.',
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
        'Clothes blitz',
        'Dative, accusative pronouns and comparison – true or false?',
        ['grammar', 'dative', 'comparison'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Die Jacke gefällt mir.', true),
          tf('b2', 'Die Jacke gefällt mich.', false, 'gefallen + dative: mir.'),
          tf('b3', 'Der Mantel ist teuer. Ich nehme ihn nicht.', true),
          tf('b4', 'Der Mantel ist teuer. Ich nehme er nicht.', false, 'Accusative: ihn.'),
          tf('b5', 'Die Hose passt ihm nicht.', true),
          tf('b6', 'Das Kleid steht dich gut.', false, 'stehen + dative: dir.'),
          tf('b7', 'Mein Bruder ist größer als ich.', true),
          tf('b8', 'Mein Bruder ist größer wie ich.', false, 'comparative + als'),
          tf('b9', 'Dieses Hemd gefällt mir am besten.', true),
          tf('b10', 'Dieses Hemd gefällt mir am gutesten.', false, 'gut – besser – am besten.'),
          tf('b11', 'Ich trage lieber Jeans.', true),
          tf('b12', 'Die Schuhabteilung ist im zweiten Stock.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Clothes, opinions, pronouns and comparison in one final round.',
        ['vocabulary', 'grammar', 'clothing'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Die Hose passt ___ nicht. (him)', 'ihm', ['ihn', 'er', 'sein']),
          q('c2', 'Wie findest du die Jacke? – Ich nehme ___.', 'sie', ['ihr', 'es', 'ihn']),
          q('c3', 'Das Hemd ist toll. Ich kaufe ___.', 'es', ['ihn', 'sie', 'ihm']),
          q('c4', 'Der Mantel ist ___ als die Jacke. (teuer)', 'teurer', [
            'teuerer',
            'teuer',
            'am teuersten',
          ]),
          q('c5', 'Ich trage ___ Jeans als Kleider. (gern)', 'lieber', [
            'gerner',
            'am liebsten',
            'mehr gern',
          ]),
          q('c6', 'Das Kleid steht ___ gut. (you, informal)', 'dir', ['dich', 'du', 'dein']),
          q('c7', 'Die Schuhe sind so teuer ___ die Stiefel.', 'wie', ['als', 'wenn', 'denn']),
          q(
            'c8',
            'Der Pullover ist zu klein. Er ___ mir nicht.',
            'passt',
            ['steht', 'gefällt', 'gehört'],
            'passen = to fit.',
          ),
          q('c9', 'Die Kinderabteilung ist im ___ Stock. (3.)', 'dritten', [
            'dritte',
            'drei',
            'dritt',
          ]),
          q('c10', 'Where do you pay in a department store?', 'an der Kasse', [
            'in der Umkleidekabine',
            'im Aufzug',
            'am Eingang',
          ]),
        ],
      },
    ),
  ],
};
