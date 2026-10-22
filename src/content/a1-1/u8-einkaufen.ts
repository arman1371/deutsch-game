import { activity, byDe, flashcards, memory, quizEmoji, unit, vocabList } from '../builders';
import { conjugate } from '@/lib/german/conjugation';
import { formatPrice, priceToGerman } from '@/lib/german/numbers';
import type { UnitContent } from './types';

const U = 'a1-1-einkaufen';

const food = vocabList(U, 'Food & drinks', [
  ['Brot', 'bread', '🍞', 'das', 'Brote'],
  ['Brötchen', 'bread roll', '🥖', 'das', 'Brötchen'],
  ['Butter', 'butter', '🧈', 'die'],
  ['Käse', 'cheese', '🧀', 'der'],
  ['Wurst', 'sausage', '🌭', 'die', 'Würste'],
  ['Ei', 'egg', '🥚', 'das', 'Eier'],
  ['Milch', 'milk', '🥛', 'die'],
  ['Wasser', 'water', '💧', 'das'],
  ['Saft', 'juice', '🧃', 'der', 'Säfte'],
  ['Kaffee', 'coffee', '☕', 'der'],
  ['Tee', 'tea', '🍵', 'der'],
  ['Bier', 'beer', '🍺', 'das'],
  ['Apfel', 'apple', '🍎', 'der', 'Äpfel'],
  ['Banane', 'banana', '🍌', 'die', 'Bananen'],
  ['Orange', 'orange', '🍊', 'die', 'Orangen'],
  ['Tomate', 'tomato', '🍅', 'die', 'Tomaten'],
  ['Kartoffel', 'potato', '🥔', 'die', 'Kartoffeln'],
  ['Reis', 'rice', '🍚', 'der'],
  ['Nudeln', 'noodles / pasta', '🍝', 'die'],
  ['Fleisch', 'meat', '🥩', 'das'],
  ['Fisch', 'fish', '🐟', 'der', 'Fische'],
  ['Kuchen', 'cake', '🍰', 'der', 'Kuchen'],
  ['Obst', 'fruit', '🍇', 'das'],
  ['Gemüse', 'vegetables', '🥦', 'das'],
]);

const shopping = vocabList(U, 'Shops, quantities & prices', [
  ['der Supermarkt', 'supermarket', '🏪', 'der', 'Supermärkte'],
  ['die Bäckerei', 'bakery', '🥐', 'die', 'Bäckereien'],
  ['die Metzgerei', 'butcher’s', '🥩', 'die', 'Metzgereien'],
  ['der Markt', 'market', '🧺', 'der', 'Märkte'],
  ['das Kilo', 'kilo', '⚖️', 'das'],
  ['der Liter', 'litre', '🧴', 'der'],
  ['die Flasche', 'bottle', '🍾', 'die', 'Flaschen'],
  ['die Packung', 'pack', '📦', 'die', 'Packungen'],
  ['das Stück', 'piece', '🧩', 'das', 'Stücke'],
  ['der Euro', 'euro', '💶', 'der', 'Euro'],
  ['der Cent', 'cent', '🪙', 'der', 'Cent'],
  ['Was kostet das?', 'How much is that?', '🏷️'],
  ['Das macht …', 'That comes to …', '🧾'],
  ['Ich nehme …', 'I’ll take …', '🛒'],
  ['Ich möchte …', 'I would like …', '🙋'],
  ['Haben Sie …?', 'Do you have …?', '❓'],
  ['Sonst noch etwas?', 'Anything else?', '➕'],
  ['Das ist alles.', 'That is all.', '✅'],
  ['teuer', 'expensive', '💸'],
  ['billig', 'cheap', '🤑'],
]);

const vocab = [...food, ...shopping];

const priceListen = (cents: number, wrong: number[]) => ({
  id: `pr-${cents}`,
  speak: `Das macht ${priceToGerman(cents)}.`,
  transcript: `${priceToGerman(cents)} = ${formatPrice(cents)}`,
  answer: formatPrice(cents),
  options: [cents, ...wrong].map(formatPrice),
});

const gap = (
  id: string,
  text: string,
  answer: string,
  options: string[],
  translation: string,
  explanation?: string,
) => ({
  id,
  text,
  answer,
  options,
  translation,
  ...(explanation ? { explanation } : {}),
});

