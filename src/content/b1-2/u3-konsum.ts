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

const U = 'b1-2-konsum';

const consumer = vocabList(U, 'Consumption & consumer rights', [
  ['Verbraucherzentrale', 'consumer advice centre', '🏛️', 'die', 'Verbraucherzentralen'],
  ['Schadensersatz', 'compensation for damages', '💶', 'der'],
  ['Beleg', 'receipt, proof', '🧾', 'der', 'Belege'],
  ['Produkttest', 'product test', '🧪', 'der', 'Produkttests'],
  ['Siegel', 'label, seal (of quality)', '🏅', 'das', 'Siegel'],
  ['Inhaltsstoff', 'ingredient', '🧴', 'der', 'Inhaltsstoffe'],
  ['Hautausschlag', 'skin rash', '🔴', 'der', 'Hautausschläge'],
  ['Lieferkette', 'supply chain', '🚢', 'die', 'Lieferketten'],
  ['Globalisierung', 'globalisation', '🌐', 'die'],
  ['Wegwerfgesellschaft', 'throwaway society', '🗑️', 'die'],
  ['Massenware', 'mass-produced goods', '🏭', 'die'],
  ['verklagen', 'to sue', '⚖️'],
  ['veröffentlichen', 'to publish', '📰'],
]);

const opinions = vocabList(U, 'Arguing about consumption', [
  ['Ich verlange mein Geld zurück.', 'I demand my money back.', '💸'],
  ['Das lasse ich mir nicht gefallen.', 'I won’t put up with that.', '✋'],
  ['Qualität hat ihren Preis.', 'Quality has its price.', '💎'],
  ['Das ist reine Geldverschwendung.', 'That is a pure waste of money.', '🔥'],
  ['Man sollte bewusster einkaufen.', 'People should shop more consciously.', '🛒'],
  ['Ich finde es bedenklich, dass …', 'I find it worrying that …', '😟'],
]);

const vocab = [...consumer, ...opinions];

export const konsum: UnitContent = {
  unit: unitB12({
    id: U,
    order: 3,
    title: 'Konsum & Verbraucherrechte',
    subtitle: 'Product tests, consumer rights, compensation and global trade',
    emoji: '🛍️',
    goals: [
      'Understand a product test and a consumer warning',
      'Insist on your rights and ask for compensation',
      'Give your opinion on consumption and global trade',
    ],
    grammar: [
      'Partizip I as an adjective: steigende Preise, das lachende Kind, ein überzeugendes Argument.',
      'Partizip I or Partizip II? kochendes Wasser (is boiling) – gekochtes Wasser (has been boiled).',
    ],
    vocabFields: ['Consumption & consumer rights', 'Arguing about consumption'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-consumer',
      'flashcards',
      meta(
        'Consumption & consumer rights',
        'Verbraucherzentrale, Schadensersatz, Lieferkette – shopping with your eyes open.',
        ['vocabulary', 'consumer-rights'],
        1,
        5,
      ),
      flashcards(consumer),
    ),
    activity(
      U,
      'flash-opinions',
      'flashcards',
      meta(
        'Arguing about consumption',
        'Insist on your rights and give your opinion.',
        ['vocabulary', 'communication', 'consumer-rights'],
        1,
        4,
      ),
      flashcards(opinions),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Consumer words', 'Name what you see.', ['vocabulary', 'consumer-rights'], 1, 4),
      quizEmoji(
        byDe(
          consumer,
          'Beleg',
          'Produkttest',
          'Siegel',
          'Hautausschlag',
          'Lieferkette',
          'Wegwerfgesellschaft',
          'Massenware',
          'verklagen',
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
        ['listening', 'consumer-rights'],
        2,
        4,
      ),
      listen(opinions),
    ),
    activity(
      U,
      'spell-consumer',
      'spell',
      meta(
        'Spell the consumer words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'consumer-rights'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(consumer, 'Beleg', 'Siegel', 'verklagen'), 'unscramble').items,
          ...spell(byDe(consumer, 'Inhaltsstoff', 'Globalisierung', 'veröffentlichen'), 'type')
            .items,
          dictation('d1', 'Die Preise steigen immer weiter.', 'prices keep rising'),
          dictation('d2', 'Ich verlange mein Geld zurück.', 'I demand my money back'),
        ],
      },
    ),
    activity(
      U,
      'sort-partizip',
      'sortit',
      meta(
        'Happening now or already done?',
        'Partizip I (-end) = it is happening. Partizip II = it is finished.',
        ['grammar', 'participles-as-adjectives'],
        2,
        4,
      ),
      {
        instruction: 'Is it happening right now, or is it finished?',
        buckets: [
          { id: 'p1', label: 'passiert gerade (-end)', emoji: '▶️' },
          { id: 'p2', label: 'ist schon passiert', emoji: '⏹️' },
        ],
        items: sortItems('p', [
          ['kochendes Wasser', 'p1'],
          ['gekochtes Wasser', 'p2'],
          ['die steigenden Preise', 'p1'],
          ['die gestiegenen Preise', 'p2'],
          ['ein schlafendes Baby', 'p1'],
          ['ein verkauftes Produkt', 'p2'],
          ['die wachsende Nachfrage', 'p1'],
          ['der veröffentlichte Test', 'p2'],
        ]),
      },
    ),
    activity(
      U,
      'gap-partizip',
      'gapfill',
      meta(
        'Steigende Preise',
        'Partizip I before a noun takes adjective endings.',
        ['grammar', 'participles-as-adjectives'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'p1',
              'Viele Menschen ärgern sich über die ___ Preise. (steigen)',
              'steigenden',
              ['steigenden', 'steigende', 'steigend', 'gestiegen'],
              'Many people are annoyed about the rising prices.',
              'Partizip I = infinitive + d (steigend) + adjective ending.',
            ),
            {
              steigende:
                'After die (plural) in the accusative the ending is -en: die steigenden Preise.',
              steigend: 'Before a noun the participle needs an adjective ending: steigenden.',
              gestiegen: 'Partizip II is finished; the prices are rising now: steigenden.',
            },
          ),
          adjGap(
            'p2',
            'Die Firma reagiert auf die ___ Nachfrage.',
            'wachsend',
            'definite',
            'f',
            'acc',
            'The company reacts to the growing demand.',
          ),
          adjGap(
            'p3',
            'Das ist ein ___ Argument.',
            'überzeugend',
            'indefinite',
            'n',
            'nom',
            'That is a convincing argument.',
          ),
          adjGap(
            'p4',
            'Der Test hat ___ Ergebnisse gezeigt.',
            'folgend',
            'none',
            'pl',
            'acc',
            'The test showed the following results.',
          ),
          hint(
            gap(
              'p5',
              'Gießen Sie das ___ Wasser über den Tee.',
              'kochende',
              ['kochende', 'gekochte', 'kochend', 'kochenden'],
              'Pour the boiling water over the tea.',
              'The water is boiling right now: Partizip I.',
            ),
            {
              gekochte:
                'gekocht = it has been boiled (maybe cold now). For tea it must be boiling: kochende.',
              kochend: 'Before a noun the participle needs an ending: das kochende Wasser.',
              kochenden: 'After das (neuter, accusative) the ending is -e: das kochende Wasser.',
            },
          ),
          hint(
            gap(
              'p6',
              'Wegen des ___ Belegs bekomme ich mein Geld nicht zurück.',
              'fehlenden',
              ['fehlenden', 'fehlende', 'fehlendes', 'gefehlt'],
              'Because of the missing receipt I don’t get my money back.',
              'wegen + genitive: des fehlenden Belegs.',
            ),
            {
              fehlende: 'After des (genitive) the ending is always -en: des fehlenden Belegs.',
              fehlendes: 'After des (genitive) the ending is always -en.',
              gefehlt: 'The participle is used as an adjective: Partizip I + ending (fehlenden).',
            },
          ),
          adjGap(
            'p7',
            'Die Verbraucherzentrale warnt vor einer ___ Creme.',
            'reizend',
            'indefinite',
            'f',
            'dat',
            'The consumer centre warns about an irritating cream.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Rising prices, convincing arguments',
        'Build sentences with Partizip I.',
        ['grammar', 'word-order', 'participles-as-adjectives'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'Rising prices worry many people.', [
            'Steigende',
            'Preise',
            'machen',
            'vielen',
            'Menschen',
            'Sorgen.',
          ]),
          sent('s2', 'That is a convincing argument.', [
            'Das',
            'ist',
            'ein',
            'überzeugendes',
            'Argument.',
          ]),
          sent('s3', 'I demand my money back.', ['Ich', 'verlange', 'mein', 'Geld', 'zurück.']),
          sent('s4', 'The test was published yesterday.', [
            'Der',
            'Test',
            'wurde',
            'gestern',
            'veröffentlicht.',
          ]),
          sent('s5', 'People should shop more consciously.', [
            'Man',
            'sollte',
            'bewusster',
            'einkaufen.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-news',
      'listen',
      meta(
        'Consumer news',
        'Listen to the reports and pick what they say.',
        ['listening', 'consumer-rights', 'participles-as-adjectives'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Im aktuellen Produkttest sind sieben von zehn Sonnencremes durchgefallen.',
            'Seven out of ten sun creams failed the current product test.',
            [
              'Seven out of ten sun creams were rated very good.',
              'Only one sun cream was tested.',
              'The product test was about shampoo.',
            ],
          ),
          heard(
            'l2',
            'Nach der Gesichtscreme bekam sie einen Hautausschlag. Jetzt verlangt sie Schadensersatz.',
            'She got a rash from the cream and now wants compensation.',
            [
              'The cream cured her skin rash.',
              'She wants to buy more of the cream.',
              'She was paid compensation before using the cream.',
            ],
          ),
          heard(
            'l3',
            'Wegen der wachsenden Nachfrage gibt es immer mehr Produkte mit Bio-Siegel.',
            'Because demand is growing, there are more and more organic products.',
            [
              'Demand for organic products is falling.',
              'Organic labels are being banned.',
              'There are fewer organic products every year.',
            ],
          ),
          heard(
            'l4',
            'Viele T-Shirts haben eine lange Lieferkette: Baumwolle aus Indien, Nähen in Bangladesch, Verkauf in Europa.',
            'Many T-shirts travel through a long supply chain.',
            [
              'Most T-shirts are made entirely in Europe.',
              'T-shirts are only sold in India.',
              'Cotton is grown in Europe and sold in Asia.',
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
        'Standing up for your rights',
        'Complain about a harmful product and discuss buying habits.',
        ['communication', 'consumer-rights'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'rash',
            title: 'Ärger mit der Creme',
            emoji: '🧴',
            setting: 'A cream gave you a rash. You go back to the chemist’s.',
            turns: [
              say(
                'Verkäuferin',
                'Guten Tag, was kann ich für Sie tun?',
                'Hello, what can I do for you?',
              ),
              you(
                'Ich habe von dieser Creme einen Hautausschlag bekommen. Ich verlange mein Geld zurück.',
                [
                  'Ich habe von dieser Creme einen Hautausschlag bekommt. Ich verlange mein Geld zurück.',
                  'The participle of bekommen is bekommen.',
                ],
                ['Die Creme ist super, danke!', 'You want to complain, not to praise it.'],
              ),
              say(
                'Verkäuferin',
                'Das tut mir leid. Haben Sie den Beleg dabei?',
                'I am sorry about that. Do you have the receipt with you?',
              ),
              you('Ja, hier ist er. Und ich möchte, dass Sie den Hersteller informieren.', [
                'Ja, hier ist er. Und ich möchte, dass Sie informieren den Hersteller.',
                'dass sends the verb to the end: … den Hersteller informieren.',
              ]),
            ],
          },
          {
            id: 'opinion',
            title: 'Billig oder fair?',
            emoji: '👕',
            setting: 'Your friend Tim shows you three T-shirts for 5 euros each.',
            turns: [
              say(
                'Tim',
                'Schau mal, nur fünf Euro pro T-Shirt!',
                'Look, only five euros a T-shirt!',
              ),
              you('Ich finde es bedenklich, dass die Kleidung so billig ist. Wer hat sie genäht?', [
                'Ich finde es bedenklich, dass die Kleidung ist so billig. Wer hat sie genäht?',
                'In a dass-clause the verb goes to the end: … so billig ist.',
              ]),
              say(
                'Tim',
                'Keine Ahnung. Aber faire Kleidung ist so teuer.',
                'No idea. But fair clothes are so expensive.',
              ),
              you('Qualität hat ihren Preis. Ich kaufe lieber weniger, dafür bessere Sachen.', [
                'Qualität hat seinen Preis. Ich kaufe lieber weniger, dafür bessere Sachen.',
                'die Qualität is feminine: ihren Preis.',
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
        'Consumer blitz',
        'Partizip I and consumer words – true or false?',
        ['grammar', 'participles-as-adjectives'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Die steigenden Preise ärgern viele.', true),
          tf(
            'b2',
            'Die steigend Preise ärgern viele.',
            false,
            'Before a noun the participle needs an ending: steigenden.',
          ),
          tf('b3', 'Ein lachendes Kind ist ein Kind, das lacht.', true),
          tf(
            'b4',
            'Gekochtes Wasser kocht gerade.',
            false,
            'gekocht = it has been boiled; kochend = it is boiling now.',
          ),
          tf('b5', 'Partizip I bildet man mit Infinitiv + d.', true),
          tf('b6', 'Das Partizip I von „folgen“ ist „gefolgt“.', false, 'Partizip I: folgend.'),
          tf('b7', 'Ohne Beleg ist eine Reklamation oft schwierig.', true),
          tf(
            'b8',
            'Schadensersatz bekommt man, wenn man selbst etwas kaputt gemacht hat.',
            false,
            'You get compensation when someone else caused the damage.',
          ),
          tf('b9', 'Wer jemanden verklagt, geht vor Gericht.', true),
          tf(
            'b10',
            'In einer Wegwerfgesellschaft repariert man fast alles.',
            false,
            'In a throwaway society people throw things away instead.',
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
        'Consumer words, opinions and Partizip I in one round.',
        ['vocabulary', 'grammar', 'consumer-rights'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Wir haben ein ___ Problem. (wachsen)', 'wachsendes', [
              'wachsende',
              'gewachsenes',
              'wachsend',
            ]),
            {
              wachsende: 'ein + neuter noun (das Problem) in the accusative: wachsendes.',
              gewachsenes: 'The problem is growing now: Partizip I wachsendes.',
              wachsend: 'Before a noun the participle needs an ending.',
            },
            'participles-as-adjectives',
          ),
          hint(
            q('c2', 'Das Partizip I von „lachen“ ist …', 'lachend', [
              'gelacht',
              'lachte',
              'lachen',
            ]),
            {
              gelacht: 'gelacht is the Partizip II.',
              lachte: 'lachte is the Präteritum.',
              lachen: 'Partizip I = infinitive + d: lachend.',
            },
            'participles-as-adjectives',
          ),
          hint(
            q('c3', 'Bei ___ Musik kann ich nicht arbeiten. (stören)', 'störender', [
              'störende',
              'störendem',
              'gestörter',
            ]),
            {
              störende: 'bei + dative, feminine, no article: störender Musik.',
              störendem: '-em is for masculine and neuter; Musik is feminine: störender.',
              gestörter: 'The music is disturbing now: Partizip I störender.',
            },
            'participles-as-adjectives',
          ),
          q('c4', 'der Beleg', 'receipt, proof', [
            'label, seal (of quality)',
            'ingredient',
            'product test',
          ]),
          q('c5', 'verklagen', 'to sue', ['to publish', 'to complain', 'to throw away']),
          q('c6', 'die Lieferkette', 'supply chain', [
            'consumer advice centre',
            'globalisation',
            'mass-produced goods',
          ]),
          q(
            'c7',
            'A shop refuses to take back a faulty product. You say …',
            'Das lasse ich mir nicht gefallen.',
            ['Das gefällt mir sehr.', 'Qualität hat ihren Preis.', 'Das ist ein Schnäppchen.'],
          ),
          q('c8', 'der Schadensersatz', 'compensation for damages', [
            'skin rash',
            'receipt, proof',
            'supply chain',
          ]),
          q('c9', 'das Siegel', 'label, seal (of quality)', [
            'receipt, proof',
            'ingredient',
            'supply chain',
          ]),
          q(
            'c10',
            'You think something costs far too much for what it is. You say …',
            'Das ist reine Geldverschwendung.',
            [
              'Qualität hat ihren Preis.',
              'Man sollte bewusster einkaufen.',
              'Ich verlange mein Geld zurück.',
            ],
          ),
        ],
      },
    ),
  ],
};