const genderItems = [
  'Brot',
  'Butter',
  'Käse',
  'Wurst',
  'Ei',
  'Milch',
  'Wasser',
  'Saft',
  'Kaffee',
  'Banane',
  'Fleisch',
  'Fisch',
]
  .map((de) => byDe(food, de)[0]!)
  .map((v) => ({
    id: v.id,
    text: v.de,
    bucket: v.article!,
    speak: `${v.article} ${v.de}`,
    emoji: v.emoji,
  }));

export const einkaufen: UnitContent = {
  unit: unit({
    id: U,
    order: 8,
    title: 'Einkaufen',
    subtitle: 'Food, drinks, quantities and prices',
    emoji: '🛒',
    goals: [
      'Name food, drinks and shops',
      'Ask for things and for prices',
      'Say how much you want and pay',
    ],
    grammar: [
      'der / die / das and ein / eine',
      'kein / keine',
      'The accusative case (den, einen, keinen)',
      'Plural of nouns',
    ],
    vocabFields: ['Food & drinks', 'Shops, quantities & prices'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-food',
      'flashcards',
      {
        title: 'Food & drinks cards',
        description: 'Learn the words – always with der, die or das!',
        tags: ['vocabulary', 'food-drinks', 'articles'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(food.slice(0, 16)),
    ),

    activity(
      U,
      'quiz-food',
      'quiz',
      {
        title: 'What is this?',
        description: 'Name the food or drink – with the right article.',
        tags: ['vocabulary', 'food-drinks', 'articles'],
        difficulty: 1,
        estMinutes: 3,
      },
      { questions: quizEmoji(food.slice(0, 14), food).questions },
    ),

    activity(
      U,
      'memory-food',
      'memory',
      {
        title: 'Shopping memory',
        description: 'Match the German word with the picture.',
        tags: ['vocabulary', 'food-drinks'],
        difficulty: 1,
        estMinutes: 3,
      },
      memory(
        byDe(food, 'Apfel', 'Käse', 'Milch', 'Brot', 'Tomate', 'Fisch', 'Ei', 'Banane'),
        'emoji',
      ),
    ),

    activity(
      U,
      'sort-gender',
      'sortit',
      {
        title: 'der, die or das?',
        description: 'Every noun has a gender. Sort the food into three boxes.',
        tags: ['grammar', 'articles', 'food-drinks'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'Which article does the word take?',
        buckets: [
          { id: 'der', label: 'der', emoji: '🟦' },
          { id: 'die', label: 'die', emoji: '🟥' },
          { id: 'das', label: 'das', emoji: '🟩' },
        ],
        items: genderItems,
      },
    ),

    activity(
      U,
      'sort-shops',
      'sortit',
      {
        title: 'Where do you buy it?',
        description: 'Bakery, butcher’s or market?',
        tags: ['vocabulary', 'food-drinks', 'shopping'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        instruction: 'In which shop do you buy this?',
        buckets: [
          { id: 'baeckerei', label: 'Bäckerei', emoji: '🥐' },
          { id: 'metzgerei', label: 'Metzgerei', emoji: '🥩' },
          { id: 'markt', label: 'Markt', emoji: '🧺' },
        ],
        items: [
          { id: 'sh1', text: 'Brötchen', bucket: 'baeckerei', emoji: '🥖' },
          { id: 'sh2', text: 'Brot', bucket: 'baeckerei', emoji: '🍞' },
          { id: 'sh3', text: 'Kuchen', bucket: 'baeckerei', emoji: '🍰' },
          { id: 'sh4', text: 'Wurst', bucket: 'metzgerei', emoji: '🌭' },
          { id: 'sh5', text: 'Fleisch', bucket: 'metzgerei', emoji: '🥩' },
          { id: 'sh6', text: 'Apfel', bucket: 'markt', emoji: '🍎' },
          { id: 'sh7', text: 'Tomate', bucket: 'markt', emoji: '🍅' },
          { id: 'sh8', text: 'Banane', bucket: 'markt', emoji: '🍌' },
          { id: 'sh9', text: 'Kartoffel', bucket: 'markt', emoji: '🥔' },
        ],
      },
    ),

    activity(
      U,
      'gap-articles',
      'gapfill',
      {
        title: 'ein, eine, der, die, das',
        description: 'Choose the right article for each noun.',
        tags: ['grammar', 'articles', 'food-drinks'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          gap(
            'a1',
            'Das ist ___ Apfel.',
            'ein',
            ['ein', 'eine', 'einen', 'der'],
            'That is an apple.',
            'der Apfel → ein Apfel (nominative).',
          ),
          gap(
            'a2',
            'Das ist ___ Banane.',
            'eine',
            ['ein', 'eine', 'einen', 'das'],
            'That is a banana.',
            'die Banane → eine Banane.',
          ),
          gap(
            'a3',
            'Das ist ___ Brot.',
            'ein',
            ['ein', 'eine', 'einen', 'das'],
            'That is a loaf of bread.',
            'das Brot → ein Brot.',
          ),
          gap(
            'a4',
            '___ Käse ist lecker.',
            'Der',
            ['Der', 'Die', 'Das', 'Den'],
            'The cheese is tasty.',
          ),
          gap(
            'a5',
            '___ Milch ist kalt.',
            'Die',
            ['Der', 'Die', 'Das', 'Den'],
            'The milk is cold.',
          ),
          gap(
            'a6',
            '___ Wasser ist frisch.',
            'Das',
            ['Der', 'Die', 'Das', 'Den'],
            'The water is fresh.',
          ),
          gap(
            'a7',
            'Die Äpfel sind billig. ___ Äpfel sind rot.',
            'Die',
            ['Der', 'Die', 'Das', 'Den'],
            'The apples are red.',
            'The plural always uses “die”.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-accusative',
      'gapfill',
      {
        title: 'Accusative: den, einen',
        description:
          'After nehmen, kaufen, essen … masculine nouns change: der → den, ein → einen.',
        tags: ['grammar', 'accusative', 'articles', 'shopping'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          gap(
            'c1',
            'Ich nehme ___ Käse. (der Käse)',
            'den',
            ['der', 'den', 'dem', 'die'],
            'I’ll take the cheese.',
            'Masculine accusative: der → den.',
          ),
          gap(
            'c2',
            'Ich möchte ___ Apfel.',
            'einen',
            ['ein', 'eine', 'einen', 'einem'],
            'I would like an apple.',
            'Masculine accusative: ein → einen.',
          ),
          gap(
            'c3',
            'Ich kaufe ___ Brot.',
            'ein',
            ['ein', 'eine', 'einen', 'einer'],
            'I buy a loaf of bread.',
            'Neuter does not change: ein Brot.',
          ),
          gap(
            'c4',
            'Wir brauchen ___ Milch.',
            'eine',
            ['ein', 'eine', 'einen', 'einer'],
            'We need milk.',
            'Feminine does not change: eine Milch.',
          ),
          gap(
            'c5',
            'Er isst ___ Fisch.',
            'einen',
            ['ein', 'eine', 'einen', 'einem'],
            'He eats a fish.',
          ),
          gap(
            'c6',
            'Sie trinkt ___ Kaffee. (der Kaffee)',
            'den',
            ['der', 'den', 'dem', 'das'],
            'She drinks the coffee.',
          ),
          gap(
            'c7',
            'Ich nehme ___ Wasser. (das Wasser)',
            'das',
            ['das', 'den', 'der', 'dem'],
            'I’ll take the water.',
            'Only masculine nouns change in the accusative.',
          ),
          gap(
            'c8',
            'Wir kaufen ___ Tomaten. (the, plural)',
            'die',
            ['die', 'den', 'der', 'das'],
            'We buy the tomatoes.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-kein',
      'gapfill',
      {
        title: 'kein or keine?',
        description: 'Say what you do NOT have or want.',
        tags: ['grammar', 'negation', 'food-drinks'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          gap(
            'k1',
            'Ich habe ___ Brot.',
            'kein',
            ['kein', 'keine', 'keinen', 'nicht'],
            'I have no bread.',
            'Negative article: kein behaves like ein.',
          ),
          gap(
            'k2',
            'Wir haben ___ Eier.',
            'keine',
            ['kein', 'keine', 'keinen', 'nicht'],
            'We have no eggs.',
            'Plural → keine.',
          ),
          gap(
            'k3',
            'Ich trinke ___ Tee.',
            'keinen',
            ['kein', 'keine', 'keinen', 'nicht'],
            'I drink no tea.',
            'Masculine accusative: keinen.',
          ),
          gap(
            'k4',
            'Er isst ___ Fleisch.',
            'kein',
            ['kein', 'keine', 'keinen', 'nicht'],
            'He eats no meat.',
          ),
          gap(
            'k5',
            'Haben Sie ___ Milch?',
            'keine',
            ['kein', 'keine', 'keinen', 'nicht'],
            'Don’t you have milk?',
          ),
          gap(
            'k6',
            'Ich möchte ___ Käse.',
            'keinen',
            ['kein', 'keine', 'keinen', 'nicht'],
            'I do not want cheese.',
          ),
          gap(
            'k7',
            'Das ist ___ Apfel, das ist eine Orange.',
            'kein',
            ['kein', 'keine', 'keinen', 'nicht'],
            'That is not an apple, that is an orange.',
            'In “Das ist …” the noun stays nominative: kein Apfel.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'At the shop',
        description: 'Build the sentences you need while shopping.',
        tags: ['grammar', 'word-order', 'shopping', 'accusative'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'I’ll take an apple.',
            words: ['Ich', 'nehme', 'einen', 'Apfel.'],
            extra: ['ein'],
            explanation: 'Apfel is masculine → einen in the accusative.',
          },
          {
            id: 's2',
            translation: 'How much is the cheese?',
            words: ['Was', 'kostet', 'der', 'Käse?'],
          },
          {
            id: 's3',
            translation: 'That comes to 3.50 euros.',
            words: ['Das', 'macht', 'drei', 'Euro', 'fünfzig.'],
          },
          {
            id: 's4',
            translation: 'Don’t you have any milk?',
            words: ['Haben', 'Sie', 'keine', 'Milch?'],
          },
          {
            id: 's5',
            translation: 'I would like a kilo of apples.',
            words: ['Ich', 'möchte', 'ein', 'Kilo', 'Äpfel.'],
          },
          { id: 's6', translation: 'Anything else?', words: ['Sonst', 'noch', 'etwas?'] },
          {
            id: 's7',
            translation: 'I buy the bread and the butter.',
            words: ['Ich', 'kaufe', 'das', 'Brot', 'und', 'die', 'Butter.'],
          },
          {
            id: 's8',
            translation: 'We drink water and no juice.',
            words: ['Wir', 'trinken', 'Wasser', 'und', 'keinen', 'Saft.'],
          },
        ],
      },
    ),

    activity(
      U,
      'conj-shopping',
      'conjugation',
      {
        title: 'nehmen, essen, kaufen',
        description: 'Verbs for shopping and eating – watch the vowel change!',
        tags: ['grammar', 'verb-conjugation', 'shopping'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          {
            id: 'nehmen',
            verb: 'nehmen',
            meaning: 'to take',
            forms: conjugate('nehmen'),
            blanks: ['ich', 'du', 'er/sie/es'],
          },
          {
            id: 'essen',
            verb: 'essen',
            meaning: 'to eat',
            forms: conjugate('essen'),
            blanks: ['du', 'er/sie/es', 'ihr'],
          },
          {
            id: 'kaufen',
            verb: 'kaufen',
            meaning: 'to buy',
            forms: conjugate('kaufen'),
            blanks: ['ich', 'du', 'wir'],
          },
          {
            id: 'trinken',
            verb: 'trinken',
            meaning: 'to drink',
            forms: conjugate('trinken'),
            blanks: ['er/sie/es', 'ihr', 'sie/Sie'],
          },
        ],
      },
    ),

    activity(
      U,
      'market-bakery',
      'market',
      {
        title: 'At the bakery',
        description: 'Fill the basket for each customer, then work out the price.',
        tags: ['communication', 'shopping', 'accusative', 'numbers'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        products: [
          { id: 'broetchen', name: 'Brötchen', emoji: '🥖', priceCents: 50 },
          { id: 'brot', name: 'Brot', emoji: '🍞', priceCents: 280 },
          { id: 'croissant', name: 'Croissant', emoji: '🥐', priceCents: 140 },
          { id: 'kuchen', name: 'Kuchen', emoji: '🍰', priceCents: 320 },
          { id: 'brezel', name: 'Brezel', emoji: '🥨', priceCents: 120 },
        ],
        orders: [
          {
            id: 'o1',
            request: 'Ich nehme zwei Brötchen, bitte.',
            translation: 'I’ll take two bread rolls, please.',
            items: [{ product: 'broetchen', qty: 2 }],
          },
          {
            id: 'o2',
            request: 'Ich möchte ein Brot und ein Croissant.',
            translation: 'I would like a loaf of bread and a croissant.',
            items: [
              { product: 'brot', qty: 1 },
              { product: 'croissant', qty: 1 },
            ],
          },
          {
            id: 'o3',
            request: 'Ich nehme drei Brötchen und eine Brezel.',
            translation: 'I’ll take three rolls and a pretzel.',
            items: [
              { product: 'broetchen', qty: 3 },
              { product: 'brezel', qty: 1 },
            ],
          },
          {
            id: 'o4',
            request: 'Ich möchte einen Kuchen und zwei Brezeln.',
            translation: 'I would like a cake and two pretzels.',
            items: [
              { product: 'kuchen', qty: 1 },
              { product: 'brezel', qty: 2 },
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'market-grocery',
      'market',
      {
        title: 'At the market',
        description: 'Fruit, milk and cheese: more items, bigger totals.',
        tags: ['communication', 'shopping', 'accusative', 'numbers'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        products: [
          { id: 'apfel', name: 'Apfel', emoji: '🍎', priceCents: 60 },
          { id: 'banane', name: 'Banane', emoji: '🍌', priceCents: 30 },
          { id: 'tomate', name: 'Tomate', emoji: '🍅', priceCents: 40 },
          { id: 'milch', name: 'Milch', emoji: '🥛', priceCents: 110 },
          { id: 'kaese', name: 'Käse', emoji: '🧀', priceCents: 250 },
          { id: 'ei', name: 'Ei', emoji: '🥚', priceCents: 30 },
        ],
        orders: [
          {
            id: 'o1',
            request: 'Ich nehme zwei Äpfel und eine Milch.',
            translation: 'I’ll take two apples and a milk.',
            items: [
              { product: 'apfel', qty: 2 },
              { product: 'milch', qty: 1 },
            ],
          },
          {
            id: 'o2',
            request: 'Ich möchte drei Bananen, bitte.',
            translation: 'I would like three bananas, please.',
            items: [{ product: 'banane', qty: 3 }],
          },
          {
            id: 'o3',
            request: 'Ich nehme einen Käse und vier Tomaten.',
            translation: 'I’ll take a cheese and four tomatoes.',
            items: [
              { product: 'kaese', qty: 1 },
              { product: 'tomate', qty: 4 },
            ],
          },
          {
            id: 'o4',
            request: 'Ich möchte eine Milch und sechs Eier.',
            translation: 'I would like a milk and six eggs.',
            items: [
              { product: 'milch', qty: 1 },
              { product: 'ei', qty: 6 },
            ],
          },
          {
            id: 'o5',
            request: 'Ich nehme fünf Äpfel und zwei Bananen.',
            translation: 'I’ll take five apples and two bananas.',
            items: [
              { product: 'apfel', qty: 5 },
              { product: 'banane', qty: 2 },
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'listen-prices',
      'listen',
      {
        title: 'How much is it?',
        description: 'Listen to the cashier and pick the price.',
        tags: ['listening', 'shopping', 'numbers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          priceListen(350, [530, 305, 315]),
          priceListen(1280, [1820, 1208, 280]),
          priceListen(99, [90, 199, 9]),
          priceListen(2000, [200, 2200, 1200]),
          priceListen(745, [475, 754, 705]),
          priceListen(160, [106, 116, 60]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Shopping conversations',
        description: 'At the bakery and at the checkout.',
        tags: ['communication', 'shopping', 'accusative'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'bakery',
            title: 'At the bakery',
            emoji: '🥐',
            setting: 'You want bread rolls and a coffee.',
            turns: [
              {
                kind: 'npc',
                who: 'Verkäuferin',
                text: 'Guten Morgen! Was darf es sein?',
                translation: 'Good morning! What can I get you?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Guten Morgen! Ich möchte zwei Brötchen, bitte.', correct: true },
                  {
                    text: 'Guten Abend! Ich bin zwei Brötchen.',
                    correct: false,
                    feedback: 'It is morning, and you want to buy rolls, not be them!',
                  },
                  {
                    text: 'Ich zwei Brötchen möchte.',
                    correct: false,
                    feedback: 'The verb comes second: Ich möchte …',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Verkäuferin',
                text: 'Sonst noch etwas?',
                translation: 'Anything else?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ja, einen Kaffee, bitte.', correct: true },
                  {
                    text: 'Ja, ein Kaffee, bitte.',
                    correct: false,
                    feedback: 'Kaffee is masculine → accusative: einen Kaffee.',
                  },
                  {
                    text: 'Ja, eine Kaffee, bitte.',
                    correct: false,
                    feedback: 'Der Kaffee is masculine – not eine.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Verkäuferin',
                text: 'Das macht vier Euro zwanzig.',
                translation: 'That comes to 4.20 euros.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Bitte schön. Auf Wiedersehen!', correct: true },
                  { text: 'Gute Nacht!', correct: false, feedback: 'It is the morning.' },
                  { text: 'Wie heißt du?', correct: false, feedback: 'Pay and say goodbye.' },
                ],
              },
            ],
          },
          {
            id: 'checkout',
            title: 'At the supermarket',
            emoji: '🏪',
            setting: 'You look for milk.',
            turns: [
              {
                kind: 'you',
                options: [
                  { text: 'Entschuldigung, haben Sie Milch?', correct: true },
                  {
                    text: 'Entschuldigung, hast du Milch? (to a staff member)',
                    correct: false,
                    feedback: 'Use the formal “Sie” with staff.',
                  },
                  {
                    text: 'Entschuldigung, ich bin Milch.',
                    correct: false,
                    feedback: 'You want to ask for milk.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Mitarbeiter',
                text: 'Ja, die Milch ist dort. Die Flasche kostet einen Euro zehn.',
                translation: 'Yes, the milk is over there. A bottle costs 1.10.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Danke! Ich nehme eine Flasche.', correct: true },
                  {
                    text: 'Danke! Ich nehme einen Flasche.',
                    correct: false,
                    feedback: 'Die Flasche is feminine → eine Flasche.',
                  },
                  {
                    text: 'Danke! Ich nehme keine Euro.',
                    correct: false,
                    feedback: 'You want one bottle.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      {
        title: 'Shopping blitz',
        description: 'Articles, kein/keine and the accusative – true or false?',
        tags: ['grammar', 'articles', 'negation', 'accusative'],
        difficulty: 3,
        estMinutes: 2,
      },
      {
        seconds: 60,
        statements: [
          { id: 'b1', text: 'Ich nehme einen Apfel.', isTrue: true },
          {
            id: 'b2',
            text: 'Ich nehme ein Apfel.',
            isTrue: false,
            explanation: 'der Apfel → einen Apfel',
          },
          { id: 'b3', text: 'Ich habe keine Milch.', isTrue: true },
          {
            id: 'b4',
            text: 'Wir haben kein Eier.',
            isTrue: false,
            explanation: 'Plural → keine Eier',
          },
          { id: 'b5', text: 'Die Banane ist gelb.', isTrue: true },
          { id: 'b6', text: 'Der Brot ist frisch.', isTrue: false, explanation: 'das Brot' },
          { id: 'b7', text: 'Ich trinke keinen Tee.', isTrue: true },
          { id: 'b8', text: 'Sie kauft eine Tomate.', isTrue: true },
          {
            id: 'b9',
            text: 'Er isst eine Fisch.',
            isTrue: false,
            explanation: 'der Fisch → einen Fisch',
          },
          { id: 'b10', text: 'Ich möchte das Wasser.', isTrue: true },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Food, articles, accusative and prices in one final round.',
        tags: ['vocabulary', 'grammar', 'shopping'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Ich nehme ___ Käse. (der Käse)',
            options: ['den', 'der', 'dem', 'das'],
            answer: 'den',
          },
          {
            id: 'c2',
            prompt: 'Which article? ___ Milch',
            options: ['die', 'der', 'das', 'den'],
            answer: 'die',
          },
          {
            id: 'c3',
            prompt: 'Wir haben ___ Brot.',
            options: ['kein', 'keine', 'keinen', 'nicht'],
            answer: 'kein',
          },
          {
            id: 'c4',
            prompt: '3,50 € =',
            options: [
              'drei Euro fünfzig',
              'dreißig Euro fünf',
              'fünf Euro dreißig',
              'dreizehn Euro',
            ],
            answer: 'drei Euro fünfzig',
          },
          {
            id: 'c5',
            prompt: 'Which sentence is correct?',
            options: [
              'Ich möchte einen Saft.',
              'Ich möchte ein Saft.',
              'Ich möchte eine Saft.',
              'Ich einen Saft möchte.',
            ],
            answer: 'Ich möchte einen Saft.',
          },
          {
            id: 'c6',
            prompt: 'You want to know the price. You ask:',
            options: ['Was kostet das?', 'Wie heißt das?', 'Wo wohnst du?', 'Wie spät ist es?'],
            answer: 'Was kostet das?',
          },
          {
            id: 'c7',
            prompt: 'Where do you buy Brötchen?',
            options: ['in der Bäckerei', 'in der Metzgerei', 'in der Schule', 'in der Apotheke'],
            answer: 'in der Bäckerei',
          },
          {
            id: 'c8',
            prompt: 'Plural of “der Apfel”:',
            options: ['die Äpfel', 'die Apfels', 'die Apfeln', 'die Apfele'],
            answer: 'die Äpfel',
          },
        ],
      },
    ),
  ],
};
